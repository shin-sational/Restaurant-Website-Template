import React from "react";
import CustomImage from "./common/atoms/CustomImage";
import { CustomButton } from "./common/atoms/CustomButton";
import Link from "next/link";

const CustomError = ({ message }: { message: string }) => {
  return (
    <div className="w-full h-full md:px-[160px] md:py-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
        {/* grid-1 */}
        <div className="w-full h-full flex flex-col items-center md:items-start justify-center gap-[54px]">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-[30px] md:text-[40px]">Oops</p>
            <h1 className="text-[24px] md:text-[32px] font-bold">{message}</h1>
            <p className="text-[12px] md:text-[16px]">
              This Page does not exist or was removed!
            </p>
            <p className="text-[12px] md:text-[16px]">
              We suggest you back to home.
            </p>
          </div>
          <CustomButton asChild>
            <Link href="/">Back to home</Link>
          </CustomButton>
        </div>

        {/* grid-2 */}
        <div className="w-full h-full flex items-center justify-center">
          <CustomImage
            src="error/notFound.jpg"
            alt="notFound"
            ratio="1/1"
            containerClassName="max-w-[552px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomError;
