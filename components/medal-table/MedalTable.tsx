import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table } from "@/components/ui/table"
import { MedalTableHead } from "./MedalTableHead"
import { MedalTableBody } from "./MedalTableBody"

interface MedalData {
  code: string
  country: string
  gold: number
  silver: number
  bronze: number
  total: number
}

interface MedalTableProps {
  data: MedalData[]
  currentSort?: string
  onSort?: (sortKey: string) => void
  isLoading?: boolean
}

export function MedalTable({
  data,
  currentSort,
  onSort,
  isLoading = false,
}: MedalTableProps) {
  return (
    <Card className="w-full shadow-sm border bg-white dark:bg-card">
      <CardHeader className="pb-6 border-b bg-gradient-to-r from-blue-50 to-red-50 dark:from-blue-950/20 dark:to-red-950/20">
        <CardTitle className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          🏅 Medal Count
        </CardTitle>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Olympic Games - Top Countries
        </p>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-hidden">
          <Table>
            <MedalTableHead currentSort={currentSort} onSort={onSort} />
            <MedalTableBody data={data} isLoading={isLoading} />
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
