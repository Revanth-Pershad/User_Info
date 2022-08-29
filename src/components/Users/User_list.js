import React from 'react';

import Card from '../UI/Card';
import classes from './User_list.module.css';

const User_list = (props) => {
  return (
    <Card className={classes.users}>
        <ul>
            {props.users.map(user => {
                return(
                    <li key={user.userId}>{user.name} {user.age} years old</li>
                )
            })}
        </ul>
    </Card>
  )
}

export default User_list