import React from 'react'

const Apiprop = ({ userData }) => {
    return (
        <div>
            {userData.map((item) => (
                <div key={item.id}>
                    <h2>Username : {item.username}</h2>
                    <h2>Name : {item.name}</h2>
                    <h2>Email: {item.email}</h2>
                </div>
            ))}
        </div>
    )
}

export default Apiprop
