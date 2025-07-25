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
    if (rank === 1)
      return "text-yellow-700 font-bold text-lg bg-yellow-50 dark:bg-yellow-950/20"
    if (rank === 2)
      return "text-gray-600 font-bold text-lg bg-gray-50 dark:bg-gray-950/20"
    if (rank === 3)
      return "text-amber-700 font-bold text-lg bg-amber-50 dark:bg-amber-950/20"
    return "font-medium text-gray-600 dark:text-gray-400"
  }

  const getRowStyle = (rank: number) => {
    if (rank <= 3)
      return "bg-gradient-to-r from-transparent to-gray-50/50 dark:to-gray-900/50"
    return ""
  }

  return (
    <TableRow
      className={`hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all border-b border-gray-100 dark:border-gray-800 ${getRowStyle(
        rank
      )}`}
    >
      <TableCell className={`text-center w-16 py-4 ${getRankStyle(rank)}`}>
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
