import styled from 'styled-components'

export interface FormValues {
  room?: string
}

interface ChatRoomProps {
  data?: FormValues
  onChange?: (name: keyof FormValues, value: string) => void
}

const ChatForm = ({ data, onChange }: ChatRoomProps) => {
  return (
    <>
      <input
        placeholder="ระบุชื่อห้อง"
        value={data?.room}
        onChange={(event) => onChange?.('room', event.target.value)}
      />

      <RoomActionBarContainer>
        <span className="text-button">กลับ</span>
        <button type="submit">ยืนยัน</button>
      </RoomActionBarContainer>
    </>
  )
}

export default ChatForm

const RoomActionBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
`
