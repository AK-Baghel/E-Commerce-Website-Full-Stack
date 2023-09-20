import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import Favourite from "../Favourite/Favourite"
import { Context } from "../../utils/context";

import "./Header.scss";

const Header = () => {
    const { cartCount } = useContext(Context);

    const scroll = (check) => {
        if (check === 'about')
            window.scroll(0, 4050);
        else
            window.scroll(0, 850);
    }



    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showFav, setShowFav] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const navigate = useNavigate();

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

    }, []);

    return (
        <>
            <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate('/')}>Home</li>
                        <li onClick={() => { scroll('about') }}>About</li>
                        <li onClick={() => { scroll('categories') }}>Shop Now</li>
                    </ul>
                    <div className="center" onClick={() => navigate('/')}>AK-Estore</div>
                    <div className="right">
                        <TbSearch onClick={() => { setShowSearch(true) }} />
                        <AiOutlineHeart onClick={() => { setShowFav(true) }}/>
                        <span className="cart-icon" onClick={() => setShowCart(true)}>
                            <CgShoppingCart />
                            <span>{cartCount}</span>
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart} />}
            {showFav && <Favourite setShowFav={setShowFav} />}
            {showSearch && <Search setShowSearch={setShowSearch} />}
        </>
    )
};

export default Header;
