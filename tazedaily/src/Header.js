import logo from './images/logo.png';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return(
        <div className="text-center">
            <img className="logo" src={logo} alt="TAZE Daily"/>
            <div>
                <div className ="row align-items-start">
                    <div className="col p-0">
                        <center><hr class="divider"></hr></center>
                        <button type="button" className="btn btn-outline-*-secondary" to="../genre/BUSINESS">BUSINESS</button>
                        <button type="button" className="btn btn-outline-*-secondary">ENTERTAINMENT</button>
                        <button type="button" className="btn btn-outline-*-secondary">FOOD</button>
                        <button type="button" className="btn btn-outline-*-secondary">HEALTH</button>
                        <button type="button" className="btn btn-outline-*-secondary">POLITICS</button>
                        <button type="button" className="btn btn-outline-*-secondary">SPORTS</button>
                        <button type="button" className="btn btn-outline-*-secondary">STYLE</button>
                        <button type="button" className="btn btn-outline-*-secondary" to="/technology">TECHNOLOGY</button>
                        <button type="button" className="btn btn-outline-*-secondary">TRAVEL</button>
                        <center><hr class="divider"></hr></center>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;