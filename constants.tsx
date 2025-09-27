import React from 'react';
import type { Prompt, CofounderProfile, HelperListing } from './types';

export const PROMPTS: Prompt[] = [
  {
    id: 1,
    title: { en: 'Startup Pitch', fr: 'Pitch de startup', zh: '创业演讲', ja: 'スタートアップピッチ' },
    category: { en: 'Business', fr: 'Affaires', zh: '商业', ja: 'ビジネス' },
    prompt: { en: 'Generate a 60-second elevator pitch for a new AI-powered solo founder toolkit.', fr: 'Générez un pitch d\'ascenseur de 60 secondes pour une nouvelle boîte à outils de fondateur solo alimentée par l\'IA.', zh: '为一个新的人工智能驱动的独立创始人工具包生成一个60秒的电梯演讲。', ja: '新しいAI搭載のソロファウンダーツールキットのための60秒のエレベーターピッチを生成してください。' },
  },
  {
    id: 2,
    title: { en: 'Blog Post Idea', fr: 'Idée de billet de blog', zh: '博客文章点子', ja: 'ブログ投稿のアイデア' },
    category: { en: 'Marketing', fr: 'Marketing', zh: '营销', ja: 'マーケティング' },
    prompt: { en: 'Brainstorm 5 blog post titles about the future of AI for solo entrepreneurs.', fr: 'Brainstormez 5 titres d\'articles de blog sur l\'avenir de l\'IA pour les entrepreneurs solos.', zh: '为关于AI对独立企业家的未来的博客文章构思5个标题。', ja: 'ソロ起業家のためのAIの未来に関する5つのブログ投稿タイトルをブレインストーミングしてください。' },
  },
];

export const COFOUNDER_PROFILES: CofounderProfile[] = [
  {
    id: 1,
    name: 'Alex Chen',
    avatarUrl: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Alex',
    skills: [
      { en: 'Engineering', fr: 'Ingénierie', zh: '工程', ja: 'エンジニアリング' },
      { en: 'Product', fr: 'Produit', zh: '产品', ja: 'プロダクト' },
    ],
    bio: {
      en: 'Technical founder with 10+ years of experience in SaaS. Looking for a marketing co-founder.',
      fr: 'Fondateur technique avec plus de 10 ans d\'expérience dans le SaaS. Recherche un co-fondateur marketing.',
      zh: '拥有10年以上SaaS经验的技术创始人。寻找一位营销联合创始人。',
      ja: 'SaaSで10年以上の経験を持つ技術系創業者。マーケティングの共同創業者を探しています。',
    },
  },
  {
    id: 2,
    name: 'Brenda Smith',
    avatarUrl: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Brenda',
    skills: [
      { en: 'Marketing', fr: 'Marketing', zh: '营销', ja: 'マーケティング' },
      { en: 'Sales', fr: 'Ventes', zh: '销售', ja: '販売' },
    ],
    bio: {
      en: 'Growth marketer who loves scaling startups from 0 to 1. Seeking a technical partner for a new B2B idea.',
      fr: 'Marketeur de croissance passionné par la mise à l\'échelle des startups de 0 à 1. Recherche un partenaire technique pour une nouvelle idée B2B.',
      zh: '增长营销人员，热爱将初创公司从0扩展到1。为一个新的B2B想法寻找技术合作伙伴。',
      ja: 'スタートアップを0から1にスケールさせることが大好きなグロースマーケター。新しいB2Bのアイデアのための技術パートナーを探しています。',
    },
  },
  {
    id: 3,
    name: 'Carlos Gomez',
    avatarUrl: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Carlos',
    skills: [
      { en: 'Design', fr: 'Design', zh: '设计', ja: 'デザイン' },
      { en: 'UX/UI', fr: 'UX/UI', zh: '用户体验/用户界面', ja: 'UX/UI' },
    ],
    bio: {
      en: 'Product designer focused on creating beautiful and intuitive user experiences. Open to new projects.',
      fr: 'Designer de produits axé sur la création d\'expériences utilisateur belles et intuitives. Ouvert à de nouveaux projets.',
      zh: '产品设计师，专注于创造美观直观的用户体验。对新项目持开放態度。',
      ja: '美しく直感的なユーザーエクスペリエンスの創造に焦点を当てたプロダクトデザイナー。新しいプロジェクトにオープンです。',
    },
  },
];

