import React from 'react';


const AppFavCard = (props) => {
    console.log(props.cryptoFavs)
    const { cryptoFavs } = props;


    return (
        <div className='row'>
            {
                cryptoFavs.map(el => {
                    return (
                        <div key={el.name} className="card mx-3" style={{ 'width': '20vw', 'height': '70%' }}>
                            <img className="card-img-top mt-2" src={el.iconUrl} alt="Card cap" style={{ height: '40%', width: '70%', margin: 'auto' }} />
                            <div className="card-body">
                                <p style={{ fontSize: '1rem' }}>{el.name}</p>
                                <p style={{ fontSize: '95%' }}>${parseInt(el.value).toFixed(3)}</p>
                                <a className="btn btn-primary" href={el.linkTo} role="button">Link to {el.name} page</a>

                            </div>

                        </div>

                    )
                })

            }
        </div >
    );
}

export default AppFavCard;