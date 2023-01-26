import type { RouteObject } from 'react-router-dom'

import ChatPage from 'pages/ChatPage'
import CreateRoomPage from 'pages/CreateRoomPage'
import JoinRoomPage from 'pages/JoinRoomPage'
import RoomActionPage from 'pages/RoomActionPage'

type RouteKey = 'root' | 'roomAction' | 'createRoom' | 'joinRoom' | 'chat'

export const paths: Record<RouteKey, string> = {
  root: '/',

  roomAction: '/room-action/:username',
  createRoom: '/create-room/:username',
  joinRoom: '/join-room/:username',

  chat: '/chat/:roomID/:username',
}

export const roomRoutes: RouteObject[] = [
  {
    path: paths.roomAction,
    element: <RoomActionPage />,
  },
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
