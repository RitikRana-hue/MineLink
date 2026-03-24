"use client"

import { cn } from "@/lib/utils"
import * as React from "react"

export function Container({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4", className)} {...props}>
      {children}
    </div>
  )
}
