import React, { useEffect } from 'react';
import './App.css';
import { auth } from './firebase';
import { login,logout,selectUser } from './features/counter/userSlice';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { useDispatch, useSelector } from 'react-redux';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user=useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(()=>{
     const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
     console.log(userAuth);
     dispatch(login({
      uid: userAuth.uid,
      email: userAuth.email,
     }))
      }else{
        dispatch(logout);
      }
     });
     return unsubscribe;
  },[])

  return (
    <div className="app">
       <Router>
      {!user ?  (
        <LoginScreen />
      ): (
       
        <Routes>
        
          <Route  path="/" element={<HomeScreen/>}/>
          <Route path="/home" element={<HomeScreen/>}/>
          <Route path='/profile' element={<ProfileScreen/>}/>
          
        </Routes>
        
      )}
      
      </Router>
    </div>
  );
}

export default App;
