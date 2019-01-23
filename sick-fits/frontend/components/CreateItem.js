import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import router from 'next/router'
import Form from './styles/Form'
import styled from 'styled-components'

const UPLOAD_URL = 'https://api.cloudinary.com/v1_1/do1nfbkwe/image/upload'

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

const SmallImg = styled.img`
  max-height: 50px;
`

class CreateItem extends React.Component {

  state = {
    price: 0,
    title: '',
    description: '',
    image: '',
    largeImage: '',
    uploading: false
  }

  handleChange = ({ target: { value, name, type } }) => {
    this.setState({
      [name]: type.includes('number') ? parseFloat(value) : value
    })
  }

  uploadImage = async ({ target: { files } }) => {

    this.setState({
      uploading: true
    })

    const [image] = files
    const data = new FormData()
    data.append('file', image)
    data.append('upload_preset', 'romanshe')

    const res = await fetch(UPLOAD_URL, {
      method: 'post',
      body: data
    })

    const { secure_url } = await res.json()

    this.setState({
      uploading: false,
      image: secure_url
    })
  }

  render() {
    const { title, price, description, image, uploading } = this.state
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
            <fieldset disabled={loading || uploading} aria-busy={loading || uploading}>
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
              <label htmlFor="image">
                Image
                <input
                  type="file"
                  id="image"
                  name="image"
                  placeholder="Upload image here"
                  onChange={this.uploadImage}
                />
                {image && <SmallImg src={image} alt="Uploaded image" />}
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
