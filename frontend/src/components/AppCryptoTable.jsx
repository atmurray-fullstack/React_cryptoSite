import React from 'react'


const AppCryptoTable = (props) => {

    const { history } = props

    const showHistory = Object.keys(history).map((key, ind) => {

        return (
            <tr key={history[key].symbol} >
                <th scope="row">{history[key].name}</th>
                <td>'{history[key].symbol}</td>
                <td>'{history[key].qty}</td>
                <td>{history[key]['buy price']}</td>
                <td>{history[key]['buy date']}</td>
                <td>{history[key]['price now']}</td>
                <td>{history[key].profit}</td>
                <td>{history[key].profit}</td>
            </tr>
        )

    })
    return (


        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Coin</th>
                    <th scope="col">Symbol</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Buy Price</th>
                    <th scope="col">Buy Date</th>
                    <th scope="col">Current Price</th>
                    <th scope="col">Profit Fiat</th>
                    <th scope="col">Profit %</th>
                </tr>
            </thead>
            <tbody>
                {showHistory}
            </tbody>
        </table>

    );
}

export default AppCryptoTable;