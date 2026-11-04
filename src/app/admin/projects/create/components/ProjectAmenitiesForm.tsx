"use client";

import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { CreateProjectInput } from "@/validators/create-project.schema";
import { SeoFieldsSection } from "@/components/shared/SeoFieldsSection";
import { useLanguage } from "@/contexts/LanguageContext";

interface AmenityItem {
  id: string;
  name: string;
  nameAr: string;
  icon: string;
}

const PROJECT_AMENITIES: AmenityItem[] = [
  { id: "pool", name: "Pool", nameAr: "مسبح", icon: "💧" },
  { id: "private_pool", name: "Private Pool", nameAr: "مسبح خاص", icon: "🏖️" },
  { id: "shared_pool", name: "Shared Pool", nameAr: "مسبح مشترك", icon: "🌊" },
  { id: "gym", name: "Gym", nameAr: "صالة رياضية", icon: "🏋️" },
  { id: "parking", name: "Parking", nameAr: "موقف سيارات", icon: "🚗" },
  { id: "covered_parking", name: "Covered Parking", nameAr: "موقف مغطى", icon: "🅿️" },
  { id: "security_24h", name: "24h Security", nameAr: "أمن 24 ساعة", icon: "🛡️" },
  { id: "garden", name: "Garden", nameAr: "حديقة", icon: "🌳" },
  { id: "kids_play_area", name: "Kids Play Area", nameAr: "ألعاب أطفال", icon: "🧸" },
  { id: "near_the_sea", name: "Near the Sea", nameAr: "قريب من البحر", icon: "🏖️" },
  { id: "sea_view", name: "Sea View", nameAr: "إطلالة بحرية", icon: "🌅" },
  { id: "golf_view", name: "Golf View", nameAr: "إطلالة جولف", icon: "⛳" },

  { id: "elevator", name: "Elevator", nameAr: "مصعد", icon: "🏢" },
  { id: "balcony", name: "Balcony", nameAr: "شرفة", icon: "🏙️" },
  { id: "central_ac", name: "Central AC", nameAr: "تكييف مركزي", icon: "❄️" },
  { id: "maids_room", name: "Maid's Room", nameAr: "غرفة خادمة", icon: "🧹" },
  { id: "study_room", name: "Study Room", nameAr: "غرفة مكتب", icon: "📚" },
  { id: "storage", name: "Storage", nameAr: "مستودع", icon: "📦" },
  { id: "built_in_wardrobes", name: "Built-in Wardrobes", nameAr: "خزائن مدمجة", icon: "🚪" },
  { id: "fitted_kitchen", name: "Fitted Kitchen", nameAr: "مطبخ مجهز", icon: "🍳" },
  { id: "furnished", name: "Furnished", nameAr: "مفروش", icon: "🛋️" },
  { id: "barbecue_area", name: "Barbecue Area", nameAr: "منطقة شواء", icon: "🔥" },
  { id: "jacuzzi", name: "Jacuzzi", nameAr: "جاكوزي", icon: "🛁" },

  { id: "sauna", name: "Sauna", nameAr: "ساونا", icon: "🧖" },
  { id: "mosque", name: "Mosque", nameAr: "مسجد", icon: "🕌" },
  { id: "shopping_mall", name: "Shopping Mall", nameAr: "مركز تسوق", icon: "🛍️" },
  { id: "schools_nearby", name: "Schools Nearby", nameAr: "مدارس قريبة", icon: "🏫" },
  { id: "clinic", name: "Clinic", nameAr: "عيادة طبية", icon: "🏥" },
  { id: "cinema", name: "Cinema", nameAr: "سينما", icon: "🎬" },
  { id: "smart_home", name: "Smart Home", nameAr: "منزل ذكي", icon: "📱" },
  { id: "solar_panels", name: "Solar Panels", nameAr: "ألواح شمسية", icon: "☀️" },
  { id: "ev_charging", name: "EV Charging", nameAr: "شحن سيارات كهربائية", icon: "⚡" },
  { id: "pets_allowed", name: "Pets Allowed", nameAr: "حيوانات أليفة", icon: "🐾" },
  { id: "concierge", name: "Concierge", nameAr: "خدمة كونسيرج", icon: "🛎️" },
];

const AMENITY_ROWS = [
  PROJECT_AMENITIES.slice(0, 12),
  PROJECT_AMENITIES.slice(12, 23),
  PROJECT_AMENITIES.slice(23, 34),
];

interface ProjectAmenitiesFormProps {
  form: UseFormReturn<CreateProjectInput>;
}

export function ProjectAmenitiesForm({ form }: ProjectAmenitiesFormProps) {
  const { register, watch, setValue } = form;
  const { language } = useLanguage();
  const isAr = language === "ar";

  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const toggleAmenity = (id: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-4">
      {/* ── Project Amenities Card ──────────────────────────────────────── */}
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-3.5 shadow-2xs">
        <div>
          <h2 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">
            {isAr ? "مرافق المشروع" : "Project Amenities"}
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            {isAr
              ? "اختر المرافق والخدمات المتوفرة في هذا المشروع"
              : "Select the amenities available in this project"}
          </p>
        </div>

        <div className="space-y-2">
          {AMENITY_ROWS.map((row, rowIdx) => (
            <div key={rowIdx} className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {row.map((amenity) => {
                const isSelected = selectedAmenities.includes(amenity.id);
                const label = isAr ? amenity.nameAr : amenity.name;

                return (
                  <button
                    key={amenity.id}
                    type="button"
                    onClick={() => toggleAmenity(amenity.id)}
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium border transition-all cursor-pointer select-none shrink-0 ${isSelected
                      ? "bg-teal-50 border-teal-500 text-teal-800 dark:bg-teal-950/40 dark:border-teal-400 dark:text-teal-200 shadow-2xs font-semibold"
                      : "bg-white dark:bg-neutral-900/80 border-gray-200 dark:border-neutral-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-neutral-600 hover:bg-gray-50/70 dark:hover:bg-neutral-800/60"
                      }`}
                  >
                    <span className="text-xs leading-none shrink-0">{amenity.icon}</span>
                    <span className="whitespace-nowrap">{label}</span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* ── Search Engine Optimization (SEO) Card ────────────────────────── */}
      <SeoFieldsSection
        register={register}
        setValue={setValue}
        watch={watch}
        nameFieldName="project_name"
        slugPlaceholder="my-property"
        compact={true}
      />
    </div>
  );
}
