import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInform, setIsSignInform] = useState(true);

    const toggleSignInform = () =>{
        setIsSignInform(!isSignInform);
    }
  return (
    <div>
        <Header />
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_small.jpg'
        alt='bgimage'
        />
        </div>
        <form className='w w-3/12 my-36 mx-auto right-0 left-0 absolute p-10 bg-black bg-opacity-85 rounded-lg'>
        <h1 className='text-white text-3xl p-2 text-center'>{isSignInform ? 'Sign In' : 'Sign Up' }</h1>
        {!isSignInform ? <input className='p-2 m-2 bg-slate-300 bg-opacity-15 border rounded-sm w-full' type='text' placeholder='Enter Name'/>: ''}
            <input className='p-2 m-2 bg-slate-300 bg-opacity-15 border rounded-sm w-full' type='text' placeholder='Email or mobile number'/> 
            <input className='p-2 m-2 bg-slate-300 bg-opacity-15 border rounded-sm w-full' type='password'  placeholder='Password'/>
            <button className='font-bold text-white rounded-lg p-2 m-2 w-full bg-red-700'>{isSignInform ? "Sign In" : "Sign up"} </button>
            {/* <h1 className='p-2 m-2 text-center text-sm text-white w-full'>OR</h1>
            <button className='p-2 m-2 bg-slate-300 bg-opacity-25 rounded-lg w-full text-white bg-center'>Use a sign-in-code</button>
            <h1 className='p-2 m-2 text-white text-center underline w-full cursor-pointer'>Forgot a password?</h1> */}
            <p className='text-white py-2 text-sm text-center'>{isSignInform ? 'New to NetFlix? ' : 'Already User ' }<span className='text-lg cursor-pointer' onClick={toggleSignInform}>{!isSignInform ? 'Sign In': 'Sign up now'}</span></p>
        </form>
    </div>
  )
}

export default Login