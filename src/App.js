import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./Pages/MainPage";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/routes";

function App() {
  return (
    <div>
      <RouterProvider router={routes}>
        <MainPage />
      </RouterProvider>
    </div>
  );
}

export default App;
