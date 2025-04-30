"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const router = useRouter();
  return (
    <div className="home">
      <Navbar />

      <main className="main-content">
        <section className="hero-section">
          <h1 className="animated-heading">
            <span>W</span><span>e</span><span>l</span><span>c</span><span>o</span><span>m</span><span>e</span>
            <span className="space"> </span><span>t</span><span>o</span>
            <span className="space"> </span><span>W</span><span>a</span><span>t</span><span>c</span><span>h</span>
            <span className="space"> </span><span>W</span><span>o</span><span>r</span><span>l</span><span>d</span>
          </h1>

          <p className="quotation">
            "Time is what we want most, but what we use worst." — William Penn
          </p>
        </section>

        <section className="featured-section">
          <h2 className="featured-heading">Featured Watches</h2>
          <div className="featured-grid">
            <div className="card">
              Luxury Gold Watch
              <Image src="/gold.jpg" alt="Luxury Gold Watch" className="watch-image" width={300} height={300} />
            </div>
            <div className="card">
              Elegant SilverWatch
              <Image src="/silver.jpg" alt="Elegant SilverWatch" className="watch-image" width={300} height={300} />
            </div>
            <div className="card">
              Modern SmartWatch
              <Image src="/smart.jpg" alt="Modern Smartwatch" className="watch-image" width={300} height={300} />
            </div>
            <div className="card">
              Classic LeatherWatch
              <Image src="/leatherwatch.png" alt="Classic LeatherWatch" className="watch-image" width={300} height={300} />
            </div>
            <div className="card">
              Sports Chronograph
              <Image src="/sportswatch.png" alt="Sports Chronograph" className="watch-image" width={300} height={300} />
            </div>
            <div className="card">
              Minimalist Timepiece
              <Image src="/minimalistwatch.png" alt="Minimalist Timepiece" className="watch-image" width={300} height={300} />
            </div>
          </div>

          <div className="watch-video-container">
            <video
              src="/video4.mp4"
              className="watch-video"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </section>

        <section className="shop-now-section">
          <div className="shop-now-container">
            <h2 className="shop-now-heading">Find Your Perfect Timepiece</h2>
            <p className="shop-now-description">
              Explore our exclusive collection of luxury, smart, and classic watches designed to match every lifestyle.
              Quality, style, and innovation — all at your fingertips.
            </p>
            <button className="shop-now-button" onClick={() => router.push('/shop')}>
              Shop Now
            </button>
          </div>
        </section>

        <section className="features-section">
          <h2 className="features-heading">Discover Iconic Timepieces Across Cultures</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Rolex USA</h3>
              <p>Experience timeless craftsmanship and innovation — Rolex remains America's luxury symbol.</p>
            </div>
            <div className="feature-card">
              <h3>Omega Switzerland</h3>
              <p>Swiss precision loved across America and Asia, fusing elegance with futuristic tech.</p>
            </div>
            <div className="feature-card">
              <h3>Citizen Japan</h3>
              <p>Japanese innovation at its finest — Citizen offers Eco-Drive technology and bold designs.</p>
            </div>
            <div className="feature-card">
              <h3>Seiko Japan</h3>
              <p>Celebrated globally for its reliability, Seiko combines innovation and traditional aesthetics.</p>
            </div>
            <div className="feature-card">
              <h3>Rado Switzerland</h3>
              <p>Rado's high-tech ceramic watches offer a futuristic feel, embraced across Asia and America.</p>
            </div>
            <div className="feature-card">
              <h3>Q&Q Pakistan</h3>
              <p>Affordable luxury rooted in Japan, now widely trusted in Pakistan for durability and style.</p>
            </div>
            <div className="feature-card">
              <h3>HMT India</h3>
              <p>A legacy of precision from India — HMT timepieces continue to be cherished collectibles.</p>
            </div>
            <div className="feature-card">
              <h3>Pak Watch Co.</h3>
              <p>Crafting timepieces in Pakistan with passion, durability, and a sense of modern identity.</p>
            </div>
            <div className="feature-card">
              <h3>Fossil USA</h3>
              <p>Vintage American charm meets modern technology — Fossil defines youthful spirit and adventure.</p>
            </div>
            <div className="feature-card">
              <h3>Apple Watch USA</h3>
              <p>Revolutionizing the concept of watches — Apple's smartwatches blend style, health, and tech.</p>
            </div>
          </div>
        </section>

        <section id="about" className="qualities-benefits-section">
          <div className="qualities-container">
            <h2 className="section-heading">Discover the Benefits of Timeless Craftsmanship</h2>
            <p className="section-description">
              Our watches embody a fusion of tradition and innovation. With exceptional design and durability, 
              our timepieces are crafted to stand the test of time, bringing elegance and functionality into every moment.
            </p>
            <ul className="features-list">
              <li className="feature-item">
                <h3>Durability & Precision</h3>
                <p>Engineered with cutting-edge technology to deliver unmatched precision and resilience.</p>
              </li>
              <li className="feature-item">
                <h3>Luxury Design</h3>
                <p>Elegantly designed to make a bold fashion statement, perfect for any occasion.</p>
              </li>
              <li className="feature-item">
                <h3>Timeless Craftsmanship</h3>
                <p>Handcrafted with the finest materials, each watch is a masterpiece built to last.</p>
              </li>
              <li className="feature-item">
                <h3>Innovative Features</h3>
                <p>Our watches blend traditional craftsmanship with modern features, including smart technology.</p>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
