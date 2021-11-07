import { toast } from "react-toastify";

export const notification = (
  type: string,
  time: number,
  content: string
): void => {
  if (type === "success") {
    toast.success(`Success ${content}`, {
      position: "top-right",
      autoClose: time,
      theme: "colored", // light, dark
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else if (type === "warn") {
    toast.warn(`Warning ${content}`, {
      position: "top-right",
      autoClose: time,
      theme: "colored", // light, dark
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else {
    toast.error(`Error ${content}`, {
      position: "top-right",
      autoClose: time,
      theme: "colored", // light, dark
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};
