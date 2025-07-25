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

  const getTextColor = () => {
    switch (type) {
      case "gold":
        return "text-yellow-600"
      case "silver":
        return "text-gray-500"
      case "bronze":
        return "text-amber-600"
      case "total":
        return "text-primary font-bold text-lg"
      default:
        return ""
    }
  }

  return (
    <div
      className={`text-center flex items-center justify-center gap-1 ${getTextColor()}`}
    >
      {type !== "total" && <span className="text-lg">{getEmoji()}</span>}
      <span className={type === "total" ? "font-bold text-lg" : "font-medium"}>
        {count}
      </span>
    </div>
  )
}
