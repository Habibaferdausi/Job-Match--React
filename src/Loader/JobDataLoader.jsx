const DataLoader = async () => {
  const loadedJobsData = await fetch("jobdata.json");
  const jobDetails = await loadedJobsData.json();
  console.log(jobDetails);
  return jobDetails;
};
export default DataLoader;
