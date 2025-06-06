"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, LinkIcon, ArrowRight } from "lucide-react"

interface EmptyStateProps {
  onConnect: () => void
}

export function EmptyState({ onConnect }: EmptyStateProps) {
  return (
    <div className="flex items-center justify-center h-full p-4 flex-1">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-primary/10">
            <Database className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">No Blockchain Connection</CardTitle>
          <CardDescription>
            Connect to a blockchain network to start monitoring transactions in real-time.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-md bg-muted p-4">
            <div className="font-mono text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <LinkIcon className="h-4 w-4" />
                <span>Waiting for connection...</span>
              </div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>TxnTracker will connect to LINK&apos;s Oracles to fetch real-time blockchain transaction data.</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={onConnect}>
            Connect to Blockchain
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
