import { createClient } from '@supabase/supabase-js'

interface ChatItem {
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

export const listChatHistoriesByRoom = async (room: string) => {
  const result = await supabase.from('chat').select().eq('room', room)

  return result
}

export const sendNewMessage = async (info: Partial<ChatItem>) => {
  const result = await supabase.from('chat').insert(info)

  return result
}
