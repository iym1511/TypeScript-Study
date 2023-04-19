import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './page/Test';
import Todo from './page/Todo';
import Todolist from './page/Todolist';
import NaverApi from './page/NaverApi';
import LostArkApi from './page/LostArkApi';
import { Route, RouterProvider, Routes } from 'react-router-dom';
import { routers } from './router';



function App() {
  return (
    <div className="App">
      <RouterProvider router={routers}/>
      
        {/* <Test />
        <Todo /> */}
        {/* <Todolist />
        <LostArkApi /> */}
    </div>
  );
}

export default App;
