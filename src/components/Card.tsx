import { type ReactNode, type CSSProperties } from 'react';
import { motion } from 'framer-motion';
import styles from './Card.module.css';

interface CardProps {
  children: ReactNode;
  color?: string;
  isModule?: boolean;
  isStatic?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Card({
  children,
  color,
  isModule = false,
  isStatic = false,
  onClick,
  className = '',
}: CardProps) {
  const classes = [
    styles.card,
    isModule ? styles.moduleCard : '',
    isStatic ? styles.static : '',
    className,
  ].filter(Boolean).join(' ');

  const style = color ? { '--card-color': color } as CSSProperties : undefined;

  return (
    <motion.div
      className={classes}
      style={style}
      onClick={onClick}
      whileTap={isStatic ? undefined : { scale: 0.98 }}
      layout
    >
      {children}
    </motion.div>
  );
}

// Progress bar sub-component
interface ProgressBarProps {
  percentage: number;
  completed: number;
  total: number;
  color?: string;
}

export function ProgressBar({ percentage, completed, total, color }: ProgressBarProps) {
  return (
    <div>
      <div className={styles.progressBar}>
        <motion.div
          className={styles.progressFill}
          style={color ? { background: color } : undefined}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
        />
      </div>
      <div className={styles.progressText}>{completed}/{total}</div>
    </div>
  );
}
