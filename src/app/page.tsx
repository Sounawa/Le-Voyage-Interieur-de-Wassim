'use client';

import { AnimatePresence } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { useStoryStore } from '@/store/story-store';
import { storyPages, firstPageId } from '@/data/story-data';
import type { Choice } from '@/lib/story-types';
import ParticleBackground from '@/components/book/ParticleBackground';
import ProgressBar from '@/components/book/ProgressBar';
import BookCover from '@/components/book/BookCover';
import ChapterTitle from '@/components/book/ChapterTitle';
import StoryPageView from '@/components/book/StoryPageView';
import ChoiceButtons from '@/components/book/ChoiceButtons';
import EndingScreen from '@/components/book/EndingScreen';

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

  const currentPage = storyPages[currentPageId];

  const handleStart = useCallback(() => {
    setView('reading');
    const startPage = storyPages[currentPageId] || storyPages[firstPageId];
    if (startPage?.isChapterStart) {
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

    // Check if we need to show a chapter transition
    if (nextPage.isChapterStart && nextPage.chapter !== previousChapter) {
      setTransitioningChapter({ chapter: nextPage.chapter, title: nextPage.chapterTitle });
      setView('chapter-transition');
      setPreviousChapter(nextPage.chapter);
      // Pre-navigate to the chapter start page
      goToPage(nextPage.id, nextPage.chapter);
      return;
    }

    goToPage(nextPage.id, nextPage.chapter);
  }, [currentPage, previousChapter, goToPage]);

  const handleChoice = useCallback((choice: Choice) => {
    // Dynamic routing: if seeking guidance but has mixed/strong ego choices, redirect to struggle ending
    let targetPageId = choice.nextPage;
    if (choice.id === 'seek-guidance') {
      const tags = useStoryStore.getState().chosenTags;
      // If player made many ego-driven choices, they get the "struggle" ending instead of "wisdom"
      const egoTags = ['courage', 'confrontation', 'discipline', 'passion', 'firmness', 'curiosity'];
      const spiritualTags = ['humility', 'patience', 'detachment', 'mercy', 'dhikr', 'wisdom'];
      const egoCount = tags.filter(t => egoTags.includes(t)).length;
      const spiritualCount = tags.filter(t => spiritualTags.includes(t)).length;
      if (egoCount > spiritualCount && egoCount >= 3) {
        targetPageId = 'ending-struggle';
      }
    }

    const nextPage = storyPages[targetPageId];
    if (!nextPage) return;

    if (choice.tag) {
      // Check if this choice leads to a new chapter
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

  // Detect endings
  useEffect(() => {
    if (currentPage?.isEnding && currentPage.endingType) {
      markEndingFound(currentPage.endingType);
      // Small delay before showing ending screen
      const timer = setTimeout(() => setView('ending'), 1500);
      return () => clearTimeout(timer);
    }
  }, [currentPageId, currentPage, markEndingFound]);

  // Mood-based background colors
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

  return (
    <main className={`min-h-screen text-amber-100/90 transition-colors duration-1000 ${getMoodClasses()}`}>
      <ParticleBackground />

      {view === 'cover' && (
        <BookCover onStart={handleStart} />
      )}

      {view !== 'cover' && view !== 'ending' && (
        <ProgressBar currentPageId={currentPageId} totalPages={Object.keys(storyPages).length} />
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
    </main>
  );
}
