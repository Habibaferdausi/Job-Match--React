import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleDollarToSlot,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const JobsCard = (jobCard) => {
  const {
    id,
    job_title,
    company_logo,
    location,
    remote_or_onsite,
    fulltime_or_parttime,
    company_name,
    salary,
  } = jobCard.jobCard;

  return (
    <div className=" p-7 rounded  bg-purple-100">
      <img className="w-40  h-20 p-1 rounded " src={company_logo} alt="" />

      <h3 className="text-lg font-semibold  title pt-3">{job_title}</h3>
      <p className="text-base text-gray-400 font-semibold pt-1">
        {company_name}{" "}
      </p>
      <div className="flex text-sm pt-2 ">
        <button className="border border-purple-500 p-1  font-semibold rounded me-4 text-purple-500">
          {remote_or_onsite}
        </button>
        <button className=" border border-purple-500 font-semibold rounded   p-1 text-purple-500">
          {fulltime_or_parttime}
        </button>
      </div>
      <div className="flex pt-3 font-semibold   justify-between">
        <p className="text-sm text-gray-400  ">
          <FontAwesomeIcon className="me-2" icon={faLocationDot} />
          {location}
        </p>
        <p className="text-sm text-gray-400 ">
          {" "}
          <FontAwesomeIcon className="me-2" icon={faCircleDollarToSlot} />
          Salary: {salary}
        </p>
      </div>

      <div className="mt-8">
        <Link to={`job/${jobCard.jobCard.id}`} className="btn-new mt-5">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobsCard;
