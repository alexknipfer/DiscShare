import React, { Component } from 'react'

import { Button } from 'react-bootstrap'

class Home extends Component {
  componentDidMount() {
    //fetch('/users').then(res => res.json()).then(result => console.log(result))
  }

  render() {
    return <Button bsStyle="primary">Primary</Button>
  }
}

export default Home
