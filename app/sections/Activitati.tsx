"use client"


import { Badge } from "@/components/ui/badge"
import {  Users, BookOpen, Palette, Music, } from "lucide-react"
import { motion } from "framer-motion"
import { staggerContainer } from "@/lib/motion"
import { fadeInUp } from "@/lib/motion"
import { staggerItem } from "@/lib/motion"

export default function Activitati() {
    return (
        <section id="activitati" className="md:p-20 p-10">
        <div className="container mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp} viewport={{ once: true, margin: "-100px" }}>
            <Badge className="mb-4 bg-primary text-primary-foreground">Activități Speciale</Badge>
            <h2 className="text-3xl font-bold mb-4 text-balance">Activități care dezvoltă talentele copilului</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { icon: Palette, title: "Arte Plastice", description: "Pictură, desen, modelaj", color: "primary" },
              { icon: Music, title: "Muzică", description: "Cântece, dans, instrumente", color: "primary" },
              { icon: Users, title: "Sport", description: "Gimnastică, jocuri de mișcare", color: "primary" },
              { icon: BookOpen, title: "Engleză", description: "Învățare prin joacă", color: "primary" },
            ].map((activity, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center p-6 rounded-2xl bg-card border hover:shadow-lg transition-shadow">
                  <motion.div
                    className={`w-16 h-16 bg-${activity.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-4`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <activity.icon className={`w-8 h-8 text-${activity.color}`} />
                  </motion.div>
                  <h3 className="font-semibold mb-2">{activity.title}</h3>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    )
}