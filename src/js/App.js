import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import '../css/App.css';

import Navbar from '../components/navbar';
import Login from '../pages/login';
import Home from '../pages/home';
import Signin from '../pages/signin';
import Footer from '../components/footer';
import Error from '../pages/error';
import Profile from '../pages/profile';
import Departament from '../pages/departament.js';
import Subdepartament from '../pages/subdepartament';
import ItemPage from '../pages/item';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../redux-features/user-reducer';
import Notifications from '../pages/notifications';
import MyItems from '../pages/my-items';
import UploadItems from '../pages/upload-item';
import Trade from '../components/trade';
import Donate from '../components/donate';

function App() {

  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getUserInfo({username:'Fulano', rm:'xxxxxx', email:'teste@teste.com', authToken:'a78sd@asasf#as9d6a89s6faw124!u'}))
  },[]);

  const userInfo = useSelector((state)=>state.userR.userInfo);
  const siteConfig = useSelector((state)=>state.siteR);


  return (
    <div className='flex-column app-container'>
      <Navbar
        userInfo = {userInfo}
      />
      <Trade
        siteConfig = {siteConfig}
      />
      <Donate
        siteConfig = {siteConfig}
      />
      <div className='inner-app-container'>
          <Routes>
            <Route
              index
              element={<Home/>}
            />
            <Route
              path={'/u/entrar'}
              element={<Login/>}
            />
            <Route
              path={'/u/cadastro'}
              element={<Signin/>}
            />
            <Route
              path={'/u/:usuario/'}
              element={<Profile/>}
            />
            <Route
              path={'/u/:usuario/notificacoes'}
              element={<Notifications/>}
            />
            <Route
              path={'/u/:usuario/meus itens'}
              element={<MyItems/>}
            />
            <Route
              path={'/u/:usuario/criar anuncio'}
              element={<UploadItems/>}
            />
            <Route
              path={'/d/:departamento'}
              element={<Departament/>}
            />
            <Route
              path={'/d/:departamento/:subdepartamento'}
              element={<Subdepartament
                url = {location.pathname}
              />}
            />
            <Route
              path={'/i/:itemID'}
              element={<ItemPage
                itemID = {location.pathname.split('/')[2]}
              />}
            />
            <Route
              path={'*'}
              element={<Error/>}
            />
          </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
