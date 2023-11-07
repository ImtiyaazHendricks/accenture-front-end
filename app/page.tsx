import Image from 'next/image'
import Header from '@/components/header'
import ServicesContent from '@/components/services-content'
import CaseStudies from '@/components/case-studies'
import Brands from '@/components/brands'
import Footer from '@/components/footer'

export default function Home() {
  return (
      <div className="bg-[white]">
        <Header />
        <ServicesContent />
        <CaseStudies />
        <Brands />
        <Footer />
      </div>
  )
}
