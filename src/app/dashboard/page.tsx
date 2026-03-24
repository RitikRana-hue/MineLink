"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Activity as IconActivity,
  Thermometer as IconThermometer,
  Droplets as IconDroplets,
  Wind as IconWind,
  Users as IconUsers,
  Truck as IconTruck,
  AlertTriangle as IconAlert,
  GaugeCircle as IconGauge,
  Download as IconDownload,
  RefreshCw as IconRefresh,
} from "lucide-react"

const kpis = [
  { label: "Air Quality (AQI)", value: "42 (Good)", bar: 42, icon: IconWind },
  { label: "CH₄ Gas (ppm)", value: "3.1", bar: 31, icon: IconGauge },
  { label: "CO Gas (ppm)", value: "0.6", bar: 6, icon: IconAlert },
  { label: "Temperature (°C)", value: "24.6", bar: 62, icon: IconThermometer },
  { label: "Humidity (%)", value: "58", bar: 58, icon: IconDroplets },
  { label: "Barometric Pressure (kPa)", value: "100.8", bar: 50, icon: IconActivity },
  { label: "Workers Onsite", value: "86", bar: 86, icon: IconUsers },
  { label: "Vehicles Active", value: "14", bar: 35, icon: IconTruck },
  { label: "Incidents (24h)", value: "0", bar: 0, icon: IconAlert },
]

const sensors = [
  { id: "SEN-UG-01", zone: "Underground - North Shaft", type: "CH₄", status: "OK", value: "3.1 ppm" },
  { id: "SEN-UG-02", zone: "Underground - Vent A", type: "O₂", status: "OK", value: "20.6 %" },
  { id: "SEN-OP-03", zone: "Open Pit - West", type: "PM2.5", status: "OK", value: "14 µg/m³" },
  { id: "SEN-UG-04", zone: "Underground - South Tunnel", type: "Temp", status: "WARN", value: "28.4 °C" },
  { id: "SEN-YD-05", zone: "Yard - Fuel Depot", type: "CO", status: "OK", value: "0.6 ppm" },
]

function Sparkline({ tone = "ok" }: { tone?: "ok" | "warn" | "alert" }) {
  const color =
    tone === "ok" ? "stroke-accent" : tone === "warn" ? "stroke-amber-500" : "stroke-red-500"
  return (
    <svg viewBox="0 0 100 24" className={`h-6 w-full ${color}`} fill="none" aria-hidden="true">
      <path
        d="M0 18 L10 16 L20 12 L30 14 L40 8 L50 10 L60 6 L70 12 L80 9 L90 4 L100 6"
        strokeWidth="2"
        stroke="currentColor"
      />
    </svg>
  )
}

