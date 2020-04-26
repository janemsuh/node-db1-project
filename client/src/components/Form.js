import React, { useState } from 'react';
// import styled from 'styled-components';
import axios from 'axios';

const Form = () => {
    const [newAccount, setNewAccount] = useState({
        name: '',
        budget: 0
    });

    const handleChange = e => {
        setNewAccount({ ...newAccount, [e.target.name]: e.target.value})
        console.log(newAccount);
    };

    const handleSubmit = e => {
        // e.preventDefault();
        axios.post('http://localhost:5000/accounts', newAccount)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err)
        })
        setNewAccount({
            name: '',
            budget: 0
        })
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name='name'
                    placeholder='Enter name'
                    value={newAccount.name}
                    type='text'
                    onChange={handleChange}
                />
                <input
                    name='budget'
                    placeholder='Enter budget'
                    value={newAccount.budget}
                    type='integer'
                    onChange={handleChange}
                />
                <button type='submit'>Add Account</button>
            </form>
        </div>
    )
}

export default Form;