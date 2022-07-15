import React, { useContext } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Private } from './pages/Private';

import * as Style from './AppStyle';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';

function App() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = async () => {
        await auth.signout();
        navigate('./');
    };

    return (
        <Style.WrapperApp>
            <header>
                <h1>Header do site</h1>
                <nav>
                    <Style.WrapperLink to="/"> Home</Style.WrapperLink>
                    <Style.WrapperLink to="/private"> Pagina privada</Style.WrapperLink>
                    {auth.user && <button onClick={handleLogout}>Sair</button>}
                </nav>
            </header>
            <hr />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/private"
                    element={
                        <RequireAuth>
                            <Private />
                        </RequireAuth>
                    }
                />
            </Routes>
        </Style.WrapperApp>
    );
}

export default App;
