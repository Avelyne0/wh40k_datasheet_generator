import React from 'react'
import Ability from '../components/Ability'
import FactionKeyword from '../components/FactionKeyword'
import Keyword from '../components/Keyword'
import Model from '../components/Model'
import WargearOption from '../components/WargearOption'
import Weapon from '../components/Weapon'

const Unit = ({name, composition, models, abilities, faction_keywords }) => {
    return (
        <div>
            <div className="clearfix faUnitCard">
                <div className="clearfix faUnitHeader">
                    <div className="faRoleIcon"></div>
                    <div className="faUnitName">{name}</div>
                </div>
                <div className="clearfix faUnitStats">
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
                    {
                        models.map(model =>
                            <Model key={model.id} {...model} />)
                    }
                </div>
                <div className="clearfix faUnitComposition">
                    <div className="clearfix" style={{ 'margin-left': '1em' }}>
                        {composition}
                    </div>
                    <br />
                </div>
                <div className="clearfix faWeaponStats">
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
                    {/* map over each weapon for each model in the unit */}
                    {
                        models.map(model => 
                            model.weapons.map(weapon =>
                                <Weapon key={weapon.id} {...weapon} />)
                        )
                    }
                </div>
                {/* <div className="clearfix faWargearOptions" style={{ 'border-top': 'solid #000 1px' }}>
                    <div className="faSectionTitle">WARGEAR OPTIONS:</div>
                    {/* map over each wargear option belonging to the models in the unit */}
                    {/* {
                        models.map(model =>
                            model.wargear_options.map(wargearOption => 
                            <WargearOption key={wargearOption.id} {...wargearOption} />)
                        )
                    } */}
                {/* </div> */}
                <div className="clearfix faAbilities">
                    <div className="faSectionTitle">ABILITIES:</div>
                    {/* map over the abilities for each model in the unit and then map over each ability belonging to the unit */}
                    {
                        models.map(model =>
                            model.abilities.map(ability => <Ability key={ability.id} {...ability} />)
                        )
                    }
                    {
                        abilities.map(ability => <Ability key={ability.id} {...ability} />)
                    }
                </div>
                <div className="clearfix faFactKeyWords">
                    <div className="faSectionTitle">FACTION KEYWORDS:</div>
                    <div className="faSectionBody">
                        {/* map over all of the faction keywords belonging to the unit */}
                        {
                            faction_keywords.map(factionKeyword => <FactionKeyword key={factionKeyword.id} {...factionKeyword} />)
                        }
                    </div>
                </div>
                <div className="clearfix faKeyWords">
                    <div className="faSectionTitle">KEYWORDS:</div>
                    <div className="faSectionBody">
                        {/* map over all of the keywords belonging to each model in the unit */}
                        {
                            models.map(model =>
                            model.keywords.map(keyword => <Keyword key={keyword.id} {...keyword} />)
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Unit


