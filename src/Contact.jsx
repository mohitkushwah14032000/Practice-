import React from 'react'
import Contactlistcard from './Component/Contactlistcard'

const Contact = () => {

  const contactlist = [
    { name: 'Mohit', number: '9599766270' },
    { name: 'Rohit', number: '8130713122' }
  ]

  const updatedlist = contactlist.map((item) =>
    item.name === 'Mohit' ? { ...item, name: "rohan" } : item
  )

  return (
    <div>
      <Contactlistcard updatedlist={updatedlist} />
    </div>
  )
}

export default Contact
