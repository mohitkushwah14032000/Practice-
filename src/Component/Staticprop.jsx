import React from 'react'

const Staticprop = ({ data }) => {

    // ({ data }) Ye tumhara prop hai, jo parent ne bheja hai:

    const { name, Price, icon } = data;

    // "Ab jo data object mila hai, uske andar se name, Price aur icon nikaal lo alag variables me."

    return (


        < div >
            <h2>{name}</h2>
            <h2>{Price}</h2>
            <h2>{icon}</h2>
        </div >
    )
}

export default Staticprop
