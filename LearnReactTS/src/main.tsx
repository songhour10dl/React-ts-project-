import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";

// import NavBar from "./NavBar.tsx"; // <-- your component

import App from "./App.tsx";
import App1 from "./Appbarv1.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App1 />
    {/* <NavBar /> */}
  </StrictMode>
);
