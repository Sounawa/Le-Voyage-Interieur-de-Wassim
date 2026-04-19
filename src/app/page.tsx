'use client';

import { AnimatePresence } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { BookOpen, Moon, Scroll, Star } from 'lucide-react';
import { useStoryStore } from '@/store/story-store';
import { storyPages, firstPageId } from '@/data/story-data';
import type { Choice } from '@/lib/story-types';
import ParticleBackground from '@/components/book/ParticleBackground';
import IslamicPattern from '@/components/book/IslamicPattern';
import VignetteOverlay from '@/components/book/VignetteOverlay';
import ProgressBar from '@/components/book/ProgressBar';
import BookCover from '@/components/book/BookCover';
import ChapterTitle from '@/components/book/ChapterTitle';
import BismillahHeader from '@/components/book/BismillahHeader';
import StoryPageView from '@/components/book/StoryPageView';
import ChoiceButtons from '@/components/book/ChoiceButtons';
import EndingScreen from '@/components/book/EndingScreen';
import ChoiceJournal from '@/components/book/ChoiceJournal';

type AppView = 'cover' | 'reading' | 'chapter-transition' | 'ending';

export default function Home() {
  const { currentPageId, visitedPages, endingsFound, goToPage, makeChoice, markEndingFound, restart } = useStoryStore();
  const [savedView] = useState<AppView>(() => {
    if (typeof window === 'undefined') return 'cover';
    const hasSave = useStoryStore.getState().hasStarted;
    return hasSave ? 'reading' : 'cover';
  });
  const [view, setView] = useState<AppView>(savedView);
  const [transitioningChapter, setTransitioningChapter] = useState<{ chapter: number; title: string } | null>(null);
  const [previousChapter, setPreviousChapter] = useState<number>(-1);
  const [journalOpen, setJournalOpen] = useState(false);

  const currentPage = storyPages[currentPageId];

  const handleStart = useCallback(() => {
    setView('reading');
    const startPage = storyPages[currentPageId] || storyPages[firstPageId];
    if (startPage?.isChapterStart && startPage.chapter >= 1) {
      setTransitioningChapter({ chapter: startPage.chapter, title: startPage.chapterTitle });
      setView('chapter-transition');
    }
  }, [currentPageId]);

  const handleRestart = useCallback(() => {
    restart();
    setView('cover');
    setTransitioningChapter(null);
    setPreviousChapter(-1);
  }, [restart]);

  const handleContinue = useCallback(() => {
    if (!currentPage?.next) return;
    const nextPage = storyPages[currentPage.next];
    if (!nextPage) return;

    if (nextPage.isChapterStart && nextPage.chapter !== previousChapter) {
      setTransitioningChapter({ chapter: nextPage.chapter, title: nextPage.chapterTitle });
      setView('chapter-transition');
      setPreviousChapter(nextPage.chapter);
      goToPage(nextPage.id, nextPage.chapter);
      return;
    }

    goToPage(nextPage.id, nextPage.chapter);
  }, [currentPage, previousChapter, goToPage]);

  const handleChoice = useCallback((choice: Choice) => {
    const nextPage = storyPages[choice.nextPage];
    if (!nextPage) return;

    if (choice.tag) {
      if (nextPage.isChapterStart && nextPage.chapter !== previousChapter) {
        makeChoice(choice.id, nextPage.id, choice.tag, nextPage.chapter);
        setTransitioningChapter({ chapter: nextPage.chapter, title: nextPage.chapterTitle });
        setView('chapter-transition');
        setPreviousChapter(nextPage.chapter);
        return;
      }
      makeChoice(choice.id, nextPage.id, choice.tag, nextPage.chapter);
    } else {
      goToPage(nextPage.id, nextPage.chapter);
    }
  }, [previousChapter, makeChoice, goToPage]);

  const handleChapterTransitionComplete = useCallback(() => {
    setView('reading');
    setTransitioningChapter(null);
  }, []);

  useEffect(() => {
    if (currentPage?.isEnding && currentPage.endingType) {
      markEndingFound(currentPage.endingType);
      const timer = setTimeout(() => setView('ending'), 1500);
      return () => clearTimeout(timer);
    }
  }, [currentPageId, currentPage, markEndingFound]);

  const getMoodClasses = () => {
    if (!currentPage) return 'bg-[#0a0a0f]';
    switch (currentPage.mood) {
      case 'wonder': return 'bg-[#0a0a12]';
      case 'darkness': return 'bg-[#080810]';
      case 'wisdom': return 'bg-[#0a0a0e]';
      case 'danger': return 'bg-[#0f0808]';
      case 'peace': return 'bg-[#080a0a]';
      case 'triumph': return 'bg-[#0c0a06]';
      case 'ending': return 'bg-[#0a0a0f]';
      default: return 'bg-[#0a0a0f]';
    }
  };

  const showJournalButton = view === 'reading' && !currentPage?.isEnding;

  // Only show footer during reading (not on cover or ending screens)
  const showFooter = view === 'reading' || view === 'chapter-transition';

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 text-amber-100/90 transition-colors duration-1000">
        {/* Background layers */}
        <div className="fixed inset-0 -z-10">
          <div className={`absolute inset-0 transition-colors duration-1000 ${getMoodClasses()}`} />
        </div>
        <ParticleBackground />
        <IslamicPattern />
        <VignetteOverlay />

        {view === 'cover' && (
          <BookCover onStart={handleStart} />
        )}

        {view !== 'cover' && view !== 'ending' && (
          <>
            <ProgressBar currentPageId={currentPageId} totalPages={Object.keys(storyPages).length} />
            
            {/* Journal button */}
            {showJournalButton && (
              <button
                onClick={() => setJournalOpen(true)}
                className="fixed top-14 right-4 z-30 p-2.5 rounded-lg bg-[#0d0c14]/80 backdrop-blur-sm border border-amber-800/15 hover:bg-amber-900/20 hover:border-amber-700/30 transition-all duration-300 group"
                title="Journal de Souhayl"
              >
                <Scroll className="w-4 h-4 text-amber-500/50 group-hover:text-amber-400/70 transition-colors" />
              </button>
            )}
          </>
        )}

        {/* Bismillah at chapter starts */}
        {view === 'reading' && currentPage?.isChapterStart && currentPage.chapter >= 1 && (
          <div className="pt-14">
            <BismillahHeader />
          </div>
        )}

        <AnimatePresence mode="wait">
          {view === 'reading' && currentPage && !currentPage.isEnding && (
            <div key={currentPageId}>
              <StoryPageView page={currentPage} onContinue={handleContinue} />
              {currentPage.choices && (
                <div className="max-w-2xl mx-auto px-4 pb-20">
                  <ChoiceButtons choices={currentPage.choices} onChoose={handleChoice} />
                </div>
              )}
            </div>
          )}

          {view === 'chapter-transition' && transitioningChapter && (
            <ChapterTitle
              key={`chapter-${transitioningChapter.chapter}`}
              chapter={transitioningChapter.chapter}
              title={transitioningChapter.title}
              onComplete={handleChapterTransitionComplete}
            />
          )}

          {view === 'ending' && currentPage?.isEnding && (
            <EndingScreen
              page={currentPage}
              endingsFound={endingsFound}
              onRestart={handleRestart}
            />
          )}
        </AnimatePresence>

        {/* Choice Journal sidebar */}
        <ChoiceJournal isOpen={journalOpen} onClose={() => setJournalOpen(false)} />
      </main>

      {/* Sticky footer - only during reading */}
      {showFooter && (
        <footer className="relative z-20 mt-auto py-3 px-4 text-center bg-gradient-to-t from-[#0a0a0f]/80 to-transparent backdrop-blur-sm border-t border-amber-900/10">
          <div className="flex items-center justify-center gap-2">
            <Moon className="w-3 h-3 text-amber-700/30" />
            <span className="text-amber-700/30 text-[11px] font-serif tracking-wide">
              Le Voyage Intérieur de Souhayl — Tome 1
            </span>
            <Star className="w-2.5 h-2.5 text-amber-700/20" />
          </div>
        </footer>
      )}
    </div>
  );
}
