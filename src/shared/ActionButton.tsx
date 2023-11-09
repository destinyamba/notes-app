import React from "react";
import { SELECTED_PAGE } from "./types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SELECTED_PAGE) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-primary-100 px-10 py-2 hover:bg-primary-200 hover:text-white"
      onClick={() => setSelectedPage(SELECTED_PAGE.NOTES)}
      href={`#${SELECTED_PAGE.NOTES}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
