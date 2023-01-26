import ChatPage from 'pages/ChatPage'
import CreateRoomPage from 'pages/CreateRoomPage'
import JoinRoomPage from 'pages/JoinRoomPage'
import type { RouteObject } from 'react-router-dom'

type RouteKey = 'root' | 'createRoom' | 'joinRoom' | 'chat'

export const paths: Record<RouteKey, string> = {
  root: '/',

  createRoom: '/create-room',
  joinRoom: '/join-room',

  chat: '/chat/:id',
}

export const roomRoutes: RouteObject[] = [
  {
    path: paths.createRoom,
    element: <CreateRoomPage />,
  },
  {
    path: paths.joinRoom,
    element: <JoinRoomPage />,
  },
]

export const certifiedRoutes: RouteObject[] = [
  {
    path: paths.chat,
    element: <ChatPage />,
  },
]
