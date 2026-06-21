/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Job, QuizQuestion } from "./types";

export const INITIAL_JOBS: Job[] = [
  {
    id: "dev-web",
    name: "Software & Web Developer",
    category: "Technology & IT",
    riskScore: 65,
    humanSynergyScore: 85,
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&h=450&q=80",
    summary: "AI excels at generating code blocks, writing templates, and debugging basic logic. However, designing complex system architectures, deeply understanding client business requirements, and driving true framework innovations remain profoundly human endeavors.",
    tasks: [
      {
        name: "Boilerplate and basic coding",
        category: "Automated",
        description: "Generated instantly by code assistants like Copilot or Gemini."
      },
      {
        name: "Debugging and refactoring",
        category: "Augmented",
        description: "AI proposes fixes and optimization alternatives, while the developer validates logical coherence, security, and integration."
      },
      {
        name: "System architecture and user design",
        category: "Human-Only",
        description: "Defining global system architecture, scaling strategy, cybersecurity layers, and interactive product experience."
      }
    ],
    highRiskExamples: [
      "Building simple static websites or basic landing pages with no custom backbones.",
      "Writing repetitive automation scripts or routine layout containers."
    ],
    humanSuperpowers: [
      "Systemic thinking (designing resilient enterprise infrastructure).",
      "Social intelligence (translating emotional, abstract business needs into real-world code architecture)."
    ],
    guidanceToPivot: [
      "Become an 'augmented developer' by masterfully prompting and orchestrating AI agents.",
      "Shift towards Product Management, High-Stakes Custom Architectures, or Cyber-Risk Auditing."
    ],
    keyStats: [
      { label: "Developer productivity boost via AI", value: "+35% to +50%" },
      { label: "Active developer adoption rate", value: "92%" },
      { label: "Core software written by AI initially", value: "46%" },
      { label: "Increase in custom architecture jobs", value: "+18%" }
    ],
    skillsRadar: {
      empathy: 45,
      creativity: 85,
      dexterity: 15,
      criticalThinking: 95,
      managementOrLeadership: 70
    },
    salaryProjection: {
      medianSalary: "$124,200 per Year",
      growthRate2030: "+25% (Highly stable for seniors)",
      remoteViability: "98% (Extremely high)"
    }
  },
  {
    id: "avocat",
    name: "Corporate Lawyer",
    category: "Legal & Compliance",
    riskScore: 45,
    humanSynergyScore: 80,
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&h=450&q=80",
    summary: "Large Language Models can index thousands of case laws and review lengthy standard contracts in seconds. However, strategic court litigation, emotional client guidance, and high-stakes multi-party deal negotiations require unique human traits.",
    tasks: [
      {
        name: "Case law research and citation mining",
        category: "Automated",
        description: "AI finds relevant judicial precedents and lists legal sources instantly."
      },
      {
        name: "Drafting standard contract templates",
        category: "Augmented",
        description: "AI generates initial non-disclosure or service agreements, which lawyers then customize for high-risk details."
      },
      {
        name: "Courtroom advocacy and strategic dispute resolution",
        category: "Human-Only",
        description: "Pleading in front of a jury, reading emotional cues, and orchestrating delicate corporate settlements."
      }
    ],
    highRiskExamples: [
      "Sifting manually through static archives for basic precedent matches.",
      "Reviewing repetitive boilerplate standard leasing contracts."
    ],
    humanSuperpowers: [
      "Persuasive verbal rhetoric and courtroom psychological intuition.",
      "Complex ethical judgment in high-stakes regulatory loopholes."
    ],
    guidanceToPivot: [
      "Leverage specialized legal-tech AI engines to cut down review times, allowing you to handle more active clients.",
      "Develop skills in international arbitration, complex digital regulatory compliance (like AI Ethics and Data Privacy)."
    ],
    keyStats: [
      { label: "Reduction in document review time", value: "-60%" },
      { label: "Share of legal tasks assistable by LLMs", value: "44%" },
      { label: "Accuracy improvement in contract analysis", value: "+32%" },
      { label: "Client satisfaction under hybrid advisory", value: "+40%" }
    ],
    skillsRadar: {
      empathy: 75,
      creativity: 60,
      dexterity: 10,
      criticalThinking: 95,
      managementOrLeadership: 85
    },
    salaryProjection: {
      medianSalary: "$135,800 per Year",
      growthRate2030: "+10% (Client-centric only)",
      remoteViability: "45% (Partial/Hybrid)"
    }
  },
  {
    id: "financier",
    name: "Financial Analyst",
    category: "Finance & Banking",
    riskScore: 70,
    humanSynergyScore: 75,
    imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&h=450&q=80",
    summary: "AI systems are exceptionally powerful at compiling historical cash flows, preparing standard balance sheet models, and running quantitative simulations. Human analysts are evolving into strategic partners who interpret erratic market sentiment and build client trusts.",
    tasks: [
      {
        name: "Spreadsheet mathematical forecasting",
        category: "Automated",
        description: "Run instantly by automated predictive quantitative financial engines."
      },
      {
        name: "Synthesizing earnings call transcripts",
        category: "Augmented",
        description: "AI summarizes key bullet points and identifies anomalies; the analyst examines corporate credibility."
      },
      {
        name: "Advising executives on mergers and acquisitions",
        category: "Human-Only",
        description: "Negotiating delicate terms, aligning conflicting board member goals, and evaluating unquantifiable risk profiles."
      }
    ],
    highRiskExamples: [
      "Calculating standard financial ratios (liquidity, debt-to-equity) from historical PDFs.",
      "Creating routine bi-weekly investment portfolio status reports."
    ],
    humanSuperpowers: [
      "Nuanced reading of market panic or euphoria that defy mathematical logic.",
      "Strategic interpersonal diplomacy and personal advisory relationships."
    ],
    guidanceToPivot: [
      "Position yourself as an investment strategist rather than a quantitative data-gatherer.",
      "Focus on wealth management, venture capital relationships, or sustainable green finance governance."
    ],
    keyStats: [
      { label: "AI automation of repetitive reports", value: "85%" },
      { label: "Productivity gain in investment research", value: "+40%" },
      { label: "Quantitative forecast speedup", value: "15x faster" },
      { label: "Shift toward relation-driven consultancy", value: "+55%" }
    ],
    skillsRadar: {
      empathy: 50,
      creativity: 55,
      dexterity: 10,
      criticalThinking: 90,
      managementOrLeadership: 75
    },
    salaryProjection: {
      medianSalary: "$96,600 per Year",
      growthRate2030: "+6% (High shift to consulting)",
      remoteViability: "80% (High)"
    }
  },
  {
    id: "medecin",
    name: "General Practitioner / Doctor",
    category: "Healthcare",
    riskScore: 20,
    humanSynergyScore: 90,
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&h=450&q=80",
    summary: "While AI excels at checking diagnostic symptoms and cross-referencing rare medical literature, holistic human healing relies completely on trust, hands-on diagnostics, interdisciplinary care coordination, and the compassionate delivery of life-altering health news.",
    tasks: [
      {
        name: "Cross-referencing rare disease symptoms",
        category: "Automated",
        description: "AI indexes biomedical papers to highlight potential causes for complex symptoms."
      },
      {
        name: "Preparing patient intake summaries",
        category: "Augmented",
        description: "Voice recorders transcribing patient symptoms and auto-drafting standard clinical files for the doctor's review."
      },
      {
        name: "Holistic empathy and clinical medical decisions",
        category: "Human-Only",
        description: "Performing physical examinations, guiding patients through tough personal journeys, and coordinating surgical care."
      }
    ],
    highRiskExamples: [
      "Filling administrative clinical registries and medical insurance templates.",
      "Answering basic first-level symptom questions online."
    ],
    humanSuperpowers: [
      "Connecting with scared patients on a deeply compassionate psychological level.",
      "Making ethical, time-pressured decisions in fluid medical emergencies."
    ],
    guidanceToPivot: [
      "Shift from screen administrative work and dedicate saved time directly to personalized bedside care.",
      "Lead collaborative digital health systems or participate in community-focused preventive healthcare programs."
    ],
    keyStats: [
      { label: "Medical administrative time reduction", value: "-45%" },
      { label: "Diagnostic accuracy improvement (Human + AI)", value: "98.2%" },
      { label: "Patient follow-up fidelity boost", value: "+65%" },
      { label: "Preventive consultation duration", value: "+30%" }
    ],
    skillsRadar: {
      empathy: 95,
      creativity: 65,
      dexterity: 80,
      criticalThinking: 95,
      managementOrLeadership: 85
    },
    salaryProjection: {
      medianSalary: "$229,300 per Year",
      growthRate2030: "+15% (Extremely stable)",
      remoteViability: "15% (Very low)"
    }
  },
  {
    id: "designer-graphique",
    name: "Creative Graphic Designer",
    category: "Design & Creative Arts",
    riskScore: 60,
    humanSynergyScore: 85,
    imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&h=450&q=80",
    summary: "Generative AI engines (Midjourney, DALL-E) produce high-fidelity imagery from simple text cues in seconds. The modern graphic designer shifts from a pure pixel producer to an art mastermind, director of brand narratives, and visual strategist.",
    tasks: [
      {
        name: "Generating stock illustrations and mockups",
        category: "Automated",
        description: "Produced in real-time, customizable with countless iterations via image generation technology."
      },
      {
        name: "Creating social media content variables",
        category: "Augmented",
        description: "AI designs dozens of sizes and color variants from one master direction set by the designer."
      },
      {
        name: "Shaping cohesive brand identities and strategy",
        category: "Human-Only",
        description: "Synthesizing cultural subtext, brand emotional pillars, and target customer psychology into complex visuals."
      }
    ],
    highRiskExamples: [
      "Cropping images, removing simple background layouts, and arranging basic font banners.",
      "Producing repetitive template ads for social media campaigns."
    ],
    humanSuperpowers: [
      "Conceptual disruption (creating wild styles that defy current algorithms trained on past data).",
      "Translating subjective, messy client design reviews into powerful brand guidelines."
    ],
    guidanceToPivot: [
      "Evolve into an 'AI Art Director', guiding prompt operations and orchestrating layout generators to 10x output speed.",
      "Upskill in specialized User Experience (UX/UI) design, 3D gaming worlds, or spatial virtual environments."
    ],
    keyStats: [
      { label: "Typical imagery output speedup", value: "10x speed" },
      { label: "Share of designers leveraging GenAI regularly", value: "79%" },
      { label: "Iterative variant generation speed", value: "+120%" },
      { label: "Demand for AI Art Direction profiles", value: "+45%" }
    ],
    skillsRadar: {
      empathy: 65,
      creativity: 98,
      dexterity: 40,
      criticalThinking: 75,
      managementOrLeadership: 60
    },
    salaryProjection: {
      medianSalary: "$58,900 per Year",
      growthRate2030: "+3% (Custom design explosion)",
      remoteViability: "90% (Extremely high)"
    }
  },
  {
    id: "service-client",
    name: "Customer Support Agent",
    category: "Customer Relations & Sales",
    riskScore: 80,
    humanSynergyScore: 40,
    imageUrl: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=600&h=450&q=80",
    summary: "First-level tickets (package tracking, generic returns) are handled natively by conversational LLM agents. Human agents focus on complex, high-friction cases, crisis escalation, and building premium accounts satisfaction.",
    tasks: [
      {
        name: "Resolving repetitive support queries",
        category: "Automated",
        description: "LLM agents reply to standard inquiries instantly 24/7 with perfect catalogue accuracy."
      },
      {
        name: "Drafting custom email responses",
        category: "Automated",
        description: "AI prepares tailored emails based on past interactions, leaving only validation to humans."
      },
      {
        name: "De-escalating severe customer frustration",
        category: "Human-Only",
        description: "Calming upset users requires deep patience, genuine relational trust, and active communication."
      }
    ],
    highRiskExamples: [
      "Answering tickets by copying and pasting fixed standard responses.",
      "Dispatching or routing requests based on a rigid static guide."
    ],
    humanSuperpowers: [
      "Sincere crisis resolution and active emotional sensing.",
      "Bending rigid product guidelines sensible in unique scenarios to salvage high-value users."
    ],
    guidanceToPivot: [
      "Move up to high-stakes enterprise Customer Success and VIP account management.",
      "Transition to training and supervising custom customer support AI databases (Conversational Designer / AI Supervisor)."
    ],
    keyStats: [
      { label: "Decline in manual support ticket volume", value: "-60%" },
      { label: "First-contact automated resolution speed", value: "Instant" },
      { label: "Customer satisfaction growth (hybrid)", value: "+25%" },
      { label: "Demand for AI Supervisor specialists", value: "+110%" }
    ],
    skillsRadar: {
      empathy: 90,
      creativity: 50,
      dexterity: 15,
      criticalThinking: 70,
      managementOrLeadership: 45
    },
    salaryProjection: {
      medianSalary: "$43,100 per Year",
      growthRate2030: "-12% (Focus moves to AI Supervision)",
      remoteViability: "95% (High)"
    }
  },
  {
    id: "agricultueur",
    name: "Precision Agriculturist / Farmer",
    category: "Agriculture & Environment",
    riskScore: 15,
    humanSynergyScore: 80,
    imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&h=450&q=80",
    summary: "AI systems analyze satellite images to predict crop fields yield or spot pest outbreaks. However, physical crop management, on-farm machinery troubleshooting in muddy, unpredictable conditions, and soil adaptation remain deeply human physical endeavors.",
    tasks: [
      {
        name: "Analyzing soil nutrient satellite maps",
        category: "Automated",
        description: "Algorithms process automated multispectral data to recommend exact nitrogen mixtures."
      },
      {
        name: "Monitoring irrigation scheduling",
        category: "Augmented",
        description: "Sensory probes coordinate with weather models through AI to automate optimal water flow, supervised by the farm manager."
      },
      {
        name: "Unstructured physical farm operations",
        category: "Human-Only",
        description: "Fixing custom tractor motor pipes in unpredictable storms, pruning fragile fruit orchards, responding to real-time nature events."
      }
    ],
    highRiskExamples: [
      "Manually calculating crop irrigation logs on raw notebooks.",
      "Running routine manual weed counting cycles on smaller fields."
    ],
    humanSuperpowers: [
      "Extraordinary spatial adaptiveness in unstructured organic environments.",
      "Intuitively reading seasonal micro-shifts of weather, wildlife behavior, and soil smell."
    ],
    guidanceToPivot: [
      "Adopt precision agriculture technologies (drones, soil sensors) to scale your crop yields safely.",
      "Focus on sustainable permaculture, regenerative soil designs, or boutique organic farming systems."
    ],
    keyStats: [
      { label: "Crop yield optimization using AI data", value: "+20% to +35%" },
      { label: "Risk score for physical on-farm labor replacement", value: "6%" },
      { label: "Irrigation water waste reductions", value: "-40%" },
      { label: "Precision monitoring adoption rate", value: "58%" }
    ],
    skillsRadar: {
      empathy: 40,
      creativity: 60,
      dexterity: 85,
      criticalThinking: 80,
      managementOrLeadership: 70
    },
    salaryProjection: {
      medianSalary: "$73,500 per Year",
      growthRate2030: "+8% (High for technical systems)",
      remoteViability: "5% (Requires physical presence)"
    }
  },
  {
    id: "electricien",
    name: "Licensed Electrician / Plumber",
    category: "Trades & Crafts",
    riskScore: 5,
    humanSynergyScore: 30,
    imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&h=450&q=80",
    summary: "One of the absolute purest proofs of Moravec's Paradox: logical calculations are cheap for computers, but fine tactile coordination, structural troubleshooting, and navigation in chaotic, unpredictable custom home structures are incredibly hard to replicate.",
    tasks: [
      {
        name: "Drafting invoices and scheduling routes",
        category: "Automated",
        description: "Handled seamlessly by standard cloud invoicing software."
      },
      {
        name: "Diagnosing visual pipe leaks",
        category: "Augmented",
        description: "AI analyses a smartphone picture of a leaking connection and lists the exact replacement parts required."
      },
      {
        name: "Physical installation and high-danger troubleshooting",
        category: "Human-Only",
        description: "Squeezing into narrow attic spaces, pulling complex wires through fragile historical frames, adapting in real-time."
      }
    ],
    highRiskExamples: [
      "Registering billing invoices manually on carbon spreadsheets.",
      "Filing regular logistics supply counts by hand."
    ],
    humanSuperpowers: [
      "Flawless tactile motor controls in organic, dark, messy environments.",
      "Safely managing hazardous electrical situations in real-time."
    ],
    guidanceToPivot: [
      "Let AI tools automate your admin, client calls, and schedules so you stay focused on premium on-site repairs.",
      "Upskill in installing energy-efficient green tech: smart grids, solar panels, EV charging systems."
    ],
    keyStats: [
      { label: "Long-term job replacement risk index", value: "< 5%" },
      { label: "Shortage of certified hands-on technicians", value: "Critical" },
      { label: "Appraisal scheduling speedup", value: "+60%" },
      { label: "Wage premium for green IoT experts", value: "+15%" }
    ],
    skillsRadar: {
      empathy: 60,
      creativity: 65,
      dexterity: 95,
      criticalThinking: 85,
      managementOrLeadership: 55
    },
    salaryProjection: {
      medianSalary: "$61,500 per Year",
      growthRate2030: "+12% (Exceptional demand)",
      remoteViability: "2% (In-Person required)"
    }
  },
  {
    id: "drh",
    name: "Human Resources Manager",
    category: "Management & HR",
    riskScore: 30,
    humanSynergyScore: 85,
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&h=450&q=80",
    summary: "AI chatbots handle first-level staff FAQs and scan resumes for keywords. But resolving toxic office conflicts, conducting high-stakes executive hiring, supporting stressed workers, and designing rich corporate cultures depend entirely on psychological depth.",
    tasks: [
      {
        name: "Screening initial resumes for keywords",
        category: "Automated",
        description: "AI filters thousands of standardized CVs based on background benchmarks."
      },
      {
        name: "Drafting customized internal policy documentation",
        category: "Augmented",
        description: "AI drafts initially localized regulations and compliance rules, parsed and adjusted by HR managers."
      },
      {
        name: "Mediating toxic workplace conflicts and coaching leaders",
        category: "Human-Only",
        description: "Engaging in active psychological listening, identifying unsaid team tensions, and building strong collaborative cultures."
      }
    ],
    highRiskExamples: [
      "Reading piles of standard CVs on spreadsheets looking for basic years-of-experience markers.",
      "Answering basic questions about holiday allocations or pay dates."
    ],
    humanSuperpowers: [
      "Deep emotional intelligence, reading subtle expressions and body signals.",
      "Sincere ethical empathy in personal worker health crises."
    ],
    guidanceToPivot: [
      "Use AI screening tools as basic sorting assistants, and redirect saved time into mentoring employees.",
      "Become an expert in organizational cultural psychology, workplace wellness design, and change management."
    ],
    keyStats: [
      { label: "Reduction in candidate screening times", value: "-75%" },
      { label: "Employee retention boost from human-led HR", value: "2x" },
      { label: "Onboarding compliance error rates", value: "-90%" },
      { label: "Organizational development budget growth", value: "+14%" }
    ],
    skillsRadar: {
      empathy: 95,
      creativity: 75,
      dexterity: 10,
      criticalThinking: 80,
      managementOrLeadership: 90
    },
    salaryProjection: {
      medianSalary: "$130,000 per Year",
      growthRate2030: "+7% (High pivot to human coaching)",
      remoteViability: "70% (Hybrid preferred)"
    }
  },
  {
    id: "mecanicien",
    name: "Automotive Repair Mechanic",
    category: "Trades & Crafts",
    riskScore: 10,
    humanSynergyScore: 70,
    imageUrl: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=600&h=450&q=80",
    summary: "AI systems diagnose engine failures instantly through sensory microphone notes or OBD diagnostic codes. The active physical replacement, custom weld, and complex tool maneuver within a cluttered, dirty car frame remain highly safe human manual feats.",
    tasks: [
      {
        name: "Reading on-board diagnostic (OBD) logs",
        category: "Automated",
        description: "AI instantly translates check-engine error flashes into clear component repair guides."
      },
      {
        name: "Diagnosing anomalous engine sound tracks",
        category: "Augmented",
        description: "AI compares active engine sound clips to database lists to identify potential fan-belt slippage."
      },
      {
        name: "Tactile removal and installation of complex metal components",
        category: "Human-Only",
        description: "Removing rusted bolts in narrow engine bays, managing delicate custom electrical welds."
      }
    ],
    highRiskExamples: [
      "Manually researching engine component manuals for hours looking for basic torque values."
    ],
    humanSuperpowers: [
      "Superb hand-eye coordination under unpredictable physical conditions.",
      "Real-time tactile physical adaptability."
    ],
    guidanceToPivot: [
      "Become an advanced electric and hybrid vehicle (EV) specialist, mastering modern software sensors and battery calibrations.",
      "Automate booking operations via simple calendars to spend maximum time on physical repairs."
    ],
    keyStats: [
      { label: "Diagnostic failure pinpointing timesaving", value: "-50%" },
      { label: "Projected need for certified EV technician specialists", value: "+120%" },
      { label: "Manual parts inventory overhead decrease", value: "-35%" },
      { label: "Hourly diagnostic rate premium", value: "+25%" }
    ],
    skillsRadar: {
      empathy: 45,
      creativity: 55,
      dexterity: 90,
      criticalThinking: 80,
      managementOrLeadership: 50
    },
    salaryProjection: {
      medianSalary: "$47,900 per Year",
      growthRate2030: "+4% (Steep premium for EV tech certifications)",
      remoteViability: "5% (On-site required)"
    }
  },
  {
    id: "educateur",
    name: "Educator / Professor",
    category: "Education",
    riskScore: 25,
    humanSynergyScore: 95,
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&h=450&q=80",
    summary: "AI adapts easily as a personalized homework tutor, drafting tailored test questions or summarizing complex history topics. But actual teachers inspire lifelong curiosity, support children's emotional needs, and instill community values.",
    tasks: [
      {
        name: "Drafting classroom quiz banks and summaries",
        category: "Automated",
        description: "AI creates quizzes calibrated for distinct reading comprehension standards in seconds."
      },
      {
        name: "Providing basic homework guidance",
        category: "Augmented",
        description: "AI engines explain difficult calculus concepts using personal examples customized to the pupil's hobbies."
      },
      {
        name: "Inspirational tutoring and emotional guidance",
        category: "Human-Only",
        description: "Instilling critical thinking, resolving classroom social behaviors, and motivating children during domestic challenges."
      }
    ],
    highRiskExamples: [
      "Grading standard multiple-choice quiz questions manually.",
      "Reciting static presentation texts with zero interactive questions."
    ],
    humanSuperpowers: [
      "Pedagogical empathy, detecting subtle student anxiety or domestic blocks.",
      "Creating fun, active physical collaborative learning play spaces."
    ],
    guidanceToPivot: [
      "Offload lesson schedules and exercise creation to AI, doubling down on active student workshops.",
      "Train in project-based instruction, emotional-intelligence mentoring, and special needs education."
    ],
    keyStats: [
      { label: "Administrative lesson planning time saved", value: "-10 hours/week" },
      { label: "Comparative student success under hybrid learning", value: "2x higher" },
      { label: "Special-needs tailored curriculum density", value: "+70%" },
      { label: "Teacher retention rate using co-pilots", value: "+35%" }
    ],
    skillsRadar: {
      empathy: 98,
      creativity: 90,
      dexterity: 30,
      criticalThinking: 85,
      managementOrLeadership: 85
    },
    salaryProjection: {
      medianSalary: "$62,400 per Year",
      growthRate2030: "+4% (Highly secure organic coaching)",
      remoteViability: "30% (Hybrid possible)"
    }
  },
  {
    id: "architecte",
    name: "Architect & Spatial Designer",
    category: "Design & Creative Arts",
    riskScore: 35,
    humanSynergyScore: 90,
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&h=450&q=80",
    summary: "Generative architectural layout models can compute thousands of optimal structural variants respecting load-bearing or local zoning laws. Integrating client lifestyle aesthetics and supervising complex real construction require sovereign human leadership.",
    tasks: [
      {
        name: "Optimizing room configurations for solar exposure",
        category: "Automated",
        description: "Algorithms calculate ideal window angles and heat savings instantly."
      },
      {
        name: "Generating CAD render layouts",
        category: "Augmented",
        description: "AI instantly transforms simple 2D blueprint lines into fully rendered 3D virtual walkthroughs."
      },
      {
        name: "Synthesizing client desires with high-stakes build constraints",
        category: "Human-Only",
        description: "Coordinating conflicting structural builders, ensuring aesthetic feeling, negotiating with local communities."
      }
    ],
    highRiskExamples: [
      "Drafting routine 3D renders from standard flat wireframe plans.",
      "Re-calculating local building code dimensions manually."
    ],
    humanSuperpowers: [
      "Artistic creative spatial judgment and storytelling.",
      "Orchestrating high-stakes negotiations among safety engineers, city boards, and clients."
    ],
    guidanceToPivot: [
      "Master generative design software to iterate building ideas 10x faster during initial pitches.",
      "Focus on green carbon-neutral builds, biophilic structures, and historic preservation strategies."
    ],
    keyStats: [
      { label: "Blueprint design iteration speedup", value: "8x" },
      { label: "Client visual approval speed improvement", value: "+60%" },
      { label: "Zoning law compliance check time", value: "-92%" },
      { label: "Green building proposal adoption rate", value: "+45%" }
    ],
    skillsRadar: {
      empathy: 70,
      creativity: 95,
      dexterity: 35,
      criticalThinking: 90,
      managementOrLeadership: 80
    },
    salaryProjection: {
      medianSalary: "$82,800 per Year",
      growthRate2030: "+5% (Requires VR and green building skills)",
      remoteViability: "65% (Hybrid/Office)"
    }
  }
];

