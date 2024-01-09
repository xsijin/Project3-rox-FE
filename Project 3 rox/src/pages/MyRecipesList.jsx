import React, { useState, useEffect } from 'react';
import MyRecipeCards from './MyRecipeCards';
import { Link } from 'react-router-dom';


function MyRecipesList() {
    const apiKey = 'patETm5L4X8nMc9KS.a712093b2256ec2df758fd2310fbc78476aedad98578fd20d457be47c1075250';
    const baseUrl = `https://api.airtable.com/v0/app7SbNfYMs9Klj4x/Recipes`;

    const [userRecipes, setUserRecipes] = useState([]);

    useEffect(() => {

        const fetchUserRecipes = async () => {
            try {
                const response = await fetch(baseUrl, {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserRecipes(data.records);
                }

            } catch (error) {
                // Handle fetch error
                console.error('Fetch error:', error);
            }
        };

        fetchUserRecipes();
    }, [userRecipes]); // useEffect fires depending on state of userRecipes.


    const handleDeleteRecipe = (recipeId) => {
        // Performs the delete operation and update the state of userRecipes here and then in the MyRecipes.jsx
        const updatedRecipes = userRecipes.filter((recipe) => recipe.id !== recipeId);
        setUserRecipes(updatedRecipes);
    }


    return (
        <div>
            <h2>My Recipes List</h2>
            {userRecipes.map((recipe) => (
                <Link to={`/myrecipedetails/${recipe.id}`} key={recipe.id}>

                    {/* recipe and handleDeleteRecipe passed as props to MyRecipeCards.jsx */}
                    <MyRecipeCards key={recipe.id} recipe={recipe} handleDeleteRecipe={handleDeleteRecipe} />
                </Link>
            ))}
        </div>
    );
};

export default MyRecipesList;