export default function DashboardPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Mining Operations Dashboard</h1>
          <p className="text-sm text-muted-foreground">Live demo styling with client-side sample data • Updated just now</p>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" size="sm">Time Range</Button>} />
            <DropdownMenuContent>
              <DropdownMenuLabel>Select Range</DropdownMenuLabel>
              <DropdownMenuItem>Last 1 hour</DropdownMenuItem>
              <DropdownMenuItem>Last 24 hours</DropdownMenuItem>
              <DropdownMenuItem>Last 7 days</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Custom…</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" size="sm">Site</Button>} />
            <DropdownMenuContent>
              <DropdownMenuItem>All Sites</DropdownMenuItem>
              <DropdownMenuItem>Underground</DropdownMenuItem>
              <DropdownMenuItem>Open Pit</DropdownMenuItem>
              <DropdownMenuItem>Yard</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="sm" className="gap-1"><IconRefresh className="h-4 w-4" /> Refresh</Button>
          <Button variant="ghost" size="sm" className="gap-1"><IconDownload className="h-4 w-4" /> Export</Button>
          <Badge variant="outline" className="ml-1 bg-accent/10 text-accent border-accent/20">Live Demo</Badge>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          { label: "Environment", color: "bg-emerald-500" },
          { label: "Personnel", color: "bg-emerald-500" },
          { label: "Equipment", color: "bg-amber-500" },
          { label: "Incidents", color: "bg-emerald-500" },
        ].map((s) => (
          <div key={s.label} className="flex items-center gap-2 rounded-lg border bg-card p-2 text-xs text-muted-foreground">
            <span className={`inline-block h-2 w-2 rounded-full ${s.color}`} />
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {kpis.map((k) => {
          const Icon = k.icon
          const tone: "ok" | "warn" | "alert" =
            k.label.includes("Incidents") ? "ok" : k.label.includes("Temp") ? "warn" : "ok"
          return (
            <Card key={k.label} className="border-muted/50 transition-all hover:-translate-y-0.5 hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-base font-medium">{k.label}</CardTitle>
                  <div className="rounded-lg bg-accent/10 p-1.5 text-accent">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{k.value}</div>
                <div className="mt-2">
                  <Sparkline tone={tone} />
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-accent" style={{ width: `${k.bar}%` }} />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Operational Alerts & Events */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="border-muted/50">
          <CardHeader>
            <CardTitle>Operational Alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {[
              { t: "09:41", msg: "Vehicle proximity alert near Crusher-2 (2.1m)", sev: "WARN" },
              { t: "08:52", msg: "Humidity rising in UG-South Tunnel (61%)", sev: "INFO" },
              { t: "07:15", msg: "Routine ventilation check completed (UG Vent A)", sev: "OK" },
            ].map((e, i) => (
              <div key={i} className="flex items-start justify-between gap-3 rounded-lg border bg-card p-3">
                <div>
                  <div className="font-medium">{e.msg}</div>
                  <div className="text-xs text-muted-foreground">{e.t}</div>
                </div>
                <span className={`mt-0.5 rounded-full px-2 py-0.5 text-xs ${
                  e.sev === "WARN" ? "bg-amber-100 text-amber-800" :
                  e.sev === "OK" ? "bg-emerald-100 text-emerald-800" :
                  "bg-slate-100 text-slate-800"
                }`}>{e.sev}</span>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="border-muted/50">
          <CardHeader>
            <CardTitle>Events Feed</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            {[
              { ts: "09:55", title: "Shift change recorded", detail: "Workers onsite: 86 → 72" },
              { ts: "09:20", title: "Vehicle dispatched", detail: "Hauler-14 to West Pit" },
              { ts: "08:58", title: "Sensor maintenance", detail: "UG-02 recalibrated (O₂)" },
            ].map((ev, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border bg-card p-3">
                <div className="space-y-1">
                  <div className="font-medium">{ev.title}</div>
                  <div className="text-xs text-muted-foreground">{ev.detail}</div>
                </div>
                <span className="text-xs text-muted-foreground">{ev.ts}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="border-muted/50 xl:col-span-2">
          <CardHeader>
            <CardTitle>Sensor Inventory</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-muted-foreground">
                  <tr className="border-b">
                    <th className="py-2 pr-4">ID</th>
                    <th className="py-2 pr-4">Zone</th>
                    <th className="py-2 pr-4">Type</th>
                    <th className="py-2 pr-4">Status</th>
                    <th className="py-2">Reading</th>
                  </tr>
                </thead>
                <tbody>
                  {sensors.map((s) => (
                    <tr key={s.id} className="border-b last:border-none">
                      <td className="py-2 pr-4 font-medium">{s.id}</td>
                      <td className="py-2 pr-4">{s.zone}</td>
                      <td className="py-2 pr-4">{s.type}</td>
                      <td className="py-2 pr-4">
                        <span className={`rounded-full px-2 py-0.5 text-xs ${
                          s.status === "OK" ? "bg-green-100 text-green-800" :
                          s.status === "WARN" ? "bg-amber-100 text-amber-800" :
                          "bg-red-100 text-red-800"
                        }`}>
                          {s.status}
                        </span>
                      </td>
                      <td className="py-2">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="border-muted/50">
          <CardHeader>
            <CardTitle>Map Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative aspect-square w-full rounded-lg border bg-muted">
              <svg viewBox="0 0 200 200" className="h-full w-full text-muted-foreground">
                <rect x="10" y="10" width="180" height="180" fill="none" stroke="currentColor" strokeDasharray="4 4" />
                <circle cx="60" cy="60" r="8" className="fill-emerald-500" />
                <text x="72" y="64" fontSize="10" className="fill-current">UG North</text>
                <circle cx="140" cy="80" r="8" className="fill-amber-500" />
                <text x="152" y="84" fontSize="10" className="fill-current">South Tunnel</text>
                <circle cx="110" cy="140" r="8" className="fill-emerald-500" />
                <text x="122" y="144" fontSize="10" className="fill-current">Yard</text>
              </svg>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">Schematic zones for quick situational awareness.</p>
          </CardContent>
        </Card>

        <Card className="border-muted/50">
          <CardHeader>
            <CardTitle>Notes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>This page demonstrates a front-end only, open-source styled dashboard. All values are static and for design purposes.</p>
            <p>You can wire these cards to your data sources later (MQTT, REST, gRPC, etc.).</p>
            <div className="pt-2">
              <Button variant="outline" render={<Link href="/contact" />}>Discuss Integration</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
