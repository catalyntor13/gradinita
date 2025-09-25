"use client"


import {  Heart } from "lucide-react"
import { motion } from "framer-motion"

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
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-bold">Grădinița Busy Bee</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Un loc magic unde copiii învață prin joacă și se dezvoltă armonios.
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
              <h4 className="font-semibold mb-4">Informații</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Despre noi</li>
                <li>Echipa noastră</li>
                <li>Facilități</li>
                <li>Testimoniale</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Str. Florilor nr. 25</li>
                <li>0721 123 456</li>
                <li>contact@gradinitasoarele.ro</li>
                <li>Luni - Vineri: 7:00 - 18:00</li>
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