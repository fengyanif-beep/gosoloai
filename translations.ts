// FIX: Updated the Translation interface to allow for arrays of strings and booleans.
// This is necessary for structured content like the pricing plans' `features` list (`string[]`) and `isFeatured` flag (`boolean`), resolving all type errors.
export interface Translation {
  [key: string]: string | string[] | boolean | Translation | Translation[];
}

export const translations: { [key: string]: Translation } = {
  en: {
    auth: {
      login: "Log In",
      signup: "Sign Up",
      loginTitle: "Log in to your account",
      signupTitle: "Create a new account",
      emailAddress: "Email Address",
      password: "Password",
      name: "Full Name",
      loginCTA: "Log In",
      signupCTA: "Create Account",
      noAccount: "Don't have an account?",
      hasAccount: "Already have an account?",
      signupWithGoogle: "Sign up with Google",
      loginWithGoogle: "Log in with Google",
      or: "OR",
      myAccount: "My Account",
      logout: "Log Out",
      invalidEmail: "Please enter a valid email address.",
      accountModal: {
        title: "My Account",
        nameLabel: "Full Name",
        emailLabel: "Email Address",
        mockName: "Alex Chen",
        mockEmail: "alex.chen@example.com",
        logoutButton: "Log Out",
      },
      errors: {
        'auth/invalid-email': "Invalid email address provided.",
        'auth/user-not-found': "No account found with this email.",
        'auth/wrong-password': "Incorrect password. Please try again.",
        'auth/email-already-in-use': "An account with this email already exists.",
        'auth/weak-password': "Password should be at least 6 characters.",
        'generic': "An unexpected error occurred. Please try again."
      }
    },
    hero: {
      title: "Arm lonely fighters to become legendary unicorns",
      subtitle: "What if your startup’s first year cost nothing?\nUnlock €30,000+ in founder perks & the best AI tools.\nStop paying. Start building.",
      promotion: {
        line1: "Founders Beta: Join now for only €24.99/year",
        line2: "(first 100 members only).",
        regularPrice: "Regular price: €99/year."
      },
      ctaPrimary: "⚡️ Join now for only €24.99/year",
      ctaSecondary: "Join free (limited access)",
    },
    aiTools: {
      title: "AI Co-founder",
      subtitle: "Your AI partner for every step of the entrepreneurial journey.",
      sections: [
        {
          title: "Ideas & Market Research",
          description: "Validate your vision and understand your audience with AI-driven insights."
        },
        {
          title: "Plan & Documents",
          description: "Generate business plans, pitch decks, and legal documents in minutes."
        },
        {
          title: "Business & Finance",
          description: "Manage budgets, create financial projections, and streamline operations."
        },
        {
          title: "Design & Prototyping",
          description: "Create logos, branding assets, and UI/UX wireframes with AI assistance."
        },
        {
          title: "Develop & Launch",
          description: "Generate code, debug issues, and accelerate your product development."
        },
        {
          title: "Marketing & Monetization",
          description: "Craft marketing copy, generate social media content, and devise pricing strategies."
        },
        {
          title: "Efficiency & Productivity",
          description: "Automate repetitive tasks, summarize documents, and manage your time."
        },
        {
          title: "Community & Networking",
          description: "Connect with mentors, find co-founders, and join a supportive community."
        }
      ]
    },
    valueProposition: {
        title: "GoSoloAI is A Great AI Fit for",
        roles: [
            {
                name: "Solopreneur",
                description: "Launch and scale your one-person business with powerful AI assistance."
            },
            {
                name: "Freelancer",
                description: "Enhance your services, streamline client work, and boost your creative output."
            },
            {
                name: "Founder",
                description: "Build your startup from the ground up with an AI co-pilot for every challenge."
            }
        ]
    },
    toolCard: {
      learnMore: "Learn More",
    },
    promptGallery: {
      title: "Prompt Gallery",
      subtitle: "Copy-paste prompts to get started with common business tasks.",
    },
    promptCard: {
      copied: "Copied!",
      copy: "Copy Prompt",
    },
    community: {
      title: "Join the Community",
      description: "Connect with other solo founders, share your progress, and get feedback on your ideas.",
      cta: "Join Discord",
    },
    cofounderMatching: {
      title: "Find My Co-founder",
      subtitle: "Connect with talented individuals to bring your vision to life.",
    },
    cofounderCard: {
        connect: "Connect"
    },
    firstHelper: {
        title: "Find My First Helper",
        subtitle: "A space for solo founders to post listings for internships, freelance projects, or their first employee. Get the help you need to grow.",
        card: {
            quickApply: "Quick apply",
            remote: "Remote",
            partTime: "Part-time",
            fullTime: "Full-time"
        }
    },
    pricing: {
      title: "Pricing Plans",
      subtitle: "Choose the plan that's right for you. All plans come with a 7-day free trial.",
      promotion: {
        line1: "Founders Beta: Join now for only €24.99/year",
        line2: "(first 100 members only).",
        regularPrice: "Regular price: €99/year.",
        cta: "Pay Now"
      },
      plans: [
        {
          id: "",
          name: "Free",
          price: "€0",
          frequency: "/ month",
          features: [
            "Access to basic AI tools",
            "Limited prompt gallery",
            "Community membership"
          ],
          cta: "Get Started for Free",
          isFeatured: false,
          badge: ""
        },
        {
          id: "price_pro_placeholder",
          name: "Pro",
          price: "€19",
          frequency: "/ month",
          features: [
            "Everything in Free, plus:",
            "All premium AI tools",
            "Full prompt gallery access",
            "Co-founder matching"
          ],
          cta: "Choose Pro",
          isFeatured: false,
          badge: "Best Value"
        },
        {
          id: "price_yearly_placeholder",
          name: "Yearly",
          price: "€99",
          frequency: "/ year",
          features: [
            "Everything in Free, plus:",
            "All premium AI tools",
            "Full prompt gallery access",
            "Co-founder matching"
          ],
          cta: "Choose Yearly",
          isFeatured: true,
          badge: "Most Popular"
        }
      ]
    },
    faq: {
        title: "Frequently Asked Question (FAQ)",
        items: [
            {
                question: "What is Go Solo AI?",
                answer: "Go Solo AI is an all-in-one platform designed to help solopreneurs, freelancers, and founders succeed. It provides a curated toolkit of AI-powered applications, a gallery of useful business prompts, a community for networking, and a co-founder matching service."
            },
            {
                question: "How does Go Solo AI's technology work?",
                answer: "Our platform integrates with leading AI models to power our toolkit. For example, our text and code generators use advanced large language models, while our image tools leverage diffusion models. We provide a simple, unified interface so you can access all this power without needing technical expertise."
            },
            {
                question: "Who can benefit from Go Solo AI's technology?",
                answer: "Our platform is built for anyone building a business on their own or in a small team. This includes solopreneurs, freelancers looking to scale, and early-stage startup founders who need to be efficient with their resources."
            },
            {
                question: "What are the benefits of using Go Solo AI's technology?",
                answer: "The main benefits include massive productivity gains, cost savings on specialized software, access to a supportive community, and the ability to punch above your weight class by leveraging cutting-edge AI for marketing, development, and creative tasks."
            },
            {
                question: "Is Go Solo AI easy to use?",
                answer: "Absolutely. Our primary design goal is simplicity and ease of use. You don't need to be an AI expert. If you can write an email, you can use our tools to generate professional copy, code, and images."
            },
            {
                question: "How much does Go Solo AI's technology cost?",
                answer: "We offer a free tier to get you started with access to basic tools and the community. Our premium plans provide more advanced features, higher usage limits, and priority access to new tools. Please check our (future) pricing page for more details."
            },
            {
                question: "How can I get started with Go Solo AI's technology?",
                answer: "Getting started is easy! Simply sign up for a free account to get immediate access to our platform. You can start exploring the AI tools, browse the prompt gallery, and join our community right away."
            }
        ]
    },
    footer: {
      tagline: "Arm lonely fighters to become legendary unicorns.",
      features: {
        title: "Features",
        aiTools: "AI Tools",
        promptGallery: "Prompt Gallery",
        community: "Community",
        findCofounder: "Find My Co-founder",
      },
      company: {
        title: "Company",
        about: "About",
        blog: "Blog",
        contact: "Contact",
      },
      legal: {
        title: "Legal",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
      },
      copyright: "All rights reserved.",
    },
    header: {
        nav: {
            tools: 'AI Tools',
            prompts: 'Prompts',
            community: 'Community',
            cofounders: 'Cofounders',
            pricing: 'Pricing',
        },
        language: 'Language'
    }
  },
  fr: {
    auth: {
      login: "Connexion",
      signup: "S'inscrire",
      loginTitle: "Connectez-vous à votre compte",
      signupTitle: "Créer un nouveau compte",
      emailAddress: "Adresse e-mail",
      password: "Mot de passe",
      name: "Nom complet",
      loginCTA: "Se connecter",
      signupCTA: "Créer le compte",
      noAccount: "Vous n'avez pas de compte ?",
      hasAccount: "Vous avez déjà un compte ?",
      signupWithGoogle: "S'inscrire avec Google",
      loginWithGoogle: "Se connecter avec Google",
      or: "OU",
      myAccount: "Mon Compte",
      logout: "Déconnexion",
      invalidEmail: "Veuillez entrer une adresse e-mail valide.",
      accountModal: {
        title: "Mon Compte",
        nameLabel: "Nom complet",
        emailLabel: "Adresse e-mail",
        mockName: "Alex Chen",
        mockEmail: "alex.chen@example.com",
        logoutButton: "Déconnexion",
      },
      errors: {
        'auth/invalid-email': "Adresse e-mail invalide fournie.",
        'auth/user-not-found': "Aucun compte trouvé avec cet e-mail.",
        'auth/wrong-password': "Mot de passe incorrect. Veuillez réessayer.",
        'auth/email-already-in-use': "Un compte avec cet e-mail existe déjà.",
        'auth/weak-password': "Le mot de passe doit comporter au moins 6 caractères.",
        'generic': "Une erreur inattendue s'est produite. Veuillez réessayer."
      }
    },
    hero: {
      title: "Armer les combattants solitaires pour devenir des licornes légendaires",
      subtitle: "Et si la première année de votre startup ne coûtait rien ?\nDébloquez plus de 30 000 € d'avantages pour les fondateurs et les meilleurs outils d'IA.\nArrêtez de payer. Commencez à construire.",
      promotion: {
        line1: "Bêta Fondateurs : Rejoignez maintenant pour seulement 24,99 €/an",
        line2: "(100 premiers membres uniquement).",
        regularPrice: "Prix normal : 99 €/an."
      },
      ctaPrimary: "⚡️ Rejoignez maintenant pour seulement 24,99 €/an",
      ctaSecondary: "Rejoindre gratuitement (accès limité)",
    },
    aiTools: {
      title: "Co-fondateur IA",
      subtitle: "Votre partenaire IA pour chaque étape du parcours entrepreneurial.",
      sections: [
        {
          title: "Idées & Étude de marché",
          description: "Validez votre vision et comprenez votre public avec des informations basées sur l'IA."
        },
        {
          title: "Plan & Documents",
          description: "Générez des plans d'affaires, des pitch decks et des documents juridiques en quelques minutes."
        },
        {
          title: "Affaires & Finance",
          description: "Gérez les budgets, créez des projections financières et rationalisez les opérations."
        },
        {
          title: "Conception & Prototypage",
          description: "Créez des logos, des actifs de marque et des wireframes UI/UX avec l'assistance de l'IA."
        },
        {
          title: "Développer & Lancer",
          description: "Générez du code, déboguez les problèmes et accélérez le développement de votre produit."
        },
        {
          title: "Marketing & Monétisation",
          description: "Rédigez des textes marketing, générez du contenu pour les réseaux sociaux et élaborez des stratégies de tarification."
        },
        {
          title: "Efficacité & Productivité",
          description: "Automatisez les tâches répétitives, résumez des documents et gérez votre temps."
        },
        {
          title: "Communauté & Réseautage",
          description: "Connectez-vous avec des mentors, trouvez des co-fondateurs et rejoignez une communauté de soutien."
        }
      ]
    },
    valueProposition: {
        title: "GoSoloAI est une solution d'IA idéale pour",
        roles: [
            {
                name: "Solopreneur",
                description: "Lancez et développez votre entreprise unipersonnelle avec une puissante assistance par IA."
            },
            {
                name: "Freelance",
                description: "Améliorez vos services, rationalisez le travail client et augmentez votre production créative."
            },
            {
                name: "Fondateur",
                description: "Construisez votre startup à partir de zéro avec un copilote IA pour chaque défi."
            }
        ]
    },
    toolCard: {
      learnMore: "En savoir plus",
    },
    promptGallery: {
      title: "Galerie de prompts",
      subtitle: "Copiez-collez des prompts pour démarrer avec des tâches commerciales courantes.",
    },
    promptCard: {
      copied: "Copié !",
      copy: "Copier le prompt",
    },
    community: {
      title: "Rejoignez la communauté",
      description: "Connectez-vous avec d'autres fondateurs solos, partagez vos progrès et obtenez des commentaires sur vos idées.",
      cta: "Rejoindre Discord",
    },
    cofounderMatching: {
      title: "Trouvez Mon Co-fondateur",
      subtitle: "Connectez-vous avec des personnes talentueuses pour donner vie à votre vision.",
    },
    cofounderCard: {
        connect: "Connecter"
    },
    firstHelper: {
        title: "Trouver Mon Premier Assistant",
        subtitle: "Un espace pour les fondateurs solos pour publier des annonces de stages, de projets freelance ou de leur premier employé. Obtenez l'aide dont vous avez besoin pour grandir.",
        card: {
            quickApply: "Postuler rapidement",
            remote: "Télétravail",
            partTime: "Temps partiel",
            fullTime: "Plein temps"
        }
    },
    pricing: {
      title: "Plans Tarifaires",
      subtitle: "Choisissez le plan qui vous convient. Tous les plans incluent un essai gratuit de 7 jours.",
      promotion: {
        line1: "Bêta pour les fondateurs : Rejoignez maintenant pour seulement 24,99 €/an",
        line2: "(100 premiers membres uniquement).",
        regularPrice: "Prix normal : 99 €/an.",
        cta: "Payer maintenant"
      },
      plans: [
        {
          id: "",
          name: "Gratuit",
          price: "€0",
          frequency: "/ mois",
          features: [
            "Outils IA de base",
            "Prompts limités",
            "Accès communauté"
          ],
          cta: "Commencer Gratuitement",
          isFeatured: false,
          badge: ""
        },
        {
          id: "price_pro_placeholder",
          name: "Pro",
          price: "€19",
          frequency: "/ mois",
          features: [
            "Tout du plan Gratuit, plus :",
            "Tous les outils IA premium",
            "Accès complet aux prompts",
            "Matching de co-fondateurs"
          ],
          cta: "Choisir Pro",
          isFeatured: false,
          badge: "Meilleur rapport qualité-prix"
        },
        {
          id: "price_yearly_placeholder",
          name: "Annuel",
          price: "€99",
          frequency: "/ an",
          features: [
            "Tout du plan Gratuit, plus :",
            "Tous les outils IA premium",
            "Accès complet aux prompts",
            "Matching de co-fondateurs"
          ],
          cta: "Choisir Annuel",
          isFeatured: true,
          badge: "Le plus populaire"
        }
      ]
    },
    faq: {
        title: "Foire Aux Questions (FAQ)",
        items: [
            {
                question: "Qu'est-ce que Go Solo AI ?",
                answer: "Go Solo AI est une plateforme tout-en-un conçue pour aider les solopreneurs, les freelances et les fondateurs à réussir. Elle fournit une boîte à outils d'applications alimentées par l'IA, une galerie de prompts commerciaux utiles, une communauté pour le réseautage et un service de mise en relation de co-fondateurs."
            },
            {
                question: "Comment fonctionne la technologie de Go Solo AI ?",
                answer: "Notre plateforme s'intègre avec les principaux modèles d'IA pour alimenter notre boîte à outils. Par exemple, nos générateurs de texte et de code utilisent des modèles de langage étendus avancés, tandis que nos outils d'image exploitent des modèles de diffusion. Nous fournissons une interface simple et unifiée pour que vous puissiez accéder à toute cette puissance sans avoir besoin d'expertise technique."
            },
            {
                question: "Qui peut bénéficier de la technologie de Go Solo AI ?",
                answer: "Notre plateforme est conçue pour toute personne qui crée une entreprise seule ou en petite équipe. Cela inclut les solopreneurs, les freelances cherchant à se développer et les fondateurs de startups en phase de démarrage qui doivent être efficaces avec leurs ressources."
            },
            {
                question: "Quels sont les avantages d'utiliser la technologie de Go Solo AI ?",
                answer: "Les principaux avantages incluent des gains de productivité massifs, des économies de coûts sur les logiciels spécialisés, l'accès à une communauté de soutien et la capacité de rivaliser avec plus forts que soi en exploitant une IA de pointe pour le marketing, le développement et les tâches créatives."
            },
            {
                question: "Go Solo AI est-il facile à utiliser ?",
                answer: "Absolument. Notre principal objectif de conception est la simplicité et la facilité d'utilisation. Vous n'avez pas besoin d'être un expert en IA. Si vous savez écrire un e-mail, vous pouvez utiliser nos outils pour générer des textes, du code et des images professionnels."
            },
            {
                question: "Combien coûte la technologie de Go Solo AI ?",
                answer: "Nous proposons un niveau gratuit pour vous permettre de démarrer avec un accès aux outils de base et à la communauté. Nos plans premium offrent des fonctionnalités plus avancées, des limites d'utilisation plus élevées et un accès prioritaire aux nouveaux outils. Veuillez consulter notre (future) page de tarification pour plus de détails."
            },
            {
                question: "Comment puis-je commencer avec la technologie de Go Solo AI ?",
                answer: "Commencer est facile ! Il suffit de s'inscrire pour un compte gratuit pour obtenir un accès immédiat à notre plateforme. Vous pouvez commencer à explorer les outils d'IA, parcourir la galerie de prompts et rejoindre notre communauté immédiatement."
            }
        ]
    },
    footer: {
      tagline: "Armer les combattants solitaires pour devenir des licornes légendaires.",
      features: {
        title: "Fonctionnalités",
        aiTools: "Outils d'IA",
        promptGallery: "Galerie de prompts",
        community: "Communauté",
        findCofounder: "Trouver Mon Co-fondateur",
      },
      company: {
        title: "Entreprise",
        about: "À propos",
        blog: "Blog",
        contact: "Contact",
      },
      legal: {
        title: "Légal",
        privacy: "Politique de confidentialité",
        terms: "Conditions d'utilisation",
      },
      copyright: "Tous droits réservés.",
    },
     header: {
        nav: {
            tools: 'Outils IA',
            prompts: 'Prompts',
            community: 'Communauté',
            cofounders: 'Co-fondateurs',
            pricing: 'Tarifs',
        },
        language: 'Langue'
    }
  },
  zh: {
    auth: {
      login: "登录",
      signup: "注册",
      loginTitle: "登录您的帐户",
      signupTitle: "创建一个新帐户",
      emailAddress: "电子邮件地址",
      password: "密码",
      name: "全名",
      loginCTA: "登录",
      signupCTA: "创建帐户",
      noAccount: "没有帐户？",
      hasAccount: "已经有帐户？",
      signupWithGoogle: "使用谷歌注册",
      loginWithGoogle: "使用谷歌登录",
      or: "或",
      myAccount: "我的账户",
      logout: "登出",
      invalidEmail: "请输入有效的电子邮件地址。",
      accountModal: {
        title: "我的账户",
        nameLabel: "全名",
        emailLabel: "电子邮件地址",
        mockName: "陈亚历",
        mockEmail: "alex.chen@example.com",
        logoutButton: "登出",
      },
      errors: {
        'auth/invalid-email': "提供的电子邮件地址无效。",
        'auth/user-not-found': "找不到使用此电子邮件的帐户。",
        'auth/wrong-password': "密码不正确。请重试。",
        'auth/email-already-in-use': "使用此电子邮件的帐户已存在。",
        'auth/weak-password': "密码应至少为6个字符。",
        'generic': "发生意外错误。请重试。"
      }
    },
    hero: {
      title: "武装孤独的斗士，成为传奇的独角兽",
      subtitle: "如果您的初创公司第一年无需任何成本会怎样？\n解锁超过30,000欧元的创始人福利和最优秀的人工智能工具。\n停止付费。开始构建。",
      promotion: {
        line1: "创始人 Beta 版：立即加入，仅需 24.99 欧元/年",
        line2: "（仅限前 100 名会员）。",
        regularPrice: "原价：99 欧元/年。"
      },
      ctaPrimary: "⚡️ 立即加入，仅需 24.99 欧元/年",
      ctaSecondary: "免费加入（有限访问权限）",
    },
    aiTools: {
      title: "AI 联合创始人",
      subtitle: "您在创业旅程每一步的 AI 伙伴。",
      sections: [
        {
          title: "创意与市场研究",
          description: "借助 AI 驱动的洞察力，验证您的愿景并了解您的受众。"
        },
        {
          title: "计划与文件",
          description: "在几分钟内生成商业计划、路演文稿和法律文件。"
        },
        {
          title: "商业与金融",
          description: "管理预算、创建财务预测并简化运营。"
        },
        {
          title: "设计与原型制作",
          description: "借助 AI 辅助创建徽标、品牌资产和 UI/UX 线框图。"
        },
        {
          title: "开发与启动",
          description: "生成代码、调试问题并加速您的产品开发。"
        },
        {
          title: "营销与变现",
          description: "撰写营销文案、生成社交媒体内容并设计定价策略。"
        },
        {
          title: "效率与生产力",
          description: "自动化重复性任务、总结文件并管理您的时间。"
        },
        {
          title: "社区与网络",
          description: "与导师联系、寻找联合创始人并加入一个支持性社区。"
        }
      ]
    },
    valueProposition: {
        title: "GoSoloAI 是一个非常适合",
        roles: [
            {
                name: "个体创业者",
                description: "借助强大的人工智能辅助，启动和扩展您的个人企业。"
            },
            {
                name: "自由职业者",
                description: "提升您的服务，简化客户工作，并提高您的创意产出。"
            },
            {
                name: "创始人",
                description: "借助AI副驾驶应对每一个挑战，从零开始建立您的初创公司。"
            }
        ]
    },
    toolCard: {
      learnMore: "了解更多",
    },
    promptGallery: {
      title: "提示画廊",
      subtitle: "复制粘贴提示以开始常见的业务任务。",
    },
    promptCard: {
      copied: "已复制！",
      copy: "复制提示",
    },
    community: {
      title: "加入社区",
      description: "与其他独立创始人联系，分享您的进展，并就您的想法获得反馈。",
      cta: "加入Discord",
    },
    cofounderMatching: {
      title: "寻找我的联合创始人",
      subtitle: "与才华横溢的人才联系，将您的愿景变为现实。",
    },
    cofounderCard: {
        connect: "联系"
    },
    firstHelper: {
        title: "寻找我的第一位帮手",
        subtitle: "一个供独立创始人发布实习、自由职业项目或第一位员工招聘信息的空间。获得您成长所需的帮助。",
        card: {
            quickApply: "快速申请",
            remote: "远程",
            partTime: "兼职",
            fullTime: "全职"
        }
    },
    pricing: {
      title: "价格计划",
      subtitle: "选择适合您的计划。所有计划均提供7天免费试用。",
      promotion: {
        line1: "创始人测试版：立即加入，仅需 24.99 欧元/年",
        line2: "（仅限前 100 名会员）。",
        regularPrice: "原价：99 欧元/年。",
        cta: "立即支付"
      },
      plans: [
        {
          id: "",
          name: "免费",
          price: "€0",
          frequency: "/月",
          features: [
            "访问基本AI工具",
            "有限的提示库",
            "社区访问权限"
          ],
          cta: "免费开始",
          isFeatured: false,
          badge: ""
        },
        {
          id: "price_pro_placeholder",
          name: "专业版",
          price: "€19",
          frequency: "/月",
          features: [
            "包含免费版所有功能，以及：",
            "所有高级AI工具",
            "完整提示库访问",
            "联合创始人匹配"
          ],
          cta: "选择专业版",
          isFeatured: false,
          badge: "最超值"
        },
        {
          id: "price_yearly_placeholder",
          name: "年度版",
          price: "€99",
          frequency: "/年",
          features: [
            "包含免费版所有功能，以及：",
            "所有高级AI工具",
            "完整提示库访问",
            "联合创始人匹配"
          ],
          cta: "选择年度版",
          isFeatured: true,
          badge: "最受欢迎"
        }
      ]
    },
    faq: {
        title: "常见问题解答 (FAQ)",
        items: [
            {
                question: "什么是 Go Solo AI？",
                answer: "Go Solo AI 是一个一站式平台，旨在帮助个体创业者、自由职业者和创始人取得成功。它提供了一个由AI驱动的精选工具包、一个有用的商业提示库、一个用于社交的社区以及一个联合创始人匹配服务。"
            },
            {
                question: "Go Solo AI 的技术是如何工作的？",
                answer: "我们的平台集成了领先的AI模型来驱动我们的工具包。例如，我们的文本和代码生成器使用先进的大型语言模型，而我们的图像工具则利用扩散模型。我们提供一个简单、统一的界面，这样您就可以在不需要技术专长的情况下使用所有这些强大的功能。"
            },
            {
                question: "谁可以从 Go Solo AI 的技术中受益？",
                answer: "我们的平台是为任何独自或在小团队中创业的人构建的。这包括个体创业者、希望扩展业务的自由职业者以及需要高效利用资源的早期创业公司创始人。"
            },
            {
                question: "使用 Go Solo AI 的技术有什么好处？",
                answer: "主要好处包括大幅提高生产力、节省专业软件的成本、进入一个支持性社区，以及通过利用尖端AI进行营销、开发和创意任务，从而实现超越自身能力范围的竞争。"
            },
            {
                question: "Go Solo AI 容易使用吗？",
                answer: "当然。我们的主要设计目标是简单易用。您不需要成为AI专家。如果您会写电子邮件，您就可以使用我们的工具来生成专业的文案、代码和图像。"
            },
            {
                question: "Go Solo AI 的技术费用是多少？",
                answer: "我们提供免费套餐，让您可以开始使用基本工具和社区。我们的高级计划提供更高级的功能、更高的使用限制以及优先使用新工具的权限。请查看我们（未来）的定价页面了解更多详情。"
            },
            {
                question: "我该如何开始使用 Go Solo AI 的技术？",
                answer: "开始很简单！只需注册一个免费帐户即可立即访问我们的平台。您可以立即开始探索AI工具、浏览提示库并加入我们的社区。"
            }
        ]
    },
    footer: {
      tagline: "武装孤独的斗士，成为传奇的独角兽。",
      features: {
        title: "功能",
        aiTools: "AI工具",
        promptGallery: "提示画廊",
        community: "社区",
        findCofounder: "寻找我的联合创始人",
      },
      company: {
        title: "公司",
        about: "关于",
        blog: "博客",
        contact: "联系",
      },
      legal: {
        title: "法律",
        privacy: "隐私政策",
        terms: "服务条款",
      },
      copyright: "版权所有。",
    },
     header: {
        nav: {
            tools: 'AI 工具',
            prompts: '提示',
            community: '社区',
            cofounders: '联合创始人',
            pricing: '价格',
        },
        language: '语言'
    }
  },
  ja: {
    auth: {
      login: "ログイン",
      signup: "新規登録",
      loginTitle: "アカウントにログイン",
      signupTitle: "新しいアカウントを作成",
      emailAddress: "メールアドレス",
      password: "パスワード",
      name: "氏名",
      loginCTA: "ログイン",
      signupCTA: "アカウント作成",
      noAccount: "アカウントをお持ちでないですか？",
      hasAccount: "すでにアカウントをお持ちですか？",
      signupWithGoogle: "Googleで新規登録",
      loginWithGoogle: "Googleでログイン",
      or: "または",
      myAccount: "マイアカウント",
      logout: "ログアウト",
      invalidEmail: "有効なメールアドレスを入力してください。",
      accountModal: {
        title: "マイアカウント",
        nameLabel: "氏名",
        emailLabel: "メールアドレス",
        mockName: "アレックス・チェン",
        mockEmail: "alex.chen@example.com",
        logoutButton: "ログアウト",
      },
      errors: {
        'auth/invalid-email': "提供されたメールアドレスが無効です。",
        'auth/user-not-found': "このメールアドレスのアカウントが見つかりません。",
        'auth/wrong-password': "パスワードが正しくありません。もう一度お試しください。",
        'auth/email-already-in-use': "このメールアドレスのアカウントは既に存在します。",
        'auth/weak-password': "パスワードは6文字以上である必要があります。",
        'generic': "予期しないエラーが発生しました。もう一度お試しください。"
      }
    },
    hero: {
      title: "孤独な戦士を武装させ、伝説のユニコーンにする",
      subtitle: "もしあなたのスタートアップの初年度の費用がゼロだったら？\n30,000ユーロ以上の創業者特典と最高のAIツールをアンロックしましょう。\n支払うのをやめて、構築を始めましょう。",
      promotion: {
        line1: "創設者ベータ版：年間わずか24.99ユーロで今すぐ参加",
        line2: "（先着100名様限定）。",
        regularPrice: "通常価格：年間99ユーロ。"
      },
      ctaPrimary: "⚡️ 年間わずか24.99ユーロで今すぐ参加",
      ctaSecondary: "無料で参加（限定アクセス）",
    },
    aiTools: {
      title: "AI共同創業者",
      subtitle: "起業家としてのあらゆる段階でのAIパートナー。",
      sections: [
        {
          title: "アイデアと市場調査",
          description: "AI駆動の洞察でビジョンを検証し、オーディエンスを理解します。"
        },
        {
          title: "計画と文書",
          description: "ビジネスプラン、ピッチデック、法的文書を数分で生成します。"
        },
        {
          title: "ビジネスと財務",
          description: "予算の管理、財務予測の作成、業務の合理化を行います。"
        },
        {
          title: "デザインとプロトタイピング",
          description: "AIの支援を受けて、ロゴ、ブランド資産、UI/UXワイヤーフレームを作成します。"
        },
        {
          title: "開発とローンチ",
          description: "コードの生成、問題のデバッグ、製品開発の加速を行います。"
        },
        {
          title: "マーケティングと収益化",
          description: "マーケティングコピーの作成、ソーシャルメディアコンテンツの生成、価格戦略の考案を行います。"
        },
        {
          title: "効率と生産性",
          description: "反復的なタスクの自動化、文書の要約、時間の管理を行います。"
        },
        {
          title: "コミュニティとネットワーキング",
          description: "メンターとのつながり、共同創業者の発見、支援的なコミュニティへの参加ができます。"
        }
      ]
    },
    valueProposition: {
        title: "GoSoloAI は、以下のユーザーに最適なAIです",
        roles: [
            {
                name: "ソプラナー",
                description: "強力なAIアシスタンスで、一人でのビジネスを立ち上げ、拡大しましょう。"
            },
            {
                name: "フリーランサー",
                description: "サービスを強化し、クライアントの仕事を合理化し、創造的なアウトプットを高めます。"
            },
            {
                name: "創業者",
                description: "あらゆる課題に対応するAIコパイロットと共に、ゼロからスタートアップを構築します。"
            }
        ]
    },
    toolCard: {
      learnMore: "詳しく見る",
    },
    promptGallery: {
      title: "プロンプトギャラリー",
      subtitle: "一般的なビジネスタスクを開始するためにプロンプトをコピー＆ペーストします。",
    },
    promptCard: {
      copied: "コピーしました！",
      copy: "プロンプトをコピー",
    },
    community: {
      title: "コミュニティに参加する",
      description: "他のソロファウンダーとつながり、進捗を共有し、アイデアについてフィードバックを得ましょう。",
      cta: "Discordに参加",
    },
    cofounderMatching: {
      title: "私の共同創業者を探す",
      subtitle: "才能ある人々とつながり、あなたのビジョンを実現しましょう。",
    },
    cofounderCard: {
        connect: "接続する"
    },
    firstHelper: {
        title: "私の最初のヘルパーを探す",
        subtitle: "ソロファウンダーがインターンシップ、フリーランスプロジェクト、または最初の従業員の募集を投稿するためのスペースです。成長に必要な助けを得ましょう。",
        card: {
            quickApply: "クイック応募",
            remote: "リモート",
            partTime: "パートタイム",
            fullTime: "フルタイム"
        }
    },
    pricing: {
      title: "料金プラン",
      subtitle: "あなたにぴったりのプランをお選びください。すべてのプランに7日間の無料トライアルが付いています。",
      promotion: {
        line1: "創設者ベータ版：今すぐ参加して年間わずか24.99ユーロ",
        line2: "（先着100名様限定）。",
        regularPrice: "通常価格：年間99ユーロ。",
        cta: "今すぐ支払う"
      },
      plans: [
        {
          id: "",
          name: "フリー",
          price: "€0",
          frequency: "/月",
          features: [
            "基本的なAIツール",
            "限定プロンプト",
            "コミュニティアクセス"
          ],
          cta: "無料で始める",
          isFeatured: false,
          badge: ""
        },
        {
          id: "price_pro_placeholder",
          name: "プロ",
          price: "€19",
          frequency: "/月",
          features: [
            "フリープランの全内容に加え：",
            "全プレミアムAIツール",
            "プロンプト完全アクセス",
            "共同創業者マッチング"
          ],
          cta: "プロを選択",
          isFeatured: false,
          badge: "一番お得"
        },
        {
          id: "price_yearly_placeholder",
          name: "年間プラン",
          price: "€99",
          frequency: "/年",
          features: [
            "フリープランの全内容に加え：",
            "全プレミアムAIツール",
            "プロンプト完全アクセス",
            "共同創業者マッチング"
          ],
          cta: "年間プランを選択",
          isFeatured: true,
          badge: "一番人気"
        }
      ]
    },
    faq: {
        title: "よくある質問 (FAQ)",
        items: [
            {
                question: "Go Solo AIとは何ですか？",
                answer: "Go Solo AIは、ソプラナー、フリーランサー、創業者が成功するのを助けるために設計されたオールインワンプラットフォームです。AI搭載の厳選されたツールキット、有用なビジネスプロンプトのギャラリー、ネットワーキングのためのコミュニティ、共同創業者マッチングサービスを提供します。"
            },
            {
                question: "Go Solo AIの技術はどのように機能しますか？",
                answer: "当社のプラットフォームは、主要なAIモデルと統合してツールキットを強化しています。例えば、テキストおよびコードジェネレーターは高度な大規模言語モデルを使用し、画像ツールは拡散モデルを活用しています。技術的な専門知識がなくてもこのすべてのパワーにアクセスできるよう、シンプルで統一されたインターフェースを提供しています。"
            },
            {
                question: "Go Solo AIの技術から誰が恩恵を受けられますか？",
                answer: "当社のプラットフォームは、一人で、または小さなチームでビジネスを構築しているすべての人のために作られています。これには、ソプラナー、規模拡大を目指すフリーランサー、リソースを効率的に使う必要がある初期段階のスタートアップ創業者が含まれます。"
            },
            {
                question: "Go Solo AIの技術を使用する利点は何ですか？",
                answer: "主な利点には、生産性の大幅な向上、専門ソフトウェアのコスト削減、支援的なコミュニティへのアクセス、そしてマーケティング、開発、創造的なタスクに最先端のAIを活用することで、自分の能力以上の競争ができるようになることが含まれます。"
            },
            {
                question: "Go Solo AIは使いやすいですか？",
                answer: "もちろんです。私たちの主な設計目標は、シンプルさと使いやすさです。AIの専門家である必要はありません。メールを書くことができれば、私たちのツールを使ってプロフェッショナルなコピー、コード、画像を生成できます。"
            },
            {
                question: "Go Solo AIの技術はいくらですか？",
                answer: "基本的なツールとコミュニティへのアクセスで始めるための無料プランを提供しています。プレミアムプランでは、より高度な機能、より高い使用制限、新しいツールへの優先アクセスが提供されます。詳細については、（将来の）価格ページをご確認ください。"
            },
            {
                question: "Go Solo AIの技術を始めるにはどうすればよいですか？",
                answer: "始めるのは簡単です！無料アカウントにサインアップするだけで、すぐにプラットフォームにアクセスできます。AIツールを探索し、プロンプトギャラリーを閲覧し、コミュニティにすぐに参加できます。"
            }
        ]
    },
    footer: {
      tagline: "孤独な戦士を武装させ、伝説のユニコーンにする。",
      features: {
        title: "特徴",
        aiTools: "AIツール",
        promptGallery: "プロンプトギャラリー",
        community: "コミュニティ",
        findCofounder: "私の共同創業者を探す",
      },
      company: {
        title: "会社",
        about: "会社概要",
        blog: "ブログ",
        contact: "お問い合わせ",
      },
      legal: {
        title: "法的",
        privacy: "プライバシーポリシー",
        terms: "利用規約",
      },
      copyright: "無断複写・転載を禁じます。",
    },
    header: {
        nav: {
            tools: 'AIツール',
            prompts: 'プロンプト',
            community: 'コミュニティ',
            cofounders: '共同創業者',
            pricing: '料金',
        },
        language: '言語'
    }
  },
};