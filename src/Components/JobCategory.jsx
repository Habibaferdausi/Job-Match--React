import React from "react";

const JobCategory = (job) => {
  const { id, category, logo, available_jobs } = job.job;
  return (
    <div className="">
      <img
        className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
        src={logo}
        alt="Polaroid camera"
      />

      <h3 className="text-lg font-semibold leading-snug sm:pr-8">{category}</h3>
      <p className="text-sm text-gray-400">{available_jobs}</p>
    </div>
  );
};

export default JobCategory;
