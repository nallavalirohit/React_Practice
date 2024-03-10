import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const resp = await fetch("https://dummyjson.com/products?limit=100");
    const data = await resp.json();

    setProducts(data.products);
    console.log(products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length/10 &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };

  return (
    <div className="App">
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((product) => {
            return (
              <span className="products__single" key={product.id}>
                <img src={product.thumbnail} alt="logo"></img>
                <span>{product.title}</span>
              </span>
            );
          })}
        </div>
      )}
      {/* Pagination Logic */}
      {products.length > 0 && (
        <div className="pagination">
          <span className={page > 1 ? "" : "pagination__disable"} onClick={() => selectPageHandler(page - 1)}>◀️</span>
          {[...Array(products.length / 10)].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? "selectedPageStyle" : ""}
                onClick={() => selectPageHandler(i + 1)}
                key={i}
              >
                {i + 1}
              </span>
            );
          })}
          <span className={page < products.length/10? "" : "pagination__disable"} onClick={() => selectPageHandler(page + 1)}>▶️</span>
        </div>
      )}
    </div>
  );
}

export default App;
