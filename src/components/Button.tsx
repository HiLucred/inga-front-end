import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'px-8 py-3 text-white font-semibold',

  variants: {
    variant: {
      default:
        'border border-white hover:bg-white hover:text-black transition-all',
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant })} />
}
