const moment = require("moment");

const db = require("../models");

const { user : User } = db;

exports.signin = async (req, res) => {
    const { id, password } = req.body
    await User.findOne({ id })
        .then(result =>{
            if(!result){
                return res.status(404).json('아이디가 없습니다.')
            }
            if(result.password !== password ){
                return res.status(404).json('비밀번호 오류')
            }
            const { id, nickname } = result
            return res.status(200).json({
                id,
                nickname,
                message : "Success"
            })
        })
        .catch((err)=>{
            res.json(err)
        })
}

exports.create = async (req, res) => {
    const { id, password, name, email } = req.body
    await User.findOne({ id })
        .then(result =>{
            if(result){
                return res.status(200).json({ message : '중복된 아이디입니다.'})
            } 
            const user = new User({
                id, 
                password, 
                name, 
                email,
                createdAt : moment().format("YYYY-MM-DD hh:mm:ss")
            })
            user.save()
                .then(()=> {
                        return res.status(200).json({ message : "Success"})
                })
                .catch(err => res.json(err))
        })
        .catch((err)=>{
            res.json(err)
        })
  
}

exports.read = async (req, res) => {
    const { id } = req.body
    await User.findOne({ id })
        .then(result =>{
            res.status(200).json(result)
        })
        .catch((err)=>{
            res.json(err)
        })
}

exports.update = async (req, res) => {
    const { id } = req.body
    req.body.updatedAt = moment().format("YYYY-MM-DD hh:mm:ss");
    await User.findOneAndUpdate({ id }, req.body)
        .then(()=>{
            res.status(200).json({ message : "Updated" })
        })
        .catch((err)=>{
            res.json(err)
        })
}

exports.delete = async (req, res) => {
    await User.deleteOne({ id })
        .then(()=>{
            res.status(200).json({ message : "Deleted"})
        })
        .catch((err)=>{
            res.json(err)
        })
}
exports.unique = async (req, res) => {
    const { id } = req.body
    await User.findOne({ id })
        .then(result =>{
            if(!result){
                return res.status(200).json({ message : '사용 가능한 아이디입니다.'})
            }
            if(result){
                return res.status(200).json({ message : '중복된 아이디입니다.'})
            } 
        })
        .catch((err)=>{
            res.json(err)
        })
}
exports.info = async (req, res) => {
    const { id } = req.body
    await User.findOne({ id })
        .then(result =>{
            const dataWithoutPassword = { ...result }
            delete dataWithoutPassword.password;

            console.log(dataWithoutPassword)
            // const { password, ...dataWithoutPassword } = result
            // console.log(dataWithoutPassword)
            // return res.status(200).json(dataWithoutPassword)
        })
        .catch((err)=>{
            res.json(err)
        })
}