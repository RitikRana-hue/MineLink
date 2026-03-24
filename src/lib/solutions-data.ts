import { ShieldCheck, Activity, Truck, AlertTriangle, Cpu, Video } from "lucide-react"

export const solutionsData = [
  {
    id: "environmental-intelligence",
    title: "Environmental Intelligence",
    shortDescription: "Real-time monitoring of air quality, gas levels, and environmental conditions.",
    fullDescription: "Our Environmental Intelligence system provides comprehensive monitoring of the mining environment to ensure the safety of all personnel and compliance with environmental regulations.",
    icon: Activity,
    overview: "The system uses a network of high-precision sensors deployed throughout the mine to collect real-time data on air quality, temperature, humidity, and the presence of hazardous gases like methane and carbon monoxide.",
    whatItDoes: [
      "Monitors oxygen levels and hazardous gas concentrations in real-time.",
      "Tracks air quality index (AQI) and particulate matter.",
      "Measures temperature and humidity to prevent heat-related incidents.",
      "Provides automated alerts when safety thresholds are exceeded."
    ],
    howItWorks: "Sensors transmit data wirelessly to a central processing unit that uses AI to filter noise and identify trends. The results are displayed on a real-time dashboard and sent to mobile devices of safety officers.",
    useCases: [
      "Underground mine ventilation monitoring",
      "Hazardous gas leak detection",
      "Dust level control in open-pit mines",
      "Regulatory environmental compliance reporting"
    ],
    highlights: [
      "24/7 continuous monitoring",
      "Ultra-low latency alerting",
      "ATEX/IECEx certified hardware",
      "Cloud-based historical data analysis"
    ]
  },
  {
    id: "worker-safety-monitoring",
    title: "Worker Safety Monitoring",
    shortDescription: "Track worker presence and ensure safety across different mining zones.",
    fullDescription: "A comprehensive safety system designed to track personnel in real-time, ensuring everyone is accounted for, especially in restricted or hazardous zones.",
    icon: ShieldCheck,
    overview: "Using wearable devices and localized tracking hubs, this system provides a real-time 'heat map' of personnel across the entire mining facility, both above and below ground.",
    whatItDoes: [
      "Real-time personnel tracking and location history.",
      "Geofencing for restricted or dangerous zones.",
      "Fall detection and SOS emergency triggers.",
      "Automated attendance and shift transition logging."
    ],
    howItWorks: "Workers wear lightweight, ruggedized tags that communicate with a network of anchors. The system uses trilateration to determine exact positions with sub-meter accuracy.",
    useCases: [
      "Emergency evacuation accounting",
      "Unauthorized zone entry prevention",
      "Man-down incident response",
      "Optimized shift management"
    ],
    highlights: [
      "Sub-meter positioning accuracy",
      "Long-lasting battery life (up to 2 years)",
      "Rugged, IP67-rated wearable devices",
      "Integration with emergency response protocols"
    ]
  },
  {
    id: "vehicle-tracking",
    title: "Vehicle & Equipment Tracking",
    shortDescription: "Monitor movement and usage of vehicles and heavy equipment.",
    fullDescription: "Optimize fleet management and prevent collisions with our advanced vehicle and equipment tracking system designed for the unique challenges of mining terrain.",
    icon: Truck,
    overview: "This system provides a bird's-eye view of all mobile assets, from heavy haulers to light utility vehicles, helping to improve efficiency and reduce the risk of accidents.",
    whatItDoes: [
      "Real-time GPS/GLONASS tracking for all mobile assets.",
      "Collision avoidance and proximity warnings.",
      "Fuel consumption and engine health monitoring.",
      "Route optimization and idle time analysis."
    ],
    howItWorks: "Hardware units installed on vehicles collect telemetry and positioning data, which is transmitted via industrial Wi-Fi or LTE to a central management platform.",
    useCases: [
      "Fleet utilization optimization",
      "Maintenance scheduling based on actual usage",
      "Collision prevention in low-visibility conditions",
      "Automated load and haul cycle tracking"
    ],
    highlights: [
      "Works in GPS-denied environments (underground)",
      "Real-time collision avoidance alerts",
      "Comprehensive asset health analytics",
      "Seamless integration with ERP systems"
    ]
  },
  {
    id: "intelligent-safety-system",
    title: "Intelligent Safety System",
    shortDescription: "Detect risks early and enable faster response to critical situations.",
    fullDescription: "Our flagship safety system that uses AI to predict potential hazards before they occur, enabling a proactive rather than reactive approach to mine safety.",
    icon: AlertTriangle,
    overview: "The Intelligent Safety System (ISS) acts as the brain of the mining operation, synthesizing data from all other modules to identify complex risk patterns.",
    whatItDoes: [
      "Predictive risk modeling using historical and real-time data.",
      "Automated emergency shutdown of equipment in critical zones.",
      "Intelligent incident management and guided response.",
      "Continuous safety compliance monitoring."
    ],
    howItWorks: "Deep learning models analyze thousands of data points per second, looking for anomalies that preceded past safety incidents. When a pattern is matched, the system triggers pre-defined safety protocols.",
    useCases: [
      "Structural stability monitoring (tailings dams, walls)",
      "Predictive maintenance for safety-critical systems",
      "Automated emergency response coordination",
      "Risk-based work permit management"
    ],
    highlights: [
      "AI-driven predictive capabilities",
      "Zero-trust safety architecture",
      "Customizable risk thresholding",
      "Full audit trail for all safety events"
    ]
  },
  {
    id: "ai-assistant",
    title: "Mining AI Assistant",
    shortDescription: "Analyze data and provide quick insights for better decision-making.",
    fullDescription: "A specialized AI interface that allows mining operators to interact with their data using natural language, making complex information accessible and actionable.",
    icon: Cpu,
    overview: "The Mining AI Assistant bridges the gap between massive data sets and human decision-makers, providing instant answers to operational and safety questions.",
    whatItDoes: [
      "Natural language queries for operational data.",
      "Automated report generation and data visualization.",
      "Root cause analysis for operational delays.",
      "Real-time suggestions for process optimization."
    ],
    howItWorks: "The assistant uses a Large Language Model (LLM) fine-tuned on mining-specific terminology and datasets, connected to the mine's real-time data streams through secure APIs.",
    useCases: [
      "Instant safety status briefings",
      "Rapid troubleshooting of equipment failures",
      "Daily operational summary generation",
      "On-demand training and documentation access"
    ],
    highlights: [
      "Conversational interface (Voice & Text)",
      "Mining-domain specific knowledge base",
      "Multi-language support",
      "Secure, private data processing"
    ]
  },
  {
    id: "visual-monitoring",
    title: "Visual Monitoring (CCTV)",
    shortDescription: "Advanced surveillance system for real-time monitoring and safety assurance.",
    fullDescription: "Next-generation visual surveillance that goes beyond simple recording, using computer vision to automatically detect safety violations and operational bottlenecks.",
    icon: Video,
    overview: "Our visual monitoring system turns standard CCTV feeds into intelligent sensors, capable of 'seeing' and 'understanding' what is happening on the ground.",
    whatItDoes: [
      "Automated PPE (Personal Protective Equipment) detection.",
      "Intrusion detection for hazardous or restricted areas.",
      "Vehicle movement and queue analysis.",
      "Fire and smoke detection in early stages."
    ],
    howItWorks: "Computer vision algorithms process video feeds locally (on the edge) to minimize bandwidth usage and ensure immediate response to detected events.",
    useCases: [
      "Automated safety compliance auditing",
      "Loading dock and crusher throughput monitoring",
      "Perimeter security for remote facilities",
      "Remote inspection of hazardous areas"
    ],
    highlights: [
      "Edge-based AI processing",
      "Low-light and thermal imaging support",
      "Privacy-compliant data handling",
      "Seamless integration with existing CCTV hardware"
    ]
  }
]
