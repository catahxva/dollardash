import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const ErrorPage = lazy(() => import("./components/pages/ErrorPage"));
const HomePage = lazy(() => import("./components/pages/HomePage"));
const AppPage = lazy(() => import("./components/pages/AppPage"));

import LoadingScreen from "./components/UI/Others/LoadingScreen";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/app",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <AppPage />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
