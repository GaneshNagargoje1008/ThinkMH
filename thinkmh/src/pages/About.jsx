import React, { useEffect, useRef, useState } from "react";

// ─── DESIGN TOKENS ───────────────────────────────────────────────────────────
const C = {
  navy: "#0A1F44",
  blue: "#1A56DB",
  blueLight: "#2563EB",
  ice: "#EEF3FB",
  offwhite: "#F8FAFC",
  silver: "#E2E8F0",
  silverDark: "#CBD5E1",
  body: "#334155",
  muted: "#64748B",
  white: "#FFFFFF",
};

const F = {
  serif: "'Playfair Display', Georgia, 'Times New Roman', serif",
  sans: "'Inter', system-ui, -apple-system, sans-serif",
};

// ─── DATA ────────────────────────────────────────────────────────────────────
const STATS = [
  { value: 36, suffix: "", label: "Districts Covered" },
  { value: 350, suffix: "M+", label: "People. One State." },
  { value: 28, suffix: "%", label: "India's Industrial Output" },
  { value: 48, suffix: "+", label: "Research Reports" },
];

const WHAT_WE_DO = [
  {
    tag: "Research & Surveys",
    heading: "Primary research grounded in Maharashtra's ground realities",
    body: "We design and deploy rigorous surveys across urban, peri-urban, and rural Maharashtra — capturing sentiment, behaviour, and structural trends that secondary data misses.",
  },
  {
    tag: "Trackers & Dashboards",
    heading: "Continuous monitoring of policy, economy, and society",
    body: "Our live trackers follow key indicators — employment, investment, infrastructure, governance — updated on rolling cycles so decision-makers always have current intelligence.",
  },
  {
    tag: "Reports & Briefs",
    heading: "Publication-grade analysis for leaders and institutions",
    body: "From sector deep-dives to electoral analysis, our reports are structured for policymakers, journalists, and academics who need precise, citeable insight.",
  },
  {
    tag: "Media & Public Engagement",
    heading: "Translating data into public discourse",
    body: "ThinkMH bridges the gap between research and public conversation — through op-eds, media partnerships, and public briefings that make complex data accessible.",
  },
];

const APPROACH_STEPS = [
  {
    label: "Define",
    text: "Frame the right question before collecting a single data point. Every engagement begins with a scoping brief that aligns research objectives with decision-making needs.",
  },
  {
    label: "Collect",
    text: "Primary surveys, administrative records, economic datasets, and field observation — triangulated for reliability across Maharashtra's diverse geographies.",
  },
  {
    label: "Analyse",
    text: "Quantitative modelling paired with qualitative interpretation. We contextualise numbers within Maharashtra's historical, cultural, and political fabric.",
  },
  {
    label: "Publish",
    text: "Findings delivered in structured reports, interactive dashboards, and executive briefs — calibrated for each audience's level of engagement.",
  },
];

const PILLARS = [
  {
    title: "Rigour",
    body: "Every claim is traceable to a source. Our methodology notes accompany all publications, and we subject our work to external review before release.",
  },
  {
    title: "Independence",
    body: "ThinkMH operates without political affiliation. Our funding structure is designed to preserve editorial independence on all research outputs.",
  },
  {
    title: "Relevance",
    body: "We focus on questions that matter to Maharashtra now — not abstract academic puzzles. Timeliness and applicability are core editorial criteria.",
  },
  {
    title: "Accessibility",
    body: "Insight should not be locked behind paywalls or jargon. We publish open summaries of all major reports and maintain a free public data library.",
  },
];

const WHY_MH_POINTS = [
  {
    stat: "₹37L Cr",
    label: "State GDP",
    text: "Maharashtra contributes more to India's GDP than most countries contribute to their own — yet its internal diversity is rarely studied at the district level.",
  },
  {
    stat: "6",
    label: "Agro-climatic zones",
    text: "From Vidarbha's cotton belt to Konkan's coast, the state's variation makes it a microcosm of India — and demands region-specific, not state-averaged, analysis.",
  },
  {
    stat: "2",
    label: "of India's top 5 cities",
    text: "Mumbai and Pune are engines of national growth. Understanding their dynamics — migration, housing, employment — is essential to understanding urban India.",
  },
];

