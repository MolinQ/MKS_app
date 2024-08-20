import Header from "./components/Header.jsx";
import Map from "./components/Map.jsx";
import SideBar from "./components/SideBar.jsx";
import { Provider } from "react-redux";
import {store} from "../core/store.js";

function App() {
  return(
      <Provider store={store}>
      <div className='container'>
          <div>
              <Header />
          </div>
          <div className='d-flex justify-content-center gap-2 mt-2'>
              <Map />
              <SideBar />
          </div>
      </div>
      </Provider>
  )
}

export default App
