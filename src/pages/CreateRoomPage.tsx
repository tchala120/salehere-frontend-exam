import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'

import ContentContainer from 'components/ContentContainer'

import { routeTo } from 'helpers/utils'

import { paths } from 'setup/PageRouter'

const CreateRoomPage = () => {
  const [room, setRoom] = useState<string>()

  const params = useParams()
  const navigate = useNavigate()

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        if (room == null || room.length === 0) {
          toast('กรุณากรอกชื่อห้อง', {
            type: 'error',
          })

          return
        }

        navigate(
          routeTo(paths.chat, {
            params: {
              roomID: room,
              username: params.username,
            },
          })
        )
      }}
    >
      <ContentContainer>
        <span className="title">สร้างห้องใหม่</span>

        <input
          placeholder="ระบุชื่อห้อง"
          value={room}
          onChange={(event) => setRoom(event.target.value)}
        />

        <CreateRoomActionBar>
          <span className="text-button">กลับ</span>
          <button type="submit">ยืนยัน</button>
        </CreateRoomActionBar>

        <ToastContainer position="bottom-center" />
      </ContentContainer>
    </form>
  )
}

export default CreateRoomPage

const CreateRoomActionBar = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
`
