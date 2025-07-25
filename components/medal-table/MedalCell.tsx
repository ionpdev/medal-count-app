interface MedalCellProps {
  count: number
  type: "gold" | "silver" | "bronze" | "total"
}

export function MedalCell({ count, type }: MedalCellProps) {
  const getEmoji = () => {
    switch (type) {
      case "gold":
        return "🥇"
      case "silver":
        return "🥈"
      case "bronze":
        return "🥉"
      default:
        return ""
    }
  }

  return (
    <div className={`text-center ${type === "total" ? "font-bold" : ""}`}>
      {type !== "total" && <span className="mr-1">{getEmoji()}</span>}
      <span>{count}</span>
    </div>
  )
}
