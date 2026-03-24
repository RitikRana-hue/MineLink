import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/favicon.svg" alt="MineLink" className="h-6 w-6" />
              <h3 className="text-xl font-bold tracking-tight text-foreground">MineLink</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Intelligent systems for safer and more efficient mining operations.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/platform" className="hover:text-primary">Overview</Link></li>
              <li><Link href="/solutions" className="hover:text-primary">Solutions</Link></li>
              <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/solutions/environmental-intelligence" className="hover:text-primary">Environmental Intelligence</Link></li>
              <li><Link href="/solutions/worker-safety-monitoring" className="hover:text-primary">Worker Safety</Link></li>
              <li><Link href="/solutions/intelligent-safety-system" className="hover:text-primary">Intelligent Safety</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/contact" className="hover:text-primary">Get in Touch</Link></li>
              <li><span className="block">support@nodesio.in</span></li>
              <li><span className="block">+91 72918-97879</span></li>
              <li><span className="block">Ballabgarh, Faridabad</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 items-center gap-4 rounded-2xl border bg-card p-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold">Subscribe for product updates</h4>
            <p className="text-sm text-muted-foreground">News on safety systems, AI assistance, and monitoring tools.</p>
          </div>
          <form className="flex w-full gap-2">
            <Input placeholder="you@company.com" type="email" />
            <Button>Subscribe</Button>
          </form>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MineLink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