const TEAM = [
  {
    name: "Dr. Manasi Phadke",
    role: "Research Leadership",
    quals: null,
    initials: "MP",
    photo: "/ManasiPhadke.png",
    bio: [
      "Dr. Manasi Phadke leads ThinkMH's research agenda, bringing rigorous academic methodology to applied policy questions. Her work spans governance, public administration, and socio-economic analysis across Maharashtra.",
    ],
  },
  {
    name: "Vinayak Pachalag",
    role: "Founder, Director & CEO",
    quals: "M.Tech in AI · Electronics Engineer · Author · Media Strategist",
    initials: "VP",
    photo: "/vinayak.jpg",
    bio: [
      "With 150+ lectures and 2 books, Vinayak brings deep expertise in media, technology, and public engagement. He spearheaded award-winning campaigns including Amacha Tharalay and is a recipient of the Maharshi Narad Puraskar.",
      "He advises educational institutions and national innovation councils on policy, technology adoption, and public communication strategy.",
    ],
  },
];

const REPORTS = [
  {
    category: "Economic Intelligence",
    title: "Maharashtra Investment Climate Report 2024",
    date: "December 2024",
    summary: "A comprehensive assessment of FDI flows, sectoral investment trends, and regulatory environment across all 36 districts.",
  },
  {
    category: "Governance",
    title: "Urban Local Body Performance Index",
    date: "October 2024",
    summary: "Benchmarking service delivery, fiscal health, and citizen satisfaction across Maharashtra's 27 municipal corporations.",
  },
  {
    category: "Society",
    title: "Rural Maharashtra Sentiment Survey",
    date: "August 2024",
    summary: "Primary survey of 4,200 households across Vidarbha, Marathwada, and Western Maharashtra on livelihoods, migration, and aspirations.",
  },
];

const PARTNERS = [
  {
    name: "Think Bank",
    role: "Knowledge Partner",
    logo: "/Think Bank.png",
    url: "https://www.youtube.com/@ThinkBankLive",
  },
  {
    name: "Maharashtra First",
    role: "On-Ground Partner",
    logo: "/Maharashtra First Logo Virendra Patil Final 18 May.png",
    url: "", // Add official website if available
  },
  {
    name: "Pudhari",
    role: "Media Partner",
    logo: "/Pudhari.png",
    url: "https://pudhari.news/",
  },
];

// ─── GLOBAL RESPONSIVE STYLES ────────────────────────────────────────────────
const ResponsiveStyles = () => (
  <style>{`
    .tmh-container { width: 100%; max-width: 1100px; margin: 0 auto; padding: 0 24px; box-sizing: border-box; }
    .tmh-grid-2 { display: grid; grid-template-columns: 1fr; gap: 40px; }
    .tmh-grid-3 { display: grid; grid-template-columns: 1fr; gap: 32px; }
    .tmh-grid-4 { display: grid; grid-template-columns: 1fr; gap: 32px; }
    
    .tmh-wwd-card { padding: 24px 0; border-bottom: 1px solid ${C.silver}; }
    .tmh-team-card { display: flex; flex-direction: column; gap: 24px; padding: 32px 0; border-bottom: 1px solid ${C.silver}; }
    .tmh-report-card { display: flex; flex-direction: column; gap: 8px; padding: 24px 0; border-bottom: 1px solid ${C.silver}; cursor: pointer; transition: opacity 0.2s; }
    .tmh-report-card:hover { opacity: 0.8; }

    @media (min-width: 640px) {
      .tmh-grid-3 { grid-template-columns: repeat(2, 1fr); }
      .tmh-grid-4 { grid-template-columns: repeat(2, 1fr); }
    }

    @media (min-width: 768px) {
      .tmh-grid-2 { grid-template-columns: repeat(2, 1fr); gap: 64px; }
      .tmh-team-card { flex-direction: row; gap: 40px; }
      .tmh-team-card.reverse { flex-direction: row-reverse; }
      .tmh-report-card { flex-direction: row; gap: 48px; }
      .tmh-report-left { width: 160px; flex-shrink: 0; }
    }

    @media (min-width: 1024px) {
      .tmh-grid-3 { grid-template-columns: repeat(3, 1fr); }
      .tmh-grid-4 { grid-template-columns: repeat(4, 1fr); }
      .tmh-wwd-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0 64px; }
      .tmh-wwd-card-0, .tmh-wwd-card-2 { padding-right: 32px; border-right: 1px solid ${C.silver}; }
      .tmh-wwd-card-1, .tmh-wwd-card-3 { padding-left: 32px; }
    }
  `}</style>
);

