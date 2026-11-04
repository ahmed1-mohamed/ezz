import React from "react";
import { DeveloperLinkSection } from "./step-two/DeveloperLinkSection";
import { CreativeAssetSection } from "./step-two/CreativeAssetSection";
import { ContentFeaturesSection } from "./step-two/ContentFeaturesSection";

interface StepTwoProps {
  developerSearch: string;
  setDeveloperSearch: (val: string) => void;
  developersLoading: boolean;
  developers: any[];
  developerHasMore?: boolean;
  developerScrollRef?: React.RefObject<HTMLDivElement | null>;
  handleDeveloperChange: (val: string) => void;
  projectSearch: string;
  setProjectSearch: (val: string) => void;
  projectsLoading: boolean;
  projects: any[];
  propertySearch: string;
  setPropertySearch: (val: string) => void;
  propertiesLoading: boolean;
  properties: any[];
  adImagePreview: string | null;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CreateAdStepTwo({
  developerSearch,
  setDeveloperSearch,
  developersLoading,
  developers,
  handleDeveloperChange,
  projectSearch,
  setProjectSearch,
  projectsLoading,
  projects,
  propertySearch,
  setPropertySearch,
  propertiesLoading,
  properties,
  adImagePreview,
  handleImageUpload,
}: StepTwoProps) {
  return (
    <div className="space-y-4">
      {/* 1. Developer & Target Entity Link - visible in all ad types */}
      <DeveloperLinkSection
        developerSearch={developerSearch}
        setDeveloperSearch={setDeveloperSearch}
        developersLoading={developersLoading}
        developers={developers}
        handleDeveloperChange={handleDeveloperChange}
        projectSearch={projectSearch}
        setProjectSearch={setProjectSearch}
        projectsLoading={projectsLoading}
        projects={projects}
        propertySearch={propertySearch}
        setPropertySearch={setPropertySearch}
        propertiesLoading={propertiesLoading}
        properties={properties}
      />

      {/* 2. Creative Banner Image Asset */}
      <CreativeAssetSection
        adImagePreview={adImagePreview}
        handleImageUpload={handleImageUpload}
      />

      {/* 3. Ad Copy, Features & Badges */}
      <ContentFeaturesSection />
    </div>
  );
}