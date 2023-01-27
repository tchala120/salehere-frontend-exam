import type { ReactNode } from 'react'

import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import SenderMessageBox from 'components/SenderMessageBox'
import MyMessageBox from 'components/MyMessageBox'

import useListChatHistoriesByRoom from 'react-query/useListChatHistoriesByRoom'

import type { ChatParams } from 'pages/ChatPage'
import type { ChatItem } from 'setup/supabase'

interface ChatHistoryProps {
  newComingMessages: ChatItem[]
  children: ReactNode
}

const ChatHistory = ({ newComingMessages, children }: ChatHistoryProps) => {
  const params = useParams<ChatParams>()

  const roomID = params.roomID as string
  const username = params.username as string

  const listChatHistoriesQuery = useListChatHistoriesByRoom(roomID)

  return (
    <ChatHistoryContainer>
      {renderChatHistory()}
      {children}
    </ChatHistoryContainer>
  )

  function renderChatHistory() {
    if (
      listChatHistoriesQuery.isLoading ||
      listChatHistoriesQuery.data == null
    ) {
      return
    }

    const concatMessages = [
      ...listChatHistoriesQuery.data,
      ...newComingMessages,
    ]

    return (
      <>
        {concatMessages.map((item) => {
          const fromMe = item.from === username

          if (fromMe) {
            return <MyMessageBox key={item.id} data={item} />
          }

          return <SenderMessageBox key={item.id} data={item} />
        })}
      </>
    )
  }
}

export default ChatHistory

const ChatHistoryContainer = styled.div`
  width: 100%;
  min-height: 50vh;
  max-height: 50vh;
  overflow-y: auto;
  background: #f9f9f9;
  padding: 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
