import React from "react";

const JobsCard = (item) => {
  const {
    id,
    job_title,
    company_logo,
    location,
    remote_or_onsite,
    fulltime_or_parttime,
    company_name,
    salary,
  } = item.item;

  return (
    <div className=" p-7 rounded  bg-purple-100">
      <img className="w-40 p-3 rounded " src={company_logo} alt="" />

      <h3 className="text-lg font-semibold  title pt-4">{job_title}</h3>
      <p className="text-base text-gray-400 pt-2">{company_name} </p>
      <div className="flex text-sm pt-2 ">
        <button className="border border-purple-500 p-1  font-semibold rounded me-4 text-purple-500">
          {remote_or_onsite}
        </button>
        <button className=" border border-purple-500 font-semibold rounded   p-1 text-purple-500">
          {fulltime_or_parttime}
        </button>
      </div>
      <div className="flex pt-2">
        <p className="text-sm text-gray-400  me-5">{location}</p>
        <p className="text-sm text-gray-400 ">{salary}</p>
      </div>
      <button className="btn-new mt-4">View Details</button>
    </div>
  );
};

export default JobsCard;
