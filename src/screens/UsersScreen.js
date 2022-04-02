import React from 'react';
import Sidebar from './../components/sidebar';
import Header from './../components/Header';
import UserComponent from '../components/users/UserComponent';
// import { useSelector } from 'react-redux';

const UsersScreen = () => {
  // const userList = useSelector((state) => state.userList);
  // const { users } = userList;

  // console.log(users);
  return (
    <>
      <Sidebar />
      <main className='main-wrap'>
        <Header />
        <UserComponent />
      </main>
    </>
  );
};

export default UsersScreen;