export const HELPER_LISTINGS: HelperListing[] = [
    {
      id: 1,
      title: { en: 'Creative Designer', fr: 'Designer Créatif', zh: '创意设计师', ja: 'クリエイティブデザイナー' },
      companyName: { en: 'Promenade', fr: 'Promenade', zh: 'Promenade', ja: 'Promenade' },
      companyLogoUrl: 'https://i.imgur.com/sPFyV0N.png',
      postedAgo: { en: '3 days ago', fr: 'il y a 3 jours', zh: '3天前', ja: '3日前' },
      tags: [
          { en: 'remote - Latin America +1 more', fr: 'télétravail - Amérique Latine +1', zh: '远程 - 拉丁美洲 +1', ja: 'リモート - ラテンアメリカ +1' },
      ],
      salary: { en: '17 - 29 USD/hour', fr: '17 - 29 USD/heure', zh: '17 - 29美元/小时', ja: '時給17～29ドル' },
      quickApply: true,
      isRemote: true,
      location: { en: 'Latin America +1 more', fr: 'Amérique Latine +1', zh: '拉丁美洲 +1', ja: 'ラテンアメリカ +1' },
      jobType: { en: 'Part-time', fr: 'Temps partiel', zh: '兼职', ja: 'パートタイム' },
    },
    {
      id: 2,
      title: { en: 'Lead Designer', fr: 'Designer Principal', zh: '首席设计师', ja: 'リードデザイナー' },
      companyName: { en: 'Rail Europe', fr: 'Rail Europe', zh: '欧洲铁路', ja: 'レールヨーロッパ' },
      companyLogoUrl: 'https://i.imgur.com/3hSEvDM.png',
      postedAgo: { en: '6 days ago', fr: 'il y a 6 jours', zh: '6天前', ja: '6日前' },
      tags: [
          { en: 'remote - Europe +1 more', fr: 'télétravail - Europe +1', zh: '远程 - 欧洲 +1', ja: 'リモート - ヨーロッパ +1' },
      ],
      salary: { en: '60k - 70k EUR/year', fr: '60k - 70k EUR/an', zh: '6万 - 7万欧元/年', ja: '年収6万～7万ユーロ' },
      quickApply: false,
      isRemote: true,
      location: { en: 'Europe +1 more', fr: 'Europe +1', zh: '欧洲 +1', ja: 'ヨーロッパ +1' },
      jobType: { en: 'Full-time', fr: 'Plein temps', zh: '全职', ja: 'フルタイム' },
    },
    {
      id: 3,
      title: { en: 'AI Tutor - Web Design', fr: 'Tuteur IA - Conception Web', zh: 'AI导师 - 网页设计', ja: 'AIチューター - ウェブデザイン' },
      companyName: { en: 'xAI', fr: 'xAI', zh: 'xAI', ja: 'xAI' },
      companyLogoUrl: 'https://i.imgur.com/sK6322h.png',
      postedAgo: { en: '3 hours ago', fr: 'il y a 3 heures', zh: '3小时前', ja: '3時間前' },
      tags: [
          { en: 'remote - Argentina +37 more', fr: 'télétravail - Argentine +37', zh: '远程 - 阿根廷 +37', ja: 'リモート - アルゼンチン +37' },
      ],
      salary: { en: '45 - 100 USD/hour', fr: '45 - 100 USD/heure', zh: '45 - 100美元/小时', ja: '時給45～100ドル' },
      quickApply: false,
      isRemote: true,
      location: { en: 'Argentina +37 more', fr: 'Argentine +37', zh: '阿根廷 +37', ja: 'アルゼンチン +37' },
      jobType: { en: 'Full-time', fr: 'Plein temps', zh: '全职', ja: 'フルタイム' },
    },
];


export const CheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

export const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
);

export const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
);

export const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
       <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.99,36.506,44,30.823,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
    </svg>
);

export const UserIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
);

export const LaptopIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-1.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
    </svg>
);

export const RocketIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
);

export const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
);

export const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

export const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

export const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

export const IdeaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v.01M8.7 14.7a4.5 4.5 0 016.6 0M12 6.75a4.5 4.5 0 00-4.5 4.5v1.875a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V11.25a4.5 4.5 0 004.5-4.5M12 6.75a4.5 4.5 0 014.5 4.5v1.875a2.25 2.25 0 002.25 2.25h.75a2.25 2.25 0 002.25-2.25V11.25a4.5 4.5 0 01-4.5-4.5M12 6.75V3" />
    </svg>
);
export const PlanIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);
export const FinanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182.553-.44 1.278-.659 2.003-.659.725 0 1.45.22 2.003.659l.879.659" />
    </svg>
);
export const DesignIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.47 2.118 2.25 2.25 0 01-2.47-2.118c0-.62.28-1.186.748-1.565l5.78-5.78a3 3 0 004.242 0l2.47-2.47a3 3 0 00-4.242-4.242l-5.78 5.78c-.385.385-.648.878-.748 1.415" />
    </svg>
);
export const DevelopIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
);
export const MarketingIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
);
export const ProductivityIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
);
export const CommunityIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.226a3 3 0 00-4.682 2.72 9.094 9.094 0 003.741.479m7.5-2.226a3 3 0 00-7.5 0m7.5 0a3 3 0 00-7.5 0M12 12.75a3 3 0 110-6 3 3 0 010 6z" />
    </svg>
);

export const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
);
export const LightningBoltIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
);
export const BuildingOfficeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6M9 11.25h6M9 15.75h6M9 20.25h6M12 3v1.5m0 15V21" />
    </svg>
);
export const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
);
export const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);