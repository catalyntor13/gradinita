"use client"


import { Badge } from "@/components/ui/badge"
import { Star, Heart, Users, Trophy} from "lucide-react"
import { motion } from "framer-motion"
import { fadeInLeft } from "@/lib/motion"
import { staggerContainer } from "@/lib/motion"
import { fadeInRight } from "@/lib/motion"
import { staggerItem } from "@/lib/motion"

export default function About(){
    return (
        <section id="despre" className="md:p-20 p-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInLeft} viewport={{ once: true, margin: "-100px" }}>
              <Badge className="mb-4 bg-secondary text-secondary-foreground">Despre Noi</Badge>
              <h2 className="text-3xl font-bold mb-6 text-balance">
                Creăm fundația pentru
                <span className="text-primary"> viitorul copilului tău</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                De peste 15 ani, Grădinița Soarele este un loc unde copiii se simt în siguranță, sunt iubiți și
                încurajați să exploreze lumea din jurul lor. Echipa noastră de educatori experimentați folosește metode
                moderne de învățare prin joacă.
              </p>
              <motion.div
                className="space-y-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  { icon: Star, text: "Educatori certificați și cu experiență" },
                  { icon: Heart, text: "Mediu sigur și stimulativ" },
                  { icon: Users, text: "Grupe mici pentru atenție personalizată" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    variants={staggerItem}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <item.icon className="w-4 h-4 text-primary" />
                    </motion.div>
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div className="relative" {...fadeInRight} viewport={{ once: true, margin: "-100px" }}>
              <motion.img
                src="/img-about.jpg"
                alt="Copii fericiți în sala de clasă"
                className="rounded-2xl shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 bg-card p-2 rounded-xl shadow-lg border"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  <span className="font-semibold ">Premiul pentru Excelență în Educație 2025</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    )
}