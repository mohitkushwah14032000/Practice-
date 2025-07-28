import React, { useState } from 'react'

const Fetchapi = () => {
    const [fetchdata, setFetchdata] = useState([]);

    useState(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setFetchdata(data);
                console.log(data);
            })
            .catch(error => console.log("Error in Data", error))
    }, [])

    return (
        < div >
        {fetchdata.map((item)=>(
            <div key={item.id}>
                <h2>{item.username}</h2>
                <h2>{item.name}</h2>
                <h2>{item.email}</h2>
            </div>
        ))}
        </div >
    )
}

export default Fetchapi
