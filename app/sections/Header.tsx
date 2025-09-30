'use client'

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion";
import scrollToId from "@/lib/scrollToId";
import { Menu } from 'lucide-react';
import Image from "next/image";

 
export default function Header () {

  const [open, setOpen] = useState(false)
    
  const navItems = [
    { name: "Despre noi", href: "despre" },
    { name: "Programe", href: "programe" },
    { name: "Activitati", href: "activitati" },
    { name: "Contact", href: "contact" },
  ];
  
  return (
    <header className="fixed top-0 z-50 bg-white w-full border-b-2 border-shadow-md ">
     <div className="flex md:justify-around justify-between p-2 ">
        <div>
          <Image
          alt="logo"
          src='/logo.jpg'
          width={100}
          height={100}
          />
        </div>
   {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.15, y: -1 }} 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
               <button
            onClick={() =>  scrollToId(item.href, 80, 1200)} // 80 = înălțime header
            className="text-lg font-semibold transition-colors hover:text-grey-500 cursor-pointer"
          >
            {item.name}
          </button>
            </motion.div>
          ))}
        </nav>

             {/* Mobile Navigation */}
        <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="m-10" variant="outline"><Menu /></Button>
      </SheetTrigger>

      <SheetContent side="left">
        <nav className="flex flex-col space-y-4 p-10">
           {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
               <button
            onClick={() => {
              scrollToId(item.href, 80, 1200)
              setOpen(false)
            }} // 80 = înălțime header
            className="text-lg font-bold transition-colors hover:text-green-500 cursor-pointer"
          >
            {item.name}
          </button>
            </motion.div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
     </div>
     {/* Mobile Navigation */}
     </div>
        
   
    </header>
  )
}