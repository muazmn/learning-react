// outlet is a identifier or a component that will grouping all pages, and outlet used when we navigate to other page, we want the context also will be rendered
import { NavLink, Outlet} from "react-router-dom";
import '../styles/index.css'


function RootLayout() {
    return (
        <>
        {/* use navlink if we want give effect for the active link, by default an active class is added to NavLink when is it active */}
        <NavLink to='/'>Home</NavLink> | <NavLink to='/blog'>Blog</NavLink> | <NavLink to="/about">About</NavLink>
        {/* it means all pages those are children of this page, put in the element Outlet */}
        <Outlet/>
        </>
    )
}
export default RootLayout;
