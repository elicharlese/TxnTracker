import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  BarChart2,
  Eye,
  Shield,
  AlertTriangle,
  Search,
  History,
  Zap,
  Database,
  LineChart,
} from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <BarChart2 className="h-6 w-6" />
              <span className="text-xl font-bold">TxnTracker</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/features" className="text-sm font-medium hover:underline underline-offset-4 text-primary">
              Features
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
          </nav>
          <div>
            <Link href="/app">
              <Button>Launch App</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Powerful Features for Blockchain Monitoring
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  TxnTracker provides a comprehensive suite of tools for monitoring and analyzing blockchain
                  transactions in real-time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Real-time Monitoring</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Watch blockchain transactions as they happen with a familiar terminal-like interface. Track
                    transaction status, gas prices, and network congestion in real-time.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Security Insights</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Identify suspicious transactions and potential security threats with advanced pattern recognition.
                    Set up alerts for unusual activity on your watched addresses.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Anomaly Detection</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our AI-powered system automatically flags unusual transaction patterns and potential security risks,
                    helping you stay ahead of threats.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Advanced Filtering</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Filter transactions by address, value, gas price, or custom parameters. Save your filters for quick
                    access to the data that matters most to you.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                  <History className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Historical Analysis</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Access and analyze historical transaction data with powerful visualization tools. Identify trends
                    and patterns over time to inform your strategy.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Smart Contract Monitoring</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Monitor smart contract interactions and executions. Decode contract calls and events for better
                    visibility into on-chain activity.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Multi-chain Support</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Monitor transactions across multiple blockchains from a single interface. Support for Ethereum,
                    Polygon, Binance Smart Chain, and more.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Custom Analytics</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Create custom dashboards and reports tailored to your specific needs. Export data for further
                    analysis in your preferred tools.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                  <BarChart2 className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">API Integration</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Connect TxnTracker to your existing systems with our comprehensive API. Build custom integrations
                    and automated workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join thousands of blockchain professionals who trust TxnTracker for their monitoring needs.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/app">
                  <Button className="gap-1">
                    Launch App <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline">View Pricing</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row">
          <div className="flex items-center gap-2">
            <BarChart2 className="h-5 w-5" />
            <span className="text-lg font-semibold">TxnTracker</span>
          </div>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 md:text-left">
            © 2023 TxnTracker. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6 ml-auto">
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

