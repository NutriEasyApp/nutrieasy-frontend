import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NativeRouter} from "react-router-native";

import AboutApp from './pages/AboutApp';
import Diet from './pages/Diet';
import Foods from './pages/Foods';
import Graphics from './pages/Graphics';
import Login from './pages/Login';
import Main from './pages/Main';
import Profile from './pages/Profile';
import Recipes from './pages/Recipes';
import Reports from './pages/Reports';
import SideDish from './pages/SideDish';


export default function Routes(){
    return(
        <NativeRouter>
             <Switch>
                 <Route path="/about-app" exact component={AboutApp}></Route>
                 <Route path="/diet" exact component={Diet}></Route>
                 <Route path="/foods" exact component={Foods}></Route>
                 <Route path="/graphics" exact component={Graphics}></Route>
                 <Route path="/login" exact component={Login}></Route>
                 <Route path="/" exact component={Main}></Route>
                 <Route path="/profile" exact component={Profile}></Route>
                 <Route path="/recipes" exact component={Recipes}></Route>
                 <Route path="/reports" exact component={Reports}></Route>
                 <Route path="/side-dish" exact component={SideDish}></Route>
             </Switch>
        </NativeRouter>
    );  
};