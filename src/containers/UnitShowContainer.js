import React from 'react'
import { Container, Segment, Dimmer, Loader } from 'semantic-ui-react'
import Unit from '../components/Unit';

class UnitShowContainer extends React.Component {


  render() {
    if (this.props.loading) {
      return <Container>
        <Dimmer active inverted>
          {/* <Loader inverted content='Loading' /> */}
        </Dimmer>
      </Container>
    }
    return(
      <Unit />
    )
  }
}

export default UnitShowContainer