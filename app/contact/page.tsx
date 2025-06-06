import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-dark-950 text-dark-100">
      <Navigation />

      {/* Hero Section - 중국 전통 붉은색 배경 */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-red-900 to-red-950 relative">
        {/* 중국 전통 패턴 배경 */}
        <div className="absolute inset-0 bg-[url('https://i.imgur.com/9eUylNW.png')] opacity-10 bg-repeat"></div>
        <div className="container relative z-10 flex justify-center">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-batang font-bold text-gold-300 mb-6">Contact Us</h1>
            <p className="text-lg text-gold-100/80 leading-relaxed">
              백송예술문화원에 문의하실 내용이 있으시면 언제든지 연락주세요. 방문, 전시, 협업 등 다양한 문의에 친절히
              답변해 드리겠습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info - 중국 전통 어두운 배경 */}
      <section className="py-16 md:py-24 bg-dark-900 relative">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 왼쪽: 이미지 */}
            <div className="hidden lg:block relative h-[400px]">
              <Image
                src="https://i.imgur.com/9eUylNW.png"
                alt="연락처 이미지"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gold-300 mb-6">연락처 정보</h2>
              <div className="bg-dark-900 rounded-lg p-8 space-y-8 border border-gold-900/30">
                <div className="flex items-start gap-4">
                  <div className="bg-gold-900/50 p-3 rounded-full text-gold-400">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gold-300 mb-2">주소</h3>
                    <a
                      href="https://www.google.com/maps/search/%EC%84%9C%EC%9A%B8%EC%8B%9C+%EC%86%A1%ED%8C%8C%EA%B5%AC+%EB%B0%B1%EC%A0%9C%EA%B3%A0%EB%B6%84%EB%A1%9C+63+%EC%9B%8C%EB%84%88%EC%8A%A4%EC%98%A4%ED%94%BC%EC%8A%A4%ED%85%94+1%EC%B0%A8+1109%ED%98%B8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-300 underline hover:text-gold-400 transition-colors"
                    >
                      서울시 송파구 백제고분로 63<br />
                      워너스오피스텔 1차 1109호
                    </a>
                    <p className="text-dark-200">
                      <br />
                      백송예술문화원
                    </p>
                    <p className="text-dark-300 text-sm mt-2">지하철 3호선 안국역 2번 출구에서 도보 10분</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold-900/50 p-3 rounded-full text-gold-400">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gold-300 mb-2">전화</h3>
                    <a href="tel:+82-10-9080-7708" className="text-gold-300 underline hover:text-gold-400 transition-colors">
                      010-9080-7708
                    </a>
                    <p className="text-dark-300 text-sm mt-2">평일 10:00 - 18:00 (점심시간 12:00 - 13:00)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold-900/50 p-3 rounded-full text-gold-400">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gold-300 mb-2">이메일</h3>
                    <a href="mailto:ryr0106@hanmail.net" className="text-gold-300 underline hover:text-gold-400 transition-colors">
                      ryr0106@hanmail.net
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
