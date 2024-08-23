import React from "react";

const TimeLocation = ({ weather: { formatedLocalTime, name, country } }) => {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-sm lg:text-lg font-extralight">
          {formatedLocalTime}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-xl md:text-2xl font-medium">
          {`${name}`}, {`${country}`}
        </p>
      </div>
    </div>
  );
};

export default TimeLocation;
