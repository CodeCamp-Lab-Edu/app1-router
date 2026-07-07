import { NavLink, Outlet } from "react-router";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout-container">
      <header>
        <h1>My Website</h1>
      </header>

      <nav>
        <NavLink to="/">Home</NavLink> |&nbsp;
        <NavLink to="/about">About</NavLink> |&nbsp;
        <NavLink to="/contact">Contact</NavLink> |&nbsp;
        <NavLink to="/product">Product</NavLink>
      </nav>

      <hr />

      <main className="layout-content">
        <Outlet />
      </main>

      <footer>footer</footer>
    </div>
  );
}

export default Layout;
