import React from 'react'
import {useDispatch} from "react-redux"
import { loginUser } from './Reactstate/Reducestate'
import { logoutUser } from './Reactstate/Reducestate'

const Login = () => {

    const dispatch = useDispatch()
  return (
    <div>
        <div>
            <button onClick={()=>{
                dispatch(loginUser({
                  Username:"Judith",
                  Age:"20",
                  Email:"judith@gmail.com",
                  stack:"Full stack",
               }))
            }}>Log in</button>
            <button onClick={()=>{
              dispatch(logoutUser());
            }}>Login out</button>

        </div>

    </div>
  )
}

export default Login