import react from "react";
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';

const Login = () => {
    return(
        <div id="login-page">
            <div id="login-container">
                <h2>Welcome to WeMeet!</h2>
                <div className="login-button goggle">
                    <GoogleOutlined /> Sign in with google
                    <br/> <br/>


                    <div className="login-button facebook">
                    <GoogleOutlined /> Sign in with facebook
            
                    </div>
                    </div>

                </div>
        </div>

    );
}

export default Login;