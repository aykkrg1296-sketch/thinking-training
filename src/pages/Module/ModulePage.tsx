import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BackButton } from '../../components/BackButton';
import { Card } from '../../components/Card';
import { modules } from '../../data/modules';
import type { UserProgress } from '../../types';

interface Props {
  progress: UserProgress;
}

export function ModulePage({ progress }: Props) {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();

  const mod = modules.find(m => m.id === moduleId);
  if (!mod) return <div>モジュールが見つかりません</div>;

  const moduleProgress = progress.modules[mod.id] || {};

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px', padding: '8px 0' }}>
      <BackButton to="/home" />

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '36px' }}>{mod.icon}</span>
        <div>
          <h2 style={{ fontSize: '22px', fontWeight: 900 }}>{mod.name}</h2>
          <p style={{ fontSize: '14px', color: '#78716C' }}>{mod.description}</p>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {mod.questions.map((q, index) => {
          const qProgress = moduleProgress[q.questionId];
          const isCompleted = qProgress?.status === 'completed';

          return (
            <motion.div
              key={q.questionId}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
            >
              <Card
                onClick={() => navigate(`/question/${mod.id}/${q.questionId}`)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: isCompleted ? mod.color : '#F5F5F4',
                    color: isCompleted ? '#fff' : '#A8A29E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '14px',
                    flexShrink: 0,
                  }}>
                    {isCompleted ? '✓' : index + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: isCompleted ? '#78716C' : '#1C1917',
                    }}>
                      {q.title}
                    </div>
                    <div style={{ fontSize: '12px', color: '#A8A29E', marginTop: '2px' }}>
                      {q.difficulty === 1 ? 'かんたん' : q.difficulty === 2 ? 'ふつう' : 'チャレンジ'}
                    </div>
                  </div>
                  <span style={{ color: '#D6D3D1', fontSize: '18px' }}>&#x203A;</span>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
