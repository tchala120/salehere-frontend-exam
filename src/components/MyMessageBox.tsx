import styled from 'styled-components'
import dayjs from 'dayjs'

import MessageInfo from 'components/MessageInfo'

import type { ChatItem } from 'setup/supabase'

interface MyMessageBoxProps {
  data: ChatItem
}

const MyMessageBox = ({ data }: MyMessageBoxProps) => {
  return (
    <MyMessageBoxContainer>
      <div className="time-sent">{dayjs(data.created_at).fromNow()}</div>

      <MessageInfo fromMe>
        <span>คุณ {data.from}</span>

        <div className="message-block">{data.message}</div>
      </MessageInfo>
    </MyMessageBoxContainer>
  )
}

export default MyMessageBox

const MyMessageBoxContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 24px;

  .time-sent {
    font-size: 12px;
    color: #999;
    flex: 1 1 auto;
    text-align: right;
  }
`