export const EDUCATIONAL_QUIZ: QuizQuestion[] = [
  {
    id: "q1",
    question: "Which parts of a profession are generative AI models most likely to automate first?",
    options: [
      "An entire job title from top to bottom simultaneously",
      "Repetitive, document-heavy, or predictable analytical tasks",
      "Only physical manual dexterity roles such as plumbing and welding",
      "None at all; current AI models are unable to perform any real office tasks"
    ],
    correctIndex: 1,
    explanation: "AI automates individual cognitive tasks, not entire professions. A typical job consists of many varied tasks. Delegating standard document drafting and data sorting to AI allows human professionals to focus on high-value strategy and trust."
  },
  {
    id: "q2",
    question: "What is 'Moravec's Paradox' in automation science?",
    options: [
      "The more analytical a task is, the harder it is for code networks to perform",
      "High-level logical reasoning is computationally simple for AI, but basic sensory-motor skills (like balance or hand-eye coordination) are incredibly hard to program",
      "Artificial intelligence requires more clean electricity than modern nations can harvest",
      "Robotic arms in warehouses eventually start programming their own software layers"
    ],
    correctIndex: 1,
    explanation: "First defined by roboticist Hans Moravec, this paradox proves that logical computation is relatively easy for algorithms (AI easily defeats chess grandmasters), whereas human tactile dexterity and spatial movement are extremely hard to replicate."
  },
  {
    id: "q3",
    question: "Which human quality provides the absolute strongest insulation against automated AI substitution?",
    options: [
      "The direct need for genuine psychological empathy, relationship building, and high-stakes ethical accountability",
      "Refusing to use visual digital software and writing strictly in physical notebooks",
      "Working extremely long hours on routine mechanical spreadsheets",
      "Applying for many local government patents"
    ],
    correctIndex: 0,
    explanation: "Organic empathy, reading subtle emotional cues, active listening, and absolute ethical responsibility are human-exclusive qualities that code systems can mimic, but never genuinely possess."
  },
  {
    id: "q4",
    question: "How is 'Human-AI Augmentation' best defined?",
    options: [
      "Completely replacing entire teams of human workers with cloud databases",
      "Unplugging global digital networks to preserve traditional work methods",
      "A collaborative workflow where human professionals orchestrate AI as a co-pilot to elevate speed, creativity, and accuracy",
      "Implanting electronic chips directly inside a professional's brain"
    ],
    correctIndex: 2,
    explanation: "Under an augmented workflow, the human operates as a strategic director. Utilizing AI assistants to handle boilerplate formatting, translation, or diagnostics lets humans generate high-level solutions at unprecedented scale."
  },
  {
    id: "q5",
    question: "What is the most recommended career strategy in the age of artificial intelligence?",
    options: [
      "Ignoring digital technological shifts and hoping the wave dissipates",
      "Mastering human-AI synergy tools (prompt engineering, AI supervision) while focusing heavily on irreplaceable human soft skills",
      "Halting all education and specializing strictly in repetitive manual data entry",
      "Letting automated systems make every strategic and professional decision"
    ],
    correctIndex: 1,
    explanation: "AI won't replace every single job, but professionals mastering human-AI orchestration will replace those who refuse to adapt."
  }
];
