"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ArrowRight, ShieldCheck, Activity, Truck, AlertTriangle, Cpu, Video, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Container } from "@/components/layout/container"
import { ModulesTabs } from "@/components/sections/modules-tabs"
import { CircularSolutionsCarousel } from "@/components/sections/circular-solutions-carousel"

type Category = "Safety" | "Monitoring" | "Equipment" | "AI" | "Visual"

const solutions: Array<{
  title: string
  description: string
  icon: any
  href: string
  featured?: boolean
  category: Category
  image: string
}> = [
    {
      title: "Environmental Intelligence",
      description: "Real-time monitoring of air quality, gas levels, and environmental conditions.",
      icon: Activity,
      href: "/solutions/environmental-intelligence",
      category: "Monitoring",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=80", // Environmental monitoring
    },
    {
      title: "Worker Safety Monitoring",
      description: "Track worker presence and ensure safety across different mining zones.",
      icon: ShieldCheck,
      href: "/solutions/worker-safety-monitoring",
      category: "Safety",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80", // Worker with safety gear
    },
    {
      title: "Vehicle & Equipment Tracking",
      description: "Monitor movement and usage of vehicles and heavy equipment.",
      icon: Truck,
      href: "/solutions/vehicle-tracking",
      category: "Equipment",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80", // Heavy equipment
    },
    {
      title: "Intelligent Safety System",
      description: "Detect risks early and enable faster response to critical situations.",
      icon: AlertTriangle,
      href: "/solutions/intelligent-safety-system",
      category: "Safety",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80", // Mining operations
    },
    {
      title: "Mining AI Assistant",
      description: "Analyze data and provide quick insights for better decision-making.",
      icon: Cpu,
      href: "/solutions/ai-assistant",
      featured: true,
      category: "AI",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80", // AI/Technology
    },
    {
      title: "Visual Monitoring (CCTV)",
      description: "Advanced surveillance system for real-time monitoring and safety assurance.",
      icon: Video,
      href: "/solutions/visual-monitoring",
      category: "Visual",
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80", // Control center/monitoring
    }
  ]

