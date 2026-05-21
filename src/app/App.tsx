import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Code, Mail, Layers } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

type Lang = "ES" | "EN" | "PT" | "AR";

const LANGUAGES: Lang[] = ["ES", "EN", "PT", "AR"];

interface LangContent {
  langCode: string;
  nav: { domain: string; contact: string };
  badge: string;
  hero: { title: string; subtitle: string; cta: string; secondary: string };
  diagram: { nodes: string[] };
  build: { label: string; title: string; cards: { title: string; desc: string }[] };
  diff: { title: string; rows: string[] };
  caseZero: { label: string; title: string; text: string };
  evidence: { title: string; text: string; status: string };
  contact: { title: string; text: string; cta: string };
  footer: { copy: string; disclaimer: string };
}

// ─── Content Dictionary ───────────────────────────────────────────────────────

const CONTENT: Record<Lang, LangContent> = {
  ES: {
    langCode: "es",
    nav: { domain: "transform-ia.com", contact: "Contactar" },
    badge: "PRIVATE BUILD · CASE ZERO IN PROGRESS · AUDIT-READY BY DESIGN",
    hero: {
      title: "Sistemas vivos de trabajo digital gobernado.",
      subtitle:
        "Convertimos presencia digital, procesos y atención en Work Units trazables: eWorkers, automatización, aprobación humana, evidencia y medición de valor operativo.",
      cta: "Hablar con TransformIA",
      secondary: "Showroom público en construcción.",
    },
    diagram: {
      nodes: ["Intención", "Work Unit", "Política", "Aprobación humana", "Evidencia", "Valor"],
    },
    build: {
      label: "Arquitectura",
      title: "Qué estamos construyendo",
      cards: [
        {
          title: "Sistemas vivos de IA para empresa",
          desc: "Automatización, atención, ventas, reporting y operaciones con IA práctica.",
        },
        {
          title: "Portal Inmersivo Inteligente",
          desc: "Web, Matterport o Street View conectados a eWorkers, Work Units y flujos comerciales.",
        },
        {
          title: "eWorkers y automatización gobernada",
          desc: "Trabajadores digitales conectados a WhatsApp, CRM, email, calendario, documentos, n8n, Make y dashboards.",
        },
        {
          title: "Capa Viva de mejora continua",
          desc: "Evolución mensual, reporting, nuevas automatizaciones y mejora continua del sistema.",
        },
      ],
    },
    diff: {
      title: "No es un chatbot. No es una automatización suelta. Es un sistema vivo.",
      rows: [
        "Captura intención.",
        "Genera trabajo digital estructurado.",
        "Decide bajo política.",
        "Pide aprobación cuando corresponde.",
        "Registra evidencia.",
        "Muestra valor operativo.",
        "Evoluciona con el negocio.",
      ],
    },
    caseZero: {
      label: "CASE ZERO // INTERNAL DEPLOYMENT",
      title: "TransformIA es nuestro primer caso de uso.",
      text: "Estamos construyendo nuestro propio runtime, showroom y sistema operativo interno antes de ofrecerlo a clientes. Cada avance deja trazabilidad técnica, revisión humana y evidencia de decisión.",
    },
    evidence: {
      title: "Evidencia pública de construcción",
      text: "Estamos preparando un repositorio público saneado con artefactos de marca, changelog, decisiones de lanzamiento y trazabilidad visible del caso cero. No incluirá código privado ni información sensible del runtime.",
      status: "COMING SOON",
    },
    contact: {
      title: "Estamos abriendo conversaciones privadas.",
      text: "Si quieres explorar cómo aplicar IA práctica, eWorkers, automatización o presencia viva a tu empresa, escríbenos.",
      cta: "Hablar con TransformIA",
    },
    footer: {
      copy: "© 2026 TransformIA. Sistemas vivos de trabajo digital gobernado.",
      disclaimer:
        "TransformIA está en fase de construcción privada. Las capacidades descritas son líneas de producto en desarrollo y se entregarán bajo alcance, validación y criterios de seguridad específicos para cada cliente.",
    },
  },

  EN: {
    langCode: "en",
    nav: { domain: "transform-ia.com", contact: "Contact" },
    badge: "PRIVATE BUILD · CASE ZERO IN PROGRESS · AUDIT-READY BY DESIGN",
    hero: {
      title: "Living systems for governed digital work.",
      subtitle:
        "We turn digital presence, business processes and customer interactions into traceable Work Units: eWorkers, automation, human review, evidence and operational value measurement.",
      cta: "Talk to TransformIA",
      secondary: "Public showroom in progress.",
    },
    diagram: {
      nodes: ["Intent", "Work Unit", "Policy", "Human Review", "Evidence", "Value"],
    },
    build: {
      label: "Architecture",
      title: "What we are building",
      cards: [
        {
          title: "Living AI systems for business",
          desc: "Automation, customer interaction, sales, reporting and operations powered by practical AI.",
        },
        {
          title: "Intelligent Immersive Portal",
          desc: "Web, Matterport or Street View connected to eWorkers, Work Units and commercial workflows.",
        },
        {
          title: "eWorkers and governed automation",
          desc: "Digital workers connected to WhatsApp, CRM, email, calendar, documents, n8n, Make and dashboards.",
        },
        {
          title: "Living layer of continuous improvement",
          desc: "Monthly evolution, reporting, new automations and continuous system improvement.",
        },
      ],
    },
    diff: {
      title: "Not a chatbot. Not a loose automation. A living system.",
      rows: [
        "Captures intent.",
        "Creates structured digital work.",
        "Decides under policy.",
        "Requests human review when needed.",
        "Records evidence.",
        "Shows operational value.",
        "Evolves with the business.",
      ],
    },
    caseZero: {
      label: "CASE ZERO // INTERNAL DEPLOYMENT",
      title: "TransformIA is our first use case.",
      text: "We are building our own runtime, showroom and internal operating system before offering it to clients. Every step leaves technical traceability, human review and decision evidence.",
    },
    evidence: {
      title: "Public build evidence",
      text: "We are preparing a sanitized public repository with brand artifacts, changelog, launch decisions and visible traceability for the case zero. It will not include private runtime code or sensitive information.",
      status: "COMING SOON",
    },
    contact: {
      title: "We are opening private conversations.",
      text: "If you want to explore practical AI, eWorkers, automation or living presence for your business, write to us.",
      cta: "Talk to TransformIA",
    },
    footer: {
      copy: "© 2026 TransformIA. Living systems for governed digital work.",
      disclaimer:
        "TransformIA is in private build phase. The capabilities described are product lines in development and will be delivered under specific scope, validation and safety criteria for each client.",
    },
  },

  PT: {
    langCode: "pt",
    nav: { domain: "transform-ia.com", contact: "Contactar" },
    badge: "PRIVATE BUILD · CASE ZERO IN PROGRESS · AUDIT-READY BY DESIGN",
    hero: {
      title: "Sistemas vivos de trabalho digital governado.",
      subtitle:
        "Transformamos presença digital, processos e atendimento em Work Units rastreáveis: eWorkers, automatização, revisão humana, evidência e medição de valor operacional.",
      cta: "Falar com a TransformIA",
      secondary: "Showroom público em construção.",
    },
    diagram: {
      nodes: ["Intenção", "Work Unit", "Política", "Revisão humana", "Evidência", "Valor"],
    },
    build: {
      label: "Arquitectura",
      title: "O que estamos a construir",
      cards: [
        {
          title: "Sistemas vivos de IA para empresas",
          desc: "Automatização, atendimento, vendas, reporting e operações com IA prática.",
        },
        {
          title: "Portal Imersivo Inteligente",
          desc: "Web, Matterport ou Street View ligados a eWorkers, Work Units e fluxos comerciais.",
        },
        {
          title: "eWorkers e automatização governada",
          desc: "Trabalhadores digitais ligados a WhatsApp, CRM, email, calendário, documentos, n8n, Make e dashboards.",
        },
        {
          title: "Camada viva de melhoria contínua",
          desc: "Evolução mensal, reporting, novas automatizações e melhoria contínua do sistema.",
        },
      ],
    },
    diff: {
      title: "Não é um chatbot. Não é uma automatização solta. É um sistema vivo.",
      rows: [
        "Captura intenção.",
        "Gera trabalho digital estruturado.",
        "Decide sob política.",
        "Solicita revisão humana quando necessário.",
        "Regista evidência.",
        "Mostra valor operacional.",
        "Evolui com o negócio.",
      ],
    },
    caseZero: {
      label: "CASE ZERO // INTERNAL DEPLOYMENT",
      title: "A TransformIA é o nosso primeiro caso de uso.",
      text: "Estamos a construir o nosso próprio runtime, showroom e sistema operativo interno antes de o oferecer a clientes. Cada avanço deixa rastreabilidade técnica, revisão humana e evidência de decisão.",
    },
    evidence: {
      title: "Evidência pública de construção",
      text: "Estamos a preparar um repositório público saneado com artefactos de marca, changelog, decisões de lançamento e rastreabilidade visível do caso zero. Não incluirá código privado nem informação sensível do runtime.",
      status: "COMING SOON",
    },
    contact: {
      title: "Estamos a abrir conversas privadas.",
      text: "Se pretende explorar como aplicar IA prática, eWorkers, automatização ou presença viva à sua empresa, escreva-nos.",
      cta: "Falar com a TransformIA",
    },
    footer: {
      copy: "© 2026 TransformIA. Sistemas vivos de trabalho digital governado.",
      disclaimer:
        "A TransformIA está em fase de construção privada. As capacidades descritas são linhas de produto em desenvolvimento e serão entregues sob âmbito, validação e critérios de segurança específicos para cada cliente.",
    },
  },

  AR: {
    langCode: "ar",
    nav: { domain: "transform-ia.com", contact: "تواصل" },
    badge: "PRIVATE BUILD · CASE ZERO IN PROGRESS · AUDIT-READY BY DESIGN",
    hero: {
      title: "أنظمة حية للعمل الرقمي المحكوم.",
      subtitle:
        "نحوّل الحضور الرقمي والعمليات والتفاعل مع العملاء إلى وحدات عمل قابلة للتتبع: عمال رقميون، أتمتة، مراجعة بشرية، أدلة تشغيلية وقياس للقيمة العملية.",
      cta: "تواصل مع TransformIA",
      secondary: "الواجهة العامة قيد الإنشاء.",
    },
    diagram: {
      nodes: ["النية", "وحدة عمل", "سياسة", "مراجعة بشرية", "دليل", "قيمة"],
    },
    build: {
      label: "البنية",
      title: "ما الذي نبنيه",
      cards: [
        {
          title: "أنظمة ذكاء اصطناعي حية للأعمال",
          desc: "أتمتة، تفاعل مع العملاء، مبيعات، تقارير وعمليات قائمة على ذكاء اصطناعي عملي.",
        },
        {
          title: "بوابة غامرة ذكية",
          desc: "ويب، Matterport أو Street View متصلة بعمال رقميين ووحدات عمل وتدفقات تجارية.",
        },
        {
          title: "عمال رقميون وأتمتة محكومة",
          desc: "عمال رقميون متصلون بـ WhatsApp وCRM والبريد الإلكتروني والتقويم والمستندات وn8n وMake ولوحات المتابعة.",
        },
        {
          title: "طبقة حية للتحسين المستمر",
          desc: "تطور شهري، تقارير، أتمتات جديدة وتحسين مستمر للنظام.",
        },
      ],
    },
    diff: {
      title: "ليس مجرد روبوت محادثة. وليس أتمتة منفصلة. إنه نظام حي.",
      rows: [
        "يلتقط النية.",
        "ينشئ عملاً رقمياً منظماً.",
        "يقرر وفق سياسة واضحة.",
        "يطلب مراجعة بشرية عند الحاجة.",
        "يسجل الأدلة.",
        "يوضح القيمة التشغيلية.",
        "يتطور مع العمل.",
      ],
    },
    caseZero: {
      label: "CASE ZERO // INTERNAL DEPLOYMENT",
      title: "TransformIA هي أول حالة استخدام لنا.",
      text: "نبني بيئة التشغيل والواجهة والنظام الداخلي الخاص بنا قبل تقديمه للعملاء. كل خطوة تترك أثراً تقنياً، ومراجعة بشرية، ودليلاً على القرار.",
    },
    evidence: {
      title: "دليل عام على البناء",
      text: "نحن نعد مستودعاً عاماً مُنقحاً يضم أصول العلامة، سجل التغييرات، قرارات الإطلاق والتتبع المرئي لحالة الاستخدام الأولى. لن يتضمن كوداً خاصاً أو معلومات حساسة عن بيئة التشغيل.",
      status: "قريباً",
    },
    contact: {
      title: "نفتح محادثات خاصة.",
      text: "إذا كنت ترغب في استكشاف الذكاء الاصطناعي العملي، أو العمال الرقميين، أو الأتمتة، أو الحضور الحي لعملك، فاكتب إلينا.",
      cta: "تواصل مع TransformIA",
    },
    footer: {
      copy: "© 2026 TransformIA. أنظمة حية للعمل الرقمي المحكوم.",
      disclaimer:
        "TransformIA في مرحلة بناء خاصة. القدرات المذكورة هي خطوط منتجات قيد التطوير وسيتم تسليمها وفق نطاق محدد ومعايير تحقق وسلامة مناسبة لكل عميل.",
    },
  },
};

