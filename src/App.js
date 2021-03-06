import React from 'react'
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Starg from "./components/starg";
import Home from "./components/home";
import Games from "./components/games";
import Snake from "./components/games/snake/snake";
import CoH from "./components/games/coldOrHot/coh";
import Speed from "./components/games/speed";

function App() {
    return (
        <BrowserRouter basename="/starg">
            <div className="App">
                <Starg/>
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/games'}  component={Games}/>
                    <Route path={'/snake'}  component={Snake}/>
                    <Route path={'/coh'}  component={CoH}/>
                    <Route path={'/speed'}  component={Speed}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
