"use client"

import * as React from "react"
import { Activity, Cpu, Clock4, Globe } from "lucide-react"

/* ─── Types ─────────────────────────────────────────── */
interface NodeStat {
  icon: React.ElementType
  label: string
  value: string
  active: boolean
}

/* ─── Data ───────────────────────────────────────────── */
const nodes: NodeStat[] = [
  { icon: Activity, label: "Node Status",    value: "Operational",  active: true  },
  { icon: Clock4,   label: "Avg. Latency",   value: "14ms",         active: true  },
  { icon: Cpu,      label: "Build System",   value: "Turbopack",    active: true  },
  { icon: Globe,    label: "Deploy Region",  value: "SIN1 · Asia",  active: true  },
]

/* ─── Main Export ────────────────────────────────────── */
export function StatusBar() {
  const [tick, setTick] = React.useState(true)
  const [timestamp, setTimestamp] = React.useState<string | null>(null)

  // Subtle pulse every 3s to simulate live status
  React.useEffect(() => {
    const updateTs = () =>
      setTimestamp(new Date().toISOString().slice(0, 19).replace("T", " "))
    updateTs()
    const id = setInterval(() => {
      setTick((v) => !v)
      updateTs()
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      aria-label="Infrastructure status"
      className="px-6 py-12 border-b border-[#1E222D] bg-[#090A0F]"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-6">

        {/* Label row */}
        <div className="flex items-center gap-3">
          <span
            className={`w-2 h-2 rounded-full transition-all duration-700 ${
              tick ? "bg-[#D4A373] opacity-100 shadow-[0_0_8px_rgba(212,163,115,0.8)]" : "bg-[#D4A373] opacity-40"
            }`}
            aria-hidden="true"
          />
          <span className="text-[0.62rem] font-mono font-bold tracking-[0.22em] uppercase text-[#D4A373]/80">
            Infrastructure // Live System Status
          </span>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#1E222D] border border-[#1E222D] rounded-lg overflow-hidden">
          {nodes.map(({ icon: Icon, label, value, active }) => (
            <div
              key={label}
              className="flex flex-col gap-3 bg-[#090A0F] hover:bg-[#12141C] transition-colors px-6 py-5"
            >
              <div className="flex items-center justify-between">
                <Icon className="w-3.5 h-3.5 text-[#D4A373]" />
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    active ? "bg-[#D4A373]" : "bg-[#6B7280]"
                  }`}
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-[#F9FAFB] tracking-tight">
                  {value}
                </span>
                <span className="text-[0.62rem] font-mono tracking-wider uppercase text-[#9CA3AF]">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mono status line */}
        <p className="text-[0.62rem] font-mono text-[#6B7280] tracking-wider">
          {timestamp
            ? `// SYSTEM: Twilight Studio Infrastructure · All nodes nominal · Last checked: ${timestamp} UTC`
            : "// SYSTEM: Twilight Studio Infrastructure · All nodes nominal · Initializing..."}
        </p>
      </div>
    </section>
  )
}
