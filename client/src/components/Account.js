import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Div = styled.div`
    border: 1px dotted black;
    width: 20%;
    padding: 2%;
    margin: 1%;
    background-color: navy;

    .name {
        text-decoration: underline;
        font-weight: bold;
        color: white;
    }

    .budget {
        color: white;
    }
`

const Account = props => {
    const handleDelete = id => {
        window.location.reload();
        axios.delete(`http://localhost:5000/accounts/${id}`)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <Div>
            <p className='name'>{props.name}</p>
            <p className='budget'>{props.budget}</p>
            <button onClick={() => {
                handleDelete(props.id);
            }}>Delete</button>
        </Div>
    );
}

export default Account;