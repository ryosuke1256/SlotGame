import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef, useMemo } from 'react';

type CommonButtonType = {
  variant?: 'attention' | 'primary';
};

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & CommonButtonType;

export const Button = forwardRef<HTMLButtonElement, ButtonType>(function ButtonBase({ className, variant, ...props }, ref) {
  const classes = useMemo(() => {
    return clsx('shadow bg-gray-400 py-2 px-3 rounded-lg text-white hover:bg-opacity-90 hover:shadow-lg', { 'bg-red-500': variant === 'attention', 'bg-blue-500': variant === 'primary' }, className);
  }, [variant, className]);

  return <button {...props} ref={ref} className={classes} />;
});
