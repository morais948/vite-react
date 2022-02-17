import {
    Link,
    Outlet
} from "react-router-dom"

function Layout() {
    return (
        <div className="m-2">
            <h4>Welcome to the website!</h4>
            <nav className="m-2">
                <Link to="exp1">Example one</Link> | {" "}
                <Link to="exp2">Example two</Link> | {" "}
                <Link to="adm">Dasboard</Link>
            </nav>
            <div className="container">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
