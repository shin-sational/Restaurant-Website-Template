import CustomBranchName from "./atoms/CustomBranchName";
import { BRANCH_INFORMATION } from "@/config/frontend/siteConfig";
import { cn } from "@/lib/utils";
import { RestaurantData } from "@/type/notionFrontend.Type";
import { FaLocationDot } from "react-icons/fa6";
import CustomImage from "./atoms/CustomImage";

type Props = {
  restaurantData: RestaurantData;
  className?: string;
};

const ContactDetails = ({ restaurantData, className }: Props) => {
  console.log("restaurantData: ");

  return (
    <div className={cn("px-[16px]", className)}>
      {restaurantData.Main_Branch_Info.map((mainInf) => (
        <div key={mainInf.Name}>
          <CustomBranchName className="text-center mb-[16px]">
            {mainInf.Name}
          </CustomBranchName>
          <CustomImage
            ratio="16/9"
            src={mainInf.Restaurant_Photo}
            alt="restaurantImg"
          />
          <div>
            <div className="mt-[16px] grid grid-cols-[18px_1fr] grid-rows-2 gap-[2px]">
              <FaLocationDot className="w-[18px] h-[18px]" />
              <h4 className="text-[14px]">Address</h4>
              <p className="text-[12px] col-start-2 row-start-2">
                {mainInf.Address}
              </p>
            </div>
          </div>
        </div>
      ))}
      {restaurantData.Sub_Branches_Info.map((inf) => (
        <div key={inf.Name}>
          <CustomBranchName className="text-center">
            {inf.Name}
          </CustomBranchName>
          <CustomImage
            ratio="16/9"
            src={inf.Restaurant_Photo}
            alt="restaurantImg"
          />
          <div>
            <div className="flex gap-[4px]">
              <FaLocationDot className="w-[18px] h-[18px]" />
              <h4 className="text-[14px]">Adress</h4>
            </div>
            <h4>{inf.Address}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactDetails;
