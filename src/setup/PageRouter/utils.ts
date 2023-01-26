import { getSearchParams } from 'helpers/utils'

export const roomLoader = () => {
  const searchParams = getSearchParams()

  const username = searchParams.get('username')

  if (username == null) {
    throw Error()
  }

  return {
    username,
  }
}

export const certifiedLoader = () => {
  const searchParams = getSearchParams()

  const username = searchParams.get('username')
  const room = searchParams.get('room')

  console.log(username == null, room == null)

  if (username == null || room == null) {
    throw Error()
  }

  return {
    username,
    room,
  }
}
