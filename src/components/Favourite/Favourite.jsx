import React, { useContext, useState } from "react"
import {Products} from "../Products/Products"
import { Context } from "../../utils/context";

const Favourite = ({ setShowFav }) => {
    const { totalFav } = useContext(Context);
    const { data, setData } = useState([]);
    const fetchData = async () => {
        let data = await fetch('http://localhost:1337/api/products')
        let result = await data.json();
        result=result.data;
        console.log(result);
        
    }
    fetchData();
    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">
                    Favourites
                </div>
                {/* <Products innerPage={true} products={data} /> */}
            </div>
        </div>
    )
}
export default Favourite;