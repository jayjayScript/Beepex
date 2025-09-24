import React from "react";
import Hero from "./Hero";
import Steps from "./Steps";
import ItDoes from "./ItDoes";
import FAQAccordion from "./FaqAccordion";
import { faqData } from "@/components/constant";
import ResponsiveHeader from "@/components/ResponsiveHeader";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <section id="home">
        <Hero />
      </section>

      <section id="how-it-works">
        <Steps />
      </section>

      <section id="features">
        <ItDoes />
      </section>

      <section id="support" className="p-4">
        <ResponsiveHeader
          title='Got Questions? We’re Ready With Answers'
          description='Here’s everything you need to know about using Beepex, from gift card redemptions to bill payments, wallet security, and more.'
        />
        <FAQAccordion faqData={faqData} />
      </section>

      <Testimonials />
    </div>
  )
}

export default Home