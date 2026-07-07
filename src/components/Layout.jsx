import { NavLink, Outlet } from "react-router";

function Layout() {
  return (
    <div style={{ padding: "20px" }}>
      <header>
        <h1>My Website</h1>
      </header>

      <nav>
        <NavLink to="/">Home</NavLink> |&nbsp;
        <NavLink to="/about">About</NavLink> |&nbsp;
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <hr />

      <Outlet />

      <footer>
        footer
      </footer>
    </div>
  );
}

export default Layout;
