"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import scrollToId from "@/lib/scrollToId"
import { fadeInUp } from "@/lib/motion"



export default function Hero() {


  return (
    <section id="hero" className="bg-white sm:p-20 lg:p-30  bg-[url(/section2.jpg)] bg-no-repeat bg-cover">
      <div className="container mx-auto px-4 flex flex-col items-center text-center gap-10">
        
        {/* Partea de Text (Centrat și Animat) */}
        <motion.div
          className="max-w-5xl flex flex-col items-center gap-5"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >


           
       <h1 className="sm:mt-20 mt-40 lg:mb-5 flex flex-col gap-2 lg:gap-0 font-bold lg:flex-row text-5xl sm:text-6xl lg:text-6xl">
  <span className="text-[#F3AF51] md:mr-3 ml-0">Grădinița</span>
  <span className="text-[#8B5E4C]">Busy Bee</span>
</h1>

          
      
        </motion.div>


        <div className="flex flex-col flex-col-reverse lg:flex-row gap-10 items-center">
          <div className="1">
            {/* Partea de Video (Centrat și Animat) */}
        <motion.div 
          className="w-full shadow-2xl rounded-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }} // Apare după text
        >
          <video width={120} height={120} 
         className="w-full"
            controls 
            src='/gradinita.mp4'
            poster='/video.gif'
          >
            Conținutul video nu poate fi redat.
          </video>
        </motion.div>
          </div>
          <div className="w-full h-full">

            <h1 className="text-3xl mb-5 font-bold my-10">Un loc magic unde copiii
învață prin joacă </h1>
            <motion.p 
            className="text-[1.5rem] text-gray-600 max-w-6xl mb-10"
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
                 // Buton mare, vizibil
                className="bg-[#F3AF51] hover:bg-orange-600 text-white text-[1.5rem] px-10 py-6 md:py-3 rounded-full shadow-xl transition duration-300 transform hover:scale-105"
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