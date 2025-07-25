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
      className={`font-semibold hover:bg-accent/50 transition-colors ${
        isActive ? "bg-accent text-accent-foreground" : ""
      }`}
      onClick={() => onSort?.(sortKey)}
    >
      {title}
      {isActive && <span className="ml-2 text-primary">↓</span>}
    </Button>
  )
}
