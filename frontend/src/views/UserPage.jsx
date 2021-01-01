import axios from "axios";
import React, { useEffect, useState } from "react";
import BasicScreen from "../components/BasicScreen";
import NavigationBar from "../components/NavigationBar";
import CryptoTable from '../components/AppCryptoTable';
import Parallax from "../components/Parallax/Parallax";
import AppFavCard from '../components/AppFavCard'

const UserPage = () => {
    const [isBusy, setBusy] = useState(true)
    const token = window.localStorage.getItem('jwt');
    const [user, setUser] = useState({
        'favorites': '',
        'crypto': '',
        'userName': '',
        'history': {}

    });
    const cryptoFavs = [];
    const cryptoArray = [];


    useEffect(() => {

        axios.get('http://localhost:8080/user/getUserInfo', {
            headers: {
                'auth-token': `${token}`
            }
        })
            .then(userInfo => {
                console.log(userInfo.data)
                setUser(
                    {
                        'favorites': userInfo.data.favorites,
                        'crypto': userInfo.data.savedCryptos,
                        'userName': userInfo.data.userName,
                        'history': userInfo.data.history
                    }
                )

                axios.get('https://api.coinranking.com/v1/public/coins')
                    .then(res => {
                        console.log(res.data.data.coins)
                        res.data.data.coins.map(el => {
                            cryptoArray.push(el.symbol + ' ' + el.price)
                        })
                        userInfo.data.favorites.map((el) => {
                            return res.data.data.coins.map(coin => {

                                if (coin.name.toLowerCase() === el.toLowerCase()) {
                                    cryptoFavs.push(
                                        {
                                            name: el,
                                            value: coin.price,
                                            iconUrl: coin.iconUrl,
                                            description: coin.description
                                        })
                                }
                            })

                        })
                        console.log(cryptoFavs)
                        console.log(cryptoFavs[1].iconUrl)

                    })

            })


    }, [token]);



    const img = cryptoFavs[0].iconUrl ////This is the problem

    return (
        <div>
            { isBusy ? (<p>...Loading</p >)
                : (<BasicScreen>
                    <NavigationBar />
                    <Parallax>
                        <h1>{user.userName}</h1>

                        <AppFavCard image={img} />
                    </Parallax>

                    <CryptoTable history={user.history} />
                </BasicScreen>
                )
            }
        </div>








    );
}

export default UserPage;
