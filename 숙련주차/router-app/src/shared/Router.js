import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Content from "../pages/Content";
import Works from "../pages/Works";
import About from "../pages/About";
import Work from "../pages/Work";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contect" element={<Content />} />
                <Route path="works" element={<Works />} />
                <Route path="work/:id" element={<Work />} />
            </Routes>
        </BrowserRouter>

    )
}

export default Router;