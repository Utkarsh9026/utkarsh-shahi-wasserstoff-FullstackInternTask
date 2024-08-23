import React from "react";

const ForeCast = ({ title, data }) => {
  // Function to format date
  function formatDate(dateString) {
    // Create a new Date object from the date string
    const date = new Date(dateString);

    // Format the date to get the day and month name
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "long",
    }).format(date);
    console.log(formattedDate);
    return formattedDate;
  }

  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="font-medium uppercase">{title}</p>
      </div>
      <hr className="my-1" />

      <div className="flex items-center justify-between">
        {data.map((d, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm">
              {title == "3 hour step forecast" ? d.tilte : formatDate(d.date)}
            </p>
            <img src={d.icon} alt="weather icon" className="w-12 my-1" />
            <p className="font-medium">{`${d.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForeCast;
