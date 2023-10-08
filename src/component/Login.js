import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utilis/validate';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const nameValue = name.current ? name.current.value : null;

    console.log(emailValue);
    console.log(passwordValue);
    console.log(nameValue); // Add this line to get the name value

    const message = checkValidData(emailValue, passwordValue, nameValue); // Include name
    console.log(message);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      const auth = getAuth(); // Get the auth instance

      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
          console.log(user);
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + '-' + errorMessage);
        });
    } else {
      // Sign In Logic
      const auth = getAuth();
signInWithEmailAndPassword(auth, emailValue, passwordValue)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user);
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+errorMessage)
  });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='bg img'
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='w-3/12 absolute p-12 bg-opacity-75 bg-black my-36 mx-auto right-0 left-0 rounded-lg shadow-lg'
      >
        <h1 className='text-white text-3xl mb-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        <div className='mb-4'>
          {!isSignInForm && (
            <input
              ref={name}
              type='text'
              placeholder='Full Name'
              className='w-full py-2 px-3 bg-gray-800 text-white rounded-md placeholder-gray-400'
            />
          )}
        </div>
        <div className='mb-4'>
          <input
            ref={email}
            type='text'
            placeholder='Email Address'
            className='w-full py-2 px-3 bg-gray-800 text-white rounded-md placeholder-gray-400'
          />
        </div>
        <div className='mb-4'>
          <input
            ref={password}
            type='password'
            placeholder='Password'
            className='w-full py-2 px-3 bg-gray-800 text-white rounded-md placeholder-gray-400'
          />
        </div>
        <div className='mb-4'>
          {!isSignInForm && (
            <input
              ref={password}
              type='password'
              placeholder='Confirm Password'
              className='w-full py-2 px-3 bg-gray-800 text-white rounded-md placeholder-gray-400'
            />
          )}
        </div>
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button
          className='w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600'
          onClick={handleButtonClick}
        >
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p className='py-4 cursor-pointer text-white' onClick={toggleSignInForm}>
          {isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already registered? Sign In Now'}
        </p>
      </form>
    </div>
  );
};

export default Login;
