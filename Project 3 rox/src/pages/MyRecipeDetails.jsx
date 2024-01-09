import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function MyRecipeDetails() {
    const apiKey = 'patETm5L4X8nMc9KS.a712093b2256ec2df758fd2310fbc78476aedad98578fd20d457be47c1075250';
    const params = useParams();
    const [recipeDetails, setRecipeDetails] = useState(null);
    const navigate = useNavigate();

    const fetchRecipeDetails = async () => {
        try {
            const response = await fetch(`https://api.airtable.com/v0/app7SbNfYMs9Klj4x/Recipes/${params.id}`, {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Recipe Details:', data);
                setRecipeDetails(data);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };


    useEffect(() => {
        fetchRecipeDetails();
    }, [params.id]);

    const handleEditButtonClick = () => {
        // Redirect to the "Edit Recipe" page
        navigate(`/myrecipeediting/${params.id}`);
    };


    return (
        <div>
            <h2>Recipe Details</h2>
            {recipeDetails && (
                <div>
                    <h2>{recipeDetails.fields['Recipe Name']}</h2>
                    <h4>Ingredients:</h4>
                    <p>{recipeDetails.fields['Ingredients']}</p>
                    <h4>Instructions:</h4>
                    <p>{recipeDetails.fields['Instructions']}</p>
                    <button onClick={handleEditButtonClick}>Edit Recipe</button>
                </div>
            )}
        </div>
    );
};

export default MyRecipeDetails;