import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Subject from "../pages/Subject";
import Sentence from "../pages/Sentence";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sentence/:level" element={<Sentence/>}/>
                <Route path="/subject/:code" element={<Subject/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;