// ─── UTILITY COMPONENTS ──────────────────────────────────────────────────────
const Eyebrow = ({ children, center }) => (
  <p style={{
    fontFamily: F.sans,
    fontSize: "11px",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: C.blue,
    fontWeight: 700,
    margin: "0 0 16px",
    textAlign: center ? "center" : "left",
  }}>
    {children}
  </p>
);

const SectionHeading = ({ children, center }) => (
  <h2 style={{
    fontFamily: F.serif,
    fontSize: "clamp(28px, 4vw, 38px)",
    fontWeight: 700,
    color: C.navy,
    margin: "0 0 24px",
    letterSpacing: "-0.5px",
    lineHeight: 1.2,
    textAlign: center ? "center" : "left",
  }}>
    {children}
  </h2>
);

const HairlineRule = ({ margin = "0 0 40px", color = C.silver }) => (
  <div style={{ width: "100%", height: "1px", background: color, margin }} />
);

// ─── ANIMATED COUNTER ────────────────────────────────────────────────────────
const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const steps = 40;
          const interval = duration / steps;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            setCount(Math.round((target * step) / steps));
            if (step >= steps) clearInterval(timer);
          }, interval);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>
      {count}{suffix}
    </span>
  );
};

const MemberPhoto = ({ photo, initials, name }) => {
  const [err, setErr] = useState(false);
  const baseStyle = {
    width: 120,
    height: 120,
    borderRadius: "50%",
    flexShrink: 0,
    border: `1px solid ${C.silverDark}`,
  };

  if (!photo || err) {
    return (
      <div style={{
        ...baseStyle,
        background: C.ice,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 28,
        fontWeight: 600,
        color: C.blue,
        fontFamily: F.serif,
      }}>
        {initials}
      </div>
    );
  }
  return (
    <img src={photo} alt={name} onError={() => setErr(true)} style={{ ...baseStyle, objectFit: "cover" }} />
  );
};

