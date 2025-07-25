import { TableBody } from "@/components/ui/table"
import { MedalRow } from "./MedalRow"

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
}

export function MedalTableBody({ data }: MedalTableBodyProps) {
  return (
    <TableBody>
      {data.map((medal, index) => (
        <MedalRow key={medal.code} data={medal} rank={index + 1} />
      ))}
    </TableBody>
  )
}
