import { Award } from "lucide-react";

interface Experience {
  cert_name?: string;
  cert_img?: string | null;
  cert_desc?: string | null;
  cert_year?: string | number | null;
  [key: string]: any;
}

interface ExpertExperiencesCardProps {
  experiences?: Experience[];
  t: (key: string) => string;
}

export function ExpertExperiencesCard({
  experiences = [],
  t,
}: ExpertExperiencesCardProps) {
  const expList = Array.isArray(experiences) ? experiences : [];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        {t("experts.details.experience")}
      </h3>
      <div className="space-y-3">
        {expList.length > 0 ? (
          expList.map((exp: any, index: number) => {
            const name = exp.cert_name || exp.name || exp.title || t("experts.details.certification");
            return (
              <div
                key={index}
                className="p-3 bg-gray-50 rounded-lg border border-gray-100 flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Award className="h-4 w-4 text-teal-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {name}
                  </p>
                  {exp.cert_year && (
                    <p className="text-xs text-gray-500 mt-0.5">
                      {exp.cert_year}
                    </p>
                  )}
                  {exp.cert_desc && (
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      {exp.cert_desc}
                    </p>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <span className="text-sm text-gray-400">
            {t("experts.details.noExperience")}
          </span>
        )}
      </div>
    </div>
  );
}