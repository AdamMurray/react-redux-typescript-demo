import * as React from 'react'
import { hot } from 'react-hot-loader'
import styled from '@emotion/styled'

import Routes from '../../routes'

const AppWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-areas: 'nav header' 'nav content';
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr;
`

// const TopNavWrapper = styled.div`
//   grid-area: header;
// `

// const SideNavWrapper = styled.div`
//   grid-area: nav;
//   background: #4a4a4a;
//   color: white;
// `

const RoutesWrapper = styled.div`
  grid-area: content;
`

class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <RoutesWrapper>
          {/* Source: https://medium.com/@giang.nguyen.dev/hot-loader-with-react-loadable-c8f70c8ce1a6 */}
          <Routes key={Math.random()} />
        </RoutesWrapper>
      </AppWrapper>
    )
  }
}

export default (process.env.NODE_ENV === 'development' ? hot(module)(App) : App)
