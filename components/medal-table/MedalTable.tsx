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
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          🏅 Olympic Medal Count
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <MedalTableHead currentSort={currentSort} onSort={onSort} />
          <MedalTableBody data={data} />
        </Table>
      </CardContent>
    </Card>
  )
}
