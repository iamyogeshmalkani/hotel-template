import { ABOUT, CONTACT, GALLERY, HOME, TERRIF } from "./routes";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TerrifPage from "../pages/TerrifPage";
import GalleryPage from "../pages/GalleryPage";



export default function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path={HOME}> <HomePage /> </Route>
                <Route exact path={CONTACT}> <ContactPage /> </Route>
                <Route exact path={ABOUT}> <AboutPage /> </Route>
                <Route exact path={TERRIF}> <TerrifPage /> </Route>
                <Route exact path={GALLERY}> <GalleryPage /> </Route>

            </Switch>
            <Footer />
        </BrowserRouter>
    )
}
