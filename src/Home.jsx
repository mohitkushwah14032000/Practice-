import React, { useEffect, useState } from 'react'
import Apriprop from './Component/Apriprop';
import Static from './Component/Static';

const Home = () => {
    const [apidata, setApiData] = useState([]);

    const menuItems = [
        { name: "Burger", Price: "Rs.25", icon: "🍔" },
        { name: "Pizza", Price: "Rs.110", icon: "🍕" },
        { name: "Cupcake", Price: "Rs.50", icon: "🧁" },
        { name: "Ice Cream", Price: "Rs.20", icon: "🍦" },
    ];



    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setApiData(data);
                console.log(data);
            })

            .catch(error => console.error("error in fetching Data", error));
    })


    return (
        <div>

            <div>
                {menuItems.map((item, index) => (
                    <Static key={index} data={item} ></Static>
                ))}
            </div>

            <div className="w-1/2 bg-white p-4 rounded shadow">
                <h3 className="text-[2rem] font-semibold mb-4 text-center">API Props Data</h3>
                <Apriprop definedata={apidata}></Apriprop>
            </div>
        </div>
    )
}

export default Home
