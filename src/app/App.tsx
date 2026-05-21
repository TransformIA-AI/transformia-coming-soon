import { useEffect, useMemo, useState } from 'react';

type Lang = 'ES' | 'EN' | 'PT' | 'AR';

type LocaleContent = {
  heroTitle: string;
  heroSubtitle: string;
  cta: string;
  secondary: string;
  buildTitle: string;
  diffTitle: string;
  caseTitle: string;
  caseText: string;
  evidenceTitle: string;
  evidenceText: string;
  evidenceStatus: string;
  contactTitle: string;
  contactText: string;
  footer: string;
  disclaimer: string;
  diagram: string[];
  buildCards: Array<{ title: string; body: string }>;
  diffRows: string[];
};

const EMAIL = 'daniel.medina@transform-ia.com';
const STORAGE_KEY = 'tia-lang';
const STATUS_BADGE = 'PRIVATE BUILD · CASE ZERO IN PROGRESS · AUDIT-READY BY DESIGN';
const CASE_TAGS = ['BUILD EVIDENCE', 'HUMAN REVIEW', 'WORK UNITS', 'PRIVATE BUILD', 'PUBLIC SHOWROOM SOON'];
const LANGS: Lang[] = ['ES', 'EN', 'PT', 'AR'];

const CONTENT: Record<Lang, LocaleContent> = {
  ES: {
    heroTitle: 'Sistemas vivos de trabajo digital gobernado.', heroSubtitle: 'Convertimos presencia digital, procesos y atención en Work Units trazables: eWorkers, automatización, aprobación humana, evidencia y medición de valor operativo.', cta: 'Hablar con TransformIA', secondary: 'Showroom público en construcción.', buildTitle: 'Qué estamos construyendo', diffTitle: 'No es un chatbot. No es una automatización suelta. Es un sistema vivo.', caseTitle: 'TransformIA es nuestro primer caso de uso.', caseText: 'Estamos construyendo nuestro propio runtime, showroom y sistema operativo interno antes de ofrecerlo a clientes. Cada avance deja trazabilidad técnica, revisión humana y evidencia de decisión.', evidenceTitle: 'Evidencia pública de construcción', evidenceText: 'Estamos preparando un repositorio público saneado con artefactos de marca, changelog, decisiones de lanzamiento y trazabilidad visible del caso cero. No incluirá código privado ni información sensible del runtime.', evidenceStatus: 'COMING SOON', contactTitle: 'Estamos abriendo conversaciones privadas.', contactText: 'Si quieres explorar cómo aplicar IA práctica, eWorkers, automatización o presencia viva a tu empresa, escríbenos.', footer: '© 2026 TransformIA. Sistemas vivos de trabajo digital gobernado.', disclaimer: 'TransformIA está en fase de construcción privada. Las capacidades descritas son líneas de producto en desarrollo y se entregarán bajo alcance, validación y criterios de seguridad específicos para cada cliente.',
    diagram: ['Intención', 'Work Unit', 'Política', 'Aprobación humana', 'Evidencia', 'Valor'],
    buildCards: [
      { title: 'Sistemas vivos de IA para empresa', body: 'Automatización, atención, ventas, reporting y operaciones con IA práctica.' },
      { title: 'Portal Inmersivo Inteligente', body: 'Web, Matterport o Street View conectados a eWorkers, Work Units y flujos comerciales.' },
      { title: 'eWorkers y automatización gobernada', body: 'Trabajadores digitales conectados a WhatsApp, CRM, email, calendario, documentos, n8n, Make y dashboards.' },
      { title: 'Capa Viva de mejora continua', body: 'Evolución mensual, reporting, nuevas automatizaciones y mejora continua del sistema.' }
    ],
    diffRows: ['01 Captura intención.', '02 Genera trabajo digital estructurado.', '03 Decide bajo política.', '04 Pide aprobación cuando corresponde.', '05 Registra evidencia.', '06 Muestra valor operativo.', '07 Evoluciona con el negocio.']
  },
  EN: {
    heroTitle: 'Living systems for governed digital work.', heroSubtitle: 'We turn digital presence, business processes and customer interactions into traceable Work Units: eWorkers, automation, human review, evidence and operational value measurement.', cta: 'Talk to TransformIA', secondary: 'Public showroom in progress.', buildTitle: 'What we are building', diffTitle: 'Not a chatbot. Not a loose automation. A living system.', caseTitle: 'TransformIA is our first use case.', caseText: 'We are building our own runtime, showroom and internal operating system before offering it to clients. Every step leaves technical traceability, human review and decision evidence.', evidenceTitle: 'Public build evidence', evidenceText: 'We are preparing a sanitized public repository with brand artifacts, changelog, launch decisions and visible traceability for the case zero. It will not include private runtime code or sensitive information.', evidenceStatus: 'COMING SOON', contactTitle: 'We are opening private conversations.', contactText: 'If you want to explore practical AI, eWorkers, automation or living presence for your business, write to us.', footer: '© 2026 TransformIA. Living systems for governed digital work.', disclaimer: 'TransformIA is in private build phase. The capabilities described are product lines in development and will be delivered under specific scope, validation and safety criteria for each client.',
    diagram: ['Intent', 'Work Unit', 'Policy', 'Human Review', 'Evidence', 'Value'],
    buildCards: [
      { title: 'Living AI systems for business', body: 'Automation, customer interaction, sales, reporting and operations powered by practical AI.' },
      { title: 'Intelligent Immersive Portal', body: 'Web, Matterport or Street View connected to eWorkers, Work Units and commercial workflows.' },
      { title: 'eWorkers and governed automation', body: 'Digital workers connected to WhatsApp, CRM, email, calendar, documents, n8n, Make and dashboards.' },
      { title: 'Living layer of continuous improvement', body: 'Monthly evolution, reporting, new automations and continuous system improvement.' }
    ],
    diffRows: ['01 Captures intent.', '02 Creates structured digital work.', '03 Decides under policy.', '04 Requests human review when needed.', '05 Records evidence.', '06 Shows operational value.', '07 Evolves with the business.']
  },
  PT: {
    heroTitle: 'Sistemas vivos de trabalho digital governado.', heroSubtitle: 'Transformamos presença digital, processos e atendimento em Work Units rastreáveis: eWorkers, automatização, revisão humana, evidência e medição de valor operacional.', cta: 'Falar com a TransformIA', secondary: 'Showroom público em construção.', buildTitle: 'O que estamos a construir', diffTitle: 'Não é um chatbot. Não é uma automatização solta. É um sistema vivo.', caseTitle: 'A TransformIA é o nosso primeiro caso de uso.', caseText: 'Estamos a construir o nosso próprio runtime, showroom e sistema operativo interno antes de o oferecer a clientes. Cada avanço deixa rastreabilidade técnica, revisão humana e evidência de decisão.', evidenceTitle: 'Evidência pública de construção', evidenceText: 'Estamos a preparar um repositório público saneado com artefactos de marca, changelog, decisões de lançamento e rastreabilidade visível do caso zero. Não incluirá código privado nem informação sensível do runtime.', evidenceStatus: 'COMING SOON', contactTitle: 'Estamos a abrir conversas privadas.', contactText: 'Se pretende explorar como aplicar IA prática, eWorkers, automatização ou presença viva à sua empresa, escreva-nos.', footer: '© 2026 TransformIA. Sistemas vivos de trabalho digital governado.', disclaimer: 'A TransformIA está em fase de construção privada. As capacidades descritas são linhas de produto em desenvolvimento e serão entregues sob âmbito, validação e critérios de segurança específicos para cada cliente.',
    diagram: ['Intenção', 'Work Unit', 'Política', 'Revisão humana', 'Evidência', 'Valor'],
    buildCards: [
      { title: 'Sistemas vivos de IA para empresas', body: 'Automatização, atendimento, vendas, reporting e operações com IA prática.' },
      { title: 'Portal Imersivo Inteligente', body: 'Web, Matterport ou Street View ligados a eWorkers, Work Units e fluxos comerciais.' },
      { title: 'eWorkers e automatização governada', body: 'Trabalhadores digitais ligados a WhatsApp, CRM, email, calendário, documentos, n8n, Make e dashboards.' },
      { title: 'Camada viva de melhoria contínua', body: 'Evolução mensal, reporting, novas automatizações e melhoria contínua do sistema.' }
    ],
    diffRows: ['01 Captura intenção.', '02 Gera trabalho digital estruturado.', '03 Decide sob política.', '04 Solicita revisão humana quando necessário.', '05 Regista evidência.', '06 Mostra valor operacional.', '07 Evolui com o negócio.']
  },
  AR: {
    heroTitle: 'أنظمة حية للعمل الرقمي المحكوم.', heroSubtitle: 'نحوّل الحضور الرقمي والعمليات والتفاعل مع العملاء إلى وحدات عمل قابلة للتتبع: عمال رقميون، أتمتة، مراجعة بشرية، أدلة تشغيلية وقياس للقيمة العملية.', cta: 'تواصل مع TransformIA', secondary: 'الواجهة العامة قيد الإنشاء.', buildTitle: 'ما الذي نبنيه', diffTitle: 'ليس مجرد روبوت محادثة. وليس أتمتة منفصلة. إنه نظام حي.', caseTitle: 'TransformIA هي أول حالة استخدام لنا.', caseText: 'نبني بيئة التشغيل والواجهة والنظام الداخلي الخاص بنا قبل تقديمه للعملاء. كل خطوة تترك أثراً تقنياً، ومراجعة بشرية، ودليلاً على القرار.', evidenceTitle: 'دليل عام على البناء', evidenceText: 'نحن نعد مستودعاً عاماً مُنقحاً يضم أصول العلامة، سجل التغييرات، قرارات الإطلاق والتتبع المرئي لحالة الاستخدام الأولى. لن يتضمن كوداً خاصاً أو معلومات حساسة عن بيئة التشغيل.', evidenceStatus: 'قريباً', contactTitle: 'نفتح محادثات خاصة.', contactText: 'إذا كنت ترغب في استكشاف الذكاء الاصطناعي العملي، أو العمال الرقميين، أو الأتمتة، أو الحضور الحي لعملك، فاكتب إلينا.', footer: '© 2026 TransformIA. أنظمة حية للعمل الرقمي المحكوم.', disclaimer: 'TransformIA في مرحلة بناء خاصة. القدرات المذكورة هي خطوط منتجات قيد التطوير وسيتم تسليمها وفق نطاق محدد ومعايير تحقق وسلامة مناسبة لكل عميل.',
    diagram: ['النية', 'Work Unit', 'سياسة', 'مراجعة بشرية', 'دليل', 'قيمة'],
    buildCards: [
      { title: 'أنظمة ذكاء اصطناعي حية للأعمال', body: 'أتمتة، تفاعل مع العملاء، مبيعات، تقارير وعمليات قائمة على ذكاء اصطناعي عملي.' },
      { title: 'بوابة غامرة ذكية', body: 'ويب، Matterport أو Street View متصلة بعمال رقميين ووحدات عمل وتدفقات تجارية.' },
      { title: 'عمال رقميون وأتمتة محكومة', body: 'عمال رقميون متصلون بـ WhatsApp وCRM والبريد الإلكتروني والتقويم والمستندات وn8n وMake ولوحات المتابعة.' },
      { title: 'طبقة حية للتحسين المستمر', body: 'تطور شهري، تقارير، أتمتات جديدة وتحسين مستمر للنظام.' }
    ],
    diffRows: ['01 يلتقط النية.', '02 ينشئ عملاً رقمياً منظماً.', '03 يقرر وفق سياسة واضحة.', '04 يطلب مراجعة بشرية عند الحاجة.', '05 يسجل الأدلة.', '06 يوضح القيمة التشغيلية.', '07 يتطور مع العمل.']
  }
};

