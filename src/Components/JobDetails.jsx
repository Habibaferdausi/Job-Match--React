import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  const allJobs = useLoaderData();
  console.log(allJobs);

  return (
    <div>
      <h1 className="mt-5 text-center">Recived Id: {id}</h1>
    </div>
  );
};

export default JobDetails;
