import { Provider } from "react-redux";
import Header from "./components/Header";
import Product from "./components/Product";
import Shop from "./components/Shop";
import { DUMMY_PRODUCTS } from "./dummyProducts";
import { store } from "../store/store";
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Shop>
          {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
          ))}
        </Shop>
      </Provider>
    </>
  );
};

export default App;
