import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

ReactDOM.render (
        <div>
            <h1 className="text-align=center">TAZE Daily Now</h1>
            <Button color="primary" className="btn btn-secondary col-md-2" type="submit">Login</Button>
        </div>, 
        document.getElementById("root")
    );