import {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [products, setProducts] = useState([]);

  const url = "http://localhost:3000/products";

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json()
      setProducts(data);
    }
    fetchData();
  }, [])
  console.log(products)
  
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {products.map((product) => (
             <li key={product.id}>{product.name} - R$ {product.price}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
