import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './Components/App';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Error404 from './Components/Error/404';
import Images from './Components/visualizador/visualizador';

const AppRoutes = () => (
    <App>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Error404 />} />
            <Route path='/images' element={<Images />} />
        </Routes>
    </App>
)

export default AppRoutes;