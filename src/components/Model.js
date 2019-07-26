import React from 'react'

const Model = ({name, movement, weapon_skill, ballistic_skill, strength, toughness, wounds, attacks, leadership, armour_save, points, ability, keyword, wargear_options, weapon}) => {
    return (

        <div className="clearfix faStatsBody">
        <div className="faStatBody" data-stat="name">{name.toUpperCase()}</div>
        <div className="faStatBody" data-stat="movement">{movement}</div>
        <div className="faStatBody" data-stat="weaponSkill">{weapon_skill}</div>
        <div className="faStatBody" data-stat="ballisticSkill">{ballistic_skill}</div>
        <div className="faStatBody" data-stat="strength">{strength}</div>
        <div className="faStatBody" data-stat="toughness">{toughness}</div>
        <div className="faStatBody" data-stat="wounds">{wounds}</div>
        <div className="faStatBody" data-stat="attacks">{attacks}</div>
        <div className="faStatBody" data-stat="leadership">{leadership}</div>
        <div className="faStatBody" data-stat="save">{armour_save}</div>
        <div className="faStatBody" data-stat="points">{points}</div>
      </div>
    )
}

export default Model
