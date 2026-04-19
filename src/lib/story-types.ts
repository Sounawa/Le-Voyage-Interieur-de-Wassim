export interface Choice {
  id: string;
  text: string;
  nextPage: string;
  tag?: string;
  emoji?: string;
}

export interface StoryPage {
  id: string;
  chapter: number;
  chapterTitle: string;
  title?: string;
  paragraphs: string[];
  mood: 'prologue' | 'wonder' | 'darkness' | 'wisdom' | 'danger' | 'peace' | 'triumph' | 'ending';
  choices?: Choice[];
  next?: string;
  isChapterStart?: boolean;
  isEnding?: boolean;
  endingType?: 'light' | 'wisdom' | 'shadow' | 'struggle';
  shaykhSpeaks?: string;
  illustrationPrompt?: string;
}

export interface GameState {
  currentPageId: string;
  visitedPages: string[];
  chosenTags: string[];
  chaptersCompleted: number[];
  endingsFound: string[];
  startedAt: number;
  isComplete: boolean;
  hasStarted: boolean;
}
