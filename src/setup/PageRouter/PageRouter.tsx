import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'

import PageLayout from 'layout/PageLayout'

import HomePage from 'pages/HomePage'

import ContentCenter from 'component/ContentCenter'

import { certifiedRoutes, paths, roomRoutes } from './routes'

import { certifiedLoader, roomLoader } from './utils'

const PageRouter = () => {
  const router = createBrowserRouter([
    {
      element: <RootProvider />,
      children: [
        {
          path: paths.root,
          element: <HomePage />,
        },
        {
          loader: () => roomLoader(),
          children: roomRoutes,
          errorElement: <RouteError />,
        },
        {
          loader: () => certifiedLoader(),
          children: certifiedRoutes,
          errorElement: <RouteError />,
        },
      ],
    },
  ])

  return <RouterProvider router={router}></RouterProvider>
}

export default PageRouter

const RootProvider = () => {
  return (
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <PageLayout>
        <Outlet />
      </PageLayout>
    </QueryParamProvider>
  )
}

const RouteError = () => {
  return (
    <ContentCenter>
      <span className="title">
        คุณไม่สามารถเข้าถึงหน้านี้โปรดลองใหม่อีกครั้ง
      </span>

      <button onClick={() => (window.location.href = '/')}>
        กลับไปหน้าแรก
      </button>
    </ContentCenter>
  )
}
