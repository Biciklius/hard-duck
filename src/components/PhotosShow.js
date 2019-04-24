import React from 'react'

const PhotosShow = (props) => {
  const { photo } = props.location.state
  return(
    <section className="section">
      <div className="container">

        <h1 className="title is-4">{photo.description}</h1>
        <button className="button">back</button>
      </div>
      <hr />

      <div className="column is-multiline">
        <div className="column is-two-thirds is-full-tablet">
          <figure className="image">
            <img src={photo.urls.regular} alt={photo.alt_description} />
          </figure>
        </div>

        <div className="column is-half-desktop is-full-tablet">
          <h2 className="title is-2">{photo.user.name}</h2>
          <hr />
        </div>

      </div>
    </section>
  )
}


export default PhotosShow
