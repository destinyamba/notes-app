import AnchorLink from "react-anchor-link-smooth-scroll";
import { SELECTED_PAGE } from "./types";

type Props = {
  page: string;
  selectedPage: SELECTED_PAGE;
  setSelectedPage: (value: SELECTED_PAGE) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page
    .toLocaleLowerCase()
    .replace(/ /g, "") as SELECTED_PAGE;
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? " text-primary-300" : ""}
        transition duration-500 hover:text-primary-200`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
