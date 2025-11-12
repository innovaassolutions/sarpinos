'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* Logo and Phone */}
          <div className="header-logo">
            <Image
              src="/assets/logos/sarpinoslogo.png"
              alt="Sarpino's Pizza Logo"
              width={150}
              height={50}
              className="logo-image"
              priority
            />
            <div className="phone-number">
              <span className="phone-icon">📞</span>
              <span>6636-3636</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <ul className="nav-list">
              <li>
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/locations" className="nav-link">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/order" className="nav-link">
                  Order Now
                </Link>
              </li>
            </ul>
          </nav>

          {/* Header CTA */}
          <div className="header-cta">
            <Link href="/order" className="btn btn-primary btn-order-now">
              Order Now
            </Link>
            <button
              className={`menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className={`nav-mobile ${mobileMenuOpen ? 'active' : ''}`}>
        <ul className="nav-list">
          <li>
            <Link
              href="/"
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/locations"
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Locations
            </Link>
          </li>
          <li>
            <Link
              href="/order"
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Order Now
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`nav-overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />
    </>
  )
}
