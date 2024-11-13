import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./app-sidebar"
import { ThemeToggle } from "./dark-mode-toggle"
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <div>
          <SidebarTrigger />
          <ThemeToggle />
        </div>
        <div className="ml-10">
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}
