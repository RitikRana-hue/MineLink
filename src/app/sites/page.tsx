"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Container } from "@/components/layout/container"

const sites = [
  { name: "Underground - North Shaft", code: "UG-NS", status: "OK", sensors: 24, workers: 38 },
  { name: "Underground - South Tunnel", code: "UG-ST", status: "WARN", sensors: 19, workers: 22 },
  { name: "Open Pit - West", code: "OP-W", status: "OK", sensors: 16, workers: 28 },
  { name: "Yard - Fuel Depot", code: "YD-FD", status: "OK", sensors: 12, workers: 8 },
]

export default function SitesPage() {
  return (
    <Container className="py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Sites</h1>
        <p className="text-muted-foreground">Manage operations across multiple facilities.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sites.map((s) => (
          <Card key={s.code} className="border-muted/50">
            <CardHeader className="flex flex-row items-start justify-between">
              <CardTitle className="text-lg">{s.name}</CardTitle>
              <Badge variant="outline" className={`${s.status === "OK" ? "bg-emerald-100 text-emerald-800 border-emerald-200" : "bg-amber-100 text-amber-800 border-amber-200"}`}>
                {s.status}
              </Badge>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <div>Code: <span className="text-foreground">{s.code}</span></div>
              <div>Sensors: <span className="text-foreground">{s.sensors}</span></div>
              <div>Workers onsite: <span className="text-foreground">{s.workers}</span></div>
              <div className="pt-3">
                <Button variant="outline" size="sm" render={<Link href="/dashboard" />}>View in Dashboard</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  )
}
