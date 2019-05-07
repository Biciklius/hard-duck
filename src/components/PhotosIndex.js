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

    this.getData = this.getData.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    const data = {...this.state.searchText, [e.target.name]: e.target.value}
    this.setState({ searchText: data })
    window.localStorage.setItem('result', e.target.value)
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    const result = window.localStorage.getItem('result')
    this.setState({result})
    console.log(result)
    axios.get('https://api.unsplash.com/search/photos', {
      params: {
        per_page: 48,
        query: result,
        orientation: 'landscape',
        client_id: '15ec0385440f665f332cf85ef54dfb4e56eebcb7f3192dcbc0f2e89e93b500bc'
      }
    })
      .then(res => this.setState({ photos: res.data.results }))
  }

  handleSubmit(e){
    e.preventDefault()
    axios.get('https://api.unsplash.com/search/photos', {
      params: {
        per_page: 48,
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

        <div className="section columns nav is-vcentered">
          <div>
            <img className="duck"src="src/images/duck.png"/>
          </div>
          <div className="column is-two-thirds"><h1 className="title is-1 naslov">HARD DUCK</h1>
          </div>
          <div >
            <form onSubmit={this.handleSubmit}>
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="text" placeholder="Search term"
                    name="searchText"
                    onChange={this.handleChange}/>
                </div>
                <div className="control">
                  <button className="button">Search</button>
                </div>
              </div>
            </form>
          </div>
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
