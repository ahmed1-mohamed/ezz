"use client";

import { useSyncExternalStore } from "react";
import {
  AlertTriangle,
  Bell,
  CheckCircle2,
  Info,
  MessageCircle,
  Play,
  Volume1,
  Volume2,
  VolumeX,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import {
  SOUND_CATEGORIES,
  getServerSoundSettings,
  getSoundSettings,
  playNotificationSound,
  subscribeSoundSettings,
  updateSoundSettings,
  type SoundCategory,
} from "@/lib/notification-sound";

const CATEGORY_META: Record<SoundCategory, { icon: typeof Bell; className: string }> = {
  message: { icon: MessageCircle, className: "bg-teal-50 text-teal-600 dark:bg-teal-950 dark:text-teal-400" },
  system: { icon: Bell, className: "bg-violet-50 text-violet-600 dark:bg-violet-950 dark:text-violet-400" },
  success: { icon: CheckCircle2, className: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400" },
  error: { icon: XCircle, className: "bg-rose-50 text-rose-600 dark:bg-rose-950 dark:text-rose-400" },
  warning: { icon: AlertTriangle, className: "bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400" },
  info: { icon: Info, className: "bg-sky-50 text-sky-600 dark:bg-sky-950 dark:text-sky-400" },
};

export function NotificationSoundSettings() {
  const { t, language } = useLanguage();
  const settings = useSyncExternalStore(subscribeSoundSettings, getSoundSettings, getServerSoundSettings);
  const volumePercent = Math.round(settings.volume * 100);
  const muted = !settings.enabled || settings.volume === 0;
  const TriggerIcon = muted ? VolumeX : settings.volume < 0.5 ? Volume1 : Volume2;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 sm:h-9 sm:w-9 text-gray-600 p-0"
          aria-label={t("header.sound.title")}
          title={t("header.sound.title")}
        >
          <TriggerIcon className={cn("h-4 w-4 sm:h-5 sm:w-5", muted && "text-gray-400")} />
          <span className="sr-only">{t("header.sound.title")}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        sideOffset={8}
        dir={language === "ar" ? "rtl" : "ltr"}
        className="w-80 rounded-2xl border-gray-200 p-0 shadow-xl dark:border-neutral-800 dark:bg-neutral-900"
      >
        <div className="flex items-start gap-3 border-b border-gray-100 p-4 dark:border-neutral-800">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-950 dark:text-teal-400">
            <Volume2 className="h-4.5 w-4.5" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{t("header.sound.title")}</p>
            <p className="text-xs leading-snug text-gray-500 dark:text-gray-400">{t("header.sound.description")}</p>
          </div>
          <Switch
            checked={settings.enabled}
            onCheckedChange={(enabled) => updateSoundSettings({ enabled })}
            aria-label={t("header.sound.enable")}
          />
        </div>

        <div className={cn("space-y-4 p-4 transition-opacity", !settings.enabled && "pointer-events-none opacity-50")}>
          <div>
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="font-medium text-gray-700 dark:text-gray-300">{t("header.sound.volume")}</span>
              <span className="tabular-nums text-gray-500 dark:text-gray-400">{volumePercent}%</span>
            </div>
            <div className="flex items-center gap-2">
              <VolumeX className="h-3.5 w-3.5 shrink-0 text-gray-400" />
              <input
                type="range"
                min={0}
                max={100}
                step={5}
                value={volumePercent}
                onChange={(e) => updateSoundSettings({ volume: Number(e.target.value) / 100 })}
                onPointerUp={() => playNotificationSound("info", { force: true })}
                onKeyUp={() => playNotificationSound("info", { force: true })}
                aria-label={t("header.sound.volume")}
                className="h-1.5 w-full cursor-pointer accent-[#008081]"
              />
              <Volume2 className="h-3.5 w-3.5 shrink-0 text-gray-400" />
            </div>
          </div>

          <ul className="space-y-1">
            {SOUND_CATEGORIES.map((category) => {
              const { icon: Icon, className } = CATEGORY_META[category];
              const label = t(`header.sound.categories.${category}`);
              return (
                <li key={category} className="flex items-center gap-2.5 rounded-lg px-1 py-1.5">
                  <span className={cn("flex h-7 w-7 shrink-0 items-center justify-center rounded-lg", className)}>
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="flex-1 truncate text-sm text-gray-700 dark:text-gray-300">{label}</span>
                  <button
                    type="button"
                    onClick={() => playNotificationSound(category, { force: true })}
                    aria-label={`${t("header.sound.test")} — ${label}`}
                    title={t("header.sound.test")}
                    className="flex h-7 w-7 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-neutral-800 dark:hover:text-gray-200"
                  >
                    <Play className="h-3.5 w-3.5 rtl:-scale-x-100" />
                  </button>
                  <Switch
                    checked={settings.categories[category]}
                    onCheckedChange={(checked) => updateSoundSettings({ categories: { [category]: checked } })}
                    aria-label={label}
                  />
                </li>
              );
            })}
          </ul>
        </div>

      </PopoverContent>
    </Popover>
  );
}
