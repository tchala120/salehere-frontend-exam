import { createClient } from '@supabase/supabase-js'

export interface ChatItem {
  id: number
  message: string
  from: string
  room: string
  created_at: string
}

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY,
  {
    realtime: {
      params: {
        eventsPerSecond: 10,
      },
    },
  }
)

export default supabase

export const schemaDBChangesChannel = supabase.channel('schema-db-changes')

export const listChatHistoriesByRoom = async (room: string) => {
  const result = await supabase.from('chat').select()

  return result.data as ChatItem[]
}

export const sendNewMessage = async (info: Partial<ChatItem>) => {
  const result = await supabase.from('chat').insert(info)

  return result.data
}
