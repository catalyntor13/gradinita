import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import Stats from "./sections/Stats";
import About from "./sections/About";
import Programe from "./sections/Programe";
import Activitati from "./sections/Activitati";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <>
   <div><Header/></div>
   <div><Hero/></div>
   <div><Stats/></div>
   <div><About/></div>
   <div><Programe/></div>
   <div><Activitati/></div>
   <div><Contact/></div>
   <div><Footer/></div>
   </>
  );
}
