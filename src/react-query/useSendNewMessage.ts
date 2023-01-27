import { useMutation, UseMutationOptions } from 'react-query'
import { ChatItem, sendNewMessage } from 'setup/supabase'

const useSendNewMessage = (options?: UseMutationOptions<any, any, any, any>) =>
  useMutation<any, any, Partial<ChatItem>>(
    (newMessage) => sendNewMessage(newMessage),
    options
  )

export default useSendNewMessage
