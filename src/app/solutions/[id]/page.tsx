"use client"

import { useParams, notFound } from "next/navigation"
import { motion } from "framer-motion"
import { CheckCircle2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { solutionsData } from "@/lib/solutions-data"

export default function SolutionDetailPage() {
  const params = useParams()
  const solution = solutionsData.find((s) => s.id === params.id)

  if (!solution) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-12"
      >
        <Button variant="ghost" render={<Link href="/solutions" />} className="mb-6 -ml-4 flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Solutions
        </Button>
        <div className="flex items-center gap-4 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <solution.icon className="h-6 w-6" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{solution.title}</h1>
        </div>
        <p className="max-w-3xl text-xl text-muted-foreground">
          {solution.fullDescription}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="mb-4 text-2xl font-bold">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {solution.overview}
            </p>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold">What the system does</h2>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {solution.whatItDoes.map((item, i) => (
                <li key={i} className="flex gap-3 rounded-lg border bg-muted/30 p-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">How it works</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {solution.howItWorks}
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">Use cases in mining</h2>
            <div className="flex flex-wrap gap-3">
              {solution.useCases.map((useCase, i) => (
                <div key={i} className="rounded-full bg-primary/5 px-4 py-2 text-sm font-medium text-primary border border-primary/10">
                  {useCase}
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <h3 className="mb-6 text-xl font-bold">Key Highlights</h3>
            <ul className="space-y-4">
              {solution.highlights.map((highlight, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-primary p-6 text-primary-foreground shadow-lg">
            <h3 className="mb-4 text-xl font-bold">Ready to implement?</h3>
            <p className="mb-6 text-primary-foreground/80">
              Get in touch with our team to discuss how this solution can be integrated into your operations.
            </p>
            <Button variant="secondary" className="w-full font-bold" render={<Link href="/contact" />}>
              Contact Sales
            </Button>
          </div>
        </aside>
      </div>
    </div>
  )
}
