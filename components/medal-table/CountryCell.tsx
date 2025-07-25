interface CountryCellProps {
  countryCode: string
  countryName: string
}

export function CountryCell({ countryCode, countryName }: CountryCellProps) {
  const getFlagEmoji = (code: string) => {
    const flagMap: Record<string, string> = {
      USA: "🇺🇸",
      NOR: "🇳🇴",
      RUS: "🇷🇺",
      NED: "🇳🇱",
      FRA: "🇫🇷",
      SWE: "🇸🇪",
      ITA: "🇮🇹",
      CAN: "🇨🇦",
      SUI: "🇨🇭",
      BLR: "🇧🇾",
      GER: "🇩🇪",
      AUT: "🇦🇹",
      CHN: "🇨🇳",
    }
    return flagMap[code] || "🏳️"
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-xl">{getFlagEmoji(countryCode)}</span>
      <span className="font-medium">{countryName}</span>
    </div>
  )
}
