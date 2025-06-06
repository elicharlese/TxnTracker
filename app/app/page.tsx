"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Bell, Search, Filter, List, ArrowUpDown, X, HelpCircle, Settings, BarChart2 } from "lucide-react"
import { TransactionTable } from "@/components/transaction-table"
import { TransactionDetails } from "@/components/transaction-details"
import { EmptyState } from "@/components/empty-state"
import Link from "next/link"

export default function AppPage() {
  const [selectedTransaction, setSelectedTransaction] = useState<string | null>(null)
  const [hasTransactions, setHasTransactions] = useState(false)

  // Toggle between empty state and transaction data for demo purposes
  const toggleTransactions = () => {
    setHasTransactions(!hasTransactions)
    setSelectedTransaction(null)
  }

  return (
    <div className="flex flex-col h-screen">
      <header className="border-b bg-background flex-shrink-0">
        <div className="container flex h-14 items-center px-4">
          <div className="flex-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-lg font-semibold hover:text-primary transition-colors"
            >
              <BarChart2 className="h-5 w-5" />
              <span>TXN Tracker</span>
            </Link>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-hidden">
        {hasTransactions ? (
          <div className="h-full">
            {selectedTransaction ? (
              <TransactionDetails transactionId={selectedTransaction} onClose={() => setSelectedTransaction(null)} />
            ) : (
              <TransactionTable onSelectTransaction={setSelectedTransaction} />
            )}
          </div>
        ) : (
          <EmptyState onConnect={toggleTransactions} />
        )}
      </main>
      <footer className="border-t py-2 bg-background flex-shrink-0">
        <div className="container flex items-center px-4 text-xs text-muted-foreground">
          <div className="flex gap-4 overflow-x-auto">
            <Button variant="ghost" size="sm" className="h-8 text-xs gap-1">
              <HelpCircle className="h-3.5 w-3.5" />
              HELP
            </Button>
            <Button variant="ghost" size="sm" className="h-8 text-xs gap-1">
              <Settings className="h-3.5 w-3.5" />
              SETUP
            </Button>
            <Button variant="ghost" size="sm" className="h-8 text-xs gap-1">
              <Search className="h-3.5 w-3.5" />
              SEARCH
            </Button>
            <Button variant="ghost" size="sm" className="h-8 text-xs gap-1">
              <Filter className="h-3.5 w-3.5" />
              FILTER
            </Button>
            <Button variant="ghost" size="sm" className="h-8 text-xs gap-1">
              <List className="h-3.5 w-3.5" />
              LIST
            </Button>
            <Button variant="ghost" size="sm" className="h-8 text-xs gap-1">
              <ArrowUpDown className="h-3.5 w-3.5" />
              SORTBY
            </Button>
          </div>
          <div className="ml-auto">
            <Button variant="ghost" size="sm" className="h-8 text-xs">
              <X className="h-3.5 w-3.5" />
              QUIT
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