// ─── SECTIONS ────────────────────────────────────────────────────────────────
const Hero = () => (
  <section style={{ background: C.navy, padding: "120px 0 0", position: "relative" }}>
    <div className="tmh-container">
      <Eyebrow>Maharashtra · Research · Intelligence</Eyebrow>
      <h1 style={{
        fontFamily: F.serif,
        fontSize: "clamp(38px, 6vw, 64px)",
        fontWeight: 700,
        color: C.white,
        margin: "0 0 24px",
        lineHeight: 1.15,
        letterSpacing: "-1px",
        maxWidth: 850,
      }}>
        Understanding Maharashtra <span style={{ color: "#93B4F0", fontStyle: "italic" }}>through evidence.</span>
      </h1>
      <p style={{
        fontFamily: F.sans,
        fontSize: "clamp(16px, 2vw, 19px)",
        color: "rgba(255,255,255,0.75)",
        lineHeight: 1.7,
        maxWidth: 640,
        margin: "0 0 72px",
      }}>
        ThinkMH is Maharashtra's dedicated data and insights platform — producing high-fidelity research, state-wide surveys, structural trackers, and policy briefs that inform governance, industrial strategy, and civic discourse.
      </p>
    </div>

    {/* Stat Banner */}
    <div style={{ background: C.blue, padding: "40px 0", borderTop: `1px solid rgba(255,255,255,0.1)` }}>
      <div className="tmh-container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "32px" }}>
          {STATS.map((s) => (
            <div key={s.label}>
              <div style={{
                fontFamily: F.serif,
                fontSize: "clamp(32px, 4vw, 44px)",
                fontWeight: 700,
                color: C.white,
                lineHeight: 1,
                marginBottom: 8,
              }}>
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div style={{
                fontFamily: F.sans,
                fontSize: "11px",
                color: "rgba(255,255,255,0.75)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const WhatWeDo = () => (
  <section style={{ background: C.white, padding: "100px 0" }}>
    <div className="tmh-container">
      <Eyebrow>What We Do</Eyebrow>
      <SectionHeading>Research tailored to the subcontinent's engine</SectionHeading>
      <HairlineRule margin="0 0 16px" />
      <div className="tmh-wwd-grid">
        {WHAT_WE_DO.map((item, i) => (
          <div key={item.tag} className={`tmh-wwd-card tmh-wwd-card-${i}`}>
            <p style={{
              fontFamily: F.sans,
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: C.blue,
              fontWeight: 700,
              margin: "0 0 12px",
            }}>
              {item.tag}
            </p>
            <h3 style={{
              fontFamily: F.serif,
              fontSize: "20px",
              fontWeight: 700,
              color: C.navy,
              margin: "0 0 14px",
              lineHeight: 1.4,
            }}>
              {item.heading}
            </h3>
            <p style={{
              fontFamily: F.sans,
              fontSize: "14.5px",
              color: C.body,
              lineHeight: 1.7,
              margin: 0,
            }}>
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const OurApproach = () => (
  <section style={{ background: C.offwhite, padding: "100px 0" }}>
    <div className="tmh-container">
      <div className="tmh-grid-2">
        <div>
          <Eyebrow>Our Methodology</Eyebrow>
          <SectionHeading>A highly disciplined approach to policy issues</SectionHeading>
          <p style={{
            fontFamily: F.sans,
            fontSize: "15px",
            color: C.muted,
            lineHeight: 1.75,
            margin: 0,
          }}>
            ThinkMH combines academic empirical frameworks with agile research deployment execution. This ensures our publications survive rigorous external peer review while arriving in time to guide strategic decisions.
          </p>
        </div>
        <div>
          {APPROACH_STEPS.map((step, i) => (
            <div key={step.label} style={{
              display: "flex",
              gap: 24,
              paddingBottom: 24,
              marginBottom: 24,
              borderBottom: i < APPROACH_STEPS.length - 1 ? `1px solid ${C.silver}` : "none",
            }}>
              <div style={{
                fontFamily: F.sans,
                fontSize: "11px",
                fontWeight: 700,
                color: C.blue,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                width: 64,
                flexShrink: 0,
                paddingTop: 3,
              }}>
                {step.label}
              </div>
              <p style={{
                fontFamily: F.sans,
                fontSize: "14.5px",
                color: C.body,
                lineHeight: 1.65,
                margin: 0,
              }}>
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const WhyMaharashtra = () => (
  <section style={{ background: C.navy, padding: "100px 0" }}>
    <div className="tmh-container">
      <Eyebrow>Why Maharashtra</Eyebrow>
      <SectionHeading><span style={{ color: C.white }}>India's most consequential state — and its most under-analysed.</span></SectionHeading>
      <HairlineRule margin="0 0 48px" color="rgba(255,255,255,0.15)" />
      <div className="tmh-grid-3">
        {WHY_MH_POINTS.map((pt) => (
          <div key={pt.label} style={{ paddingRight: 16 }}>
            <div style={{
              fontFamily: F.serif,
              fontSize: "clamp(30px, 3vw, 36px)",
              fontWeight: 700,
              color: "#93B4F0",
              lineHeight: 1.1,
              marginBottom: 6,
            }}>
              {pt.stat}
            </div>
            <div style={{
              fontFamily: F.sans,
              fontSize: "11px",
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 16,
              fontWeight: 600,
            }}>
              {pt.label}
            </div>
            <p style={{
              fontFamily: F.sans,
              fontSize: "14px",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.7,
              margin: 0,
            }}>
              {pt.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Values = () => (
  <section style={{ background: C.white, padding: "100px 0" }}>
    <div className="tmh-container">
      <Eyebrow>Our Principles</Eyebrow>
      <SectionHeading>What guides every piece of work we publish</SectionHeading>
      <HairlineRule margin="0 0 56px" />
      <div className="tmh-grid-4">
        {PILLARS.map((p) => (
          <div key={p.title}>
            <div style={{ width: 32, height: 2, background: C.blue, marginBottom: 20 }} />
            <h3 style={{
              fontFamily: F.serif,
              fontSize: "20px",
              fontWeight: 700,
              color: C.navy,
              margin: "0 0 12px",
            }}>
              {p.title}
            </h3>
            <p style={{
              fontFamily: F.sans,
              fontSize: "14px",
              color: C.body,
              lineHeight: 1.65,
              margin: 0,
            }}>
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TeamSection = () => (
  <section style={{ background: C.offwhite, padding: "100px 0" }}>
    <div className="tmh-container">
      <Eyebrow>Leadership</Eyebrow>
      <SectionHeading>Editorial & Research Leadership</SectionHeading>
      <HairlineRule />
      {TEAM.map((member, i) => (
        <div key={member.name} className={`tmh-team-card ${i % 2 !== 0 ? "reverse" : ""}`}>
          <MemberPhoto photo={member.photo} initials={member.initials} name={member.name} />
          <div style={{ flex: 1 }}>
            <h3 style={{
              fontFamily: F.serif,
              fontSize: "24px",
              fontWeight: 700,
              color: C.navy,
              margin: "0 0 4px",
            }}>
              {member.name}
            </h3>
            <p style={{
              fontFamily: F.sans,
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: C.blue,
              fontWeight: 700,
              margin: "0 0 12px",
            }}>
              {member.role}
            </p>
            {member.quals && (
              <p style={{
                fontFamily: F.sans,
                fontSize: "13px",
                color: C.muted,
                margin: "0 0 16px",
                borderLeft: `2px solid ${C.blue}`,
                paddingLeft: 12,
                lineHeight: 1.4,
              }}>
                {member.quals}
              </p>
            )}
            {member.bio.map((para, j) => (
              <p key={j} style={{
                fontFamily: F.sans,
                fontSize: "14.5px",
                color: C.body,
                lineHeight: 1.75,
                margin: j > 0 ? "12px 0 0" : 0,
              }}>
                {para}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const LatestReports = () => (
  <section style={{ background: C.white, padding: "100px 0" }}>
    <div className="tmh-container">
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        flexWrap: "wrap",
        gap: 16,
      }}>
        <div>
          <Eyebrow>Publications</Eyebrow>
          <SectionHeading>Latest research & briefs</SectionHeading>
        </div>
        <a href="#" style={{
          fontFamily: F.sans,
          fontSize: "13px",
          color: C.blue,
          fontWeight: 600,
          textDecoration: "none",
          borderBottom: `1px solid ${C.blue}`,
          paddingBottom: 2,
        }}>
          View all reports →
        </a>
      </div>
      <HairlineRule margin="24px 0 0" />
      {REPORTS.map((r) => (
        <div key={r.title} className="tmh-report-card">
          <div className="tmh-report-left">
            <p style={{
              fontFamily: F.sans,
              fontSize: "11px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: C.blue,
              fontWeight: 700,
              margin: "0 0 4px",
            }}>
              {r.category}
            </p>
            <p style={{ fontFamily: F.sans, fontSize: "13px", color: C.muted, margin: 0 }}>
              {r.date}
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <h4 style={{
              fontFamily: F.serif,
              fontSize: "19px",
              fontWeight: 700,
              color: C.navy,
              margin: "0 0 8px",
              lineHeight: 1.35,
            }}>
              {r.title}
            </h4>
            <p style={{
              fontFamily: F.sans,
              fontSize: "14.5px",
              color: C.body,
              lineHeight: 1.65,
              margin: 0,
            }}>
              {r.summary}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Partners = () => (
  <section
    style={{
      background: C.ice,
      padding: "90px 0",
    }}
  >
    <div className="tmh-container">

      <Eyebrow center>Our Partners</Eyebrow>

      <p
        style={{
          fontFamily: F.sans,
          fontSize: "15px",
          color: C.muted,
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto 60px",
          lineHeight: 1.75,
        }}
      >
        ThinkMH works with institutions, media organizations and strategic
        partners to deliver evidence-based research, public engagement and
        impactful governance initiatives across Maharashtra.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "80px",
          flexWrap: "wrap",
        }}
      >
        {PARTNERS.map((partner) => (
          <a
            key={partner.name}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              textAlign: "center",
              transition: "0.3s ease",
              color: C.navy,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <img
              src={partner.logo}
              alt={partner.name}
              style={{
                height: "70px",
                width: "180px",
                objectFit: "contain",
                filter: "grayscale(100%)",
                transition: "0.3s ease",
                marginBottom: "18px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "grayscale(0%)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "grayscale(100%)";
              }}
            />

            <div
              style={{
                fontFamily: F.serif,
                fontSize: "17px",
                fontWeight: 600,
                color: C.navy,
              }}
            >
              {partner.name}
            </div>

            <div
              style={{
                marginTop: "6px",
                fontFamily: F.sans,
                fontSize: "13px",
                color: C.muted,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {partner.role}
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);



// ─── PAGE ENTRY ──────────────────────────────────────────────────────────────
const AboutUs = () => (
  <div style={{ fontFamily: F.sans, overflowX: "hidden", color: C.body, background: C.white }}>
    <ResponsiveStyles />
    <Hero />
    <WhatWeDo />
    <OurApproach />
    <WhyMaharashtra />
    <Values />
    <TeamSection />
    <LatestReports />
    <Partners />
    
  </div>
);

export default AboutUs;