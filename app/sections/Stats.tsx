"use client"

import { motion } from "framer-motion"
import { staggerContainer } from "@/lib/motion"
import { staggerItem } from "@/lib/motion"

export default function Stats() {
    return (
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { number: "10+", label: "Ani de experiență" },
              { number: "800+", label: "Copii fericiți" },
              { number: "11", label: "Educatori calificați" },
              { number: "98%", label: "Părinți mulțumiți" },
            ].map((stat, index) => (
              <motion.div key={index} variants={staggerItem} >
                <motion.div
                  className="text-3xl font-bold text-primary mb-2 "
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    )
}