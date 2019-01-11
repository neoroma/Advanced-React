import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items{
      id
      title
      price
      description
      image
      largeImage
    }
  }
`

export default class Items extends React.Component {
  render() {
    return (
      <div>
        <p>Items!</p>
      </div>
    )
  }
}
