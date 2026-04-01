import { useState, useRef, useEffect } from 'react';
import styles from './TextInput.module.css';

interface TextInputProps {
  placeholder?: string;
  onSubmit: (value: string) => void;
  disabled?: boolean;
  maxLength?: number;
}

export function TextInput({
  placeholder = 'ここに書いてみよう...',
  onSubmit,
  disabled = false,
  maxLength = 200,
}: TextInputProps) {
  const [value, setValue] = useState('');
  const [lastEnterTime, setLastEnterTime] = useState<number>(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
    }
  }, [value]);

  const handleSubmit = () => {
    const trimmed = value.trim();
    if (trimmed && !disabled) {
      onSubmit(trimmed);
      setValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
      const now = Date.now();
      if (now - lastEnterTime < 500) {
        e.preventDefault();
        handleSubmit();
      } else {
        setLastEnterTime(now);
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputContainer}>
        <textarea
          ref={textareaRef}
          className={styles.input}
          value={value}
          onChange={e => setValue(e.target.value.slice(0, maxLength))}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          rows={1}
        />
        <button
          className={styles.submitButton}
          onClick={handleSubmit}
          disabled={!value.trim() || disabled}
          aria-label="送信"
        >
          &#x2191;
        </button>
      </div>
      {value.length > maxLength * 0.8 && (
        <span className={styles.charCount}>
          {value.length}/{maxLength}
        </span>
      )}
    </div>
  );
}
