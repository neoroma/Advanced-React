import React from 'react'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import Header from './Header'

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
}

const StyledPage = styled.div`
  background: whitesmoke;
  color: ${props => props.theme.black};
`

StyledPage.displayName = 'PageMain'

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  background: wheat;
  padding: 2rem;
`

Inner.displayName = "InnerThingy"

export default class Page extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Header/>
          <Inner>{this.props.children}</Inner>
          <h3>It can be the footer here haha</h3>
        </StyledPage>
      </ThemeProvider>
    )
  }
}
