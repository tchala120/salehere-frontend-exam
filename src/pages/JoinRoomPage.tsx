import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

import ContentContainer from 'components/ContentContainer'
import ChatForm, { FormValues } from 'components/ChatForm'
import FadeUp from 'components/FadeUp'

import { routeTo } from 'helpers/utils'

import { paths } from 'setup/PageRouter'

const JoinRoomPage = () => {
  const [form, setForm] = useState<FormValues>({
    room: '',
  })

  const params = useParams()
  const navigate = useNavigate()

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        if (form?.room == null || form?.room.length === 0) {
          toast('กรุณากรอกชื่อห้อง', {
            type: 'error',
          })

          return
        }

        navigate(
          routeTo(paths.chat, {
            params: {
              roomID: form.room,
              username: params.username,
            },
          })
        )
      }}
    >
      <ContentContainer>
        <FadeUp startAnimate>
          <span className="title">เข้าร่วมแชท</span>
        </FadeUp>

        <ChatForm
          data={form}
          onChange={(name, value) =>
            setForm((prev) => ({
              ...prev,
              [name]: value,
            }))
          }
        />

        <ToastContainer position="bottom-center" />
      </ContentContainer>
    </form>
  )
}

export default JoinRoomPage
