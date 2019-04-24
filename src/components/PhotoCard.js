import React from 'react'
import { Link } from 'react-router-dom'

const PhotoCard = (props) => {
  console.log(props)
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <Link to={{pathname: `/photos/${props.id}`, state: { photo: props, search: props.search}}}>
            <img src={props.urls.small} alt={props.alt_description} />
            {console.log(props.search)}
          </Link>
        </figure>
      </div>
    </div>

  )
}

export default PhotoCard
