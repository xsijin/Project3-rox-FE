import React from 'react';

function MyRecipeCards({ recipe, handleDeleteRecipe }) {

    const apiKey = 'patETm5L4X8nMc9KS.a712093b2256ec2df758fd2310fbc78476aedad98578fd20d457be47c1075250';

    const handleDeleteClick = async (evt) => {

        evt.preventDefault();

        try {
            const response = await fetch(`https://api.airtable.com/v0/app7SbNfYMs9Klj4x/Recipes/${recipe.id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                // If the delete operation is successful, calls the handleDeleteRecipe function in MyRecipeList.jsx
                handleDeleteRecipe(recipe.id);
            }

        } catch (error) {
            console.error('Delete error:', error);
        }
    };


    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
            <h3>{recipe.fields['Recipe Name']}</h3>

            <button onClick={handleDeleteClick}>DELETE</button>

        </div>
    );
};

export default MyRecipeCards;