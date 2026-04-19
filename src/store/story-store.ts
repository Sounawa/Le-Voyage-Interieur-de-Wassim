import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StoryStore {
  currentPageId: string;
  visitedPages: string[];
  chosenTags: string[];
  chaptersCompleted: number[];
  endingsFound: string[];
  startedAt: number;
  isComplete: boolean;
  hasStarted: boolean;
  
  goToPage: (pageId: string, chapter?: number) => void;
  makeChoice: (choiceId: string, nextPage: string, tag?: string, chapter?: number) => void;
  markChapterComplete: (chapter: number) => void;
  markEndingFound: (endingType: string) => void;
  restart: () => void;
}

const initialState = {
  currentPageId: 'prologue',
  visitedPages: ['prologue'] as string[],
  chosenTags: [] as string[],
  chaptersCompleted: [] as number[],
  endingsFound: [] as string[],
  startedAt: Date.now(),
  isComplete: false,
  hasStarted: false,
};

export const useStoryStore = create<StoryStore>()(
  persist(
    (set, get) => ({
      ...initialState,

      goToPage: (pageId, chapter) => {
        set((state) => {
          const newVisited = [...new Set([...state.visitedPages, pageId])];
          const newChapters = chapter && !state.chaptersCompleted.includes(chapter)
            ? [...state.chaptersCompleted, chapter]
            : state.chaptersCompleted;
          return {
            currentPageId: pageId,
            visitedPages: newVisited,
            chaptersCompleted: newChapters,
          };
        });
      },

      makeChoice: (choiceId, nextPage, tag, chapter) => {
        set((state) => {
          const newTags = tag ? [...state.chosenTags, tag] : state.chosenTags;
          const newVisited = [...new Set([...state.visitedPages, nextPage])];
          const newChapters = chapter && !state.chaptersCompleted.includes(chapter)
            ? [...state.chaptersCompleted, chapter]
            : state.chaptersCompleted;
          return {
            currentPageId: nextPage,
            visitedPages: newVisited,
            chosenTags: newTags,
            chaptersCompleted: newChapters,
          };
        });
      },

      markChapterComplete: (chapter) => {
        set((state) => ({
          chaptersCompleted: state.chaptersCompleted.includes(chapter)
            ? state.chaptersCompleted
            : [...state.chaptersCompleted, chapter],
        }));
      },

      markEndingFound: (endingType) => {
        set((state) => ({
          endingsFound: state.endingsFound.includes(endingType)
            ? state.endingsFound
            : [...state.endingsFound, endingType],
          isComplete: true,
        }));
      },

      restart: () => {
        set({
          ...initialState,
          startedAt: Date.now(),
          visitedPages: ['prologue'],
        });
      },
    }),
    {
      name: 'souhayl-journey-v1',
    }
  )
);
