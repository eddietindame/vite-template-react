import { NavLink } from 'react-router'
import { ChevronsLeftRightEllipsis, Home, Telescope } from 'lucide-react'

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
} from '@/components/ui/sidebar'
import { Logo } from '@/components/logo'

const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'Explorer',
    url: '/topics',
    icon: Telescope,
  },
  {
    title: 'Console',
    url: '/console',
    icon: ChevronsLeftRightEllipsis,
  },
]

export const AppSidebar = () => (
  <Sidebar>
    <SidebarHeader>
      <Logo
        shapeColor="currentColor"
        textColor="currentColor"
        className="w-full p-2"
      />
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map(item => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <NavLink to={item.url}>
                    {({ isActive }) => (
                      <>
                        <item.icon />
                        <span className={isActive ? 'font-bold' : ''}>
                          {item.title}
                        </span>
                      </>
                    )}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter />
  </Sidebar>
)
