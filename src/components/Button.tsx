import { type ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import styles from './Button.module.css';

type Variant = 'primary' | 'secondary' | 'correct' | 'hint' | 'ghost';
type Size = 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  pill?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'medium',
  pill = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    size !== 'medium' ? styles[size] : '',
    pill ? styles.pill : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <motion.button
      className={classes}
      whileTap={{ scale: 0.97 }}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}
