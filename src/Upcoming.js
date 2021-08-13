import React from 'react';
import './Upcoming.css';
import Artists from './Artists';

const Upcoming = () => {
    return (
        <div className="upcoming">
            <div className="head">
                <h3>Upcoming Shows</h3>   
                <p>View All</p>          
            </div>  
            <hr></hr>           
            <div className="cards">
                <Artists name="Benny Dayal" category="Folk" identity="B"/>
                <Artists name="Vijay Yesudas" category="Bollywood" identity="V" />
                <Artists name="Andrea Jeremiah" category="Folk" identity="A" />
                <Artists name="Shilpa Rao" category="Folk" identity="S" />
            </div>
            
        </div>
    );
};

export default Upcoming;