import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'

const Center = styled.div`
  background: brown;
  color: navajowhite;
  text-align: center;
`;

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

const renderer = ({ data: { items = [] } }) => {
  return items.map((item) => <div key={item.id}>{`${item.title} + ${item.price}`}</div>)
}

export default class Items extends React.Component {
  render() {
    return (
      <Center>
        <p>Items!</p>
        <Query query={ALL_ITEMS_QUERY}>
          {renderer}
        </Query>
      </Center>
    )
  }
}
