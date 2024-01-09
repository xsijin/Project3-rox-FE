import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function MyRecipeEditing() {
    const apiKey = 'patETm5L4X8nMc9KS.a712093b2256ec2df758fd2310fbc78476aedad98578fd20d457be47c1075250';
    const params = useParams();
    const navigate = useNavigate();

    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const fetchRecipeDetailsForEditing = async () => {
        try {

            const response = await fetch(`https://api.airtable.com/v0/app7SbNfYMs9Klj4x/Recipes/${params.id}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setRecipeName(data.fields['Recipe Name']);
                setIngredients(data.fields['Ingredients']);
                setInstructions(data.fields['Instructions']);
            }
        } catch (error) {
            console.error('Error fetching recipe details for editing:', error);
        }
    };

    useEffect(() => {
        fetchRecipeDetailsForEditing();
    }, [params.id]);

    const handleSaveChanges = async () => {
        try {
            const apiKey = 'patETm5L4X8nMc9KS.a712093b2256ec2df758fd2310fbc78476aedad98578fd20d457be47c1075250';
            const baseUrl = `https://api.airtable.com/v0/app7SbNfYMs9Klj4x/Recipes/${params.id}`;

            const data = {
                fields: {
                    'Recipe Name': recipeName,
                    'Ingredients': ingredients,
                    'Instructions': instructions,
                },
            };

            const response = await fetch(baseUrl, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('Recipe updated.');
                navigate(`/myrecipedetails/${params.id}`);
            }
        } catch (error) {
            console.error('Error updating recipe:', error);
        }
    };

    return (
        <div>
            <h2>Edit Recipe</h2>
            <div>
                <div>Recipe Name:</div>
                <input
                    type="text"
                    value={recipeName}
                    onChange={(evt) => setRecipeName(evt.target.value)} />
            </div>

            <div>
                <div>Ingredients: </div>
                <textarea
                    type="text"
                    value={ingredients}
                    onChange={(evt) => setIngredients(evt.target.value)} />
            </div>

            <div>
                <div>Instructions:</div>
                <textarea
                    type="text"
                    value={instructions}
                    onChange={(evt) => setInstructions(evt.target.value)} />
            </div>

            <button onClick={handleSaveChanges}>Save Changes</button>
        </div>
    );
}

export default MyRecipeEditing;