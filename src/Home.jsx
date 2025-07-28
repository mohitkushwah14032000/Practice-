import React, { useEffect, useState } from 'react'
import Staticprop from './Component/Staticprop'
import Apiprop from './Component/Apiprop';


const Home = () => {
    const [apidata, setApidata] = useState([]);
    // यह एक static array है जिसमें हर object एक menu item को दर्शाता है।

    //     हर object में name, Price और icon की जानकारी है।

    const menuitems = [
        { name: "Burger", Price: "Rs.25", icon: "🍔" },
        { name: "Pizza", Price: "Rs.110", icon: "🍕" },
        { name: "Cupcake", Price: "Rs.50", icon: "🧁" },
        { name: "Ice Cream", Price: "Rs.20", icon: "🍦" },
    ]


 

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setApidata(data))
            .catch(error => console.log("Error in Data Fetching", error));

    }, [])


    return (
        <div className='w-full bg-white p-4 rounded shadow flex flex-row'>

            <div className='w-1/3'>
                {menuitems.map((item, index) => (
                    <Staticprop key={index} data={{ ...item, name: "mumbai" }}></Staticprop>
                ))}
            </div>

            <div className='w-1/3'>
                <Apiprop userData={apidata} ></Apiprop>
            </div>

           
        </div>



    )
}

export default Home
