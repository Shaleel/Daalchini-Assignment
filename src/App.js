import "./App.css";
import ProductList from "./Components/ProductList/ProductList";
import CartStateProvider from "./Context/CartStateProvider";
import BottomNav from "./Components/BottomNav/BottomNav";
import "./Components/Alert/style.css";
function App() {
  return (
    <CartStateProvider>
      <div className="App">
        <ProductList />
        <BottomNav />
      </div>
    </CartStateProvider>
  );
}

export default App;
