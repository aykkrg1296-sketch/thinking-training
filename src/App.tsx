import { Routes, Route, Navigate } from 'react-router-dom';
import { useProgress } from './stores/useProgress';
import { TopPage } from './pages/Top/TopPage';
import { OnboardingPage } from './pages/Onboarding/OnboardingPage';
import { HomePage } from './pages/Home/HomePage';
import { ModulePage } from './pages/Module/ModulePage';
import { QuestionPage } from './pages/Question/QuestionPage';
import { NotesPage } from './pages/Notes/NotesPage';
import { ProfilePage } from './pages/Profile/ProfilePage';

export function App() {
  const { progress, completeOnboarding, completeQuestion, addNote, getModuleProgress } = useProgress();

  return (
    <div className="app-container">
      <Routes>
        <Route
          path="/"
          element={
            progress.onboardingCompleted
              ? <Navigate to="/home" replace />
              : <TopPage />
          }
        />
        <Route
          path="/onboarding"
          element={
            <OnboardingPage onComplete={completeOnboarding} />
          }
        />
        <Route
          path="/home"
          element={
            <HomePage
              progress={progress}
              getModuleProgress={getModuleProgress}
            />
          }
        />
        <Route
          path="/module/:moduleId"
          element={
            <ModulePage progress={progress} />
          }
        />
        <Route
          path="/question/:moduleId/:questionId"
          element={
            <QuestionPage
              progress={progress}
              completeQuestion={completeQuestion}
              addNote={addNote}
            />
          }
        />
        <Route
          path="/notes"
          element={
            <NotesPage notes={progress.notes} />
          }
        />
        <Route
          path="/profile"
          element={
            <ProfilePage profile={progress.thinkingProfile} totalCompleted={progress.totalCompleted} />
          }
        />
      </Routes>
    </div>
  );
}
