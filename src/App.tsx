import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './page/Test';
import Todo from './page/Todo';
import Todolist from './page/Todolist';
import NaverApi from './page/NaverApi';



function App() {
  return (
    <div className="App">
      {/* <Test />
      <Todo /> */}
      <Todolist />
      <NaverApi />
    </div>
  );
}

export default App;
