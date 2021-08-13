import React, {useState, useEffect} from 'react';
import Cart from "./assets/cart.png";
import Hamburger from "./assets/Hamburger.png";
import Search from "./assets/search.png";
import Logo from "./assets/logo.png";
import './Navbar.css';

const Navbar = () => {
    const [showBack, setShowBack] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setShowBack(true);
            } else{
                setShowBack(false);
            }
        });
        return(
            window.removeEventListener("scroll", () => {
                if(window.scrollY > 100){
                    setShowBack(true);
                } else{
                    setShowBack(false);
                }
            }
        ))
    }, [])
    return (
        <div className={`navbar ${showBack && "navbar_colored"}`}>
            <div className="homejam">
                <img src={Logo} alt="HomeJam"></img>
            </div>
            <div className="other_compo">
                <div className="search">
                    <img src={Search} alt="Search"></img>
                    <p>Search</p>
                </div>
                <div className="help">
                    <p>Help</p>
                </div>
                <div className="account">
                    <p>Account</p>
                </div>
                <div className="search2">
                    <img src={Search} alt="Search"></img>
                </div>
                <div className="cart">
                    <img src={Cart} alt="Cart"></img>
                </div>
                <div className="hamburger">
                    <img src={Hamburger} alt="Hamburger"></img>
                </div>
            </div>
        </div>
    );
};

export default Navbar;