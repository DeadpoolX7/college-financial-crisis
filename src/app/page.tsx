import Hero from './components/Hero'
import CTA from './components/CTA'
import VideoSection from './components/VideoSection'
import Testimonials from './components/Testimonials'
import EmailSignup from './components/EmailSignup'
import ContactInfo from './components/ContactInfo'
export default function Home() {
  return (
    <>
      <Hero />
      <CTA />
      <VideoSection />
      <Testimonials />
      <ContactInfo />
      <EmailSignup />
    </>
  );
}
