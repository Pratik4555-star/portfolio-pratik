import { useEffect, useState } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import CustomCursor from "./cursor/CustomCursor";
import Home from "./components/Home";
import Startup from "./components/Startup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="startup" element={<Startup />} />
    </Route>
  )
);

function App() {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Set `showCursor` to false for devices with screen width <= 768px
      setShowCursor(window.innerWidth > 768);
    };

    // Initial check on mount
    handleResize();

    // Add event listener for resize events
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      {showCursor && <CustomCursor />}
    </>
  );
}

export default App;
