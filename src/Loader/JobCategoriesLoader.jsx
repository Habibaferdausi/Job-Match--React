const JobCategoriesLoader = async () => {
  const loadedJobsCategories = await fetch("job.json");
  const jobs = await loadedJobsCategories.json();
  console.log(jobs);
  return jobs;
};
export default JobCategoriesLoader;
