import Layout from "@/components/Layout.jsx";
import Section1 from "@/components/Welcomepage/Section1";
import Section2 from "@/components/Welcomepage/Section2";
import Section3 from "@/components/Welcomepage/Section3";
import Section4 from "@/components/Welcomepage/Section4";
import Section5 from "@/components/Welcomepage/Section5";

export default function MyComponent() {
  return (
    <Layout>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </Layout>
  );
}
