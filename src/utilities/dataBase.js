import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const addToDb = (id) => {
  let appliedJob = getAppliedJob();
  // add quantity
  const quantity = appliedJob[id];
  if (!quantity) {
    appliedJob[id] = 1;
    toast("Successfully Added on Applied Jobs");
  } else {
    toast.error("This Job Already Added");
    return;
  }
  localStorage.setItem("applied-job", JSON.stringify(appliedJob));
};
const getAppliedJob = () => {
  let appliedJob = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("applied-job");
  if (storedCart) {
    appliedJob = JSON.parse(storedCart);
  }
  return appliedJob;
};
export { addToDb, getAppliedJob };
