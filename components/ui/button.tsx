import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0 relative overflow-hidden group touch-target",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-sky-500 to-sky-600 text-white hover:from-sky-600 hover:to-sky-700 active:from-sky-700 active:to-sky-800 shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 active:shadow-md hover:scale-105 active:scale-100",
        destructive:
          "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 active:from-red-700 active:to-red-800 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 active:shadow-md hover:scale-105 active:scale-100",
        outline:
          "border-2 border-sky-500 bg-white text-sky-600 hover:bg-sky-50 hover:border-sky-600 active:bg-sky-100 active:border-sky-700 shadow-md shadow-sky-500/10 hover:shadow-lg hover:shadow-sky-500/20 active:shadow-sm hover:scale-105 active:scale-100",
        secondary:
          "bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800 active:from-gray-800 active:to-gray-900 shadow-lg shadow-gray-600/30 hover:shadow-xl hover:shadow-gray-600/40 active:shadow-md hover:scale-105 active:scale-100",
        ghost: "hover:bg-gray-100 hover:text-gray-900 active:bg-gray-200 text-gray-700",
        link: "text-sky-600 underline-offset-4 hover:underline hover:text-sky-700 active:text-sky-800",
      },
      size: {
        default: "h-11 sm:h-12 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg min-w-fit",
        sm: "h-9 sm:h-10 px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-md min-w-fit",
        lg: "h-12 sm:h-14 md:h-14 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 text-base sm:text-lg rounded-xl font-bold min-w-fit max-w-full",
        icon: "h-11 w-11 sm:h-12 sm:w-12 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    if (asChild) {
      // When asChild is true, we can't wrap children in additional elements
      // Apply classes directly to the child via className prop
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      )
    }
    
    // Regular button with shine effect
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {/* Shine effect overlay */}
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        {/* Button content */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
