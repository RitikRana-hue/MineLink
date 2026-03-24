"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Activity, Cpu, Lightbulb, Users, Globe } from "lucide-react"
import { Container } from "@/components/layout/container"

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* About Hero */}
      <section className="bg-muted/30 py-20 md:py-32">
        <Container className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl space-y-6"
          >
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
              About <span className="text-accent">Us</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
              We are focused on developing intelligent solutions for the mining industry. Our systems are designed to improve safety, enhance monitoring, and support better decision-making using modern technologies.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section>
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Company Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We aim to bring innovation and reliability to one of the most critical industrial sectors. Our goal is to make mining operations safer and more intelligent through the power of AI and connected systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that by integrating advanced monitoring and intelligent safety systems, we can create a future where mining is not only more productive but also significantly safer for every worker on the ground.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  title: "Safety First",
                  description: "Safety is at the core of everything we do and build.",
                  icon: ShieldCheck
                },
                {
                  title: "Intelligence Driven",
                  description: "Leveraging AI to turn data into actionable safety insights.",
                  icon: Cpu
                },
                {
                  title: "Innovative Spirit",
                  description: "Constantly pushing the boundaries of mining technology.",
                  icon: Lightbulb
                },
                {
                  title: "Global Reach",
                  description: "Our solutions are built for mining operations worldwide.",
                  icon: Globe
                }
              ].map((value, i) => (
                <div key={i} className="rounded-2xl border bg-card p-6 shadow-sm">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-bold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Our Approach */}
      <section className="bg-muted/30 py-20">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Approach</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              We don't just build technology; we build solutions for real mining environments. Our safety and intelligence-driven approach ensures that our systems are both practical and powerful.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Listen to the Mine",
                description: "We work closely with mining operations to understand their unique challenges and requirements.",
                icon: Users
              },
              {
                title: "Develop with Precision",
                description: "Our engineering team develops ruggedized, high-precision systems designed for industrial environments.",
                icon: Activity
              },
              {
                title: "Deploy with Confidence",
                description: "Every system is thoroughly tested and verified before implementation to ensure absolute reliability.",
                icon: ShieldCheck
              }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values Statement */}
      <section>
        <Container className="text-center">
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="text-3xl font-bold md:text-5xl">Our Core Values</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Reliability, safety, and innovation are the pillars of MineLink. We are committed to delivering technology that makes a real difference in the lives of mining workers and the efficiency of global mining operations.
            </p>
          </div>
        </Container>
      </section>
    </div>
  )
}
