import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; //Redux Hooks
import { getUsers } from '../redux/actions/users';
import CardComponent from './CardComponent';
import { Button } from 'react-bootstrap';

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector((state => state.users.users)); //Take users from Redux store
    const loading = useSelector((state => state.users.loading));
    const error = useSelector((state => state.users.error));
    
   
    useEffect(() => {
        dispatch(getUsers())
    }, []);

    const raiseAnErrorInSentry = () => {
        alert("ERROR GENERATED IN SENTRY.IO!");
        throw new Error("Error generated from a netlify hosted website.");
    };

    return (
        <>
            <h1>React Redux Saga App</h1>
            <Button variant="primary" onClick={raiseAnErrorInSentry}>Raise Sentry Error</Button>
            {users.loading && <p>Loading...</p>}

            {users.length > 0 && users.map((user) => 
                <CardComponent user={user} key={user.id} />
            )}

            {users.length === 0 && <p>No users available!</p>}
            
            {error && !loading && <p>Error: {error}</p>}
        </>
    )
}

export default Users;