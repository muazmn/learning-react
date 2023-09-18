// outlet is a identifier or a component that will grouping all pages, and outlet used when we navigate to other page, we want the context also will be rendered
import { Link, Outlet} from "react-router-dom";


function RootLayout() {
    return (
        <>
        <Link to='/'>Home</Link> | <Link to="/about">About</Link>
        {/* it means all pages those are children of this page, put in the element Outlet */}
        <Outlet/>
        </>
    )
}
export default RootLayout;
