import React from 'react'

class PhotosShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  //HandleSubmit onClick added to the back button below and then handle submit function here pushes the url back to the '/' homepage so back to PhotosIndex.

  handleSubmit() {
    this.props.history.push('/')
  }


  render() {
    const { photo } = this.props.location.state
    return(
      <section className="surround section is-hero">
        <div className="container photopage">

          <button className="button" onClick={this.handleSubmit}>back</button>
          <hr />
          <h2 className="photographer is-size-10">{photo.user.name}</h2>
          <br />
        </div>

        <div className="main columns">

          {/*  <div className="column is-multiline"> */}
          <div className="column is-two-thirds-desktop is-full-tablet">
            <figure className="image">
              <img src={photo.urls.regular} alt={photo.alt_description} />
            </figure>
          </div>


          <div className="column is-one-third-desktop is-full-tablet">
            <h1 className="portfolio title is-4 has-text-justified">{photo.description}</h1>

            {photo.user.portfolio_url && <h1 className="portfolio is-size-4"><a href={photo.user.portfolio_url} target="_blank" rel="noopener noreferrer" className="portfolio has-text-link hsl(217, 71%, 53%)">See Photographer Portfolio</a></h1>}
            <br />
            <div className="bits">
              <figure className="image is-48x48">
                <img className="like-image" src='http://www.logospng.com/images/4/facebook-like-thumbs-up-round-icon-vector-logo-free-4242.png'/>
              </figure>
              <h1 className="portfolio is-size-4 has-text-info hsl(204, 86%, 53%)">{photo.likes}</h1>
            </div>
          </div>
        </div>

      </section>
    )
  }
}
// photo.user.portfolio_url  / instagram_username
export default PhotosShow
