import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart2, Check } from "lucide-react"

export default function PricingPage() {
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
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:underline underline-offset-4 text-primary">
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
                  Simple, Transparent Pricing
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose the plan that's right for you and your blockchain monitoring needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-12">
              {/* Free Plan */}
              <div className="flex flex-col rounded-lg border bg-card shadow-sm">
                <div className="p-6">
                  <h3 className="text-2xl font-bold">Free</h3>
                  <div className="mt-4 flex items-baseline text-gray-900 dark:text-gray-50">
                    <span className="text-4xl font-extrabold tracking-tight">$0</span>
                    <span className="ml-1 text-xl font-semibold">/month</span>
                  </div>
                  <p className="mt-4 text-gray-500 dark:text-gray-400">
                    Perfect for individuals who want to explore blockchain monitoring
                  </p>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 pt-0">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Basic transaction monitoring</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Up to 100 transactions per day</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Single blockchain support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>24-hour data retention</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Community support</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link href="/app">
                      <Button variant="outline" className="w-full">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Pro Plan */}
              <div className="flex flex-col rounded-lg border bg-card shadow-sm relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Popular
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <div className="mt-4 flex items-baseline text-gray-900 dark:text-gray-50">
                    <span className="text-4xl font-extrabold tracking-tight">$49</span>
                    <span className="ml-1 text-xl font-semibold">/month</span>
                  </div>
                  <p className="mt-4 text-gray-500 dark:text-gray-400">
                    For professionals who need advanced monitoring capabilities
                  </p>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 pt-0">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Advanced transaction monitoring</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Unlimited transactions</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Multi-chain support (3 chains)</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>30-day data retention</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Email alerts</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Basic API access</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Priority email support</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link href="/app">
                      <Button className="w-full">Get Started</Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="flex flex-col rounded-lg border bg-card shadow-sm">
                <div className="p-6">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <div className="mt-4 flex items-baseline text-gray-900 dark:text-gray-50">
                    <span className="text-4xl font-extrabold tracking-tight">$199</span>
                    <span className="ml-1 text-xl font-semibold">/month</span>
                  </div>
                  <p className="mt-4 text-gray-500 dark:text-gray-400">
                    For organizations with advanced security and compliance needs
                  </p>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 pt-0">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Everything in Pro</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Unlimited multi-chain support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>1-year data retention</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Advanced anomaly detection</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Custom webhooks and integrations</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Full API access</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Dedicated account manager</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link href="/app">
                      <Button variant="outline" className="w-full">
                        Contact Sales
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Find answers to common questions about TxnTracker pricing and features.
                </p>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="text-lg font-semibold">Can I change plans at any time?</h3>
                  <p className="mt-2 text-gray-500">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your
                    next billing cycle.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="text-lg font-semibold">Do you offer a free trial?</h3>
                  <p className="mt-2 text-gray-500">
                    Yes, all paid plans come with a 14-day free trial. No credit card required to start.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="text-lg font-semibold">What payment methods do you accept?</h3>
                  <p className="mt-2 text-gray-500">
                    We accept all major credit cards and cryptocurrency payments (BTC, ETH, USDC).
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="text-lg font-semibold">Do you offer custom plans?</h3>
                  <p className="mt-2 text-gray-500">
                    Yes, we offer custom plans for organizations with specific needs. Contact our sales team to discuss
                    your requirements.
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
                <Link href="/features">
                  <Button variant="outline">Learn More</Button>
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
