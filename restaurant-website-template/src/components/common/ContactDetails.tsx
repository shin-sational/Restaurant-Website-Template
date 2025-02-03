import CustomBranchName from "./atoms/CustomBranchName";
import { BRANCH_INFORMATION } from "@/config/frontend/siteConfig";
import { cn } from "@/lib/utils";
import { RestaurantData } from "@/type/notionFrontend.Type";
import { FaLocationDot } from "react-icons/fa6";
import CustomImage from "./atoms/CustomImage";

type Props = {
  Name:string,
  Photo: string,
  adress: string,
  restaurantData: RestaurantData;
  className?: string;
};

const ContactDetails = ({ restaurantData, className }: Props) => {
  console.log("restaurantData: ");

  return (
    <div className={cn("px-[16px]", className)}>
       <div>
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
