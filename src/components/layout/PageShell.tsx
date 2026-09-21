import type { ReactNode } from 'react'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/layout/AppSidebar'
import { DashboardHeader } from '@/components/layout/DashboardHeader'

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-svh w-full bg-canvas">
        <AppSidebar />
        <SidebarInset className="min-w-0 bg-canvas">
          <DashboardHeader />
          <main className="mx-auto w-full max-w-[1680px] flex-1 p-4 md:p-6 xl:p-7">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
