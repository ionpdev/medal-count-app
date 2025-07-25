"use client"

import { useState, useMemo, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { MedalTable } from "./MedalTable"
import { useMedalData } from "@/lib/api"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  sortMedals,
  getTopCountries,
  toggleSortDirection,
  getDefaultSort,
  SortType,
  SortConfig,
} from "@/lib/utils"

export function MedalTableContainer() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const initializeSortConfig = (): SortConfig => {
    const sortParam = searchParams.get("sort")
    const directionParam = searchParams.get("direction")

    if (
      sortParam &&
      ["total", "gold", "silver", "bronze"].includes(sortParam) &&
      directionParam &&
      ["asc", "desc"].includes(directionParam)
    ) {
      return {
        key: sortParam as SortType,
        direction: directionParam as "asc" | "desc",
      }
    }

    return getDefaultSort()
  }

  const [sortConfig, setSortConfig] = useState<SortConfig>(
    initializeSortConfig()
  )
  const { data: medalData, isLoading, error, refetch } = useMedalData()

  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    params.set("sort", sortConfig.key)
    params.set("direction", sortConfig.direction)

    const newUrl = `${window.location.pathname}?${params.toString()}`
    router.replace(newUrl, { scroll: false })
  }, [sortConfig, router, searchParams])

  const processedData = useMemo(() => {
    if (medalData.length === 0) return []

    const sorted = sortMedals(medalData, sortConfig)
    return getTopCountries(sorted, 10)
  }, [medalData, sortConfig])

  const handleSort = (sortKey: string) => {
    const newKey = sortKey as SortType

    setSortConfig((prevConfig) => {
      // If clicking the same column, toggle direction
      if (prevConfig.key === newKey) {
        return {
          key: newKey,
          direction: toggleSortDirection(prevConfig.direction),
        }
      } else {
        // If clicking a different column, start with descending
        return {
          key: newKey,
          direction: "desc",
        }
      }
    })
  }

  if (error) {
    return (
      <div className="container mx-auto py-8 px-4 max-w-5xl">
        <Alert className="max-w-md mx-auto">
          <AlertTitle className="text-red-600">
            Failed to Load Medal Data
          </AlertTitle>
          <AlertDescription className="mb-4">{error}</AlertDescription>
          <Button onClick={refetch} variant="outline" size="sm">
            Try Again
          </Button>
        </Alert>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      <div className="space-y-8">
        <MedalTable
          data={processedData}
          totalCountries={medalData.length}
          currentSort={sortConfig.key}
          sortDirection={sortConfig.direction}
          onSort={handleSort}
          isLoading={isLoading}
        />
      </div>
    </div>
  )
}
