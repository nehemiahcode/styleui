// import Layout from "@/components/Layout";
import Preloader from "@/components/Loader";
import dynamic from "next/dynamic";

const DynamicPage = dynamic(() => import("../not-found"), {
  loading: () => <Preloader/>,
});

export default function Pages() {
  return <DynamicPage />;
}
