/**
 * カテゴリーごとにメニューをグループ化
 * Appetizer:[MenuItem, MenuItem, ...],
 * Main:[MenuItem, MenuItem, ...],
 */

import { GroupedMenuItems } from "@/type/menu.Type";
import { RestaurantData } from "@/type/notionFrontend.Type";

export const groupMenuItemsByCategory = (restaurantData: RestaurantData) => {
  const groupedMenuItems: GroupedMenuItems = {};
  restaurantData.Menu_Items.forEach((menuItem) => {
    if (!groupedMenuItems[menuItem.Category]) {
      groupedMenuItems[menuItem.Category] = [];
    }
    groupedMenuItems[menuItem.Category].push(menuItem);
  });
  return groupedMenuItems;
};
