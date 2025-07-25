import { getFlagSpritePosition } from "@/lib/utils"

interface CountryCellProps {
  countryCode: string
  countryName: string
}

export function CountryCell({ countryCode, countryName }: CountryCellProps) {
  return (
    <div className="flex items-center gap-3 min-w-[200px]">
      <div
        className="w-7 h-[17px] bg-no-repeat"
        style={{
          backgroundImage: "url('/flags.png')",
          backgroundPosition: getFlagSpritePosition(countryCode),
          backgroundSize: "28px 221px",
        }}
        aria-label={`${countryName} flag`}
        role="img"
      />
      <span className="font-semibold text-gray-900 dark:text-gray-100">
        {countryName}
      </span>
    </div>
  )
}
