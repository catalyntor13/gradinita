"use client"

import React from "react"
import { useState, useEffect} from "react"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {  Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { fadeInLeft } from "@/lib/motion"
import { staggerContainer } from "@/lib/motion"
import { fadeInRight } from "@/lib/motion"
import { staggerItem } from "@/lib/motion"
import { FaTiktok, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import Albinuta from "@/components/ui/albinuta"
import Link from "next/link"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";


const schema = z.object({
  name: z.string().min(1, "Completați numele"),
  telefon: z.string().min(10, "Număr telefon invalid"),
  email: z.string().email("Email invalid"),
  message: z.string().min(1, "Scrie un mesaj"),
  childAge: z.string().min(1, "Selectează vârsta copilului"),
});

type FormData = z.infer<typeof schema>;


export default function Contact(){

  const [status, setStatus] = useState<"idle"|"success"|"error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
   const[isSubmitted, setIsSubmitted] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });


   useEffect(() => {
  if (isSubmitted) {
    const timer = setTimeout(() => {
      setIsSubmitted(false);
    }, 5000); // 5 secunde

    return () => clearTimeout(timer);
  }
}, [isSubmitted]);

  async function onSubmit(data: FormData) {
  setErrorMsg(null);
  try {
    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (res.ok && json.ok) {
      setStatus("success");
      reset();
    } else {
      setStatus("error");
      setErrorMsg(json.error || "Eroare la trimitere");
    }
  } catch (e) {
    setStatus("error");
    setErrorMsg((e as Error).message || "Network error");
  }
}


  

    return (
         <section id="contact" className="md:p-20 p-10 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div {...fadeInLeft} viewport={{ once: true, margin: "-100px" }}>
              <div className="flex mb-4 gap-2 items-center justify-center md:justify-start">
                <Albinuta/>
<Badge className="bg-secondary text-primary font-semibold text-[1rem]">Contact</Badge>
              </div>
              
              <h2 className="text-3xl font-bold mb-6 text-balance text-center md:text-left">Hai să ne cunoaștem!</h2>
              <p className="text-muted-foreground mb-8">
                Suntem aici pentru a răspunde la toate întrebările tale. Programează o vizită și descoperă de ce
                părinții ne aleg pe noi.
              </p>

              <motion.div
                className="space-y-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  { icon: MapPin, title: "Adresa Gradinita 1", info: "Strada Carol 18, Râmnicu Vâlcea, Romania" },
                  { icon: MapPin, title: "Adresa Gradinita 2", info: "Strada General Praporgescu 7, Râmnicu Vâlcea, Romania" },
                  { icon: Phone, title: "Telefon", info: "+40727334412" },
                  { icon: Mail, title: "Email", info: "gradinitabusybee@yahoo.com" },
                  { icon: Clock, title: "Program", info: "Luni - Vineri: 8:00 - 17:00" },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-5 "
                    variants={staggerItem}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#F3AF51]"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <contact.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="w-full text-wrap">
                      <div className="font-semibold ">{contact.title}</div>
                      <div className="text-muted-foreground ">{contact.info}</div>
                    </div>
                     
                  </motion.div>
                ))}
                 <div>
                      <h2 className="font-semibold mt-20 md:mt-10 text-2xl text-center">Urmareste-ne si pe social media</h2>
                      <div className="flex gap-5 p-2 justify-center mt-10 md:mt-5">
                        <Link href='https://facebook.com/gradinita.busybee'>
                        <FaFacebook className="text-[2rem] cursor-pointer "/>
                        </Link>
                        <Link href='https://instagram.com/gradinita.busybee'>
                         <FaInstagram className="text-[2rem] cursor-pointer"/>
                        </Link>
                        <Link href='https://www.tiktok.com/@gradinita.busybee'>
                             <FaTiktok className="text-[2rem] cursor-pointer"/>
                        </Link>
                          <Link href='https://www.tiktok.com/@gradinita.busybee'>
                             <FaWhatsapp className="text-[2rem] cursor-pointer"/>
                           </Link>
                       
                      
                  
                      </div>
                    </div>
              </motion.div>
            </motion.div>

            <motion.div {...fadeInRight} viewport={{ once: true, margin: "-100px" }}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">

                    
                    <h3 className="text-xl font-bold mb-6">Programează o vizită</h3>

                     {!isSubmitted ? (
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
  <motion.div
    className="grid md:grid-cols-2 grid-cols-1 gap-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
    viewport={{ once: true }}
  >
    <div>
      <label className="block text-sm font-medium mb-2">Nume părinte</label>
      <motion.input
        {...register("name")}
        placeholder="Numele tău"
        type="text"
        className="w-full p-3 border border-input rounded-lg bg-background"
        whileFocus={{ scale: 1.02 }}
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
    </div>
    <div>
      <label className="block text-sm font-medium mb-2">Nume copil</label>
      <motion.input
        placeholder="Numele copilului"
        type="text"
        className="w-full p-3 border border-input rounded-lg bg-background"
        whileFocus={{ scale: 1.02 }}
      />
      {/* dacă vrei să salvezi și asta: {...register("childName")} și îl adaugi în schema */}
    </div>
  </motion.div>

  <div>
    <label className="block text-sm font-medium mb-2">E-mail</label>
    <motion.input
      {...register("email")}
      placeholder="Adresa email"
      type="email"
      className="w-full p-3 border border-input rounded-lg bg-background"
      whileFocus={{ scale: 1.02 }}
    />
    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
  </div>

  <div>
    <label className="block text-sm font-medium mb-2">Telefon</label>
    <motion.input
      {...register("telefon")}
      placeholder="Număr de telefon"
      type="text"
      className="w-full p-3 border border-input rounded-lg bg-background"
      whileFocus={{ scale: 1.02 }}
    />
    {errors.telefon && <p className="text-red-500 text-sm">{errors.telefon.message}</p>}
  </div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
  viewport={{ once: true }}
>
  <label className="block text-sm font-medium mb-2">Vârsta copilului</label>
  <motion.select
    {...register("childAge")}
    className="w-full p-3 border border-input rounded-lg bg-background"
    whileFocus={{ scale: 1.02 }}
    defaultValue=""
  >
    <option value="" disabled>Selectează vârsta</option>
    <option value="1-3 ani">1-3 ani</option>
    <option value="3-4 ani">3-4 ani</option>
    <option value="4-5 ani">4-5 ani</option>
    <option value="5-6 ani">5-6 ani</option>
  </motion.select>
  {errors.childAge && (
    <p className="text-red-500 text-sm">{errors.childAge.message}</p>
  )}
</motion.div>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    viewport={{ once: true }}
  >
    <label className="block text-sm font-medium mb-2">Mesaj</label>
    <motion.textarea
      {...register("message")}
      className="w-full p-3 border border-input rounded-lg bg-background h-24"
      placeholder="Întrebări sau comentarii..."
      whileFocus={{ scale: 1.02 }}
    />
    {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
  </motion.div>

  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
    <Button
      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
      disabled={isSubmitted}
    >
      {isSubmitted ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Se trimite...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Trimite Mesajul
                </>
              )}
    </Button>
  </motion.div>

  {status === "error" && <p className="text-red-500 text-sm">{errorMsg}</p>}
</form>
                     ) : (

                      <div className="text-center py-8">
            <div className="relative mb-6">
       
              <div className="absolute inset-0 h-16 w-16 text-green-400 animate-ping opacity-20 mx-auto">
               
              </div>
            </div>
            <h3 className="text-2xl font-bold text-green-400 mb-2">Mesaj trimis cu succes!</h3>
            <p className="text-gray-300">Îți voi răspunde în cel mai scurt timp posibil.</p>
          </div>
        )}
                     
                    

                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    )
}