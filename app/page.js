import NavBar from "../Components/NavBar";
import Hero from "@/Components/Hero";
import Comments from "@/Components/Comments";
import AboutUs from "@/Components/AboutUs";
import OurCourses from "@/Components/OurCourses";
import Faqs from "@/Components/Faqs";



export default function Home() {
  return (
    <>
    <div className="main flex flex-col justify-center ">

    <NavBar/>
    <Hero/>
   <Comments/>
   <AboutUs/>
   <OurCourses/>
   <Faqs/> 

   </div>
    </>
  );
}
