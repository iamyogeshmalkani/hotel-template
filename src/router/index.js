import { ABOUT, CONTACT, GALLERY, HOME, ROOMS, TERRIF } from "./routes";
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
import RoomsPage from "../pages/RoomsPage";
import IndividualRoomPage from "../pages/IndividualRoomPage";



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
                <Route exact path={ROOMS}> <RoomsPage /> </Route>
                <Route exact path={`${ROOMS}/:roomType`}> <IndividualRoomPage /> </Route>


            </Switch>
            <Footer />
        </BrowserRouter>
    )
}
