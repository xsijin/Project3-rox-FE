import React from 'react';

const RecipeHeader = ({ title, image }) => (
    <div>
        <div>{title}</div>
        <img src={image} alt={title || 'Recipe Image'} />
    </div>
);

export default RecipeHeader;