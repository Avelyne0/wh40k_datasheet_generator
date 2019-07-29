import React from 'react'
import { Container, Dimmer, Loader, Header, Icon, Table } from 'semantic-ui-react'
import Model from '../components/Model';

class ModelShowContainer extends React.Component {


  render() {
    // if (this.props.loading) {
    //   return <Container>
    //     <Dimmer active inverted>
    //       <Loader inverted content='Loading' />
    //     </Dimmer>
    //   </Container>
    // }
    console.log(this.props)
    return (
      <Container>
        <Header as='h2' dividing icon textAlign='center'>
          <Icon name='user' circular />
          <Header.Content>Models</Header.Content>
        </Header>
        <Table striped>
          <Table.Row>
            <div className="clearfix faStatsHeader">
              <div className="faStatHeader" data-stat="name">NAME</div>
              <div className="faStatHeader" data-stat="movement">M</div>
              <div className="faStatHeader" data-stat="weaponSkill">WS</div>
              <div className="faStatHeader" data-stat="ballisticSkill">BS</div>
              <div className="faStatHeader" data-stat="strength">S</div>
              <div className="faStatHeader" data-stat="toughness">T</div>
              <div className="faStatHeader" data-stat="wounds">W</div>
              <div className="faStatHeader" data-stat="attacks">A</div>
              <div className="faStatHeader" data-stat="leadership">Ld</div>
              <div className="faStatHeader" data-stat="save">Sv</div>
              <div className="faStatHeader" data-stat="points"></div>
            </div>
          </Table.Row>
          <Table.Row>
            <Model {...this.props} />
          </Table.Row>
        </Table>
      </Container>
    )
  }
}

export default ModelShowContainer