import React from 'react'

const Static = ({data}) => {
    const { name, Price, icon } = data;
    return (
        <div>
            <h2>{name}</h2>
            <h2>{Price}</h2>
            <h2>{icon}</h2>
        </div>
    )
}

export default Static
