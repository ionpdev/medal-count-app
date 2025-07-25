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
    <div className="flex items-center gap-3 min-w-[200px]">
      <span className="text-2xl">{getFlagEmoji(countryCode)}</span>
      <span className="font-semibold text-gray-900 dark:text-gray-100">
        {countryName}
      </span>
    </div>
  )
}
