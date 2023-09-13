import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp"
const Product = () => {
    return <div className="product-card">
        <div className="thumbnail">
            <img src={prod} alt="" />
        </div>
            <div className="prod-details">
                <div className="name">Product Name</div>
                <div className="name">&#8377;499</div>
            </div>
        
    </div>;
};

export default Product;
