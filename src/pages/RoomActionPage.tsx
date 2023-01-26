import { useNavigate, useParams } from 'react-router-dom'

import ContentContainer from 'components/ContentContainer'
import FadeUp from 'components/FadeUp'

import { routeTo } from 'helpers/utils'

import { paths } from 'setup/PageRouter'

const RoomActionPage = () => {
  const params = useParams()
  const navigate = useNavigate()

  return (
    <ContentContainer>
      <FadeUp startAnimate>
        <span
          className="title"
          style={{
            marginBottom: 60,
          }}
        >
          สวัสดี คุณ {params.username}
        </span>
      </FadeUp>

      <FadeUp startAnimate>
        <button
          onClick={() =>
            navigate(
              routeTo(paths.createRoom, {
                params: {
                  username: params.username,
                },
              })
            )
          }
        >
          สร้างห้องแชท
        </button>
      </FadeUp>

      <FadeUp startAnimate>
        <span
          className="text-button"
          onClick={() =>
            navigate(
              routeTo(paths.joinRoom, {
                params: {
                  username: params.username,
                },
              })
            )
          }
        >
          เข้าร่วมแชท
        </span>
      </FadeUp>
    </ContentContainer>
  )
}

export default RoomActionPage
