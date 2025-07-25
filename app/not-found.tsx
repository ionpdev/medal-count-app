import Link from "next/link"

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center text-center px-4">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-destructive">
          404 - Page Not Found
        </h1>
        <p className="text-muted-foreground">
          Ups, the page you are looking for does not exist.
        </p>
        <Link href="/" className="text-primary underline">
          Back to Main page
        </Link>
      </div>
    </div>
  )
}
