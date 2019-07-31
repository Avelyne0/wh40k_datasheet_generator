import React from 'react'

const Ability = ({ name, content }) => {
    return (
        <>
            <div className="clearfix faSectionBody">
                <span className="faAbilityName">
                    {name}
                </span>
                {content}
            </div>
        </>
    )
}

export default Ability
