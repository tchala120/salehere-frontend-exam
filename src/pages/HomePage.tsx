import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

import FadeUp from 'components/FadeUp'
import UserCreationContainer from 'components/UserCreationContainer'

import { routeTo } from 'helpers/utils'

import { paths } from 'setup/PageRouter'

const HomePage = () => {
  const [username, setUsername] = useState<string>()

  const navigate = useNavigate()

  const startAnimate = username != null && username.length > 0

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        if (username == null || username.length === 0) {
          toast('กรุณากรอกชื่อ', {
            type: 'error',
          })

          return
        }

        navigate(
          routeTo(paths.createRoom, {
            params: {
              username,
            },
          })
        )
      }}
    >
      <UserCreationContainer>
        <span className="title">ชื่อของคุณ</span>
        <input
          placeholder="โปรดระบุ"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <FadeUp startAnimate={startAnimate}>
          <button type="submit">ยืนยัน</button>
        </FadeUp>

        <ToastContainer position="bottom-center" />
      </UserCreationContainer>
    </form>
  )
}

export default HomePage
