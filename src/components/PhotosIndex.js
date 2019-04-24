import React from 'react'

import PhotoCard from './PhotoCard'

// import ReactDOM from 'react-dom'

import axios from 'axios'

import 'bulma'


class PhotosIndex extends React.Component {

  constructor() {
    super()

    this.state = {
      photos: [],
      searchText: ''

    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    const data = {...this.state.searchText, [e.target.name]: e.target.value}
    this.setState({ searchText: data })
  }

  handleSubmit(e){
    e.preventDefault()
    axios.get('https://api.unsplash.com/search/photos', {
      params: {
        per_page: 24,
        query: this.state.searchText,
        orientation: 'landscape',
        client_id: '15ec0385440f665f332cf85ef54dfb4e56eebcb7f3192dcbc0f2e89e93b500bc'
      }
    })
      .then(res => this.setState({ photos: res.data.results }))
  }

  render() {
    // if(!this.state.photo) return null
    return (
      <div className="container">
        <div className="hero">
          <div className="container is-one-quarter has-text-centered"><h1>HARD DUCK</h1>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <input
                className="input"
                type="text" placeholder="Text input"
                name="searchText"
                onChange={this.handleChange}/>
              <button className="button">Search</button>
            </div>
          </form>
        </div>

        <div className="section">
          <div className="container">
            <div className="columns is-multiline">
              {this.state.photos.map(photo =>
                <div key={photo.id} className="column is-one-quarter-desktop is-one-third-tablet">
                  <PhotoCard {...photo}  search={this.state.searchText.searchText}/>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default PhotosIndex
