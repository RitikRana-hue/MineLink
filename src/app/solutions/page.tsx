"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { solutionsData } from "@/lib/solutions-data"
import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/container"

export default function SolutionsPage() {
  return (
    <Container className="py-20">
      <div className="mb-16 max-w-3xl">
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">Our Solutions</h1>
        <p className="text-xl text-muted-foreground">
          We're developing advanced systems designed to improve safety, visibility, and operational efficiency in mining environments. Our solutions are currently in pilot phase at select mining operations.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {solutionsData.map((solution, index) => (
          <motion.div
            key={solution.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="group flex h-full flex-col border-muted/50 transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-foreground/20">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <solution.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">{solution.title}</CardTitle>
                <CardDescription className="text-base">
                  {solution.shortDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-0">
                <div className="flex items-center justify-between border-t pt-6">
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">Implemented</Badge>
                  <Button variant="ghost" render={<Link href={`/solutions/${solution.id}`} />} className="group-hover:text-accent">
                    View Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Container>
  )
}
