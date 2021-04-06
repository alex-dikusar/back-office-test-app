import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function SecureRoute({ isLoggedIn, children, ...rest }: any) {
    if (!isLoggedIn) {
        return (<Redirect to='/login' />)
    }

    return (<Route {...rest}>{children}</Route>);
}

export default SecureRoute;