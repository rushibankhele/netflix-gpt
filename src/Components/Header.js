import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { logo, SUPPORTED_LANGAUGES } from "../utils/constants";
import { changeLangauge, changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    //toggle gpt search
    dispatch(toggleGptSearchView());
  };

  const handleLangaugeChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen pr-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={logo} alt="logo" />
      {user && (
        <div className="flex m-2">
          {showGptSearch && (
            <select
              className="p-2 m-2 rounded-lg bg-gray-900 text-white"
              onChange={handleLangaugeChange}
            >
              {SUPPORTED_LANGAUGES.map((lang) => (
                <option key={lang.identefier} value={lang.identefier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-black p-2 m-2 rounded-lg bg-white border-l-indigo-100 hover:bg-gray-500"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "🔍︎ GPT Search"}
          </button>
          <img
            className="w-12 h-12 rounded"
            alt="user-icon"
            src={user?.photoURL}
          ></img>
          <button
            onClick={handleSignout}
            className="mx-2 text-sm bg-red-500 size-12 rounded text-white "
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
