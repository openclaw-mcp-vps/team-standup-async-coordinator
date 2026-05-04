import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StandupSync — Async Standup Coordinator',
  description: 'Coordinate async standups across timezones automatically. Collect daily updates via Slack/Teams, identify blockers with AI, and generate automated reports.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c29e5350-fb5f-4e65-a404-953397a60e28"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
