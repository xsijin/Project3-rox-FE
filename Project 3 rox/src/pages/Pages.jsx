// The container for defining the routes and their corresponding components.

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import MyRecipes from "./MyRecipes";
import MyRecipeDetails from "./MyRecipeDetails";
import MyRecipeEditing from "./MyRecipeEditing";



function Pages() {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cuisine/:type" element={<Cuisine />} />
            <Route path="/searched/:search" element={<Searched />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            <Route path="/myrecipes" element={<MyRecipes />} />
            <Route path="/myrecipedetails/:id" element={<MyRecipeDetails />} />
            <Route path="/myrecipeediting/:id" element={<MyRecipeEditing />} />
        </Routes>

    );
}

export default Pages;