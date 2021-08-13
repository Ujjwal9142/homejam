import React from 'react';
import './Artists.css';
import Benny from "./assets/benny.png";
import Vijay from "./assets/Vijay.png";
import Andrea from "./assets/Andrea.png";
import Shilpa from "./assets/Shilpa.png";
import Arrow from "./assets/Arrow.png";
import Divider from "./assets/Divider.png";
import Booking from "./assets/Booking.png";

const Artists = ({name, category, identity}) => {
    let source;
    switch(identity){
        case "B":
            {
                source = Benny;
                break;
            }
        case "V":
            {
                source = Vijay;
                break;
            }
        case "A":
            {
                source = Andrea;
                break;
            }
        case "S":
            {
                source = Shilpa;
                break;
            }
        default:
            source = null;
        
    }
    return (
        <div className="artist">
            <div className="back_shadow"></div>     
            <img src={source} alt={name} className="artist_image"></img>
            <div className="artist_details">
                <h6 className="category">{category}</h6>
                <h2 className="name">{name}</h2>
                <div className="more_info">
                    <div> 
                        <h4 className="text">More Info</h4>
                        <img src={Arrow} alt="arrow" className="arrow"></img>
                    </div>         
                    <div className="divider">
                        <img src={Divider} alt="divider"></img>
                    </div>
                    <div className="booking">
                        <img src={Booking} alt="booking"></img> 
                    </div>                    
                </div>
                
            </div>
        </div>
    );
};

export default Artists;