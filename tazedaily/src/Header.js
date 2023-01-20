import logo from './images/logo.png';
import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return(
        <div className="container text-center">
            <div>
                <Button variant="p-0 outline-*-light" href="/">
                    <img src={logo} alt="TAZE Daily"/>
                </Button>
            </div>
            <div>
                <div className ="container row align-items-start">
                    <div className="col p-0">
                        <center><hr className="divider"></hr></center>
                        <Button variant="outline-*-light" href="/business">BUSINESS</Button>
                        <Button variant="outline-*-light" href="/entertainment">ENTERTAINMENT</Button>
                        <Button variant="outline-*-light" href="/food">FOOD</Button>
                        <Button variant="outline-*-light" href="/health">HEALTH</Button>
                        <Button variant="outline-*-light" href="/politics">POLITICS</Button>
                        <Button variant="outline-*-light" href="/sports">SPORTS</Button>
                        <Button variant="outline-*-light" href="/style">STYLE</Button>
                        <Button variant="outline-*-light" href="/technology">TECHNOLOGY</Button>
                        <Button variant="outline-*-light" href="/travel">TRAVEL</Button>
                        <center><hr className="divider"></hr></center>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
