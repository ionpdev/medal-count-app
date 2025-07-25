"use client"

import { useEffect } from "react"

const MSWProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      process.env.NODE_ENV === "development"
    ) {
      import("../lib/mocks/browser").then(({ worker }) => {
        worker
          .start({
            onUnhandledRequest: "bypass",
          })
          .then(() => {
            console.log("🔶 MSW: Mock Service Worker started")
          })
          .catch((error) => {
            console.error("MSW: Failed to start worker", error)
          })
      })
    }
  }, [])

  return <>{children}</>
}

export default MSWProvider
