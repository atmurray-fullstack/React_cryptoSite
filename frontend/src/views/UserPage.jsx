import axios from "axios";
import React, { useEffect, useState } from "react";
import BasicScreen from "../components/BasicScreen";
import NavigationBar from "../components/NavigationBar";
import CryptoTable from '../components/AppCryptoTable';
import AppCryptoTable from "../components/AppCryptoTable";
import Parallax from "../components/Parallax/Parallax";

const UserPage = () => {
    const token = window.localStorage.getItem('jwt');
    // console.log(token);
    const [user, setUser] = useState({
        'favorites': '',
        'crypto': '',
        'userName': '',
        'history': ''

    });


    useEffect(() => {

        axios.get('http://localhost:8080/user/getUserInfo', {
            headers: {
                'auth-token': `${token}`
            }
        })
            .then(res => {
                console.log(res.data)
                setUser(
                    {
                        'favorites': res.data.favorites,
                        'crypto': res.data.savedCryptos,
                        'userName': res.data.userName,
                        'history': res.data.history
                    }
                )
            })

    }, [token]);

    const showHistory = Object.keys(user.history).map((key, ind) => {
        return <li
            key={user.history[key].symbol}
            style={{ background: 'pink' }}
        > {user.history[key].name} {user.history[key]['buy date']}</li >
    })



    return (
        <BasicScreen>
            <NavigationBar />
            <Parallax>

                <h1>{user.userName}</h1>
            </Parallax>

            <CryptoTable />




        </BasicScreen>

    );
}

export default UserPage;
