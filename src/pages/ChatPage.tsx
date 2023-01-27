import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import ChatHistory from 'components/ChatHistory'
import FadeUp from 'components/FadeUp'

import useSendNewMessage from 'react-query/useSendNewMessage'

import supabase, { ChatItem, schemaDBChangesChannel } from 'setup/supabase'

export type ChatParams = Record<'roomID' | 'username', string>

const ChatPage = () => {
  const params = useParams<ChatParams>()
  const username = params.username
  const roomID = params.roomID

  const scrollElementRef = useRef<HTMLDivElement | null>()

  const [newMessage, setNewMessage] = useState<string>('')
  const [newComingMessages, setNewComingMessages] = useState<ChatItem[]>([])

  const sendNewMessageMutation = useSendNewMessage({
    onSuccess() {
      setNewMessage('')
    },
  })

  useEffect(() => {
    setTimeout(() => {
      scrollElementRef.current?.scrollIntoView()
    }, 100)
  }, [])

  useEffect(() => {
    if (roomID == null) {
      return
    }

    supabase
      .channel(roomID)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat',
          filter: `room=eq.${roomID}`,
        },
        (payload) => {
          setNewComingMessages((prev) => [...prev, payload.new as ChatItem])

          setTimeout(() => {
            scrollElementRef.current?.scrollIntoView()
          }, 350)
        }
      )
      .subscribe()

    return () => {
      schemaDBChangesChannel.unsubscribe()
    }
  }, [roomID])

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        if (username == null || roomID == null || newMessage.length === 0) {
          return
        }

        sendNewMessageMutation.mutate({
          from: username,
          room: roomID,
          message: newMessage,
        })
      }}
    >
      <FadeUp startAnimate>
        <span className="title">ห้อง {params.roomID}</span>
      </FadeUp>

      <FadeUp startAnimate>
        <ChatHistory newComingMessages={newComingMessages}>
          <div ref={(node) => (scrollElementRef.current = node)} />
        </ChatHistory>
      </FadeUp>

      <FadeUp startAnimate>
        <ChatMessageInputContainer>
          <input
            style={{
              fontSize: 16,
            }}
            value={newMessage}
            onChange={(event) => setNewMessage(event.target.value)}
          />

          <span className="help">กด Enter เพื่อส่ง</span>

          <button
            type="submit"
            style={{ position: 'absolute', visibility: 'hidden' }}
          >
            ส่ง
          </button>
        </ChatMessageInputContainer>
      </FadeUp>
    </form>
  )
}

export default ChatPage

const ChatMessageInputContainer = styled.div`
  position: relative;

  > .help {
    position: absolute;
    bottom: 0;
    right: 5px;
    color: #999;
  }
`
