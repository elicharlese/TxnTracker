import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart2, Users, Globe, Code, Shield } from "lucide-react"

export default function AboutPage() {
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
            <Link href="/features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4 text-primary">
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  At TxnTracker, we're dedicated to bringing transparency and security to the blockchain ecosystem. Our
                  mission is to provide powerful, intuitive tools that help professionals monitor and analyze blockchain
                  transactions with the same level of detail and insight as traditional network traffic.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Founded in 2021 by a team of blockchain security experts and developers, TxnTracker has quickly become
                  the go-to solution for cybersecurity professionals, blockchain analysts, and developers who need
                  real-time insights into on-chain activity.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Our Values</h3>
                  <ul className="space-y-4 mt-4">
                    <li className="flex items-start gap-3">
                      <Shield className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">Security First</h4>
                        <p className="text-sm text-gray-500">
                          We prioritize security in everything we do, from our product design to our internal practices.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Code className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">Technical Excellence</h4>
                        <p className="text-sm text-gray-500">
                          We're committed to building robust, high-performance tools that meet the needs of technical
                          professionals.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Globe className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">Blockchain Transparency</h4>
                        <p className="text-sm text-gray-500">
                          We believe in making blockchain data accessible and understandable to promote a more
                          transparent ecosystem.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">Community Driven</h4>
                        <p className="text-sm text-gray-500">
                          We actively engage with our user community to shape our product roadmap and features.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Meet the experts behind TxnTracker
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12 mt-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="h-32 w-32 overflow-hidden rounded-full bg-gray-200">
                  <img
                    src="/placeholder.svg?height=128&width=128"
                    alt="Team member"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Alex Chen</h3>
                  <p className="text-sm text-primary">CEO & Co-Founder</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Former security researcher with 10+ years of experience in blockchain security and analysis.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="h-32 w-32 overflow-hidden rounded-full bg-gray-200">
                  <img
                    src="/placeholder.svg?height=128&width=128"
                    alt="Team member"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Sophia Rodriguez</h3>
                  <p className="text-sm text-primary">CTO & Co-Founder</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Blockchain developer and architect who previously led engineering teams at major crypto exchanges.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="h-32 w-32 overflow-hidden rounded-full bg-gray-200">
                  <img
                    src="/placeholder.svg?height=128&width=128"
                    alt="Team member"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Marcus Johnson</h3>
                  <p className="text-sm text-primary">Head of Product</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Product strategist with experience building tools for cybersecurity professionals and financial
                    analysts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  TxnTracker was born out of necessity. As blockchain security professionals, our founding team was
                  frustrated by the lack of specialized tools for monitoring blockchain transactions with the same level
                  of detail and insight as traditional network traffic.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  We built the first version of TxnTracker for our own use, creating a terminal-like interface that
                  would feel familiar to cybersecurity professionals while providing the specific features needed for
                  blockchain analysis.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  After receiving enthusiastic feedback from colleagues, we decided to develop TxnTracker into a
                  full-featured product that could benefit the entire blockchain security community. Today, TxnTracker
                  is used by thousands of professionals worldwide to monitor, analyze, and secure blockchain
                  transactions.
                </p>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Our Growth</h3>
                  <ul className="mt-4 space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 text-primary">2021</div>
                      <div>
                        <p className="text-sm text-gray-500">Founded in San Francisco with a team of 5</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 text-primary">2022</div>
                      <div>
                        <p className="text-sm text-gray-500">Launched beta version with 500 early users</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 text-primary">2023</div>
                      <div>
                        <p className="text-sm text-gray-500">Expanded to 20 team members and 10,000+ users</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 text-primary">2024</div>
                      <div>
                        <p className="text-sm text-gray-500">Secured Series A funding to accelerate development</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Join Our Team</h3>
                  <p className="mt-2 text-gray-500">
                    We're always looking for talented individuals who are passionate about blockchain security and
                    building great products.
                  </p>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">
                      View Open Positions
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Experience TxnTracker?
                </h2>
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

