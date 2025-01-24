// メニュー項目の型
export interface MenuItem {
  Name: string;
  Category: string;
  Price: number;
  Description: string | null;
  Photo: string; // URL
  Spicy: boolean;
  Gluten_Free: boolean;
  Vegan: boolean;
}

// メインブランチ情報の型
export interface MainBranchInfo {
  Name: string;
  Home_Menu_Description: string;
  Logo: string; // URL
  Restaurant_Photo: string; // URL
  Instagram: string;
  Facebook: string;
  Address: string;
  Monday_Opening_Time: number | null;
  Monday_Opening_AM_PM: string | null;
  Monday_Closed_Time: number | null;
  Monday_closed_AM_PM: string | null;
  Tuesday_Opening_Time: number | null;
  Tuesday_Opening_AM_PM: string | null;
  Tuesday_Closed_Time: number | null;
  Tuesday_Closed_AM_PM: string | null;
  Wednesday_Opening_Time: number | null;
  Wednesday_Opening_AM_PM: string | null;
  Wednesday_Closed_Time: number | null;
  Wednesday_Closed_AM_PM: string | null;
  Thursday_Opening_Time: number | null;
  Thursday_Opening_AM_PM: string | null;
  Thursday_Closed_Time: number | null;
  Thursday_Closed_AM_PM: string | null;
  Friday_Opening_Time: number | null;
  Friday_Opening_AM_PM: string | null;
  Friday_Closed_Time: number | null;
  Friday_Closed_AM_PM: string | null;
  Saturday_Opening_Time: number | null;
  Saturday_Opening_AM_PM: string | null;
  Saturday_Closed_Time: number | null;
  Saturday_Closed_AM_PM: string | null;
  Sunday_Opening_Time: number | null;
  Sunday_Opening_AM_PM: string | null;
  Sunday_Closed_Time: number | null;
  Sunday_Closed_AM_PM: string | null;
  Phone: string;
  Email: string;
  PDF_Menu: string; // URL
  Home_Menu_Photo1: string; // URL
  Home_Menu_Photo2: string; // URL
  Home_Menu_Photo3: string; // URL
}

// サブブランチ情報の型
interface SubBranchInfo {
  Name: string;
  Restaurant_Photo: string; // URL
  Address: string;
  Monday_Opening_Time: number | null;
  Monday_Opening_AM_PM: string | null;
  Monday_Closed_Time: number | null;
  Monday_Closed_AM_PM: string | null;
  Tuesday_Opening_Time: number | string | null;
  Tuesday_Opening_AM_PM: string | null;
  Tuesday_Closed_Time: number | string | null;
  Tuesday_Closed_AM_PM: string | null;
  Wednesday_Opening_Time: number | string | null;
  Wednesday_Opening_AM_PM: string | null;
  Wednesday_Closed_Time: number | string | null;
  Wednesday_Closed_AM_PM: string | null;
  Thursday_Opening_Time: number | string | null;
  Thursday_Opening_AM_PM: string | null;
  Thursday_Closed_Time: number | string | null;
  Thursday_Closed_AM_PM: string | null;
  Friday_Opening_Time: number | string | null;
  Friday_Opening_AM_PM: string | null;
  Friday_Closed_Time: number | string | null;
  Friday_Closed_AM_PM: string | null;
  Saturday_Opening_Time: number | string | null;
  Saturday_Opening_AM_PM: string | null;
  Saturday_Closed_Time: number | string | null;
  Saturday_Closed_AM_PM: string | null;
  Sunday_Opening_Time: number | string | null;
  Sunday_Opening_AM_PM: string | null;
  Sunday_Closed_Time: number | string | null;
  Sunday_Closed_AM_PM: string | null;
  Phone: string | null;
  Email: string | null;
}

// 全体のデータ構造の型
export interface RestaurantData {
  Menu_Items: MenuItem[];
  Main_Branch_Info: MainBranchInfo[];
  Sub_Branches_Info: SubBranchInfo[];
}
