import type { ReactNode } from 'react'

import styled from 'styled-components'

interface PageLayoutProps {
  children: ReactNode
}

const logo = require('../assets/images/logo.png')
const background = require('../assets/images/bg.jpg')

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <PageLayoutContainer>
      <img className="logo" src={logo} alt="Proxumer" />
      <main className="container">{children}</main>

      <Version>v{process.env.REACT_APP_VERSION}</Version>
    </PageLayoutContainer>
  )
}

export default PageLayout

const PageLayoutContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px;
  background-image: url(${background});

  & > .logo {
    max-width: 100%;
    width: 200px;
    height: auto;
  }

  & > .container {
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 20px;
    padding: 24px;
  }
`

const Version = styled.div`
  position: absolute;
  bottom: 4px;
  left: 50%;
  font-size: 12px;
  color: #999;
  transform: translateX(-50%);
`
