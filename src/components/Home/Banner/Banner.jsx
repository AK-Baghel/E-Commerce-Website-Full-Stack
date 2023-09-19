import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
// import { Navigate, useNavigate } from "react-router-dom";

const Banner = () => {

    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>
                    Convallis interdum purus adipiscing dis parturient
                    posuere ac a quam a eleifend montes parturient posuere
                    curae tempor
                </p>
                <div className="ctas">
                    <a className="banner-cta" href="https://github.com/AK-Baghel/E-Commerce-Website-Full-Stack" target="_blank">GitHub</a>
                    <a className="banner-cta v2" href="https://www.linkedin.com/in/ankit-kumar-2119781b4/" target="_blank">Linkedin</a>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="" />
        </div>
    </div>;
};

export default Banner;
