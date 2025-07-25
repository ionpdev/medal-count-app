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
  return (
    <TableRow className="hover:bg-muted/50">
      <TableCell className="font-medium text-center w-12">{rank}</TableCell>
      <TableCell>
        <CountryCell countryCode={data.code} countryName={data.country} />
      </TableCell>
      <TableCell>
        <MedalCell count={data.gold} type="gold" />
      </TableCell>
      <TableCell>
        <MedalCell count={data.silver} type="silver" />
      </TableCell>
      <TableCell>
        <MedalCell count={data.bronze} type="bronze" />
      </TableCell>
      <TableCell>
        <MedalCell count={data.total} type="total" />
      </TableCell>
    </TableRow>
  )
}
