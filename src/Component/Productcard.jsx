const Productcard = ({ data }) => {
  const { name, Price, icon } = data;

  return (
    <div className="border p-4 rounded-lg shadow-sm bg-white hover:shadow-md transition-all duration-300">
      <div className="text-4xl text-center mb-2">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 text-center">{name}</h3>
      <p className="text-center text-green-600 font-medium mt-1">{Price}</p>
    </div>
  );
};

export default Productcard;
