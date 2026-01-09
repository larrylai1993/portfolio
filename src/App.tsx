import './App.css'

function App() {
  const experiences = [
    {
      date: '2024.07 - Present',
      title: 'Senior Software Engineer',
      company: 'CYBERBIZ CORPORATION',
      description: '零售電商 SaaS 平台後端開發'
    },
    {
      date: '2022.11 - 2024.06',
      title: 'System Analyst',
      company: 'NEC Taiwan',
      description: '主導核心系統架構與全端開發，負責進銷存、促銷及採購等關鍵模組；設計並導入微服務架構於會員系統。建構完整 CI/CD 流水線，主導 RPA 導入專案，利用 UiPath 優化會計作業流程，為每位員工每日節省約 3 小時工時。'
    },
    {
      date: '2021.03 - 2022.11',
      title: 'Project Manager / System Engineer',
      company: 'Jardine Restaurant Group',
      description: '負責 KFC Kiosk 系統的產品路線規劃與專案排程，主導系統穩定性優化專案，改善部署流程與品質把關。同時負責內部營運系統的全端開發與第三方串接，導入 RPA 技術優化 HR 行政流程。'
    },
    {
      date: '2019.12 - 2021.03',
      title: 'Application Developer',
      company: 'Bluebell Group',
      description: '負責數位化轉型，執行從 .NET Framework 到 .NET Core 的現代化專案。開發商品管理與結帳系統核心模組，並針對資料庫進行 SQL Stored Procedures 效能調校。'
    },
    {
      date: '2018.01 - 2019.12',
      title: 'MES Engineer',
      company: 'Chroma ATE Inc.',
      description: '參與太陽能薄膜電池與隱形眼鏡產業的 MES 導入專案，負責產線設備與資訊系統的深度整合，實作多品牌機台資料交握，開發即時廠區監控與報表模組。'
    },
    {
      date: '2016.08 - 2018.01',
      title: 'IT Engineer',
      company: '強國企業',
      description: 'ERP 系統功能翻新與 HRIS 開發維護，完成薪酬計算公式重構專案，推動越南各廠指紋機上線與系統串接，優化報表效能，產出時間縮短近半小時。'
    }
  ]

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

  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-logo">larry.lai</div>
        <ul className="nav-links">
          <li><a href="#about">about()</a></li>
          <li><a href="#skills">skills()</a></li>
          <li><a href="#experience">experience()</a></li>
          <li><a href="#contact">contact()</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <p className="hero-subtitle">Senior Backend Developer</p>
        <h1>Larry Lai</h1>
        <p className="hero-title">.NET Core & Ruby on Rails | System Analysis</p>
        <p className="hero-description">
          8 年後端開發與系統分析經驗。擅長從使用者需求與商業邏輯角度思考系統設計，
          在團隊中擔任技術與業務端的溝通橋樑，把複雜的需求理清楚，讓團隊能順暢開發。
        </p>
        <p className="hero-close">{"}"}</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">contact()</a>
          <a href="#experience" className="btn btn-outline">viewExperience()</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>about</h2>
        <div className="about-content">
          <p className="about-text">
            從傳產製造業的 MES、ERP 到零售 SaaS，完整經歷微軟技術棧的演進
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
              <div className="highlight-label">years_experience</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">6</div>
              <div className="highlight-label">companies</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">2</div>
              <div className="highlight-label">tech_stacks</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2>skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-category">
              <h3>{skill.category}</h3>
              <div className="skill-tags">
                {skill.items.map((item, i) => (
                  <span key={i} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <h2>experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-date">{exp.date}</div>
              <div className="timeline-title">{exp.title}</div>
              <div className="timeline-company">{exp.company}</div>
              <div className="timeline-description">{exp.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>contact</h2>
        <div className="contact-content">
          <p className="contact-text">
            對合作機會有興趣？歡迎透過以下方式聯繫我。
          </p>
          <div className="contact-links">
            <a href="mailto:abc081259@gmail.com" className="contact-link">
              email: abc081259@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/larrylai622"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              linkedin: /in/larrylai622
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Larry Lai | Built with React + Vite</p>
      </footer>
    </>
  )
}

export default App
