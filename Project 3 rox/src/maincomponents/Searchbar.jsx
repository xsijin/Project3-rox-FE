import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function Searchbar() {
    const searchbarStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
        marginBottom: '20px',

    };

    const magStyle = {
        marginRight: '10px'
    };

    const [input, setInput] = useState("");

    // Attached inside handleSubmit function to move from current page to Searched.
    const navigate = useNavigate();

    // Updating the input state with the current value of the input field.
    const handleChange = (evt) => {
        setInput(evt.target.value);
    }

    // Fires when the user pressed Enter.
    // :search in Pages.jsx gets replaced by user input.
    const handleSubmit = (evt) => {
        evt.preventDefault();
        navigate(`/searched/${input}`);
    };

    return (
        <div style={searchbarStyle}>
            <FaSearch style={magStyle}></FaSearch>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleChange}
                    value={input}
                    placeholder="Search" />
            </form>
        </div>
    );



}

export default Searchbar;