"use client";

interface LinkedEntitySectionProps {
  adDetails: any;
}

export function LinkedEntitySection({ adDetails }: LinkedEntitySectionProps) {
  const entity = adDetails?.entity;
  const entityType = adDetails?.entity_type;
  if (!entity) return null;
  const projectId = entity.project_id || "Not set";
  const projectName = entity.project_name || "Not set";
  const projectType = entity.project_type || "Not set";
  const projectStatus = entity.status || "Not set";
  const totalUnits = entity.total_units ?? "Not set";
  const availableUnits = entity.available_units ?? "Not set";
  const priceRange = entity.price_range || "Not set";
  const projectSize = entity.project_size || "Not set";
  const launchDate = entity.launch_date || "Not set";
  const completionDate = entity.completion_date || "Not set";
  const propertyId = entity.property_id || "Not set";
  const propertyName = entity.property_name || "Not set";
  const propertyNo = entity.property_no || "Not set";
  const propertyStatus = entity.status || "Not set";
  const priceFormatted = entity.price
    ? `$${parseFloat(entity.price).toLocaleString()}`
    : "Not set";
  const sizeFormatted = entity.size
    ? `${entity.size} sqm`
    : "Not set";
  const bedrooms = entity.bedrooms ?? "Not set";
  const bathrooms = entity.bathrooms ?? "Not set";
  const parkingSpaces = entity.parking_spaces ?? "Not set";
  const availabilityStatus = entity.availability_status || "Not set";
  const constructionStatus = entity.construction_status || "Not set";
  const furnishStatus = entity.furnish_status || "Not set";
  const finishingStatus = entity.finishing_status || "Not set";
  return (
    <div className="border-t pt-4">
      <h4 className="font-medium text-gray-900 mb-3">Linked Entity</h4>
      <div className="grid grid-cols-2 gap-4">
        {entityType === "PROJECTS" ? (
          <>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">Project ID</span>
              </div>
              <p className="font-medium text-gray-900">{projectId}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">Project Name</span>
              </div>
              <p className="font-medium text-gray-900">{projectName}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">Project Type</span>
              </div>
              <p className="font-medium text-gray-900 capitalize">{projectType}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">Status</span>
              </div>
              <p className="font-medium text-gray-900 capitalize">{projectStatus}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">Total Units</span>
              </div>
              <p className="font-medium text-gray-900">{totalUnits}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">Available Units</span>
              </div>
              <p className="font-medium text-gray-900">{availableUnits}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">Price Range</span>
              </div>
              <p className="font-medium text-gray-900">{priceRange}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">Project Size</span>
              </div>
              <p className="font-medium text-gray-900">{projectSize}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">Launch Date</span>
              </div>
              <p className="font-medium text-gray-900">{launchDate}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">Completion Date</span>
              </div>
              <p className="font-medium text-gray-900">{completionDate}</p>
            </div>
          </>
        ) : (
          <>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">Property ID</span>
              </div>
              <p className="font-medium text-gray-900">{propertyId}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">Property Name</span>
              </div>
              <p className="font-medium text-gray-900">{propertyName}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">Property No</span>
              </div>
              <p className="font-medium text-gray-900">{propertyNo}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">Status</span>
              </div>
              <p className="font-medium text-gray-900 capitalize">{propertyStatus}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">Price</span>
              </div>
              <p className="font-medium text-gray-900">{priceFormatted}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">Size</span>
              </div>
              <p className="font-medium text-gray-900">{sizeFormatted}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">Bedrooms</span>
              </div>
              <p className="font-medium text-gray-900">{bedrooms}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">Bathrooms</span>
              </div>
              <p className="font-medium text-gray-900">{bathrooms}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">Parking Spaces</span>
              </div>
              <p className="font-medium text-gray-900">{parkingSpaces}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">Availability Status</span>
              </div>
              <p className="font-medium text-gray-900 capitalize">{availabilityStatus}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">Construction Status</span>
              </div>
              <p className="font-medium text-gray-900 capitalize">{constructionStatus}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">Furnish Status</span>
              </div>
              <p className="font-medium text-gray-900 capitalize">{furnishStatus}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">Finishing Status</span>
              </div>
              <p className="font-medium text-gray-900 capitalize">{finishingStatus}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
