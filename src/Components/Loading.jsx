import React from "react";
import { BallTriangle, InfinitySpin } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <InfinitySpin
  visible={true}
  width="200"
  color="blue"
  ariaLabel="infinity-spin-loading"
  />
    </div>
  );
};
