import { NavLink, Outlet, useNavigation, useLocation } from "react-router";
import "./Layout.css";

function Layout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const location = useLocation();

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
        {isLoading ? (
          <div>กำลังโหลดข้อมูล...</div>
        ) : (
          <div key={location.pathname} className="fade-in">
            <Outlet />
          </div>
        )}
      </main>

      <footer>footer</footer>
    </div>
  );
}

export default Layout;
