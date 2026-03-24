"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"
import Image from "next/image"

type Solution = {
    title: string
    description: string
    icon: any
    href: string
    featured?: boolean
    category: string
    image: string
}

export function CircularSolutionsCarousel({ solutions }: { solutions: Solution[] }) {
    const [isPaused, setIsPaused] = useState(false)
    const totalCards = solutions.length
    const radius = 250 // Distance from center

    return (
        <div className="relative py-20">
            <div className="mx-auto max-w-5xl">
                {/* Circular container */}
                <div
                    className="relative mx-auto h-[600px] w-full"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Center decoration */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="h-32 w-32 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 shadow-2xl shadow-accent/20 flex items-center justify-center border-4 border-accent/20">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-accent">{totalCards}</div>
                                <div className="text-xs text-muted-foreground">Solutions</div>
                            </div>
                        </div>
                    </div>

                    {/* Circular orbit path visualization */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full border-2 border-dashed border-accent/20 animate-spin-very-slow" />

                    {/* Solution cards in circular arrangement */}
                    {solutions.map((solution, index) => {
                        const angle = (index * 360) / totalCards

                        return (
                            <motion.div
                                key={solution.title}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.6,
                                    type: "spring"
                                }}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                                style={{
                                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
                                    animation: isPaused ? 'none' : 'orbit 30s linear infinite',
                                    animationDelay: `${-index * (30 / totalCards)}s`
                                }}
                            >
                                <Card className={cn(
                                    "group relative overflow-hidden w-64 transition-all duration-300 hover:shadow-2xl hover:scale-110 hover:z-50",
                                    solution.featured
                                        ? "border-accent/50 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent shadow-lg shadow-accent/10"
                                        : "border-muted/50 hover:border-accent/30 shadow-md bg-card/95 backdrop-blur-sm"
                                )}>
                                    {/* Solution Image */}
                                    <div className="relative h-40 w-full overflow-hidden">
                                        <Image
                                            src={solution.image}
                                            alt={solution.title}
                                            fill
                                            sizes="(max-width: 768px) 300px, 400px"
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />

                                        {/* Icon overlay on image */}
                                        <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-background/90 backdrop-blur-sm text-accent shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform duration-300">
                                            <solution.icon className="h-5 w-5 group-hover:animate-spin-slow" />
                                        </div>

                                        {solution.featured && (
                                            <Badge className="absolute right-3 top-3 shadow-md" variant="secondary">
                                                <span className="flex items-center gap-1">
                                                    ⭐ Featured
                                                </span>
                                            </Badge>
                                        )}
                                    </div>

                                    {/* Decorative gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Animated border effect */}
                                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 blur-xl -z-10" />

                                    <CardHeader className="relative pb-3">
                                        <CardTitle className="text-lg group-hover:text-accent transition-colors duration-300">{solution.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3 relative">
                                        <CardDescription className="text-sm leading-relaxed line-clamp-2">
                                            {solution.description}
                                        </CardDescription>
                                        <div className="pt-1">
                                            <Button variant="link" className="px-0 text-accent font-semibold group/btn h-auto py-0" render={<Link href={solution.href} />}>
                                                Learn more
                                                <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-2" />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Control hint */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        Hover over the carousel to pause • Solutions rotate automatically
                    </p>
                </div>
            </div>
        </div>
    )
}
