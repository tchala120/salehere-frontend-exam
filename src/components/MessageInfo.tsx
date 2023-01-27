import styled from 'styled-components'

interface MessageInfoProps {
  fromMe?: boolean
}

const MessageInfo = styled.div<MessageInfoProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.fromMe ? 'flex-end' : 'flex-start')};

  > .message-block {
    padding: 12px;
    background: #f1f1f1;
    border-radius: 12px;
  }
`

export default MessageInfo
