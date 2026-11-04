import { Control, UseFormRegister, FieldErrors, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";
import { EditProjectFormValues } from "./types";
import { statusOptions, projectTypeOptions, currencyOptions } from "./constants";
import { SeoFieldsSection } from "@/components/shared/SeoFieldsSection";
import { FieldError } from "@/components/ui/form-message";

interface EditProjectFormProps {
  register: UseFormRegister<EditProjectFormValues>;
  control: Control<EditProjectFormValues>;
  setValue: UseFormSetValue<EditProjectFormValues>;
  watch: UseFormWatch<EditProjectFormValues>;
  errors: FieldErrors<EditProjectFormValues>;
  developersList: any[];
  projectData: any;
}

export function EditProjectForm({
  register,
  control,
  setValue,
  watch,
  errors,
  developersList,
  projectData,
}: EditProjectFormProps) {
  return (
    <>
      <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Basic Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div id="error-project_name">
          <Label htmlFor="ep-project-name">
            Project Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="ep-project-name"
            {...register("project_name", { required: "Project name is required" })}
            placeholder="e.g. Emaar Downtown"
            className="mt-1"
            error={!!errors.project_name}
          />
          <FieldError message={errors.project_name?.message} />
        </div>

        <div id="error-status">
          <Label>Status <span className="text-red-500">*</span></Label>
          <Controller
            name="status"
            control={control}
            rules={{ required: "Status is required" }}
            render={({ field }) => (
              <Select key={field.value || "status-empty"} value={field.value ? String(field.value) : ""} onValueChange={field.onChange}>
                <SelectTrigger ref={field.ref} className="mt-1" error={!!errors.status}>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map((o) => (
                    <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError message={errors.status?.message} />
        </div>

        <div id="error-developer_id">
          <Label>Developer <span className="text-red-500">*</span></Label>
          <Controller
            name="developer_id"
            control={control}
            rules={{ required: "Developer is required" }}
            render={({ field }) => (
              <Select key={`dev-${developersList?.length}-${field.value || "empty"}`} value={field.value ? String(field.value) : ""} onValueChange={field.onChange}>
                <SelectTrigger ref={field.ref} className="mt-1" error={!!errors.developer_id}>
                  <SelectValue placeholder="Select Developer" />
                </SelectTrigger>
                <SelectContent>
                  {developersList?.map((developer: any) => {
                    const id = String(developer.developer_id || developer.id);
                    const name = developer.developer_name || developer.name;
                    return (
                      <SelectItem key={id} value={id}>
                        {name}
                      </SelectItem>
                    );
                  })}
                  {field.value && !developersList?.some((d: any) => String(d.developer_id || d.id) === String(field.value)) && (
                    <SelectItem key={field.value} value={field.value}>
                      {String(((projectData as any)?.data ?? projectData)?.developer?.developer_name || ((projectData as any)?.data ?? projectData)?.developer?.name || `Developer ${field.value}`)}
                    </SelectItem>
                  )}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError message={errors.developer_id?.message} />
        </div>

        <div id="error-project_type">
          <Label>Project Type <span className="text-red-500">*</span></Label>
          <Controller
            name="project_type"
            control={control}
            rules={{ required: "Project type is required" }}
            render={({ field }) => (
              <Select key={field.value || "type-empty"} value={field.value ? String(field.value) : ""} onValueChange={field.onChange}>
                <SelectTrigger ref={field.ref} className="mt-1" error={!!errors.project_type}>
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  {projectTypeOptions.map((o) => (
                    <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError message={errors.project_type?.message} />
        </div>

        <div>
          <Label>Currency</Label>
          <Controller
            name="currency"
            control={control}
            render={({ field }) => (
              <Select key={field.value || "curr-empty"} value={field.value ? String(field.value) : ""} onValueChange={field.onChange}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Currency" />
                </SelectTrigger>
                <SelectContent>
                  {currencyOptions.map((o) => (
                    <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>
      </div>

      <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-2">Units</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div id="error-total_units">
          <Label htmlFor="ep-total-units">Total Units <span className="text-red-500">*</span></Label>
          <Input id="ep-total-units" type="number" {...register("total_units", { required: "Total units is required" })} placeholder="Total units" className="mt-1" error={!!errors.total_units} />
          <FieldError message={errors.total_units?.message} />
        </div>
        <div id="error-available_units">
          <Label htmlFor="ep-available-units">Available Units <span className="text-red-500">*</span></Label>
          <Input id="ep-available-units" type="number" {...register("available_units", { required: "Available units is required" })} placeholder="Available units" className="mt-1" error={!!errors.available_units} />
          <FieldError message={errors.available_units?.message} />
        </div>
        <div>
          <Label htmlFor="ep-project-size">Project Size</Label>
          <Input id="ep-project-size" {...register("project_size")} placeholder="e.g. 50,000 sqm" className="mt-1" />
        </div>
      </div>

      <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-2">Dates</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div id="error-launch_date">
          <Label htmlFor="ep-launch-date">Launch Date <span className="text-red-500">*</span></Label>
          <Input id="ep-launch-date" type="date" {...register("launch_date", { required: "Launch date is required" })} className="mt-1" error={!!errors.launch_date} />
          <FieldError message={errors.launch_date?.message} />
        </div>
        <div>
          <Label htmlFor="ep-completion-date">Completion Date</Label>
          <Input id="ep-completion-date" type="date" {...register("completion_date")} className="mt-1" />
        </div>
      </div>

      <div>
        <Label htmlFor="ep-proj-desc">Description</Label>
        <Input id="ep-proj-desc" {...register("description")} placeholder="Project description" className="mt-1" />
      </div>

      {/* SEO Section */}
      <SeoFieldsSection
        register={register}
        setValue={setValue}
        watch={watch}
        nameFieldName="project_name"
        slugPlaceholder="project-slug"
      />
    </>
  );
}
