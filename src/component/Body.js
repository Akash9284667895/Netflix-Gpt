import React, { useEffect } from 'react'
import {createBrowserRouter} from "react-router-dom"
import Browse from './Browse'
import Login from './Login'
import {RouterProvider} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utilis/userSlice'


const Body = () => {
  const dispatch = useDispatch();
 
    const appRouter = createBrowserRouter(
        [
          {
            path: "/",
            element: <Login />
          },
          {
            path: "/browse",
            element: <Browse />
          }
        ]
      );
      
useEffect(()=>{
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid,email,displayName} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName}))
      // ...
    } else {
      // User is signed out
      dispatch(removeUser());
      // ...
    }
  });
},[])

  return (
    <div>
      
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
