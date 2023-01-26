import { LoaderFunctionArgs } from 'react-router-dom'

export const roomLoader = ({ params }: LoaderFunctionArgs) => {
  if (params.username == null) {
    throw Error()
  }

  return {
    username: params.username,
  }
}

export const certifiedLoader = ({ params }: LoaderFunctionArgs) => {
  const { username, roomID } = params

  if (username == null || roomID == null) {
    throw Error()
  }

  return {
    username,
    roomID,
  }
}
