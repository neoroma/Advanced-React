import React from 'react'

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <h3>Hey this is the page component, we can add header and nav here</h3>
        {this.props.children}
        <h3>It can be the footer here haha</h3>
      </div>
    )
  }
}
