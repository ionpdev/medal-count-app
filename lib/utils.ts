import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type SortType = "gold" | "silver" | "bronze" | "total"
export type SortDirection = "asc" | "desc"

export interface MedalData {
  code: string
  country: string
  gold: number
  silver: number
  bronze: number
  total: number
}

export interface SortConfig {
  key: SortType
  direction: SortDirection
}

// Sorting function with tie-breaking rules
export const sortMedals = (
  data: MedalData[],
  sortConfig: SortConfig
): MedalData[] => {
  return [...data].sort((a, b) => {
    const { key, direction } = sortConfig

    const primaryDiff = direction === "desc" ? b[key] - a[key] : a[key] - b[key]

    if (primaryDiff !== 0) return primaryDiff

    // Tie-breaking rules (always descending for tie-breakers)
    let tieBreaker = 0

    switch (key) {
      case "total":
        tieBreaker = b.gold - a.gold // Total ties broken by Gold
        break
      case "gold":
        tieBreaker = b.silver - a.silver // Gold ties broken by Silver
        break
      case "silver":
      case "bronze":
        tieBreaker = b.gold - a.gold // Silver/Bronze ties broken by Gold
        break
    }

    return tieBreaker
  })
}

export const getTopCountries = (
  data: MedalData[],
  count: number = 10
): MedalData[] => {
  return data.slice(0, count)
}

export const toggleSortDirection = (
  currentDirection: SortDirection
): SortDirection => {
  return currentDirection === "desc" ? "asc" : "desc"
}

export const getDefaultSort = (): SortConfig => ({
  key: "gold",
  direction: "desc",
})

export const getFlagSpritePosition = (countryCode: string): string => {
  // (28x221px countries sprite)
  const alphabeticalCodes = [
    "AUT",
    "BLR",
    "CAN",
    "CHN",
    "FRA",
    "GER",
    "ITA",
    "NED",
    "NOR",
    "RUS",
    "SUI",
    "SWE",
    "USA",
  ]

  const index = alphabeticalCodes.indexOf(countryCode)

  if (index === -1) {
    return "0 0"
  }

  // each flag is 17px tall
  const yOffset = index * 17
  return `0 -${yOffset}px`
}
