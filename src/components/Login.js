import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import React from 'react';

const Login = () => {
    return(
        <div id="login-page">
            <div id="login-container">
                <h2>Welcome to WeMeet!</h2>
                <div className="login-button goggle">
                    <GoogleOutlined /> Sign in with google
                    <br/> <br/>


                    <div className="login-button facebook">
                    <FacebookOutlined /> Sign in with facebook
            
                    </div>
                    </div>

                </div>
        </div>

    );
}

export default Login;