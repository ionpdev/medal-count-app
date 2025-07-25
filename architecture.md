# 🏅 Medal Count Mini App

This is a take-home technical assessment project to implement a mini app that displays Olympic medal counts. The goal is to showcase clean architecture, strong TypeScript + React skills, and a production-ready mindset.

---

## 📌 Objective

Build a **Medal Count App** that:

- Displays the top 10 countries by medal count.
- Allows sorting by gold, silver, bronze, or total medals.
- Supports deep linking via a `sort` URL query parameter.
- Demonstrates error handling, accessibility, and performance awareness.

## ✅ Features & Requirements

### Data & Fetching

- Load `medals.json` dynamically using a simulated **Ajax call**.
- Display a clear **error message** if data retrieval fails.
- Do **not re-fetch** data when changing sort.

### Sorting

- Accept a `sort` parameter in the URL:
  - Options: `gold`, `silver`, `bronze`, `total`
  - Default: `gold`
- Allow column header clicks to re-sort in-app.

#### Tie-Breaking Rules

| Sort By | Tie-Break By |
| ------- | ------------ |
| Total   | Gold         |
| Gold    | Silver       |
| Silver  | Gold         |
| Bronze  | Gold         |

### Flags

- Flags are sourced from `flags.png`.
- Listed alphabetically by country code.

### Design

- Follow visual layout as per provided examples.
- Maintain a clean, accessible UI.
- Responsive behavior is a bonus.

### Stack & Tooling

- ✅ **React**
- ✅ **TypeScript**
- ✅ **Next.js** (preferred)
- ✅ Git (use meaningful commits)
- ✅ Public GitHub/GitLab repo

---

## 🔁 Example URLs

| URL             | Sort Mode      |
| --------------- | -------------- |
| `/`             | Gold (default) |
| `/?sort=gold`   | Gold           |
| `/?sort=silver` | Silver         |
| `/?sort=bronze` | Bronze         |
| `/?sort=total`  | Total          |

---

## 🧪 Example Tie-Breaks

- **Gold** → Netherlands > Germany (by Silver)
- **Total** → France > Sweden (by Gold)
- **Silver** → USA > Netherlands > Sweden (by Gold)
- **Bronze** → Russia > Netherlands (by Gold)

---

## Project UI/UX skeleton:

+----------------------------------------------+
| 🏅 Medal Count Table |
+------------+--------+--------+--------+------+
| Country | Gold | Silver | Bronze | Total
+------------+--------+--------+--------+------+
| USA | 39 | 41 | 33 | 113 |
| China | 38 | 32 | 18 | 88 |
| Japan | 27 | 14 | 17 | 58 |
| ... |
+----------------------------------------------+

🔘 Sort by: [Gold] [Silver] [Bronze] [Total]
