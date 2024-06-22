import React, { useRef, useState } from 'react';

import styles from './AddUser.module.css';
import Button from './Button';

const initialUserInput = {
    'userName': '',
    'age': ''
};

export default function AddUser({addUser}) {
    const [userInput, setUserInput] = useState(initialUserInput);
    const inputFocus = useRef()

    const submitHandler = (e) => {
        e.preventDefault();
        addUser(userInput);
        setUserInput(initialUserInput);
        inputFocus.current.focus();
    };

    const inputChangeHandler = (input, value) => {
        setUserInput((prevInput) => {
            return{
                ...prevInput,
                [input]: value,
            };
        });
    };

  return (
    <form onSubmit={submitHandler}>
        <div className={styles.input}>
            <p>
                <label htmlFor="userName">Username</label>
                <input
                    ref={inputFocus} 
                    onChange={(e) => inputChangeHandler('userName', e.target.value)}
                    value={userInput['userName']} 
                    type='name' 
                    id='userName' 
                    autoComplete='userName' 
                />
            </p>
            <p>
                <label htmlFor="age">Age (Years)</label>
                <input
                    onChange={(e) => inputChangeHandler('age', e.target.value)} 
                    value={userInput['age']}
                    type='number' 
                    id='age' 
                    autoComplete='age' 
                />
            </p>
            <Button type='submit' label='Add User' />
        </div>
    </form>
  )
}
