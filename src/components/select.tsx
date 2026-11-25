import * as Select from "@radix-ui/react-select";
import { ChevronDown, Check, Layers } from "lucide-react";
import type { SelectItem } from "../types/Dashboard";

interface FilterSelectProps {
  value: string;
  onChange: (value: string) => void;
  values: SelectItem[];
  placeholder?: string;
  className?: string;
  icons?: boolean;
}
interface TradingSelectProps {
  value: string | undefined;
  onChange: (value: string) => void;
  values: SelectItem[];
  placeholder?: string;
  className?: string;
  icons?: boolean;
}

export function FilterSelect({
  value,
  onChange,
  values,
  placeholder = "Select",
  className = "flex h-10 items-center justify-between gap-2.5 rounded-lg border border-card bg-card px-4 py-2 text-sm text-gray-300 hover:text-white cursor-pointer transition-colors outline-none focus:border-accent",
  icons = false,
}: FilterSelectProps) {
  return (
    <Select.Root value={value || undefined} onValueChange={onChange}>
      <Select.Trigger className={className}>
        {icons && <Layers className="h-4 w-4 text-cyan-600" />}
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
                key={item.id}
                value={item.id}
                className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-xs font-medium text-gray-300 outline-none cursor-pointer transition-colors hover:bg-card-hover hover:text-white data-highlighted:bg-card-hover data-highlighted:text-white data-[state=checked]:text-accent"
              >
                <Select.ItemText>{item.name}</Select.ItemText>
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

export function TreadingSelect({
  value,
  onChange,
  values,
  placeholder = "Select",
  className = "flex h-10 items-center justify-between gap-2.5 rounded-lg border border-card bg-card px-4 py-2 text-sm text-gray-300 hover:text-white cursor-pointer transition-colors outline-none focus:border-accent",
  icons = false,
}: TradingSelectProps) {

  if (value === undefined) return null;
  return (
    <Select.Root value={value || undefined} onValueChange={onChange}>
      <Select.Trigger className={className}>
        {icons && <Layers className="h-4 w-4 text-cyan-600" />}
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
                key={item.id}
                value={item.id}
                className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-xs font-medium text-gray-300 outline-none cursor-pointer transition-colors hover:bg-card-hover hover:text-white data-highlighted:bg-card-hover data-highlighted:text-white data-[state=checked]:text-accent"
              >
                <Select.ItemText>{item.name}</Select.ItemText>
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

