import { FileChartLine, Search, Settings, Gauge, FileSliders, Activity } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  {
    id: 'dashboard',
    title: "Dashboard",
    url: "/",
    icon: Gauge,
  },
  {
    id: 'results',
    title: "Results & reports",
    url: "/results-and-reports",
    icon: FileChartLine,
  },
  {
    id: 'experiment',
    title: "Experiment setup",
    url: "/experiment-setup",
    icon: FileSliders,
  },
  {
    id: 'realtime',
    title: 'Real-time monitoring',
    url: '/real-time',
    icon: Activity,
  },
  {
    id: 'search',
    title: "Search",
    url: "/search",
    icon: Search,
  },
  {
    id: 'settings',
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]

export function AppSidebar() {

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>MAIN</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
      </SidebarFooter>
    </Sidebar>
  )
}
