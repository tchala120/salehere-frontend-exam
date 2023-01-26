import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
      </UserCreationContainer>
    </form>
  )
}

export default HomePage
