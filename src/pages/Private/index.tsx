import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';

export const Private = () => {
    const auth = useContext(AuthContext);

    return (
        <div>
            <h2>Pagina privada</h2>
            <p>olá {auth.user?.name}</p>
        </div>
    );
};
