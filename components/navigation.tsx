"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Nanum_Myeongjo } from "next/font/google"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const nanum = Nanum_Myeongjo({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})

const navItems = [
  { name: "기관소개", href: "/about" },
  { name: "소장품", href: "/collections" },
  { name: "Contact Us", href: "/contact" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-dark-950/95 backdrop-blur-sm shadow-md shadow-dark-900/50 py-3"
            : "bg-transparent py-4 md:py-6",
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo and Traditional Title */}
          <Link href="/" className="relative z-10 flex items-center space-x-3">
            <Image src="https://i.imgur.com/YUgDNA2.png" alt="백송예술문화원 로고" width={40} height={40} priority />
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={cn(
                nanum.className,
                "font-bold text-xl sm:text-2xl transition-colors duration-300",
                isScrolled ? "text-gold-400" : "text-white",
              )}
            >
              백송예술문화원
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "font-medium transition-colors duration-300 hover:text-gold-400",
                  isScrolled ? "text-dark-100" : "text-white",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={cn("md:hidden relative z-10", isScrolled ? "text-dark-100" : "text-white")}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark-950 pt-20 px-6 overflow-y-auto"
          >
            <nav className="flex flex-col space-y-6 items-center">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-xl font-medium text-white hover:text-gold-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
