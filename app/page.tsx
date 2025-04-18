import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart2, Shield, Eye } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <BarChart2 className="h-6 w-6" />
            <span className="text-xl font-bold">TxnTracker</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/features" className="text-sm font-medium hover:underline underline-offset-4">
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
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Monitor Blockchain Transactions Like a Cybersecurity Professional
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  TxnTracker provides real-time monitoring of blockchain transactions with a familiar interface inspired
                  by network traffic monitoring tools.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/app">
                    <Button className="gap-1">
                      Launch App <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/features">
                    <Button variant="outline">Learn More</Button>
                  </Link>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-2">
                <div className="overflow-hidden rounded-md bg-black text-white font-mono text-sm">
                  <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <div>TxnTracker Terminal</div>
                    <div></div>
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex justify-between">
                      <span>0[#####******</span>
                      <span>14.6%]</span>
                    </div>
                    <div className="flex justify-between">
                      <span>1[#####****</span>
                      <span>10.7%]</span>
                    </div>
                    <div className="flex justify-between">
                      <span>2[#####****</span>
                      <span>10.7%]</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mem[||||||||||||||| #@@@@@@@@@</span>
                      <span>2.98G/8.00G]</span>
                    </div>
                    <div className="mt-4 text-green-400">Monitoring blockchain transactions...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover why blockchain professionals choose TxnTracker for monitoring transactions
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Real-time Monitoring</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Watch transactions happen live on the blockchain with an intuitive interface.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Security Insights</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Analyze transaction patterns and detect anomalies with professional-grade tools.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                  <BarChart2 className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Detailed Analytics</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Dive deep into transaction details with comprehensive metadata and visualizations.
                  </p>
                </div>
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

