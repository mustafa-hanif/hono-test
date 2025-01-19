
import { routeTree } from "@/routeTree.gen";
import { ParseRoute } from "@tanstack/react-router";
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

type ValidRoutes = ParseRoute<typeof routeTree>['fullPath'];

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
  params: { userId?: string; },
  searchParams: any
): Group[] {
  const user_id = params.userId;
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: `/admin/${user_id}/stock-prices`,
          label: "Stock Prices",
          active: pathname.includes("/stock-prices"),
          icon: LayoutGrid,
          submenus: []
        },
        {
          href: `/admin/${user_id}/headings`,
          label: "Headings",
          active: pathname.includes("/headings"),
          icon: SquarePen,
          submenus: []
        },
        {
          href: `/admin/${user_id}/days`,
          label: "Days",
          active: pathname.includes("/days"),
          icon: SquarePen,
          submenus: []
        },
        {
          href: `/admin/${user_id}/users-setting`,
          label: "Users setting",
          active: pathname.includes("/users-setting"),
          icon: Bookmark,
          submenus: []
        },
        {
          href: `/admin/${user_id}/users-asset`,
          label: "Users Assets",
          active: pathname.includes("/users-asset"),
          icon: Tag,
          submenus: []
        }
      ]
    }
  ];
}
