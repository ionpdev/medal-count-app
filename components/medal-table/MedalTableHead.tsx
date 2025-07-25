import { TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { SortableColumnHeader } from "./SortableColumnHeader"

interface MedalTableHeadProps {
  currentSort?: string
  onSort?: (sortKey: string) => void
}

export function MedalTableHead({ currentSort, onSort }: MedalTableHeadProps) {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="text-center w-12">Rank</TableHead>
        <TableHead>Country</TableHead>
        <TableHead className="text-center">
          <SortableColumnHeader
            title="Gold"
            sortKey="gold"
            currentSort={currentSort}
            onSort={onSort}
          />
        </TableHead>
        <TableHead className="text-center">
          <SortableColumnHeader
            title="Silver"
            sortKey="silver"
            currentSort={currentSort}
            onSort={onSort}
          />
        </TableHead>
        <TableHead className="text-center">
          <SortableColumnHeader
            title="Bronze"
            sortKey="bronze"
            currentSort={currentSort}
            onSort={onSort}
          />
        </TableHead>
        <TableHead className="text-center">
          <SortableColumnHeader
            title="Total"
            sortKey="total"
            currentSort={currentSort}
            onSort={onSort}
          />
        </TableHead>
      </TableRow>
    </TableHeader>
  )
}
