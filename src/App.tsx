import { useState, useEffect, useRef, useCallback } from 'react'
import ExperienceSection from './components/ExperienceSection'
import './App.css'




const skills = [
  {
    category: 'Backend',
    items: ['.NET Core', 'C#', 'Ruby on Rails', 'Node.js', 'REST API']
  },
  {
    category: 'Database',
    items: ['SQL Server', 'PostgreSQL', 'MySQL', 'Redis']
  },
  {
    category: 'Architecture',
    items: ['Microservices', 'DDD', 'Event-Driven']
  },
  {
    category: 'DevOps',
    items: ['Docker', 'CI/CD', 'Git', 'Azure DevOps', 'UiPath']
  },
  {
    category: 'Domain',
    items: ['MES', 'ERP', 'HRIS', 'Retail SaaS', 'POS']
  },
  {
    category: 'SoftSkills',
    items: ['System Analysis', 'Communication', 'PM']
  }
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [navScrolled, setNavScrolled] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Handle scroll for nav background
  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('snap-container')
      if (container) {
        // Determine background state
        setNavScrolled(container.scrollTop > 50)
      }
    }
    
    // Add listener to the container instead of window
    const container = document.getElementById('snap-container')
    container?.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => container?.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer for active section
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )

    sections.forEach((section) => {
      observerRef.current?.observe(section)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  // Scroll animation observer
  useEffect(() => {
    const scrollElements = document.querySelectorAll('.scroll-animate')
    
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    scrollElements.forEach((el) => scrollObserver.observe(el))

    return () => scrollObserver.disconnect()
  }, [])

  // Close mobile menu on navigation
  const handleNavClick = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { href: '#about', label: 'about()' },
    { href: '#skills', label: 'skills()' },
    { href: '#experience', label: 'experience()' },
    { href: '#contact', label: 'contact()' }
  ]

  return (
    <>
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Navigation */}
      <nav 
        className={`nav ${navScrolled ? 'scrolled' : ''}`} 
        role="navigation" 
        aria-label="Main navigation"
      >
        <a href="#" className="nav-logo" aria-label="Go to top">larry.lai</a>
        
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href}
                className={activeSection === link.href.slice(1) ? 'active' : ''}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`nav-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleNavClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Scroll Container */}
      <div className="snap-container" id="snap-container">
        <main id="main-content">
          {/* Hero Section */}
          <section className="hero" aria-label="Introduction">
            <h1 className="hero-name">Larry Lai</h1>
            <p className="hero-role">Senior Backend Developer</p>
            <p className="hero-stack">.NET Core • Ruby on Rails • System Analysis</p>
            <p className="hero-bio">
              8 年後端開發經驗，擅長系統分析與架構設計。<br />
              從 MES、ERP 到零售 SaaS，在技術與業務之間搭建橋樑。
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Contact Me</a>
              <a href="#experience" className="btn btn-outline">View Experience</a>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="about scroll-animate" aria-label="About me">
            <h2>about</h2>
            <div className="about-content">
              <p className="about-text">
                從傳產製造業的 MES、ERP 到零售 SaaS，完整經歷微軟技術的演進
                （從早期的 ASP/VB、WinForms 到現代化的 .NET Core），
                並能在 .NET 與 Ruby on Rails 之間靈活切換。
              </p>
              <p className="about-text">
                很多時候專案窒礙難行不是技術無法實現，而是需求不明確或業務流程不順。
                我擅長處理這些模糊地帶，把每個人的意見做整合，找出破口，
                確保交付的東西真正符合公司發展需要、也符合客戶需要。
              </p>
              <div className="about-highlights">
                <div className="highlight-card">
                  <div className="highlight-number">8+</div>
                  <div className="highlight-label">Years Experience</div>
                </div>
                <div className="highlight-card">
                  <div className="highlight-number">5+</div>
                  <div className="highlight-label">Industries Involved</div>
                </div>
                <div className="highlight-card">
                  <div className="highlight-number">7+</div>
                  <div className="highlight-label">Business Domains</div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="scroll-animate" aria-label="Technical skills">
            <h2>skills</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-category">
                  <h3>{skill.category}</h3>
                  <div className="skill-tags" role="list">
                    {skill.items.map((item, i) => (
                      <span key={i} className="skill-tag" role="listitem">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <ExperienceSection />

          {/* Contact Section */}
          <section id="contact" className="scroll-animate" aria-label="Contact information">
            <h2>contact</h2>
            <div className="contact-content">
              <p className="contact-text">
                對合作機會有興趣？歡迎透過以下方式聯繫我。
              </p>
              <div className="contact-links">
                <a 
                  href="mailto:abc081259@gmail.com" 
                  className="contact-link"
                  aria-label="Send email to abc081259@gmail.com"
                >
                  ✉️ abc081259@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/larrylai622"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                  aria-label="Visit LinkedIn profile (opens in new tab)"
                >
                  💼 linkedin.com/in/larrylai622
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="footer" role="contentinfo">
          <p>© {new Date().getFullYear()} Larry Lai | Built with React + Vite</p>
        </footer>
      </div>
    </>
  )
}

export default App
