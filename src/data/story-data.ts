import type { StoryPage } from '@/lib/story-types';

export const storyPages: Record<string, StoryPage> = {

  // ═══════════════════════════════════════════
  // PROLOGUE
  // ═══════════════════════════════════════════
  prologue: {
    id: 'prologue',
    chapter: 0,
    chapterTitle: 'Prologue',
    paragraphs: [
      `Dans un petit village niché entre les collines, là où le vent porte le parfum de la terre mouillée et où les étoiles semblent plus proches que partout ailleurs, vivait un garçon de dix ans qui portait un nom lumineux : Souhayl.`,
      `Son nom signifiait « l'étoile du soir », celle qui apparaît juste après le coucher du soleil, celle qui guide les voyageurs égarés. Et peut-être, justement, était-ce un signe — car Souhayl allait bientôt entreprendre un voyage que peu d'adultes osent même imaginer.`,
      `Un voyage qui ne se mesure pas en kilomètres, mais en battements de cœur. Un voyage qui ne traverse pas des paysages, mais traverse l'âme même. Un voyage vers l'intérieur de lui-même.`,
    ],
    mood: 'prologue',
    next: 'ch1-start',
    isChapterStart: true,
  },

  // ═══════════════════════════════════════════
  // CHAPTER 1: LA DÉCOUVERTE
  // ═══════════════════════════════════════════
  'ch1-start': {
    id: 'ch1-start',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `C'était un jeudi après-midi, comme tous les jeudis. Souhayl rentrait de l'école en traînant ses pieds, son cartable trop lourd sur les épaules. Le soleil de fin d'automne étalait des ombres longues sur le chemin de terre qui menait à la maison familiale.`,
      `La maison de Souhayl était ancienne, avec des murs épais de pierre ocre et un toit en tuiles usées par le temps. Son grand-père, que tout le monde appelait « Moulay » — un titre de respect — y vivait depuis toujours. C'était un homme silencieux aux yeux d'un bleu profond, comme le ciel juste avant l'aube.`,
      `Moulay avait été, dans sa jeunesse, un compagnon de route spirituelle — ce qu'on appelle un soufi. Il avait marché sur le chemin du Tassawuf, cette science mystique de l'Islam qui enseigne comment purifier le cœur pour se rapprocher d'Allah. Mais il n'en parlait presque jamais. La sagesse, disait-il, ne crie pas dans les rues — elle murmure dans les cœurs qui savent écouter.`,
    ],
    mood: 'wonder',
    next: 'ch1-2',
    isChapterStart: true,
  },

  'ch1-2': {
    id: 'ch1-2',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `En entrant dans la maison, Souhayl remarqua quelque chose d'inhabituel. La porte du grenier — cette porte toujours fermée, toujours verrouillée, que même le vent ne semblait pas oser frôler — était entrouverte.`,
      `Un filet de lumière dorée s'en échappait, comme si quelqu'un y avait allumé une lampe. Mais Moulay était assis dans la cour, son chapelet entre ses doigts, les yeux mi-clos. Il ne semblait pas avoir bougé depuis des heures.`,
      `— « Grand-père ? » appela Souhayl en posant son cartable contre le mur. Moulay ouvrit un œil, puis l'autre. Un sourire imperceptible plissa le coin de ses lèvres. — « Le grenier t'attend, mon enfant. Il t'attendait depuis ta naissance. »`,
      `Souhayl fronça les sourcils. Il ne comprenait pas. Mais quelque chose dans la voix de son grand-père — une douceur grave, une certitude tranquille — lui fit comprendre qu'il ne devait pas poser de questions. Il devait monter.`,
    ],
    mood: 'wonder',
    next: 'ch1-3',
  },

  'ch1-3': {
    id: 'ch1-3',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `L'escalier du grenier grinçait sous ses pas. Chaque marche protestait, comme si elle voulait le dissuader d'aller plus loin. Mais Souhayl était curieux — et la curiosité, disait sa mère, était son plus grand défaut. Ou peut-être son plus grand don.`,
      `Quand il poussa la trappe et émergea dans le grenier, il resta immobile, bouche bée. L'espace, qu'il avait imaginé poussiéreux et encombré, était transformé. Des dizaines de bougies flottaient dans l'air sans support, diffusant une lumière chaude et douce. Des tapis anciens, aux motifs rouges et dorés, couvraient le sol de bois.`,
      `Et au centre, posé sur un pupitre sculpté de mains expertes, un livre attendait. Pas un livre ordinaire — sa couverture était en cuir noir, ornée d'inscriptions dorées en arabe que Souhayl ne pouvait pas lire, mais qui semblaient briller de leur propre lumière.`,
    ],
    mood: 'wonder',
    next: 'ch1-4',
  },

  'ch1-4': {
    id: 'ch1-4',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `Souhayl s'approcha lentement, comme on s'approche d'un animal sauvage qu'on craint de faire fuir. Ses doigts tremblaient quand il toucha la couverture du livre. Elle était chaude — tiède, comme la peau de quelqu'un qui vient de s'endormir au soleil.`,
      `Il l'ouvrit avec précaution. Les pages, épaisses et jaunies par le temps, exhalaient un parfum étrange — un mélange de santal, de pluie sur la terre sèche et de quelque chose d'indéfinissable, quelque chose d'ancien, d'avant les mots, d'avant le monde.`,
      `Sur la première page, une seule phrase était écrite, en français et en arabe :`,
      `« Celui qui connaît son âme connaît son Seigneur. » — Prophète Muhammad ﷺ`,
      `Puis, en dessous, dans une écriture plus petite, comme une note laissée par quelqu'un de pressé : « Souhayl — le voyage commence quand tu fermes les yeux. »`,
    ],
    mood: 'wonder',
    next: 'ch1-5',
  },

  'ch1-5': {
    id: 'ch1-5',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `Le cœur de Souhayl battait si fort qu'il l'entendait dans ses tempes. Son nom — écrit dans ce livre mystérieux, dans ce grenier interdit — son nom, comme si quelqu'un l'avait attendu depuis toujours.`,
      `Il tourna les pages lentement. Des dessins étranges l'habitaient : un labyrinthe aux murs faits de mots, un arbre dont les racines plongeaient dans les étoiles, un miroir qui reflétait non pas un visage mais un paysage de sable et de vent.`,
      `Puis il arriva à une page qui le figea. Elle représentait un jeune garçon — à peu près son âge — debout devant une porte immense, noire comme la nuit, ornée de symboles dorés. Le garçon tenait dans sa main une petite lampe dont la flamme vacillait. Et derrière la porte, on devinait... quelque chose. Un monde. Un monde qui n'était pas celui de tous les jours.`,
    ],
    mood: 'wonder',
    next: 'ch1-6',
  },

  'ch1-6': {
    id: 'ch1-6',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `— « Tu as trouvé le Livre des Cœurs », dit une voix derrière lui.`,
      `Souhayl sursauta et se retourna. Moulay se tenait dans l'encadrement de la trappe, appuyé sur sa canne, son visage illuminé par la lueur des bougies flottantes. Il ne semblait pas surpris de trouver son petit-fils ici.`,
      `— « Grand-père... c'est quoi ce livre ? C'est quoi cet endroit ? » balbutia Souhayl.`,
      `Moulay monta lentement, chaque lui un acte de patience. Il s'assit sur un tapis, croisa les jambes, et invita Souhayl à faire de même. — « Assieds-toi, mon étoile du soir. Il est temps que je te raconte une histoire. Mais pas n'importe quelle histoire — la tienne. »`,
    ],
    mood: 'wisdom',
    next: 'ch1-7',
  },

  'ch1-7': {
    id: 'ch1-7',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `— « Ce livre, expliqua Moulay d'une voix qui ressemblait au murmure du vent dans les oliviers, est un héritage. Il a été transmis de Shaykh à Shaykh, de génération en génération, depuis des siècles. Il contient la carte d'un monde que peu de gens connaissent — le monde intérieur. »`,
      `— « Le monde intérieur ? répéta Souhayl. C'est comme... dans la tête ? »`,
      `Moulay rit doucement, un rire qui venait du fond de sa poitrine, comme une source souterraine. — « Pas dans la tête, Souhayl. Dans le cœur. Le cœur est un univers entier — plus vaste que tout ce que tes yeux ont jamais vu. Il contient des océans, des déserts, des montagnes, des forêts. Et il contient aussi... des ennemis. »`,
      `Souhayl sentit un frisson lui parcourir l'échine. — « Des ennemis ? »`,
      `— « Le plus dangereux de tous, continua Moulay, vit à l'intérieur de toi-même. On l'appelle le Nafs — l'ego. Et il a un allié puissant, très ancien, très rusé... » Moulay baissa la voix. « On l'appelle Shaytan. »`,
    ],
    mood: 'wisdom',
    shaykhSpeaks: 'Le plus long voyage est celui qui va de la tête au cœur. Et le plus court, celui du cœur à Allah.',
    next: 'ch1-8',
  },

  'ch1-8': {
    id: 'ch1-8',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `Moulay posa sa main sur l'épaule de Souhayl. Sa paume était rugueuse, usée par les années, mais sa pression était douce — comme si, à travers ce simple contact, il transmettait quelque chose d'invisible.`,
      `— « Le Tassawuf, dit-il, c'est le chemin de la purification. C'est l'art de nettoyer le cœur de ses impuretés — l'orgueil, la jalousie, la colère, l'attachement — pour que la lumière d'Allah puisse y entrer. Imagine un miroir couvert de poussière. Le Tassawuf, c'est l'action de nettoyer ce miroir, jusqu'à ce qu'il reflète parfaitement la lumière. »`,
      `— « Et comment on fait ? demanda Souhayl, les yeux grands ouverts. Comment on nettoie le miroir ? »`,
      `Moulay sourit. — « En le regardant d'abord. En osant voir la poussière. La plupart des gens passent leur vie à détourner le regard. Mais toi, Souhayl... toi, tu as déjà ouvert ce livre. »`,
      `— « Le voyage dont parle ce livre, continua Moulay, ne se fait pas avec des pieds. Il se fait avec le cœur. Tu devras entrer dans ton propre monde intérieur, y affronter tes peurs, tes désirs, tes faiblesses. Et là, tu trouveras la vérité. »`,
    ],
    mood: 'wisdom',
    shaykhSpeaks: 'Le cœur est le champ de bataille de l\'homme. S\'il est vaincu, tout est perdu. S\'il est vainqueur, tout est gagné.',
    next: 'ch1-9',
  },

  'ch1-9': {
    id: 'ch1-9',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `Cette nuit-là, Souhayl ne put pas dormir. Il était allongé sur son lit, les yeux fixés sur le plafond, le cœur battant à tout rompre. Les mots de son grand-père tournaient dans sa tête comme des feuilles prises dans un tourbillon : « Le monde intérieur... le Nafs... Shaytan... »`,
      `Autour de lui, la maison était silencieuse. Pas un bruit. Même le chat, Moustique — ainsi nommé à cause de sa petite taille — dormait en boule au pied du lit. Dehors, la lune pleine baignait le village d'une lumière argentée qui transformait chaque ombre en paysage onirique.`,
      `Souhayl ferma les yeux. Et au moment exact où ses paupières se rejoignirent, quelque chose changea. L'odeur de la pièce se transforma — plus de lavande, plus de coton frais. À la place, un parfum de sable chaud, d'encens brûlé et de quelque chose d'indéfinissable envahit ses narines.`,
      `Et puis, il entendit une voix. Pas une voix extérieure — une voix intérieure, qui venait du plus profond de son être, comme si son âme elle-même lui parlait :`,
      `— « Souhayl... tu as fermé les yeux. Le voyage commence maintenant. »`,
    ],
    mood: 'wonder',
    next: 'ch1-10',
  },

  'ch1-10': {
    id: 'ch1-10',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `Quand Souhayl rouvrit les yeux — ses yeux intérieurs — il n'était plus dans sa chambre. Il se tenait debout sur un sol de terre rouge sombre, sous un ciel qui n'avait pas de couleur fixe. Parfois il était pourpre, parfois noir constellé d'étoiles immenses, parfois d'un bleu si profond qu'il semblait solide.`,
      `Devant lui, à quelques mètres, se dressait une porte. Pas n'importe quelle porte — elle ressemblait exactement à celle du dessin dans le livre. Immense, noire, ornée de symboles dorés qui pulsaient doucement, comme un cœur vivant. Les inscriptions arabes brillaient d'une lumière propre, et Souhayl sentait, plutôt qu'il ne comprenait, qu'elles racontaient une histoire — son histoire.`,
      `À ses pieds, une petite lampe à huile attendait, sa flamme vacillant dans un souffle invisible. Et autour de lui, le silence n'était pas un silence vide — c'était un silence plein, comme celui d'une mosquée avant la prière, quand chaque atome semble retenir son souffle.`,
      `Souhayl prit la lampe dans ses mains. Sa lumière projetait des ombres dansantes sur la porte, comme si les ténèbres elles-mêmes cherchaient à fuir cette petite flamme.`,
    ],
    mood: 'wonder',
    next: 'ch1-11',
  },

  'ch1-11': {
    id: 'ch1-11',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `Il s'approcha de la porte. Plus il avançait, plus il sentait quelque chose — pas de la peur, exactement, mais quelque chose de plus complexe. Une mélange de fascination et de terreur sacrée, comme quand on se tient au bord d'un précipice et qu'on sait que d'un côté il y a le danger, et de l'autre, la découverte.`,
      `La porte était couverte de symboles qu'il ne comprenait pas. Des cercles entrelacés, des étoiles à huit branches, des lettres arabes formant des mots qui semblaient se déplacer quand il ne les regardait pas directement. Et au centre, un seul mot, plus grand que les autres :`,
      `"قلب" — « Qalb » — Le Cœur.`,
      `Souhayl leva la main pour toucher la porte. Sa peau frôla le métal froid — non, ce n'était pas du métal. C'était quelque chose de vivant. La porte pulsa sous ses doigts, comme si elle respirait. Et quand il appuya doucement, elle résista. Pas méchamment — plutôt comme un gardien prudent qui demande : « Es-tu sûr de vouloir entrer ? »`,
      `Puis une voix — la même voix intérieure — murmura :`,
      `— « Avant de franchir cette porte, Souhayl, dis-moi... avec quoi veux-tu la franchir ? »`,
    ],
    mood: 'wonder',
    next: 'ch1-choice-1',
  },

  // ─── CHOICE 1: How to enter the inner world ───
  'ch1-choice-1': {
    id: 'ch1-choice-1',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `La question résonna dans tout son être, vibrant dans ses os, dans son sang, dans le espace entre ses pensées. Ce n'était pas une question ordinaire. C'était le premier test — le premier choix véritable de son voyage.`,
    ],
    mood: 'wonder',
    choices: [
      {
        id: 'courage',
        text: 'Avec courage — je ne reculerai devant rien, même si ce qui m\'attend me fait peur. Le courage est la première étape de tout chemin.',
        nextPage: 'ch1-a1',
        tag: 'courage',
        emoji: '🦁',
      },
      {
        id: 'humility',
        text: 'Avec humilité — je sais que je ne suis rien sans l\'aide d\'Allah. Je frapperai à cette porte comme un serviteur humble frappe à celle de son maître.',
        nextPage: 'ch1-a2',
        tag: 'humility',
        emoji: '🕯️',
      },
      {
        id: 'curiosity',
        text: 'Avec curiosité — je veux comprendre, découvrir, apprendre. Le monde intérieur est un mystère et je suis un explorateur.',
        nextPage: 'ch1-a3',
        tag: 'curiosity',
        emoji: '🔮',
      },
    ],
  },

  'ch1-a1': {
    id: 'ch1-a1',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `— « Avec courage », dit Souhayl d'une voix qui tremblait à peine. Il serrait les poings, redressa les épaules, et poussa la porte de toutes ses forces.`,
      `La porte s'ouvrit dans un grondement sourd, comme un tonnerre lointain. Un souffle d'air chaud l'accueillit, portant avec lui des odeurs d'épices, de cèdre brûlé et de terre ancienne. La lumière de sa lampe bondit en avant, éclairant un corridor aux murs ornés de mosaïques qui scintillaient comme des galaxies.`,
      `Le courage avait ouvert la porte, mais il avait aussi réveillé quelque chose. Au loin, dans les profondeurs du corridor, un grondement répondit au sien — un grondement qui n'était pas de la pierre. C'était quelque chose de vivant. Quelque chose qui avait entendu sa déclaration de bravoure et qui, maintenant, le défiait.`,
      `— « Bien », murmura la voix intérieure. « Le courage est une arme à double tranchant. Il peut te protéger... ou te rendre aveugle. Veille à ne pas confondre la force du corps avec la force du cœur. »`,
    ],
    mood: 'wonder',
    next: 'ch1-14',
  },

  'ch1-a2': {
    id: 'ch1-a2',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `— « Avec humilité », souffla Souhayl. Et au lieu de pousser la porte, il s'agenouilla. Il posa sa lampe à terre, joignit ses mains, et ferma les yeux. — « Ya Allah, je ne suis qu'un petit garçon. Je ne sais pas où ce chemin me mènera. Mais je fais confiance. Guide-moi. »`,
      `La porte ne s'ouvrit pas avec fracas. Elle se dissolut doucement, comme du sel dans l'eau, jusqu'à disparaître complètement. Et ce qui apparut derrière n'était pas un corridor sombre, mais une lumière — douce, dorée, infiniment paisible. Comme la lumière qui filtre à travers les fenêtres d'une mosquée à l'aube.`,
      `Souhayl se releva lentement. Ses yeux brillaient de larmes qu'il ne comprenait pas. Quelque chose en lui — pas dans sa tête, plus profond — avait reconnu cette lumière. Comme si son âme s'en souvenait, d'un temps avant sa naissance.`,
      `— « Bien », murmura la voix intérieure avec une tendresse infinie. « L'humilité est la clé qui ouvre toutes les portes du ciel. Garde-la précieusement — beaucoup la perdent en route. »`,
    ],
    mood: 'peace',
    next: 'ch1-14',
  },

  'ch1-a3': {
    id: 'ch1-a3',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `— « Avec curiosité ! » s'exclama Souhayl, les yeux brillants d'excitation. Il ne réfléchit pas deux fois — il mit un pied puis l'autre, franchissant le seuil comme on franchit celui d'un parc d'attractions, avec l'émerveillement naïf de l'enfance.`,
      `La porte se referma derrière lui avec un claquement sec, et Souhayl se retrouva dans un espace impossible. Le plafond n'existait pas — à la place, un ciel en spirale tournoyait au-dessus de lui, rempli de nébuleuses colorées et d'étoiles qui formaient des lettres, des mots, des versets entiers du Coran écrits en lumière.`,
      `Le sol sous ses pieds était translucide, et en regardant vers le bas, Souhayl vit des océans, des forêts, des montagnes — des paysages entiers qui vivaient sous la surface, comme un monde parallèle encapsulé dans le sien. Sa curiosité débordante lui faisait vouloir aller partout à la fois.`,
      `— « Bien », murmura la voix, amusée. « La curiosité est le premier éveil de l'âme. Mais attention, petit explorateur — la curiosité sans sagesse est un feu sans foyer. Il te faudra apprendre à canaliser cette flamme. »`,
    ],
    mood: 'wonder',
    next: 'ch1-14',
  },

  'ch1-14': {
    id: 'ch1-14',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `Souhayl fit ses premiers pas dans le monde intérieur, et chaque pas était une découverte. Le sol changeait sous ses pieds — tantôt herbe tendre, tantôt sable chaud, tantôt marbre froid — comme si le paysage lui-même respirait et changeait d'humeur.`,
      `L'air ici était différent. Plus dense, plus vivant. Chaque respiration lui remplissait le corps d'une énergie étrange, à la fois apaisante et excitante. Il se sentait à la fois minuscule — un grain de poussière dans l'immensité — et immense — comme si l'univers tout entier pouvait tenir dans sa poitrine.`,
      `Sa lampe à huile brûlait d'une flamme constante, projetant un cercle de lumière dorée autour de lui. Et dans ce cercle, il se sentait protégé. En dehors... l'obscurité n'était pas hostile, mais elle n'était pas non plus amie. Elle attendait. Elle observait.`,
    ],
    mood: 'wonder',
    next: 'ch1-15',
  },

  'ch1-15': {
    id: 'ch1-15',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `En marchant, Souhayl commença à percevoir les détails de ce monde. Des arbres aux feuilles de lumière poussaient par endroits, leurs branches chargées de fruits qui n'étaient pas des fruits — c'étaient des souvenirs. Il le sentait sans savoir comment : chaque fruit contenait un moment de sa vie, enfoui dans son cœur.`,
      `Un ruisseau coulait non loin, et ses eaux étaient transparentes comme du cristal. Mais quand Souhayl s'approcha, il vit que le ruisseau ne reflétait pas son visage — il reflétait ses émotions. À chaque instant, l'eau changeait de couleur : bleu quand il ressentait de la paix, rouge quand il pensait à quelque chose qui le mettait en colère, noir quand une ombre de peur traversait son esprit.`,
      `Et plus il avançait, plus le paysage s'ouvrait. L'horizon n'était pas une ligne — c'était une promesse. Un paysage se dévoilait au loin : un désert immense, aux dunes dorées, sous un ciel où deux lunes se croisaient.`,
      `C'est là qu'une voix — pas la voix intérieure, une autre voix, plus grave, plus forte — appela depuis les hauteurs :`,
      `— « Souhayl ! Fils de la lumière ! Le désert t'attend ! Viens voir ce que ton cœur contient vraiment ! »`,
    ],
    mood: 'wonder',
    next: 'ch2-start',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 2: LE DÉSERT DE L'ÂME
  // ═══════════════════════════════════════════
  'ch2-start': {
    id: 'ch2-start',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `Le désert de l'âme n'était pas un désert comme ceux qu'on voit dans les livres de géographie. Ses dunes n'étaient pas faites de sable, mais de pensées. Chaque grain était une pensée que Souhayl avait eue un jour — des millions de grains, des milliards de pensées, certaines brillantes comme de l'or, d'autres sombres comme des cendres.`,
      `Le vent qui soufflait n'était pas un vent ordinaire. C'était le souffle de ses propres désirs — tantôt chaud et envahissant, tantôt froid et tranchant. Il faisait voleter les grains de pensées dans des tourbillons hypnotiques, créant des formes éphémères : un visage qui ressemblait à sa mère, un chien qu'il avait aimé enfant, un devoir d'école qu'il n'avait pas fini, un mensonge qu'il avait dit.`,
      `Souhayl marchait, et le désert s'étendait devant lui, infini. Sa lampe vacillait sous le souffle du vent. Il avait soif — non pas une soif d'eau, mais une soif de quelque chose qu'il ne pouvait pas nommer. Quelque chose de fondamental, d'essentiel, qui lui manquait depuis toujours sans qu'il le sache.`,
    ],
    mood: 'darkness',
    next: 'ch2-2',
    isChapterStart: true,
  },

  'ch2-2': {
    id: 'ch2-2',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `Le soleil — s'il y en avait un — n'était pas visible, mais une lumière diffuse baignait tout le paysage d'une teinte ambrée, comme les dernières minutes d'un jour d'été. Souhayl marchait depuis combien de temps ? Impossible à dire. Le temps ici n'avait pas la même signification.`,
      `Ses pas laissaient des traces dans le sable des pensées, et chaque trace s'effaçait presque aussitôt derrière lui, comme si le désert refusait de garder la mémoire de son passage. Ce qui était troublant, c'est que parfois, il croisait d'autres traces — des traces qui n'étaient pas les siennes.`,
      `Elles allaient dans la même direction que lui, mais légèrement décalées, comme si quelqu'un marchait parallèlement, à quelques mètres de distance, invisible. Souhayl accéléra — les traces accélérèrent. Il s'arrêta — les traces s'arrêtèrent. Son cœur se serra.`,
      `— « Qui est là ? » cria-t-il, mais sa voix fut avalée par le désert. Le vent se mit à souffler plus fort, et les dunes commencèrent à danser, formant des silhouettes éphémères qui semblaient se moquer de lui.`,
    ],
    mood: 'darkness',
    next: 'ch2-3',
  },

  'ch2-3': {
    id: 'ch2-3',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `Les silhouettes de sable se multiplièrent. Elles n'avaient pas de visage, mais elles avaient des attitudes — certaines riaient, d'autres pleuraient, d'autres encore pointaient le doigt vers lui en signe d'accusation. Souhayl sentit la peur monter en lui comme une marée.`,
      `Puis une silhouette se détacha des autres. Elle était plus grande, plus nette, et quand elle s'approcha, Souhayl crut reconnaître... lui-même. Mais pas lui-même comme dans un miroir — lui-même comme dans un cauchemar. La silhouette avait ses traits, ses yeux, mais son expression était différente : un sourire narquois, des yeux brillants de malice, une posture arrogante.`,
      `— « Tu me cherches ? » dit la silhouette d'une voix qui était la sienne, mais déformée, comme un écho dans une caverne. — « Je suis toujours là, Souhayl. Je suis toujours avec toi. Je suis... toi. Ou plutôt, je suis ce que tu refuses de voir en toi. »`,
      `Le sol trembla légèrement. La lampe de Souhayl faiblit. Et dans l'obscurité grandissante, la silhouette lui fit un geste — suivez-moi — et commença à marcher vers une dune particulière, plus haute que les autres, au sommet de laquelle quelque chose brillait.`,
    ],
    mood: 'darkness',
    next: 'ch2-4',
  },

  'ch2-4': {
    id: 'ch2-4',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `Souhayl hésita. Tout en lui lui disait de ne pas suivre cette chose — cette version tordue de lui-même. Mais quelque chose d'autre, plus profond, le tirait vers l'avant. Une force qu'il ne pouvait pas nommer, qui le poussait à comprendre.`,
      `Il grimpa la dune, les pieds enfonçant dans le sable des pensées. À chaque pas, des images affluaient : des souvenirs qu'il croyait oubliés — sa première dispute avec un ami, le jour où il avait volé un bonbon au magasin, la fois où il avait menti à sa mère pour ne pas être puni. Chaque souvenir était une piqûre dans son cœur.`,
      `Quand il atteignit le sommet, il resta sans voix. Devant lui, enchâssé dans le sable comme un miroir géant, un rectangle de verre poli reflétait la lumière des deux lunes. Mais ce n'était pas un miroir ordinaire — c'était un Miroir de l'Âme. Et ce qu'il montrait n'était pas le visage de Souhayl, mais son cœur.`,
      `Le cœur flottait dans le miroir, battant lentement. Autour de lui, des couches de poussière — certaines épaisses, d'autres fines — voilaient sa lumière naturelle. Et dans les zones les plus sombres, des ombres bougeaient, comme des serpents enroulés autour du cœur.`,
      `— « Voilà ce que tu es vraiment, dit la silhouette en apparaissant à côté de lui. Voilà ton Nafs. Ton ego. Regarde bien. »`,
    ],
    mood: 'darkness',
    next: 'ch2-5',
  },

  'ch2-5': {
    id: 'ch2-5',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `Souhayl regardait le miroir, fasciné et terrifié. Son cœur — son vrai cœur — était là, nu, exposé, vulnérable. Et il n'était pas aussi beau qu'il l'aurait imaginé. La poussière le couvrait par endroits, et les ombres... les ombres rampaient comme des vipères.`,
      `Mais avant qu'il puisse réagir, une lumière chaude apparut à sa gauche. Pas la lumière de sa lampe — une autre lumière, plus forte, plus pure, comme le premier rayon de soleil après une nuit sans lune.`,
      `Et dans cette lumière, une silhouette se matérialisa. Tall, drapé dans des vêtements blancs et ocre, une barbe blanche encadrant un visage rayonnant de sérénité, des yeux qui contenaient des océans de sagesse — c'était le Shaykh. Pas le grand-père de Souhayl — non, c'était autre chose. C'était l'essence même du guide, la manifestation intérieure de la sagesse qui accompagnait Souhayl depuis le début.`,
      `— « Ne crains pas, Souhayl, dit le Shaykh d'une voix qui résonnait comme un tambour lointain. Ce que tu vois n'est pas la vérité finale — c'est le point de départ. Chaque voyageur voit la poussière sur son cœur avant d'apprendre à la nettoyer. »`,
    ],
    mood: 'wisdom',
    shaykhSpeaks: 'Le cœur de l\'homme est comme un miroir. Il se salit par les péchés et s\'éclaire par le repentir. Ne fuis pas ta propre image — regarde-la avec le regard de celui qui veut se guérir.',
    next: 'ch2-6',
  },

  'ch2-6': {
    id: 'ch2-6',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `Le Shaykh posa sa main sur l'épaule de Souhayl, et une vague de calme traversa le corps du jeune garçon comme l'eau qui apaise la soif. Les silhouettes de sable s'éloignèrent, les ombres du miroir se calment, et le vent cessa de souffler.`,
      `— « Le Nafs, expliqua le Shaykh, est ton ego — cette partie de toi qui veut toujours avoir raison, qui a toujours faim, qui n'est jamais satisfaite. Les soufis disent qu'il a sept niveaux, comme sept couches d'un oignon. Au plus profond, il y a le Nafs mutma\'inna — l'âme en paix. Mais pour l'atteindre, il faut traverser les six autres. »`,
      `— « Lesquels ? demanda Souhayl. »`,
      `Le Shaykh soupira, et son souffle fit trembler les dunes. — « Le Nafs ammara te pousse au mal. Le Nafs lawwama te fait culpabiliser. Le Nafs mulhama t'inspire le bien et le mal. Le Nafs mutma\'inna trouve la paix. Le Nafs radiya est satisfaite. Le Nafs mardiya est agréée. Et le Nafs kamila... est parfaite. »`,
      `Souhayl essaya de retenir tous ces noms, mais ils glissaient dans son esprit comme du sable entre les doigts. Le Shaykh rit doucement. — « Ne t'inquiète pas des mots pour l'instant. L'important, c'est de reconnaître ton ennemi quand tu le croises. »`,
    ],
    mood: 'wisdom',
    shaykhSpeaks: 'Ton pire ennemi est celui que tu nourris chaque jour sans le savoir. Il vit en toi, dort en toi, mange avec toi. Apprends à le reconnaître, et tu auras fait la moitié du chemin.',
    next: 'ch2-7',
  },

  'ch2-7': {
    id: 'ch2-7',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `Le Shaykh guida Souhayl autour du miroir, lui montrant les différentes zones du cœur. — « Ici, dit-il en pointant une zone couverte d'une poussière rouge, c'est la colère. Elle est comme un feu — si tu ne la maîtrises pas, elle consume tout sur son passage. »`,
      `— « Ici, continua-t-il en montrant une couche noire et épaisse, c'est l'orgueil — le plus dangereux de tous les voiles. C'est lui qui a fait chuter Iblis du paradis. C'est lui qui empêche la lumière d'entrer. »`,
      `— « Et ici... » Le Shaykh pointa une zone dorée, encore petite mais lumineuse, nichée au cœur du cœur. « Ici, c'est la fitra — ta nature originelle, pure, celle avec laquelle tu es né. Elle est toujours là, Souhayl. Enterrée sous les couches de poussière, mais toujours vivante, toujours brillante. Le Tassawuf, c'est l'art de la retrouver. »`,
      `Souhayl regardait la petite lumière dorée, et il sentit quelque chose se serrer dans sa poitrine — pas de la douleur, mais comme un appel. La fitra semblait le reconnaître, elle aussi. Et elle pulsa une fois — un battement de lumière — comme un cœur qui bat pour dire : « Je suis là. Je t'attendais. »`,
    ],
    mood: 'wisdom',
    next: 'ch2-8',
  },

  'ch2-8': {
    id: 'ch2-8',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `Mais la silhouette — le Nafs — n'avait pas disparu. Il se tenait à l'ombre du miroir, patient, observateur, comme un prédateur qui attend le bon moment. Et quand le Shaykh se tourna pour montrer quelque chose d'autre à Souhayl, le Nafs fit sa move.`,
      `Il sortit de l'ombre et vint se placer entre Souhayl et le miroir. Il posa sa main sur le verre, et son toucher fit apparaître des fissures. Les ombres autour du cœur s'agitèrent et grandirent, nourries par sa présence.`,
      `— « Ne l'écoute pas, Souhayl, dit le Nafs avec la voix de Souhayl. Ce vieil homme te raconte des histoires. Regarde ton cœur — il est laid, couvert de poussière. Tu ne pourras jamais le nettoyer. C'est trop tard pour toi. Tu es trop jeune... ou trop mauvais... ou trop faible. »`,
      `Le Shaykh se retourna, ses yeux s'adoucissant. — « Le moment est venu, Souhayl. Tu dois faire face à ton Nafs. Pas moi. Toi. C'est ton épreuve. »`,
    ],
    mood: 'danger',
    next: 'ch2-choice-2',
  },

  // ─── CHOICE 2: Facing the ego ───
  'ch2-choice-2': {
    id: 'ch2-choice-2',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `Le Nafs se tenait devant Souhayl, un sourire satisfait aux lèvres. Autour de lui, le désert semblait retenir son souffle. Même le vent avait cessé. Le Shaykh, en retrait, observait sans intervenir — son rôle était de guider, pas de combattre.`,
      `C'était le moment de vérité. La première grande épreuve de Souhayl. Comment allait-il réagir face à l'ennemi le plus rusé, le plus proche, le plus difficile à combattre — lui-même ?`,
    ],
    mood: 'danger',
    choices: [
      {
        id: 'confrontation',
        text: 'Affronter le Nafs directement — « Tu n\'es qu\'une illusion ! Mon cœur appartient à Allah, et aucune poussière ne pourra étouffer sa lumière ! »',
        nextPage: 'ch2-a1',
        tag: 'confrontation',
        emoji: '⚔️',
      },
      {
        id: 'patience-listen',
        text: 'Écouter le Nafs avec patience — ne pas réagir sous l\'impulsion, mais écouter pour comprendre, comme le Shaykh lui a appris.',
        nextPage: 'ch2-a2',
        tag: 'patience',
        emoji: '🤲',
      },
      {
        id: 'detachment',
        text: 'Se détourner du Nafs — ne pas lui donner d\'importance, ne pas engager le combat. Tourner le regard vers la lumière de la fitra.',
        nextPage: 'ch2-a3',
        tag: 'detachment',
        emoji: '✨',
      },
    ],
  },

  'ch2-a1': {
    id: 'ch2-a1',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `Souhayl serra les poings, fixa le Nafs droit dans les yeux — ses propres yeux, déformés par l'ego — et cria de toutes ses forces :`,
      `— « Tu n'es qu'une illusion ! Mon cœur appartient à Allah ! Aucune poussière ne pourra étouffer sa lumière ! »`,
      `Le Nafs recula d'un pas, surpris. Les fissures dans le miroir se propagèrent plus vite, et les ombres autour du cœur s'agitèrent violemment. Mais Souhayl ne cilla pas. Il sentait en lui une force qu'il ne connaissait pas — une force qui venait de plus profond que ses muscles, plus profond que ses pensées.`,
      `Le Nafs grinça des dents. — « Tu oses ? Toi, un enfant de dix ans ? Tu oses me défier ? » Sa voix se brisa, et pendant un instant — un instant fugace — Souhayl vit quelque chose dans les yeux du Nafs. Pas de la colère. De la peur. Son ego avait peur de lui.`,
      `Le Shaykh, en retrait, inclina la tête. Il ne dit rien, mais dans ses yeux brillait quelque chose qui ressemblait à de la fierté.`,
    ],
    mood: 'triumph',
    next: 'ch2-13',
  },

  'ch2-a2': {
    id: 'ch2-a2',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `Souhayl prit une grande inspiration. Il se rappela les mots du Shaykh : « Ne réagis pas sous l'impulsion. Observe. Écoute. Comprends. » Il relâcha ses poings, détendit ses épaules, et regarda le Nafs avec un calme surnaturel.`,
      `— « Parle, dit-il simplement. Je t'écoute. »`,
      `Le Nafs fut pris de court. Il s'attendait à de la colère, de la peur, de l'agressivité — c'était ce qui le nourrissait. Mais le calme ? La patience ? L'écoute ? C'étaient des armes qu'il ne connaissait pas.`,
      `— « Je... je disais que... » Le Nafs hésita. Ses mots perdirent de leur mordant. « Tu es faible, murmura-t-il, mais sa voix n'était plus qu'un filet. Tu es... tu es... » Il répétait les mêmes accusations, mais elles n'avaient plus aucun pouvoir. Sans la réaction de Souhayl, elles étaient comme des flèches sans pointe.`,
      `Et lentement, le Nafs commença à rétrécir. Pas parce qu'il était vaincu — mais parce qu'il n'avait plus rien à se nourrir. L'ego vit de réaction. Sans réaction, il meurt de faim.`,
    ],
    mood: 'wisdom',
    shaykhSpeaks: 'Le silence est parfois la réponse la plus puissante. Celui qui ne réagit pas aux provocations de son ego maîtrise la plus difficile des batailles.',
    next: 'ch2-13',
  },

  'ch2-a3': {
    id: 'ch2-a3',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `Souhayl fit quelque chose d'inattendu. Il tourna le dos au Nafs. Sans un mot, sans un regard en arrière, il s'éloigna de la silhouette sombre et se dirigea vers le miroir. Le Nafs cria, menaça, implora — mais Souhayl continua d'avancer.`,
      `Devant le miroir, il ferma les yeux et concentra son attention sur la petite lumière dorée — la fitra. Il la visualisa, la sentit, l'appela. Et la lumière répondit. Elle grandit, dévorant la poussière autour d'elle, repoussant les ombres.`,
      `— « Ne me regarde pas ? cria le Nafs, outré. Je suis TOI ! Tu ne peux pas m'ignorer ! »`,
      `Mais Souhayl sourit. Parce qu'il comprenait maintenant quelque chose de fondamental : le Nafs n'était pas lui. Il était un voile, une couche, une illusion temporaire. Sa véritable essence — la fitra — était pure, lumineuse, éternelle. Et en se concentrant sur elle, il affaiblissait le voile sans même le combattre.`,
      `Le Nafs vacilla, diminua, et finit par se dissoudre dans le sable du désert. Non pas vaincu — simplement rendu insignifiant.`,
    ],
    mood: 'peace',
    shaykhSpeaks: 'Le meilleur combat contre l\'ego n\'est pas de l\'affronter, mais de le priver de nourriture. Ne lui donne ni ta colère, ni ta peur, ni ton attention. Tourne-toi vers la Lumière, et l\'ombre disparaît d\'elle-même.',
    next: 'ch2-13',
  },

  'ch2-13': {
    id: 'ch2-13',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `Après la confrontation — quelle qu'elle ait été — le silence retomba sur le désert. Un silence différent cette fois : pas le silence vide du début, mais un silence plein, gonflé de signification, comme un soupir de soulagement de la terre entière.`,
      `Le Shaykh s'approcha de Souhayl et posa sa main sur sa tête. — « Tu as survécu à ta première rencontre avec le Nafs. Sache que ce n'était que la première. Il reviendra, encore et encore, sous des formes différentes. Parfois il sera colérique, parfois séduisant, parfois compatissant. Ne te fie jamais à ses apparences. »`,
      `Souhayl essuya la sueur de son front — non pas de la fatigue physique, mais de l'effort spirituel. Cette bataille intérieure l'avait épuisé plus que n'importe quelle course, n'importe quelle dispute, n'importe quel examen.`,
      `— « Mais... dit-il, j'ai réussi ? Enfin... est-ce que c'est fini ? »`,
      `Le Shaykh le regarda avec une tendresse infinie. — « Mon enfant, le Tassawuf n'a pas de fin dans cette vie. C'est un chemin de tous les instants. Mais tu as fait le premier pas, et c'est le plus difficile. Les autres seront différents... mais tu es plus fort maintenant que tu ne l'étais ce matin. »`,
    ],
    mood: 'wisdom',
    shaykhSpeaks: 'La victoire sur soi-même est la plus grande des victoires. Mais ne célèbre pas trop vite — la guerre du cœur dure jusqu\'au dernier souffle.',
    next: 'ch2-14',
  },

  'ch2-14': {
    id: 'ch2-14',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `Le paysage commença à changer. Les dunes de sable-pensées s'aplatirent, et une végétation éparse apparut — des buissons d'épines, des touffes d'herbe grise, quelques arbres rabougris dont les branches tordues ressemblaient à des bras implorant le ciel.`,
      `— « Nous approchons de la frontière du désert, dit le Shaykh. Au-delà, il y a la Forêt des Épreuves. C'est là que ton voyage deviendra vraiment difficile. Chaque arbre, chaque ruisseau, chaque ombre sera un test. »`,
      `— « Un test de quoi ? demanda Souhayl. »`,
      `— « De ta sincérité, répondit le Shaykh. Le Tassawuf n'est pas un jeu d'enfant — quoique... » Il sourit. « Bien que tu sois un enfant. C'est justement pour cela que tu es ici. Les adultes ont trop de voiles. Leur ego est devenu une forteresse. Le tien est encore une cabane. Il est plus facile de la détruire... et de construire quelque chose de mieux à sa place. »`,
      `Un vent frais se leva, apportant avec lui l'odeur de la sève, de la mousse humide et des feuilles mortes. La forêt était proche. Souhayl la sentait comme on sent la pluie avant l'orage — dans ses os, dans son cœur, dans cette partie de lui qui savait des choses avant que son esprit ne les comprenne.`,
    ],
    mood: 'wonder',
    next: 'ch3-start',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 3: LA FORÊT DES ÉPREUVES
  // ═══════════════════════════════════════════
  'ch3-start': {
    id: 'ch3-start',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `La forêt n'était pas comme les forêts que Souhayl avait vues dans les livres. Ses arbres étaient immenses — si hauts que leurs cimes disparaissaient dans un ciel vert-noir, comme si les arbres avaient avalé le ciel lui-même. Leurs troncs étaient larges comme des maisons, couverts d'une écorce qui ressemblait à de la peau humaine — avec des rides, des cicatrices, et parfois ce qui ressemblait à des yeux fermés.`,
      `Le sol était tapissé de feuilles épaisses, molles sous les pieds, qui dégageaient un parfum à la fois doux et inquiétant — comme des fleurs qui se fanent. La lumière filtrait à travers le feuillage en rayons obliques, dorés et verts, créant un monde de contrastes : lumière et ombre, douceur et menace, beauté et danger.`,
      `Le Shaykh marchait devant Souhayl, sa silhouette blanche se découpant contre les ténèbres de la forêt. Il ne parlait pas. Il n'avait pas besoin de parler — sa simple présence était un guide suffisant. Souhayl le suivait, sa lampe à huile serrée contre sa poitrine, le cœur battant.`,
      `— « Dans cette forêt, murmura le Shaykh sans se retourner, tout est un test. Chaque rencontre est une épreuve. Chaque chemin te demande de choisir. Souviens-toi : ce ne sont pas tes actions qui définissent qui tu es, mais les choix que tu fais quand personne ne regarde. Et ici... quelqu'un regarde toujours. »`,
    ],
    mood: 'darkness',
    next: 'ch3-2',
    isChapterStart: true,
  },

  'ch3-2': {
    id: 'ch3-2',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Ils marchèrent pendant ce qui semblait être des heures — ou des minutes — le temps n'avait pas de prise ici. La forêt changeait autour d'eux : tantôt dense et oppressante, tantôt ouverte et apaisante, comme si elle respirait, vivait, ressentait des émotions.`,
      `Parfois, Souhayl entendait des murmures. Pas des voix distinctes — plutôt des chuchotements, des souffles, des mots à moitié formés qui glissaient entre les arbres comme de la fumée. Il ne pouvait pas les comprendre, mais ils évoquaient en lui des sentiments : de la nostalgie, de la culpabilité, du désir, de la peur.`,
      `Le Shaykh s'arrêta devant un vieux pont de bois qui enjambait un ravin profond. Le pont était étroit, usé par le temps, et quelques planches manquaient. En dessous, le ravin plongeait dans une obscurité totale — impossible d'en voir le fond.`,
      `— « Le premier test, dit le Shaykh. La Sabr — la patience. Regarde de l'autre côté. »`,
      `Souhayl regarda. De l'autre côté du ravin, un chemin de lumière dorée s'enfonçait dans la forêt. C'était clairement la bonne direction. Mais le pont... le pont semblait sur le point de s'effondrer.`,
      `— « Attends ici, dit le Shaykh. Je vais de l'autre côté. Ne traverse pas avant que je t'appelle. » Et il disparut, traversant le pont avec une agilité déconcertante pour un homme de son âge.`,
    ],
    mood: 'darkness',
    next: 'ch3-3',
  },

  'ch3-3': {
    id: 'ch3-3',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Souhayl resta seul. Le silence de la forêt pesait sur lui comme une couverture de plomb. Le pont grinçait doucement, comme si le vent le testait. Ou comme si quelque chose d'autre le testait.`,
      `Les murmures revinrent, plus forts cette fois. — « Traverse maintenant... » — « Pourquoi attendre ? » — « Tu es assez fort... » — « Il ne reviendra pas... » — « Ne fais pas confiance... »`,
      `Les minutes passèrent. Ou étaient-ce des heures ? Souhayl ne savait plus. Le Shaykh ne revenait pas. Le pont grinçait de plus en plus. Les murmures devenaient des voix — des voix qu'il reconnaissait. La voix de son meilleur ami qui lui disait « Vas-y, t'inquiète pas ! » La voix d'un camarade de classe : « T'es pas courageux ou quoi ? » La voix de son propre ego, murmure persistant : « Il t'a abandonné, Souhayl. Il t'a abandonné comme tout le monde. »`,
      `La tentation de traverser était immense. Chaque seconde d'attente était une torture. Ses jambes tremblaient, non pas de peur, mais d'impatience — l'impatience, cette sœur de l'ego qui pousse à agir avant d'avoir compris.`,
      `Mais quelque chose en lui — un souvenir de la leçon du désert — lui murmurait : « Patience. Patience. La patience est la clé du paradis. »`,
    ],
    mood: 'danger',
    next: 'ch3-4',
  },

  'ch3-4': {
    id: 'ch3-4',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Et puis, au moment où Souhayl pensait qu'il allait céder, la voix du Shaykh résonna de l'autre côté du ravin :`,
      `— « Souhayl ! Tu peux traverser maintenant ! »`,
      `Souhayl sursauta. Il regarda le pont. Les planques manquantes étaient toujours là. Le ravin était toujours profond. Mais la voix du Shaykh était là, et c'était tout ce qui comptait.`,
      `Il posa un pied sur le pont. Le bois cria sous son poids. Il avança, une planche à la fois, chaque pas un acte de confiance. Les planques qui semblaient fragiles soutenaient son poids — comme si la forêt elle-même le portait. Et à chaque pas, les murmures s'éloignaient un peu plus, jusqu'à disparaître complètement.`,
      `Quand il atteignit l'autre côté, le Shaykh l'attendait, debout dans le chemin de lumière dorée. Son visage était souriant, mais ses yeux étaient sérieux.`,
      `— « Tu as passé le premier test, dit-il. La patience. C'est l'une des vertus les plus difficiles à maîtriser, car elle va contre la nature humaine. L'ego veut tout, tout de suite. Le cœur sage sait attendre. »`,
    ],
    mood: 'wisdom',
    shaykhSpeaks: 'La patience ne signifie pas attendre passivement. La patience, c\'est continuer d\'avancer avec confiance, même quand la destination n\'est pas visible. C\'est la foi faite marche.',
    next: 'ch3-5',
  },

  'ch3-5': {
    id: 'ch3-5',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Ils continuèrent à traverser la forêt, et les épreuves se succédèrent. Souhayl dut traverser un lac d'eau noire en marchant sur des feuilles flottantes — chaque feuille représentant un bon souvenir qu'il devait lâcher pour avancer. Il dut grimper un arbre dont les branches étaient faites de ses propres peurs, chaque noue une angoisse différente à surmonter.`,
      `Et puis il y eut l'épreuve du Tawakkul — la confiance en Allah. Un précipice sans pont, sans escalier, sans aucune façon apparente de le traverser. Le Shaykh pointa le vide et dit simplement : — « Saute. »`,
      `— « Mais il n'y a rien en dessous ! s'exclama Souhayl. Je vais mourir ! »`,
      `— « La confiance, répondit le Shaykh, ce n'est pas savoir ce qui va arriver. C'est sauter en sachant que Celui qui t'a créé ne te laissera pas tomber. »`,
      `Souhayl regarda le vide. Ses genoux tremblaient. Mais il se rappela la lampe qu'il portait depuis le début — cette petite flamme qui n'avait jamais vacillé, même dans les moments les plus sombres. Si elle tenait, pourquoi pas lui ?`,
      `Il sauta. Et le vide le porta. Pas comme un sol dur — comme de l'eau, comme de l'air, comme une force invisible qui le soutint et le déposa doucement de l'autre côté. Son cœur débordait de gratitude.`,
    ],
    mood: 'wonder',
    shaykhSpeaks: 'Le Tawakkul n\'est pas de la passivité. C\'est l\'action accompagnée de la certitude qu\'Allah est le meilleur des pourvoyeurs. Agis comme si tout dépendait de toi, et crois comme si tout dépendait d\'Allah.',
    next: 'ch3-6',
  },

  'ch3-6': {
    id: 'ch3-6',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `La forêt devint plus sombre. Les arbres se rapprochèrent, leurs branches s'entremêlant au-dessus pour former un plafond presque hermétique. Seuls quelques rayons de lumière perçaient, créant des puits de clarté dans l'obscurité ambiante.`,
      `Et c'est dans cette obscurité que Souhayl sentit quelque chose changer. L'air devint plus froid, plus lourd. Les murmures revinrent, mais cette fois ils étaient différents — plus organisés, plus intelligents, plus dangereux. Ce n'étaient plus les chuchotements vagues de son esprit — c'était une véritable conversation, menée par une intelligence qui n'était pas la sienne.`,
      `Les ombres entre les arbres commencèrent à bouger. Pas les ombres normales, projetées par la lumière — non, des ombres vivantes, des silhouettes autonomes qui se détachaient des troncs et glissaient entre les feuilles. Et elles convergeaient vers Souhayl.`,
      `Le Shaykh s'arrêta. Son visage, habituellement serein, prit une expression grave. — « Souhayl, murmura-t-il, ils sont là. Les sbires de Shaytan. Prépare-toi. »`,
      `— « Les sbires de... » Souhayl n'eut pas le temps de finir sa phrase. Les ombres étaient là, formant un cercle autour de lui et du Shaykh. Et au centre du cercle, une silhouette se matérialisa.`,
    ],
    mood: 'danger',
    next: 'ch3-7',
  },

  'ch3-7': {
    id: 'ch3-7',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `La silhouette n'était pas effrayante — au contraire. C'était un homme jeune, beau, aux vêtements élégants et au sourire charmant. Ses yeux brillaient d'une intelligence malsaine, comme des bijoux dans l'obscurité. Il se tenait avec l'aisance de quelqu'un qui est chez lui partout.`,
      `— « Salam, petit Souhayl, dit-il d'une voix douce comme du miel. Je m'appelle Waswās — le Chuchoteur. Je suis... comment dire... un ami. Un guide. Quelqu'un qui veut t'aider. »`,
      `Le Shaykh ne bougea pas, mais Souhayl sentit son énergie changer — comme un bouclier invisible qui se levait entre lui et la silhouette.`,
      `— « Ne l'écoute pas, Souhayl, dit le Shaykh. C'est un envoyé de Shaytan. Ses paroles sont du poison enveloppé de sucre. »`,
      `Waswās sourit — un sourire parfait, calculé pour inspirer confiance. — « Votre Shaykh est bien sévère, n'est-ce pas ? Toujours à dire « ne fais pas ceci, ne fais pas cela ». Mais moi, je suis différent. Je veux juste te proposer un marché. Rien de méchant. Juste... un petit arrangement qui pourrait te faciliter la vie. »`,
    ],
    mood: 'danger',
    next: 'ch3-8',
  },

  'ch3-8': {
    id: 'ch3-8',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Waswās fit un geste gracieux, et la forêt autour d'eux se transforma. Les arbres sombres devinrent des colonnes de marbre blanc. Le sol boueux se changea en mosaïques dorées. Des fruits succulents apparurent sur des tables dressées comme par magie.`,
      `— « Regarde tout ce que je peux t'offrir, dit Waswās en désignant le festin. Tu n'as qu'à accepter mon aide. Tu n'as plus besoin de souffrir, de patienter, de lutter. Je peux rendre ton voyage facile, agréable, même amusant. »`,
      `Il s'approcha de Souhayl, s'accroupit à sa hauteur, et murmura : — « Tu sais, tout ce que ton Shaykh te demande est trop difficile pour un enfant. Le jeûne, la prière, la patience, l'humilité... C'est pour les moines, les ermites, les gens qui n'ont pas de vie. Toi, tu mérites mieux. Tu mérites le bonheur. Maintenant. Pas dans un futur lointain. »`,
      `Les ombres autour d'eux applaudissaient doucement, comme un public invisible. La tentation était réelle — physiquement, viscéralement réelle. Les fruits sentaient divinement bons. Les coussins moelleux invitaient au repos. Le chemin facile s'étendait devant lui, pavé de promesses dorées.`,
      `Le Shaykh, immobile, attendait. Son silence était plus éloquent que n'importe quel discours. Il observait Souhayl avec des yeux qui disaient : « Je ne peux pas choisir pour toi. Mais je crois en toi. »`,
    ],
    mood: 'danger',
    next: 'ch3-choice-3',
  },

  // ─── CHOICE 3: Dealing with Shaytan's deception ───
  'ch3-choice-3': {
    id: 'ch3-choice-3',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Waswās tendit sa main à Souhayl, un sourire rassurant aux lèvres. Le festin brillait, le chemin facile luisait, et chaque fibre du corps de Souhayl était tentée de dire oui. Pourquoi souffrir quand on peut être heureux ? Pourquoi lutter quand on peut se reposer ?`,
      `Mais dans son cœur — au-delà de la tentation, au-delà de la douceur des promesses — la petite lumière de la fitra pulsait. Faiblement, mais fermement. Comme un phare dans la brume. Comme un rappel : « Tu es plus grand que cela, Souhayl. Tu es plus fort que cela. »`,
      `C'était le moment de choisir. L'épreuve la plus importante jusqu'ici.`,
    ],
    mood: 'danger',
    choices: [
      {
        id: 'firmness',
        text: 'Rejeter Waswās fermement — « Je ne veux pas de tes mensonges ! Mon chemin est difficile, mais il est vrai. Va-t\'en ! »',
        nextPage: 'ch3-a1',
        tag: 'firmness',
        emoji: '🛡️',
      },
      {
        id: 'wisdom-listen',
        text: 'Écouter Waswās avec détachement — écouter ses promesses sans y croire, observer les mensonges pour mieux les reconnaître à l\'avenir.',
        nextPage: 'ch3-a2',
        tag: 'wisdom',
        emoji: '🧠',
      },
      {
        id: 'dhikr',
        text: 'Se tourner vers le dhikr — fermer les yeux, invoquer Allah, réciter la formule de protection. La prière comme bouclier.',
        nextPage: 'ch3-a3',
        tag: 'dhikr',
        emoji: '📿',
      },
    ],
  },

  'ch3-a1': {
    id: 'ch3-a1',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Souhayl recula d'un pas et leva la main, paume ouverte, vers Waswās. — « Non ! cria-t-il avec une force qui le surprit lui-même. Je ne veux pas de tes mensonges ! Mon chemin est difficile, mais il est vrai ! Va-t'en ! »`,
      `La voix de Souhayl résonna dans la forêt comme un coup de tonnerre. Les colonnes de marbre se fissurèrent. Les tables de festin se renversèrent. Les fruits se transformèrent en cailloux noirs qui roulèrent sur le sol.`,
      `Waswās tressaillit. Son sourire se brisa comme du verre, révélant derrière une expression de rage froide. — « Tu vas le regretter, gamin, siffla-t-il. Le chemin difficile ne mène nulle part. Tu souffriras, et personne ne viendra te sauver. »`,
      `Mais Souhayl ne céda pas. Il sentait la force de sa certitude — une certitude qui ne venait pas de son intellect, mais de son cœur. Et cette certitude était plus puissante que n'importe quelle promesse de confort.`,
      `Waswās et ses ombres se dissipèrent comme de la fumée au vent, et la forêt redevint ce qu'elle était — sombre, difficile, mais authentique. Le Shaykh posa sa main sur l'épaule de Souhayl. — « Tu as montré de la force, mon enfant. Mais n'oublie pas : la force sans sagesse est une épée sans fourreau. Elle coupe, mais elle ne protège pas toujours. »`,
    ],
    mood: 'triumph',
    next: 'ch3-14',
  },

  'ch3-a2': {
    id: 'ch3-a2',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Souhayl ne recula pas. Il ne cria pas. Il fit quelque chose que Waswās ne s'attendait pas : il s'assit. En tailleur, au milieu du festin illusoire, comme un élève attentif devant son maître.`,
      `— « Continue, dit Souhayl calmement. Dis-m'en plus. Qu'est-ce que tu offres exactement ? »`,
      `Waswās fut déstabilisé. — « Je... je t'offre le bonheur, murmura-t-il, moins sûr de lui. La facilité. Le plaisir. »`,
      `— « Et en échange de quoi ? » demanda Souhayl.`,
      `Un long silence. Waswās essaya de maintenir son sourire, mais ses yeux trahissaient sa confusion. — « En échange de... rien. Juste ton alliance. »`,
      `— « Mon alliance ? répéta Souhayl. Tu veux que je me lie à toi. Que je dépende de toi. Que je t'obéisse au lieu d'obéir à Allah. C'est ça ? »`,
      `Waswās ouvrit la bouche, la referma, puis poussa un cri de rage. L'illusion explosa — les colonnes, le festin, les coussins, tout disparut dans un nuage de poussière noire. Waswās et ses ombres s'enfuirent dans les ténèbres de la forêt, vaincus non pas par la force, mais par la compréhension.`,
      `Le Shaykh acquiesça. — « La sagesse est le plus puissant des boucliers. Celui qui comprend le piège ne peut pas y tomber. »`,
    ],
    mood: 'wisdom',
    shaykhSpeaks: 'Connais ton ennemi, et tu connaîtras sa faiblesse. Le mensonge ne peut survivre à la lumière de la compréhension.',
    next: 'ch3-14',
  },

  'ch3-a3': {
    id: 'ch3-a3',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Souhayl ferma les yeux. Le monde extérieur disparut — les tentations, les promesses, les ombres, Waswās, tout s'effaça. Et dans le silence de son cœur, il commença à réciter :`,
      `— « A'udhu billahi min ash-shaytan ar-rajim... Je cherche refuge auprès d'Allah contre Shaytan le lapidé... »`,
      `Sa voix était faible au début, tremblante. Mais à chaque mot, elle prenait de la force. Comme une rivière qui commence par un filet d'eau et devient un fleuve puissant. — « La ilaha illa Allah, Muhammadun rasulullah... Il n'y a de divinité qu'Allah, Muhammad est le messager d'Allah... »`,
      `Et la lumière apparut. Pas une lumière ordinaire — une lumière qui venait de l'intérieur, de son propre cœur, de la fitra cette petite étincelle qu'il avait vue dans le miroir du désert. Sauf qu'elle n'était plus petite. Elle grandissait, irradiant, emplissant tout son être.`,
      `Waswās poussa un cri perçant. Les ombres se consumèrent comme du papier dans le feu. L'illusion se désintégra, et la forêt redevint sombre, authentique, difficile — mais pure. Le dhikr, la remembrance d'Allah, avait brûlé toutes les impuretés.`,
      `Quand Souhayl ouvrit les yeux, le Shaykh avait les larmes aux yeux. — « Tu as compris la plus grande des armes, mon enfant. Le dhikr — le souvenir d'Allah — est le bouclier dont parle le Coran. Chaque fois que tu te sentiras faible, rappelle-toi de ce moment. »`,
    ],
    mood: 'peace',
    shaykhSpeaks: 'Le dhikr est le remède des cœurs et la lumière des âmes. Rappelle-toi d\'Allah, et Il se souviendra de toi. C\'est la promesse la plus sûre.',
    next: 'ch3-14',
  },

  'ch3-14': {
    id: 'ch3-14',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Après la disparition de Waswās, la forêt changea d'aspect. Les arbres s'espacèrent, la lumière revint, et un chemin se dessina devant eux — un chemin qui menait vers une clairière. L'air était plus pur, comme après un orage, et les oiseaux — des oiseaux qu'il n'avait pas remarqués avant — se mirent à chanter.`,
      `— « Tu te demandes peut-être pourquoi Shaytan t'a envoyé son sbire maintenant, dit le Shaykh en marchant à côté de Souhayl. La réponse est simple : tu t'approches de quelque chose d'important. Plus tu avances sur le chemin, plus les forces de l'obscurité se mobilisent. Elles ne veulent pas que tu atteignes la vérité. »`,
      `— « Mais... pourquoi moi ? demanda Souhayl. Je ne suis qu'un enfant. Il y a des adultes bien plus forts que moi. »`,
      `— « C'est justement pour cela, répondit le Shaykh avec un sourire. L'ego des adultes est comme une forteresse — difficile à attaquer, mais aussi difficile à changer. Le tien est comme une tente — plus vulnérable, mais aussi plus facile à transformer. Et surtout... » Il se pencha vers Souhayl. « Tu as quelque chose que beaucoup d'adultes ont perdu : la sincérité. Tu ne cherches pas la gloire, ni le pouvoir, ni la reconnaissance. Tu cherches simplement à comprendre. Et c'est la meilleure des intentions. »`,
    ],
    mood: 'wisdom',
    next: 'ch3-15',
  },

  'ch3-15': {
    id: 'ch3-15',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Ils atteignirent la clairière au crépuscule — un crépuscule perpétuel, car le soleil de ce monde ne se couchait jamais vraiment. La clairière était circulaire, bordée de fleurs lumineuses qui pulsaient doucement comme des cœurs. Et au centre, trois chemins partaient dans trois directions différentes.`,
      `Chaque chemin avait une apparence distincte :`,
      `Le premier était étroit, rocailleux, difficile — il montait raide entre des rochers coupants. Pas de végétation, pas d'ombre, juste la roche nue et le ciel. C'était le chemin de la rigueur.`,
      `Le deuxième était large, sinueux, bordé d'arbres fruitiers et de ruisseaux chantants. Il serpentait doucement à travers des collines verdoyantes. C'était le chemin de la miséricorde.`,
      `Le troisième était droit, ardent, bordé de flammes qui ne brûlaient pas mais illuminaient. Il rayonnait d'une énergie intense, presque insoutenable. C'était le chemin de la passion.`,
      `Le Shaykh s'arrêta au carrefour et regarda Souhayl. — « Ces trois chemins mènent tous au même endroit : la Montagne de la Vérité. Mais la façon dont tu y arriveras — et l'état dans lequel tu y arriveras — dépendra du chemin que tu choisiras. »`,
      `— « Lequel choisir ? demanda Souhayl. »`,
      `Le Shaykh secoua la tête. — « Je ne peux pas choisir pour toi. Mais souviens-toi de ce que tu as appris. Souviens-toi du courage, de l'humilité, de la patience, de la confiance, du dhikr. Et écoute ton cœur. »`,
    ],
    mood: 'wonder',
    next: 'ch3-choice-4',
  },

  // ─── CHOICE 4: The path of the heart ───
  'ch3-choice-4': {
    id: 'ch3-choice-4',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Les trois chemins s'étendaient devant Souhayl, chacun promettant une expérience différente. Le vent soufflait doucement, portant des parfums différents depuis chaque direction — la roche chaude du premier, les fruits sucrés du deuxième, la chaleur vivante du troisième.`,
      `Le Shaykh se tenait en retrait. Cette fois encore, le choix appartenait à Souhayl. C'était son voyage, son apprentissage, son cœur.`,
    ],
    mood: 'wonder',
    choices: [
      {
        id: 'discipline',
        text: 'Le chemin étroit et rocailleux — la rigueur. Le chemin le plus difficile mais peut-être le plus pur. Seul contre les éléments, comme les ascètes d\'autrefois.',
        nextPage: 'ch3-b1',
        tag: 'discipline',
        emoji: '⛰️',
      },
      {
        id: 'mercy',
        text: 'Le chemin large et verdoyant — la miséricorde. Un chemin plus doux, bordé de ruisseaux et d\'arbres. La douceur plutôt que la rigueur.',
        nextPage: 'ch3-b2',
        tag: 'mercy',
        emoji: '🌿',
      },
      {
        id: 'passion',
        text: 'Le chemin droit et ardent — la passion. Un chemin d\'énergie et d\'intensité. Le feu de l\'amour divin qui consume tout.',
        nextPage: 'ch3-b3',
        tag: 'passion',
        emoji: '🔥',
      },
    ],
  },

  'ch3-b1': {
    id: 'ch3-b1',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Souhayl choisit le chemin étroit. Ses pieds trouvèrent le rocher, et il commença à grimper. Chaque pas demandait un effort conscient — placer le pied, tester la prise, se hisser. Pas de distraction, pas de confort, juste l'essentiel : la montée.`,
      `La rigueur du chemin lui rappelait les ascètes dont le Shaykh avait parlé — ces hommes et ces femmes qui avaient renoncé à tout pour se consacrer à Allah. Ils vivaient dans des grottes, mangeaient peu, dormaient peu, parlaient peu. Leur vie entière était un acte d'adoration.`,
      `Souhayl comprit quelque chose en grimpant : la difficulté n'était pas un obstacle — c'était un enseignant. Chaque rocher qui le faisait trébucher lui apprenait l'humilité. Chaque montée raide lui apprenait la persévérance. Chaque instant de solitude lui apprenait la reliance — cette certitude profonde qu'il n'était jamais vraiment seul.`,
      `Quand il atteignit le sommet du sentier, haletant, les mains écorchées, il découvrit la vue : au loin, dominant toute la forêt, une montagne immense s'élevait vers le ciel. La Montagne de la Vérité. Elle était là, majestueuse, intimidante, et magnifiquement belle.`,
      `Le Shaykh apparut à côté de lui. — « Le chemin de la rigueur forge des âmes fortes. Mais n'oublie pas : la rigidité sans compassion est comme un arbre sans feuilles — il survit, mais il ne donne rien. »`,
    ],
    mood: 'triumph',
    next: 'ch4-start',
  },

  'ch3-b2': {
    id: 'ch3-b2',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Souhayl choisit le chemin verdoyant. Ses pieds enfoncèrent dans la mousse tendre, et une sensation de douceur l'envahit. Des papillons de lumière voletaient autour de lui, et les arbres fruitiers murmuraient des secrets anciens.`,
      `Le long du chemin, il croisa des créatures — pas des monstres, mais des êtres fragiles : un oiseau blessé, un renardeau perdu, un vieil arbre penché sous le poids de ses souvenirs. Et chaque fois, Souhayl s'arrêtait. Il soignait l'oiseau, guidait le renardeau, soutenait l'arbre.`,
      `— « La miséricorde, murmura une voix — pas celle du Shaykh, une voix plus douce, plus féminine, venue des arbres eux-mêmes, est la plus puissante des forces. Elle ne conquiert pas — elle transforme. Elle ne détruit pas — elle guérit. »`,
      `Quand il arriva au bout du chemin, essoré mais heureux, la Montagne de la Vérité se dressait devant lui, auréolée de nuages dorés. Il l'avait atteinte non pas par la force, mais par la douceur.`,
      `Le Shaykh l'attendait. — « Le chemin de la miséricorde ouvre les cœurs — le tien et celui des autres. Mais n'oublie pas : la miséricorde sans justice est comme un océan sans rives — elle se perd dans l'infini. »`,
    ],
    mood: 'peace',
    next: 'ch4-start',
  },

  'ch3-b3': {
    id: 'ch3-b3',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Souhayl choisit le chemin de feu. Dès son premier pas, une énergie incroyable l'envahit. Les flammes bordant le chemin ne brûlaient pas — elles illuminaient, purifiaient, transformaient. Chaque pas qu'il faisait brûlait une couche de sa fatigue, de ses doutes, de ses peurs.`,
      `Il courut. Pas parce qu'il le devait — parce qu'il le voulait. Le feu en lui brûlait d'un désir insatiable : le désir de connaître Allah, de se rapprocher de Lui, de fusionner avec Sa lumière. C'était le feu de l'amour divin — le 'ishq dont parlaient les poètes soufis.`,
      `Les mots de Rûmî résonnaient dans son esprit comme s'il les lisait : « L'amour est le feu qui brûle tout ce qui n'est pas l'essentiel. » Et Souhayl comprenait maintenant — le Tassawuf n'était pas seulement un chemin de discipline. C'était un chemin d'amour. L'amour le plus pur, le plus profond, le plus consumeur.`,
      `Quand il arriva au bout du chemin, le cœur battant, les yeux brillants, la Montagne de la Vérité apparut. Elle semblait plus proche que jamais, comme si le feu l'avait purifié et rendu capable de voir ce que les yeux ordinaires ne pouvaient pas voir.`,
      `Le Shaykh attendait, son visage radieux. — « Le feu de la passion est le plus dangereux et le plus beau des chemins. Mais n'oublie pas : un feu sans contrôle consume celui qui le porte aussi bien que ce qu'il espère atteindre. »`,
    ],
    mood: 'triumph',
    next: 'ch4-start',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 4: LA MONTAGNE DE LA VÉRITÉ
  // ═══════════════════════════════════════════
  'ch4-start': {
    id: 'ch4-start',
    chapter: 4,
    chapterTitle: 'La Montagne de la Vérité',
    paragraphs: [
      `La Montagne de la Vérité se dressait devant Souhayl comme un géant de pierre et de lumière. Elle était si haute que son sommet se perdait dans les nuages — ou peut-être que son sommet était les nuages, ou peut-être qu'il n'y avait pas de sommet du tout, juste une ascension infinie vers quelque chose qui ne pouvait pas être atteint mais seulement approché.`,
      `Ses flancs étaient parcourus de sentiers — des centaines, des milliers de sentiers qui s'entrecroisaient, se séparaient, fusionnaient, formant un labyrinthe vertical. Chaque sentier avait été tracé par un voyageur différent, et chaque pierre portait l'empreinte de pas anciens — des pas de ceux qui étaient venus avant Souhayl, depuis des siècles, depuis des millénaires.`,
      `Au pied de la montagne, une plaque de pierre gravée indiquait : « Ici commence le dernier voyage. Celui qui gravit cette montagne ne sera plus jamais le même. »`,
      `Le Shaykh s'arrêta et regarda Souhayl longuement. — « Ce qui t'attend là-haut, mon enfant, est ton épreuve finale. Je ne peux pas monter avec toi — pas jusqu'au bout. Le dernier pas t'appartient à toi seul. Mais je serai là, à chaque instant, dans ton cœur. Souviens-toi : le Shaykh n'est pas une personne — c'est la sagesse qui vit en toi. »`,
    ],
    mood: 'wonder',
    next: 'ch4-2',
    isChapterStart: true,
  },

  'ch4-2': {
    id: 'ch4-2',
    chapter: 4,
    chapterTitle: 'La Montagne de la Vérité',
    paragraphs: [
      `Souhayl commença l'ascension. Les premières marches étaient faciles — un sentier bien tracé, des marches taillées dans la roche, des rampes pour se tenir. Mais très vite, le chemin devint plus sauvage. Les marches disparurent, remplacées par des fissures dans la roche, des passages étroits, des surplombs vertigineux.`,
      `À chaque pas, un souvenir remontait. Pas des souvenirs innocents — des souvenirs douloureux. Le jour où il avait trahi la confiance de son ami. La fois où il avait menti à sa mère et qu'elle l'avait découvert. Le moment où il avait ri d'un enfant plus faible que lui. Chaque souvenir était une pierre sur le chemin, et chaque pierre demandait d'être reconnue avant de pouvoir avancer.`,
      `Souhayl comprit : on ne pouvait pas gravir la Montagne de la Vérité en ignorant son passé. Chaque erreur, chaque faute, chaque moment de faiblesse devait être regardé en face, accepté, et transformé en un pas vers le haut. Le repentir n'était pas de la culpabilité — c'était de la croissance.`,
      `Plus il montait, plus l'air devenait rare — non pas physiquement, mais spirituellement. Les pensées superficielles s'évaporaient. Les préoccupations mondaines disparaissaient. Il ne restait que l'essentiel : lui, la montagne, et la quête de la vérité.`,
    ],
    mood: 'darkness',
    next: 'ch4-3',
  },

  'ch4-3': {
    id: 'ch4-3',
    chapter: 4,
    chapterTitle: 'La Montagne de la Vérité',
    paragraphs: [
      `À mi-chemin, Souhayl atteignit un plateau. Un plateau circulaire, nu, balayé par un vent glacial. Et au centre du plateau, assis sur un trône de cristal noir, le Nafs l'attendait.`,
      `Mais ce n'était plus le Nafs du désert — celui-ci était différent. Plus grand, plus puissant, plus séduisant. Il portait des vêtements royaux, une couronne de pierres noires, et son visage — le visage de Souhayl — était celui d'un roi autoritaire, sûr de lui, invincible.`,
      `— « Tu es de retour, dit le Nafs d'une voix qui résonnait comme un écho dans une cathédrale. J'ai grandi, Souhayl. Chaque fois que tu m'as nourri — par la colère, par l'orgueil, par l'envie — j'ai grandi. Et maintenant, je suis plus fort que jamais. »`,
      `Souhayl s'arrêta. Son cœur battait si fort qu'il résonnait dans toute la montagne. Le Nafs se leva de son trône, grand — immense — et ses yeux brillèrent d'un éclat sombre.`,
      `— « Vas-y, continua le Nafs en écartant les bras. Affronte-moi si tu en as le courage. Mais sache que cette fois, je ne serai pas si facile à vaincre. Cette fois, je suis TOI. Toute ta force, toute ton intelligence, toute ta volonté — elles sont à moi. Sans moi, tu n'es rien. »`,
    ],
    mood: 'danger',
    next: 'ch4-4',
  },

  'ch4-4': {
    id: 'ch4-4',
    chapter: 4,
    chapterTitle: 'La Montagne de la Vérité',
    paragraphs: [
      `Le Nafs dit la vérité — du moins, une partie de la vérité. Sans l'ego, Souhayl ne pourrait pas survivre dans ce monde. L'ego est ce qui te pousse à manger quand tu as faim, à te protéger quand tu es en danger, à te défendre quand on t'attaque. Le problème n'est pas l'ego lui-même — c'est son excès, son déséquilibre, sa prise de pouvoir.`,
      `Souhayl sentit le doute l'envahir. Comment combattre quelque chose qui fait partie de lui ? Comment détruire une forteresse construite avec ses propres briques ?`,
      `Et c'est à ce moment précis que la voix du Shaykh résonna dans son cœur — pas de l'extérieur, mais de l'intérieur, comme un écho venu du plus profond de son âme :`,
      `— « Ne le combats pas, Souhayl. Ne le détruis pas. Transmute-le. Transforme son énergie en quelque chose de meilleur. Le lion ne perd pas sa force quand il se soumet au dompteur — il la canalise. »`,
      `Souhayl ferma les yeux. Il respira. Et quand il les rouvrit, il ne regardait plus le Nafs avec la colère du guerrier. Il le regardait avec la compréhension du sage.`,
      `— « Tu as raison, dit Souhayl calmement. Tu es une partie de moi. Mais tu n'es pas la totalité de moi. Il y a autre chose — quelque chose que tu ne pourras jamais atteindre, parce que ça ne t'appartient pas. Ça appartient à Allah. »`,
    ],
    mood: 'wisdom',
    shaykhSpeaks: 'Ne cherche pas à détruire ton ego — cherche à le maîtriser. Le lion apprivoisé est plus puissant que le lion sauvage, car sa force est dirigée par la sagesse plutôt que par l\'instinct.',
    next: 'ch4-5',
  },

  'ch4-5': {
    id: 'ch4-5',
    chapter: 4,
    chapterTitle: 'La Montagne de la Vérité',
    paragraphs: [
      `Le Nafs hésita. Pour la première fois depuis le début du voyage, il ne savait pas comment réagir. L'approche de Souhayl était différente — ni combat, ni fuite, ni soumission. Quelque chose de nouveau. Quelque chose qu'il n'avait pas prévu.`,
      `Le plateau trembla. La montagne gronda. Et dans un dernier effort désespéré, le Nafs se transforma. Ses vêtements royaux tombèrent, révélant une armure noire. Il poussa un cri de guerre et chargea Souhayl — non pas physiquement, mais spirituellement. Une vague de doutes, de peurs, de désirs assaillit l'esprit du jeune garçon comme un tsunami.`,
      `Souhayl vacilla. Ses genoux fléchirent. Les ténèbres l'enveloppèrent. Et dans les ténèbres, une voix murmura : « Abandonne. C'est trop difficile. Tu es trop jeune. Tu n'y arriveras jamais. Personne ne t'a jamais cru capable. Pourquoi commencer maintenant ? »`,
      `La tentation de s'asseoir, de fermer les yeux, de laisser tomber — elle était immense. Plus forte que tout ce qu'il avait ressenti jusque-là. Le poids de chaque choix, de chaque effort, de chaque sacrifice pesait sur ses épaules comme le monde entier.`,
      `Et dans ce moment de vulnérabilité totale, Souhayl fit ce que tout voyageur fait quand il ne peut plus avancer par lui-même : il demanda de l'aide.`,
    ],
    mood: 'darkness',
    next: 'ch4-choice-5',
  },

  // ─── CHOICE 5: The final choice ───
  'ch4-choice-5': {
    id: 'ch4-choice-5',
    chapter: 4,
    chapterTitle: 'La Montagne de la Vérité',
    paragraphs: [
      `Au cœur de l'obscurité, au sommet de la montagne, au bord du précipice entre la lumière et les ténèbres, Souhayl sentit quelque chose se fissurer en lui — mais pas de manière négative. C'était comme une coquille qui se brisait, révélant ce qu'elle contenait.`,
      `Et dans ce moment de vérité absolue, trois chemins s'ouvrirent devant son âme. Non pas des chemins physiques — des chemins du cœur. Trois façons de répondre à l'appel final. Trois façons de terminer son voyage.`,
      `La lumière de la fitra pulsait en lui, faible mais présente. Le vent de la montagne soufflait, portant avec lui des milliers de prières anciennes. Et Souhayl, le garçon de dix ans qui avait ouvert un livre interdit et avait osé pénétrer dans son propre monde intérieur, devait faire le dernier choix.`,
      `Ce choix définirait qui il était. Qui il serait. Pour toujours.`,
    ],
    mood: 'wonder',
    choices: [
      {
        id: 'surrender',
        text: 'L\'abandon total — « Ya Allah, je me rends. Je ne suis rien et Tu es tout. Prends ce qui reste de moi et fais-en ce que Tu veux. Je suis Ton serviteur. »',
        nextPage: 'ending-light',
        tag: 'surrender',
        emoji: '🤲',
      },
      {
        id: 'seek-guidance',
        text: 'La quête de guidance — « Ya Allah, je ne sais pas. Guide-moi encore. Montre-moi le chemin. Je veux apprendre, je veux comprendre, mais j\'ai besoin de Toi. »',
        nextPage: 'ending-wisdom',
        tag: 'guidance',
        emoji: '📖',
      },
      {
        id: 'face-alone',
        text: 'L\'affrontement solitaire — « Non. Je me battrai seul. J\'ai appris assez. Je suis fort maintenant. Je vais vaincre mon ego par ma propre volonté. »',
        nextPage: 'ending-shadow',
        tag: 'independence',
        emoji: '🗡️',
      },
    ],
  },

  // ═══════════════════════════════════════════
  // ENDINGS
  // ═══════════════════════════════════════════

  // Ending 1: La Lumière de l'Âme
  'ending-light': {
    id: 'ending-light',
    chapter: 4,
    chapterTitle: 'La Montagne de la Vérité',
    paragraphs: [
      `Souhayl tomba à genoux. Non pas de faiblesse — d'abandon. Un abandon total, absolu, magnifique. Il ouvrit les mains, leva la tête vers un ciel qu'il ne pouvait pas voir, et dit les mots les plus vrais qu'il ait jamais prononcés :`,
      `— « Ya Allah... je me rends. Je ne suis rien et Tu es tout. Prends ce qui reste de moi et fais-en ce que Tu veux. Je suis Ton serviteur. Je suis Ta créature. Je suis Ton esclave. Fais de moi ce que Tu veux. »`,
      `Et à ce moment précis, tout changea. Les ténèbres ne se dissipèrent pas — elles se transformèrent. L'armure du Nafs se brisa en mille morceaux qui devinrent des étoiles. Le plateau du sommet s'illumina d'une lumière si pure, si intense, que Souhayl dut fermer les yeux — non pas de douleur, mais de béatitude.`,
      `Quand il les rouvrit, le Nafs était là — mais transformé. Plus une armure sombre, plus un roi tyrannique. Il était debout, nu, vulnérable, les yeux baissés. Et pour la première fois, il ne ressemblait pas à un ennemi. Il ressemblait à un enfant perdu.`,
      `— « Souhayl, murmura le Nafs d'une voix brisée, pardonnes-moi. »`,
      `Souhayl le regarda, et il ne vit plus son ennemi. Il vit une partie de lui-même — blessée, égarée, mais capable de guérison. Il posa sa main sur l'épaule du Nafs, et dit :`,
      `— « Je te pardonne. Parce qu'Allah m'a pardonné. Et si Lui, le Créateur des mondes, peut pardonner, qui suis-je pour refuser la même grâce ? »`,
      `Le sommet de la montagne s'ouvrit. Pas physiquement — spirituellement. Un passage apparut, fait non pas de pierre mais de lumière, et Souhayl comprit : ce passage n'était pas la fin du voyage. C'était le commencement d'un autre voyage — un voyage qui durerait toute sa vie, chaque jour un pas de plus vers Allah.`,
      `La voix du Shaykh — douce, fière, infiniment aimante — murmura dans son cœur : « Bienvenue, Souhayl. Bienvenue sur le chemin. Tu as compris ce que beaucoup ne comprennent jamais : la plus grande force n'est pas de vaincre, mais de se rendre. À Celui qui est le plus digne de recevoir notre abandon. »`,
    ],
    mood: 'ending',
    isEnding: true,
    endingType: 'light',
  },

  // Ending 2: La Sagesse du Chemin
  'ending-wisdom': {
    id: 'ending-wisdom',
    chapter: 4,
    chapterTitle: 'La Montagne de la Vérité',
    paragraphs: [
      `Souhayl ne tomba pas à genoux. Il resta debout, tremblant mais stable, et leva les mains vers le ciel — non pas en abandon, mais en demande sincère :`,
      `— « Ya Allah... je ne sais pas. Je suis un enfant, et je ne comprends pas tout. Mais je veux apprendre. Guide-moi encore. Montre-moi le chemin. Je veux comprendre, pas seulement croire. Je veux savoir, pas seulement obéir. »`,
      `Le silence qui suivit dura une éternité — ou un instant. Puis, lentement, la lumière se fit. Pas la lumière éblouissante d'une révélation explosive — une lumière douce, modérée, comme celle du matin qui se lève. Une lumière qui n'éblouit pas mais illumine. Qui ne détruit pas les ténèbres mais les repousse doucement.`,
      `Le Nafs recula. Pas vaincu — apaisé. Il regarda Souhayl avec des yeux qui n'étaient plus hostiles, mais curieux. Comme si la sincérité de la demande avait touché quelque chose en lui aussi.`,
      `Le Shaykh apparut — non pas comme une apparition spirituelle, mais comme un vieil homme debout sur la montagne, sa barbe blanche flottant dans le vent. Il sourit et dit :`,
      `— « Tu as choisi la voie de la sagesse, Souhayl. Et c'est peut-être la plus difficile de toutes, car elle demande de vivre avec des questions plutôt que des réponses. Le chemin du Tassawuf n'a pas de fin — chaque réponse ouvre dix nouvelles questions. Et c'est magnifique. Car c'est dans la recherche que l'âme grandit. »`,
      `Souhayl regarda l'horizon. La montagne s'étendait devant lui, infinie. Et il comprit qu'il n'avait pas atteint le sommet — il avait simplement atteint le point d'où il pouvait voir plus loin. Le vrai voyage commençait maintenant.`,
      `— « Retourne dans ton monde, Souhayl, dit le Shaykh. Vis ta vie. Fais tes erreurs. Apprends de tes chutes. Et chaque fois que tu doutes, chaque fois que tu as peur, souviens-toi de ce moment : tu as demandé la guidance, et elle t'a été accordée. Il te suffit de continuer à demander. »`,
    ],
    mood: 'ending',
    isEnding: true,
    endingType: 'wisdom',
  },

  // Ending 3: L'Ombre Révélée
  'ending-shadow': {
    id: 'ending-shadow',
    chapter: 4,
    chapterTitle: 'La Montagne de la Vérité',
    paragraphs: [
      `Souhayl serra les poings. Sa mâchoire se crispa. Ses yeux brillèrent d'une détermination farouche. — « Non, dit-il. Je me battrai seul. J'ai appris assez. Je suis fort maintenant. Je vais vaincre mon ego par ma propre volonté. »`,
      `Il chargea le Nafs. Les deux versions de lui-même s'affrontèrent sur le plateau, dans un combat qui n'était pas physique mais spirituel — une bataille de volonté, de détermination, d'orgueil aussi, car Souhayl ne s'en rendait pas compte, mais en refusant l'aide d'Allah, il nourrissait précisément l'ego qu'il voulait détruire.`,
      `Le combat dura longtemps. Souhayl donna des coups qui auraient fait reculer n'importe qui. Mais le Nafs — nourri par l'orgueil de son adversaire — grandissait. Plus Souhayl luttait, plus son ego devenait fort. C'était un paradoxe cruel : la volonté de se débarrasser de l'ego est elle-même un acte de l'ego.`,
      `Finalement, Souhayl s'effondra. Épuisé, vaincu, mais pas brisé. Il gisait sur le plateau, le souffle court, le corps tremblant. Le Nafs se tenait au-dessus de lui, grand, sombre, victorieux.`,
      `Mais alors, quelque chose d'inattendu se produisit. Le Nafs... pleurait. Des larmes coulaient sur ses joues — les joues de Souhayl — et sa voix, quand il parla, n'était plus celle d'un ennemi.`,
      `— « Pourquoi ne demandes-tu pas de l'aide ? murmura le Nafs. Pourquoi refuses-tu de reconnaître que tu ne peux pas tout seul ? C'est ça, mon pouvoir — te convaincre que tu n'as besoin de personne. Et tu tombes dans le panneau à chaque fois. »`,
      `Souhayl ferma les yeux. Et pour la première fois, il comprit. L'indépendance n'était pas la force — c'était la plus grande des faiblesses. Le vrai courage n'était pas de se battre seul — c'était d'avoir l'humilité de demander de l'aide.`,
      `Le Shaykh apparut et s'agenouilla à côté de lui. — « Tu n'as pas perdu, Souhayl. Tu as appris la leçon la plus difficile de toutes : la limite de soi-même. Celui qui sait qu'il ne peut rien sans Allah a compris plus que celui qui croit pouvoir tout. Va en paix, mon enfant. Et reviens quand tu seras prêt à demander. »`,
    ],
    mood: 'ending',
    isEnding: true,
    endingType: 'shadow',
  },

  // Ending 4: La Lutte Éternelle
  'ending-struggle': {
    id: 'ending-struggle',
    chapter: 4,
    chapterTitle: 'La Montagne de la Vérité',
    paragraphs: [
      `Souhayl tomba à genoux. Pas un abandon total — pas encore. Une lutte. Son cœur se déchirait entre deux forces : la certitude qu'il ne pouvait rien seul, et l'orgueil tenace qui refusait de l'admettre.`,
      `— « Ya Allah... murmura-t-il d'une voix brisée. Je veux me rendre... mais je n'y arrive pas. Mon ego est trop fort. Ma volonté est trop faible. Je suis un enfant, et cette montagne est trop haute pour moi. »`,
      `Le silence qui suivit dura une éternité. Puis, doucement, le Nafs s'approcha. Pas en armure — en vêtements simples. Pas en tyran — en compagnon. Il s'assit à côté de Souhayl et regarda le sommet avec lui.`,
      `— « Tu sais, dit le Nafs, je ne suis pas ton ennemi. Pas vraiment. Je suis ton moteur. Sans moi, tu ne mangerais pas quand tu as faim, tu ne te protègerais pas quand tu es en danger. Le problème, c'est que tu m'as laissé prendre trop de place. »`,
      `Souhayl regarda son Nafs — sans colère, sans peur, avec une compréhension nouvelle. — « Et maintenant ? demanda-t-il. »`,
      `— « Maintenant, dit le Nafs, nous apprenons à coexister. Pas à combattre — à danser. À trouver l'équilibre. C'est un travail de toute une vie, Souhayl. Pas un voyage d'un jour. Mais chaque jour, tu feras un pas de plus vers cet équilibre. »`,
      `La montagne ne s'ouvrit pas. Il n'y eut pas de lumière éblouissante. Mais quelque chose changea en Souhayl — un changement subtil, comme le premier jour du printemps quand la nature se réveille. Il comprit que le Tassawuf n'était pas une destination — c'était un processus. Un effort quotidien. Une lutte noble contre la pire des guerres : la guerre contre soi-même.`,
      `Le Shaykh apparut, un sourire triste mais profond sur son visage. — « Voici peut-être la plus sage des leçons, Souhayl. Il n'y a pas de fin au chemin. Il n'y a que des étapes. Et chaque étape te rapproche un peu plus d'Allah. La lutte n'est pas un échec — c'est la preuve que tu es vivant, que tu es sincère, que tu refuses d'abandonner. Continue. Un jour après l'autre. Une prière après l'autre. Un repentir après l'autre. C'est ça, le Tassawuf. »`,
    ],
    mood: 'ending',
    isEnding: true,
    endingType: 'struggle',
  },

};

export const firstPageId = 'prologue';
export const totalChapters = 4;
export const totalEndings = 4;
