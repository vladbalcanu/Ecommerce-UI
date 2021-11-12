import React, {useState} from 'react';
import axios from 'axios';
import './LoginForm.css';
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstants';
import { withRouter, Redirect } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import { login } from '../../features/auth/authSlice';

function LoginForm(props) {
    const [state , setState] = useState({
        email : "",
        password : "",
        successMessage: null
    })
    const dispatch = useDispatch()
    const isAuth = useSelector((state) => state.auth.isAuth)
    const loading = useSelector((state) => state.auth.loading)
    const error = useSelector((state) => state.auth.error)
    
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        try{
            e.preventDefault();
            const payload={
                "email":state.email,
                "password":state.password,
            }
            dispatch(login(payload))
        }catch{
            props.showError('User not found');
        }
        // axios.post(API_BASE_URL+'/user/login', payload)
        //     .then(function (response) {
        //         console.log(response.status);
        //         if(response.status === 200){
        //             setState(prevState => ({
        //                 ...prevState,
        //                 'successMessage' : 'Login successful. Redirecting to home page..'
        //             }))
        //             localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
        //             redirectToHome();
        //             props.showError(null)
        //         }
        //         else if(response.code === 204){
        //             props.showError("Username and password do not match");
        //         }
        //         else{
        //             props.showError("Username does not exists");
        //         }
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

    }
    const redirectToHome = () => {
        props.updateTitle('Home')
        props.history.push('/home');
    }
    const redirectToRegister = () => {
        props.history.push('/register'); 
        props.updateTitle('Register');
    }
    const redirectToGuest = () => {
        props.history.push('/guest'); 
        props.updateTitle('Guest');
    }
    return(
        <div>
            {isAuth && <Redirect to={'/home'}/>}
            
        <div className="login-box">
        <span style={{color: 'white'}}></span>

            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email" 
                       value={state.email}
                       onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" 
                       className="form-control" 
                       id="password" 
                       placeholder="Password"
                       value={state.password}
                       onChange={handleChange} 
                />
                </div>
                <div className="form-check">
                </div>
                <div className="container">
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={handleSubmitClick}
                    >Submit</button>
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={() => redirectToGuest()}
                    >Guest</button>
                </div>
            </form>

            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <br></br>
            <div className="registerMessage">
                <span>Dont have an account? </span>
                <span className="loginText" onClick={() => redirectToRegister()}>Register</span> 
            </div>
        </div>
            
        </div>
        
    )
}

export default withRouter(LoginForm);