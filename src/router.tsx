import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root.tsx";
import { NotFoundPage, SamplePage1, SamplePage2, Home } from "./pages";
import { Login } from "./pages/Login.tsx" 



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "samplepage1",
                element: <SamplePage1 />
            },
            {
                path: "samplepage2",
                element: <SamplePage2 />
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    }
])