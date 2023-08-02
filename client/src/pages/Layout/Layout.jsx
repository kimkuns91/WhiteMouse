import { Outlet } from "react-router-dom"
import Header from "../../components/Common/Header"
import Footer from "../../components/Common/Footer"

const Layout = () => {
    return(
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
export default Layout