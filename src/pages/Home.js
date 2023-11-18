import React, { useEffect, useRef } from "react";
import "../styles/home.css";
import ArtDisplay from "../components/ArtDisplay";
import Header from "../components/Header";
import gsap from "gsap";
import img1 from "../images/product-jpeg-500x500.webp";
import img2 from "../images/things_to_know_before_buying_blue_potterry.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Home = () => {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  const handleClick = () =>{
       scrollRef.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className="home-wrap">
      <div className="home">
        <Header />
        <div className="intro">
          <div className="intro-text">
            Welcome to our online gallery, where the mesmerizing world of Indian
            handicrafts comes to life! Explore a treasure trove of exquisite,
            handcrafted masterpieces that reflect centuries of craftsmanship,
            creativity, and culture. Our website is a virtual gateway to the
            heart of India's artisanal heritage, where every piece tells a story
            and every creation is a labor of love.
          </div>
          <p className="text-center">scroll-down to know more</p>
          <div>
            <div class="scroll" onClick={handleClick}> </div>
          </div>
        </div>
      </div>
      <div className="scroll-section-outer">
        <div ref={triggerRef}>
          <div ref={sectionRef} className="scroll-section-inner">
            <section ref={scrollRef} className="scroll-section red">
              <ArtDisplay img={img1} title={"AARI WORK"}  about={" Aari art work is popular for its fine and delicate thread work. Aari art work is popular for its fine and delicate thread work. Aari work enhances the essence of hand embroidery. It is largely practiced in Ahmedabad. The kind of stitch that is used for Aari work embroidery is chain stitch. Since Aari work has its origin from the Mughal era, motifs of Aari work are derived from nature. These motifs include leaves, vines, flowers, trees, birds and animals. Embroideries used in ethnic fashion are distinguished from the Aari embroidery because of these motifs. This type of embroidery has its place in contemporary fashion as well."} />
            </section>
            <section className="scroll-section orange">
              <ArtDisplay  img={img2} title={"Blue Pottery"} about={"Jaipur blue pottery has strong influences of the Persian ceramic style but it has developed its own designs and motifs. Inspired more from nature, the pottery is adorned with profusely animals, birds and flowers with a hint of Persian geometric design in the compositions.["}/>
            </section>
            <section className="scroll-section purple">
              <ArtDisplay />
            </section>
            <section className="scroll-section green">
              <ArtDisplay />
            </section>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Home;
