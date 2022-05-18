import React from 'react';
import { useHistory } from 'react-router-dom';
import {ChatEngine} from  'react-chat-engine';
import  {auth} from '../firebase';

const Chats = () => {
    const history = useHistory();

    const handleLogout = async () => { 
        await auth.signOut();
        history.push('/');
    }


    return (
        <div className="chats-page">
            <div className="nav-bar">
                 <div className="logo-tab">
                     WEMEET
                </div>
                 <div onClick= {handleLogout} className="logout-tab">
                     Logout
                </div>
                </div>   
        

        <ChatEngine 
        height="calc(100vh - 66px)"
        ProjectId = "6569d195-2778-4945-9992-b96447b15b42"
        />
        </div>
    );
}

export default Chats;