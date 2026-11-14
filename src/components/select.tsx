import * as Select from "@radix-ui/react-select";
import { ChevronDown, Check } from "lucide-react";

interface CategorySelectProps {
  value: string;
  onChange: (value: string) => void;
  values: string[];
  placeholder?: string;
}

export function DashboardSelect({
  value,
  onChange,
  values,
  placeholder = "Select",
}: CategorySelectProps) {
  return (
    <Select.Root value={value || undefined} onValueChange={onChange}>
      <Select.Trigger className="flex h-10 items-center justify-between gap-2.5 rounded-lg border border-card bg-card px-4 py-2 text-sm text-gray-300 hover:text-white cursor-pointer transition-colors outline-none focus:border-accent">
        <Select.Value placeholder={placeholder} />
        <Select.Icon asChild>
          <ChevronDown className="h-4 w-4 text-gray-500 transition-transform duration-200" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          className="z-50 min-w-45 overflow-hidden rounded-xl border border-card bg-card shadow-2xl backdrop-blur-md"
          position="popper"
          sideOffset={6}
        >
          <Select.Viewport className="max-h-72 p-1.5 scrollbar-hide">
            {values.map((item) => (
              <Select.Item
                key={item}
                value={item}
                className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-xs font-medium text-gray-300 outline-none cursor-pointer transition-colors hover:bg-card-hover hover:text-white data-[highlighted]:bg-card-hover data-[highlighted]:text-white data-[state=checked]:text-accent"
              >
                <Select.ItemText>{item}</Select.ItemText>
                <Select.ItemIndicator>
                  <Check className="h-3.5 w-3.5 text-accent" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
