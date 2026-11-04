import { Globe } from "lucide-react";

interface ExpertCountriesCardProps {
  countries?: (string | { name: string })[];
  currency?: string;
  t: (key: string) => string;
}

export function ExpertCountriesCard({
  countries = [],
  currency,
  t,
}: ExpertCountriesCardProps) {
  const countryList = Array.isArray(countries) ? countries : [];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        {t("experts.details.countries")}
      </h3>
      <div className="space-y-2">
        {countryList.length > 0 ? (
          countryList.map((country: any, index: number) => {
            const name = typeof country === "string" ? country : (country?.name || String(country));
            return (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <Globe className="h-4 w-4 text-teal-600" />
                {name}
              </div>
            );
          })
        ) : currency ? (
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <Globe className="h-4 w-4 text-teal-600" />
            {currency === "AED" ? `${t("common.countries.uae")} (AED)` : currency}
          </div>
        ) : (
          <span className="text-sm text-gray-400">
            {t("experts.details.noCountries")}
          </span>
        )}
      </div>
    </div>
  );
}