import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import 'bulma'

import PhotosIndex from './components/PhotosIndex'
// import PhotoCard from './components/PhotoCard'
import PhotosShow from './components/PhotosShow'


class App extends React.Component {

  render() {
    return(
      <Router>
        <main>
          <Switch>
            <Route
              path="/photos/:id"
              render={(props) => <PhotosShow {...props} />}
            />
            <Route path="/" component={PhotosIndex} />
          </Switch>
        </main>
      </Router>



    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
