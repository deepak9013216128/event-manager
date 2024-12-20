import Header from "@/components/header";
import Footer from "@/components/footer";
// import { getUserDetailApi } from "@/services/user";

export default async function HomeLayout({ children }) {
  //   const user = await getUserDetailApi();
  return (
    <>
      <Header user={{}} />
      {children}
      <Footer />
    </>
  );
}
