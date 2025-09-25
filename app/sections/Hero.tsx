"use client"

import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/motion"


const Hero = () => {
  return (
   
    <section id='hero' className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div {...fadeInUp}>
            <Badge className="mb-6 bg-accent text-accent-foreground">
              ✨ Înscrierea pentru anul școlar 2024-2025 este deschisă!
            </Badge>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-balance mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Un loc magic unde copiii
            <motion.span
              className="text-primary block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              învață prin joacă
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Oferim un mediu sigur, cald și stimulativ pentru dezvoltarea armonioasă a copilului tău. Cu educatori
            dedicați și programe inovatoare.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Programează o Vizită
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent font-semibold"
              >
                Descarcă Broșura
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
  )
}

export default Hero