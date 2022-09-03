import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header" style={{minHeight: "50vh", marginBottom:"5vh"}}>
                    {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                    {/*<a*/}
                    {/*    className="App-link"*/}
                    {/*    href="https://reactjs.org"*/}
                    {/*    target="_blank"*/}
                    {/*    rel="noopener noreferrer"*/}
                    {/*>*/}
                    {/*    Learn React*/}
                    {/*</a>*/}
                    <Link to="/">Home</Link>
                    <Link to="/OtherPage">Other Page</Link>
                </header>
                <div>
                    <Routes>
                        <Route exact path="/" element={<Fib />}/>
                        <Route path="/otherpage" element={<OtherPage />}/>
                    </Routes>
                </div>
            </div>
        </Router>


    );
}

export default App;
