import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleJob = (job) => {
  const {
    job_title,
    company_name,
    remote_or_onsite,
    location,
    fulltime_or_parttime,
    salary,
    job_description,
    job_responsibility,
    educational_requirementse,
    experiences,
    contact_information,
  } = job;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 lg:mt-20">
      <div>
        <h1>
          <span className=" font-semibold">Job Description :</span>
          {job_description}
        </h1>
      </div>
      <div>2</div>
    </div>
  );
};

export default SingleJob;
