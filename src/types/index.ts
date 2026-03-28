// ===================================
// 型定義 — 思考の解像度
// ===================================

export type ModuleId =
  | 'abstraction-ladder'
  | 'essence-catch'
  | 'purpose-means'
  | 'verbalization'
  | 'deconstruction';

export type ThinkingType =
  | 'abstraction'
  | 'concretization'
  | 'essence'
  | 'verbalization'
  | 'deconstruction';

export type QuestionStatus = 'locked' | 'available' | 'completed';

// --- 問題データ ---

export interface QuestionStep {
  prompt: string;
  inputType: 'text' | 'select';
  hints: string[];
  sampleAnswer: string;
  explanation: string;
  options?: string[]; // select型の場合
}

export interface Question {
  moduleId: ModuleId;
  questionId: string;
  title: string;
  steps: QuestionStep[];
  thinkingType: ThinkingType;
  difficulty: 1 | 2 | 3;
}

export interface Module {
  id: ModuleId;
  name: string;
  description: string;
  icon: string;
  color: string;
  questions: Question[];
}

// --- ユーザー進捗 ---

export interface QuestionProgress {
  status: QuestionStatus;
  answers: string[];
  hintsUsed: number;
  completedAt: number | null;
}

export interface Note {
  id: string;
  text: string;
  questionId: string;
  moduleId: ModuleId;
  createdAt: number;
}

export interface ThinkingProfile {
  abstraction: number;
  concretization: number;
  essence: number;
  verbalization: number;
  deconstruction: number;
}

export interface UserProgress {
  onboardingCompleted: boolean;
  modules: Record<ModuleId, Record<string, QuestionProgress>>;
  notes: Note[];
  thinkingProfile: ThinkingProfile;
  totalCompleted: number;
  currentStreak: number;
  lastPlayedAt: number | null;
}
