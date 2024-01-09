import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import RecipeHeader from './RecipeHeader';
import RecipeDetails from './RecipeDetails';
import RecipeInstructions from './RecipeInstructions';


function Recipe() {

    const [details, setDetails] = useState({});

    let params = useParams();

    const apiKey = '63b9e4bf858641ffbed79e478b99117a';

    // Setting details to "data".
    const getDetails = async () => {

        const response = await fetch(
            // Spoonacular: "Get Recipe Information"
            `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`
        );
        const data = await response.json();
        console.log(data);
        setDetails(data)
    };

    // In Pages.jsx, path="/recipe/:id"
    // params.id retrieves the value of the ":id" parameter from the URL.
    // useEffect fires whenever the value of ":id" changes.
    useEffect(() => {
        getDetails();
    }, [params.id]);



    return (
        <div>
            <RecipeHeader title={details.title} image={details.image} />
            <RecipeDetails recipeId={details.id} />
            <RecipeInstructions instructions={details.instructions} />
        </div>

    )

};

export default Recipe