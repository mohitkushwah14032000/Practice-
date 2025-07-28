import React from 'react';
import Productcard from './Component/Productcard';
import Servicecard from './Component/Servicecard';
import Contactlistcard from './Component/Contactlistcard';

const Products = () => {
  const productitems = [
    { name: "Burger", Price: "Rs.25", icon: "🍔" },
    { name: "Pizza", Price: "Rs.110", icon: "🍕" },
    { name: "Cupcake", Price: "Rs.50", icon: "🧁" },
    { name: "Ice Cream", Price: "Rs.20", icon: "🍦" },
  ];

  const service = [{ work: "Webdesign", Discription: "Hii This is test Service Card" }];

  const contactlist = [
    { name: 'Mohit', number: '9599766270' },
    { name: 'Rohit', number: '8130713122' }
  ]

  const updatedlist = contactlist.map((item) =>
    item.name === 'Mohit' ? { ...item, name: "rohan" } : item
  )


  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-4">Product List</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {productitems.map((item, index) => (
            <Productcard key={index} data={item} />
          ))}
        </div>

        <div className="mt-6">
          <Servicecard service={service[0]} />
        </div>

        <div>
          <Contactlistcard updatedlist={updatedlist} />
        </div>

      </div>
    </div>
  );
};

export default Products;
