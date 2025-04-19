import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/Validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInform, setIsSignInform] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const toggleSignInform = () => {
    setIsSignInform(!isSignInform);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleClick = () => {
    //validation logic
    const message = checkValidate(email.current.value, password.current.value);
    setErrorMessage(message);
    // console.log(errorMessage)

    if (message) return;

    if (!isSignInform) {
      //signup Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://wallpapercave.com/wp/wp9216688.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("User not found");
          console.log(errorCode, errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_small.jpg"
          alt="bgimage"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w w-3/12 my-36 mx-auto right-0 left-0 absolute p-10 bg-black bg-opacity-85 rounded-lg"
      >
        <h1 className="text-white text-3xl p-2 text-center">
          {isSignInform ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInform ? (
          <input
            ref={name}
            className="p-2 m-2 bg-slate-300 bg-opacity-15 border rounded-sm w-full text-white"
            type="text"
            placeholder="Enter Name"
          />
        ) : (
          ""
        )}
        <input
          ref={email}
          className="p-2 m-2 bg-slate-300 bg-opacity-15 border rounded-sm w-full text-white"
          type="text"
          placeholder="Enter Email Address"
        />
        <input
          ref={password}
          className="p-2 m-2 bg-slate-300 bg-opacity-15 border rounded-sm w-full text-white"
          type="password"
          placeholder="Enter Password"
        />
        <p className="py-2 text-red-600 text-lg">{errorMessage}</p>
        <button
          className="font-bold text-white rounded-lg p-2 m-2 w-full bg-red-700"
          onClick={handleClick}
        >
          {isSignInform ? "Sign In" : "Sign up"}{" "}
        </button>
        {/* <h1 className='p-2 m-2 text-center text-sm text-white w-full'>OR</h1>
            <button className='p-2 m-2 bg-slate-300 bg-opacity-25 rounded-lg w-full text-white bg-center'>Use a sign-in-code</button>
            <h1 className='p-2 m-2 text-white text-center underline w-full cursor-pointer'>Forgot a password?</h1> */}
        <p className="text-white py-2 text-sm text-center">
          {isSignInform ? "New to NetFlix? " : "Already User "}
          <span className="text-lg cursor-pointer" onClick={toggleSignInform}>
            {!isSignInform ? "Sign In" : "Sign up now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