const langToDoc = (lang: Lang) => ({ htmlLang: lang.toLowerCase(), dir: lang === 'AR' ? 'rtl' : 'ltr' });

export function App() {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    return saved && LANGS.includes(saved) ? saved : 'ES';
  });

  const copy = useMemo(() => CONTENT[lang], [lang]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    const { htmlLang, dir } = langToDoc(lang);
    document.documentElement.lang = htmlLang;
    document.documentElement.dir = dir;
  }, [lang]);

  return (
    <div className="page">
      <nav className="nav" aria-label="Primary navigation">
        <a href="https://transform-ia.com" className="logo-link" aria-label="TransformIA website">
          <img src="/logo-wordmark-light.svg" alt="TransformIA" className="logo" />
        </a>
        <div className="nav-actions">
          <a href="https://transform-ia.com" className="site-link">transform-ia.com</a>
          <a className="mail-link" aria-label="Email TransformIA" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <div className="lang-switch" role="group" aria-label="Language switcher">
            {LANGS.map((code) => (
              <button key={code} type="button" aria-pressed={lang === code} onClick={() => setLang(code)}>{code}</button>
            ))}
          </div>
        </div>
      </nav>

      <main>
        <section aria-labelledby="hero-title" className="hero section-grid">
          <p className="status-badge">{STATUS_BADGE}</p>
          <h1 id="hero-title">{copy.heroTitle}</h1>
          <p className="lead">{copy.heroSubtitle}</p>
          <div className="hero-actions">
            <a className="cta" aria-label="Contact TransformIA by email" href={`mailto:${EMAIL}`}>{copy.cta}</a>
            <p className="secondary">{copy.secondary}</p>
          </div>
          <div className="diagram" dir="ltr" aria-label="Governance flow">
            {copy.diagram.map((step, idx) => (
              <span key={`${step}-${idx}`} className="node">{step}{idx < copy.diagram.length - 1 ? ' →' : ''}</span>
            ))}
          </div>
        </section>

        <section aria-labelledby="build-title" className="section-grid">
          <h2 id="build-title">{copy.buildTitle}</h2>
          <div className="cards-grid">
            {copy.buildCards.map((card) => (
              <article key={card.title} className="card"><h3>{card.title}</h3><p>{card.body}</p></article>
            ))}
          </div>
        </section>

        <section aria-labelledby="diff-title" className="section-grid">
          <h2 id="diff-title">{copy.diffTitle}</h2>
          <ol className="diff-list">{copy.diffRows.map((row) => <li key={row}>{row}</li>)}</ol>
        </section>

        <section aria-labelledby="case-title" className="section-grid case-panel">
          <h2 id="case-title">{copy.caseTitle}</h2>
          <p>{copy.caseText}</p>
          <ul className="tags">{CASE_TAGS.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        </section>

        <section aria-labelledby="evidence-title" className="section-grid evidence-panel">
          <h2 id="evidence-title">{copy.evidenceTitle}</h2>
          <p>{copy.evidenceText}</p>
          <strong>{copy.evidenceStatus}</strong>
        </section>

        <section aria-labelledby="contact-title" className="section-grid">
          <h2 id="contact-title">{copy.contactTitle}</h2>
          <p>{copy.contactText}</p>
          <a className="cta" aria-label="Send email to TransformIA" href={`mailto:${EMAIL}`}>{copy.cta}</a>
        </section>
      </main>

      <footer className="footer" aria-label="Footer">
        <img src="/logo-wordmark-light.svg" alt="TransformIA" className="footer-logo" />
        <p>{copy.footer}</p>
        <small>{copy.disclaimer}</small>
      </footer>
    </div>
  );
}
