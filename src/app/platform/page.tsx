"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Activity, Truck, AlertTriangle, Cpu, Video, Globe, Zap, Database } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Container } from "@/components/layout/container"

export default function PlatformPage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Platform Hero */}
      <section className="bg-muted/30 py-20 md:py-32">
        <Container className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl space-y-6"
          >
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
              A Connected Mining <br />
              <span className="text-accent">Ecosystem</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              Our platform integrates sensors, AI systems, monitoring tools, and devices into a unified ecosystem. This allows seamless data flow, better visibility, and faster decision-making across mining operations.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Technology Integration */}
      <section>
        <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How different technologies work together</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Modern mining requires more than just individual sensors. It needs a coordinated intelligence layer that can make sense of diverse data streams in real-time.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "AI + Sensors",
                  description: "Raw sensor data is processed by edge-AI to identify critical events before they reach the control center.",
                  icon: Zap
                },
                {
                  title: "Monitoring + Safety",
                  description: "Continuous monitoring feeds directly into safety protocols, enabling automated responses to hazardous conditions.",
                  icon: ShieldCheck
                },
                {
                  title: "Real-world Applications",
                  description: "Our systems are designed for the toughest mining environments, from deep underground to remote open-pit operations.",
                  icon: Globe
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border bg-card p-8 shadow-2xl"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card className="bg-accent/10 border-accent/20">
                  <CardHeader className="p-4">
                    <Activity className="h-6 w-6 text-accent mb-2" />
                    <CardTitle className="text-sm">Real-time Data</CardTitle>
                  </CardHeader>
                </Card>
                <Card className="bg-muted/50">
                  <CardHeader className="p-4">
                    <Database className="h-6 w-6 text-muted-foreground mb-2" />
                    <CardTitle className="text-sm">Historical Analysis</CardTitle>
                  </CardHeader>
                </Card>
              </div>
              <div className="space-y-4 pt-8">
                <Card className="bg-accent text-accent-foreground shadow-lg shadow-accent/20">
                  <CardHeader className="p-4">
                    <Cpu className="h-6 w-6 mb-2" />
                    <CardTitle className="text-sm">AI Engine</CardTitle>
                  </CardHeader>
                </Card>
                <Card className="bg-muted/50">
                  <CardHeader className="p-4">
                    <Video className="h-6 w-6 text-muted-foreground mb-2" />
                    <CardTitle className="text-sm">Visual Insights</CardTitle>
                  </CardHeader>
                </Card>
              </div>
            </div>
            <div className="mt-8 text-center text-sm text-muted-foreground">
              Integrated Technology Architecture
            </div>
          </motion.div>
        </div>
        </Container>
      </section>

      {/* Real-world Mining Applications */}
      <section className="bg-muted/30 py-20">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Real-world Mining Applications</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Our platform is purpose-built to address the most critical challenges in modern mining operations.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Underground Mining",
                description: "Seamless tracking and environmental monitoring in GPS-denied and connectivity-challenged environments.",
                icon: ShieldCheck
              },
              {
                title: "Open-pit Operations",
                description: "High-precision vehicle tracking and collision avoidance across vast operational areas.",
                icon: Truck
              },
              {
                title: "Remote Facilities",
                description: "Visual monitoring and autonomous safety systems for remote or unmanned mining infrastructure.",
                icon: Video
              }
            ].map((app, i) => (
              <Card key={i} className="bg-background border-muted/50">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <app.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{app.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{app.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section>
        <Container className="text-center">
        <div className="mx-auto max-w-3xl space-y-8">
          <h2 className="text-3xl font-bold md:text-5xl">Ready to modernize your mining operations?</h2>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" render={<Link href="/contact" />} className="h-12 px-8">
              Get in Touch
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/solutions" />} className="h-12 px-8">
              Explore Solutions
            </Button>
          </div>
        </div>
        </Container>
      </section>
    </div>
  )
}
