import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Footer Main */}
        <div className="footer-main">
          {/* Column 1: Order Now */}
          <div className="footer-column">
            <h3 className="footer-heading">Order Now At</h3>
            <div className="footer-phone">
              <svg className="footer-phone-icon" viewBox="0 0 24 24" fill="white">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
              <span>6636 3636</span>
            </div>
            <div className="payment-methods">
              <p>We accept:</p>
              <Image src="/assets/icons/visa.png" alt="Visa" width={40} height={25} className="payment-icon" />
              <Image src="/assets/icons/master.png" alt="MasterCard" width={40} height={25} className="payment-icon" />
              <Image src="/assets/icons/cashondelivery.svg" alt="Cash on Delivery" width={40} height={25} className="payment-icon" />
            </div>
          </div>

          {/* Column 2: Follow Us */}
          <div className="footer-column">
            <h3 className="footer-heading">Follow Us</h3>
            <div className="social-links">
              <a
                href="https://www.instagram.com/SarpinosPizzaSg/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <svg className="social-icon" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/SarpinosPizzaSg/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <svg className="social-icon" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCQs5wEWNi1xYB6fKaAUAxyA/featured"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="YouTube"
              >
                <svg className="social-icon" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 3: Site Map */}
          <div className="footer-column">
            <h3 className="footer-heading">Site Map</h3>
            <div className="footer-links">
              <Link href="/" className="footer-link">Home</Link>
              <Link href="/about" className="footer-link">About Us</Link>
              <Link href="/locations" className="footer-link">Locations</Link>
              <Link href="/order" className="footer-link highlight">Order Now</Link>
            </div>
          </div>

          {/* Column 4: International Sites */}
          <div className="footer-column">
            <h3 className="footer-heading">Sarpino's Worldwide</h3>
            <div className="footer-links">
              <a href="https://www.gosarpinos.com/" target="_blank" rel="noopener noreferrer" className="footer-link">
                Sarpino's USA
              </a>
              <a href="https://sarpinos.ca/" target="_blank" rel="noopener noreferrer" className="footer-link">
                Sarpino's Canada
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-logo-section">
            <Image src="/assets/logos/sarpinos-footer-logo.png" alt="Sarpino's Pizza" width={150} height={50} className="footer-logo" />
            <Image src="/assets/icons/logo_halal.png" alt="Halal Certified" width={50} height={50} className="halal-badge" />
          </div>
          <div className="footer-legal">
            <div className="footer-legal-links">
              <Link href="/terms-of-use" className="footer-legal-link">Terms of Use</Link>
              <span className="footer-legal-link">|</span>
              <Link href="/privacy-policy" className="footer-legal-link">Privacy Policy</Link>
            </div>
            <p className="footer-copyright">Copyright © 2001-2025 Sarpinos Pte Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
