import React from "react";

const TopButton = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      name: "New Delhi",
    },
    {
      id: 2,
      name: "London",
    },
    {
      id: 3,
      name: "Mumbai",
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-base sm:text-lg font-medium hover:bg-gray-700/20 px-4 py-2 rounded-md transition ease-in-out duration-200"
          onClick={() => setQuery({ q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default TopButton;
