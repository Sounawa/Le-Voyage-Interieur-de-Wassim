import type { StoryPage } from '@/lib/story-types';

export const storyPages: Record<string, StoryPage> = {

  // ═══════════════════════════════════════════
  // PROLOGUE : LA CHAMBRE DE WASSIM
  // ═══════════════════════════════════════════
  prologue: {
    id: 'prologue',
    chapter: 0,
    chapterTitle: 'La Chambre de Wassim',
    paragraphs: [
      `Wassim a six ans. Bientôt sept ! Il est le plus petit de la famille. Son grand frère Souhayl a dix ans. Et Nawfel, son autre frère, en a huit.`,
      `Aujourd'hui, Wassim est dans sa chambre. Il dessine des couleurs sur une feuille. Du rouge, du jaune, du bleu, du vert. Il adore les couleurs !`,
      `Soudain, il entend un petit bruit. « Chuuut... chuuut... » Ça vient de sous son lit !`,
    ],
    mood: 'prologue',
    next: 'prologue-2',
    isChapterStart: true,
    illustrationPrompt: 'A cute 6-year-old boy with curly dark hair sitting on the floor of his colorful bedroom, drawing with crayons, toys scattered around, warm afternoon light, children book illustration style, bright and cheerful',
  },

  'prologue-2': {
    id: 'prologue-2',
    chapter: 0,
    chapterTitle: 'La Chambre de Wassim',
    paragraphs: [
      `Wassim regarde sous son lit. Et là, il voit un livre ! Un livre de coloriage. Mais pas un livre normal. La couverture brille avec toutes les couleurs de l'arc-en-ciel !`,
      `Le livre est chaud dans ses mains. Il vibre doucement, comme un petit cœur. Wassim l'ouvre avec précaution. Les pages sont toutes grises. Pas de couleurs. Même pas une seule !`,
      `Mais au milieu du livre, il y a un mot écrit en lettres dorées : « Aide-nous, Wassim. »`,
    ],
    mood: 'wonder',
    next: 'prologue-3',
  },

  'prologue-3': {
    id: 'prologue-3',
    chapter: 0,
    chapterTitle: 'La Chambre de Wassim',
    paragraphs: [
      `Wassim touche les lettres dorées. Et POUF ! La lumière l'entoure. Il tourne comme dans une toupie magique. Sa chambre disparaît.`,
      `Quand la lumière s'arrête, Wassim est debout dans un monde tout gris. Les arbres sont gris. Le ciel est gris. L'herbe est grisée. Même les fleurs sont grises !`,
      `C'est un monde sans couleurs. Wassim regarde partout. Il n'y a pas un seul rouge, pas un seul jaune. Que du gris, du gris, du gris. Et c'est très, très triste.`,
    ],
    mood: 'wonder',
    next: 'prologue-choice',
  },

  'prologue-choice': {
    id: 'prologue-choice',
    chapter: 0,
    chapterTitle: 'La Chambre de Wassim',
    paragraphs: [
      `Wassim regarde ce monde gris. Il se sent tout petit. Mais il sait qu'il doit faire quelque chose. Les couleurs ont disparu, et il est le seul qui peut les retrouver !`,
    ],
    mood: 'wonder',
    choices: [
      {
        id: 'brave-hello',
        text: '« Bonjour le monde gris ! Je suis Wassim et je vais vous aider ! »',
        nextPage: 'prologue-a1',
        tag: 'courage',
        emoji: '🌟',
      },
      {
        id: 'curious-look',
        text: 'Regarder partout avec de grands yeux émerveillés.',
        nextPage: 'prologue-a2',
        tag: 'curiosity',
        emoji: '👀',
      },
      {
        id: 'gentle-touch',
        text: 'Toucher doucement une fleur grise pour la réchauffer.',
        nextPage: 'prologue-a3',
        tag: 'kindness',
        emoji: '🤲',
      },
    ],
  },

  'prologue-a1': {
    id: 'prologue-a1',
    chapter: 0,
    chapterTitle: 'La Chambre de Wassim',
    paragraphs: [
      `Wassim crie « Bonjour ! » très fort. Sa voix fait trembler les arbres gris. Les oiseaux gris se posent sur les branches et le regardent. Ils sont curieux !`,
      `— « Oh ! dit un petit oiseau gris. Quelqu'un qui parle ! Ça fait longtemps que personne n'a ri ici. » Wassim sourit. Il aime quand les animaux lui parlent.`,
      `Le petit oiseau le regarde avec ses yeux ronds. « Tu es venu pour les couleurs, n'est-ce pas ? Suis-moi ! »`,
    ],
    mood: 'wonder',
    next: 'ch1-start',
  },

  'prologue-a2': {
    id: 'prologue-a2',
    chapter: 0,
    chapterTitle: 'La Chambre de Wassim',
    paragraphs: [
      `Wassim ouvre grand ses yeux. Il regarde les arbres, les fleurs, le ciel. Même en gris, ce monde est joli. Les formes sont douces. Les nuages sont moelleux comme du coton.`,
      `Il marche sur l'herbe grise. Elle est douce sous ses pieds. C'est comme marcher sur un tapis de nuage. « Waouh, » murmure-t-il.`,
      `Et là, il voit quelque chose bouger. Quelque chose de brillant. Pas gris. Un tout petit éclat de lumière qui vole vers lui !`,
    ],
    mood: 'wonder',
    next: 'ch1-start',
  },

  'prologue-a3': {
    id: 'prologue-a3',
    chapter: 0,
    chapterTitle: 'La Chambre de Wassim',
    paragraphs: [
      `Wassim s'accroupit près d'une petite fleur grise. Il la touche doucement avec le doigt. « Pauvre petite fleur, » dit-il tout bas. « Tu dois avoir froid sans tes couleurs. »`,
      `Et un petit miracle arrive. La fleur tremble. Un tout petit peu de rose apparaît sur un pétale. Juste un peu. Comme une joue qui rougit.`,
      `La fleur se redresse et sourit. Oui, elle sourit ! « Merci, Wassim, » chuchote-t-elle. « Tu as un cœur doux. Suis le chemin des papillons ! »`,
    ],
    mood: 'wonder',
    next: 'ch1-start',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 1: LE PAYS SANS COULEURS
  // ═══════════════════════════════════════════
  'ch1-start': {
    id: 'ch1-start',
    chapter: 1,
    chapterTitle: 'Le Pays Sans Couleurs',
    paragraphs: [
      `Le Pays Sans Couleurs est grand et triste. Tout est gris. Les montagnes sont grises. Les rivières sont grises. Les maisons sont grises aussi.`,
      `Les gens du pays marchent lentement. Ils ne sourient pas. Ils ne chantent pas. Sans couleurs, il n'y a pas de joie. Pas de rires. Pas de jeux.`,
      `Mais Wassim n'est pas triste. Il est curieux. Et il est prêt pour l'aventure !`,
    ],
    mood: 'wonder',
    next: 'ch1-grey',
    isChapterStart: true,
    illustrationPrompt: 'A vast grey world with grey mountains, grey rivers, grey trees, grey sky, a small boy standing in the middle looking curious and brave, soft muted tones, fantasy children book illustration',
  },

  'ch1-grey': {
    id: 'ch1-grey',
    chapter: 1,
    chapterTitle: 'Le Pays Sans Couleurs',
    paragraphs: [
      `Wassim marche sur le chemin gris. Ses pieds font « cric, crac » sur les petites pierres. Le vent souffle doucement, mais il n'apporte aucune odeur de fleurs.`,
      `Tout au loin, il voit un pont. Le pont est fait de pierres grises. De l'autre côté, il y a une grande porte. La porte brille un tout petit peu. Comme si une couleur essayait de sortir.`,
      `Wassim court vers le pont. Son cœur bat vite. Il est excité !`,
    ],
    mood: 'wonder',
    next: 'ch1-papillon',
  },

  'ch1-papillon': {
    id: 'ch1-papillon',
    chapter: 1,
    chapterTitle: 'Le Pays Sans Couleurs',
    paragraphs: [
      `Sur le pont, quelqu'un l'attend. Quelqu'un de très petit. De très joli. C'est un papillon ! Mais un papillon spécial. Ses ailes ont des traces de couleurs. Un peu de bleu, un peu de rose.`,
      `— « Bonjour, Wassim ! dit le papillon d'une voix douce comme une chanson. Je m'appelle Papillon. Je suis le dernier à avoir encore un peu de couleurs sur moi. »`,
      `Le papillon vole autour de Wassim. Ses ailes laissent des petits trails de lumière. C'est magique !`,
    ],
    mood: 'wonder',
    next: 'ch1-papillon-talk',
  },

  'ch1-papillon-talk': {
    id: 'ch1-papillon-talk',
    chapter: 1,
    chapterTitle: 'Le Pays Sans Couleurs',
    paragraphs: [
      `Papillon se pose sur le nez de Wassim. C'est drôle ! Wassim plisse les yeux et rigole.`,
      `— « Écoute-moi bien, petit Wassim, dit Papillon. Il y a quatre royaumes de couleurs. Le Rouge, le Jaune, le Bleu et le Vert. Chaque royaume a perdu sa couleur magique. Tu dois les retrouver toutes ! »`,
      `— « Toutes les quatre ? » demande Wassim. — « Oui ! dit Papillon. Et je serai avec toi pour t'aider. Ensemble, on est plus forts ! »`,
    ],
    mood: 'wonder',
    next: 'ch1-choice',
  },

  'ch1-choice': {
    id: 'ch1-choice',
    chapter: 1,
    chapterTitle: 'Le Pays Sans Couleurs',
    paragraphs: [
      `Papillon montre le chemin avec son aile. Il y a quatre portes devant Wassim. Mais une seule est ouverte : la porte rouge. Les autres sont fermées avec de grosses chaînes grises.`,
      `— « On commence par le Rouge, dit Papillon. Le Royaume Rouge a besoin de courage. Es-tu prêt, Wassim ? » Wassim serre les poings. Il est prêt !`,
    ],
    mood: 'wonder',
    choices: [
      {
        id: 'lets-go',
        text: '« On y va ! Je suis courageux ! »',
        nextPage: 'ch1-c1',
        tag: 'courage',
        emoji: '❤️',
      },
      {
        id: 'hold-hand',
        text: '« Papillon, reste avec moi, d\'accord ? »',
        nextPage: 'ch1-c2',
        tag: 'friendship',
        emoji: '🦋',
      },
      {
        id: 'think-first',
        text: '« Attends, je veux bien réfléchir d\'abord. »',
        nextPage: 'ch1-c3',
        tag: 'wisdom',
        emoji: '🧠',
      },
    ],
  },

  'ch1-c1': {
    id: 'ch1-c1',
    chapter: 1,
    chapterTitle: 'Le Pays Sans Couleurs',
    paragraphs: [
      `— « On y va ! » crie Wassim. Il court vers la porte rouge avec Papillon sur son épaule. Ses pieds font de l'étincelle sur le chemin gris.`,
      `La porte rouge s'ouvre toute seule. Derrière, il y a un monde... rouge ! Enfin, presque rouge. C'est plutôt rouge-gris. Comme un monde de couleurs qui a perdu sa force.`,
      `— « Bravo Wassim ! dit Papillon. Le courage, c'est quand on ose même si on a un peu peur. Et toi, tu oses ! »`,
    ],
    mood: 'triumph',
    next: 'ch1-ready',
  },

  'ch1-c2': {
    id: 'ch1-c2',
    chapter: 1,
    chapterTitle: 'Le Pays Sans Couleurs',
    paragraphs: [
      `— « Reste avec moi, Papillon, » dit Wassim doucement. Papillon vole et se pose sur son doigt. Ses ailes sont chaudes et douces.`,
      `— « Bien sûr que je reste ! dit Papillon. On est amis maintenant. Les amis, ça ne s'abandonne jamais ! » Wassim sourit. Avoir un ami papillon, c'est le meilleur truc du monde !`,
      `Ensemble, ils marchent vers la porte rouge. Elle s'ouvre doucement, comme pour les accueillir.`,
    ],
    mood: 'peace',
    next: 'ch1-ready',
  },

  'ch1-c3': {
    id: 'ch1-c3',
    chapter: 1,
    chapterTitle: 'Le Pays Sans Couleurs',
    paragraphs: [
      `Wassim s'arrête et réfléchit. Il regarde les quatre portes. La rouge. La jaune. La bleue. La verte. Il toque du doigt sur son menton, comme fait Nawfel quand il réfléchit.`,
      `— « C'est bien de réfléchir, dit Papillon impressionné. Les gens courageux courent. Les gens sages regardent d'abord. Toi, tu regardes d'abord. C'est très bien ! »`,
      `Wassim observe la porte rouge. Il voit une petite lumière rouge qui pulse doucement. « Elle nous attend, » dit-il. Et ils entrent ensemble.`,
    ],
    mood: 'wisdom',
    next: 'ch1-ready',
  },

  'ch1-ready': {
    id: 'ch1-ready',
    chapter: 1,
    chapterTitle: 'Le Pays Sans Couleurs',
    paragraphs: [
      `Wassim entre dans le premier royaume. Le monde change autour de lui. Le gris devient rouge. Enfin, presque rouge. C'est un rouge pâle, faible, comme une bougie qui s'éteint.`,
      `Papillon vole au-dessus de sa tête. — « Bienvenue au Royaume Rouge, Wassim ! Ici, on apprend le courage. Et je crois que tu vas adorer ! »`,
      `Wassim regarde autour de lui avec des yeux grands comme des assiettes. Il est prêt pour sa première aventure de couleurs !`,
    ],
    mood: 'wonder',
    next: 'ch1-leave',
  },

  'ch1-leave': {
    id: 'ch1-leave',
    chapter: 1,
    chapterTitle: 'Le Pays Sans Couleurs',
    paragraphs: [
      `Le Royaume Rouge est magnifique, même sans toutes ses couleurs. Il y a des montagnes roses, des rivières rougeâtres, et des arbres avec des feuilles rouge-orange.`,
      `Mais quelque chose ne va pas. Les animaux du royaume ont peur de tout. Ils se cachent. Ils tremblent. Ils ont oublié ce que c'est que d'être courageux.`,
      `Wassim prend une grande inspiration. Comme dit Souhayl : « Le courage, ce n'est pas ne pas avoir peur. C'est avancer même quand on a peur. »`,
    ],
    mood: 'wonder',
    next: 'ch2-start',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 2: LE ROYAUME ROUGE
  // ═══════════════════════════════════════════
  'ch2-start': {
    id: 'ch2-start',
    chapter: 2,
    chapterTitle: 'Le Royaume Rouge',
    paragraphs: [
      `Wassim marche dans le Royaume Rouge. Tout est d'un rouge doux. Les collines sont rouges. Les fleurs sont rouges. Le ciel est rose-rouge. C'est très joli !`,
      `Mais les animaux sont tristes. De petits lapins rouges se cachent dans leurs trous. Des oiseaux rouges ne chantent plus. Ils ont oublié le courage.`,
      `Wassim veut les aider. Comment peut-il leur redonner du courage ?`,
    ],
    mood: 'wonder',
    next: 'ch2-red-land',
    isChapterStart: true,
    illustrationPrompt: 'A magical red kingdom with soft red hills, red flowers, pink-red sky, small red rabbits hiding in holes, red birds sitting quietly on branches, a small boy walking with a butterfly companion, warm red tones, children fantasy illustration',
  },

  'ch2-red-land': {
    id: 'ch2-red-land',
    chapter: 2,
    chapterTitle: 'Le Royaume Rouge',
    paragraphs: [
      `Wassim voit un petit renard rouge assis tout seul sur une pierre. Il pleure. Ses larmes sont rougeâtres et tombent sur la pierre en faisant « ploc, ploc ».`,
      `— « Pourquoi tu pleures ? » demande Wassim en s'approchant doucement. Le renard le regarde avec de grands yeux mouillés.`,
      `— « Parce que j'ai peur, dit le renard. J'ai peur de tout. Du noir. Du bruit. Des grands arbres. De tout ! » Wassim s'assoit à côté de lui. « Moi aussi, j'ai peur parfois, » dit-il.`,
    ],
    mood: 'peace',
    next: 'ch2-red-animals',
  },

  'ch2-red-animals': {
    id: 'ch2-red-animals',
    chapter: 2,
    chapterTitle: 'Le Royaume Rouge',
    paragraphs: [
      `Le renard regarde Wassim, surpris. « Toi aussi ? Mais tu es un héros ! Tu es venu pour sauver les couleurs ! »`,
      `— « Un héros qui a peur, oui, dit Wassim avec un sourire. Même Souhayl, mon grand frère, a peur parfois. Il a peur des araignées ! » Le renard rigole. C'est la première fois qu'il rit depuis longtemps.`,
      `D'autres animaux s'approchent. Les lapins sortent de leurs trous. Les oiseaux descendent des branches. Ils veulent écouter Wassim.`,
    ],
    mood: 'wonder',
    next: 'ch2-courage-test',
    zakiSpeaks: 'Wassim a raison ! Même les plus grands héros ont peur. Souhayl a peur des araignées. Nawfel a peur du noir. Et moi, j\'ai peur des... eh bien, je suis un papillon. Je n\'ai peur de rien ! Enfin, presque rien.',
  },

  'ch2-courage-test': {
    id: 'ch2-courage-test',
    chapter: 2,
    chapterTitle: 'Le Royaume Rouge',
    paragraphs: [
      `Un gros cerf rouge s'avance. Il est le chef des animaux. « Wassim, dit-il. Pour retrouver le rouge magique, tu dois passer un test de courage. Tu vois cette grande montagne là-bas ? »`,
      `Wassim regarde. La montagne est très haute. Et au sommet, il y a un grand cristal rouge qui brille. C'est le cristal du courage !`,
      `— « Tu dois grimper jusqu'en haut, dit le cerf. Le chemin est difficile. Mais je sais que tu peux le faire. »`,
    ],
    mood: 'wonder',
    next: 'ch2-choice',
  },

  'ch2-choice': {
    id: 'ch2-choice',
    chapter: 2,
    chapterTitle: 'Le Royaume Rouge',
    paragraphs: [
      `Wassim regarde la montagne. Elle est haute, oui. Mais il a Papillon avec lui. Et tous les animaux le regardent avec espoir. Wassim doit choisir comment grimper.`,
    ],
    mood: 'wonder',
    choices: [
      {
        id: 'climb-fast',
        text: 'Grimper vite, comme un petit singe courageux !',
        nextPage: 'ch2-c1',
        tag: 'boldness',
        emoji: '🧗',
      },
      {
        id: 'climb-slow',
        text: 'Grimper doucement, un pas après l\'autre.',
        nextPage: 'ch2-c2',
        tag: 'patience',
        emoji: '🐌',
      },
      {
        id: 'climb-together',
        text: 'Inviter les animaux à grimper avec lui.',
        nextPage: 'ch2-c3',
        tag: 'together',
        emoji: '🤝',
      },
    ],
  },

  'ch2-c1': {
    id: 'ch2-c1',
    chapter: 2,
    chapterTitle: 'Le Royaume Rouge',
    paragraphs: [
      `Wassim grimpe très vite ! Ses pieds sautent de roche en roche. Il est rapide comme le vent ! Les animaux en bas le regardent avec admiration.`,
      `Mais au milieu de la montagne, il glisse. « Aïe ! » Ses mains se cramponnent à une petite pierre. Il a un peu peur. Mais il ne lâche pas !`,
      `— « Courage, Wassim ! » crie Papillon. Le petit renard crie aussi : « Tu peux le faire ! » Wassim reprend sa grimpe. Et il arrive au sommet, haletant mais fier !`,
    ],
    mood: 'triumph',
    next: 'ch2-fragment',
  },

  'ch2-c2': {
    id: 'ch2-c2',
    chapter: 2,
    chapterTitle: 'Le Royaume Rouge',
    paragraphs: [
      `Wassim grimpe doucement. Un pas, puis un autre. Il regarde bien où il met ses pieds. Comme lui a appris Nawfel : « Ne te dépêche pas. Regarde avant de sauter. »`,
      `C'est plus lent. Mais c'est plus sûr. Wassim ne glisse pas. Il ne trébuche pas. Il avance comme une petite tortule courageuse. Doucement, mais sûrement.`,
      `Quand il arrive en haut, Papillon dit : « Tu sais quoi, Wassim ? Aller doucement, c'est une forme de courage aussi. C'est le courage d'être patient. »`,
    ],
    mood: 'peace',
    next: 'ch2-fragment',
  },

  'ch2-c3': {
    id: 'ch2-c3',
    chapter: 2,
    chapterTitle: 'Le Royaume Rouge',
    paragraphs: [
      `— « Qui veut monter avec moi ? » demande Wassim. Le petit renard lève la patte. Les lapins font des sauts de joie. Même les oiseaux veulent venir !`,
      `Ils grimpent ensemble. Wassim aide le renard sur les grosses pierres. Les lapins se passent de patte en patte. Les oiseaux portent des messages en haut. C'est l'aventure la plus belle !`,
      `Quand ils arrivent tous au sommet, tout le monde applaudit. — « Ensemble, on est plus forts ! » dit Wassim. Et le cristal rouge brille de mille feux !`,
    ],
    mood: 'triumph',
    next: 'ch2-fragment',
  },

  'ch2-fragment': {
    id: 'ch2-fragment',
    chapter: 2,
    chapterTitle: 'Le Royaume Rouge',
    paragraphs: [
      `Le cristal rouge est magnifique ! Il pulse de lumière rouge. Wassim le touche et le cristal explose de couleurs rouges ! Des étincelles rouges volent partout !`,
      `Le rouge magique revient dans le royaume ! Les fleurs redeviennent rouge vif. Les arbres brillent de rouge. Le ciel prend une belle couleur rose !`,
      `— « La première couleur ! » crie Papillon en tournant comme une toupie. « Bravo, Wassim ! Tu as trouvé le rouge ! »`,
    ],
    mood: 'triumph',
    next: 'ch2-alive',
  },

  'ch2-alive': {
    id: 'ch2-alive',
    chapter: 2,
    chapterTitle: 'Le Royaume Rouge',
    paragraphs: [
      `Le Royaume Rouge est de nouveau vivant ! Les lapins rouges sautent partout. Les oiseaux rouges chantent des chansons joyeuses. Le petit renard danse !`,
      `— « Merci, Wassim ! » dit le renard. « Tu m'as appris que le courage, c'est d'accepter sa peur. Merci ! » Il donne à Wassim un petit bisou sur la joue.`,
      `Wassim rougit. Littéralement ! Son visage devient tout rouge. Tout le monde rigole. C'est trop drôle !`,
    ],
    mood: 'triumph',
    next: 'ch2-next',
  },

  'ch2-next': {
    id: 'ch2-next',
    chapter: 2,
    chapterTitle: 'Le Royaume Rouge',
    paragraphs: [
      `Papillon vole vers Wassim. — « Une couleur retrouvée ! Il en reste trois. Le Jaune, le Bleu et le Vert ! Tu veux continuer, Wassim ? »`,
      `Wassim regarde sa petite main. Un petit point rouge brille au creux de sa paume. Le cristal rouge lui a donné un peu de sa magie !`,
      `— « Bien sûr que je continue ! » dit-il. « Allons trouver le jaune ! » Et ils partent ensemble vers la porte jaune qui brille au loin.`,
    ],
    mood: 'wonder',
    next: 'ch3-start',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 3: LE ROYAUME JAUNE
  // ═══════════════════════════════════════════
  'ch3-start': {
    id: 'ch3-start',
    chapter: 3,
    chapterTitle: 'Le Royaume Jaune',
    paragraphs: [
      `La porte jaune s'ouvre ! Et Wassim entre dans un monde de soleil. Tout est jaune ici ! Les plages sont jaunes. Les arbres sont jaunes. Même l'eau est jaune !`,
      `Mais le soleil est faible. Il brille à peine. Comme une ampoule qui manque d'énergie. Les habitants du royaume ne sourient plus. Ils ont oublié comment rire.`,
      `— « Ici, c'est le royaume de la joie ! » dit Papillon. « On doit leur redonner le sourire ! »`,
    ],
    mood: 'wonder',
    next: 'ch3-yellow-land',
    isChapterStart: true,
    illustrationPrompt: 'A magical yellow kingdom with pale yellow beaches, yellow palm trees, weak pale sun in the sky, yellow water, sad-looking creatures sitting around, a small boy with a butterfly walking on golden sand, warm yellow tones, children fantasy illustration',
  },

  'ch3-yellow-land': {
    id: 'ch3-yellow-land',
    chapter: 3,
    chapterTitle: 'Le Royaume Jaune',
    paragraphs: [
      `Wassim marche sur le sable jaune. Il fait chaud, mais c'est un bon chaud. Comme un bisou de soleil. Des petits crabes jaunes marchent lentement, tristes.`,
      `Un dauphin jaune saute dans l'eau jaune. Mais il ne fait pas de gaîté. Il saute juste pour avancer. Pas pour jouer. C'est très triste à voir.`,
      `— « Ils ont oublié de jouer, » dit Papillon. « Sans joie, les dauphins ne sautent plus pour s'amuser. Tu sais quoi faire, Wassim ? »`,
    ],
    mood: 'wonder',
    next: 'ch3-yellow-games',
  },

  'ch3-yellow-games': {
    id: 'ch3-yellow-games',
    chapter: 3,
    chapterTitle: 'Le Royaume Jaune',
    paragraphs: [
      `Wassim a une idée ! Il court vers le dauphin jaune. — « Hé ! On joue à attraper ? » Le dauphin le regarde, surpris.`,
      `— « Jouer ? dit le dauphin. C'est quoi, jouer ? Ça fait longtemps que je n'ai pas joué... » Wassim rigole. — « C'est facile ! Tu essaies de m'attraper, et moi je cours ! »`,
      `Wassim commence à courir sur la plage. Il fait des zigzags. Il rit. Le rire de Wassim est comme de la musique. C'est contagieux !`,
    ],
    mood: 'wonder',
    next: 'ch3-laugh-test',
  },

  'ch3-laugh-test': {
    id: 'ch3-laugh-test',
    chapter: 3,
    chapterTitle: 'Le Royaume Jaune',
    paragraphs: [
      `Les crabes jaunes regardent Wassim courir. D'abord ils ne bougent pas. Mais puis, un petit crabe fait un pas. Puis deux. Et il commence à courir après Wassim !`,
      `Le dauphin jaune saute hors de l'eau. Il fait un grand saut périlleux ! SPLASH ! Tout le monde est trempé ! Wassim rit si fort qu'il tombe dans le sable.`,
      `Mais le soleil est toujours faible. Il faut plus de joie pour le réveiller. Wassim doit faire quelque chose de vraiment, vraiment drôle !`,
    ],
    mood: 'wonder',
    next: 'ch3-choice',
  },

  'ch3-choice': {
    id: 'ch3-choice',
    chapter: 3,
    chapterTitle: 'Le Royaume Jaune',
    paragraphs: [
      `Le soleil faible brille au-dessus d'eux. Wassim doit le réveiller avec beaucoup de joie. Comment peut-il faire rire tout le monde ?`,
    ],
    mood: 'wonder',
    choices: [
      {
        id: 'funny-dance',
        text: 'Faire une danse très drôle et rigolote !',
        nextPage: 'ch3-c1',
        tag: 'joy',
        emoji: '💃',
      },
      {
        id: 'tell-joke',
        text: 'Raconter la blague la plus drôle qu\'il connaît.',
        nextPage: 'ch3-c2',
        tag: 'humor',
        emoji: '😂',
      },
      {
        id: 'make-faces',
        text: 'Faire des têtes très amusantes comme Nawfel.',
        nextPage: 'ch3-c3',
        tag: 'playful',
        emoji: '🤪',
      },
    ],
  },

  'ch3-c1': {
    id: 'ch3-c1',
    chapter: 3,
    chapterTitle: 'Le Royaume Jaune',
    paragraphs: [
      `Wassim se lève et commence à danser. Il fait une danse trop drôle ! Il sautille comme un kangourou. Il tourne comme une toupie. Il fait des pas bizarres avec ses bras en l'air !`,
      `Les crabes écarquillent leurs petits yeux. Le dauphin souffle de l'eau par son éventail. C'est hilarant ! Tout le monde se met à rire. HA HA HA !`,
      `Le soleil entend les rires. Il grandit, grandit, GRANDIT ! Il devient tout jaune et brillant ! Le Royaume Jaune est de nouveau ensoleillé !`,
    ],
    mood: 'triumph',
    next: 'ch3-fragment',
  },

  'ch3-c2': {
    id: 'ch3-c2',
    chapter: 3,
    chapterTitle: 'Le Royaume Jaune',
    paragraphs: [
      `— « Oh oh oh ! dit Wassim. C'est l'histoire d'un poisson rouge qui va à l'école... et qui oublie tout en trois secondes ! » Il fait une pause dramatique. « Le maître dit : 'Quel est ton nom ?' Le poisson répond : 'C'est quoi, un nom ?' »`,
      `Tout le monde éclate de rire ! Le dauphin rit tellement qu'il fait des bulles. Les crabes tapent leurs pinces ensemble. Même Papillon rigole en volant en zigzag !`,
      `Le soleil réveille avec un grand « BONJOUR ! ». Il rayonne de joie. Il est si content d'entendre des rires ! La lumière jaune envahit tout le royaume !`,
    ],
    mood: 'triumph',
    next: 'ch3-fragment',
  },

  'ch3-c3': {
    id: 'ch3-c3',
    chapter: 3,
    chapterTitle: 'Le Royaume Jaune',
    paragraphs: [
      `Wassim gonfle ses joues. Il croise ses yeux. Il met son nez en l'air. Il fait la même chose que Nawfel quand il veut faire rire tout le monde à table. Maman dit toujours « arrêtez » mais elle rigole aussi !`,
      `Les crabes jaunes ne peuvent plus s'arrêter de rire. Le dauphin jaune fait un salto arrière de rire. Les petits oiseaux jaunes tombent des branches en riant trop fort !`,
      `Le soleil entend tout ce joyeux bazar et se réveille en beauté ! Il envoie des rayons dorés partout. Le monde jaune est de nouveau plein de soleil et de bonheur !`,
    ],
    mood: 'triumph',
    next: 'ch3-fragment',
  },

  'ch3-fragment': {
    id: 'ch3-fragment',
    chapter: 3,
    chapterTitle: 'Le Royaume Jaune',
    paragraphs: [
      `Un cristal jaune tombe du ciel. Il atterrit dans les mains de Wassim. Il est chaud comme le soleil ! Et il brille d'une lumière dorée magnifique !`,
      `Wassim ferme les yeux et serre le cristal contre lui. Deux couleurs maintenant ! Le rouge et le jaune ! Il les sent vibrer dans ses mains. C'est magique !`,
      `— « De couleurs retrouvées sur quatre ! » chante Papillon en faisant une danse de la victoire dans les airs.`,
    ],
    mood: 'triumph',
    next: 'ch3-sunshine',
  },

  'ch3-sunshine': {
    id: 'ch3-sunshine',
    chapter: 3,
    chapterTitle: 'Le Royaume Jaune',
    paragraphs: [
      `Le Royaume Jaune est joyeux ! Les dauphins font des courses dans l'eau dorée. Les crabes jouent à cache-cache dans le sable. Les oiseaux chantent des chansons joyeuses !`,
      `— « Merci, Wassim ! » dit le dauphin en lui faisant un grand splash amical. « Tu nous as rappelé que rire, c'est la meilleure chose du monde ! »`,
      `Le soleil brille fort au-dessus de Wassim. Il lui fait un clin d'œil. Oui, le soleil lui fait un clin d'œil !`,
    ],
    mood: 'triumph',
    next: 'ch3-next',
    shaykhSpeaks: 'Le Prophète (paix sur lui) disait : « Souris à ton frère, c\'est une aumône. » Wassim, tu as donné beaucoup de sourires aujourd\'hui. Et chaque sourire est un cadeau.',
  },

  'ch3-next': {
    id: 'ch3-next',
    chapter: 3,
    chapterTitle: 'Le Royaume Jaune',
    paragraphs: [
      `Papillon tourne autour de Wassim, tout content. — « Le rouge et le jaune ! Il reste le bleu et le vert ! Tu es incroyable, Wassim ! »`,
      `Wassim regarde ses mains. Le point rouge et le point jaune brillent ensemble. « On dirait du orange, » dit-il en riant. Papillon rit aussi.`,
      `— « Allez, dit Papillon. Le Royaume Bleu nous attend. C'est le royaume des rêves et du calme. Prêt pour un peu de sieste magique ? »`,
    ],
    mood: 'peace',
    next: 'ch4-start',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 4: LE ROYAUME BLEU
  // ═══════════════════════════════════════════
  'ch4-start': {
    id: 'ch4-start',
    chapter: 4,
    chapterTitle: 'Le Royaume Bleu',
    paragraphs: [
      `La porte bleue s'ouvre doucement. Et Wassim entre dans un monde de rêves. Tout est bleu ici. Le ciel est bleu. L'eau est bleue. Les nuages sont bleus aussi !`,
      `C'est très calme. Très doux. Les étoiles brillent même en plein jour. C'est le royaume du repos et des beaux rêves. Wassim a envie de bailler !`,
      `Mais quelque chose ne va pas. Les étoiles s'éteignent une par une. Les gens du royaume ne dorment plus. Ils ne rêvent plus. C'est un problème !`,
    ],
    mood: 'peace',
    next: 'ch4-blue-land',
    isChapterStart: true,
    illustrationPrompt: 'A dreamy blue kingdom with floating clouds, blue water streams, pale blue stars fading in the sky, sleeping creatures on soft blue grass, a small boy with a butterfly walking quietly through a blue dreamscape, calm blue and silver tones, children fantasy illustration',
  },

  'ch4-blue-land': {
    id: 'ch4-blue-land',
    chapter: 4,
    chapterTitle: 'Le Royaume Bleu',
    paragraphs: [
      `Wassim marche doucement sur l'herbe bleue. Elle est douce comme un tapis. Des petits nuages flottent près du sol. Wassim peut les toucher avec la main. Ils sont moelleux !`,
      `Une petite licorne bleue dort sur un nuage. Elle a des yeux cernés. Elle est fatiguée. — « Je n'arrive plus à dormir, » dit la licorne d'une voix endormie. « Sans sommeil, pas de rêves. Sans rêves, les étoiles meurent. »`,
      `Wassim pose sa main sur la tête de la licorne. Elle est douce et chaude.`,
    ],
    mood: 'peace',
    next: 'ch4-blue-clouds',
  },

  'ch4-blue-clouds': {
    id: 'ch4-blue-clouds',
    chapter: 4,
    chapterTitle: 'Le Royaume Bleu',
    paragraphs: [
      `La licorne montre le ciel. Plusieurs étoiles bleues clignotent faiblement. Elles ont presque disparu. — « C'est triste, dit-elle. Chaque étoile est un rêve d'un enfant. Si les étoiles meurent, les enfants ne rêvent plus. »`,
      `Wassim pense à ses propres rêves. Il rêve souvent de voler. Comme un oiseau. Ou comme Super-Man ! Et il rêve de manger un immense gâteau au chocolat. Mmmm !`,
      `— « Il faut chanter une berceuse, dit la licorne. Une berceuse magique. Ça réveillera les étoiles et ramènera les rêves. »`,
    ],
    mood: 'peace',
    next: 'ch4-dream-test',
  },

  'ch4-dream-test': {
    id: 'ch4-dream-test',
    chapter: 4,
    chapterTitle: 'Le Royaume Bleu',
    paragraphs: [
      `Wassim doit chanter une berceuse. Mais pas n'importe laquelle. Une berceuse qui vient du cœur. Une chanson douce et vraie. Comme les chansons que Maman chante le soir.`,
      `Papillon se pose sur son épaule. « Chante avec ton cœur, Wassim. Les notes parfaites, ça n'existe pas. Seules les notes vraies comptent. »`,
      `Wassim prend une grande inspiration. Il ferme les yeux. Que va-t-il chanter ?`,
    ],
    mood: 'peace',
    next: 'ch4-choice',
  },

  'ch4-choice': {
    id: 'ch4-choice',
    chapter: 4,
    chapterTitle: 'Le Royaume Bleu',
    paragraphs: [
      `Tous les animaux bleus sont autour de Wassim. La licorne, les petits poissons bleus, les oiseaux bleus, les papillons de nuit. Ils attendent la chanson.`,
    ],
    mood: 'peace',
    choices: [
      {
        id: 'sing-mama',
        text: 'Chanter la chanson de Maman qu\'il connaît par cœur.',
        nextPage: 'ch4-c1',
        tag: 'love',
        emoji: '💜',
      },
      {
        id: 'hum-softly',
        text: 'Humer une mélodie douce et calme.',
        nextPage: 'ch4-c2',
        tag: 'calm',
        emoji: '🎵',
      },
      {
        id: 'sing-brothers',
        text: 'Inventer une chanson sur ses frères.',
        nextPage: 'ch4-c3',
        tag: 'fraternal',
        emoji: '👨‍👦',
      },
    ],
  },

  'ch4-c1': {
    id: 'ch4-c1',
    chapter: 4,
    chapterTitle: 'Le Royaume Bleu',
    paragraphs: [
      `Wassim ferme les yeux et chante doucement la chanson de Maman. C'est la chanson qu'elle chante chaque soir avant de dormir. Sa voix est petite mais belle. Comme un murmure dans le vent.`,
      `La licorne ferme les yeux. Les poissons bleus s'arrêtent de nager. Tout le monde écoute. La mélodie flotte dans l'air comme un nuage de douceur.`,
      `Et les étoiles se réveillent ! Une par une, elles brillent de plus en plus fort. BLEU ! BLEU ! BLEU ! Le ciel s'illumine de mille étoiles bleues !`,
    ],
    mood: 'triumph',
    next: 'ch4-fragment',
  },

  'ch4-c2': {
    id: 'ch4-c2',
    chapter: 4,
    chapterTitle: 'Le Royaume Bleu',
    paragraphs: [
      `Wassim n'a pas de paroles. Alors il humme. « Huummm... huummm... huummm... » Une mélodie simple et douce. Comme le vent dans les arbres. Comme l'eau qui coule.`,
      `C'est la plus belle berceuse du monde. Parce qu'elle est simple. Parce qu'elle est vraie. Les animaux bleus s'endorment doucement en l'écoutant. Ils font de beaux rêves.`,
      `Les étoiles bleues explosent de lumière ! Elles dansent dans le ciel ! Le Royaume Bleu est de nouveau plein de rêves et de douceur !`,
    ],
    mood: 'triumph',
    next: 'ch4-fragment',
  },

  'ch4-c3': {
    id: 'ch4-c3',
    chapter: 4,
    chapterTitle: 'Le Royaume Bleu',
    paragraphs: [
      `Wassim invente une chanson sur le tard. — « Souhayl est grand comme une montagne. Nawfel est drôle comme un clown. Et moi, Wassim, je suis petit. Mais j'ai un grand cœur ! » Il rit en chantant.`,
      `La licorne sourit. « C'est la chanson la plus belle, dit-elle. Parce qu'elle parle d'amour. L'amour de sa famille, c'est le plus beau des rêves. »`,
      `Les étoiles entendissent les paroles de la chanson. Elles brillent de mille feux bleus ! Le ciel bleu est magnifique ! Wassim a chanté avec son cœur, et les étoiles l'ont entendu !`,
    ],
    mood: 'triumph',
    next: 'ch4-fragment',
  },

  'ch4-fragment': {
    id: 'ch4-fragment',
    chapter: 4,
    chapterTitle: 'Le Royaume Bleu',
    paragraphs: [
      `Un cristal bleu tombe du ciel. Il descend lentement, doucement, comme une plume. Wassim le rattrape dans ses mains. Il est frais comme l'eau et doux comme un rêve.`,
      `Maintenant, Wassim a trois couleurs ! Le rouge, le jaune et le bleu ! Ses mains brillent comme un feu d'artifice miniature ! C'est magnifique !`,
      `La licorne endormie sourit dans son sommeil. Elle fait un beau rêve grâce à la berceuse de Wassim.`,
    ],
    mood: 'triumph',
    next: 'ch4-stars',
  },

  'ch4-stars': {
    id: 'ch4-stars',
    chapter: 4,
    chapterTitle: 'Le Royaume Bleu',
    paragraphs: [
      `Le ciel bleu est plein d'étoiles. Elles scintillent et dansent. Les enfants du monde entier font de beaux rêves grâce à Wassim. Il le sait. Il le sent dans son cœur.`,
      `— « Merci, Wassim, » murmure la licorne sans ouvrir les yeux. « Tu m'as redonné le sommeil. Et le sommeil, c'est le meilleur cadeau. »`,
      `Papillon bat doucement ses ailes. — « Shhh... ne la réveille pas. Elle dort. Et c'est parfait comme ça. »`,
    ],
    mood: 'peace',
    next: 'ch4-next',
  },

  'ch4-next': {
    id: 'ch4-next',
    chapter: 4,
    chapterTitle: 'Le Royaume Bleu',
    paragraphs: [
      `Wassim quitte le Royaume Bleu doucement. Il marche sur la pointe des pieds pour ne pas réveiller personne. Même Papillon chuchote !`,
      `— « Il reste une seule couleur, dit Papillon tout bas. Le Vert. Le royaume de la nature et de la gentillesse. Tu es prêt, petit héros ? »`,
      `Wassim regarde ses trois points de couleur sur sa main. Rouge, jaune, bleu. Il lui manque le vert. Et il est déterminé à le trouver !`,
    ],
    mood: 'wonder',
    next: 'ch5-start',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 5: LE ROYAUME VERT
  // ═══════════════════════════════════════════
  'ch5-start': {
    id: 'ch5-start',
    chapter: 5,
    chapterTitle: 'Le Royaume Vert',
    paragraphs: [
      `La porte verte s'ouvre ! Et Wassim entre dans la forêt la plus belle du monde. Enfin, elle DEVRAIT être la plus belle. Mais les arbres sont gris-vert. Les fleurs sont fanées. La terre est sèche.`,
      `C'est le Royaume Vert. Le royaume de la nature. Mais sans le vert, la nature meurt. Les feuilles tombent. Les rivières sèchent. Les animaux ont faim et soif.`,
      `Wassim regarde tout ça et son cœur se serre. Il veut aider. Il doit aider !`,
    ],
    mood: 'wonder',
    next: 'ch5-green-land',
    isChapterStart: true,
    illustrationPrompt: 'A magical green forest kingdom but faded and grey-green, drooping trees, dry river bed, thirsty animals, wilted flowers, a small boy with a butterfly looking sad but determined, soft green and brown tones, children fantasy illustration',
  },

  'ch5-green-land': {
    id: 'ch5-green-land',
    chapter: 5,
    chapterTitle: 'Le Royaume Vert',
    paragraphs: [
      `Wassim marche dans la forêt. Ses pas font « crrouch, crrouch » sur les feuilles mortes. Les arbres penchent la tête, tristes. Ils ont soif. Ils ont faim de lumière.`,
      `Un petit écureuil vert (enfin, gris-vert) descend d'un arbre. Il a les yeux brillants de faim. — « S'il te plaît, dit l'écureuil. J'ai mangé la dernière noix hier. Il n'y en a plus. »`,
      `Wassim cherche dans ses poches. Il n'a rien à manger. Mais il a une idée !`,
    ],
    mood: 'wonder',
    next: 'ch5-green-animals',
  },

  'ch5-green-animals': {
    id: 'ch5-green-animals',
    paragraphs: [
      `Partout dans la forêt, les animaux ont besoin d'aide. Une petite biche a soif. Un lapin a froid. Un vieux hibou ne trouve plus de graines. Tout le monde souffre.`,
      `Mais au milieu de la forêt, il y a un arbre. Un arbre très, très vieux. Le plus vieux de toute la forêt. Ses branches sont toutes sèches. Ses feuilles sont tombées. Mais son tronc pulse doucement.`,
      `— « C'est l'Arbre de Vie, murmure Papillon. C'est lui qui donne la vie à toute la forêt. Il est malade. Il faut le soigner. »`,
    ],
    chapter: 5,
    chapterTitle: 'Le Royaume Vert',
    mood: 'wonder',
    next: 'ch5-animal-choice',
  },

  'ch5-animal-choice': {
    id: 'ch5-animal-choice',
    chapter: 5,
    chapterTitle: 'Le Royaume Vert',
    paragraphs: [
      `Wassim s'approche de l'Arbre de Vie. Il est si grand ! Wassim doit lever très haut la tête pour voir le sommet. L'arbre gronde doucement. Il a besoin d'aide. Comment Wassim peut-il le soigner ?`,
    ],
    mood: 'wonder',
    choices: [
      {
        id: 'hug-tree',
        text: 'Faire un gros câlin à l\'arbre.',
        nextPage: 'ch5-s1',
        tag: 'love',
        emoji: '🌳',
      },
      {
        id: 'sing-tree',
        text: 'Chanter une chanson douce pour l\'arbre.',
        nextPage: 'ch5-s2',
        tag: 'care',
        emoji: '🎶',
      },
      {
        id: 'water-tree',
        text: 'Donner un peu de son eau magique à l\'arbre.',
        nextPage: 'ch5-s3',
        tag: 'generosity',
        emoji: '💧',
      },
    ],
  },

  'ch5-s1': {
    id: 'ch5-s1',
    chapter: 5,
    chapterTitle: 'Le Royaume Vert',
    paragraphs: [
      `Wassim ouvre ses bras et fait le plus grand câlin du monde à l'Arbre de Vie. Il serre le tronc très fort. — « Je suis là, dit-il. Je suis avec toi. »`,
      `L'arbre tremble. Pas de peur. De joie. Il y a si longtemps que personne ne lui a fait de câlin ! Les branches sèches bougent doucement. Pas beaucoup. Mais assez pour montrer qu'il a entendu.`,
      `— « Tu es gentil, petit garçon, » murmure l'arbre d'une voix grave et douce. « Ta gentillesse est comme de l'eau pour moi. Elle me donne des forces. »`,
    ],
    mood: 'peace',
    next: 'ch5-kindness-test',
  },

  'ch5-s2': {
    id: 'ch5-s2',
    chapter: 5,
    chapterTitle: 'Le Royaume Vert',
    paragraphs: [
      `Wassim chante la plus douce des chansons. Pas une chanson qu'il connaît. Une chanson qu'il invente, là, tout de suite. Avec des mots simples. « Arbre, arbre, magnifique arbre. Tu es si grand. Tu es si fort. »`,
      `Les feuilles mortes au sol tremblent. Elles bougent ! L'une d'elles vole et se pose sur une branche. Elle devient verte ! Juste une petite feuille, mais verte !`,
      `L'arbre soupire de soulagement. « Ta chanson est douce comme la pluie de printemps, dit-il. Merci, petit chanteur. »`,
    ],
    mood: 'peace',
    next: 'ch5-kindness-test',
  },

  'ch5-s3': {
    id: 'ch5-s3',
    chapter: 5,
    chapterTitle: 'Le Royaume Vert',
    paragraphs: [
      `Wassim regarde ses mains. Les trois couleurs y brillent. Rouge, jaune, bleu. Il les pose sur l'arbre et dit : « Prends un peu de ma magie. J'en ai assez pour toi. »`,
      `Les couleurs coulent de ses mains dans le tronc de l'arbre. L'arbre se redresse ! Ses branches bougent ! Ses racines tremblent dans la terre ! Mais les couleurs de Wassim faiblissent un peu.`,
      `— « Tu m'as donné ta magie ? » dit l'arbre étonné. « Personne n'a jamais fait ça. Tu es le plus gentil des enfants, Wassim. »`,
    ],
    mood: 'peace',
    next: 'ch5-kindness-test',
    shaykhSpeaks: 'Le prophète Muhammad (paix sur lui) a dit : « Quiconque est gentil envers les créatures de Dieu, Dieu est gentil envers lui. » Wassim, tu es gentil avec tout le monde. Même avec les arbres !',
  },

  'ch5-kindness-test': {
    id: 'ch5-kindness-test',
    chapter: 5,
    chapterTitle: 'Le Royaume Vert',
    paragraphs: [
      `L'Arbre de Vie sourit. Ses branches s'ouvrent et, tout en haut, un cristal vert brille. Le dernier cristal ! Le cristal de la gentillesse !`,
      `— « Tu l'as mérité, dit l'arbre. Tu as été gentil avec moi. Maintenant, je vais te confier un dernier défi. Regarde autour de toi. Tous ces animaux ont besoin d'aide. »`,
      `Wassim regarde. L'écureuil a faim. La biche a soif. Le lapin a froid. Il y a beaucoup à faire. Comment peut-il aider tout le monde ?`,
    ],
    mood: 'wonder',
    next: 'ch5-choice',
  },

  'ch5-choice': {
    id: 'ch5-choice',
    chapter: 5,
    chapterTitle: 'Le Royaume Vert',
    paragraphs: [
      `Tous les animaux regardent Wassim. L'écureuil, la biche, le lapin, le hibou. Ils espèrent. Wassim veut les aider tous. Mais il doit trouver la meilleure façon.`,
    ],
    mood: 'wonder',
    choices: [
      {
        id: 'share-all',
        text: 'Partager tout ce qu\'il a avec chacun.',
        nextPage: 'ch5-c1',
        tag: 'generosity',
        emoji: '💚',
      },
      {
        id: 'teach-help',
        text: 'Apprendre aux animaux à s\'aider entre eux.',
        nextPage: 'ch5-c2',
        tag: 'wisdom',
        emoji: '🤝',
      },
      {
        id: 'plant-seeds',
        text: 'Planter des graines avec les animaux pour l\'avenir.',
        nextPage: 'ch5-c3',
        tag: 'nature',
        emoji: '🌱',
      },
    ],
  },

  'ch5-c1': {
    id: 'ch5-c1',
    chapter: 5,
    chapterTitle: 'Le Royaume Vert',
    paragraphs: [
      `Wassim regarde ses couleurs magiques. Rouge, jaune, bleu. Il souffle sur ses mains et les couleurs se dispersent dans la forêt. Chaque animal reçoit un peu de magie !`,
      `L'écureuil trouve plein de noix. La biche trouve un ruisseau d'eau claire. Le lapin trouve un nid chaud. Le hibou trouve des graines. Tout le monde est heureux !`,
      `Les couleurs de Wassim faiblissent. Mais son cœur est plein de joie. Donner, c'est la plus belle chose du monde !`,
    ],
    mood: 'triumph',
    next: 'ch5-fragment',
  },

  'ch5-c2': {
    id: 'ch5-c2',
    chapter: 5,
    chapterTitle: 'Le Royaume Vert',
    paragraphs: [
      `— « Écoutez-moi ! » dit Wassim. Les animaux se rassemblent. « Si on s'aide entre nous, personne n'aura besoin d'être triste ! » L'écureuil peut grimper aux arbres pour trouver des noix. La biche peut sentir l'eau. Le lapin peut creuser des terres chaudes.`,
      `Les animaux se regardent. Puis ils sourient. Ils commencent à s'entraider ! L'écureuil jette des noix au hibou. La biche montre le chemin de l'eau au lapin. C'est beau à voir !`,
      `— « Ensemble, on est plus forts ! » dit Wassim. Et le cristal vert brille au sommet de l'arbre !`,
    ],
    mood: 'triumph',
    next: 'ch5-fragment',
  },

  'ch5-c3': {
    id: 'ch5-c3',
    chapter: 5,
    chapterTitle: 'Le Royaume Vert',
    paragraphs: [
      `Wassim ramasse des graines par terre. Il montre aux animaux comment les planter. « Vous mettez la graine dans la terre. Vous arrosez. Et vous attendez avec patience. »`,
      `Tous les animaux plantent des graines ensemble. L'écureuil, la biche, le lapin, le hibou. Ils travaillent comme une grande équipe. Et sous leurs pattes, de petites pousses vertes commencent à sortir !`,
      `— « C'est pour plus tard, dit Wassim. Aujourd'hui on plante. Demain on récolte. C'est comme ça que la nature fonctionne ! » L'Arbre de Vie est fier de lui.`,
    ],
    mood: 'triumph',
    next: 'ch5-fragment',
  },

  'ch5-fragment': {
    id: 'ch5-fragment',
    chapter: 5,
    chapterTitle: 'Le Royaume Vert',
    paragraphs: [
      `Le cristal vert tombe doucement de l'arbre. Il vole vers Wassim et se pose dans ses mains. Il est frais comme la rosée du matin. Il sent bon la terre mouillée.`,
      `Quatre couleurs ! Rouge, jaune, bleu, VERT ! Wassim a les quatre couleurs ! Ses mains brillent comme un arc-en-ciel miniature ! C'est la chose la plus magique qu'il ait jamais vue !`,
      `La forêt s'éveille autour de lui. Les feuilles poussent sur les arbres. Les fleurs s'ouvrent. La rivière coule. Tout est vert et vivant !`,
    ],
    mood: 'triumph',
    next: 'ch5-flowers',
  },

  'ch5-flowers': {
    id: 'ch5-flowers',
    chapter: 5,
    chapterTitle: 'Le Royaume Vert',
    paragraphs: [
      `Le Royaume Vert est magnifique ! Les arbres dansent dans le vent. Les fleurs chantent. Les papillons volent partout. Les animaux jouent et rient !`,
      `— « Merci, Wassim ! » crient tous les animaux ensemble. « Tu as sauvé notre forêt ! Tu es le meilleur ! » L'écureuil fait un salut. La biche s'incline. Le hibou applaudit avec ses ailes.`,
      `L'Arbre de Vie secoue ses branches. Des feuilles vertes volent dans l'air comme des confettis. C'est la fête dans la forêt !`,
    ],
    mood: 'triumph',
    next: 'ch5-next',
  },

  'ch5-next': {
    id: 'ch5-next',
    chapter: 5,
    chapterTitle: 'Le Royaume Vert',
    paragraphs: [
      `Papillon vole autour de Wassim, tout excité. Ses ailes brillent de toutes les couleurs maintenant ! Rouge, jaune, bleu, vert ! Il est le plus beau papillon du monde !`,
      `— « Tu as les quatre couleurs, Wassim ! dit Papillon. Tu es le seul qui pouvait les retrouver. Parce que tu es courageux, joyeux, calme et gentil. Tu as tout ! »`,
      `Wassim sourit. Il est fier. Lui, le petit frère. Lui, le plus petit. Il a fait quelque chose de grand. Quelque chose que même Souhayl et Nawfel n'ont jamais fait.`,
    ],
    mood: 'wonder',
    next: 'ending-gather',
  },

  // ═══════════════════════════════════════════
  // ENDING : LES COULEURS RETROUVÉES
  // ═══════════════════════════════════════════
  'ending-gather': {
    id: 'ending-gather',
    chapter: 6,
    chapterTitle: 'Les Couleurs Retrouvées',
    paragraphs: [
      `Wassim est de retour au Pays Sans Couleurs. Mais cette fois, il a les quatre couleurs dans ses mains. Et les quatre royaumes sont derrière lui, vivants et joyeux.`,
      `Tous les habitants sont là. Les animaux rouges, jaunes, bleus et verts. Le renard, le dauphin, la licorne, l'écureuil. Même les gens gris du pays sont venus !`,
      `Papillon vole au-dessus de tout le monde. — « C'est le moment ! dit-il. Wassim va ramener les couleurs dans le monde ! »`,
    ],
    mood: 'wonder',
    next: 'ending-magic',
  },

  'ending-magic': {
    id: 'ending-magic',
    chapter: 6,
    chapterTitle: 'Les Couleurs Retrouvées',
    paragraphs: [
      `Wassim lève ses mains en l'air. Les quatre couleurs brillent. Rouge. Jaune. Bleu. Vert. Elles tournent, tournent, tournent dans les airs !`,
      `Les couleurs se mélangent. Elles font des spirales magiques. Des traînées de lumière. Des étoiles qui dansent. C'est le plus beau spectacle du monde !`,
      `Et maintenant, Wassim doit choisir. Que faire avec toute cette magie ?`,
    ],
    mood: 'triumph',
    next: 'ending-choice',
  },

  'ending-choice': {
    id: 'ending-choice',
    chapter: 6,
    chapterTitle: 'Les Couleurs Retrouvées',
    paragraphs: [
      `Les quatre couleurs flottent devant Wassim. Elles attendent. Tout le monde attend. Que va faire Wassim avec cette magie merveilleuse ?`,
    ],
    mood: 'wonder',
    choices: [
      {
        id: 'rainbow',
        text: 'Faire le plus beau arc-en-ciel du monde !',
        nextPage: 'ending-rainbow',
        tag: 'wonder',
        emoji: '🌈',
      },
      {
        id: 'share',
        text: 'Partager les couleurs avec Souhayl et Nawfel !',
        nextPage: 'ending-fraternal',
        tag: 'love',
        emoji: '💛',
      },
      {
        id: 'create',
        text: 'Créer quelque chose de magique et de nouveau...',
        nextPage: 'ending-create-choice',
        tag: 'creativity',
        emoji: '🎨',
      },
    ],
  },

  'ending-rainbow': {
    id: 'ending-rainbow',
    chapter: 6,
    chapterTitle: 'Les Couleurs Retrouvées',
    paragraphs: [
      `Wassim souffle sur les couleurs. POUF ! Un immense arc-en-ciel apparaît dans le ciel ! Rouge, orange, jaune, vert, bleu, violet ! Tous les couleurs du monde !`,
      `L'arc-en-ciel traverse tout le ciel. Il est si grand qu'on peut le voir de partout. Les gens gris regardent en haut et sourient. Pour la première fois depuis très longtemps, ils sourient !`,
      `Les couleurs coulent de l'arc-en-ciel comme de la pluie légère. Elles touchent le sol, les arbres, les maisons. Le monde entier se colore ! Le Pays Sans Couleurs n'existe plus. Maintenant, c'est le Pays de Toutes les Couleurs !`,
    ],
    mood: 'ending',
    isEnding: true,
    endingType: 'rainbow',
    illustrationPrompt: 'A magnificent rainbow arching across a colorful magical sky, a small boy standing in the middle with arms raised, colors raining down on a grey world turning colorful, animals and creatures celebrating, joyful and triumphant atmosphere, children book illustration, vivid rainbow colors',
  },

  'ending-fraternal': {
    id: 'ending-fraternal',
    chapter: 6,
    chapterTitle: 'Les Couleurs Retrouvées',
    paragraphs: [
      `Wassim pense à ses frères. Souhayl et Nawfel. Il leur manque. Il veut partager cette magie avec eux. Il souffle sur les couleurs et les envoie dans sa chambre !`,
      `Les couleurs traversent le livre magique et arrivent dans la vraie chambre de Wassim. Elles peignent les murs. Elles colorent les jouets. Elles rendent tout beau !`,
      `Souhayl et Nawfel entrent dans la chambre. « Waouh ! » dit Souhayl. « C'est magnifique ! » dit Nawfel. Wassim leur raconte toute l'aventure. Et ses frères l'écoutent avec de grands yeux émerveillés. Parce que Wassim, le petit frère, est un vrai héros !`,
    ],
    mood: 'ending',
    isEnding: true,
    endingType: 'sharing',
    illustrationPrompt: 'A boys bedroom filling with magical colors flowing from a glowing book, three brothers hugging and laughing together, colorful toys and walls, warm family atmosphere, children book illustration, warm and loving colors',
  },

  'ending-create-choice': {
    id: 'ending-create-choice',
    chapter: 6,
    chapterTitle: 'Les Couleurs Retrouvées',
    paragraphs: [
      `Les couleurs tournent devant Wassim. Il peut créer quelque chose de nouveau. Quelque chose que personne n'a jamais vu. Mais quoi ? Wassim réfléchit très fort.`,
    ],
    mood: 'wonder',
    choices: [
      {
        id: 'guardian',
        text: 'Devenir le Gardien des Couleurs, pour protéger les couleurs à jamais.',
        nextPage: 'ending-guardian',
        tag: 'guardian',
        emoji: '🦋',
      },
      {
        id: 'artist',
        text: 'Ramener les couleurs dans le monde réel pour peindre la joie partout.',
        nextPage: 'ending-dream',
        tag: 'artist',
        emoji: '🖌️',
      },
    ],
  },

  'ending-guardian': {
    id: 'ending-guardian',
    chapter: 6,
    chapterTitle: 'Les Couleurs Retrouvées',
    paragraphs: [
      `Wassim souffle sur les couleurs et elles se posent sur lui. Sur ses bras, sur ses vêtements, dans ses cheveux. Des traces de rouge, de jaune, de bleu et de vert. Comme un tatouage magique !`,
      `— « Tu es le Gardien des Couleurs, dit Papillon avec une voix solennelle. Chaque fois que quelqu'un aura besoin de couleurs, tu seras là. Chaque fois qu'un enfant sera triste, tu lui donneras un peu de magie. »`,
      `Wassim sourit. Il rentre chez lui. Et depuis ce jour, quand il dessine, ses dessins sont magiques. Quand il peint, ses tableaux brillent. Parce que Wassim est le Gardien des Couleurs. Le plus petit des frères. Et le plus magique !`,
    ],
    mood: 'ending',
    isEnding: true,
    endingType: 'guardian',
    illustrationPrompt: 'A small boy glowing with magical colors on his skin and clothes, a protective aura of rainbow light around him, a butterfly companion on his shoulder, standing confidently as a guardian, magical and heroic children book illustration, colorful and warm',
  },

  'ending-dream': {
    id: 'ending-dream',
    chapter: 6,
    chapterTitle: 'Les Couleurs Retrouvées',
    paragraphs: [
      `Wassim prend les couleurs dans ses mains. Il les mélange comme de la peinture. Et il commence à créer ! Il peint un soleil rouge. Des nuages jaunes. Une mer bleue. Des arbres verts. Un monde entier de couleurs !`,
      `Les couleurs sortent du livre et vont dans le monde réel. Elles peignent les rues. Elles colorent les écoles. Elles rendent tout plus joli, plus joyeux, plus vivant !`,
      `Wassim rentre chez lui avec son livre de coloriage. Mais ce n'est plus un livre normal. C'est un livre magique. Chaque fois qu'il ouvre une page et dessine, son dessin prend vie ! Wassim sourit. Il est le Petit Artiste. Et son pinceau, c'est son cœur !`,
    ],
    mood: 'ending',
    isEnding: true,
    endingType: 'artist',
    illustrationPrompt: 'A small boy painting on a magical book, colorful paint swirling out of the pages and filling the real world with colors, houses and trees becoming colorful, a paintbrush in his hand glowing with rainbow light, dreamy and magical children book illustration, all colors of the rainbow',
  },
};

export const firstPageId = 'prologue';
