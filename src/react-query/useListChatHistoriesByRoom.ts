import { useQuery, UseQueryOptions } from 'react-query'

import { listChatHistoriesByRoom } from 'setup/supabase'

const useListChatHistoriesByRoom = (
  room: string,
  options?: UseQueryOptions<any, any, any, any>
) =>
  useQuery(
    ['listChatHistoriesByRoom', room],
    () => listChatHistoriesByRoom(room),
    options
  )

export default useListChatHistoriesByRoom
