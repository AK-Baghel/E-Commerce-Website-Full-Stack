import "./Product.scss";
import { useContext, useState } from "react";
// import prod from "../../../assets/products/earbuds-prod-1.webp"
import { FcLike } from "react-icons/fc"
import { AiOutlineHeart } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import { Context } from "../../../utils/context";

const Product = ({ id, data }) => {
    const navigate = useNavigate();
    const {handleTotalFav}=useContext(Context);
    const [like, setLike] = useState(false);

    return <div className="product-card" onClick={() => { navigate('/product/' + id) }}>
        <div className="thumbnail">
            <img src={`http://localhost:1337${data.img.data[0].attributes.url}`} alt="" />
        </div>
        <div className="prod-details">
            <div className="name">{data.title}</div>
            <div className="name">&#8377;{data.price}</div>
            <div className="box1" onClick={(e) => {
                e.stopPropagation(); 
                handleTotalFav(like,id);
                setLike(!like);
            }}>
                {
                    like ? <FcLike size={28} /> : <AiOutlineHeart size={28} />
                }
            </div>
        </div>

    </div>;
};

export default Product;
