"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import Link from "next/link"

type Cmd = { label: string; href: string; keywords?: string[] }
const COMMANDS: Cmd[] = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions", keywords: ["modules", "products"] },
  { label: "Dashboard", href: "/dashboard", keywords: ["operations"] },
  { label: "Sites", href: "/sites", keywords: ["locations"] },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function CommandPalette() {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const router = useRouter()

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isModK = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k"
      const isSlash = e.key === "/"
      if (isModK || isSlash) {
        e.preventDefault()
        setOpen((v) => !v)
      }
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const filtered = COMMANDS.filter((c) => {
    const q = query.toLowerCase()
    return (
      c.label.toLowerCase().includes(q) ||
      c.href.toLowerCase().includes(q) ||
      (c.keywords || []).some((k) => k.toLowerCase().includes(q))
    )
  })

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="top" className="w-full max-w-2xl mx-auto">
        <div className="space-y-2">
          <Input
            autoFocus
            placeholder="Type a command or search… (Ctrl/Cmd+K)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="max-h-80 overflow-auto rounded-lg border bg-card">
            {filtered.length === 0 ? (
              <div className="p-4 text-sm text-muted-foreground">No results</div>
            ) : (
              <ul className="divide-y">
                {filtered.map((c) => (
                  <li key={c.href}>
                    <button
                      className="w-full text-left px-4 py-3 hover:bg-muted transition-colors"
                      onClick={() => {
                        router.push(c.href)
                        setOpen(false)
                      }}
                    >
                      <div className="font-medium">{c.label}</div>
                      <div className="text-xs text-muted-foreground">{c.href}</div>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Navigate anywhere fast</span>
            <span className="rounded border px-1.5 py-0.5">Ctrl/Cmd + K</span>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
