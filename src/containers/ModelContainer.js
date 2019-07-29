import React, { Component } from 'react'
import { Table, Container, Header, Icon } from 'semantic-ui-react'
import Model from '../components/Model'
import { Link } from 'react-router-dom'

export default class ModelContainer extends Component {
  render() {
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
          {
            this.props.state.models.map(model => <Table.Row as={Link} to={`/models/${model.id}`}><Model key={model.id} {...model}/></Table.Row>)
          }
        </Table>
      </Container>
    )
  }
}
