import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import styles from './TopPage.module.css';

export function TopPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <div className={styles.icon}>🔬</div>

      <h1 className={styles.title}>
        思考の<span className={styles.highlight}>解像度</span>
      </h1>

      <p className={styles.subtitle}>
        むずかしいことは何もない。<br />
        ちょっとした問いに答えるだけで、<br />
        考える力がついていく。
      </p>

      <div className={styles.buttonArea}>
        <Button
          variant="primary"
          size="large"
          onClick={() => navigate('/onboarding')}
        >
          はじめる
        </Button>
      </div>
    </motion.div>
  );
}
