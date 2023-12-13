import "./Products.css";

function Products() {
  return (
    <>
      <div>Products</div>
      <section>
        <div className="product">
          <div className="product-info">
            <h2>Desktop PC 1</h2>
            <p>Powerful desktop computer with the latest hardware.</p>
            <p>Price: $999</p>
            <button>Add to Cart</button>
          </div>
        </div>

        <div className="product">
          <div className="product-info">
            <h2>Desktop PC 2</h2>
            <p>High-performance desktop computer for gaming and work.</p>
            <p>Price: $1299</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
