import {
    createBrowserRouter,
} from "react-router-dom";
import { ABOUT, CONTACT, HOME } from "./routes";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";

export const router = createBrowserRouter([
    {
        path: HOME,
        element: <HomePage />,
    },
    {
        path: CONTACT,
        element: <ContactPage />,
    },
    {
        path: ABOUT,
        element: <AboutPage />,
    },
]);