import styled from 'styled-components'

const UserCreationContainer = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 40px;

  > * {
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`

export default UserCreationContainer
