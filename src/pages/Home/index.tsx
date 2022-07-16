import React, { useState } from 'react';
import { NewUser } from '../../types/NewUser';
import * as Style from './HomeStyle';

export const Home = () => {
    const [newuser, setNewUser] = useState<NewUser | null>(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cell, setCell] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [objetct, setObjetct] = useState<any | null>(null);

    const matchPassword = () => {
        if (password.length === 0 || confirmpassword.length === 0) {
            return false;
        } else {
            if (password === confirmpassword) {
                return true;
            } else {
                return false;
            }
        }
    };

    const handleSubmit = () => {
        if (matchPassword()) {
            setNewUser({ name: name, email: email, cell: cell, password: password });
            const dict = JSON.parse(JSON.stringify({ name: name, email: email, cell: cell, password: password }));
            setObjetct(dict);
            console.log('enviando form');
            console.log(dict);
            return true;
        } else {
            console.log('as senhas devem ser iguais e nao nulas');
            return false;
        }
    };

    return (
        <form action="">
            <Style.registerBox>
                <Style.title>Cadastro</Style.title>
                <Style.formBox>
                    <Style.itemBox>
                        <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Nome" required />
                    </Style.itemBox>
                    <Style.itemBox>
                        <input type="phone " onChange={(e) => setCell(e.target.value)} placeholder="celular" required />
                    </Style.itemBox>
                    <Style.itemBox>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu email"
                            required
                        />
                    </Style.itemBox>
                    <Style.itemBox>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="senha"
                            required
                        />
                    </Style.itemBox>
                    <Style.itemBox>
                        <input
                            type="password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirmar senha"
                            required
                        />
                    </Style.itemBox>
                    <Style.itemBox>
                        <button
                            onClick={(e) => {
                                if (!handleSubmit()) {
                                    e.preventDefault();
                                } else {
                                    e.preventDefault();
                                }
                            }}
                            type="submit"
                        >
                            Cadastrar
                        </button>
                    </Style.itemBox>
                </Style.formBox>
            </Style.registerBox>
        </form>
    );
};
