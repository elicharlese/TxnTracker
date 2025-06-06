"use client"

interface TransactionTableProps {
  onSelectTransaction: (id: string) => void
}

export function TransactionTable({ onSelectTransaction }: TransactionTableProps) {
  // Mock data for the transaction table - generate more rows to ensure scrolling
  const transactions = Array.from({ length: 50 }).map((_, i) => ({
    pid: 63576 + i,
    user: "elicharles",
    pri: 17,
    ni: 0,
    virt: "398G",
    res: 12672,
    s: "?",
    cpu: "0.0",
    mem: "0.2",
    time: "0:00.00",
    command: `|- /usr/libexec/secinitd ${i}`,
  }))

  return (
    <div className="flex flex-col h-full">
      {/* System stats section - this will remain fixed */}
      <div className="bg-gray-100 dark:bg-gray-800 p-4 text-sm flex-shrink-0">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
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
              <span>3[#####**</span>
              <span>6.6%]</span>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between">
              <span>4[###**</span>
              <span>5.3%]</span>
            </div>
            <div className="flex justify-between">
              <span>5[##*</span>
              <span>3.3%]</span>
            </div>
            <div className="flex justify-between">
              <span>6[#</span>
              <span>1.3%]</span>
            </div>
            <div className="flex justify-between">
              <span>7[</span>
              <span>0.0%]</span>
            </div>
          </div>
        </div>
        <div className="mt-2 space-y-1">
          <div className="flex justify-between">
            <span>Mem[||||||||||||||| #@@@@@@@@@</span>
            <span>2.98G/8.00G]</span>
          </div>
          <div className="flex justify-between">
            <span>Swp[|||||||||||||||||||||||||||||||||||||||||||||</span>
            <span>9.25G/10.0G]</span>
          </div>
        </div>
        <div className="mt-4">
          <div>Tasks: 435, 2770 thr, 0 kthr; 1 running</div>
          <div>Load average: 1.57 1.80 2.30</div>
          <div>Uptime: 4 days, 14:39:48</div>
        </div>
      </div>

      {/* Custom table implementation with sticky header */}
      <div className="flex-1 overflow-hidden flex flex-col">
        {/* Sticky header */}
        <div className="bg-gray-200 dark:bg-gray-700 flex-shrink-0">
          <div className="flex px-4 py-3 font-medium text-sm">
            <div className="w-[120px]">PID - USER</div>
            <div className="w-[60px]">PRI</div>
            <div className="w-[60px]">NI</div>
            <div className="w-[80px]">VIRT</div>
            <div className="w-[80px]">RES</div>
            <div className="w-[40px]">S</div>
            <div className="w-[60px]">CPU%</div>
            <div className="w-[60px]">MEM%</div>
            <div className="w-[80px]">TIME+</div>
            <div className="flex-1">Command</div>
          </div>
        </div>

        {/* Scrollable rows */}
        <div className="flex-1 overflow-y-auto">
          {transactions.map((transaction, index) => (
            <div
              key={index}
              className={`flex px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${
                index % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : ""
              }`}
              onClick={() => onSelectTransaction(`txn-${index}`)}
            >
              <div className="w-[120px] font-mono truncate">
                {transaction.pid} {transaction.user}
              </div>
              <div className="w-[60px] font-mono">{transaction.pri}</div>
              <div className="w-[60px] font-mono">{transaction.ni}</div>
              <div className="w-[80px] font-mono">{transaction.virt}</div>
              <div className="w-[80px] font-mono">{transaction.res}</div>
              <div className="w-[40px] font-mono">{transaction.s}</div>
              <div className="w-[60px] font-mono">{transaction.cpu}</div>
              <div className="w-[60px] font-mono">{transaction.mem}</div>
              <div className="w-[80px] font-mono">{transaction.time}</div>
              <div className="flex-1 font-mono truncate">{transaction.command}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
