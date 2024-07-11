import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export const buttonStyles = cva("", {
  variants: {
    variant: {
      primary:
        "py-3 px-3 rounded-full hover:bg-secondary-950 duration-300 hover:text-white",
      secondary:
        "bg-primary-300 hover:bg-primary-400 rounded-full px-6 py-3 duration-300",
      tertiary:
        "border-2 border-secondary-950 border-solid rounded-full py-3 px-6 hover:bg-secondary-950 duration-300 hover:text-white",

      "tertiary-reversed":
        "border py-3 px-5 rounded-full text-white hover:bg-primary-300 duration-300 hover:text-black",
    },
    size: {
      sm: "",
      md: "",
    },
  },
});

export type ButtonStylesProps = VariantProps<typeof buttonStyles>;
