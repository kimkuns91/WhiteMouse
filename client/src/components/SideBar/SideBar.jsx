import './SideBar.css'

const SideBar = ({ sideBar, setSideBar })=>{
    return(
        <div className={
            !sideBar
            ? "SideBarWrap"
            : "SideBarWrap SideBarWrapActive"
        }>
            <div className="SideBar">

            </div>
            <div className="SideBarWhiteSpace" onClick={()=>{
                setSideBar(false)
            }}>

            </div>
        </div>
    )
}
export default SideBar