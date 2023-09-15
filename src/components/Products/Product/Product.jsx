import "./Product.scss";
// import prod from "../../../assets/products/earbuds-prod-1.webp"


const Product = ({id,data}) => {
    return <div className="product-card">
        <div className="thumbnail">
            <img src={`http://localhost:1337${data.img.data[0].attributes.url}`} alt="" />
        </div>
            <div className="prod-details">
                <div className="name">{data.title}</div>
                <div className="name">&#8377;{data.price}</div>
            </div>
        
    </div>;
};

export default Product;
