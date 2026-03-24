"use client"

export default function DashboardLoading() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8">
      <div className="mb-6 h-10 w-56 rounded bg-muted" />
      <div className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-8 rounded bg-muted" />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-32 rounded-lg border bg-card shadow-sm" />
        ))}
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="h-64 rounded-lg border bg-card shadow-sm" />
        <div className="h-64 rounded-lg border bg-card shadow-sm" />
      </div>
    </div>
  )
}
