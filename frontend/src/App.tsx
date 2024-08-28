import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route element={<MainLayout />}></Route>)
  );
  return <RouterProvider router={router} />;
}

export default App;
