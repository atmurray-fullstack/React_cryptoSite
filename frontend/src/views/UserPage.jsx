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
    const [cFavs, setFavs] = useState([])
    const cryptoFavs = [];


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
                    .then((res) => {
                        console.log(res.data.data.coins)

                        userInfo.data.favorites.map((el) => {
                            return res.data.data.coins.map(coin => {

                                if (coin.name.toLowerCase() === el.toLowerCase()) {
                                    cryptoFavs.push(
                                        {
                                            name: el,
                                            value: coin.price,
                                            iconUrl: coin.iconUrl,
                                            description: coin.description,
                                            linkTo: coin.links[0].url
                                        })
                                }
                            })

                        })
                        console.log(cryptoFavs)
                        setFavs(cryptoFavs);
                        setBusy(false)
                    })

            })
    }, [token]);




    return (
        <div>
            { isBusy ? (<p>...Loading</p >)
                : (<BasicScreen>
                    <NavigationBar />
                    <Parallax>
                        <AppFavCard cryptoFavs={cFavs} />
                    </Parallax>

                    <CryptoTable history={user.history} />
                </BasicScreen>
                )
            }
        </div>








    );
}

export default UserPage;
