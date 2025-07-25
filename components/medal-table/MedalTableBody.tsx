import { TableBody } from "@/components/ui/table"
import { MedalRow } from "./MedalRow"
import { MedalTableSkeleton } from "./MedalTableSkeleton"

interface MedalData {
  code: string
  country: string
  gold: number
  silver: number
  bronze: number
  total: number
}

interface MedalTableBodyProps {
  data: MedalData[]
  isLoading?: boolean
}

export function MedalTableBody({
  data,
  isLoading = false,
}: MedalTableBodyProps) {
  return (
    <TableBody>
      {isLoading ? (
        <MedalTableSkeleton rows={5} />
      ) : (
        data.map((medal, index) => (
          <MedalRow key={medal.code} data={medal} rank={index + 1} />
        ))
      )}
    </TableBody>
  )
}
