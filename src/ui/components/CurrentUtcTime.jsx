import {
  formatDateUtc,
  formatTimeUtc,
} from "../../helpers/useFormDateAndTime.js";

function CurrentUtcTime() {
  return (
    <div className="border w-25 p-2">
      <p className="fw-bold">Current UTC time : {formatTimeUtc()}</p>
      <pre>{formatDateUtc()}</pre>
    </div>
  );
}

export default CurrentUtcTime;
