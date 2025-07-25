import { http, HttpResponse } from "msw"

import medalDataRaw from "./medals.json"

export const handlers = [
  http.get("/api/medals", () => {
    return new Promise((resolve) => {
      resolve(HttpResponse.json(medalDataRaw))
    })
  }),
]
