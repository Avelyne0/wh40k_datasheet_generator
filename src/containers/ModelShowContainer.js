import React from 'react'
import { Container, Dimmer, Loader, Header, Icon, Table } from 'semantic-ui-react'
import Model from '../components/Model';
import Ability from '../components/Ability';
import Weapon from '../components/Weapon';
import Keyword from '../components/Keyword';
import WargearOption from '../components/WargearOption';


class ModelShowContainer extends React.Component {


  render() {
    if (this.props.loading) {
      return <Container>
        <Dimmer active inverted>
          <Loader inverted content='Loading' />
        </Dimmer>
      </Container>
    }

    return (
      <Container>
        <Header as='h2' dividing icon textAlign='center'>
          <Icon name='user' circular />
          <Header.Content>{this.props.name.toUpperCase()}</Header.Content>
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
        {
            <div className="clearfix faWeaponStats">
              <Table striped>
                <Table.Row>
                  <div className="clearfix faWpnsHeader">
                    <div className="faWpnHeader" data-stat="weapon">WEAPON</div>
                    <div className="faWpnHeader" data-stat="range">RANGE</div>
                    <div className="faWpnHeader" data-stat="type">TYPE</div>
                    <div className="faWpnHeader" data-stat="strength">S</div>
                    <div className="faWpnHeader" data-stat="armorPiercing">AP</div>
                    <div className="faWpnHeader" data-stat="damage">D</div>
                    <div className="faWpnHeader" data-stat="abilities">ABILITIES</div>
                    <div className="faWpnHeader" data-stat="points"></div>
                  </div>
                </Table.Row>
                {
                  this.props.weapons.map(weapon =>
                    <Table.Row>
                      <Weapon key={weapon.id} {...weapon} />
                    </Table.Row>)
                }
              </Table>
            </div>
        }
        <div className="clearfix faAbilities">
          <div className="faSectionTitle">ABILITIES:</div>
              {
              this.props.abilities.map(ability =>
                <Ability key={ability.id} {...ability} />)
              }
        </div>

        {
            <div className="clearfix faKeyWords">
              <div className="faSectionTitle">KEYWORDS:</div>
              <div className="faSectionBody">
                {
                  this.props.keywords.map(keyword =>
                    <Keyword key={keyword.id} {...keyword} />)
              }
              </div>
            </div>
        }
        {/* {
            <div className="clearfix faWargearOptions">
              <div className="faSectionTitle">WARGEAR OPTIONS:</div>
              <div className="faSectionBody">
                {
                  this.props.wargear_options.map(wargear_option =>
                    <WargearOption key={wargear_option.id} {...wargear_option} />)
                }
              </div>
            </div>
        } */}

      </Container>
    )
  }
}

export default ModelShowContainer

// findModel = id => this.state.models.find(p => p.id === parseInt(id))
