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


         
         <h1 className={`${rouge.className} text-6xl mt-30 md:my-4 lg:md-8 `}>
            ✨<span className="text-[#F3AF51]">Gradinita</span> <span className="text-[#8B5E4C]">Busy Bee</span> 
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
            className="w-full aspect[9/16]  " 
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

            <h1 className="text-3xl mb-10 font-semibold my-10">Un loc magic unde copiii
învață prin joacă</h1>
            <motion.p 
            className="text-lg text-gray-600 max-w-5xl mb-10"
            variants={fadeInUp}
          >
            Oferim un loc sigur și primitor, unde copilul tău se poate dezvolta frumos și sănătos. La Grădinița Busy Bee, ne-am dorit să creăm mai mult decât o simplă grădiniță: un al doilea „acasă”. Este un loc plin de viață și veselie, unde fiecare copil este încurajat să descopere lumea în ritmul său, fără presiune.
               <br/><br/>
Educatorii noștri sunt oameni calzi și dedicați, care le sunt alături copiilor la fiecare pas. Programele noastre sunt bazate pe joacă, pentru că așa învață ei cel mai bine. Prin activități creative și jocuri în echipă, îi ajutăm să gândească singuri, să își facă prieteni și să se înțeleagă bine cu cei din jur.
<br/><br/>
Noi credem că fiecare copil este special. De aceea, scopul nostru este să îi dăm încrederea și sprijinul de care are nevoie pentru un start bun în viață. Ne dorim ca de la noi să plece curios, dornic să afle lucruri noi și cu amintiri frumoase, care să îl ajute să iubească învățarea pentru tot restul vieții.
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