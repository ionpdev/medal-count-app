import "@testing-library/jest-dom"
import { vi, beforeAll, afterEach, afterAll } from "vitest"
import { server } from "./lib/mocks/server"

// Start MSW server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }))

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())

// Clean up after all tests
afterAll(() => server.close())

vi.stubGlobal("fetch", vi.fn())
