import { createBrowserRouter } from "react-router-dom";
import { Router as RemixRouter } from '@remix-run/router/dist/router'
import Home from "./page/Home";
import Login from "./page/Login";
import PageA from "./page/PageA";
import PageC from "./page/PageC";
import PageB from "./page/PageB";

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

// 프리온보딩 3회차 참고
  // 인증이 필요한 페이지는 GeneralLayout 으로 감싸기
  // GeneralLayout 에는 페이지 컴포넌트를 children 으로 전달
export const routers: RemixRouter = createBrowserRouter(
    routerData.map((router)=>{
        if(router.withAuth){
            return {
                path: router.path,
                // element: <GeneralLayout>{ router.element }</GeneralLayout>
            }
        }else {
            return{
                path: router.path,
                element: router.element
            }
        }
    })
)

export const SidebarContent: SidebarElement[] = routerData.reduce((prev, router) => {
    if(!router.withAuth) return prev

    return [
        ...prev,
        {
            id: router.id,
            path: router.path,
            label: router.label
        }
    ]
},[] as SidebarElement[])