import React from "react";

const JobCategory = (job) => {
  const { id, category, logo, available_jobs } = job.job;
  return (
    <div className="bg-purple-200 p-7 rounded">
      <img className="h-12 w-12 bg-purple-300 p-3 rounded " src={logo} alt="" />

      <h3 className="text-lg font-semibold title pt-4">{category}</h3>
      <p className="text-sm text-gray-400 pt-2">
        {available_jobs} Jobs Available
      </p>
    </div>
  );
};

export default JobCategory;
