import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

export default async function DashboardPage() {
  const session = await auth()

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Link href="/projects/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Stats cards will go here */}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 rounded-lg border bg-card p-6">
          <h3 className="text-lg font-medium">Recent Projects</h3>
          <p className="text-sm text-muted-foreground">
            You don't have any projects yet. Create one to get started.
          </p>
        </div>
        <div className="col-span-3 rounded-lg border bg-card p-6">
          <h3 className="text-lg font-medium">Quick Actions</h3>
          <div className="mt-4 space-y-2">
            <Button variant="outline" className="w-full justify-start">
              Generate Script
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Create Thumbnail
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Generate Video
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
