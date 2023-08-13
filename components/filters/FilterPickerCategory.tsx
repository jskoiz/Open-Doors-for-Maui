import { cn } from "helpers";

interface FilterPickerCategoryProps {
  category: string;
  active: boolean;
  onClick?: (e: React.MouseEvent) => any;
}

export default function FilterPickerCategory({
  category,
  active,
  onClick,
}: FilterPickerCategoryProps) {
  const handleOnClick = (e) => {
    if (onClick) onClick(e);
  };
  return (
    <button
      className={cn(
        `
          rounded-full
          px-4
          py-1
          font-medium
          text-stone-700
          transition-all
        `,
        active && "bg-maui-100 text-stone-900",
        !active && "hover:bg-maui-300"
      )}
      onClick={handleOnClick}
    >
      {category}
    </button>
  );
}
