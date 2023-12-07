import Layout from "@/components/Layout.jsx";
import { getAllPost } from "../../../components/Dynamics";

export default function Page({ params }) {
  const { components } = params;
  const post = getAllPost(components);
  return (
    <Layout>
      <>
        {post.map((p) => (
          <section key={p.components} className=" w-[97%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[65%] 2xl:w-[60%] h-auto my-10 mx-auto">{p.Element}</section>
        ))}
      </>
    </Layout>
  );
}

export async function generateStaticParams() {
  const mypost = getAllPost();

  return mypost.map(() => ({
    components: mypost.components,
    fallback: false,
  }));
}
