// types/notion.ts

/**
 * Notion API からのレスポンス全体の型（ページの一覧）
 */
export interface NotionPagesResponse {
  data: NotionPage[];
}

/**
 * 各ページの型定義
 */
export interface NotionPage {
  object: "page";
  id: string;
  created_time: string; // ISO8601 形式の文字列
  last_edited_time: string; // ISO8601 形式の文字列
  created_by: NotionUser;
  last_edited_by: NotionUser;
  cover: unknown | null; // cover の型は用途に合わせて変更
  icon: unknown | null; // icon の型は用途に合わせて変更
  parent: NotionParent;
  archived: boolean;
  in_trash: boolean;
  properties: MenuItemsProperties;
  url: string;
  public_url: string | null;
}

/**
 * ユーザー情報（created_by, last_edited_by）
 */
export interface NotionUser {
  object: "user";
  id: string;
}

/**
 * Parent 情報
 */
export interface NotionParent {
  type: "database_id" | string;
  database_id: string;
}

/**
 * 各プロパティの型定義
 */

export interface NotionCheckboxProperty {
  id: string;
  type: "checkbox";
  checkbox: boolean;
}

export interface NotionRichTextProperty {
  id: string;
  type: "rich_text";
  rich_text: NotionTextItem[];
}

export interface NotionTitleProperty {
  id: string;
  type: "title";
  title: NotionTextItem[];
}

export interface NotionNumberProperty {
  id: string;
  type: "number";
  number: number | null;
}

export interface NotionSelectProperty {
  id: string;
  type: "select";
  select: NotionSelectOption | null;
}

export interface NotionFilesProperty {
  id: string;
  type: "files";
  files: NotionFile[];
}

/**
 * テキストアイテムの型（title, rich_text 等で使用）
 */
export interface NotionTextItem {
  type: "text" | string;
  text: {
    content: string;
    link: string | null;
  };
  annotations: NotionAnnotations;
  plain_text: string;
  href: string | null;
}

/**
 * テキストの装飾情報
 */
export interface NotionAnnotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string; // "default" など
}

/**
 * セレクトオプションの型
 */
export interface NotionSelectOption {
  id: string;
  name: string;
  color: string;
}

/**
 * ファイルの型定義
 */
export interface NotionFile {
  name: string;
  type: "file" | string;
  file?: {
    url: string;
    expiry_time: string;
  };
  external?: {
    url: string;
  };
}

/**
 * Notion の email プロパティ
 */
export interface NotionEmailProperty {
  id: string;
  type: "email";
  email: string;
}

/**
 * Notion の phone_number プロパティ
 */
export interface NotionPhoneNumberProperty {
  id: string;
  type: "phone_number";
  phone_number: string;
}

/**
 * Notion の url プロパティ
 */
export interface NotionUrlProperty {
  id: string;
  type: "url";
  url: string;
}

/**
 * Menu_Items データベースのプロパティ一覧
 */
export interface MenuItemsProperties {
  Vegan: NotionCheckboxProperty;
  Description: NotionRichTextProperty;
  Category: NotionSelectProperty;
  Price: NotionNumberProperty;
  Gluten_Free: NotionCheckboxProperty;
  Spicy: NotionCheckboxProperty;
  Photo: NotionFilesProperty;
  Name: NotionTitleProperty;
  // ※ 他のプロパティを追加する場合はここに記述
}

/**
 * Main_Branch_Info データベースのプロパティ一覧
 */
export interface MainBranchProperties {
  // 基本情報
  Name: NotionTitleProperty;
  Address: NotionRichTextProperty;
  Phone: NotionPhoneNumberProperty;
  Email: NotionEmailProperty;

