"use client"


import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {  Heart, BookOpen, Trophy } from "lucide-react"
import { motion } from "framer-motion"
import { staggerContainer } from "@/lib/motion"
import { fadeInUp } from "@/lib/motion"
import { staggerItem } from "@/lib/motion"

export default function Programe() {
    return (
       <section id="programe" className="md:p-20 p-8 bg-muted/30">
        <div className="container mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp} viewport={{ once: true, margin: "-100px" }}>
            <Badge className="mb-4 bg-accent text-accent-foreground">Programele Noastre</Badge>
            <h2 className="text-3xl font-bold mb-4 text-balance">Programe adaptate pentru fiecare vârstă</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferim programe educaționale complete, adaptate nevoilor specifice ale fiecărei grupe de vârstă
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                icon: Heart,
                title: "Grupa Mică (2-3 ani)",
                description: "Adaptare treptată, dezvoltarea independenței și a abilităților sociale de bază",
                activities: ["Activități senzoriale", "Jocuri de socializare", "Dezvoltarea limbajului"],
                color: "white",
              },
              {
                icon: BookOpen,
                title: "Grupa Mijlocie (3-4 ani)",
                description: "Dezvoltarea creativității, a gândirii logice și a abilităților de comunicare",
                activities: ["Activități artistice", "Jocuri educative", "Inițiere în matematică"],
                color: "white",
              },
              {
                icon: Trophy,
                title: "Grupa Mare (4-6 ani)",
                description: "Pregătirea pentru școală, dezvoltarea autonomiei și a responsabilității",
                activities: ["Pregătire pentru citit-scris", "Matematică aplicată", "Proiecte de grup"],
                color: "white",
              },
            ].map((program, index) => (
              <motion.div key={index} variants={staggerItem}>
                <motion.div whileHover={{ y: -10, scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                    <CardContent className="p-6">
                      <motion.div
                        className={`w-12 h-12 bg-[#FF6600] rounded-xl flex items-center justify-center mb-4`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <program.icon className={`w-6 h-6 text-${program.color}`} />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                      <p className="text-muted-foreground mb-4">{program.description}</p>
                      <ul className="space-y-2 text-sm">
                        {program.activities.map((activity, actIndex) => (
                          <motion.li
                            key={actIndex}
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: actIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className={`w-1.5 h-1.5 bg-black rounded-full`}></div>
                            {activity}
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    )
}