import { useParams, useLoaderData, useNavigate } from "react-router";

function ProductDetailPage() {
  //   const { id } = useParams();

  const product = useLoaderData();
  const navigate = useNavigate();

  const buyAction = () => {
    alert("ซื้อแล้ว")
    navigate("/product")
  }

  return (
    <div>
      <h3>Product Detail {product.id}</h3>
      <div>
        <img src={product.thumbnail} />
        <p>{product.title}</p>
        <p>{product.price}$</p>
      </div>
      <br/>
      <button onClick={buyAction} style={{padding: "20px"}}>ซื้อ</button>
    </div>
  );
}

export default ProductDetailPage;
