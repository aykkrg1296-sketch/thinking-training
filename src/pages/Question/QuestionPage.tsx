import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import { modules } from '../../data/modules';
import type { UserProgress, ModuleId, ThinkingType, Note } from '../../types';
import styles from './QuestionPage.module.css';

interface Props {
  progress: UserProgress;
  completeQuestion: (moduleId: ModuleId, questionId: string, answers: string[], hintsUsed: number, thinkingType: ThinkingType) => void;
  addNote: (note: Omit<Note, 'id' | 'createdAt'>) => void;
}

type MessageType = 'user' | 'system' | 'hint' | 'sample' | 'explanation';

interface ChatMessage {
  type: MessageType;
  text: string;
}

export function QuestionPage({ completeQuestion, addNote }: Props) {
  const { moduleId, questionId } = useParams<{ moduleId: string; questionId: string }>();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentStep] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showSample, setShowSample] = useState(false);
  const [, setShowExplanation] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [noteText, setNoteText] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const mod = modules.find(m => m.id === moduleId);
  const question = mod?.questions.find(q => q.questionId === questionId);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!mod || !question) return <div>問題が見つかりません</div>;

  const step = question.steps[currentStep];
  const hasMoreSteps = currentStep < question.steps.length - 1;

  const handleAnswer = (text: string) => {
    const newAnswers = [...answers, text];
    setAnswers(newAnswers);

    setMessages(prev => [
      ...prev,
      { type: 'user', text },
      { type: 'system', text: 'いいね。自分の言葉で考えられてる。' },
    ]);

    // Show sample and explanation after user answers
    setTimeout(() => {
      setShowSample(true);
      setMessages(prev => [
        ...prev,
        { type: 'sample', text: `模範回答: ${step.sampleAnswer}` },
      ]);
    }, 800);

    setTimeout(() => {
      setShowExplanation(true);
      setMessages(prev => [
        ...prev,
        { type: 'explanation', text: step.explanation },
      ]);

      if (!hasMoreSteps) {
        setIsComplete(true);
        completeQuestion(
          mod.id,
          question.questionId,
          newAnswers,
          hintsUsed,
          question.thinkingType
        );
      }
    }, 1600);
  };

  const handleHint = () => {
    if (hintsUsed < step.hints.length) {
      setMessages(prev => [
        ...prev,
        { type: 'hint', text: `💡 ${step.hints[hintsUsed]}` },
      ]);
      setHintsUsed(prev => prev + 1);
    }
  };

  const handleShowAnswer = () => {
    setShowSample(true);
    setShowExplanation(true);
    setMessages(prev => [
      ...prev,
      { type: 'sample', text: `模範回答: ${step.sampleAnswer}` },
      { type: 'explanation', text: step.explanation },
    ]);
    setIsComplete(true);
    completeQuestion(
      mod.id,
      question.questionId,
      answers,
      hintsUsed,
      question.thinkingType
    );
  };

  const handleSaveNote = () => {
    if (noteText.trim()) {
      addNote({
        text: noteText.trim(),
        questionId: question.questionId,
        moduleId: mod.id,
      });
      setNoteText('');
    }
  };

  return (
    <div className={styles.container}>
      <BackButton to={`/module/${mod.id}`} />

      <div className={styles.meta}>
        {mod.name} &#x2022; {question.difficulty === 1 ? 'かんたん' : question.difficulty === 2 ? 'ふつう' : 'チャレンジ'}
      </div>

      <div className={styles.chatArea}>
        <motion.div
          className={styles.prompt}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {step.prompt}
        </motion.div>

        {messages.map((msg, i) => (
          <motion.div
            key={i}
            className={`${styles.message} ${
              msg.type === 'user' ? styles.userMessage :
              msg.type === 'hint' ? styles.hintMessage :
              msg.type === 'sample' ? styles.sampleAnswer :
              msg.type === 'explanation' ? styles.explanation :
              styles.systemMessage
            }`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {msg.text}
          </motion.div>
        ))}

        <div ref={chatEndRef} />
      </div>

      {!showSample && !isComplete && (
        <div className={styles.inputArea}>
          <TextInput
            placeholder="ここに書いてみよう..."
            onSubmit={handleAnswer}
          />
          <div className={styles.actions} style={{ marginTop: '8px' }}>
            {hintsUsed < step.hints.length && (
              <Button variant="ghost" size="small" onClick={handleHint}>
                💡 ヒント ({hintsUsed}/{step.hints.length})
              </Button>
            )}
            {hintsUsed >= step.hints.length && (
              <Button variant="ghost" size="small" onClick={handleShowAnswer}>
                答えを見る
              </Button>
            )}
          </div>
        </div>
      )}

      {isComplete && (
        <motion.div
          className={styles.noteArea}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className={styles.noteLabel}>📝 気づいたことがあればメモしよう</div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <textarea
              value={noteText}
              onChange={e => setNoteText(e.target.value)}
              placeholder="ここにメモ..."
              style={{
                flex: 1,
                padding: '10px 14px',
                border: '2px solid #E7E5E4',
                borderRadius: '12px',
                fontFamily: 'var(--font-main)',
                fontSize: '14px',
                resize: 'none',
                minHeight: '44px',
              }}
              rows={2}
            />
            <Button
              variant="secondary"
              size="small"
              onClick={handleSaveNote}
              disabled={!noteText.trim()}
            >
              保存
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
