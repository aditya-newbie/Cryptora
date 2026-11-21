import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface DescriptionType {
  description: string
}

export default function Description({ description }: DescriptionType) {

  const [descriptionIsShow, setDescriptionIsShow] = useState(false)

  return (
    <div className="sm:border-r sm:border-card-border sm:pr-4">
      <p className="leading-relaxed text-gray-200">{
        descriptionIsShow
          ? description
          : description.length > 350 ? description.slice(0, 350) + "..." : description
      }</p>
      <button
        type="button"
        className="mt-2 flex items-center gap-1 text-purple-300 underline"
        onClick={() => { setDescriptionIsShow(prev => !prev) }}
      >
        Read more <ChevronDown className="h-3 w-3" />
      </button>
    </div>
  )
}