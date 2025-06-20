import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tictactoe from "./pages/Tictactoe";
import Snake from "./pages/Snake.jsx";
import { DarkContextProvider } from "./context/theme/DarkContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/tic-tac-toe", element: <Tictactoe /> },
  { path: "/snake", element: <Snake /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkContextProvider> 
      <RouterProvider router={router} />
    </DarkContextProvider>
  </StrictMode>
);
