import { Outlet } from "react-router-dom";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <div className="">This is Home</div>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default Home;
