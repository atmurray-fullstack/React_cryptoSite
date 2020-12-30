import React from 'react'


const AppCryptoTable = (props) => {

    const { history } = props

    return (


        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Coin</th>
                    <th scope="col">Qty</th>

                    <th scope="col">Buy Price</th>
                    <th scope="col">Buy Date</th>
                    <th scope="col">Current Price</th>
                    <th scope="col">Profit</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>

    );
}

export default AppCryptoTable;