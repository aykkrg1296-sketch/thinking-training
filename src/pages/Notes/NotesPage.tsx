import { BackButton } from '../../components/BackButton';
import { Card } from '../../components/Card';
import { modules } from '../../data/modules';
import type { Note } from '../../types';

interface Props {
  notes: Note[];
}

export function NotesPage({ notes }: Props) {
  const getModuleName = (moduleId: string) => {
    return modules.find(m => m.id === moduleId)?.name || moduleId;
  };

  const getModuleColor = (moduleId: string) => {
    return modules.find(m => m.id === moduleId)?.color || '#FF8C42';
  };

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px', padding: '8px 0' }}>
      <BackButton to="/home" />
      <h2 style={{ fontSize: '24px', fontWeight: 900 }}>📝 気づきノート</h2>

      {notes.length === 0 ? (
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '12px',
          color: '#A8A29E',
        }}>
          <span style={{ fontSize: '48px' }}>📝</span>
          <p style={{ fontSize: '14px', textAlign: 'center' }}>
            問題を解いた後に<br />気づいたことをメモしよう
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {notes.map(note => (
            <Card key={note.id} isStatic>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '8px',
              }}>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: getModuleColor(note.moduleId),
                  background: `${getModuleColor(note.moduleId)}15`,
                  padding: '2px 8px',
                  borderRadius: '6px',
                }}>
                  {getModuleName(note.moduleId)}
                </span>
                <span style={{ fontSize: '11px', color: '#A8A29E' }}>
                  {new Date(note.createdAt).toLocaleDateString('ja-JP', {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
              <p style={{ fontSize: '15px', lineHeight: 1.7 }}>{note.text}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
