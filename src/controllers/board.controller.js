const db = require("../models");
const { board : Board } = db;
const moment = require("moment");

exports.create = async (req, res) => {
    const { category, title, content } = req.body
    const board = new Board({
        category : category,
        title : title,
        content : content,
        createdAt : moment().format("YYYY-MM-DD hh:mm:ss")
    })
    await board.save()
        .then(()=> {
                return res.status(200).json({ message : "Success"})
        })
        .catch(err => res.json(err))
}

exports.read = async (req, res) => {
    await Board.findOne({ _id: req.params.board_id })
        .then(result =>{
            res.json(result)
        })
        .catch((err)=>{
            res.json(err)
        })
}

exports.load = async (req, res) => {
    await Board.find({})
        .sort({"_id" : -1})
        // .sort("-createdAt")
        .then(result=>{
            res.json(result)
        })
        .catch((err)=>{
            res.json(err)
        })
}
exports.update = async (req, res) => {
    req.body.updatedAt = moment().format("YYYY-MM-DD hh:mm:ss");
    Board.findOneAndUpdate({ _id: req.params.board_id }, req.body)
        .then(()=>{
            res.status(200).json({ message : "updated" })
        })
        .catch((err)=>{
            res.json(err)
        })
}
exports.delete = async (req, res) => {
    await Board.deleteOne({ _id: req.params.board_id })
        .then(()=>{
            res.status(200).json({ message : "Success"})
            // res.status(204).end()
        })
        .catch((err)=>{
            res.json(err)
        })
}