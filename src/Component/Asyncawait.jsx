import React, { useEffect, useState } from 'react'

const Asyncawait = () => {

  const [user, setUser] = useState([])


  useEffect(() => {
    const fetchuser = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
        setUser(data);
      } catch (error) {
        consol.error("data not fetching :", error);
      }
    };
    fetchuser();
  }, []);







  return (
    <div>
      <div>
        {user.map((index) => (
          <div key={index.id}>
            {index.username}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Asyncawait
