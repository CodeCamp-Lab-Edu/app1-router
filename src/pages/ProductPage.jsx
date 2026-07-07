import { useLoaderData, Link } from "react-router";
import "./ProductPage.css";

function ProductPage() {
  const products = useLoaderData();
  //   console.log(products[0]);

  return (
    <div>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link to={`/product/${product.id}`}>
              <img src={product.thumbnail} />
            </Link>
            <p>
              {product.id}: {product.title}
            </p>
            <p>ราคา: {product.price}$</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductPage;
