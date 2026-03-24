"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-7xl flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 text-8xl font-extrabold text-accent">404</div>
      <h1 className="text-2xl font-bold">Page not found</h1>
      <p className="mt-2 max-w-md text-muted-foreground">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <div className="mt-6 flex gap-3">
        <Button render={<Link href="/" />}>Go Home</Button>
        <Button variant="outline" render={<Link href="/solutions" />}>Browse Solutions</Button>
      </div>
    </div>
  )
}
