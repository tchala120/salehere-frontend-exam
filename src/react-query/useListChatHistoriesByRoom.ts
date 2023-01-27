import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query'

import { ChatItem, listChatHistoriesByRoom } from 'setup/supabase'

const useListChatHistoriesByRoom = (
  room: string,
  options?: UseQueryOptions<any, any, any, any>
): UseQueryResult<ChatItem[], any> =>
  useQuery(
    ['listChatHistoriesByRoom', room],
    () => listChatHistoriesByRoom(room),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
      ...options,
    }
  )

export default useListChatHistoriesByRoom
