import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import ErrorPage from "./error-page";
import JoinGamePage from "./components/JoinGamePage";
import HostPage from "./components/HostPage";
import SettingsPage from "./components/SettingsPage";
import SoundPlayer from "./components/SoundPlayer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/join",
    element: <JoinGamePage />,
  },
  {
    path: "/host",
    element: <HostPage />,
  },
  {
    path: "/game-settings",
    element: <SettingsPage />,
  },
  {
    path: "/game",
    element: <SoundPlayer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
