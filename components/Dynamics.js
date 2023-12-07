import ErrorPage from "./SubComponents/404";
import Accordions from "./SubComponents/Accordions";
import Alerts from "./SubComponents/Alerts";
import Authentication from "./SubComponents/Authentication";
import Avatar from "./SubComponents/Avatar";
import Banners from "./SubComponents/Banners";
import Buttons from "./SubComponents/Buttons";
import Cards from "./SubComponents/Cards";
import ContactSections from "./SubComponents/ContactSections";
import FeatureSections from "./SubComponents/FeatureSections";
import Footers from "./SubComponents/Footers";
import HeroSections from "./SubComponents/HeroSections";
import Inputs from "./SubComponents/Inputs";
import Logogrid from "./SubComponents/Logogrid";
import Modals from "./SubComponents/Modals";
import Navbar from "./SubComponents/Navbar";
import Pignations from "./SubComponents/Pignations";
import SectionHeaders from "./SubComponents/SectionHeaders";
import SelectMenu from "./SubComponents/SelectMenu";
import Stats from "./SubComponents/Stats";
import Steps from "./SubComponents/Steps";
import Tables from "./SubComponents/Tables";
import Tabs from "./SubComponents/Tabs";
import Spinner from "./SubComponents/Spinner"

export function getAllPost(components) {
  const Datas = [
    {
      components: "banners",
      Element: <Banners />,
    },
    {
      components: "contact-sections",
      Element: <ContactSections />,
    },
    {
      components: "footers",
      Element: <Footers />,
    },
    {
      components: "logo-grid",
      Element: <Logogrid />,
    },
    {
      components: "404-pages",
      Element: <ErrorPage />,
    },
    {
      components: "hero-sections",
      Element: <HeroSections />,
    },
    {
      components: "feature-sections",
      Element: <FeatureSections />,
    },

    {
      components: "stats",
      Element: <Stats />,
    },
    {
      components: "inputs",
      Element: <Inputs />,
    },
    {
      components: "tables",
      Element: <Tables />,
    },
    {
      components: "pignations",
      Element: <Pignations />,
    },
    {
      components: "cards",
      Element: <Cards />,
    },
    {
      components: "alerts",
      Element: <Alerts />,
    },
    {
      components: "section-headers",
      Element: <SectionHeaders />,
    },
    {
      components: "steps",
      Element: <Steps />,
    },
    {
      components: "buttons",
      Element: <Buttons />,
    },
    {
      components: "tabs",
      Element: <Tabs />,
    },
    {
      components: "navbars",
      Element: <Navbar />,
    },
    {
      components: "select-menus",
      Element: <SelectMenu />,
    },
    {
      components: "modals",
      Element: <Modals />,
    },
    {
      components: "accordions",
      Element: <Accordions />,
    },
    {
      components: "avatars",
      Element: <Avatar />,
    },
    {
      components: "authentication",
      Element: <Authentication />,
    },
  ];
  if (components) {
    return Datas.filter((post) => post.components == components);
  }
  return Datas;
}
