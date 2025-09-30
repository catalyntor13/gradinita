"use client"


import { motion } from "framer-motion"
import Albinuta from "@/components/ui/albinuta"
import { FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/link";

export default function Footer(){
    return (
             <motion.footer
        className="bg-card border-t md:p-20 p-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
              
                <div className="flex items-center gap-1">
                  <Albinuta/>
                <span className="text-[#F3AF51] font-semibold">Gradinita</span><span className="text-[#8B5E4C] font-semibold">Busy Bee</span> 
                </div>
      
              </div>
              <p className="text-muted-foreground text-sm">
               Oferim un mediu sigur, cald și stimulativ pentru dezvoltarea armonioasă a copilului tău. Cu educatori dedicați și programe inovatoare.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Programe</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Grupa Mică (2-3 ani)</li>
                <li>Grupa Mijlocie (3-4 ani)</li>
                <li>Grupa Mare (4-6 ani)</li>
                <li>Activități extracurriculare</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Social Media</h4>
              <ul className="space-y-4 text-sm text-primary">
                <Link href='https://facebook.com/gradinitabusybee '>
                   <li className="flex items-center gap-2 mb-3 inline-flex hover:text-gray-500"><FaFacebook/>Facebook</li>
                   </Link>
                <Link href='https://instagram.com/gradinitabusybee'>
                
                <li className="flex items-center gap-2 mb-3 hover:text-gray-500"><FaInstagram/>Instagram</li>
                </Link>
                <Link href='https://www.tiktok.com/@gradinita.busybee'>
                     <li className="flex items-center gap-2 hover:text-gray-500"><FaTiktok/>TikTok</li>
                </Link>
             
                
           
         
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Adresa Gradinita 1: Strada Carol 18, Râmnicu Vâlcea, Romania</li>
                <li>Adresa Gradinita 2: Strada General Praporgescu 7, Râmnicu Vâlcea, Romania</li>
                <li>Email : gradinitabusybee@yahoo.com</li>
                <li>Telefon: +40727334412</li>
                <li>Program: Luni - Vineri: 8:00 - 17:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Grădinița Busy Bee. Toate drepturile rezervate.</p>
          </div>
        </div>
      </motion.footer>
   
    )
}