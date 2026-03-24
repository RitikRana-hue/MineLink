"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, Activity, Truck, AlertTriangle, Cpu, Video } from "lucide-react"
import Image from "next/image"

export function ModulesTabs() {
  const tabs = [
    { value: "safety", label: "Safety", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=80" },
    { value: "monitoring", label: "Monitoring", image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&q=80" },
    { value: "equipment", label: "Equipment", image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&q=80" },
    { value: "ai", label: "AI Assistant", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80" },
    { value: "visual", label: "Visual", image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200&q=80" },
  ]

  return (
    <div className="rounded-3xl border bg-card p-6 shadow-xl">
      <Tabs defaultValue="safety" className="w-full">
        {/* Scrolling tabs container */}
        <div className="relative overflow-hidden w-full mb-6 py-2">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

          {/* Scrolling content */}
          <div className="flex animate-scroll-left gap-4">
            {/* First set - Interactive tabs wrapped in TabsList */}
            <TabsList className="flex shrink-0 gap-2">
              {tabs.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {/* Duplicate for seamless loop - Visual only */}
            <div className="flex shrink-0 gap-2 bg-muted rounded-lg p-1" aria-hidden="true">
              {tabs.map((tab) => (
                <div
                  key={`dup-${tab.value}`}
                  className="inline-flex h-7 items-center justify-center rounded-md px-3 py-1 text-sm font-medium whitespace-nowrap text-muted-foreground"
                >
                  {tab.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Safety Tab */}
        <TabsContent value="safety" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Hero Image */}
            <div className="relative h-64 lg:h-full rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=80"
                alt="Safety"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">Safety First</h3>
                <p className="text-white/90 text-sm">Comprehensive safety monitoring and protection systems</p>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 gap-4">
              <FeatureCard icon={<AlertTriangle className="h-5 w-5" />} title="Intelligent Safety" color="from-red-500/20 to-red-500/5">
                Detect risks early, trigger protocols automatically.
              </FeatureCard>
              <FeatureCard icon={<ShieldCheck className="h-5 w-5" />} title="Worker Safety" color="from-blue-500/20 to-blue-500/5">
                Presence tracking, man‑down alerts, restricted zone guards.
              </FeatureCard>
              <FeatureCard icon={<Activity className="h-5 w-5" />} title="Environment" color="from-green-500/20 to-green-500/5">
                Gas, AQI, temperature and humidity monitoring in real time.
              </FeatureCard>
            </div>
          </div>
        </TabsContent>

        {/* Monitoring Tab */}
        <TabsContent value="monitoring" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Hero Image */}
            <div className="relative h-64 lg:h-full rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&q=80"
                alt="Monitoring"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">Real-Time Monitoring</h3>
                <p className="text-white/90 text-sm">Advanced environmental and operational monitoring systems</p>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 gap-4">
              <FeatureCard icon={<Activity className="h-5 w-5" />} title="Live Telemetry" color="from-green-500/20 to-green-500/5">
                Unified view of environmental sensors across sites.
              </FeatureCard>
              <FeatureCard icon={<Video className="h-5 w-5" />} title="Visual Feed" color="from-purple-500/20 to-purple-500/5">
                Computer‑vision powered insights from CCTV streams.
              </FeatureCard>
              <FeatureCard icon={<Cpu className="h-5 w-5" />} title="Anomaly Detection" color="from-orange-500/20 to-orange-500/5">
                Surface deviations and trend breaks automatically.
              </FeatureCard>
            </div>
          </div>
        </TabsContent>

        {/* Equipment Tab */}
        <TabsContent value="equipment" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Hero Image */}
            <div className="relative h-64 lg:h-full rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&q=80"
                alt="Equipment"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">Fleet Management</h3>
                <p className="text-white/90 text-sm">Track and optimize your heavy equipment and vehicles</p>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 gap-4">
              <FeatureCard icon={<Truck className="h-5 w-5" />} title="Fleet Tracking" color="from-orange-500/20 to-orange-500/5">
                High‑precision tracking and collision avoidance.
              </FeatureCard>
              <FeatureCard icon={<Cpu className="h-5 w-5" />} title="Health & Usage" color="from-blue-500/20 to-blue-500/5">
                Telemetry‑driven maintenance and utilization insights.
              </FeatureCard>
              <FeatureCard icon={<Activity className="h-5 w-5" />} title="Cycle Analytics" color="from-green-500/20 to-green-500/5">
                Load/haul cycle timing and optimization.
              </FeatureCard>
            </div>
          </div>
        </TabsContent>

        {/* AI Tab */}
        <TabsContent value="ai" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Hero Image */}
            <div className="relative h-64 lg:h-full rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80"
                alt="AI Assistant"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">AI-Powered Intelligence</h3>
                <p className="text-white/90 text-sm">Smart analytics and conversational data insights</p>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 gap-4">
              <FeatureCard icon={<Cpu className="h-5 w-5" />} title="Natural Language" color="from-purple-500/20 to-purple-500/5">
                Query operations data conversationally.
              </FeatureCard>
              <FeatureCard icon={<Activity className="h-5 w-5" />} title="Reports" color="from-blue-500/20 to-blue-500/5">
                Generate summaries and visualizations on demand.
              </FeatureCard>
              <FeatureCard icon={<ShieldCheck className="h-5 w-5" />} title="Guided Response" color="from-green-500/20 to-green-500/5">
                Incident playbooks and best‑practice prompts.
              </FeatureCard>
            </div>
          </div>
        </TabsContent>

        {/* Visual Tab */}
        <TabsContent value="visual" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Hero Image */}
            <div className="relative h-64 lg:h-full rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200&q=80"
                alt="Visual Monitoring"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">Visual Intelligence</h3>
                <p className="text-white/90 text-sm">Advanced CCTV and computer vision monitoring</p>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 gap-4">
              <FeatureCard icon={<Video className="h-5 w-5" />} title="PPE Compliance" color="from-blue-500/20 to-blue-500/5">
                Auto‑detect PPE usage across critical zones.
              </FeatureCard>
              <FeatureCard icon={<AlertTriangle className="h-5 w-5" />} title="Intrusion" color="from-red-500/20 to-red-500/5">
                Restricted area breaches flagged instantly.
              </FeatureCard>
              <FeatureCard icon={<Truck className="h-5 w-5" />} title="Throughput" color="from-orange-500/20 to-orange-500/5">
                Queue and movement analytics for bottlenecks.
              </FeatureCard>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function FeatureCard({ icon, title, children, color }: { icon: React.ReactNode; title: string; children: React.ReactNode; color: string }) {
  return (
    <Card className={`group relative border-2 border-accent/20 overflow-hidden hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-gradient-to-br ${color}`}>
      {/* Decorative background element */}
      <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity">
        <div className="h-32 w-32">{icon}</div>
      </div>

      <CardHeader className="flex flex-row items-center gap-3 pb-2 relative">
        <div className="rounded-xl bg-accent/15 p-3 text-accent shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <CardTitle className="text-base group-hover:text-accent transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground leading-relaxed relative">
        {children}
      </CardContent>
    </Card>
  )
}