  // 営業時間
  Monday_Opening_Time: NotionNumberProperty;
  Monday_Closed_Time: NotionNumberProperty;
  Monday_Opening_AM_PM: NotionSelectProperty;
  Monday_Closed_AM_PM: NotionSelectProperty;
  Tuesday_Opening_Time: NotionNumberProperty;
  Tuesday_Closed_Time: NotionNumberProperty;
  Tuesday_Opening_AM_PM: NotionSelectProperty;
  Tuesday_Closed_AM_PM: NotionSelectProperty;
  Wednesday_Opening_Time: NotionNumberProperty;
  Wednesday_Closed_Time: NotionNumberProperty;
  Wednesday_Opening_AM_PM: NotionSelectProperty;
  Wednesday_Closed_AM_PM: NotionSelectProperty;
  Thursday_Opening_Time: NotionNumberProperty;
  Thursday_Closed_Time: NotionNumberProperty;
  Thursday_Opening_AM_PM: NotionSelectProperty;
  Thursday_Closed_AM_PM: NotionSelectProperty;
  Friday_Opening_Time: NotionNumberProperty;
  Friday_Closed_Time: NotionNumberProperty;
  Friday_Opening_AM_PM: NotionSelectProperty;
  Friday_Closed_AM_PM: NotionSelectProperty;
  Saturday_Opening_Time: NotionNumberProperty;
  Saturday_Closed_Time: NotionNumberProperty;
  Saturday_Opening_AM_PM: NotionSelectProperty;
  Saturday_Closed_AM_PM: NotionSelectProperty;
  Sunday_Opening_Time: NotionNumberProperty;
  Sunday_Closed_Time: NotionNumberProperty;
  Sunday_Opening_AM_PM: NotionSelectProperty;
  Sunday_Closed_AM_PM: NotionSelectProperty;

  // メニュー
  Home_Menu_Description: NotionRichTextProperty;
  Home_Menu_Photo1: NotionFilesProperty;
  Home_Menu_Photo2: NotionFilesProperty;
  Home_Menu_Photo3: NotionFilesProperty;
  PDF_Menu: NotionFilesProperty;

  // ソーシャルメディア・ロゴ
  Logo: NotionFilesProperty;
  FaceBook: NotionUrlProperty;
  Instagram: NotionUrlProperty;

  // その他
  Restaurant_Photo: NotionFilesProperty;
}

/**
 * Sub_Branches_Info データベースのプロパティ一覧
 */
export interface SubBranchesProperties {
  // 基本情報
  Name: NotionTitleProperty;
  Address: NotionRichTextProperty;
  Phone: NotionPhoneNumberProperty;
  Email: NotionEmailProperty;

  // 営業時間
  Monday_Opening_Time: NotionNumberProperty;
  Monday_Closed_Time: NotionNumberProperty;
  Monday_Opening_AM_PM: NotionSelectProperty;
  Monday_Closed_AM_PM: NotionSelectProperty;
  Tuesday_Opening_Time: NotionNumberProperty;
  Tuesday_Closed_Time: NotionNumberProperty;
  Tuesday_Opening_AM_PM: NotionSelectProperty;
  Tuesday_Closed_AM_PM: NotionSelectProperty;
  Wednesday_Opening_Time: NotionNumberProperty;
  Wednesday_Closed_Time: NotionNumberProperty;
  Wednesday_Opening_AM_PM: NotionSelectProperty;
  Wednesday_Closed_AM_PM: NotionSelectProperty;
  Thursday_Opening_Time: NotionNumberProperty;
  Thursday_Closed_Time: NotionNumberProperty;
  Thursday_Opening_AM_PM: NotionSelectProperty;
  Thursday_Closed_AM_PM: NotionSelectProperty;
  Friday_Opening_Time: NotionNumberProperty;
  Friday_Closed_Time: NotionNumberProperty;
  Friday_Opening_AM_PM: NotionSelectProperty;
  Friday_Closed_AM_PM: NotionSelectProperty;
  Saturday_Opening_Time: NotionNumberProperty;
  Saturday_Closed_Time: NotionNumberProperty;
  Saturday_Opening_AM_PM: NotionSelectProperty;
  Saturday_Closed_AM_PM: NotionSelectProperty;
  Sunday_Opening_Time: NotionNumberProperty;
  Sunday_Closed_Time: NotionNumberProperty;
  Sunday_Opening_AM_PM: NotionSelectProperty;
  Sunday_Closed_AM_PM: NotionSelectProperty;

  // その他
  Restaurant_Photo: NotionFilesProperty;
}
