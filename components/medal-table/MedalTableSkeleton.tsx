import { TableRow, TableCell } from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"

interface MedalTableSkeletonProps {
  rows?: number
}

export function MedalTableSkeleton({ rows = 3 }: MedalTableSkeletonProps) {
  return (
    <>
      {Array.from({ length: rows }, (_, index) => (
        <TableRow key={index}>
          <TableCell className="text-center w-16 py-4">
            <Skeleton className="h-6 w-8 mx-auto" />
          </TableCell>
          <TableCell className="py-4">
            <div className="flex items-center gap-3">
              <Skeleton className="h-8 w-8 rounded" />
              <Skeleton className="h-6 w-32" />
            </div>
          </TableCell>
          <TableCell className="py-4">
            <div className="flex items-center justify-center gap-1">
              <Skeleton className="h-6 w-6 rounded" />
              <Skeleton className="h-6 w-8" />
            </div>
          </TableCell>
          <TableCell className="py-4">
            <div className="flex items-center justify-center gap-1">
              <Skeleton className="h-6 w-6 rounded" />
              <Skeleton className="h-6 w-8" />
            </div>
          </TableCell>
          <TableCell className="py-4">
            <div className="flex items-center justify-center gap-1">
              <Skeleton className="h-6 w-6 rounded" />
              <Skeleton className="h-6 w-8" />
            </div>
          </TableCell>
          <TableCell className="py-4">
            <div className="flex items-center justify-center">
              <Skeleton className="h-6 w-12" />
            </div>
          </TableCell>
        </TableRow>
      ))}
    </>
  )
}
