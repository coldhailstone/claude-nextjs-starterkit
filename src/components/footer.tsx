export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl px-4 py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Next.js Starter Kit. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
