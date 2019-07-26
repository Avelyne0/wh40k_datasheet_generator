import React from 'react'

const Ability = ({name, content}) => {
    return (
        <>
            <div class="faSectionTitle">
                &nbsp;
            </div>
            <div class="clearfix faSectionBody">
                <span class="faAbilityName">
                    {name}
                </span>
                {content}
            </div>
        </>
    )
}

export default Ability
