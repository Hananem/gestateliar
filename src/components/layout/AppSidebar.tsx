import { Activity, ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'

import { navigation } from '@/config/navigation'
import { BrandMark } from '@/components/shared/Shared'
import { useLanguage } from '@/lib/i18n'
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
  SidebarRail,
  SidebarSeparator,
  useSidebar,
} from '@/components/ui/sidebar'

export function AppSidebar() {
  const { state } = useSidebar()
  const collapsed = state === 'collapsed'
  const pathname = useRouterState({
    select: (router) => router.location.pathname,
  })
  const { language, t } = useLanguage()
  const [expandedItems, setExpandedItems] = useState<string[]>(() =>
    navigation
      .filter((item) => item.children?.some((child) => pathname === child.path))
      .map((item) => item.label),
  )

  useEffect(() => {
    const activeSection = navigation.find((item) =>
      item.children?.some((child) => pathname === child.path),
    )
    if (activeSection) {
      setExpandedItems((items) =>
        items.includes(activeSection.label)
          ? items
          : [...items, activeSection.label],
      )
    }
  }, [pathname])

  const toggleItem = (label: string) => {
    setExpandedItems((items) =>
      items.includes(label)
        ? items.filter((item) => item !== label)
        : [...items, label],
    )
  }

  return (
    <Sidebar
      side={language === 'ar' ? 'right' : 'left'}
      collapsible="icon"
      className="border-green-900 bg-green-950 text-green-50"
    >
      <SidebarHeader className="h-18 justify-center px-3">
        <div className="flex items-center justify-center gap-3 overflow-hidden px-1">
          <BrandMark />
          {!collapsed ? (
            <div className="min-w-0">
              <p className="truncate font-display text-[15px] font-bold text-sidebar-foreground">
                GESTATELIER
              </p>
              <p className="truncate text-[10px] font-semibold uppercase text-sidebar-foreground/50">
                Pilotage d’atelier
              </p>
            </div>
          ) : null}
        </div>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent className="px-1 py-3">
        <SidebarGroup>
          <SidebarGroupLabel className="mb-2 px-2 uppercase text-sidebar-foreground/40">
            {t('Navigation')}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1.5">
              {navigation.map((item) => {
                const hasChildren = item.children !== undefined
                const expanded = expandedItems.includes(item.label)

                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton
                      asChild={!hasChildren}
                      isActive={
                        pathname === item.path ||
                        item.children?.some((child) => pathname === child.path)
                      }
                      tooltip={item.label}
                      className="h-10 px-3 data-[active=true]:shadow-sm"
                      onClick={
                        hasChildren ? () => toggleItem(item.label) : undefined
                      }
                    >
                      {hasChildren ? (
                        <>
                          <item.icon />
                          <span>{t(item.label)}</span>
                          {!collapsed ? (
                            <ChevronDown
                              className={`ml-auto transition-transform ${expanded ? 'rotate-180' : ''}`}
                            />
                          ) : null}
                        </>
                      ) : (
                        <Link to={item.path} aria-label={t(item.label)}>
                          <item.icon />
                          <span>{t(item.label)}</span>
                        </Link>
                      )}
                    </SidebarMenuButton>
                    {item.badge && !collapsed ? (
                      <span className="absolute right-3 top-2.5 flex size-5 items-center justify-center rounded-full bg-warning text-[10px] font-bold text-warning-foreground">
                        {item.badge}
                      </span>
                    ) : null}
                    {hasChildren &&
                    expanded &&
                    !collapsed &&
                    item.children.length > 0 ? (
                      <div className="ml-5 border-l border-sidebar-border pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block py-1.5 text-xs text-sidebar-foreground/60 transition-colors hover:text-sidebar-foreground"
                            activeProps={{
                              className:
                                'block py-1.5 text-xs text-sidebar-foreground',
                            }}
                          >
                            {t(child.label)}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-3">
        <div className="flex items-center gap-3 rounded-md border border-sidebar-border bg-sidebar-accent/50 p-2 group-data-[collapsible=icon]:border-0 group-data-[collapsible=icon]:bg-transparent group-data-[collapsible=icon]:p-0">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-success-soft text-success">
            <Activity className="size-4" />
          </div>
          {!collapsed ? (
            <div className="min-w-0">
              <p className="text-xs font-semibold text-sidebar-foreground">
                {t('Atelier opérationnel')}
              </p>
              <p className="text-[10px] text-sidebar-foreground/50">
                {t('Dernière synchro : 08:01')}
              </p>
            </div>
          ) : null}
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
