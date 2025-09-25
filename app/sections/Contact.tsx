"use client"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {  Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { fadeInLeft } from "@/lib/motion"
import { staggerContainer } from "@/lib/motion"
import { fadeInRight } from "@/lib/motion"
import { staggerItem } from "@/lib/motion"

export default function Contact(){
    return (
         <section id="contact" className="md:p-20 p-10 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div {...fadeInLeft} viewport={{ once: true, margin: "-100px" }}>
              <Badge className="mb-4 bg-primary text-primary-foreground">Contact</Badge>
              <h2 className="text-3xl font-bold mb-6 text-balance">Hai să ne cunoaștem!</h2>
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
                  { icon: MapPin, title: "Adresa", info: "Str. Florilor nr. 25, București" },
                  { icon: Phone, title: "Telefon", info: "0721 123 456" },
                  { icon: Mail, title: "Email", info: "contact@gradinitasoarele.ro" },
                  { icon: Clock, title: "Program", info: "Luni - Vineri: 7:00 - 18:00" },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4"
                    variants={staggerItem}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <contact.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div>
                      <div className="font-semibold">{contact.title}</div>
                      <div className="text-muted-foreground">{contact.info}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div {...fadeInRight} viewport={{ once: true, margin: "-100px" }}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-6">Programează o vizită</h3>
                    <form className="space-y-4">
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
                            type="text"
                            className="w-full p-3 border border-input rounded-lg bg-background"
                            placeholder="Numele tău"
                            whileFocus={{ scale: 1.02 }}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Nume copil</label>
                          <motion.input
                            type="text"
                            className="w-full p-3 border border-input rounded-lg bg-background"
                            placeholder="Numele copilului"
                            whileFocus={{ scale: 1.02 }}
                          />
                        </div>
                      </motion.div>
                      {["Telefon", "Email"].map((field, index) => (
                        <motion.div
                          key={field}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <label className="block text-sm font-medium mb-2">{field}</label>
                          <motion.input
                            type={field === "Email" ? "email" : "tel"}
                            className="w-full p-3 border border-input rounded-lg bg-background"
                            placeholder={field === "Email" ? "Adresa de email" : "Numărul de telefon"}
                            whileFocus={{ scale: 1.02 }}
                          />
                        </motion.div>
                      ))}
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <label className="block text-sm font-medium mb-2">Mesaj (opțional)</label>
                        <motion.textarea
                          className="w-full p-3 border border-input rounded-lg bg-background h-24"
                          placeholder="Întrebări sau comentarii..."
                          whileFocus={{ scale: 1.02 }}
                        />
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          Trimite Cererea
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    )
}