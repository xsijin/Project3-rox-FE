import React, { useState } from 'react';
import MyRecipeForm from './MyRecipeForm';
import MyRecipesList from './MyRecipesList';

function MyRecipes() {
    const myRecipesStyle = {
        width: '80%',
        margin: '70px',
        padding: '20px',
        textAlign: 'center',
    };

    const myRecipesHeadingStyle = {
        fontSize: '24px',
        marginBottom: '20px',
    };

    const myRecipeFormStyle = {
        maxWidth: '400px',
        margin: 'auto',
    };


    // Lifting state.
    const [userRecipes, setUserRecipes] = useState([]);


    const handleSaveRecipe = (newRecipe) => {
        // MyRecipes.jsx receives the values of "newRecipe" from MyRecipeForm.jsx
        setUserRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
    };

    return (
        <div style={myRecipesStyle}>
            <h1 style={myRecipesHeadingStyle}>Create Your Own Recipe</h1>

            {/* callback function passed as prop to MyRecipeForm */}
            <MyRecipeForm handleSaveRecipe={handleSaveRecipe} style={myRecipeFormStyle} />

            {/* userRecipes passed as prop to MyRecipesList */}
            <MyRecipesList userRecipes={userRecipes} />
        </div>
    );
}

export default MyRecipes;