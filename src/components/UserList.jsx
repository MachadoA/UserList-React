import style from './UserList.module.css';

export default function UserList({users, removeUserHandler}){
    const handleRemove =(index) =>{
        removeUserHandler(index);
    }
    
    return(
        <div className={style.users}>
            <ul>
                {users.map((user, index) => (
                    <li>
                        <strong>{user.userName}  </strong> : {user.age} years old <span onClick={() => handleRemove(index)}>&#128465;</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}