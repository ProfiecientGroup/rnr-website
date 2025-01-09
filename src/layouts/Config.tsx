import { ReactNode } from "react";
import viewpaths from "../global/constants/viewPathConstants";

export interface Item {
  disabled?: boolean;
  external?: boolean;
  icon?: ReactNode;
  items?: Item[];
  label?: ReactNode;
  path?: string;
  title: string;
}

export interface Section {
  items: Item[];
  subheader?: string;
}

export const useSections = () => {
  return [
    {
      items: [
        {
          title: "Home",
          path: viewpaths.home,
        },
        {
          title: "Cars",
          path: viewpaths.cars,
        },
        {
          title: "Services",
          path: viewpaths.services,
        },
        {
          title: "About us",
          path: viewpaths.aboutUs,
        },
        {
          title: "Contact us",
          path: viewpaths.contactUs,
          // isExpandable: true,
        },
      ],
    },
  ];
};
