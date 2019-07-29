import React from 'react'
import { Container, Segment, Dimmer, Loader } from 'semantic-ui-react'

class UnitShowContainer extends React.Component {


  render() {
    if (this.props.loading) {
      return <Container>
          <Dimmer active inverted>
              <Loader inverted content='Loading' />
          </Dimmer>
      </Container>
  }
  }
}

export default UnitShowContainer