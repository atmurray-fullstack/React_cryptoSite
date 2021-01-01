import React from 'react';


const AppFavCard = (props) => {
    const { image, name, symbol, price, about } = props;
    return (
        <div className="card" style={{ 'width': '18%', 'height': '70%' }}>
            <img className="card-img-top" src='https://cdn.coinranking.com/BUvPxmc9o/ltcnew.svg' alt="Card cap" />
            <div className="card-body">
                <p className="card-text">{about}</p>
            </div>
        </div>
    );
}

export default AppFavCard;