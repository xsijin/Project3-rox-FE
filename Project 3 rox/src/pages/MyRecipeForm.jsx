import React from 'react';
import { useState } from 'react';


function MyRecipeForm({ handleSaveRecipe, style }) {

    const apiKey = 'patETm5L4X8nMc9KS.a712093b2256ec2df758fd2310fbc78476aedad98578fd20d457be47c1075250';

    const [formData, setFormData] = useState({
        recipeName: '',
        ingredients: '',
        instructions: '',
    });

    const handleInputChange = (evt) => {
        const name = evt.target.name;
        const value = evt.target.value;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };


    const handleSubmit = async (evt) => {
        evt.preventDefault();

        try {
            const response = await fetch(`https://api.airtable.com/v0/app7SbNfYMs9Klj4x/Recipes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    'fields': {
                        'Recipe Name': formData.recipeName,
                        'Ingredients': formData.ingredients,
                        'Instructions': formData.instructions,
                    },
                }),
            });

            if (response.ok) {
                const newRecipe = await response.json();

                // Pass "newRecipe" back to MyRecipe.jsx
                handleSaveRecipe(newRecipe);

                setFormData({
                    recipeName: '',
                    ingredients: '',
                    instructions: '',
                });
            }

        } catch (error) {
            console.error('Fetch error:', error);
        }
    };


    return (
        <div style={style}>
            <h2>Enter your recipe details here: </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Recipe Name:</h3>
                    <input
                        type="text"
                        name="recipeName"
                        value={formData.recipeName}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <h3>Ingredients:</h3>
                    <textarea
                        name="ingredients"
                        value={formData.ingredients}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <h3>Instructions:</h3>
                    <textarea
                        name="instructions"
                        value={formData.instructions}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Save Recipe</button>
            </form>
        </div>
    );
};

export default MyRecipeForm;