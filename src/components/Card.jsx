import React, { useState } from 'react';
import AddUser from './AddUser';
import UserList from './UserList';
import ErrorModal from './ErrorModal';

import style from './Card.module.css';

export default function Card() {
  const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [invalidInput, setInvalidInput] = useState(null);
  
  const addUserHandler = (newUser) => {
    if (newUser.userName.trim() === '' && newUser.age.trim() === '') {
      setOpenModal(true);
      setInvalidInput('Username and Age');
    } else if (newUser.userName.trim() === '') {
      setOpenModal(true);
      setInvalidInput('Username');
    } else if (newUser.age.trim() === '' || parseInt(newUser.age) <= 0) {
      setOpenModal(true);
      setInvalidInput('Age');
    } else {
      setUsers((prevUsers) => [...prevUsers, newUser]);
    }
  };
  
  const removeUserHandler = (index) => {
    const updateUsers = users.filter((user,id) => id !== index);
    setUsers(updateUsers);
  };
  
  const closeModalHandler = () => {
    setOpenModal(false);
    setInvalidInput(null);
  };
  
  return (
    <>
    <div className={style.card}>
    <AddUser addUser={addUserHandler} />
    </div>
    
    
    {users.length > 0 && (
      <div className={style.card}>
      <UserList users={users} removeUserHandler={removeUserHandler} />
      </div>
    )}
    
    {openModal && invalidInput && (
      <ErrorModal input={invalidInput} onClose={closeModalHandler}/>
    )}
    </>
  )
}
