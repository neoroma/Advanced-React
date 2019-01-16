import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import router from 'next/router'
import Form from './styles/Form'

export const ADD_ITEM = gql`
  mutation ADD_ITEM($data: ItemCreateInput!) {
    createItem(data: $data){
      id
      title
      price
      description
    }
  }
`

class CreateItem extends React.Component {

  state = {
    price: 0,
    title: '',
    description: '',
    image: '',
    largeImage: '',
  }

  handleChange = ({ target: { value, name, type } }) => {
    this.setState({
      [name]: type.includes('number') ? parseFloat(value) : value
    })
  }

  render() {
    const { title, price, description } = this.state
    return (
      <Mutation mutation={ADD_ITEM} variables={{
        data: { title, price, description }
      }}>
        {(createItem, { loading, error }) => (
          <Form onSubmit={async (e) => {
            e.preventDefault()
            const res = await createItem()
            router.push({
              pathname: '/items'
            })
          }}>
            <h2>Sell item</h2>
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="title">
                Title
                <input
                  onChange={this.handleChange}
                  type="text"
                  id="title"
                  name="title"
                  placeholder="title here"
                  required
                  value={title}
                />
              </label>
              <label htmlFor="title">
                Description
                <textarea
                  onChange={this.handleChange}
                  id="description"
                  name="description"
                  placeholder="description here"
                  required
                  value={description}
                />
              </label>
              <label htmlFor="price">
                Price
                <input
                  onChange={this.handleChange}
                  type="number"
                  id="price"
                  name="price"
                  placeholder="price here"
                  required
                  value={price}
                />
              </label>
              <button type="submit">Submit</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    )
  }
}


export default CreateItem
