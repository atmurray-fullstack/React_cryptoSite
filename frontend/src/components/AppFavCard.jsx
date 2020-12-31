import React from 'react';


const AppFavCard = (props) => {
    const { image, name, symbol, price, about } = props
    return (
        <div className="card" style={{ 'width': '18%', 'height': '70%' }}>
            <img className="card-img-top" src='...' alt="Card cap" />
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    );
}

export default AppFavCard;