import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NativeRouter} from "react-router-native";

import AboutApp from './pages/AboutApp/index';
import Diet from './pages/Diet/index';
import Foods from './pages/Foods/index';
import Graphics from './pages/Graphics/index';
import Menu from './pages/Menu/index';
import Login from './pages/Login/index';
import SignUp from './pages/SignUp/index';
import Main from './pages/Main/index';
import Profile from './pages/Profile/index';
import Recipes from './pages/Recipes/index';
import Reports from './pages/Reports/index';
import SideDish from './pages/SideDish/index';

//NativeRouter -> Expo Mobile
//BrowserRouter -> Expo Web

export default function Routes(){
    return(
        <NativeRouter>
             <Switch>
                 <Route path="/about-app" exact component={AboutApp}></Route>
                 <Route path="/diet" exact component={Diet}></Route>
                 <Route path="/foods" exact component={Foods}></Route>
                 <Route path="/graphics" exact component={Graphics}></Route>
                 <Route path="/menu" exact component={Menu}></Route>
                 <Route path="/login" exact component={Login}></Route>
                 <Route path="/signup" exact component={SignUp}></Route>
                 <Route path="/" exact component={Main}></Route>
                 <Route path="/profile" exact component={Profile}></Route>
                 <Route path="/recipes" exact component={Recipes}></Route>
                 <Route path="/reports" exact component={Reports}></Route>
                 <Route path="/side-dish" exact component={SideDish}></Route>
             </Switch>
        </NativeRouter>
    );  
};