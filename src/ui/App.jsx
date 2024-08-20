import { Provider } from "react-redux";
import { store } from "../core/store.js";
import MainPage from "./pages/MainPage.jsx";

function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
