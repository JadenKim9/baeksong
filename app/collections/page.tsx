"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

interface Artwork {
  id?: string
  title: string
  artist?: string
  description?: string
  period?: string
  image: string
}

// Ensure Imgur page URLs become direct image links
const normalizeImageUrl = (url: string): string => {
  if (!url) return ""
  if (url.includes("imgur.com") && !url.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return url + ".jpg"
  }
  return url
}

export default function CollectionsPage() {
  const [artworks, setArtworks] = useState<Artwork[]>([])
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  useEffect(() => {
    fetch("https://opensheet.elk.sh/1xNPAoA5_taqS6I7D7KQak8-X8YXk3fCR3ugBpL58njA/Sheet1")
      .then((res) => res.json())
      .then((data) => {
        const valid = Array.isArray(data) ? data.filter((item: any) => item && item.image && item.title) : []
        setArtworks(valid)
      })
      .catch((err) => {
        console.error("Error fetching artworks:", err)
        setArtworks([])
      })
      .finally(() => setIsLoading(false))
  }, [])

  const sampleArtworks: Artwork[] = [
    {
      title: "청나라 도자기",
      artist: "작가 A",
      description: "18세기 청나라 시대의 아름다운 도자기 작품",
      image: "https://i.imgur.com/placeholder1.jpg",
    },
    {
      title: "중국 전통 회화",
      artist: "작가 B",
      description: "명나라 시대의 산수화 작품",
      image: "https://i.imgur.com/placeholder2.jpg",
    },
    {
      title: "청동기 유물",
      artist: "작가 C",
      description: "한나라 시대의 청동 의식용 그릇",
      image: "https://i.imgur.com/placeholder3.jpg",
    },
    {
      title: "비단 자수",
      artist: "작가 D",
      description: "청나라 시대의 정교한 비단 자수 작품",
      image: "https://i.imgur.com/placeholder4.jpg",
    },
  ]

  const allArtworks = artworks.length > 0 ? artworks : sampleArtworks
  // Normalize URLs and include artist field
  const normalizedArtworks = allArtworks.map((a) => ({
    title: a.title,
    artist: a.artist || "",
    description: a.description || "",
    image: normalizeImageUrl(a.image),
  }))

  // Filter by title or artist name
  const filtered = normalizedArtworks.filter(
    (a) =>
      a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (a.artist && a.artist.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1
  const startIdx = (currentPage - 1) * itemsPerPage
  const paged = filtered.slice(startIdx, startIdx + itemsPerPage)

  const openModal = (idx: number) => setSelectedIndex(startIdx + idx)
  const closeModal = () => setSelectedIndex(null)
  const prevImage = () =>
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + filtered.length) % filtered.length : null))
  const nextImage = () => setSelectedIndex((prev) => (prev !== null ? (prev + 1) % filtered.length : null))

  return (
    <div className="min-h-screen bg-dark-950 text-dark-100">
      <Navigation />

      {/* Hero Section - 중국 전통 붉은색 배경 */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-red-900 to-red-950 relative">
        {/* 중국 전통 패턴 배경 */}
        <div className="absolute inset-0 bg-[url('https://i.imgur.com/9eUylNW.png')] opacity-10 bg-repeat"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-batang font-bold text-gold-300 mb-6">소장품</h1>
          <p className="text-lg text-gold-100/80 leading-relaxed max-w-2xl mx-auto">
            백송예술문화원이 소장한 가치 있는 작품들을 만나보세요.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-dark-900 relative">
        <div className="container mx-auto flex justify-center relative z-10">
          <Input
            placeholder="작품 제목 또는 작가명 검색..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setCurrentPage(1)
            }}
            className="max-w-md bg-dark-800 border-gold-900/30 text-dark-100"
          />
        </div>
      </section>

      {/* Gallery Section with Pagination - 중국 전통 어두운 배경 */}
      <section className="py-8 bg-gradient-to-b from-dark-900 to-dark-950 relative">
        <div className="container mx-auto relative z-10">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gold-300 mb-4">주요 소장품</h2>

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-dark-200">작품을 불러오는 중입니다...</p>
            </div>
          ) : (
            <>
              {filtered.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-dark-200 text-lg">검색 결과가 없습니다.</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {paged.map((art, idx) => (
                      <div
                        key={idx}
                        className="bg-dark-900 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gold-900/30"
                        onClick={() => openModal(idx)}
                      >
                        {/* Square Thumbnail with black letterbox */}
                        <div className="relative w-full pb-[100%] bg-black flex items-center justify-center">
                          <img
                            src={art.image || "/placeholder.svg"}
                            alt={art.title}
                            className="absolute inset-0 object-contain w-full h-full"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-medium text-gold-300 truncate">{art.title}</h3>
                          <p className="text-dark-300 text-sm">{art.description}</p>
                          <p className="text-dark-300 text-sm mt-1">작가: {art.artist}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination Controls */}
                  <div className="flex justify-center items-center space-x-2 mt-6">
                    <Button
                      onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-3 py-1"
                    >
                      이전
                    </Button>
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`px-3 py-1 rounded ${
                          currentPage === i + 1 ? "bg-gold-600 text-dark-950" : "bg-dark-800 text-white"
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                    <Button
                      onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-3 py-1"
                    >
                      다음
                    </Button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>

      {/* Modal Viewer */}
      {selectedIndex !== null && filtered[selectedIndex] && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="relative w-full max-w-6xl bg-dark-900 rounded-lg p-4 border border-gold-900/30">
            <button onClick={closeModal} className="absolute top-2 right-2 text-black border border-white rounded-full p-1.5 z-50 bg-white">
              <X size={24} />
            </button>
            <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black border border-white rounded-full p-1.5 z-50 bg-white">
              <ChevronLeft size={24} />
            </button>
            <img
              src={filtered[selectedIndex].image || "/placeholder.svg"}
              alt={filtered[selectedIndex].title}
              className="object-contain w-full h-auto max-h-[80vh] mx-auto rounded-md"
            />
            <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black border border-white rounded-full p-1.5 z-50 bg-white">
              <ChevronRight size={24} />
            </button>
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold mb-2 text-gold-300">{filtered[selectedIndex].title}</h3>
              <p className="text-sm text-gray-300">{filtered[selectedIndex].description}</p>
              <p className="text-sm text-gray-300 mt-1">작가: {filtered[selectedIndex].artist}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
