"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CommandPalette } from "@/components/command-palette"

const solutions = [
  {
    title: "Environmental Intelligence",
    href: "/solutions/environmental-intelligence",
    description: "Real-time monitoring of air quality, gas levels, and environmental conditions.",
  },
  {
    title: "Worker Safety Monitoring",
    href: "/solutions/worker-safety-monitoring",
    description: "Track worker presence and ensure safety across different mining zones.",
  },
  {
    title: "Vehicle & Equipment Tracking",
    href: "/solutions/vehicle-tracking",
    description: "Monitor movement and usage of vehicles and heavy equipment.",
  },
  {
    title: "Intelligent Safety System",
    href: "/solutions/intelligent-safety-system",
    description: "Detect risks early and enable faster response to critical situations.",
  },
  {
    title: "Mining AI Assistant",
    href: "/solutions/ai-assistant",
    description: "Analyze data and provide quick insights for better decision-making.",
  },
  {
    title: "Visual Monitoring (CCTV)",
    href: "/solutions/visual-monitoring",
    description: "Advanced surveillance system for real-time monitoring and safety assurance.",
  },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/favicon.svg" alt="MineLink" className="h-8 w-8" />
            <span className="text-2xl font-bold tracking-tight text-foreground">MineLink</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  render={<Link href="/" />}
                  className={cn(navigationMenuTriggerStyle(), pathname === "/" && "text-accent")}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  render={<Link href="/platform" />}
                  className={cn(navigationMenuTriggerStyle(), pathname === "/platform" && "text-accent")}
                >
                  Platform
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(pathname.startsWith("/solutions") && "text-accent")}>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {solutions.map((solution) => (
                      <ListItem
                        key={solution.title}
                        title={solution.title}
                        href={solution.href}
                      >
                        {solution.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  render={<Link href="/about" />}
                  className={cn(navigationMenuTriggerStyle(), pathname === "/about" && "text-accent")}
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  render={<Link href="/contact" />}
                  className={cn(navigationMenuTriggerStyle(), pathname === "/contact" && "text-accent")}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ThemeToggle />
          <Link href="/contact" className="ml-2">
            <Button>
              Get a Demo
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon" />}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className={cn("text-lg font-medium transition-colors hover:text-primary", pathname === "/" ? "text-primary" : "text-muted-foreground")}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/platform"
                  className={cn("text-lg font-medium transition-colors hover:text-primary", pathname === "/platform" ? "text-primary" : "text-muted-foreground")}
                  onClick={() => setIsOpen(false)}
                >
                  Platform
                </Link>
                <div className="flex flex-col space-y-2">
                  <span className="text-lg font-medium">Solutions</span>
                  <div className="pl-4 flex flex-col space-y-2">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.title}
                        href={solution.href}
                        className={cn("text-sm transition-colors hover:text-primary", pathname === solution.href ? "text-primary" : "text-muted-foreground")}
                        onClick={() => setIsOpen(false)}
                      >
                        {solution.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  href="/about"
                  className={cn("text-lg font-medium transition-colors hover:text-primary", pathname === "/about" ? "text-primary" : "text-muted-foreground")}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={cn("text-lg font-medium transition-colors hover:text-primary", pathname === "/contact" ? "text-primary" : "text-muted-foreground")}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <CommandPalette />
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-accent focus:text-accent",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
