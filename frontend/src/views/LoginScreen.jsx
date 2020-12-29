

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import BasicScreen from '../components/BasicScreen'
import NavigationBar from '../components/NavigationBar'
import Parallax from '../components/Parallax/Parallax'
import Axios from 'axios'



const LoginScreen = (props) => {
    const history = useHistory();
    const [user, setUser] = useState({
        userName: null,
        passWord: null
    })

    const handleChange = event => {
        event.target.id === 'userName' ?
            setUser({
                userName: event.target.value,
                passWord: user.passWord
            }) : setUser({
                userName: user.userName,
                passWord: event.target.value
            })

        console.log(user)
    }
    const submitUser = () => {
        Axios({
            url: 'http://localhost:8080/api/user/login',
            method: 'post',
            data: {
                email: user.userName,
                password: user.passWord
            }
        })
            .then(res => {
                console.log(res.data)
                window.localStorage.setItem('jwt', res.data)
                history.push('/user')
            }, error => {
                console.log('Incorrect username or password')
            })
    }

    return (
        <BasicScreen>
            <h1>Here is the login screen</h1>
            <NavigationBar />

            <Parallax>
                {/* <div>
                    <h3><span>Enter username and password</span></h3>
                </div> */}
                <form className="row g-3">
                    <div className='col-4 mx-auto'>
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control"
                                id="userName"
                                placeholder="userName/Email"
                                onChange={handleChange}
                            >
                            </input>
                        </div>
                        <div className="col-auto mt-4">
                            <input
                                type="password"
                                className="form-control"
                                id="passWord"
                                placeholder="Password"
                                onChange={handleChange}
                            >
                            </input>
                        </div>
                    </div>
                </form>
                <div className='row g-3 mt-5'>
                    <div className="col-6 mx-auto">
                        <button
                            type="submit"
                            className="btn btn-primary btn-lg mb-3"
                            onClick={submitUser}
                        >  Login  </button>
                    </div>
                </div>
            </Parallax>
        </BasicScreen>

    );
}

export default LoginScreen;