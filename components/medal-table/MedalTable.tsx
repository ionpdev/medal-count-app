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
}

export function MedalTable({ data, currentSort, onSort }: MedalTableProps) {
  return (
    <Card className="w-full shadow-lg border-0 bg-card">
      <CardHeader className="pb-4">
        <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-yellow-600 via-gray-500 to-amber-600 bg-clip-text text-transparent">
          🏅 Olympic Medal Count
        </CardTitle>
        <p className="text-center text-muted-foreground">
          Top countries by medal performance
        </p>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="rounded-lg border">
          <Table>
            <MedalTableHead currentSort={currentSort} onSort={onSort} />
            <MedalTableBody data={data} />
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
