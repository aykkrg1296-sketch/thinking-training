import { useState, useCallback, useEffect } from 'react';
import type { UserProgress, ModuleId, QuestionProgress, Note, ThinkingType } from '../types';

const STORAGE_KEY = 'thinking-training-progress';

const initialProfile = {
  abstraction: 0,
  concretization: 0,
  essence: 0,
  verbalization: 0,
  deconstruction: 0,
};

const createInitialModules = (): UserProgress['modules'] => ({
  'abstraction-ladder': {},
  'essence-catch': {},
  'purpose-means': {},
  'verbalization': {},
  'deconstruction': {},
});

const initialProgress: UserProgress = {
  onboardingCompleted: false,
  modules: createInitialModules(),
  notes: [],
  thinkingProfile: initialProfile,
  totalCompleted: 0,
  currentStreak: 0,
  lastPlayedAt: null,
};

function loadProgress(): UserProgress {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return { ...initialProgress, ...JSON.parse(saved) };
    }
  } catch {
    // corrupted data, start fresh
  }
  return initialProgress;
}

function saveProgress(progress: UserProgress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // storage full or unavailable
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(loadProgress);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const completeOnboarding = useCallback(() => {
    setProgress(prev => ({ ...prev, onboardingCompleted: true }));
  }, []);

  const updateQuestion = useCallback((
    moduleId: ModuleId,
    questionId: string,
    update: Partial<QuestionProgress>
  ) => {
    setProgress(prev => {
      const moduleProgress = prev.modules[moduleId] || {};
      const current = moduleProgress[questionId] || {
        status: 'available' as const,
        answers: [],
        hintsUsed: 0,
        completedAt: null,
      };

      const updated = { ...current, ...update };
      const wasCompleted = current.status === 'completed';
      const isNowCompleted = updated.status === 'completed';

      return {
        ...prev,
        modules: {
          ...prev.modules,
          [moduleId]: {
            ...moduleProgress,
            [questionId]: updated,
          },
        },
        totalCompleted: prev.totalCompleted + (isNowCompleted && !wasCompleted ? 1 : 0),
        lastPlayedAt: Date.now(),
      };
    });
  }, []);

  const completeQuestion = useCallback((
    moduleId: ModuleId,
    questionId: string,
    answers: string[],
    hintsUsed: number,
    thinkingType: ThinkingType
  ) => {
    updateQuestion(moduleId, questionId, {
      status: 'completed',
      answers,
      hintsUsed,
      completedAt: Date.now(),
    });

    // Update thinking profile
    setProgress(prev => ({
      ...prev,
      thinkingProfile: {
        ...prev.thinkingProfile,
        [thinkingType]: prev.thinkingProfile[thinkingType] + 1,
      },
    }));
  }, [updateQuestion]);

  const addNote = useCallback((note: Omit<Note, 'id' | 'createdAt'>) => {
    const newNote: Note = {
      ...note,
      id: crypto.randomUUID(),
      createdAt: Date.now(),
    };
    setProgress(prev => ({
      ...prev,
      notes: [newNote, ...prev.notes],
    }));
  }, []);

  const getModuleProgress = useCallback((moduleId: ModuleId, totalQuestions: number) => {
    const moduleData = progress.modules[moduleId] || {};
    const completed = Object.values(moduleData).filter(q => q.status === 'completed').length;
    return {
      completed,
      total: totalQuestions,
      percentage: totalQuestions > 0 ? Math.round((completed / totalQuestions) * 100) : 0,
    };
  }, [progress.modules]);

  return {
    progress,
    completeOnboarding,
    updateQuestion,
    completeQuestion,
    addNote,
    getModuleProgress,
  };
}
