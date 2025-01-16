import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(
  pathname: string,
  params: any,
  searchParams: any
): Group[] {
  const user_id = params.user_id;
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: `/stock-market/${user_id}/admin/stock-prices`,
          label: "Stock Prices",
          active: pathname.includes("/stock-prices"),
          icon: LayoutGrid,
          submenus: []
        },
        {
          href: `/stock-market/${user_id}/admin/headings`,
          label: "Headings",
          active: pathname.includes("/headings"),
          icon: SquarePen,
          submenus: []
        },
        {
          href: `/stock-market/${user_id}/admin/users-setting`,
          label: "Users setting",
          active: pathname.includes("/users-setting"),
          icon: Bookmark,
          submenus: []
        },
        {
          href: `/stock-market/${user_id}/admin/users-asset`,
          label: "Users Assets",
          active: pathname.includes("/users-asset"),
          icon: Tag,
          submenus: []
        }
      ]
    }
  ];
}
