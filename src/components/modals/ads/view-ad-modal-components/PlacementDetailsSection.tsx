"use client";

interface PlacementDetailsSectionProps {
  adDetails: any;
}

export function PlacementDetailsSection({ adDetails }: PlacementDetailsSectionProps) {
  const placement = adDetails?.placement;
  if (!placement) return null;
  const placementId = placement.placement_id;
  const code = placement.code || "Not set";
  const name = placement.name || "Not set";
  const format = placement.format || "Not set";
  const billingUnit = placement.billing_unit || "Not set";
  const defaultPriceCredits = placement.default_price_credits || "Not set";
  const isActiveText = placement.is_active ? "Yes" : "No";
  return (
    <div className="border-t pt-4">
      <h4 className="font-medium text-gray-900 mb-3">Placement Details</h4>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <span className="text-sm">Placement ID</span>
          </div>
          <p className="font-medium text-gray-900">
            {placementId}
          </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <span className="text-sm">Code</span>
          </div>
          <p className="font-medium text-gray-900">
            {code}
          </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <span className="text-sm">Name</span>
          </div>
          <p className="font-medium text-gray-900">
            {name}
          </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <span className="text-sm">Format</span>
          </div>
          <p className="font-medium text-gray-900 capitalize">
            {format}
          </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <span className="text-sm">Billing Unit</span>
          </div>
          <p className="font-medium text-gray-900 capitalize">
            {billingUnit}
          </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <span className="text-sm">Default Price Credits</span>
          </div>
          <p className="font-medium text-gray-900">
            {defaultPriceCredits}
          </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <span className="text-sm">Is Active</span>
          </div>
          <p className="font-medium text-gray-900">
            {isActiveText}
          </p>
        </div>
      </div>
    </div>
  );
}
