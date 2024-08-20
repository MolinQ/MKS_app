import { format } from "date-fns";

const date = new Date();

export const formatTimeUtc = () => {
  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  return `${hours} : ${minutes}`;
};

export const formatDateUtc = () => {
  return format(date, "eeee, d MMMM yyyy");
};
