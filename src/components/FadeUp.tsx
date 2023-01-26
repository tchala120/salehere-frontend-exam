import styled, { keyframes } from 'styled-components'

interface FadeUpProps {
  startAnimate?: boolean
}

const duration = '0.5s'

const fadeUpStart = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const FadeUp = styled.div<FadeUpProps>`
  animation-name: ${(props) => props.startAnimate && fadeUpStart};
  animation-duration: ${duration};
  transform: ${(props) =>
    props.startAnimate ? 'translateY(0)' : 'translateY(10px)'};
  opacity: ${(props) => (props.startAnimate ? 1 : 0)};
  transition: all ${duration} ease;
`

export default FadeUp
