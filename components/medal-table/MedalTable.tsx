import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table } from "@/components/ui/table"
import { MedalTableHead } from "./MedalTableHead"
import { MedalTableBody } from "./MedalTableBody"
import { MedalData, SortType, SortDirection } from "@/lib/utils"

interface MedalTableProps {
  data: MedalData[]
  totalCountries?: number
  currentSort?: SortType
  sortDirection?: SortDirection
  onSort?: (sortKey: string) => void
  isLoading?: boolean
}

export function MedalTable({
  data,
  totalCountries,
  currentSort,
  sortDirection,
  onSort,
  isLoading = false,
}: MedalTableProps) {
  return (
    <Card className="w-full shadow-sm border bg-white dark:bg-card">
      <CardHeader className="pb-6 border-b bg-gradient-to-r from-blue-50 to-red-50 dark:from-blue-950/20 dark:to-red-950/20">
        <CardTitle className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          🏅 Medal Count
        </CardTitle>
        <div className="text-center space-y-1">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Olympic Games - Top 10 Countries
            {totalCountries && totalCountries > 10 && (
              <span className="ml-1 text-xs">(of {totalCountries} total)</span>
            )}
          </p>
          {currentSort && (
            <p className="text-xs text-blue-600 dark:text-blue-400">
              Sorted by{" "}
              {currentSort === "total"
                ? "Total Medals"
                : currentSort === "gold"
                ? "Gold Medals"
                : currentSort === "silver"
                ? "Silver Medals"
                : "Bronze Medals"}
              ({sortDirection === "asc" ? "Low to High" : "High to Low"})
            </p>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-hidden">
          <Table>
            <MedalTableHead
              currentSort={currentSort}
              sortDirection={sortDirection}
              onSort={onSort}
            />
            <MedalTableBody data={data} isLoading={isLoading} />
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
