import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import FadeUp from 'components/FadeUp'

export interface FormValues {
  room?: string
}

interface ChatRoomProps {
  data?: FormValues
  onChange?: (name: keyof FormValues, value: string) => void
}

const ChatForm = ({ data, onChange }: ChatRoomProps) => {
  const navigate = useNavigate()

  return (
    <>
      <FadeUp startAnimate>
        <input
          placeholder="ระบุชื่อห้อง"
          value={data?.room}
          onChange={(event) => onChange?.('room', event.target.value)}
        />
      </FadeUp>

      <FadeUp startAnimate>
        <RoomActionBarContainer>
          <span className="text-button" onClick={() => navigate(-1)}>
            กลับ
          </span>
          <button type="submit">ยืนยัน</button>
        </RoomActionBarContainer>
      </FadeUp>
    </>
  )
}

export default ChatForm

const RoomActionBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
`
