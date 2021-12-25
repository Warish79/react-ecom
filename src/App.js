import React from 'react';
import {BrowserRouter, Link, NavLink, Route, Router, Routes,} from 'react-router-dom';
import Login from './components/login/Login';
import Profile from './components/userprofile/Profile';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Dashboard from './pages/Dashboard';
import Addproduct from './components/product_data/Addproduct';
import Addcat from './pages/Addcat';
import "bootstrap/dist/js/bootstrap.bundle.min";

import SignUp from './components/login/Register';
import Footer from './components/Footer';
import Error404 from './pages/Error';



function App() {
    return (
      <div >  
     <Navbar/>
     <Dashboard/>

     <Routes>
       
       <Route   path= "/dashboard" component={Dashboard}/>
       <Route   path= "/product" component={Product}/>
       <Route   path= "/add Product" component={Addproduct}/>
       <Route   path= "/Profile" component={Profile}/>
     
       <Route   path= "/Addcategories" component={Addcat}/>
     
       <Route   path= "/Login" component={Login}/>
       <Route   path= "/" component={SignUp}/>
     
       <Route  component={Error}/>

     
       </Routes>
       <Footer/>

      </div>
      
    );
  
}

export default App;
