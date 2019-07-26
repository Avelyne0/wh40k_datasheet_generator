import React, { Component } from 'react'
import Ability from '../components/Ability'
import FactionKeyword from '../components/FactionKeyword'
import Keyword from '../components/Keyword'
import Model from '../components/Model'
import WargearOption from '../components/WargearOption'
import Weapon from '../components/Weapon'
import { Route } from 'react-router-dom';

export default class Unit extends Component {

    render() {
        const models = this.props.models
        return (
            <div>
                <div class="clearfix faUnitCard">
                    <div class="clearfix faUnitHeader">
                        <div class="faRoleIcon"></div>
                        <div class="faUnitName">{name}</div>
                    </div>
                    <div class="clearfix faUnitStats">
                        <div class="clearfix faStatsHeader">
                            <div class="faStatHeader" data-stat="name">NAME</div>
                            <div class="faStatHeader" data-stat="movement">M</div>
                            <div class="faStatHeader" data-stat="weaponSkill">WS</div>
                            <div class="faStatHeader" data-stat="ballisticSkill">BS</div>
                            <div class="faStatHeader" data-stat="strength">S</div>
                            <div class="faStatHeader" data-stat="toughness">T</div>
                            <div class="faStatHeader" data-stat="wounds">W</div>
                            <div class="faStatHeader" data-stat="attacks">A</div>
                            <div class="faStatHeader" data-stat="leadership">Ld</div>
                            <div class="faStatHeader" data-stat="save">Sv</div>
                            <div class="faStatHeader" data-stat="points"></div>
                        </div>
                        {
                            models.map(model => <Model key={model.id} {...model} />)
                        }
                    </div>
                    <div class="clearfix faUnitComposition">
                        <div class="clearfix" style="margin-left: 1em">
                            {composition}
                        </div>
                        <br />
                    </div>
                    <div class="clearfix faWeaponStats">
                        <div class="clearfix faWpnsHeader">
                            <div class="faWpnHeader" data-stat="weapon">WEAPON</div>
                            <div class="faWpnHeader" data-stat="range">RANGE</div>
                            <div class="faWpnHeader" data-stat="type">TYPE</div>
                            <div class="faWpnHeader" data-stat="strength">S</div>
                            <div class="faWpnHeader" data-stat="armorPiercing">AP</div>
                            <div class="faWpnHeader" data-stat="damage">D</div>
                            <div class="faWpnHeader" data-stat="abilities">ABILITIES</div>
                            <div class="faWpnHeader" data-stat="points"></div>
                        </div>
                        {/* map over each weapon for each model in the unit */}
                        {
                            weapon.map(weapon => <Weapon key={weapon.id} {...weapon} />)
                        }
                    </div>
                    <div class="clearfix faWargearOptions" style="border-top: solid #000 1px;">
                        <div class="faSectionTitle">WARGEAR OPTIONS:</div>
                        {/* map over each wargear option belonging to the models in the unit */}
                        {
                            wargearOption.map(wargearOption => <WargearOption key={wargearOption.id} {...wargearOption} />)
                        }
                    </div>
                    <div class="clearfix faAbilities">
                        <div class="faSectionTitle">ABILITIES:</div>
                        {/* map over the abilities for each model in the unit and then map over each ability belonging to the unit */}
                        {
                            weapon.map(weapon => <Weapon key={weapon.id} {...weapon} />)
                        }
                    </div>
                    <div class="clearfix faFactKeyWords">
                        <div class="faSectionTitle">FACTION KEYWORDS:</div>
                        <div class="faSectionBody">
                            {/* map over all of the faction keywords belonging to the unit */}
                            {
                                factionKeywords.map(factionKeyword => <FactionKeyword key={factionKeyword.id} {...factionKeyword} />)
                            }
                        </div>
                    </div>
                    <div class="clearfix faKeyWords">
                        <div class="faSectionTitle">KEYWORDS:</div>
                        <div class="faSectionBody">
                            {/* map over all of the keywords belonging to each model in the unit */}
                            {
                                keywords.map(keyword => <Keyword key={keyword.id} {...keyword} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


