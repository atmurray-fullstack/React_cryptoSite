import axios from "axios";
import React, { useEffect, useState } from "react";
import BasicScreen from "../components/BasicScreen";
import NavigationBar from "../components/NavigationBar";

const UserPage = () => {
    const token = window.localStorage.getItem('jwt');
    // console.log(token);
    const [user, setUser] = useState({
        'favorites': '',
        'crypto': '',
        'userName': ''

    });
    const [userHistory, setUserHistory] = useState({})


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
                // setUserHistory(res.data.)
            })



    }, [userHistory])

    return (
        <BasicScreen>
            <NavigationBar />

            <h1>{user.userName}</h1>
            <h1>{user.favorites}</h1>
            <h1>{user.crypto}</h1>
            {/* <h1>{user.history}</h1> */}



        </BasicScreen>

    );
}

export default UserPage;
