"use client"

import { useState } from "react"
import { MedalTable } from "./MedalTable"

const mockData = [
  {
    code: "USA",
    country: "United States",
    gold: 9,
    silver: 7,
    bronze: 12,
    total: 28,
  },
  {
    code: "NOR",
    country: "Norway",
    gold: 11,
    silver: 5,
    bronze: 10,
    total: 26,
  },
  {
    code: "RUS",
    country: "Russia",
    gold: 13,
    silver: 11,
    bronze: 9,
    total: 33,
  },
]

export function MedalTableContainer() {
  const [currentSort, setCurrentSort] = useState<string>("gold")

  const handleSort = (sortKey: string) => {
    setCurrentSort(sortKey)

    console.log("Sorting by:", sortKey)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <MedalTable
        data={mockData}
        currentSort={currentSort}
        onSort={handleSort}
      />
    </div>
  )
}
