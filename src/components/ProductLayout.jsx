import { Outlet } from "react-router";
import "./ProductLayout.css"

function ProductLayout() {
  return (
    <div>
      <h1>My Product</h1>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default ProductLayout;
