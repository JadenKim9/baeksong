"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, ArrowRight, X, ZoomIn } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

// Normalize Imgur page URLs to direct image links
const normalizeImageUrl = (url: string): string => {
  if (!url) return ""
  if (url.includes("imgur.com") && !url.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return url + ".jpg"
  }
  return url
}

interface Artwork {
  id?: string
  title: string
  artist?: string
  description?: string
  period?: string
  image: string
  details?: string
}

export default function Home() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const blur = useTransform(scrollYProgress, [0, 0.5], [0, 4])

  const [featuredArtworks, setFeaturedArtworks] = useState<Artwork[]>([])
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = ""
    }
  }, [])

  useEffect(() => {
    fetch("https://opensheet.elk.sh/1xNPAoA5_taqS6I7D7KQak8-X8YXk3fCR3ugBpL58njA/Sheet1")
      .then((res) => res.json())
      .then((data) => {
        const rows = [0, 1, 2]  // 처음 3개 작품 선택
        const selected = Array.isArray(data)
          ? data
              .filter((_, idx) => rows.includes(idx))
              .map((item) => ({
                ...item,
                image: normalizeImageUrl(item.image),
                artist: item.artist || "",
              }))
          : []
        setFeaturedArtworks(selected)
      })
      .catch((err) => {
        console.error("Featured fetch error:", err)
        setFeaturedArtworks([])
      })
  }, [])

  const openArtworkModal = (art: Artwork) => setSelectedArtwork(art)
  const closeArtworkModal = () => setSelectedArtwork(null)

  return (
    <div className="relative text-dark-100 overflow-hidden">
      <div className="fixed inset-0 bg-dark-950 -z-10"></div>
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.03] -z-10"></div>
      <Navigation />

      {/* Hero Section */}
      <section
        ref={ref}
        className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-red-900/70 via-red-950/70 to-dark-950"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.15),transparent_70%)]"></div>
        <motion.div style={{ opacity, scale, filter: `blur(${blur}px)` }} className="absolute inset-0 z-0">
          <Image
            src="https://i.imgur.com/sCSkKrs.png"
            alt="백송예술문화원"
            fill
            className="object-cover brightness-[0.4] w-full h-full"
            priority
            quality={100}
            unoptimized
          />
        </motion.div>
        <div className="container relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-3"
          >
            <span className="inline-block px-3 py-1 bg-gold-600/10 border border-gold-400/20 rounded-full text-sm text-gold-300 backdrop-blur-sm">
              백송예술문화원
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-2xl md:text-5xl lg:text-6xl font-batang font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-200 to-gold-300 mb-6 tracking-tight"
          >
            <span className="">
              중국 전통 예술
            </span>의 아름다움
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            예술적 가치와 역사적 의미를 보존하고 공유하는 문화 기관
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Link href="/about">
              <Button className="bg-gold-600 hover:bg-gold-700 text-dark-950 rounded-full px-6 transition-all shadow-lg shadow-gold-900/20 hover:shadow-gold-900/40">
                자세히 알아보기
              </Button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-10 w-full flex justify-center z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <ChevronDown className="h-8 w-8 text-gold-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 to-dark-900/90 -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,215,0,0.1),transparent_70%)] -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="inline-block px-4 py-1.5 border border-gold-500/30 text-gold-400 rounded-full text-sm font-medium backdrop-blur-sm bg-dark-950/30">
                기관소개
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">백송예술문화원</span>
              </h2>
              <p className="text-white/90 leading-relaxed text-lg">
                백송예술문화원은 중국의 고미술을 보존하고 연구하며 대중에게 소개하는 문화 기관입니다. 문화유산을 지키고
                다음 세대에게 전달하기 위해 노력하고 있습니다.
              </p>
              <p className="text-white/90 leading-relaxed text-lg">
                최고의 전문가들이 엄선한 작품들을 통해 중국 전통 예술의 아름다움과 깊이를 경험할 수 있습니다.
              </p>
              <div className="pt-4">
                <Link href="/about">
                  <Button className="bg-dark-800 hover:bg-dark-700 text-gold-400 border border-gold-500/30 hover:border-gold-500 hover:text-gold-300 transition-all shadow-md">
                    더 알아보기
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/90 to-dark-950/90 -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,215,0,0.1),transparent_70%)] -z-10"></div>
        <div className="container relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16 space-y-4"
          >
            <span className="inline-block px-4 py-1.5 border border-gold-500/30 text-gold-400 rounded-full text-sm font-medium backdrop-blur-sm bg-dark-950/30 mb-4">
              소장품
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">주요 소장품</h2>
            <p className="text-dark-200 max-w-2xl mx-auto">백송예술문화원에서 지정한 소장품을 소개합니다</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 justify-center">
            {featuredArtworks.map((art, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-dark-900/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gold-900/30"
              >
                {/* Thumbnail */}
                <div
                  className="relative w-full pb-[100%] bg-dark-950 flex items-center justify-center cursor-pointer overflow-hidden"
                  onClick={() => openArtworkModal(art)}
                >
                  <img
                    src={art.image || "/placeholder.svg"}
                    alt={art.title}
                    className="absolute inset-0 object-contain w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center opacity-0 hover:opacity-100 backdrop-blur-sm">
                    <div className="rounded-full bg-gold-600/80 p-3 transform scale-0 group-hover:scale-100 transition-all duration-300 shadow-lg">
                      <ZoomIn className="text-dark-950 h-6 w-6" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">{art.title}</h3>
                  <p className="text-dark-300 text-lg">{art.artist}</p>
                  <p className="text-dark-300 text-sm mb-4">{art.period || art.description}</p>
                  <button
                    onClick={() => openArtworkModal(art)}
                    className="inline-flex items-center text-gold-400 hover:text-gold-300 font-medium group"
                  >
                    자세히 보기
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artwork Modal */}
      {selectedArtwork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeArtworkModal}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl max-h-[90vh] w-full mx-4" 
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white bg-dark-800/80 rounded-full p-2 hover:bg-dark-700 transition-colors z-10 backdrop-blur-sm"
              onClick={closeArtworkModal}
            >
              <X className="h-6 w-6" />
            </button>
            <div className="bg-dark-900/90 backdrop-blur-md rounded-2xl overflow-hidden border border-gold-900/30 shadow-2xl">
              <div className="relative h-[70vh] bg-black/70">
                <img
                  src={normalizeImageUrl(selectedArtwork.image) || "/placeholder.svg"}
                  alt={selectedArtwork.title}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
              <div className="p-8 bg-gradient-to-b from-dark-900/90 to-dark-950/90 backdrop-blur-sm">
                <h2 className="text-3xl font-serif font-bold text-white mb-3">{selectedArtwork.title}</h2>
                <p className="text-dark-300 text-xl">{selectedArtwork.artist}</p>
                <p className="text-dark-300 mt-2 text-lg">{selectedArtwork.period || selectedArtwork.description}</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Contact CTA */}
      <section className="py-24 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/90 to-red-950/90 -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.15),transparent_70%)] -z-10"></div>
        <div className="container relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">문의하기</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">문의사항이 있으시면 언제든지 연락주세요. 친절히 답변해드리겠습니다.</p>
            <div className="mt-8">
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-gold-400 text-gold-400 hover:bg-gold-600 hover:text-dark-950 transition-all duration-300 rounded-full px-8 py-6 text-lg shadow-lg shadow-gold-900/20 hover:shadow-gold-900/40"
                >
                  연락하기
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
