import { toast } from "react-toastify";

export const toastErrorMessage = (message) => {
  toast.error(message, {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 1000,
  });
};
