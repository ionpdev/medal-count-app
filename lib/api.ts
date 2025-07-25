import { useState, useEffect } from "react"

export interface RawMedalData {
  code: string
  gold: number
  silver: number
  bronze: number
}

export interface MedalData {
  code: string
  country: string
  gold: number
  silver: number
  bronze: number
  total: number
}

const getCountryName = (code: string): string => {
  const countryNames: Record<string, string> = {
    USA: "United States",
    NOR: "Norway",
    RUS: "Russia",
    NED: "Netherlands",
    FRA: "France",
    SWE: "Sweden",
    ITA: "Italy",
    CAN: "Canada",
    SUI: "Switzerland",
    BLR: "Belarus",
    GER: "Germany",
    AUT: "Austria",
    CHN: "China",
    GBR: "Great Britain",
    JPN: "Japan",
    AUS: "Australia",
    KOR: "South Korea",
    ESP: "Spain",
    POL: "Poland",
    FIN: "Finland",
  }

  return countryNames[code] || code
}

const transformMedalData = (rawData: RawMedalData[]): MedalData[] => {
  return rawData.map((item) => ({
    code: item.code,
    country: getCountryName(item.code),
    gold: item.gold,
    silver: item.silver,
    bronze: item.bronze,
    total: item.gold + item.silver + item.bronze,
  }))
}

const fetchWithRetry = async (
  url: string,
  maxRetries: number = 3,
  delay: number = 1000
): Promise<Response> => {
  let lastError: Error

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url)

      if (response.ok) {
        return response
      }

      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    } catch (error) {
      lastError = error as Error
      console.warn(`Fetch attempt ${attempt} failed:`, error)

      // Don't wait after the last attempt
      if (attempt < maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, delay * attempt))
      }
    }
  }

  throw lastError!
}

export const fetchMedalData = async (): Promise<MedalData[]> => {
  try {
    const response = await fetchWithRetry("/api/medals")
    const rawData: RawMedalData[] = await response.json()

    if (!Array.isArray(rawData)) {
      throw new Error("Invalid data format: expected array")
    }

    const transformedData = transformMedalData(rawData)
    return transformedData
  } catch (error) {
    console.error("Failed to fetch medal data:", error)
    throw new Error(
      "Unable to load medal data. Please check your connection and try again."
    )
  }
}

export const useMedalData = () => {
  const [data, setData] = useState<MedalData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const medalData = await fetchMedalData()
      setData(medalData)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const refetch = () => {
    fetchData()
  }

  return { data, isLoading, error, refetch }
}
