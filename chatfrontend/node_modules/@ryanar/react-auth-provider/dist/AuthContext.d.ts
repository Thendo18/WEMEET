import React from 'react';
export declare type IAuthContext = {
    authenticated: boolean;
    setAuthenticated: (isAuthenticated: boolean) => void;
};
export declare const AuthContext: React.Context<IAuthContext>;
