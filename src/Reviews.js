import React from 'react';
import Review from './Review';
import './Reviews.css';
import LeftArrow from "./assets/leftArrow_white.png";

const Reviews = () => {
    return (
        <div className="reviews">
            <div className="head_contents">
                    <h3>Reviews</h3>  
                    <div className="pages">
                        <p>1<strong>/12</strong></p>     
                        <img src={LeftArrow} alt="Left Arrow" className="leftArr"></img>     
                        <img src={LeftArrow} alt="Right Arrow" className="rightArr"></img> 
                    </div>               
                </div>     
            <hr />     
            <div className="contain_review">
                <Review name="Hellen Jummy" location="Philadelphia, USA" identity="H"/>
                <Review name="Isaac Oluwatemilorun" location="Rome, Italy" identity="I" />
                <Review name="Andrew Smith" location="Texas, USA" identity="A" />
            </div>
            
        </div>
    );
};

export default Reviews;