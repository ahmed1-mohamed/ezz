import React from "react";
import { X } from "lucide-react";

interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export function ModalWrapper({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = "max-w-4xl",
}: ModalWrapperProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 sm:p-0">
      <div className={`max-h-[90vh] w-full ${maxWidth} flex flex-col overflow-hidden rounded-lg bg-white dark:bg-neutral-900 shadow-xl`}>
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-neutral-800 p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h2>
          <button
            onClick={onClose}
            type="button"
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="overflow-y-auto p-6">
          {children}
        </div>
      </div>
    </div>
  );
}