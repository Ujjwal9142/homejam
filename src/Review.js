import React from 'react';
import ITFlag from "./assets/IT_Flag.png";
import USFlag from "./assets/USA_flag.png";
import Rev1 from "./assets/review1.png";
import Rev2 from "./assets/review2.png";
import Rev3 from "./assets/review3.png";
import './Review.css';

const Review = ({name, location, identity}) => {
    let flag, profile;
    switch(identity){
        case "H":
            {
                flag = USFlag;
                profile = Rev1;
                break;
            }
        case "I":
            {
                flag = ITFlag;
                profile = Rev2;
                break;
            }
        case "A":
            {
                flag = USFlag;
                profile = Rev3;
                break;
            }
        default:
            {
                flag = null;
                profile = null;
            }
    }
    return (
        <div className="review">
            <div className="grad"></div>
            <div className="review_main">
                <div className="header">
                    <img src={profile} alt={name}></img>
                    <div className="personals">
                        <h3>{name}</h3>
                        <div className="country">
                            <img src={flag} alt={location}></img>
                            <h5>{location}</h5>
                        </div>
                    </div> 
                </div>
                <div className="comment">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae.
                        Vestibulum pellentesque eget laoreet adipiscing.
                    </p>
                </div>
            </div>
        </div>
        
    );
};

export default Review;