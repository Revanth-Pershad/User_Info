import React, {useState} from 'react';

import Add_User from './components/Users/Add_User';
import User_list from './components/Users/User_list';

function App() {
  const [UserList, setUserList] = useState([]);

  const newUser = (uName, uAge) => {
    setUserList((prevState) => {
      return([...prevState, {name : uName, age : uAge, userId : Math.random().toString()}])
    })
  }

  return (
    <div>
      <Add_User addUser={newUser}/>
      <User_list users={UserList} />
    </div>
  );
}

export default App;
