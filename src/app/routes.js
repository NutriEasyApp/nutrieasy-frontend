import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NativeRouter} from "react-router-native";

import AboutApp from './pages/AboutApp';
import Foods from './pages/Foods';
import Graphics from './pages/Graphics';
import Menu from './pages/Menu';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import FormHealthAnalysis from './pages/FormHealthAnalysis';
import DietProposal from './pages/DietProposal';
import Main from './pages/Main';
import Profile from './pages/Profile';
import Recipes from './pages/Recipes';
import Reports from './pages/Reports';
import SideDish from './pages/SideDish';

//NativeRouter -> Expo Mobile
//BrowserRouter -> Expo Web

export default function Routes(){
    return(
        <NativeRouter >
             <Switch>
                 <Route path="/about-app" component={AboutApp}></Route>
                 <Route path="/foods"  component={Foods}></Route>
                 <Route path="/graphics" component={Graphics}></Route>
                 <Route path="/menu"  component={Menu}></Route>
                 <Route path="/login" component={Login}></Route>
                 <Route path="/signup" component={SignUp}></Route>
                 <Route path="/formhealthanalysis" component={FormHealthAnalysis}></Route>
                 <Route path="/dietproposal" component={DietProposal}></Route>
                 <Route path="/" component={Main}></Route>
                 <Route path="/profile" component={Profile}></Route>
                 <Route path="/recipes"component={Recipes}></Route>
                 <Route path="/reports" component={Reports}></Route>
                 <Route path="/side-dish" component={SideDish}></Route>
             </Switch>
        </NativeRouter>
    );  
};