import React, { useContext, useState, useEffect } from "react"
import Product  from "../Products/Product/Product"
import { Context } from "../../utils/context";
import "./Favourite.scss"

const Favourite = ({ setShowFav }) => {
    const { totalFav } = useContext(Context);
    const [data, setData] = useState([]);

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch('http://localhost:1337/api/categories?populate=*');
    //         const result = await response.json();
    //         const fetchedData = result.data;
    //         setData(fetchedData);
    //         console.log(data);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // }

    const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:1337/api/categories?populate=*');
          const result = await response.json();
          const fetchedData = result.data;
          setData(fetchedData);
          console.log(fetchedData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="category-fav-content">
            <div className="fav-layout">
                <div className="fav-title">
                    Favourites
                </div>
                <div className="close" onClick={() => { setShowFav(false) }}>X Close</div>
            </div>
            <hr />
            {
                // data.map((item) => {
                //     return (
                //         <>
                //             {/* <Product key={data.id} data={data}/> */}
                            
                //         </>

                //     )
                // })
            }
            {/* <Product id={6} data={7}  /> */}
        </div>
    )
}
export default Favourite;