import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import styles from './OnboardingPage.module.css';

interface Props {
  onComplete: () => void;
}

interface Slide {
  emoji: string;
  heading: string;
  text: string;
  hasInput?: boolean;
  inputPlaceholder?: string;
  afterInput?: string;
}

const slides: Slide[] = [
  {
    emoji: '🍎',
    heading: 'りんごって何？',
    text: 'いきなりだけど、\nひとことで答えてみて。',
    hasInput: true,
    inputPlaceholder: '例: 赤い果物',
    afterInput: 'いいね。「赤い果物」「甘酸っぱいやつ」...なんでもOK。',
  },
  {
    emoji: '🍊🍇🍌',
    heading: 'じゃあ、果物って何？',
    text: 'りんごも、みかんも、ぶどうも\nぜんぶまとめると？',
    hasInput: true,
    inputPlaceholder: '例: 甘くて自然にできるもの',
    afterInput: 'りんご = ひとつのもの。\n果物 = まとめた言い方。\nこの違いがわかったら、もう半分できてる。',
  },
  {
    emoji: '🔭',
    heading: 'これだけ。',
    text: 'りんご → 「具体」\n果物 → 「抽象」\n\n難しい話じゃない。\nズームインとズームアウト。\nカメラのピントみたいなもの。',
  },
  {
    emoji: '🧠',
    heading: 'この行き来ができると',
    text: '人の話を「要するにこういうこと」と言える。\n自分の考えを言葉にできる。\n企画やコンセプトが書ける。\n\nぜんぶ、この筋肉を使ってる。',
  },
  {
    emoji: '🚀',
    heading: 'さあ、やってみよう',
    text: 'むずかしい問題はひとつもない。\nちょっとした問いに答えるだけ。\n\n気づいたら「考えられる人」に\nなってるから。',
  },
];

export function OnboardingPage({ onComplete }: Props) {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [answered, setAnswered] = useState<Record<number, boolean>>({});

  const slide = slides[currentSlide];
  const isLast = currentSlide === slides.length - 1;
  const canProceed = !slide.hasInput || answered[currentSlide];

  const handleNext = () => {
    if (isLast) {
      onComplete();
      navigate('/home', { replace: true });
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handleInput = () => {
    setAnswered(prev => ({ ...prev, [currentSlide]: true }));
  };

  return (
    <div className={styles.container}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className={styles.slide}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.emoji}>{slide.emoji}</div>
          <h2 className={styles.heading}>{slide.heading}</h2>
          <p className={styles.text}>
            {slide.text.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < slide.text.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>

          {slide.hasInput && !answered[currentSlide] && (
            <div className={styles.inputArea}>
              <TextInput
                placeholder={slide.inputPlaceholder}
                onSubmit={handleInput}
              />
            </div>
          )}

          {slide.hasInput && answered[currentSlide] && slide.afterInput && (
            <motion.div
              className={styles.answer}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {slide.afterInput.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < slide.afterInput!.split('\n').length - 1 && <br />}
                </span>
              ))}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className={styles.footer}>
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <div
              key={i}
              className={`${styles.dot} ${i === currentSlide ? styles.dotActive : ''}`}
            />
          ))}
        </div>

        {canProceed && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Button
              variant="primary"
              size="large"
              onClick={handleNext}
            >
              {isLast ? 'はじめる' : 'つぎへ'}
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
