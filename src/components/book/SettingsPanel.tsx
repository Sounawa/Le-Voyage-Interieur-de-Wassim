'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Settings, Volume2, VolumeX, Type, Play } from 'lucide-react';
import { useStoryStore } from '@/store/story-store';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsPanel({ isOpen, onClose }: SettingsPanelProps) {
  const {
    fontSize,
    soundEnabled,
    autoContinue,
    setFontSize,
    setSoundEnabled,
    setAutoContinue,
  } = useStoryStore();

  const fontSizeOptions: { value: 'sm' | 'md' | 'lg'; label: string }[] = [
    { value: 'sm', label: 'Petit' },
    { value: 'md', label: 'Moyen' },
    { value: 'lg', label: 'Grand' },
  ];

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
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          {/* Settings Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-xs bg-[#0d0c14]/95 backdrop-blur-md border-l border-amber-800/20 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-[#0d0c14]/90 backdrop-blur-md px-6 py-4 border-b border-amber-800/15 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5 text-amber-500/70" />
                <h2 className="font-serif text-lg text-amber-100 font-bold">Paramètres</h2>
              </div>
              <button onClick={onClose} className="p-2 rounded-lg hover:bg-amber-900/20 transition-colors" aria-label="Fermer les paramètres">
                <X className="w-4 h-4 text-amber-200/50" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Text Size */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Type className="w-4 h-4 text-amber-500/60" />
                  <h3 className="text-amber-200/80 text-sm font-serif font-semibold">Taille du texte</h3>
                </div>
                <p className="text-amber-500/40 text-xs font-serif">
                  Ajuste la taille de l&apos;histoire
                </p>
                <div className="flex gap-2 mt-2">
                  {fontSizeOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setFontSize(option.value)}
                      className={`flex-1 py-2 px-3 rounded-lg text-sm font-serif transition-all duration-200 border ${
                        fontSize === option.value
                          ? 'bg-amber-700/30 border-amber-600/40 text-amber-200 shadow-sm shadow-amber-900/20'
                          : 'bg-amber-950/20 border-amber-800/10 text-amber-300/50 hover:bg-amber-900/20 hover:text-amber-200/70'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <Separator className="bg-amber-800/10" />

              {/* Sound Toggle */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  {soundEnabled ? (
                    <Volume2 className="w-4 h-4 text-amber-500/60" />
                  ) : (
                    <VolumeX className="w-4 h-4 text-amber-500/40" />
                  )}
                  <h3 className="text-amber-200/80 text-sm font-serif font-semibold">Son</h3>
                </div>
                <p className="text-amber-500/40 text-xs font-serif">
                  Activer les effets sonores
                </p>
                <div className="flex items-center gap-3 mt-1">
                  <span className={`text-xs font-serif ${soundEnabled ? 'text-amber-300/60' : 'text-amber-500/30'}`}>
                    Désactivé
                  </span>
                  <Switch
                    checked={soundEnabled}
                    onCheckedChange={setSoundEnabled}
                    className="data-[state=checked]:bg-amber-600/60"
                  />
                  <span className={`text-xs font-serif ${soundEnabled ? 'text-amber-300/60' : 'text-amber-500/30'}`}>
                    Activé
                  </span>
                </div>
              </div>

              <Separator className="bg-amber-800/10" />

              {/* Auto-Continue Toggle */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4 text-amber-500/60" />
                  <h3 className="text-amber-200/80 text-sm font-serif font-semibold">Lecture automatique</h3>
                </div>
                <p className="text-amber-500/40 text-xs font-serif">
                  Avancer automatiquement après 4 secondes
                </p>
                <div className="flex items-center gap-3 mt-1">
                  <span className={`text-xs font-serif ${autoContinue ? 'text-amber-300/60' : 'text-amber-500/30'}`}>
                    Manuel
                  </span>
                  <Switch
                    checked={autoContinue}
                    onCheckedChange={setAutoContinue}
                    className="data-[state=checked]:bg-amber-600/60"
                  />
                  <span className={`text-xs font-serif ${autoContinue ? 'text-amber-300/60' : 'text-amber-500/30'}`}>
                    Auto
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