const CASE_ZERO_TAGS = [
  "BUILD EVIDENCE",
  "HUMAN REVIEW",
  "WORK UNITS",
  "PRIVATE BUILD",
  "PUBLIC SHOWROOM SOON",
];

const CONTACT_EMAIL = "daniel.medina@transform-ia.com";

// ─── Hooks ────────────────────────────────────────────────────────────────────

function isValidLang(s: string): s is Lang {
  return (LANGUAGES as string[]).includes(s);
}

function useLanguage(): [Lang, (l: Lang) => void] {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("tia-lang") ?? "";
      if (isValidLang(stored)) return stored;
    }
    return "ES";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("tia-lang", l);
  };

  return [lang, setLang];
}

function useInView() {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  return [setRef, visible] as const;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

// ─── Components ───────────────────────────────────────────────────────────────

const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const [ref, visible] = useInView();
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref as React.RefCallback<HTMLDivElement>}
      initial={{ opacity: 0, y: 18 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

function HeroDiagram({
  nodes,
  reducedMotion,
}: {
  nodes: string[];
  reducedMotion: boolean;
}) {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length);
    }, 1500);
    return () => clearInterval(timer);
  }, [nodes.length, reducedMotion]);

  const dotTop = `calc(${(activeNode / (nodes.length - 1)) * 100}% - 3px)`;

  return (
    /* dir="ltr" keeps the vertical diagram neutral for RTL layouts */
    <div
      dir="ltr"
      aria-hidden="true"
      className="relative w-full h-full min-h-[450px] lg:min-h-[600px] bg-white border border-border flex items-center justify-center p-8 overflow-hidden"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-16 h-16 border-r border-b border-border opacity-40" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-l border-t border-border opacity-40" />

      <div className="relative z-10 w-full max-w-[280px] h-[360px] flex flex-col justify-between">
        {/* Vertical track */}
        <div className="absolute left-[15px] top-[15px] bottom-[15px] w-[1px] bg-border" />

        {/* Moving dot */}
        {reducedMotion ? (
          <div
            className="absolute left-[12.5px] w-[6px] h-[6px] bg-foreground"
            style={{ top: dotTop }}
          />
        ) : (
          <motion.div
            className="absolute left-[12.5px] w-[6px] h-[6px] bg-foreground"
            animate={{ top: dotTop }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          />
        )}

        {nodes.map((label, i) => {
          const isActive = !reducedMotion && activeNode === i;
          const isPassed = reducedMotion || activeNode >= i;
          return (
            <div key={i} className="relative flex items-center h-[30px]">
              <div
                className={`w-[30px] h-[30px] flex items-center justify-center border font-mono text-[10px] z-10 transition-colors duration-500
                  ${
                    isActive
                      ? "border-foreground bg-foreground text-background"
                      : isPassed
                      ? "border-foreground bg-white text-foreground"
                      : "border-border bg-white text-muted-foreground"
                  }`}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="ml-6">
                <span
                  className={`font-mono text-[11px] uppercase tracking-widest transition-all duration-500 ${
                    isActive
                      ? "text-foreground font-semibold translate-x-1"
                      : "text-muted-foreground"
                  }`}
                >
                  {label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [lang, setLang] = useLanguage();
  const [logoError, setLogoError] = useState(false);
  const reduced = usePrefersReducedMotion();
  const t = CONTENT[lang];
  const isRTL = lang === "AR";

  useEffect(() => {
    document.documentElement.lang = t.langCode;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.title =
      lang === "EN"
        ? "TransformIA — Living systems for governed digital work"
        : lang === "PT"
        ? "TransformIA — Sistemas vivos de trabalho digital governado"
        : lang === "AR"
        ? "TransformIA — أنظمة حية للعمل الرقمي المحكوم"
        : "TransformIA — Sistemas vivos de trabajo digital gobernado";
  }, [lang, isRTL, t.langCode]);

  const Logo = () =>
    logoError ? (
      <span className="font-semibold tracking-tight text-lg leading-none">TransformIA</span>
    ) : (
      <img
        src="/logo-wordmark-light.svg"
        alt="TransformIA"
        className="h-6 w-auto object-contain"
        onError={() => setLogoError(true)}
      />
    );

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground selection:text-background flex flex-col">

      {/* ── Navbar ──────────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-border"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="w-full max-w-[1400px] mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center min-w-0">
            <Logo />
          </div>

          <div className="flex items-center gap-3 md:gap-5 shrink-0">
            <span className="hidden lg:inline-block font-mono text-xs text-muted-foreground uppercase tracking-widest">
              {t.nav.domain}
            </span>

            {/* Language switcher */}
            <div
              role="group"
              aria-label="Language / Idioma"
              className="flex items-center"
            >
              {LANGUAGES.map((l, i) => (
                <React.Fragment key={l}>
                  {i > 0 && (
                    <span
                      className="font-mono text-xs text-border select-none px-0.5"
                      aria-hidden="true"
                    >
                      ·
                    </span>
                  )}
                  <button
                    onClick={() => setLang(l)}
                    aria-pressed={lang === l}
                    className={`font-mono text-xs uppercase tracking-widest px-1.5 py-1 transition-colors
                      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground
                      ${lang === l ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {l}
                  </button>
                </React.Fragment>
              ))}
            </div>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              aria-label={`${t.nav.contact}: ${CONTACT_EMAIL}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium hover:text-muted-foreground transition-colors
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              {t.nav.contact}
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-1 w-full max-w-[1400px] mx-auto border-x border-border">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col lg:flex-row border-b border-border">
          {/* Content */}
          <div className="flex-1 p-6 md:p-12 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-e border-border">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-border bg-secondary text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-12">
                <span
                  className="w-1.5 h-1.5 bg-foreground motion-safe:animate-pulse"
                  aria-hidden="true"
                />
                {t.badge}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05] mb-8 max-w-3xl">
                {t.hero.title}
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-secondary-foreground leading-relaxed max-w-2xl mb-12">
                {t.hero.subtitle}
              </p>
            </FadeIn>

            <FadeIn
              delay={0.3}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label={`${t.hero.cta}: ${CONTACT_EMAIL}`}
                className="inline-flex items-center justify-center h-14 px-8 bg-foreground text-background font-medium
                  hover:bg-foreground/90 transition-colors gap-2
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
              >
                {t.hero.cta}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Code className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{t.hero.secondary}</span>
              </div>
            </FadeIn>
          </div>

          {/* Diagram */}
          <div className="w-full lg:w-[45%] shrink-0 bg-secondary">
            <HeroDiagram nodes={t.diagram.nodes} reducedMotion={reduced} />
          </div>
        </section>

        {/* ── What we build ─────────────────────────────────────────────────── */}
        <section
          className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-20 border-b border-border bg-white"
          aria-labelledby="build-title"
        >
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-foreground" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {t.build.label}
              </span>
            </div>
            <h2
              id="build-title"
              className="text-2xl md:text-4xl font-medium tracking-tight mb-16"
            >
              {t.build.title}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
            {t.build.cards.map((card, i) => (
              <FadeIn
                key={i}
                delay={i * 0.08}
                className="bg-white p-8 md:p-12 hover:bg-secondary transition-colors group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 end-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity"
                  aria-hidden="true"
                >
                  <Layers className="w-24 h-24 text-foreground" />
                </div>
                <div className="font-mono text-xs text-muted-foreground mb-6">
                  {String.fromCharCode(65 + i)} // 0{i + 1}
                </div>
                <h3 className="text-xl md:text-2xl font-medium mb-4">{card.title}</h3>
                <p className="text-secondary-foreground leading-relaxed max-w-sm relative z-10">
                  {card.desc}
                </p>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── Differentiators ───────────────────────────────────────────────── */}
        <section
          className="w-full border-b border-border bg-white"
          aria-labelledby="diff-title"
        >
          <div className="p-6 md:p-12 lg:p-20 border-b border-border">
            <FadeIn>
              <h2
                id="diff-title"
                className="text-3xl md:text-5xl font-medium tracking-tight max-w-4xl"
              >
                {t.diff.title}
              </h2>
            </FadeIn>
          </div>

          <ol className="flex flex-col">
            {t.diff.rows.map((item, i) => (
              <li
                key={i}
                className="group flex flex-col md:flex-row md:items-center border-b border-border last:border-b-0
                  px-6 md:px-12 lg:px-20 py-8 md:py-10
                  hover:bg-foreground hover:text-background transition-colors duration-300"
              >
                <div
                  className="font-mono text-2xl md:text-4xl opacity-30 group-hover:opacity-100 transition-opacity mb-3 md:mb-0 md:w-32 shrink-0"
                  aria-hidden="true"
                >
                  0{i + 1}
                </div>
                <div className="text-xl md:text-3xl font-medium tracking-tight">{item}</div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Case Zero ─────────────────────────────────────────────────────── */}
        <section
          className="w-full p-6 md:p-12 lg:p-20 border-b border-border bg-white"
          aria-labelledby="casezero-title"
        >
          <FadeIn>
            <div className="bg-foreground text-background p-8 md:p-16 lg:p-24 relative overflow-hidden">
              <div
                className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:24px_24px] opacity-20"
                aria-hidden="true"
              />
              <div className="relative z-10 max-w-4xl">
                <div className="font-mono text-xs uppercase tracking-widest text-white/50 mb-8">
                  {t.caseZero.label}
                </div>
                <h2
                  id="casezero-title"
                  className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8"
                >
                  {t.caseZero.title}
                </h2>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-12 max-w-2xl">
                  {t.caseZero.text}
                </p>
                <ul className="flex flex-wrap gap-3">
                  {CASE_ZERO_TAGS.map((tag) => (
                    <li
                      key={tag}
                      className="px-3 py-1.5 border border-white/20 font-mono text-[10px] uppercase tracking-widest text-white/80"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ── Public Evidence Slot ──────────────────────────────────────────── */}
        <section
          className="w-full border-b border-border bg-white px-6 md:px-12 lg:px-20 py-12 md:py-16"
          aria-labelledby="evidence-title"
        >
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-start gap-6 md:gap-12 max-w-4xl">
              <div className="shrink-0 pt-0.5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground border border-border px-2 py-1 inline-block">
                  {t.evidence.status}
                </span>
              </div>
              <div>
                <h2
                  id="evidence-title"
                  className="text-sm font-medium mb-2.5 tracking-tight"
                >
                  {t.evidence.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                  {t.evidence.text}
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ── Contact ───────────────────────────────────────────────────────── */}
        <section
          className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white flex flex-col items-center text-center"
          aria-labelledby="contact-title"
        >
          <FadeIn className="w-full max-w-2xl mx-auto flex flex-col items-center">
            <h2
              id="contact-title"
              className="text-3xl md:text-5xl font-medium tracking-tight mb-6"
            >
              {t.contact.title}
            </h2>
            <p className="text-lg text-secondary-foreground mb-12 max-w-lg leading-relaxed">
              {t.contact.text}
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              aria-label={`${t.contact.cta}: ${CONTACT_EMAIL}`}
              className="group inline-flex items-center justify-center h-14 px-8 bg-foreground text-background font-medium
                hover:bg-foreground/90 transition-all gap-3
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              {t.contact.cta}
              <ArrowRight
                className="w-4 h-4 group-hover:translate-x-1 transition-transform motion-safe:group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <div className="mt-8 flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{CONTACT_EMAIL}</span>
            </div>
          </FadeIn>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer
        className="w-full border-t border-border bg-white pb-8 pt-12"
        role="contentinfo"
      >
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16">
          <div className="max-w-xs">
            {logoError ? (
              <div className="font-semibold tracking-tight text-base mb-4">TransformIA</div>
            ) : (
              <img
                src="/logo-wordmark-light.svg"
                alt="TransformIA"
                className="h-5 w-auto object-contain mb-4"
                onError={() => setLogoError(true)}
              />
            )}
            <p className="text-xs text-muted-foreground/70 leading-relaxed">{t.footer.copy}</p>
          </div>

          <div className="max-w-lg text-xs text-muted-foreground/70 leading-relaxed md:text-end">
            <span className="font-mono uppercase tracking-widest text-[10px] block mb-2 opacity-50">
              Disclaimer
            </span>
            {t.footer.disclaimer}
          </div>
        </div>
      </footer>
    </div>
  );
}
