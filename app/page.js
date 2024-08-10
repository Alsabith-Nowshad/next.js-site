import Image from "next/image";

import NavBar from "../Components/NavBar";
import Hero from "@/Components/Hero";
import Comments from "@/Components/Comments";
import AboutUs from "@/Components/AboutUs";
import OurCourses from "@/Components/OurCourses";



export default function Home() {
  return (
    <>
    <NavBar/>
    <Hero/>
   <Comments/>
   <AboutUs/>
   <OurCourses/>
    </>
  );
}
