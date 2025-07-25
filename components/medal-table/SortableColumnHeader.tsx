import { Button } from "@/components/ui/button"

interface SortableColumnHeaderProps {
  title: string
  sortKey: string
  currentSort?: string
  onSort?: (sortKey: string) => void
}

export function SortableColumnHeader({
  title,
  sortKey,
  currentSort,
  onSort,
}: SortableColumnHeaderProps) {
  const isActive = currentSort === sortKey

  return (
    <Button
      variant="ghost"
      className={`font-semibold hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors text-gray-700 dark:text-gray-300 ${
        isActive
          ? "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400"
          : ""
      }`}
      onClick={() => onSort?.(sortKey)}
    >
      {title}
      {isActive && (
        <span className="ml-2 text-blue-600 dark:text-blue-400">↓</span>
      )}
    </Button>
  )
}
