"use client";
import "../info/info.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function InfoPage() {
  return (
    <div className="info-page">
      <Navbar />
      <main className="info-main">
        <h1 className="info-heading">Our History</h1>
        <p className="info-description">
          At Watch World, we are driven by a passion for precision, innovation, and timeless craftsmanship. Since our inception, we have committed ourselves to offering not just watches, but stories — each timepiece symbolizing excellence, heritage, and individuality. Over the years, our unwavering dedication to quality and customer satisfaction has allowed us to expand our footprint across major cities. Today, with multiple branches including Saddar and Tariq Road, we continue to bring luxury, style, and reliability closer to our valued customers. At Watch World, your journey with time begins here — crafted with care, delivered with pride.
        </p>

        <section className="collaborations-section">
          <h2 className="collaborations-heading">Our Global Collaborations</h2>
          <p className="collaborations-description">
            At Watch World, we believe in pushing boundaries and redefining excellence. Over the years, our commitment to superior craftsmanship and innovation has led us to collaborate with some of the most prestigious brands, artisans, and technologists around the world. Each partnership reflects our vision — blending heritage with futuristic elegance.
          </p>

          <div className="collaborations-grid">
            <div className="collaboration-card">
              <h3>Rolex Partnership</h3>
              <p>In collaboration with Rolex, we have curated exclusive collections celebrating timeless luxury, precision, and sophistication, bringing Swiss craftsmanship closer to you.</p>
            </div>
            <div className="collaboration-card">
              <h3>Omega Innovation Alliance</h3>
              <p>Partnering with Omega, we integrate cutting-edge horological technology, offering watches that embody the spirit of adventure and ultimate durability.</p>
            </div>
            <div className="collaboration-card">
              <h3>Citizen Eco-Drive Initiative</h3>
              <p>Through our eco-conscious collaboration with Citizen, we promote sustainable innovation with solar-powered timepieces designed for modern lifestyles.</p>
            </div>
            <div className="collaboration-card">
              <h3>Seiko Artistry Program</h3>
              <p>Blending traditional Japanese artistry with contemporary design, our Seiko collaboration presents masterpieces that honor culture and craftsmanship.</p>
            </div>
            <div className="collaboration-card">
              <h3>Apple Smartwatch Experience</h3>
              <p>Our collaboration with Apple redefines timekeeping, merging luxury with technology to deliver health, connectivity, and style on your wrist.</p>
            </div>
            <div className="collaboration-card">
              <h3>Local Artisan Empowerment</h3>
              <p>Empowering talented artisans across Pakistan, we proudly introduce exclusive handcrafted collections that represent local heritage fused with modern design excellence.</p>
            </div>
            <div className="collaboration-card">
              <h3>Tag Heuer Speed Alliance</h3>
              <p>Our partnership with Tag Heuer embodies precision engineering and racing heritage, offering exclusive collections for those who live life in the fast lane.</p>
            </div>
            <div className="collaboration-card">
              <h3>Rado Design Collaboration</h3>
              <p>Joining forces with Rado, we celebrate minimalistic elegance and cutting-edge materials, introducing timepieces that defy convention and elevate your style.</p>
            </div>
            <div className="collaboration-card">
              <h3>Breitling Adventure Series</h3>
              <p>In collaboration with Breitling, we bring you robust and adventurous chronometers, tailored for explorers who demand performance under extreme conditions.</p>
            </div>
            <div className="collaboration-card">
              <h3>Casio G-Shock Urban Movement</h3>
              <p>Through our urban collaboration with Casio G-Shock, we inspire resilience and bold expression with iconic shock-resistant designs for every street-smart soul.</p>
            </div>
          </div>
        </section>

        <section className="branches-section">
          <h2 className="branches-heading">Our Branches Across Asia</h2>
          <div className="branches-grid">
            <div className="branch-card saddar">
              <h3>Saddar Branch (Karachi)</h3>
              <p>Located in the heart of the city, Saddar branch offers exclusive collections and personalized services.</p>
            </div>
            <div className="branch-card tariq">
              <h3>Tariq Road Branch (Karachi)</h3>
              <p>Experience luxury and innovation at our Tariq Road branch — a hub for modern timepieces.</p>
            </div>
            <div className="branch-card clifton">
              <h3>Clifton Branch (Karachi)</h3>
              <p>Our Clifton branch blends elegance with tradition, serving an elite clientele with passion.</p>
            </div>
            <div className="branch-card dubai">
              <h3>Downtown Dubai Branch (UAE)</h3>
              <p>Situated in the luxurious heart of Dubai, this branch offers an exquisite collection for global elites.</p>
            </div>
            <div className="branch-card doha">
              <h3>West Bay Doha Branch (Qatar)</h3>
              <p>Elegant designs meet desert luxury — explore our premium collections in Doha’s bustling West Bay district.</p>
            </div>
            <div className="branch-card istanbul">
              <h3>Nişantaşı Branch (Istanbul, Turkey)</h3>
              <p>In the fashion capital of Turkey, our Nişantaşı branch blends European charm with timeless watchmaking.</p>
            </div>
            <div className="branch-card mumbai">
              <h3>Marine Drive Branch (Mumbai, India)</h3>
              <p>Located on the Queen’s Necklace, our Mumbai outlet symbolizes heritage, innovation, and luxury.</p>
            </div>
            <div className="branch-card singapore">
              <h3>Orchard Road Branch (Singapore)</h3>
              <p>In the vibrant heart of Singapore’s retail heaven, discover watches that define prestige and technology.</p>
            </div>
            <div className="branch-card bangkok">
              <h3>Siam Paragon Branch (Bangkok, Thailand)</h3>
              <p>Fusion of modern luxury and Eastern elegance — find iconic timepieces at our Siam Paragon outlet.</p>
            </div>
            <div className="branch-card kualalumpur">
              <h3>Bukit Bintang Branch (Kuala Lumpur, Malaysia)</h3>
              <p>Our KL branch is a hub of contemporary elegance and timeless craftsmanship in Southeast Asia’s fashion district.</p>
            </div>
            <div className="branch-card tokyo">
              <h3>Ginza Branch (Tokyo, Japan)</h3>
              <p>Precision meets perfection — our Tokyo Ginza branch offers exclusive Japanese and Swiss masterpieces.</p>
            </div>
            <div className="branch-card hongkong">
              <h3>Central District Branch (Hong Kong)</h3>
              <p>Serving a cosmopolitan clientele, our Hong Kong outlet combines modern style with traditional craftsmanship.</p>
            </div>
          </div>
        </section>

        <div className="back-to-home-container">
          <Link href="/">
            <button className="back-to-home-button">Back to Home</button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
