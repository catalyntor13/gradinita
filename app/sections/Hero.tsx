"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import scrollToId from "@/lib/scrollToId"
import { fadeInUp } from "@/lib/motion"
import { Rouge_Script } from "next/font/google";


const rouge = Rouge_Script({
  subsets: ["latin"],
  weight: "400", // e singura variantă disponibilă
});



export default function Hero() {


  return (
    <section id="hero" className="bg-white py-20 md:p-40 bg-[url(/section2.jpg)] bg-no-repeat bg-cover">
      <div className="container mx-auto px-4 flex flex-col items-center text-center gap-10">
        
        {/* Partea de Text (Centrat și Animat) */}
        <motion.div
          className="max-w-5xl flex flex-col items-center gap-5"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >


         
         <h1 className={`${rouge.className} text-4xl mb-4 `}>
              ✨ Gradinita Busy Bee
            </h1>
          
      
        </motion.div>


        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-2 order-2 md:order-1">
            {/* Partea de Video (Centrat și Animat) */}
        <motion.div 
          className="w-full max-w-4xl shadow-2xl rounded-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }} // Apare după text
        >
          <video 
            className="w-full h-[600px] object-cover object-[75%_25%] " 
            controls
            loop 
            muted 
            src='/gradinita.mp4'
            
          >
            Conținutul video nu poate fi redat.
          </video>
        </motion.div>
          </div>
          <div className="col-span-2 order-1 md:order-2">

            <h1 className="text-5xl mb-10 font-semibold">Un loc magic unde copiii
învață prin joacă</h1>
            <motion.p 
            className="text-lg md:text-2xl text-gray-600 max-w-5xl mb-10"
            variants={fadeInUp}
          >
            Oferim un mediu sigur, cald și stimulativ pentru dezvoltarea armonioasă a copilului tău. Cu educatori dedicați și programe inovatoare.
          </motion.p>
             {/* Butonul CTA (Centrat și Animat Separat) */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }} // Apare la final
        >
            <Button
                size="lg" // Buton mare, vizibil
                className="bg-[#F3AF51] hover:bg-orange-600 text-white text-lg px-10 py-3 rounded-full shadow-xl transition duration-300 transform hover:scale-105"
                onClick={() => scrollToId('contact', 80, 1200)}
            >
                Programează o vizită
            </Button>
        </motion.div>
          </div>
        </div>
        
        

     

      </div>
    </section>
  )
}