import { TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { SortableColumnHeader } from "./SortableColumnHeader"
import { SortType, SortDirection } from "@/lib/utils"

interface MedalTableHeadProps {
  currentSort?: SortType
  sortDirection?: SortDirection
  onSort?: (sortKey: string) => void
}

export function MedalTableHead({
  currentSort,
  sortDirection,
  onSort,
}: MedalTableHeadProps) {
  return (
    <TableHeader>
      <TableRow className="border-b-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
        <TableHead className="text-center w-16 font-bold text-gray-700 dark:text-gray-300 py-4">
          Rank
        </TableHead>
        <TableHead className="font-bold min-w-[200px] text-gray-700 dark:text-gray-300 py-4">
          Country
        </TableHead>
        <TableHead className="text-center py-4">
          <SortableColumnHeader
            title="🥇 Gold"
            sortKey="gold"
            currentSort={currentSort}
            sortDirection={sortDirection}
            onSort={onSort}
          />
        </TableHead>
        <TableHead className="text-center py-4">
          <SortableColumnHeader
            title="🥈 Silver"
            sortKey="silver"
            currentSort={currentSort}
            sortDirection={sortDirection}
            onSort={onSort}
          />
        </TableHead>
        <TableHead className="text-center py-4">
          <SortableColumnHeader
            title="🥉 Bronze"
            sortKey="bronze"
            currentSort={currentSort}
            sortDirection={sortDirection}
            onSort={onSort}
          />
        </TableHead>
        <TableHead className="text-center py-4">
          <SortableColumnHeader
            title="🏆 Total"
            sortKey="total"
            currentSort={currentSort}
            sortDirection={sortDirection}
            onSort={onSort}
          />
        </TableHead>
      </TableRow>
    </TableHeader>
  )
}
