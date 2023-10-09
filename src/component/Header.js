import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utilis/userSlice";
import { LOGO, User_Profile } from "../utilis/constants";


const Header = () => {
  const user = useSelector((store)=>store.user)
const navigate = useNavigate();
const dispatch = useDispatch();
useEffect(()=>{
  const auth = getAuth();
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid,email,displayName} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName}))
      // ...
      navigate("/browse");
    } else {
      // User is signed out
      dispatch(removeUser());
      navigate("/");
      // ...
    }
  });
  //unsiunscribe when component unmounts
  return()=>unsubscribe();
},[])

  const handleCkick =()=>{

    const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/")
}).catch((error) => {
  // An error happened.
  navigate("/error")
});
  }
  return (
    <div className="absolute w-screen  px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      {user &&(<div className="flex p-2">
        <img className="w-12 h-12" src={User_Profile}/>
        <button className="font-bold text-white" onClick={handleCkick}>(Sign Out)</button>
      </div>)}
    </div>
  );
};

export default Header;
