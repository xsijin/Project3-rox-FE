import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Searched() {

    const [searchResults, setSearchResults] = useState([]);

    let params = useParams();

    const apiKey = '63b9e4bf858641ffbed79e478b99117a';

    // Setting searchResults to "results" in "data".
    const getSearched = async () => {

        const response = await fetch(
            // Spoonacular: "Search Recipes"
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${params.search}&number=10`
        );
        const data = await response.json();
        console.log(data);
        setSearchResults(data.results);
    };

    // In Pages.jsx, path="/searched/:search"
    // params.search retrieves the value of the ":search" parameter from the URL.
    // useEffect fires whenever the value of ":search" changes.
    useEffect(() => {
        getSearched(params.search);
        console.log(params.search);
    }, [params.search]);

    return (
        <div>
            <Wrapper>

                <Splide options={{
                    perPage: 4,
                    drag: 'free',
                    pagination: false,
                    gap: '3rem'
                }}>
                    {searchResults.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <Link to={`/recipe/${recipe.id}`}>
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt={recipe.title} />
                                        <Gradient />
                                    </Link>
                                </Card>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.div`
margin: 4rem 0rem;
`;

const Card = styled.div`
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
position: relative;
// all the images in the card div
img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
}
`;

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Searched;