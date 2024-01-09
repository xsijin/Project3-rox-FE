import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";


function Cuisine() {

    const [cuisine, setCuisine] = useState([]);

    let params = useParams();

    const apiKey = '63b9e4bf858641ffbed79e478b99117a';

    const getCuisine = async (type) => {

        // returns "results"
        const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${type}&number=10`
        );
        const data = await response.json();
        console.log(data);
        setCuisine(data.results)
    };

    useEffect(() => {
        getCuisine(params.type);
        console.log(params.type);
    }, [params.type]);


    return (
        <div>
            <Wrapper>
                <h3></h3>

                {/* conditionally render the content inside the Splide component only if cuisine is defined.  */}
                {cuisine && cuisine.length > 0 && (
                    <Splide options={{
                        perPage: 4,
                        drag: 'free',
                        pagination: false,
                        gap: '3rem'
                    }}>
                        {cuisine.map((recipe) => {
                            return (
                                <SplideSlide key={recipe.id}>
                                    <Card>
                                        <Link to={"/recipe/" + recipe.id}>
                                            <p>{recipe.title}</p>
                                            <img src={recipe.image} alt={recipe.title} />
                                            <Gradient />
                                        </Link>
                                    </Card>
                                </SplideSlide>
                            );
                        })}
                    </Splide>
                )}
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

export default Cuisine