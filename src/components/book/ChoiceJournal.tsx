'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, X, ChevronRight } from 'lucide-react';
import { useStoryStore } from '@/store/story-store';

interface ChoiceJournalProps {
  isOpen: boolean;
  onClose: () => void;
}

const tagLabels: Record<string, { label: string; emoji: string; chapter: string }> = {
  courage: { label: 'Entrer avec courage', emoji: '🦁', chapter: 'Chapitre 1' },
  humility: { label: 'Entrer avec humilité', emoji: '🕯️', chapter: 'Chapitre 1' },
  curiosity: { label: 'Entrer avec curiosité', emoji: '🔮', chapter: 'Chapitre 1' },
  confrontation: { label: 'Affronter le Nafs directement', emoji: '⚔️', chapter: 'Chapitre 2' },
  patience: { label: 'Écouter avec patience', emoji: '🤲', chapter: 'Chapitre 2' },
  detachment: { label: 'Se détourner vers la lumière', emoji: '✨', chapter: 'Chapitre 2' },
  firmness: { label: 'Rejeter Waswās fermement', emoji: '🛡️', chapter: 'Chapitre 3' },
  wisdom: { label: 'Écouter avec détachement', emoji: '🧠', chapter: 'Chapitre 3' },
  dhikr: { label: 'Se tourner vers le dhikr', emoji: '📿', chapter: 'Chapitre 3' },
  discipline: { label: 'Le chemin de la rigueur', emoji: '⛰️', chapter: 'Chapitre 3' },
  mercy: { label: 'Le chemin de la miséricorde', emoji: '🌿', chapter: 'Chapitre 3' },
  passion: { label: 'Le chemin de la passion', emoji: '🔥', chapter: 'Chapitre 3' },
  surrender: { label: "L'abandon total à Allah", emoji: '🤲', chapter: 'Chapitre 4' },
  guidance: { label: 'La quête de guidance', emoji: '📖', chapter: 'Chapitre 4' },
  independence: { label: "L'affrontement solitaire", emoji: '🗡️', chapter: 'Chapitre 4' },
};

function getVirtueProfile(tags: string[]): { virtues: string[]; challenges: string[] } {
  const virtues: string[] = [];
  const challenges: string[] = [];
  
  if (tags.includes('humility')) virtues.push('Humilité');
  if (tags.includes('patience')) virtues.push('Patience');
  if (tags.includes('dhikr')) virtues.push('Dévotion');
  if (tags.includes('mercy')) virtues.push('Miséricorde');
  if (tags.includes('courage')) virtues.push('Bravoure');
  if (tags.includes('wisdom')) virtues.push('Sagesse');
  if (tags.includes('detachment')) virtues.push('Détachement');
  if (tags.includes('discipline')) virtues.push('Discipline');
  if (tags.includes('surrender')) virtues.push('Abandon');
  if (tags.includes('passion')) virtues.push('Passion');

  if (tags.includes('confrontation')) challenges.push('Impulsivité');
  if (tags.includes('independence')) challenges.push('Indépendance excessive');
  if (tags.includes('curiosity') && !tags.includes('wisdom')) challenges.push('Curiosité non canalisée');
  if (tags.includes('firmness') && !tags.includes('dhikr')) challenges.push('Rigueur sans compassion');
  
  if (virtues.length === 0) virtues.push('Courage initial');
  if (challenges.length === 0) challenges.push('À découvrir');

  return { virtues, challenges };
}

