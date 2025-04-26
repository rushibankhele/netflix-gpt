import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { logo } from '../utils/constants';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
        addUser({ 
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
        })); 
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });

    return ()=> unsubscribe();
  }, []);

  const handleSignout = () =>{
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      navigate('/error')
    });
  }

  return (
    <div className='absolute w-screen pr-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between' >
        <img className='w-44' src={logo}
        alt='logo'
        />
        { user && <div className='flex m-2'>
          <img className='w-12 h-12 rounded' alt='user-icon' src={user?.photoURL}></img>
          <button onClick={handleSignout} className='p-2 m-2 size-12 rounded text-white font-normal'>Sign out</button>
        </div>}
    </div>
  )
}

export default Header