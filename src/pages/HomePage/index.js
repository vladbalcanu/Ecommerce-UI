import { produceWithPatches } from 'immer'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectError, selectLoading, selectIsError, selectCurrentUser, selectIsAuth } from '../../store/auth/selectors'
import { getCurrentUser, login, logout, guest } from '../../store/auth/thunks'
import './index.css'


export function HomePage() {
  const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth)
  const loading = useSelector(selectLoading)
  const error = useSelector(selectIsError)
  const currentUser = useSelector(selectCurrentUser)
  const handleLogin = (e) => {
    e.preventDefault();
            const payload={
                "email":'admin@email.com',
                "password":'test123',
            }
            dispatch(login(payload))
  }
  const handleLogout = (e) => {
    e.preventDefault();
            dispatch(logout())
  }
  const handleGuest = (e) => {
    e.preventDefault();
            dispatch(guest())
  }
  // const handleSignup = (e) => {
  //   e.preventDefault();
  //           dispatch(Signup())
  // }

  useEffect(()=>{
    dispatch(getCurrentUser())
  },[])

  return (
    <>
      {isAuth ? 
        <div>
        <div>{currentUser.email}</div>
        <div><button onClick={handleLogout}>Logout</button></div>
        </div>
        :
        <div className="login-box">
        <span style={{color: 'white'}}></span>

            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <br></br>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email" 
                />
                <br></br>
                <small id="emailHelp" className="form-text text-muted" color='FFF'>We'll never share your email with anyone else.</small>
                <br></br>
                </div>
                <br></br>
                <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Password</label>
                <br></br>
                <input type="password" 
                       className="form-control" 
                       id="password" 
                       placeholder="Password"
                />
                <br></br>
                </div>
                <br></br>
                <div className="form-check">
                </div>
                <br></br>
                <div className="container">
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={handleLogin}
                    >Submit</button>
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={handleGuest}
                        >Guest</button>
                </div>
                <br></br>
            </form>
            <br></br>
            <div className="registerMessage">
                <span>Don't have an account? </span>
                {/* <span className="loginText" onClick={handleSignup}>Register</span>  */}
            </div>
        </div>}
    </>
  )
}
