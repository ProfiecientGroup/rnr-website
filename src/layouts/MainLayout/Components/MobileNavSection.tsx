import type { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import { MobileNavItem } from "./MobileNavItem";

interface Item {
  disabled?: boolean;
  external?: boolean;
  icon?: ReactNode;
  items?: Item[];
  label?: ReactNode;
  path?: string;
  title: string;
}

interface MobileNavSectionProps {
  items?: Item[];
  pathname?: string | null;
  subheader?: string;
}

export const MobileNavSection: FC<MobileNavSectionProps> = (props) => {
  const { items = [], pathname } = props;

  return (
    <Stack
      component="ul"
      direction="column"
      spacing={1}
      sx={{
        listStyle: "none",
        m: 0,
        p: 0,
      }}
    >
      {items.map((item) => {
        const checkPath = !!(item.path && pathname);
        const partialMatch = checkPath ? pathname.includes(item.path!) : false;
        const exactMatch = checkPath ? pathname === item.path : false;

        // Branch

        if (item.items) {
          return (
            <MobileNavItem
              active={partialMatch}
              disabled={item.disabled}
              icon={item.icon}
              items={item.items}
              key={item.title}
              label={item.label}
              title={item.title}
            />
          );
        }

        // Leaf

        return (
          <MobileNavItem
            active={exactMatch}
            disabled={item.disabled}
            external={item.external}
            icon={item.icon}
            key={item.title}
            label={item.label}
            path={item.path}
            title={item.title}
          />
        );
      })}
    </Stack>
  );
};

MobileNavSection.propTypes = {
  items: PropTypes.array,
  pathname: PropTypes.string,
  subheader: PropTypes.string,
};
