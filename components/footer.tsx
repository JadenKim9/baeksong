import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-dark-950 text-dark-300 border-t border-gold-900/20">
      <div className="container py-16">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="space-y-4 md:max-w-xs">
            <h3 className="text-xl font-serif font-bold text-gold-400">백송예술문화원</h3>
            <p className="text-sm leading-relaxed">
              중국 전통 예술의 아름다움과 역사를 보존하고 공유하는 문화 기관입니다.
            </p>
          </div>

          <div className="mt-8 md:mt-0">
            <h4 className="text-gold-400 font-medium mb-4">바로가기</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-dark-300 hover:text-gold-400 transition-colors">
                  기관소개
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-dark-300 hover:text-gold-400 transition-colors">
                  소장품
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-dark-300 hover:text-gold-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-8 md:mt-0">
            <h4 className="text-gold-400 font-medium mb-4">연락처</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gold-500 shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/search/%EC%84%9C%EC%9A%B8%EC%8B%9C+%EC%86%A1%ED%8C%8C%EA%B5%AC+%EB%B0%B1%EC%A0%9C%EA%B3%A0%EB%B6%84%EB%A1%9C+63+%EC%9B%8C%EB%84%88%EC%8A%A4%EC%98%A4%ED%94%BC%EC%8A%A4%ED%85%94+1%EC%B0%A8+1109%ED%98%B8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-400 transition-colors"
                >
                  서울시 송파구 백제고분로 63<br />
                  워너스오피스텔 1차 1109호
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gold-500 shrink-0" />
                <a href="tel:+82-10-9080-7708" className="hover:text-gold-400 transition-colors">
                  010-9080-7708
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gold-500 shrink-0" />
                <a href="mailto:ryr0106@hanmail.net" className="hover:text-gold-400 transition-colors">
                  ryr0106@hanmail.net
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gold-900/20 py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-dark-500">
            &copy; {new Date().getFullYear()} 백송예술문화원. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-dark-500 hover:text-gold-400">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="text-sm text-dark-500 hover:text-gold-400">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
