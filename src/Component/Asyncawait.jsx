import React, { useEffect } from 'react'
import { useState } from 'react'

const Asyncawait = () => {
    const [userdata, setUserdata] = useState([]);
    useEffect(() => {

        const fetchuser = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json();
                setUserdata(data);
                console.log(data);
            } catch (error) {
                console.log("Error in data", error);
            }
        }
        fetchuser()

    }, [])
    return (
        <div>
            {userdata.map((item)=>(
                <div key={item.id}>
                    <h2>Username : {item.username}</h2>
                    <h2>Email : {item.email}</h2>
                </div>
            ))}
        </div>
    )
}

export default Asyncawait
