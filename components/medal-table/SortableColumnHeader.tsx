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
      className={`font-semibold ${isActive ? "bg-accent" : ""}`}
      onClick={() => onSort?.(sortKey)}
    >
      {title}
      {isActive && <span className="ml-1">↓</span>}
    </Button>
  )
}
