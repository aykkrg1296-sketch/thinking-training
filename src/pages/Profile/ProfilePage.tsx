import { BackButton } from '../../components/BackButton';
import { Card } from '../../components/Card';
import type { ThinkingProfile } from '../../types';

interface Props {
  profile: ThinkingProfile;
  totalCompleted: number;
}

const labels: Record<keyof ThinkingProfile, { name: string; color: string; description: string }> = {
  abstraction: { name: 'ざっくり力', color: '#FF8C42', description: 'ものごとをひとことでまとめる力' },
  concretization: { name: 'くわしく力', color: '#FBBF24', description: '抽象を具体に落とす力' },
  essence: { name: '見抜く力', color: '#4ADE80', description: '本質を見つける力' },
  verbalization: { name: '言葉にする力', color: '#A78BFA', description: '考えを伝わる言葉にする力' },
  deconstruction: { name: 'バラす力', color: '#F472B6', description: 'ものごとを要素に分ける力' },
};

export function ProfilePage({ profile, totalCompleted }: Props) {
  const maxScore = Math.max(...Object.values(profile), 1);

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px', padding: '8px 0' }}>
      <BackButton to="/home" />
      <h2 style={{ fontSize: '24px', fontWeight: 900 }}>🧠 自分説明書</h2>
      <p style={{ fontSize: '14px', color: '#78716C' }}>
        問題を解くほど、あなたの思考のクセがわかっていく
      </p>

      {totalCompleted === 0 ? (
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '12px',
          color: '#A8A29E',
        }}>
          <span style={{ fontSize: '48px' }}>🧠</span>
          <p style={{ fontSize: '14px', textAlign: 'center' }}>
            まだデータがないよ。<br />問題を解くと、ここに<br />あなたの思考のクセが表示される
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Card isStatic>
            <div style={{ fontSize: '14px', color: '#78716C', marginBottom: '4px' }}>
              合計クリア数
            </div>
            <div style={{ fontSize: '32px', fontWeight: 900 }}>
              {totalCompleted} <span style={{ fontSize: '16px', color: '#A8A29E' }}>問</span>
            </div>
          </Card>

          {(Object.entries(labels) as [keyof ThinkingProfile, typeof labels[keyof ThinkingProfile]][]).map(
            ([key, { name, color, description }]) => (
              <Card key={key} isStatic>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: 800 }}>{name}</div>
                    <div style={{ fontSize: '12px', color: '#A8A29E', marginTop: '2px' }}>{description}</div>
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: 900, color }}>
                    {profile[key]}
                  </div>
                </div>
                <div style={{
                  width: '100%',
                  height: '6px',
                  background: '#F5F5F4',
                  borderRadius: '9999px',
                  marginTop: '8px',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    height: '100%',
                    width: `${(profile[key] / maxScore) * 100}%`,
                    background: color,
                    borderRadius: '9999px',
                    transition: 'width 0.5s cubic-bezier(0.34,1.56,0.64,1)',
                  }} />
                </div>
              </Card>
            )
          )}
        </div>
      )}
    </div>
  );
}
