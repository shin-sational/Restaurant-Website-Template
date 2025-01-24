"use client";

import CustomError from "@/components/CustomError";
import { FC } from "react";

interface ErrorProps {
  error: Error;
}

const error: FC<ErrorProps> = ({ error }) => {
  return <CustomError message={error.message} />;
};

export default error;