export default function Home() {
  const heroImages = [
    "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80", // Mining equipment
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80", // Mining site
    "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80"  // Industrial mining
  ]
  const [heroIndex, setHeroIndex] = useState(0)
  const categories: Array<Category | "All"> = ["All", "Safety", "Monitoring", "Equipment", "AI", "Visual"]
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All")
  const filtered = activeCategory === "All" ? solutions : solutions.filter(s => s.category === activeCategory)
  useEffect(() => {
    const id = setInterval(() => setHeroIndex((i) => (i + 1) % heroImages.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-16 pb-16 md:pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1920&q=80"
            alt="Mining background"
            fill
            sizes="100vw"
            className="object-cover opacity-5"
            priority
          />
        </div>
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            {/* Left copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-center lg:text-left"
            >
              <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium border-accent/30 bg-accent/10 text-accent">
                The Future of Mining Technology
              </Badge>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
                AI‑Powered Mining <br className="hidden sm:block" />
                <span className="text-accent">Intelligence Platform</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl lg:mx-0">
                We're building intelligent systems to enhance safety, monitoring, and decision‑making in modern mining environments.
              </p>
              <div className="flex flex-col items-center justify-start gap-3 sm:flex-row lg:justify-start">
                <Button size="lg" render={<Link href="/solutions" />} className="h-12 px-8 text-base">
                  Explore Solutions
                </Button>
                <Button size="lg" variant="outline" render={<Link href="/contact" />} className="h-12 px-8 text-base">
                  Get in Touch
                </Button>
              </div>
              <div className="h-1 w-24 rounded-full bg-accent/60 lg:ml-0 mx-auto" />
              {/* Quick highlights */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                {["Safety‑first", "Real‑time monitoring", "Coal‑ready systems"].map((chip) => (
                  <span key={chip} className="rounded-full border border-foreground/10 bg-muted px-3 py-1 text-xs text-muted-foreground">
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>
            {/* Right visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative mx-auto w-full max-w-xl"
            >
              <div className="relative rounded-3xl border-2 border-accent/20 bg-card p-6 shadow-2xl backdrop-blur-sm">
                {/* Glowing effects */}
                <div className="pointer-events-none absolute -left-24 top-1/3 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-2xl" />
                <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-accent/10 via-transparent to-accent/5" />

                {/* Image container with enhanced styling */}
                <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 border-accent/30 bg-background shadow-xl">
                  <Image key={heroImages[heroIndex]} src={heroImages[heroIndex]} alt="Mining operations" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-all duration-700" priority loading="eager" />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>

                {/* Carousel indicators */}
                <div className="mt-4 flex items-center justify-center gap-2">
                  {heroImages.map((_, i) => (
                    <span
                      key={i}
                      className={`h-2 rounded-full transition-all duration-300 ${i === heroIndex ? "w-8 bg-accent shadow-lg shadow-accent/50" : "w-2 bg-muted-foreground/30"
                        }`}
                    />
                  ))}
                </div>

                {/* Stats cards with enhanced design */}
                <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs">
                  <div className="group rounded-xl border-2 border-accent/20 bg-gradient-to-br from-accent/10 to-transparent p-4 shadow-md hover:shadow-xl hover:border-accent/40 transition-all duration-300">
                    <div className="font-bold text-lg text-accent">3+</div>
                    <div className="text-muted-foreground mt-1">Pilots</div>
                  </div>
                  <div className="group rounded-xl border-2 border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent p-4 shadow-md hover:shadow-xl hover:border-green-500/40 transition-all duration-300">
                    <div className="font-bold text-lg text-green-600 dark:text-green-400">Early</div>
                    <div className="text-muted-foreground mt-1">Stage</div>
                  </div>
                  <div className="group rounded-xl border-2 border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent p-4 shadow-md hover:shadow-xl hover:border-blue-500/40 transition-all duration-300">
                    <div className="font-bold text-lg text-blue-600 dark:text-blue-400">2025</div>
                    <div className="text-muted-foreground mt-1">Founded</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>

        {/* Background pattern: subtle strata lines */}
        <div className="absolute top-0 -z-10 h-full w-full">
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_23px,rgba(17,24,39,0.04)_24px,rgba(17,24,39,0.04)_24px)]" />
        </div>
      </section>

      {/* Solutions Preview */}
      <section>
        <Container>
          <div className="mb-12 space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Solutions</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We have developed advanced systems designed to improve safety, visibility, and operational efficiency in mining environments.
            </p>
          </div>
          <ModulesTabs />
          <div className="my-10 h-px w-full bg-border" />
          {/* Segmented filter */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2 md:gap-3">
            <span className="mr-1 text-xs uppercase tracking-wider text-muted-foreground"><Filter className="mr-1 inline h-3 w-3" /> Filter</span>
            {categories.map((cat) => (
              <Button
                key={cat}
                size="sm"
                variant={activeCategory === cat ? "secondary" : "outline"}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                }}
              >
                <Card className={cn(
                  "group relative overflow-hidden h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1",
                  solution.featured
                    ? "border-accent/50 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent shadow-lg shadow-accent/10"
                    : "border-muted/50 hover:border-accent/30 shadow-md"
                )}>
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Animated border effect */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 blur-xl -z-10" />

                  <CardHeader className="relative">
                    <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 text-accent shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform duration-300">
                      <solution.icon className="h-6 w-6 group-hover:animate-spin-slow" />
                    </div>
                    {solution.featured && (
                      <Badge className="absolute right-4 top-4 shadow-md" variant="secondary">
                        <span className="flex items-center gap-1">
                          ⭐ Featured
                        </span>
                      </Badge>
                    )}
                    <CardTitle className="text-xl group-hover:text-accent transition-colors duration-300">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 relative">
                    <CardDescription className="text-base leading-relaxed">
                      {solution.description}
                    </CardDescription>
                    <div className="pt-2">
                      <Button variant="link" className="px-0 text-accent font-semibold group/btn" render={<Link href={solution.href} />}>
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Platform Section */}
      <section className="bg-muted/30 py-20">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">A Connected Mining Ecosystem</h2>
              <p className="text-lg text-muted-foreground">
                Our platform integrates sensors, AI systems, monitoring tools, and devices into a unified ecosystem.
                This allows seamless data flow, better visibility, and faster decision-making across mining operations.
              </p>
              <ul className="space-y-4">
                {[
                  "Real-time sensor integration",
                  "Advanced AI-driven analytics",
                  "Centralized monitoring dashboard",
                  "Automated safety protocols"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" render={<Link href="/platform" />}>
                Learn about the Platform
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-video rounded-xl border bg-background shadow-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200&q=80"
                alt="Mining control center"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
              <div className="relative flex h-full items-center justify-center">
                <div className="grid grid-cols-3 gap-4 p-8">
                  {[Activity, ShieldCheck, Truck, AlertTriangle, Cpu, Video].map((Icon, i) => (
                    <div key={i} className="flex h-16 w-16 items-center justify-center rounded-xl bg-background/80 backdrop-blur-sm text-foreground border shadow-lg">
                      <Icon className="h-8 w-8" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Core Capabilities */}
      <section className="py-14 bg-muted/30">
        <Container>
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Core Capabilities</h2>
            <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">Built for safety, visibility, and operational excellence in coal mining.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, title: "Safety Systems", desc: "Intelligent protection with automated protocols.", color: "from-blue-500/20 to-blue-500/5" },
              { icon: Activity, title: "Environmental Monitoring", desc: "Live gas, AQI, temperature, humidity.", color: "from-green-500/20 to-green-500/5" },
              { icon: Truck, title: "Fleet & Equipment", desc: "Tracking, proximity alerts, health telemetry.", color: "from-orange-500/20 to-orange-500/5" },
              { icon: Cpu, title: "AI Assistant", desc: "Query data, generate reports, guide response.", color: "from-purple-500/20 to-purple-500/5" },
            ].map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="group relative rounded-2xl border bg-card p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 text-accent shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 group-hover:animate-spin-slow" />
                  </div>
                  <div className="text-lg font-bold mb-2">{title}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Partners */}
      <section className="py-10">
        <Container>
          <div className="mb-6 text-center">
            <h3 className="text-xl font-semibold text-muted-foreground">Trusted by teams worldwide</h3>
          </div>
          <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-4">
            {["GlobalMine", "TerraOps", "CoalWorks", "DeepTrack"].map((name) => (
              <div key={name} className="group flex items-center justify-center rounded-xl border-2 border-muted/50 bg-gradient-to-br from-card to-muted/20 py-8 text-sm font-semibold text-muted-foreground shadow-md hover:shadow-xl hover:border-accent/30 hover:text-accent transition-all duration-300 hover:-translate-y-1">
                {name}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Industry Imagery */}
      <section className="py-10">
        <Container>
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Industry Imagery</h2>
            <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">Visual cues from coal mining operations.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80", title: "Safety & PPE" },
              { src: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80", title: "Heavy Equipment" },
              { src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80", title: "Material Handling" },
            ].map(({ src, title }) => (
              <div key={src} className="group rounded-2xl border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image src={src} alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-center text-lg font-semibold">{title}</h3>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mining Operations Showcase */}
      <section className="py-20 bg-muted/30">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&q=80"
                alt="Mining operations"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Modern Mining Operations</h2>
              <p className="text-lg text-muted-foreground">
                We're building the future of mining with cutting-edge technology designed to transform traditional operations into smart, efficient, and safe environments.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "24/7", label: "Monitoring", color: "from-blue-500/20 to-blue-500/5" },
                  { value: "100%", label: "Coverage", color: "from-green-500/20 to-green-500/5" },
                  { value: "Real-time", label: "Alerts", color: "from-orange-500/20 to-orange-500/5" },
                  { value: "AI-Powered", label: "Analytics", color: "from-purple-500/20 to-purple-500/5" },
                ].map((stat) => (
                  <div key={stat.label} className={`group rounded-xl border-2 border-accent/20 bg-gradient-to-br ${stat.color} p-5 shadow-md hover:shadow-xl hover:border-accent/40 hover:-translate-y-1 transition-all duration-300`}>
                    <div className="text-2xl font-bold text-accent group-hover:scale-110 transition-transform">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* By The Numbers */}
      <section className="py-10">
        <Container>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { label: "Pilot Sites", value: "3+", color: "from-blue-500/20 to-blue-500/5", icon: "🏭" },
              { label: "Team Members", value: "5+", color: "from-green-500/20 to-green-500/5", icon: "👥" },
              { label: "Sensors Deployed", value: "10+", color: "from-purple-500/20 to-purple-500/5", icon: "📡" },
              { label: "Founded", value: "2025", color: "from-orange-500/20 to-orange-500/5", icon: "🚀" },
            ].map((s) => (
              <div key={s.label} className={`group relative rounded-2xl border-2 border-accent/20 bg-gradient-to-br ${s.color} p-6 text-center shadow-lg hover:shadow-2xl hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden`}>
                {/* Background decoration */}
                <div className="absolute -right-4 -top-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">
                  {s.icon}
                </div>

                <div className="relative">
                  <div className="text-4xl font-extrabold bg-gradient-to-br from-accent to-accent/60 bg-clip-text text-transparent">
                    {s.value}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-10">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Built for real-world mining",
                description: "Our systems are designed to withstand the harsh conditions of mining environments.",
                icon: ShieldCheck,
                gradient: "from-blue-500/10 to-blue-500/5"
              },
              {
                title: "Safety Focused",
                description: "Every solution we develop prioritizes the safety and well-being of mining workers.",
                icon: AlertTriangle,
                gradient: "from-red-500/10 to-red-500/5"
              },
              {
                title: "Intelligent Systems",
                description: "Leverage the power of AI to gain insights and make better decisions in real-time.",
                icon: Cpu,
                gradient: "from-purple-500/10 to-purple-500/5"
              },
              {
                title: "Industry Ready",
                description: "Proven technology that is already being implemented in leading mining operations.",
                icon: Activity,
                gradient: "from-green-500/10 to-green-500/5"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative space-y-4 rounded-2xl border-2 border-accent/20 bg-gradient-to-br ${item.gradient} p-6 shadow-lg hover:shadow-2xl hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
              >
                {/* Background decoration */}
                <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <item.icon className="h-32 w-32" />
                </div>

                <div className="relative">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent/30 to-accent/10 text-accent shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-7 w-7 group-hover:animate-spin-slow" />
                  </div>
                  <h3 className="text-xl font-bold mt-4 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section>
        <Container>
          <div className="rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/80 px-8 py-16 text-center text-primary-foreground md:px-16 md:py-20 shadow-2xl border-2 border-primary/20 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white blur-3xl" />
              <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white blur-3xl" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative mx-auto max-w-3xl space-y-8"
            >
              <h2 className="text-3xl font-bold md:text-5xl leading-tight">
                Build safer and smarter mining operations with intelligent systems.
              </h2>
              <Button size="lg" variant="secondary" render={<Link href="/contact" />} className="h-14 px-10 text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  )
}

import { cn } from "@/lib/utils"
