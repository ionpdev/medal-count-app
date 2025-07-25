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
        return "text-yellow-700 dark:text-yellow-400"
      case "silver":
        return "text-gray-600 dark:text-gray-400"
      case "bronze":
        return "text-amber-700 dark:text-amber-400"
      case "total":
        return "text-blue-700 dark:text-blue-400 font-bold text-lg"
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
