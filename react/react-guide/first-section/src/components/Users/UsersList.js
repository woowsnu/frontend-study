import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user, i) => (
          <li key={user.name}>
            {user.name} {user.age}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
