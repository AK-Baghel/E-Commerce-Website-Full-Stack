// import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp"

// import useFetch from "../../../hooks/useFetch";
// import { useNavigate } from "react-router-dom";

const Search = ({ setShowSearch }) => {
    return <div className="search-modal">
        <div className="form-field">
            <input type="text" autoFocus placeholder="Search for products" />
            <MdClose className="close-btn" onClick={() => { setShowSearch(false) }} />
        </div>
        <div className="search-result-content">
            <div className="search-results">
                <div className="search-result-item">
                    <div className="image-container">
                        <img src={prod} alt="" />
                    </div>
                    <div className="prod-details">
                        <div className="name">Product Name</div>
                        <div className="desc">Product desc</div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Search;
