import styled from 'styled-components'
import dayjs from 'dayjs'

import MessageInfo from 'components/MessageInfo'

import type { ChatItem } from 'setup/supabase'

interface SenderMessageBoxProps {
  data: ChatItem
}

const SenderMessageBox = ({ data }: SenderMessageBoxProps) => {
  return (
    <SenderMessageBoxContainer>
      <MessageInfo>
        <span>คุณ {data.from}</span>

        <div className="message-block">{data.message}</div>
      </MessageInfo>

      <div className="time-sent">{dayjs(data.created_at).fromNow()}</div>
    </SenderMessageBoxContainer>
  )
}

export default SenderMessageBox

const SenderMessageBoxContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 24px;

  .message-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > .message-block {
      padding: 12px;
      background: #f1f1f1;
      border-radius: 12px;
    }
  }

  .time-sent {
    font-size: 12px;
    color: #999;
  }
`
