import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, ProgressBar } from '../../components/Card';
import { Button } from '../../components/Button';
import { modules } from '../../data/modules';
import type { UserProgress, ModuleId } from '../../types';
import styles from './HomePage.module.css';

interface Props {
  progress: UserProgress;
  getModuleProgress: (moduleId: ModuleId, total: number) => {
    completed: number;
    total: number;
    percentage: number;
  };
}

export function HomePage({ progress, getModuleProgress }: Props) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.greeting}>おかえり</span>
        <h1 className={styles.title}>思考の解像度</h1>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statIcon}>&#x2714;</span>
            <span className={styles.statValue}>{progress.totalCompleted}</span>
            クリア
          </div>
        </div>
      </div>

      <div className={styles.moduleList}>
        {modules.map((mod, index) => {
          const prog = getModuleProgress(mod.id, mod.questions.length);
          return (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <Card
                isModule
                color={mod.color}
                onClick={() => navigate(`/module/${mod.id}`)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    fontSize: '28px',
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#FFF7ED',
                    borderRadius: '14px',
                    flexShrink: 0,
                  }}>
                    {mod.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '17px', fontWeight: 800 }}>{mod.name}</div>
                    <div style={{ fontSize: '13px', color: '#78716C', marginTop: '2px' }}>{mod.description}</div>
                  </div>
                </div>
                <ProgressBar
                  percentage={prog.percentage}
                  completed={prog.completed}
                  total={prog.total}
                  color={mod.color}
                />
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className={styles.bottomNav}>
        <Button
          variant="secondary"
          size="small"
          className={styles.navButton}
          onClick={() => navigate('/notes')}
        >
          &#x1F4DD; 気づきノート
        </Button>
        <Button
          variant="secondary"
          size="small"
          className={styles.navButton}
          onClick={() => navigate('/profile')}
        >
          &#x1F9E0; 自分説明書
        </Button>
      </div>
    </div>
  );
}
