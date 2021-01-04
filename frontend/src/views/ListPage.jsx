
import React, { useEffect, useState } from 'react';
import BasicScreen from '../components/BasicScreen';
import NavigationBar from '../components/NavigationBar';
import Parallax from '../components/Parallax/Parallax';
import CryptoList from '../components/CryptoList';
import axios from 'axios'

const ListPage = () => {
    const [isBusy, setBusy] = useState(true)
    const token = window.localStorage.getItem('jwt');
    // const [user, setUser] = useState({
    //     'favorites': '',
    //     'crypto': '',
    //     'userName': '',
    //     'history': {}

    // });
    const [list, setList] = useState([])

    useEffect(() => {

        axios.get('https://api.coinranking.com/v1/public/coins?timePeriod=30d')
            .then((res) => {
                // console.log(res.data.data.coins);
                setList(res.data.data.coins);
                console.log(list);

            })

    }, [token])

    const showList =
        Object.keys(list).map((key, ind) => {
            console.log(list[key].name)

            return (

                <tr key={list[key].symbol} >
                    <th scope="row">{list[key].name}</th>
                    <td>{list[key].price}</td>
                    <td>{list[key].price}</td>
                    <td>{list[key].price}</td>


                </tr>
            )

        })



    return (
        <BasicScreen>
            <NavigationBar />
            <Parallax>
                <div style={{ backgroundColor: 'whitesmoke' }}>
                    <h1>This is the list page</h1>
                </div>
            </Parallax>
            <CryptoList />

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Coin</th>
                        <th scope="col">Symbol</th>
                        <th scope="col">Current Price</th>
                        <th scope="col">Market Cap</th>
                        <th scope="col">Website</th>
                    </tr>
                </thead>
                <tbody>
                    {showList}
                </tbody>
            </table>
        </BasicScreen >

    );
}

export default ListPage;