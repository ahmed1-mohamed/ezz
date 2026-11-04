import dynamic from "next/dynamic";

export const RichTextEditor = dynamic(
  () => import("./rich-text-editor").then((mod) => mod.RichTextEditor),
  { ssr: false }
);

export { Button } from "./button";
export { Input } from "./input";
export { Label } from "./label";
export { Checkbox } from "./checkbox";
export { Switch } from "./switch";
export { Modal } from "./modal";
export {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";