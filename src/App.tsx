import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './page/Test';
import Todo from './page/Todo';
import Todolist from './page/Todolist';
import NaverApi from './page/NaverApi';
import LostArkApi from './page/LostArkApi';
import { Route, RouterProvider, Routes } from 'react-router-dom';
// import { routers } from './router';

import { createBrowserRouter } from "react-router-dom";
import { Router as RemixRouter } from '@remix-run/router/dist/router'
import Home from "./page/Home";
import Login from "./page/Login";
import PageA from "./page/PageA";
import PageC from "./page/PageC";
import PageB from "./page/PageB";
import Whether from './page/Whether';

interface RouterElement {
    id: number
    path: string
    label: string
    element: React.ReactNode
    withAuth?:boolean
}

interface SidebarElement {
    id: number
    label: string;
    path: string;
  }

const routerData: RouterElement[] = [
    {
        id: 0,
        path: '/',
        label: 'Home',
        element: <Home />,
        withAuth: false
    },
    {
        id: 1,
        path: '/login',
        label: '로그인',
        element: <Login />,
        withAuth: false
    },
    {
        id: 2,
        path: '/page-a',
        label: '페이지 A',
        element: <PageA />,
        withAuth: false
    },
    {
        id: 3,
        path: '/page-b',
        label: '페이지 B',
        element: <PageB />,
        withAuth: true
    },
    {
        id: 4,
        path: '/page-c',
        label: '페이지 C',
        element: <PageC />,
        withAuth: true
    },
]

function App() {
  return (
    <div className="App">
        {/* <Test />
        <Todo /> */}
        <Todolist />
        <LostArkApi />
        <Whether />
    </div>
  );
}

export default App;