export default function ChoiceJournal({ isOpen, onClose }: ChoiceJournalProps) {
  const { chosenTags, visitedPages, chaptersCompleted, endingsFound } = useStoryStore();
  const { virtues, challenges } = getVirtueProfile(chosenTags);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Journal Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm bg-[#0d0c14]/95 backdrop-blur-md border-l border-amber-800/20 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-[#0d0c14]/90 backdrop-blur-md px-6 py-4 border-b border-amber-800/15 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-amber-500/70" />
                <h2 className="font-serif text-lg text-amber-100 font-bold">Journal de Souhayl</h2>
              </div>
              <button onClick={onClose} className="p-2 rounded-lg hover:bg-amber-900/20 transition-colors">
                <X className="w-4 h-4 text-amber-200/50" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-amber-950/20 rounded-lg p-3 border border-amber-800/10">
                  <p className="text-amber-500/50 text-xs font-serif mb-1">Pages visitées</p>
                  <p className="text-amber-100 text-2xl font-bold font-serif">{visitedPages.length}</p>
                </div>
                <div className="bg-amber-950/20 rounded-lg p-3 border border-amber-800/10">
                  <p className="text-amber-500/50 text-xs font-serif mb-1">Choix effectués</p>
                  <p className="text-amber-100 text-2xl font-bold font-serif">{chosenTags.length}</p>
                </div>
                <div className="bg-amber-950/20 rounded-lg p-3 border border-amber-800/10">
                  <p className="text-amber-500/50 text-xs font-serif mb-1">Chapitres</p>
                  <p className="text-amber-100 text-2xl font-bold font-serif">{chaptersCompleted.length}/4</p>
                </div>
                <div className="bg-amber-950/20 rounded-lg p-3 border border-amber-800/10">
                  <p className="text-amber-500/50 text-xs font-serif mb-1">Fins trouvées</p>
                  <p className="text-amber-100 text-2xl font-bold font-serif">{endingsFound.length}/4</p>
                </div>
              </div>

              {/* Virtue Profile */}
              {chosenTags.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-amber-500/60 text-xs uppercase tracking-wider font-serif">Profil spirituel</h3>
                  <div>
                    <p className="text-amber-300/40 text-xs mb-2 font-serif">Vertus développées</p>
                    <div className="flex flex-wrap gap-2">
                      {virtues.map((v) => (
                        <span key={v} className="px-2 py-1 text-xs bg-emerald-900/20 text-emerald-400/70 rounded-full border border-emerald-700/20 font-serif">
                          ✦ {v}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-amber-300/40 text-xs mb-2 font-serif">Défis à surmonter</p>
                    <div className="flex flex-wrap gap-2">
                      {challenges.map((c) => (
                        <span key={c} className="px-2 py-1 text-xs bg-orange-900/20 text-orange-400/70 rounded-full border border-orange-700/20 font-serif">
                          ⚡ {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Choices Timeline */}
              <div className="space-y-3">
                <h3 className="text-amber-500/60 text-xs uppercase tracking-wider font-serif">Chronologie des choix</h3>
                <div className="space-y-3">
                  {chosenTags.map((tag, index) => {
                    const info = tagLabels[tag];
                    if (!info) return null;
                    return (
                      <motion.div
                        key={`${tag}-${index}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 group"
                      >
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-amber-900/30 border border-amber-700/30 flex items-center justify-center text-sm shrink-0">
                            {info.emoji}
                          </div>
                          {index < chosenTags.length - 1 && (
                            <div className="w-px h-6 bg-amber-800/20 mt-1" />
                          )}
                        </div>
                        <div className="pt-1">
                          <p className="text-amber-100/80 text-sm font-serif">{info.label}</p>
                          <p className="text-amber-500/40 text-xs font-serif">{info.chapter}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                  {chosenTags.length === 0 && (
                    <p className="text-amber-200/30 text-sm font-serif italic">
                      Aucun choix encore effectué...
                    </p>
                  )}
                </div>
              </div>

              {/* Endings Gallery */}
              {endingsFound.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-amber-500/60 text-xs uppercase tracking-wider font-serif">Fins découvertes</h3>
                  <div className="space-y-2">
                    {endingsFound.map((ending) => (
                      <div
                        key={ending}
                        className="flex items-center gap-2 px-3 py-2 bg-amber-950/20 rounded-lg border border-amber-800/10"
                      >
                        <ChevronRight className="w-3 h-3 text-amber-500/50" />
                        <span className="text-amber-100/70 text-sm font-serif capitalize">
                          {ending === 'light' && '🌟 La Lumière de l\'Âme'}
                          {ending === 'wisdom' && '📖 La Sagesse du Chemin'}
                          {ending === 'shadow' && '🌙 L\'Ombre Révélée'}
                          {ending === 'struggle' && '⚔️ La Lutte Éternelle'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
