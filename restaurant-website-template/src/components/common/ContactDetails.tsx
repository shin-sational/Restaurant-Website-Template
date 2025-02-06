import CustomBranchName from "./atoms/CustomBranchName";
import { cn } from "@/lib/utils";
import { RestaurantData } from "@/type/notionFrontend.Type";
import { FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import CustomImage from "./atoms/CustomImage";
import BusinessHours from "./BusinessHours";

type Props = {
  restaurantData: RestaurantData;
  className?: string;
};

const ContactDetails = ({ restaurantData, className }: Props) => {
  console.log("restaurantData: ");

  return (
    <div className={cn("px-[16px]", className)}>
      {restaurantData.Main_Branch_Info.map((mainInfo) => (
        <div
          key={mainInfo.Name}
          className="mt-[32px] mb-[32px] mr-[16px] ml-[16px]"
        >
          <CustomBranchName className="text-center mb-[16px]">
            {mainInfo.Name}
          </CustomBranchName>
          <CustomImage
            ratio="16/9"
            src={mainInfo.Restaurant_Photo}
            alt="restaurantImg"
          />
          <div>
            <div className="mt-[16px] grid grid-cols-[18px_1fr] grid-rows-2 gap-[2px]">
              <FaLocationDot className="w-[18px] h-[18px]" />
              <h4 className="text-[14px]">Address</h4>
              <p className="text-[12px] col-start-2 row-start-2">
                {mainInfo.Address}
              </p>
            </div>
            <div className="mt-[16px] grid grid-cols-[18px_1fr] grid-rows-[21px_1fr] gap-[2px]">
              <GoClock className="w-[18px] h-[18px] fill-white" />
              <h4 className="text-[14px]">Hours</h4>
              <div className="col-start-2 row-start-2 grid grid-cols-2">
                <BusinessHours branchInfo={restaurantData.Main_Branch_Info} />
              </div>
            </div>
            <div>
              <div className="mt-[14px] grid grid-cols-[18px_1fr] grid-rows-2 gap-[2px]">
                <FiPhone className="w-[18px] h-[18px] fill-white" />
                <h4 className="text-[14px]">Phone</h4>
                <p className="text-[12px] col-start-2 row-start-2">
                  {mainInfo.Phone}
                </p>
              </div>
            </div>
            <div>
              <div className="mt-[14px] grid grid-cols-[18px_1fr] grid-rows-2 gap-[2px]">
                <CiMail className="w-[18px] h-[18px]" />
                <h4 className="text-[14px]">Email</h4>
                <p className="text-[12px] col-start-2 row-start-2">
                  {mainInfo.Email}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      {restaurantData.Sub_Branches_Info.map((subInfo) => (
        <div
          key={subInfo.Name}
          className="mt-[32px] mb-[32px] mr-[16px] ml-[16px]"
        >
          <CustomBranchName className="text-center mb-[16px]">
            {subInfo.Name}
          </CustomBranchName>
          <CustomImage
            ratio="16/9"
            src={subInfo.Restaurant_Photo}
            alt="restaurantImg"
          />
          <div>
            <div className="mt-[16px] grid grid-cols-[18px_1fr] grid-rows-2 gap-[2px]">
              <FaLocationDot className="w-[18px] h-[18px]" />
              <h4 className="text-[14px]">Address</h4>
              <p className="text-[12px] col-start-2 row-start-2">
                {subInfo.Address}
              </p>
            </div>
            <div className="mt-[16px] grid grid-cols-[18px_1fr] grid-rows-[21px_1fr] gap-[2px]">
              <GoClock className="w-[18px] h-[18px]" />
              <h4 className="text-[14px]">Hours</h4>
              <div className="col-start-2 row-start-2 grid grid-cols-2">
                <BusinessHours branchInfo={restaurantData.Main_Branch_Info} />
              </div>
            </div>
            <div>
              <div className="mt-[14px] grid grid-cols-[18px_1fr] grid-rows-2 gap-[2px]">
                <FiPhone className="w-[18px] h-[18px] fill-white" />
                <h4 className="text-[14px]">Phone</h4>
                <p className="text-[12px] col-start-2 row-start-2">
                  {subInfo.Phone}
                </p>
              </div>
            </div>
            <div>
              <div className="mt-[14px] grid grid-cols-[18px_1fr] grid-rows-2 gap-[2px]">
                <CiMail className="w-[18px] h-[18px]" />
                <h4 className="text-[14px]">Email</h4>
                <p className="text-[12px] col-start-2 row-start-2">
                  {subInfo.Email}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactDetails;
