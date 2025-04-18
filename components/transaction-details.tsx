"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, ExternalLink, Bookmark } from "lucide-react"

interface TransactionDetailsProps {
  transactionId: string
  onClose: () => void
}

export function TransactionDetails({ transactionId, onClose }: TransactionDetailsProps) {
  const [notes, setNotes] = useState("")

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="p-4 border-b flex items-center">
        <Button variant="ghost" size="sm" onClick={onClose}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Transactions
        </Button>
        <div className="ml-auto">
          <Button variant="outline" size="sm">
            <Bookmark className="h-4 w-4 mr-2" />
            Bookmark
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 p-4 overflow-auto flex-1 min-h-0">
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Transaction Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="font-medium">Transaction ID:</div>
                  <div className="font-mono">{transactionId}</div>
                  <div className="font-medium">Status:</div>
                  <div className="text-green-500">Confirmed</div>
                  <div className="font-medium">Block:</div>
                  <div className="font-mono">15,234,567</div>
                  <div className="font-medium">Timestamp:</div>
                  <div>Mar 6, 2023 14:32:45</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Transaction Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="font-medium">From:</div>
                  <div className="font-mono truncate">0x1a2b3c4d5e6f7g8h9i0j...</div>
                  <div className="font-medium">To:</div>
                  <div className="font-mono truncate">0x9i8h7g6f5e4d3c2b1a0...</div>
                  <div className="font-medium">Value:</div>
                  <div>0.5 ETH</div>
                  <div className="font-medium">Gas Price:</div>
                  <div>25 Gwei</div>
                  <div className="font-medium">Gas Limit:</div>
                  <div>21,000</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Metadata</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">ABI</div>
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <ExternalLink className="h-3.5 w-3.5" />
                    View
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">ByteCode</div>
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <ExternalLink className="h-3.5 w-3.5" />
                    View
                  </Button>
                </div>
                <div className="pt-4">
                  <Textarea
                    placeholder="Add some notes..."
                    className="min-h-[100px]"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Transaction Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full relative">
                <svg className="w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="none">
                  <path
                    d="M0,150 C50,100 100,200 150,100 C200,50 250,150 300,100 C350,50 400,150 450,50 C500,150 550,100 600,150 C650,200 700,100 750,150 C800,200 850,100 900,150 C950,200 1000,150 1000,150"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                  />
                  <circle cx="750" cy="150" r="6" fill="currentColor" className="text-primary" />
                </svg>

                <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 bg-white dark:bg-gray-800 border rounded-lg p-2 shadow-md">
                  <div className="text-xs space-y-1">
                    <div className="font-medium">Nonce: 100000</div>
                    <div className="font-medium"># Calls: 100000</div>
                    <div className="font-medium">Chain: 100000</div>
                    <div className="font-medium">Network: 100000</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-4 text-xs text-gray-500">
                <div className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Jan '23</div>
                <div className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Feb '23</div>
                <div className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Mar '23</div>
                <div className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Apr '23</div>
                <div className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">May '23</div>
                <div className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Jun '23</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="default">Accept</Button>
                  <Button variant="outline">Decline</Button>
                </div>

                <div className="pt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm">THROUGH</div>
                    <div className="flex gap-2">
                      <Input placeholder="MM/DD/YYYY" className="w-[150px]" />
                      <Input placeholder="MM/DD/YYYY" className="w-[150px]" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm">COMPARE:</div>
                    <div className="flex gap-2">
                      <Input placeholder="0x000000000000000" className="w-[250px] font-mono" />
                      <Button>Apply</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

