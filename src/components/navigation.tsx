"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { signIn, signOut, useSession } from "next-auth/react"
import { UserNav } from "./user-nav"

export function MainNav() {
  const pathname = usePathname()
  const { data: session } = useSession()

  const items = [
    {
      href: "/dashboard",
      label: "Dashboard",
    },
    {
      href: "/projects",
      label: "Projects",
    },
    {
      href: "/templates",
      label: "Templates",
    },
  ]

  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">YouTube AI</span>
        </Link>
        <nav className="ml-6 flex items-center space-x-6">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          {session ? (
            <UserNav user={session.user} />
          ) : (
            <Button onClick={() => signIn("google")}>
              Sign In
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
