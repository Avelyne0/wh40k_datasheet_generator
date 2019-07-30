import React from 'react'

const Weapon = ({name, weapon_range, weapon_type, weapon_strength, armour_piercing, weapon_damage, weapon_ability, points}) => {
    return (
        <div class="clearfix faWpnsBody">
            <div class="faWpnBody" data-stat="weapon">{name}</div>
            <div class="faWpnBody" data-stat="range">{weapon_range}"</div>
            <div class="faWpnBody" data-stat="type">{weapon_type}</div>
            <div class="faWpnBody" data-stat="strength">{weapon_strength}</div>
            <div class="faWpnBody" data-stat="armorPiercing">{armour_piercing}</div>
            <div class="faWpnBody" data-stat="damage">{weapon_damage}</div>
            <div class="faWpnBody" data-stat="abilities">{weapon_ability}</div>
            <div class="faWpnBody" data-stat="points">{points}</div>
        </div>
    )
}

export default Weapon
