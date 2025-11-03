'use client';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarTrigger,
  useSidebar
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronUp, User, Settings, LogOut, CreditCard, MessageSquare, Plus, Trash2, MoreHorizontal } from "lucide-react"
import Image from "next/image";
import { cn } from "@/lib/utils";

export function AppSidebar() {
  const {state} = useSidebar();

  const textClasses = cn(
    "transition-opacity duration-150 ease-in-out whitespace-nowrap",
    {
      "opacity-100": state === "expanded",
      "opacity-0": state === "collapsed",
    }
  );

  // Sample chat data - replace with your actual chat data
  const chats = [
    { id: 1, title: "React Best Practices", timestamp: "2 hours ago" },
    { id: 2, title: "TypeScript Help", timestamp: "Yesterday" },
    { id: 3, title: "UI Design Discussion", timestamp: "2 days ago" },
    { id: 4, title: "API Integration", timestamp: "3 days ago" },
    { id: 5, title: "Database Schema", timestamp: "1 week ago" },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex items-center gap-3 flex-row">
        <SidebarTrigger/>
        <span className={cn(textClasses, "flex-1 truncate text-lg font-semibold")}>Fleur Ai</span>
      </SidebarHeader>
      
 <SidebarContent className="flex-1 overflow-y-auto">
      {/* New Chat Button */}
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="w-full">
                <Plus className="h-4 w-4" />
                <span className={textClasses}>New Chat</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      {/* Chats Section */}
      <SidebarGroup>
        <SidebarGroupLabel className={cn(textClasses, "px-2")}>
          Recent Chats
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {chats.map((chat) => (
              <SidebarMenuItem key={chat.id}>
                <SidebarMenuButton className="w-full relative group/chat">
                  <div
                    className={cn(
                      "flex-1 flex flex-col items-start min-w-0",
                      textClasses
                    )}
                  >
                    <span className="text-[0.95rem] font-semibold truncate w-full">
                      {chat.title}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {chat.timestamp}
                    </span>
                  </div>

                  {state === "expanded" && (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <div
                          className="opacity-0 group-hover/chat:opacity-100 transition-opacity p-1 hover:bg-sidebar-accent rounded cursor-pointer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <span>Rename</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>

       <SidebarFooter className="mt-auto border-t">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className={cn(
              "flex items-center gap-3 w-full p-2 rounded-lg hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors",
              state === "collapsed" && "justify-center"
            )}
          >
            <Avatar className="h-8 w-8 flex-shrink-0">
              <AvatarImage src="https://github.com/Sultan-Ubiquitous.png" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            {state === "expanded" && (
              <>
                <div className="flex flex-col items-start flex-1 min-w-0">
                  <span className="text-sm font-medium truncate w-full">Azim Khorajiya</span>
                  <span className="text-xs text-muted-foreground truncate w-full">
                    azimkhorajiyaa@gmail.com
                  </span>
                </div>
                <ChevronUp className="h-4 w-4 flex-shrink-0" />
              </>
            )}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="top"
          align={state === "collapsed" ? "center" : "end"}
          className="w-56"
        >
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-red-600">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarFooter>
    </Sidebar>
  )
}