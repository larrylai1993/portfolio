
export interface Achievement {
  title: string;
  description: string;
  metric?: string;
  tags?: string[];
}

export interface Experience {
  id: string;
  date: string;
  title: string;
  company: string;
  description: string;
  achievements: Achievement[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    id: 'cyberbiz',
    date: 'Jul 2024 - Present',
    title: 'Senior Software Engineer',
    company: 'CYBERBIZ',
    description: '負責 SaaS POS 系統與 OMO 零售整合方案開發。',
    achievements: [
      {
        title: 'SaaS POS & OMO 整合',
        description: '主導雲端 POS 系統與「OMO 門市助理」後端開發，實現線上線下庫存與會員更緊密的整合。',
        tags: ['SaaS', 'POS', 'OMO']
      },
      {
        title: '客製功能分析與規劃',
        description: '負責企業客戶的深度客製需求分析，將業務邏輯轉化為系統規格並進行架構規劃。',
        tags: ['System Analysis', 'Solution Planning']
      }
    ],
    tech: ['Ruby on Rails', '.NET Core', 'PostgreSQL', 'Redis', 'Elasticsearch']
  },
  {
    id: 'nec',
    date: 'Nov 2022 - Jun 2024',
    title: 'System Analyst',
    company: 'NEC Taiwan Ltd.',
    description: '負責全端開發、微服務系統架構設計與 CI/CD 建置。',
    achievements: [
      {
        title: '新會員系統建置',
        description: '開發基於微服務架構 (Microservices) 的新會員系統，確保高可用性與分散式資料一致性。',
        tags: ['Microservices', 'Distributed System']
      },
      {
        title: 'RPA 會計流程自動化',
        description: '開發及導入 UiPath RPA，自動化處理每日店舖帳務與消費分析。',
        metric: 'Saved 3hr/day per person',
        tags: ['UiPath', 'Automation', 'VB.NET']
      },
      {
        title: '內容管理系統 (CMS)',
        description: '開發及維護企業內容管理系統，包含網路爬蟲功能。',
        tags: ['CMS', 'Web Crawler']
      },
      {
        title: 'CI/CD Pipeline 建置',
        description: '從零建構完整的持續整合與部署流程，提升開發交付效率。',
        tags: ['DevOps', 'Jenkins/GitLab']
      }
    ],
    tech: ['.NET Core', 'Angular', 'MSSQL', 'Docker', 'UiPath']
  },
  {
    id: 'jrg-pm',
    date: 'May 2022 - Nov 2022',
    title: 'Project Manager',
    company: 'Jardine Restaurant Group',
    description: '負責跨部門專案協調、產品規劃與自助結帳系統優化。',
    achievements: [
      {
        title: '自助結帳系統 (Kiosk) 優化',
        description: '重新規劃自助結帳系統架構，降低異常率並確保資料一致性。',
        metric: 'Improved Availability',
        tags: ['System Optimization', 'Kiosks']
      },
      {
        title: '環保杯功能專案',
        description: '統籌跨部門資源，如期完成環保杯租借功能上線。',
        metric: 'On-time Delivery',
        tags: ['Project Management', 'Agile']
      }
    ],
    tech: ['Jira', 'Communication', 'Product Planning', 'System Architecture']
  },
  {
    id: 'jrg-se',
    date: 'Mar 2021 - Apr 2022',
    title: 'System Engineer',
    company: 'Jardine Restaurant Group',
    description: '內部系統全端開發、維護及流程自動化。',
    achievements: [
      {
        title: 'HR 投保/退保自動化',
        description: '開發 HR 部門專用 RPA，自動處理員工保險作業。',
        metric: 'Saved 3hr/day',
        tags: ['RPA', 'Process Optimization']
      },
      {
        title: 'Legacy System Migration',
        description: '將門市商品管理系統從 WinForm 翻寫至 .NET Core Web App。',
        tags: ['.NET Core', 'Migration']
      },
      {
        title: 'HRIS 維護',
        description: '管理及維護台灣端人力資源系統，含資料庫預存程序撰寫。',
        tags: ['Database', 'HRIS']
      }
    ],
    tech: ['.NET Core', 'Vue.js', 'MSSQL', 'RPA']
  },
  {
    id: 'bluebell',
    date: 'Dec 2019 - Mar 2021',
    title: 'Application Developer',
    company: 'Bluebell Group',
    description: '專注於 Legacy 系統翻新與資料庫效能調教。',
    achievements: [
      {
        title: 'Core Migration',
        description: '.NET Framework → .NET Core 系統遷移。',
        tags: ['.NET Core', 'Refactoring']
      },
      {
        title: 'DB Performance Tuning',
        description: '資料庫效能調校與優化。',
        metric: 'Improved Performance',
        tags: ['SQL Optimization']
      },
      {
        title: '核心模組開發',
        description: '開發及維護企業核心業務模組。',
        tags: ['Backend', 'System Design']
      }
    ],
    tech: ['.NET Core', 'MSSQL', 'Entity Framework']
  },
  {
    id: 'chroma',
    date: 'Jan 2018 - Dec 2019',
    title: 'MES Engineer',
    company: 'Chroma ATE Inc.',
    description: '製造業 MES 系統導入與客製化開發。',
    achievements: [
      {
        title: '機台資料交握',
        description: '負責建立/測試與現場各品牌工具機台的資料交握。',
        tags: ['IoT', 'Data Handshake']
      },
      {
        title: '廠區實時監控',
        description: '開發廠區平面地圖實時監控各機台健康狀況與即時數據。',
        metric: 'Real-time Monitoring',
        tags: ['Dashboard', 'MES']
      },
      {
        title: '報表與維護模組',
        description: '開發各製程機台回傳資料的維護模組及報表。',
        tags: ['Reporting']
      },
      {
        title: '工單上料模組',
        description: '開發工單上料模組，並串接 ERP 資料。',
        tags: ['ERP Integration']
      }
    ],
    tech: ['.NET Framework', 'MSSQL', 'Oracle']
  },
  {
    id: 'ck',
    date: 'Aug 2016 - Jan 2018',
    title: 'System Engineer',
    company: 'Chian Kuo Enterprise',
    description: 'ERP 重要功能翻新與 HRIS 系統全權負責。',
    achievements: [
      {
        title: 'HRIS 薪酬計算優化',
        description: '將薪酬公式模組化以因應法規變更，並優化計算效能。',
        metric: 'Reduced calc time 30min',
        tags: ['Performance Tuning']
      },
      {
        title: 'ERP 功能翻新',
        description: '翻寫 BOM 表維護、採購單與庫存盤點系統。',
        tags: ['ERP', 'Refactoring']
      },
      {
        title: '指紋機系統串接',
        description: '越南各廠指紋機與 HRIS 系統串接。',
        tags: ['System Integration']
      }
    ],
    tech: ['.NET Framework', 'VB.NET', 'MSSQL']
  }
];
