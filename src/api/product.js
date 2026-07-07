import api from "./axios";

export async function getProducts() {
  //   console.log("loading product");

  try {
    const res = await api.get("/products?limit=10");
    return res.data.products;
  } catch {
    throw new Response("Failed to fetch products", { status: 500 });
  }
}

export async function getProductById({ params }) {
  const { id } = params;

  try {
    const res = await api.get(`/products/${id}`);
    return res.data;
  } catch {
    throw new Response("Product Not Found", { status: 404 });
  }
}
