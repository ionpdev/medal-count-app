"use client"

import { useState } from "react"
import { MedalTable } from "./MedalTable"
import { useMedalData } from "@/lib/api"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export function MedalTableContainer() {
  const [currentSort, setCurrentSort] = useState<string>("gold")
  const { data: medalData, isLoading, error, refetch } = useMedalData()

  const handleSort = (sortKey: string) => {
    setCurrentSort(sortKey)
    // TODO: Implement actual sorting logic
    console.log("Sorting by:", sortKey)
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
          data={medalData}
          currentSort={currentSort}
          onSort={handleSort}
          isLoading={isLoading}
        />
      </div>
    </div>
  )
}
