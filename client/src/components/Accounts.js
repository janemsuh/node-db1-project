import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Account from './Account';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Accounts = () => {
    const [accounts, setAccounts] = useState();

    useEffect(() => {
        axios.get('http://localhost:5000/accounts')
        .then(res => {
            console.log(res);
            setAccounts(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }, [accounts])

    return (
        <Wrapper>
            {
                accounts && accounts.map(item => {
                    console.log(item);
                    return (
                        <Account
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            budget={item.budget}
                        />
                    );
                })
            }
        </Wrapper>
    );
}

export default Accounts;