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
          className="mt-[32px] mb-[32px] mr-[16px] ml-[16px] lg:mr-[160px] lg:ml-[160px]"
        >
          <CustomBranchName className="text-center mb-[16px]">
            {mainInfo.Name}
          </CustomBranchName>
          <div className="grid lg:grid-cols-2">
            <div className="lg:hidden">
              <CustomImage
                ratio="16/9"
                src={mainInfo.Restaurant_Photo}
                alt="restaurantImg"
              />
            </div>
            <div className="hidden lg:block">
              <CustomImage
                ratio="5/4"
                src={mainInfo.Restaurant_Photo}
                alt="restaurantImg"
                containerClassName="max-w-[552px] max-h-[414px]"
              />
            </div>
            <div className="lg:grid grid-cols-[1fr_5fr]">
              <div></div>
              <div>
                <div className="mt-[16px] grid grid-cols-[18px_1fr] grid-rows-[auto_auto] gap-[2px]">
                  <FaLocationDot className="w-[18px] h-[18px]" />
                  <h4 className="text-[14px] lg:text-[24px] font-bold self-start">
                    Address
                  </h4>
                  <p className="text-[12px] lg:text-[20px] col-start-2 row-start-2">
                    {mainInfo.Address}
                  </p>
                </div>
                <div className="mt-[16px] grid grid-cols-[18px_1fr] grid-rows-[auto_auto] gap-[2px]">
                  <GoClock className="w-[18px] h-[18px] fill-white" />
                  <h4 className="text-[14px] lg:text-[24px] font-bold self-start">
                    Hours
                  </h4>
                  <div className="col-start-2 row-start-2 grid grid-cols-2 lg:grid-cols-none">
                    <BusinessHours
                      branchInfo={restaurantData.Main_Branch_Info}
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-[14px] grid grid-cols-[18px_1fr] grid-rows-[auto_auto] gap-[2px]">
                    <FiPhone className="w-[18px] h-[18px] fill-white" />
                    <h4 className="text-[14px] lg:text-[24px] font-bold self-start">
                      Phone
                    </h4>
                    <p className="text-[12px] lg:text-[20px] col-start-2 row-start-2">
                      {mainInfo.Phone}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="mt-[14px] grid grid-cols-[18px_1fr] grid-rows-[auto_auto] gap-[2px]">
                    <CiMail className="w-[18px] h-[18px]" />
                    <h4 className="text-[14px] lg:text-[24px] font-bold self-start">
                      Email
                    </h4>
                    <p className="text-[12px] lg:text-[20px] col-start-2 row-start-2">
                      {mainInfo.Email}
                    </p>
                  </div>
                </div>
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
          <div className="grid lg:grid-cols-2">
            <div className="lg:hidden">
              <CustomImage
                ratio="16/9"
                src={subInfo.Restaurant_Photo}
                alt="restaurantImg"
              />
            </div>
            <div className="hidden lg:block">
              <CustomImage
                ratio="5/4"
                src={subInfo.Restaurant_Photo}
                alt="restaurantImg"
                containerClassName="max-w-[552px] max-h-[414px]"
              />
            </div>
            <div className="lg:grid grid-cols-[1fr_5fr]">
              <div></div>
              <div>
                <div className="mt-[16px] grid grid-cols-[18px_1fr] grid-rows-[auto_auto] gap-[2px]">
                  <FaLocationDot className="w-[18px] h-[18px]" />
                  <h4 className="text-[14px] lg:text-[24px] font-bold self-start">
                    Address
                  </h4>
                  <p className="text-[12px] lg:text-[20px] col-start-2 row-start-2">
                    {subInfo.Address}
                  </p>
                </div>
                <div className="mt-[16px] grid grid-cols-[18px_1fr] grid-rows-[auto_auto] gap-[2px]">
                  <GoClock className="w-[18px] h-[18px] fill-white" />
                  <h4 className="text-[14px] lg:text-[24px] font-bold self-start">
                    Hours
                  </h4>
                  <div className="col-start-2 row-start-2 grid grid-cols-2 lg:grid-cols-none">
                    <BusinessHours
                      branchInfo={restaurantData.Main_Branch_Info}
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-[14px] grid grid-cols-[18px_1fr] grid-rows-[auto_auto] gap-[2px]">
                    <FiPhone className="w-[18px] h-[18px] fill-white" />
                    <h4 className="text-[14px] lg:text-[24px] font-bold self-start">
                      Phone
                    </h4>
                    <p className="text-[12px] lg:text-[20px] col-start-2 row-start-2">
                      {subInfo.Phone}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="mt-[14px] grid grid-cols-[18px_1fr] grid-rows-[auto_auto] gap-[2px]">
                    <CiMail className="w-[18px] h-[18px]" />
                    <h4 className="text-[14px] lg:text-[24px] font-bold self-start">
                      Email
                    </h4>
                    <p className="text-[12px] lg:text-[20px] col-start-2 row-start-2">
                      {subInfo.Email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactDetails;
