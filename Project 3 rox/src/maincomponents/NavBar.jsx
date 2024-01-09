import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { SlNotebook } from "react-icons/sl";
import styled from "styled-components";

function NavBar() {
    return (
        <NavigationBar>
            <NavigationLink to={'/'}>
                <IoMdHome />
                <h4>Home</h4>
            </NavigationLink>
            <NavigationLink to={'/myrecipes'}>
                <SlNotebook />
                <h4>My Recipes</h4>
            </NavigationLink>
        </NavigationBar>
    )
}

const NavigationBar = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;
`;

const NavigationLink = styled(NavLink)`
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





export default NavBar