import { TableRow, TableCell } from "@/components/ui/table"
import { CountryCell } from "./CountryCell"
import { MedalCell } from "./MedalCell"

interface MedalData {
  code: string
  country: string
  gold: number
  silver: number
  bronze: number
  total: number
}

interface MedalRowProps {
  data: MedalData
  rank: number
}

export function MedalRow({ data, rank }: MedalRowProps) {
  const getRankStyle = (rank: number) => {
    if (rank === 1) return "text-yellow-600 font-bold text-lg"
    if (rank === 2) return "text-gray-500 font-bold text-lg"
    if (rank === 3) return "text-amber-600 font-bold text-lg"
    return "font-medium"
  }

  return (
    <TableRow className="hover:bg-muted/50 transition-colors">
      <TableCell className={`text-center w-16 ${getRankStyle(rank)}`}>
        {rank}
      </TableCell>
      <TableCell className="py-4">
        <CountryCell countryCode={data.code} countryName={data.country} />
      </TableCell>
      <TableCell className="py-4">
        <MedalCell count={data.gold} type="gold" />
      </TableCell>
      <TableCell className="py-4">
        <MedalCell count={data.silver} type="silver" />
      </TableCell>
      <TableCell className="py-4">
        <MedalCell count={data.bronze} type="bronze" />
      </TableCell>
      <TableCell className="py-4">
        <MedalCell count={data.total} type="total" />
      </TableCell>
    </TableRow>
  )
}
