"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { ChatNotificationsWatcher } from "@/components/layout/ChatNotificationsWatcher";
import { NotificationsWatcher } from "@/components/layout/NotificationsWatcher";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-[#F4F6FA] dark:bg-[#0F172A] overflow-x-hidden">
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setSidebarOpen}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />
      <div
        className={`flex flex-1 flex-col overflow-x-hidden w-full transition-all duration-300 ease-in-out ${
          isCollapsed ? "lg:ps-[72px]" : "lg:ps-64"
        }`}
      >
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <ChatNotificationsWatcher />
        <NotificationsWatcher />
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
