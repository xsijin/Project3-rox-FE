import React from "react";
import { NavLink } from "react-router-dom";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";

function Category() {
    return (
        <CategoryBar>
            <CategoryLink to={'/cuisine/Italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </CategoryLink>
            <CategoryLink to={'/cuisine/American'}>
                <FaHamburger />
                <h4>American</h4>
            </CategoryLink>
            <CategoryLink to={'/cuisine/Chinese'}>
                <GiNoodles />
                <h4>Chinese</h4>
            </CategoryLink>
            <CategoryLink to={'/cuisine/Japanese'}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </CategoryLink>
        </CategoryBar>
    )
}

const CategoryBar = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;
`;

const CategoryLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 2rem;
text-decoration: none;
background: green;
width: 5rem;
height: 5rem;
cursor: pointer;
transform: scale(0.8);

h4 {
    color: white;
    font-size: 0.8rem;
}

svg {
    color: white;
    font-size: 1.5rem;
}
`;





export default Category