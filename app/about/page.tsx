import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark-950 text-dark-100">
      <Navigation />

      {/* Hero Section - 중국 전통 붉은색 배경 */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-red-900 to-red-950 relative">
        {/* 중국 전통 패턴 배경 */}
        <div className="absolute inset-0 bg-[url('https://i.imgur.com/9eUylNW.png')] opacity-10 bg-repeat"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-batang font-bold text-gold-300 mb-6">기관소개</h1>
          <p className="text-lg text-gold-100/80 leading-relaxed max-w-3xl mx-auto">
            백송예술문화원은 중국의 고미술을 보존하고 연구하며 대중에게 소개하는 문화 기관입니다.
            <br />
            우리의 풍부한 문화유산을 지키고 다음 세대에게 전달하기 위해 노력하고 있습니다.
          </p>
        </div>
      </section>

      {/* Mission Section with Image - 중국 전통 어두운 배경 */}
      <section className="py-16 md:py-24 bg-dark-900 relative">
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl font-serif font-bold text-gold-300 text-center mb-8">인사말</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Column */}
            <div className="text-center md:text-left text-dark-200 leading-relaxed space-y-4">
              <p>
                안녕하십니까.
                <br />
                백송예술문화원 원장 오한웅입니다.
              </p>
              <p>
                저는 어린 시절, 조부로부터 &quot;한 나라의 문화유산은 그 민족의 정신이며, 곧 국가의 자존이다&quot;라는
                말씀을 듣고 예술과 문화재에 대한 깊은 관심을 가지게 되었습니다.
              </p>
              <p>
                이후 젊은 시절, 『로스차일드 가문』에 대한 서적을 접하며 예술품이 단순한 수집의 대상이 아닌, 국가와
                기업의 위상을 높이는 핵심 자산임을 깨달았습니다.
              </p>
              <p>
                우리나라에서도 삼성그룹 창업주 이병철 회장께서 문화재의 가치를 일찍이 인식하고 예술에 투자하여 기업
                정체성을 구축한 사례가 매우 인상적입니다.
              </p>
              <p>
                저는 중국 예술품의 시대가 도래할 것이라는 확신을 바탕으로 오랜 시간 연구와 수집에 몰두해왔습니다. 2025년
                3월 8일, 중국 정부의 법 개정을 통해 예술품이 금융 유동화 자산으로 인정받으면서 그 가능성은 현실이
                되었습니다.
              </p>
              <p>
                이제 예술품은 단순한 감상의 대상이 아닌 자산으로서의 기능을 수행하며 미래 경제에 새로운 비전을 제시하고
                있습니다.
              </p>
              <p>
                백송예술문화원은 청나라 건륭제 황실 소장품을 비롯한 고미술품을 전문적으로 다루며, 역사성과 예술성을
                겸비한 유물의 보존과 전시에 최선을 다하고 있습니다.
              </p>
              <p>
                앞으로도 예술을 통한 문화 교류와 가치 창출에 앞장서며 예술의 진정한 의미와 힘을 전하기 위해
                노력하겠습니다.
              </p>
              <p>
                감사합니다.
                <br />
                백송예술문화원 원장 오한웅 드림
              </p>
            </div>
            {/* Image Column */}
            <div className="flex justify-center md:justify-center">
              <div className="relative w-[300px] h-[400px]">
                <Image
                  src="https://i.imgur.com/vvDlzB2.jpeg"
                  alt="오한웅 원장"
                  fill
                  className="rounded-lg object-cover border border-gold-900/30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
