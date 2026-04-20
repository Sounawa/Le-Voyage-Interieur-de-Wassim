import type { StoryPage } from '@/lib/story-types';

export const storyPages: Record<string, StoryPage> = {

  // ═══════════════════════════════════════════
  // PROLOGUE : LE GRENIER DE MÉMÉ
  // ═══════════════════════════════════════════
  prologue: {
    id: 'prologue',
    chapter: 0,
    chapterTitle: 'Le Grenier de Mémé',
    paragraphs: [
      `Il pleuvait sur le petit village ce jeudi après-midi, et Nawfel était assis en haut de l'escalier, les genoux contre la poitrine, dans le grenier de Mémé Khadija. En bas, il entendait la voix de Souhayl — son grand frère — qui lisait dans son grand livre, assis près de la cheminée avec un air sérieux et important.`,
      `Nawfel soupira. Souhayl avait toujours tout : il était plus grand, plus fort, plus intelligent. Mémé disait que Souhayl avait « le cœur d'un lion ». Et lui ? Il avait huit ans — bientôt neuf, se disait-il — mais il se sentait toujours trop petit, trop jeune, comme une ombre derrière son frère.`,
      `Il se leva et commença à fouiller les vieilles boîtes poussiéreuses du grenier. Des robes anciennes, des albums photos jaunis, un coucou cassé... Et puis, tout au fond, sous un vieux plaid, il trouva un carnet en cuir. La couverture était ornée de motifs d'étoiles argentées qui brillaient faiblement dans la pénombre, comme si le carnet respirait.`,
    ],
    mood: 'prologue',
    next: 'prologue-2',
    isChapterStart: true,
  },

  'prologue-2': {
    id: 'prologue-2',
    chapter: 0,
    chapterTitle: 'Le Grenier de Mémé',
    paragraphs: [
      `Nawfel ouvrit le carnet avec précaution. Et soudain — une lumière argentée jaillit comme de l'eau, coulant entre ses doigts, inondant le grenier d'une lueur douce et froide. Les vieilles poutres de bois disparurent. Les boîtes Poussiéreuses fondirent. Le monde entier se dissout.`,
      `Quand la lumière se calma, Nawfel se tenait debout au milieu d'une vaste prairie. L'herbe sous ses pieds était d'un argent brillant, et le ciel au-dessus de lui était d'un noir profond — sans une seule étoile. Pas même la lune. Juste l'obscurité.`,
      `Et puis, une voix. Petite, fine, comme un écho lointain venant du sol. « Enfin... quelqu'un... » murmura-t-elle, à peine audible. Nawfel baissa les yeux.`,
    ],
    mood: 'wonder',
    next: 'prologue-3',
  },

  'prologue-3': {
    id: 'prologue-3',
    chapter: 0,
    chapterTitle: 'Le Grenier de Mémé',
    paragraphs: [
      `Par terre, à ses pieds, une petite étoile tremblait. Elle n'était pas plus grande qu'une pomme, et sa lumière clignotait faiblement, comme une bougie sur le point de s'éteindre. Elle leva vers lui ce qui ressemblait à un petit visage — deux points de lumière pour les yeux, une courbe brillante pour la bouche.`,
      `— « Je m'appelle Lumina, dit-elle d'une voix tremblante mais fière. Je suis une étoile tombée. Le Royaume des Étoiles a perdu sa lumière. Les enfants ont oublié de rêver, et sans rêves... les étoiles meurent. » Elle toussa un petit éclat de lumière. « Tu es Nawfel, n'est-ce pas ? Le Cœur d'Argent de la prophétie ? »`,
      `Nawfel la regarda, incrédule. Lui ? Un héros de prophétie ? C'était plutôt le genre de chose qui arrivait à Souhayl, pas à lui. Mais Lumina le fixait avec ses yeux de lumière, attendant. Que devait-il faire ?`,
    ],
    mood: 'wonder',
    choices: [
      {
        id: 'pick-up',
        text: 'Serrer Lumina contre lui — « Ne t\'inquiète pas ! Je vais t\'aider à retrouver la lumière ! »',
        nextPage: 'prologue-a1',
        tag: 'courage',
        emoji: '🌟',
      },
      {
        id: 'ask-gently',
        text: 'Demander doucement — « Comment puis-je aider ? Dis-moi tout. »',
        nextPage: 'prologue-a2',
        tag: 'empathy',
        emoji: '💙',
      },
      {
        id: 'look-around',
        text: 'Regarder autour avec émerveillement — « C\'est magnifique... Où sommes-nous ? »',
        nextPage: 'prologue-a3',
        tag: 'curiosity',
        emoji: '✨',
      },
    ],
  },

  'prologue-a1': {
    id: 'prologue-a1',
    chapter: 0,
    chapterTitle: 'Le Grenier de Mémé',
    paragraphs: [
      `Nawfel ramassa Lumina dans ses deux mains. Elle était légère comme du coton et tiède comme un petit chat endormi. Et quand ses doigts se refermèrent autour d'elle, sa lumière devint plus forte — un doux halo argenté qui illuminait son visage.`,
      `— « Oh ! murmura Lumina, surprise. Tu as le toucher, Nawfel. Pas la force brute — la douceur. C'est très rare. La plupart des héros essaient d'éteindre les étoiles en les serrant trop fort. Toi, tu les rallumes. » Elle pivota dans ses mains comme un petit soleil. « Viens. Je vais te montrer le chemin vers le Royaume. »`,
      `Nawfel sourit. Pour la première fois de sa vie, quelqu'un disait qu'il avait quelque chose de spécial. Quelque chose que même Souhayl n'avait pas.`,
    ],
    mood: 'wonder',
    zakiSpeaks: 'Tu sais, la plupart des héros pensent que sauver quelqu\'un, c\'est le porter jusqu\'au bout. Mais toi, tu as compris que c\'est juste le ramasser avec douceur. Intelligence ou chance ?',
    next: 'ch1-start',
  },

  'prologue-a2': {
    id: 'prologue-a2',
    chapter: 0,
    chapterTitle: 'Le Grenier de Mémé',
    paragraphs: [
      `— « Comment puis-je aider ? » demanda Nawfel en s'accroupissant près de l'étoile. Ses yeux brillaient de curiosité et de sincérité. Pas de bravade, pas de promesses en l'air. Juste une question simple, posée avec le cœur.`,
      `Lumina cligna de ses yeux lumineux, visiblement touchée. « Personne ne demande jamais comment, murmura-t-elle. Ils veulent juste sauver le monde en courant. Mais toi... » Elle s'illumina un peu plus. « Il y a quatre Fragments d'Étoile cachés dans quatre royaumes différents. Chacun est gardé par un Gardien. Si tu les réunis tous, le ciel retrouvera sa lumière. »`,
      `— « Et si je n'y arrive pas ? » demanda Nawfel. Lumina sourit — un sourire fait d'éclats dorés. « C'est justement parce que tu poses cette question que tu vas y arriver, Cœur d'Argent. »`,
    ],
    mood: 'peace',
    next: 'ch1-start',
  },

  'prologue-a3': {
    id: 'prologue-a3',
    chapter: 0,
    chapterTitle: 'Le Grenier de Mémé',
    paragraphs: [
      `Nawfel tourna la tête dans tous les sens, les yeux écarquillés. La prairie argentée s'étendait à perte de vue, ondulant doucement comme un océan de soie. Au loin, des collines de cristal scintillaient, et des arbres aux feuilles translucides brillaient d'un éclat doux.`,
      `— « C'est magnifique... » souffla-t-il. Lumina flotta jusqu'à son épaule et se posa comme un petit oiseau. « Curieux comme ton frère, dit-elle avec un petit rire. Mais plus doux. Souhayl aurait demandé 'où est le danger' en premier. Toi, tu vois la beauté d'abord. »`,
      `Elle montra l'horizon du bout de sa queue lumineuse. « Le Royaume des Étoiles t'attend, Nawfel. Il est magnifique... et triste. Viens, je vais te tout montrer. »`,
    ],
    mood: 'wonder',
    zakiSpeaks: 'Souhayl aurait demandé où est le danger. Toi, tu te demandes si les fleurs argentées sentent bon. Je ne sais pas si c\'est de la sagesse ou de la distraction, mais j\'adore.',
    next: 'ch1-start',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 1: LE ROYAUME DES ÉTOILES PERDUES
  // ═══════════════════════════════════════════
  'ch1-start': {
    id: 'ch1-start',
    chapter: 1,
    chapterTitle: 'Le Royaume des Étoiles Perdues',
    paragraphs: [
      `Le Royaume des Étoiles aurait dû être le plus bel endroit du monde. Des sentiers d'argent serpentinaient entre des fontaines de cristal, des ponts de lumière enjambaient des rivières de poussière d'étoile, et des maisons sculptées dans la roche lunaire se dressaient comme des palais miniature.`,
      `Mais il n'y avait aucune étoile dans le ciel. Aucune. Juste un noir immense et vide. Et le royaume était silencieux — pas un rire, pas un chant, pas une voix d'enfant qui rêve. Lumina expliqua tout en flottant à côté de Nawfel.`,
      `— « Quatre Gardiens protégeaient autrefois quatre Fragments d'Étoile. Le Gardien du Labyrinthe, la Gardienne de la Forêt, le Gardien de l'Océan et le Gardien de la Montagne. Chacun a caché son fragment dans son royaume. Tu devras les retrouver tous les quatre. »`,
    ],
    mood: 'wonder',
    next: 'ch1-bridge',
    isChapterStart: true,
    illustrationPrompt: 'A vast magical kingdom made of silver and crystal with no stars in the dark sky, paths of starlight, crystal fountains, moonstone houses, a small boy walking with a tiny glowing star on his shoulder, fantasy children book illustration, silver and midnight blue tones',
  },

  'ch1-bridge': {
    id: 'ch1-bridge',
    chapter: 1,
    chapterTitle: 'Le Royaume des Étoiles Perdues',
    paragraphs: [
      `Le premier royaume n'était pas loin, mais pour y arriver, il fallait traverser le Pont de Cristal — un pont étroit et fragile qui enjambait un gouffre sans fond. En bas, une brume argentée tourbillonnait comme un dragon endormi, et Nawfel ne pouvait pas voir le fond.`,
      `Le pont lui-même était fait de cristaux translucides qui résonnaient doucement quand le vent passait, comme des clochettes. Chaque pas de Nawfel faisait chanter les cristaux d'une note différente — un petit concerto sous ses pieds.`,
      `Et puis, quand il arriva au milieu du pont, une voix profonde résonna depuis les cristaux eux-mêmes : « Voyageur... que faut-il pour traverser ? » Le pont tremblait légèrement, attendant sa réponse.`,
    ],
    mood: 'wonder',
    next: 'ch1-bridge-choice',
  },

  'ch1-bridge-choice': {
    id: 'ch1-bridge-choice',
    chapter: 1,
    chapterTitle: 'Le Royaume des Étoiles Perdues',
    paragraphs: [
      `La voix du pont vibrait dans l'air, patiente mais pressante. Les cristaux sous les pieds de Nawfel pulsait doucement, comme un cœur. Il devait répondre — et sa réponse déterminerait si le pont le laisserait passer ou le laisserait tomber.`,
      `Lumina resta silencieuse. C'était son épreuve à lui.`,
    ],
    mood: 'wonder',
    choices: [
      {
        id: 'bridge-strength',
        text: '« De la force ! Un vrai héros n\'a besoin que de ça ! »',
        nextPage: 'ch1-b1',
        tag: 'boldness',
        emoji: '💪',
      },
      {
        id: 'bridge-trust',
        text: '« De la confiance. Il faut croire que l\'on peut traverser. »',
        nextPage: 'ch1-b2',
        tag: 'trust',
        emoji: '🤝',
      },
      {
        id: 'bridge-friendship',
        text: '« De l\'amitié — Lumina est avec moi. Je ne suis pas seul. »',
        nextPage: 'ch1-b3',
        tag: 'friendship',
        emoji: '💛',
      },
    ],
  },

  'ch1-b1': {
    id: 'ch1-b1',
    chapter: 1,
    chapterTitle: 'Le Royaume des Étoiles Perdues',
    paragraphs: [
      `Le pont trembla violemment. « La force seule ne suffit pas ! » gronda la voix. Les cristaux se fissurèrent sous les pieds de Nawfel, et il faillit perdre l'équilibre. Son cœur s'arrêta une seconde.`,
      `Mais le pont ne s'effondra pas. Il se stabilisa, à moitié fissuré mais encore solide. Nawfel traversa en courant, le souffle court. Quand il arriva de l'autre côté, il s'effondra sur l'herbe argentée, le cœur battant.`,
      `Lumina se posa sur son genou. « Il a raison, tu sais. La force, c'est bien. Mais c'est comme un marteau — ça peut construire ou détruire. Tout dépend de la main qui le tient. »`,
    ],
    mood: 'danger',
    next: 'ch1-city',
  },

  'ch1-b2': {
    id: 'ch1-b2',
    chapter: 1,
    chapterTitle: 'Le Royaume des Étoiles Perdues',
    paragraphs: [
      `Les cristaux du pont s'illuminèrent d'un éclat doré. « Bien dit, » murmura la voix, presque tendre. Le pont devint lisse et solide sous les pieds de Nawfel, et une douce lumière le guida jusqu'à l'autre rive.`,
      `Chaque pas résonnait d'une note claire et pure, comme une mélodie ancienne. Nawfel traversa sans difficulté, le cœur léger. Il sentait la confiance du pont sous ses pieds — comme si le monde entier l'encourageait.`,
      `Lumina sourit. « La confiance est plus rare que le courage, Nawfel. N'importe qui peut être courageux un instant. Mais faire confiance — au pont, au chemin, à soi-même — ça demande quelque chose de plus profond. »`,
    ],
    mood: 'peace',
    next: 'ch1-city',
  },

  'ch1-b3': {
    id: 'ch1-b3',
    chapter: 1,
    chapterTitle: 'Le Royaume des Étoiles Perdues',
    paragraphs: [
      `Les cristaux du pont firent une explosion d'étincelles. « L'amitié... oui, » souffla la voix, émue. Et le pont tout entier se transforma — les cristaux devinrent de l'or pur, brillant comme le soleil, et une douce chaleur monta dans les pieds de Nawfel.`,
      `Il traversa sur un pont d'or massif, chaque pas laissant une empreinte lumineuse derrière lui. Et Lumina... Lumina pleurait. De petites larmes de lumière coulaient sur ses joues étoilées. « Tu... tu as mentionné moi ? dit-elle, la voix étranglée. Personne n'a jamais dit que j'étais importante. »`,
      `— « Mais bien sûr que tu es importante, dit Nawfel simplement. Sans toi, je serais encore dans le grenier à chercher des boîtes poussiéreuses. » Lumina éclata de rire — un rire qui fit naître trois petites étoiles dans le ciel noir.`,
    ],
    mood: 'wonder',
    next: 'ch1-city',
  },

  'ch1-city': {
    id: 'ch1-city',
    chapter: 1,
    chapterTitle: 'Le Royaume des Étoiles Perdues',
    paragraphs: [
      `La Cité de Cristal s'élevait devant Nawfel comme un rêve de glace et de lumière. Des tours fines comme des aiguilles montaient vers le ciel vide, des dômes translucides capturent la moindre lueur, et des escaliers en colimaçon descendaient vers des jardins suspendus plein de fleurs luminescentes.`,
      `C'était magnifique. Mais c'était silencieux. Terriblement silencieux. Et sur les toits des maisons, Nawfel vit des étoiles — des étoiles tombées, comme Lumina, assises en rond et immobiles, leurs lueurs réduites à un filet à peine visible. Elles avaient perdu leur éclat.`,
      `Au centre de la ville, sur un trône de cristal, un vieux hibou attendait. Ses plumes étaient faites de cristaux, ses yeux de deux saphirs profonds, et sa voix résonnait comme un carillon ancien.`,
    ],
    mood: 'wonder',
    next: 'ch1-keeper',
  },

  'ch1-keeper': {
    id: 'ch1-keeper',
    chapter: 1,
    chapterTitle: 'Le Royaume des Étoiles Perdues',
    paragraphs: [
      `— « Je suis le Gardien des Étoiles, dit le hibou. Jadis, je veillais sur mille étoiles. Maintenant, je veille sur des cendres. » Il fixa Nawfel de ses yeux saphir. « Le premier Fragment est caché dans le Labyrinthe des Doutes, juste derrière la ville. »`,
      `Il se pencha en avant, et ses plumes de cristal tintinnelèrent. « Mais je te préviens, petit voyageur : le Labyrinthe te montrera des choses que tu ne voudras pas voir. Tes pires doutes. Tes plus grandes peurs. Les pensées que tu caches même à toi-même. »`,
      `Nawfel déglutit. Lumina serra contre son cou. Le hibou les regarda tous les deux, puis ajouta doucement : « Mémé Khadija disait toujours une chose... »`,
    ],
    mood: 'wisdom',
    shaykhSpeaks: 'Mémé Khadija disait toujours : « Le doute est comme la pluie — inconfortable, mais il fait pousser les choses belles. Ne fuis pas l\'orage, Nawfel. Danse dedans. »',
    next: 'ch1-maze',
  },

  'ch1-maze': {
    id: 'ch1-maze',
    chapter: 1,
    chapterTitle: 'Le Royaume des Étoiles Perdues',
    paragraphs: [
      `Le Labyrinthe des Doutes était fait de murs de cristal qui reflétaient tout — le ciel, le sol, et surtout Nawfel. Mais les reflets n'étaient pas normaux. En regardant dans les murs, il se vit sous des formes différentes : un Nawfel minuscule, pas plus grand qu'une fourmi. Un Nawfel avec des lunettes épaisses et des livres empilés. Un Nawfel en larmes.`,
      `Les murs murmuraient : « Trop petit... Trop jeune... Pas assez intelligent comme Souhayl... Toujours dans l'ombre... Tu n'es qu'un bébé... » Les mots venaient de partout, portés par le cristal, et ils s'enfonçaient dans la poitrine de Nawfel comme des aiguilles froides.`,
      `Il essaya de avancer, mais chaque couloir ressemblait au précédent. Chaque mur reflétait une nouvelle version de lui — pire, plus triste, plus ridicule. Son cœur battait fort. Ses jambes tremblaient. Les murmures devenaient des voix, et les voix devenaient des cris.`,
    ],
    mood: 'darkness',
    next: 'ch1-maze-choice',
  },

  'ch1-maze-choice': {
    id: 'ch1-maze-choice',
    chapter: 1,
    chapterTitle: 'Le Royaume des Étoiles Perdues',
    paragraphs: [
      `Les reflets se mirent à bouger. Le Nawfel-minuscule pointa son doigt vers lui. Le Nawfel-pleureur se moqua. Les murs se rapprochèrent, les voix montèrent. Nawfel sentit la panique monter dans sa gorge comme de l'eau chaude. Il devait faire quelque chose — maintenant.`,
    ],
    mood: 'darkness',
    choices: [
      {
        id: 'maze-yell',
        text: 'Crier — « Je ne suis pas trop petit ! Laissez-moi passer ! »',
        nextPage: 'ch1-m1',
        tag: 'defiance',
        emoji: '😤',
      },
      {
        id: 'maze-close-eyes',
        text: 'Fermer les yeux et écouter son cœur — ne plus regarder les murs.',
        nextPage: 'ch1-m2',
        tag: 'inner-peace',
        emoji: '🧘',
      },
      {
        id: 'maze-touch',
        text: 'Tendre la main et toucher le reflet avec douceur.',
        nextPage: 'ch1-m3',
        tag: 'acceptance',
        emoji: '🤲',
      },
    ],
  },

  'ch1-m1': {
    id: 'ch1-m1',
    chapter: 1,
    chapterTitle: 'Le Royaume des Étoiles Perdues',
    paragraphs: [
      `— « JE NE SUIS PAS TROP PETIT ! » hurla Nawfel. Sa voix fit vibrer les murs de cristal. Les reflets se brisèrent — un, deux, trois éclats — et le labyrinthe trembla comme dans un tremblement de terre. Pour un instant, les murmures s'arrêtèrent.`,
      `Mais les reflets se reformèrent. Plus insistants. Plus méchants. « Tu cries parce que tu sais que c'est vrai, » murmurèrent-ils. Le labyrinthe se referma autour de Nawfel, les couloirs devenant de plus en plus étroits. Lumina essaya de le calmer.`,
      `— « Le courage, oui, dit-elle doucement. Mais pas la colère. La colère te rend aussi petit que les murs le disent. Respire, Nawfel. » Il ferma les yeux. Respira. Et lentement, un couloir s'ouvrit devant lui, menant à une petite alcôve où brillait un éclat de lumière argentée — le premier Fragment.`,
    ],
    mood: 'danger',
    next: 'ch1-fragment',
  },

  'ch1-m2': {
    id: 'ch1-m2',
    chapter: 1,
    chapterTitle: 'Le Royaume des Étoiles Perdues',
    paragraphs: [
      `Nawfel ferma les yeux. Totalement. Les murs disparurent. Les reflets n'existaient plus. Il n'y avait que lui, debout dans le noir, et... son propre cœur. Le battement, fort et régulier, comme un tambour dans sa poitrine.`,
      `Boum. Boum. Boum. Avec chaque battement, une couleur apparaissait derrière ses paupières — du rouge, puis de l'or, puis de l'argent. Son cœur ne doutait pas. Son cœur n'avait jamais douté. C'étaient les murs qui doutaient, pas lui.`,
      `Quand il rouvrit les yeux, le labyrinthe avait disparu. Les murs de cristal étaient tombés en poussière d'argent, et devant lui, sur un piédestal de cristal, un petit fragment d'étoile pulsait doucement. « Ton cœur est plus fort que tes doutes, » murmura Lumina avec un sourire ému.`,
    ],
    mood: 'peace',
    next: 'ch1-fragment',
  },

  'ch1-m3': {
    id: 'ch1-m3',
    chapter: 1,
    chapterTitle: 'Le Royaume des Étoiles Perdues',
    paragraphs: [
      `Nawfel s'approcha lentement du mur et tendit la main. Ses doigts touchèrent la surface froide du cristal — et le reflet ne recula pas. Le Nawfel-triste le regarda, attendait. Nawfel posa sa paume contre la surface avec douceur, comme on caresse un visage.`,
      `Le reflet sourit. Et murmura : « Tu t'aimes ? » La question flotta dans l'air comme une bulle de savon. Nawfel hésita. Puis, tout doucement : « Je... j'essaie. » Le sourire du reflet s'élargit. « Essayer, c'est déjà aimer. » Le mur se fissura, et derrière, le Fragment l'attendait.`,
      `— « L'acceptation, dit Lumina d'une voix songeuse. C'est le courage le plus doux. Et le plus rare. » Nawfel prit le Fragment entre ses mains. Il était chaud et vivant.`,
    ],
    mood: 'wisdom',
    next: 'ch1-fragment',
  },

  'ch1-fragment': {
    id: 'ch1-fragment',
    chapter: 1,
    chapterTitle: 'Le Royaume des Étoiles Perdues',
    paragraphs: [
      `Le premier Fragment d'Étoile ! Un petit cristal pas plus grand qu'un pouce, qui pulsait d'une lumière argentée et tiède. Nawfel le tenait dans le creux de sa main, et il sentait quelque chose de magique — comme un mini-soleil qui ne brûlait pas, qui réchauffait sans faire mal.`,
      `Lumina s'illumina d'un éclat plus vif. « Un sur quatre ! » chanta-t-elle en tournant autour de Nawfel comme un petit feu d'artifice. « Tu vois ? Je te l'avais dit — tu as le toucher ! » Le Fragment flotta hors de sa main et vint se loger au-dessus de son épaule gauche, orbitant doucement.`,
      `Nawfel sentit quelque chose changer en lui. Pas de la force, pas de la magie — juste une certitude douce, comme une couverture chaude un soir d'hiver. Il était capable. Il était assez. C'était tout ce qu'il avait besoin de savoir.`,
    ],
    mood: 'triumph',
    next: 'ch1-farewell',
  },

  'ch1-farewell': {
    id: 'ch1-farewell',
    chapter: 1,
    chapterTitle: 'Le Royaume des Étoiles Perdues',
    paragraphs: [
      `Le Gardien Hibou les attendait à la sortie de la ville, perchés sur un lampadaire de cristal. Il fit un petit signe de la tête — un salut silencieux mais respectueux. « Prochain arrêt : la Forêt des Murmures. Attention aux ombres qui parlent. Elles disent toujours des vérités déguisées en mensonges. »`,
      `Nawfel et Lumina s'éloignèrent de la Cité de Cristal, suivant un sentier d'argent qui serpentait à travers des collines de verre. Derrière eux, les étoiles tombées sur les toits brillèrent un peu plus fort — comme si le Fragment récupéré leur avait redonné un peu d'espoir.`,
      `Le chemin menait vers une obscurité grandissante. Des arbres immenses apparaissaient à l'horizon, leurs branches noires comme des doigts cherchant quelque chose dans le ciel vide. La Forêt des Murmures les attendait.`,
    ],
    mood: 'wonder',
    next: 'ch2-start',
    illustrationPrompt: 'A crystal city at night with a boy and a small glowing star walking through silver streets, fallen stars sitting on rooftops like dim lights, no stars in the sky, silver and blue tones, fantasy illustration for children',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 2: LA FORÊT DES MURMURES
  // ═══════════════════════════════════════════
  'ch2-start': {
    id: 'ch2-start',
    chapter: 2,
    chapterTitle: 'La Forêt des Murmures',
    paragraphs: [
      `La Forêt des Murmures n'était pas une forêt normale. Les arbres étaient immenses — plus hauts que les plus grands immeubles — et leurs feuilles n'étaient pas vertes mais d'un gris lumineux, comme de la cendre qui brille. Et chaque feuille murmurait.`,
      `Pas des mots clairs — des chuchotements, des soupirs, des fragments de phrases qui flottaient dans l'air comme des papillons perdus. Nawfel sentait des centaines d'yeux invisibles posés sur lui. Sa nuque picotait. Lumina se blottit plus près de son cou.`,
      `— « Les arbres murmurent les peurs de ceux qui entrent, chuchota Lumina. Ils ne sont pas méchants — ils sont comme des miroirs. Ils reflètent ce que tu as peur d'entendre. Ne les écoute pas trop. » Mais les murmures montaient déjà, comme une marée.`,
    ],
    mood: 'darkness',
    next: 'ch2-whispers',
    isChapterStart: true,
  },

  'ch2-whispers': {
    id: 'ch2-whispers',
    chapter: 2,
    chapterTitle: 'La Forêt des Murmures',
    paragraphs: [
      `Plus Nawfel avançait, plus les murmures devenaient clairs. Et ce qu'ils disaient lui glaça le sang. « Tu n'es pas assez grand... Souhayl est meilleur que toi... Tu n'arriveras jamais... Les grands ne t'écoutent pas... Tu es juste le petit frère... »`,
      `Le pire, c'était la voix. C'était SA voix. La sienne. Les arbres ne parlaient pas avec des voix étrangères — ils utilisaient la propre voix de Nawfel, comme si son cœur avait des haut-parleurs secrets. Chaque mot lui était adressé par lui-même, à lui-même.`,
      `Ses pas ralentirent. Les feuilles grises tremblaient autour de lui, et les murmures se transformaient en chants — une mélopée triste et monotone qui lui donnait envie de s'asseoir et de ne plus jamais se lever. Lumina tira doucement son col.`,
    ],
    mood: 'darkness',
    next: 'ch2-choice-fear',
  },

  'ch2-choice-fear': {
    id: 'ch2-choice-fear',
    paragraphs: [
      `Les murmures devenaient des cris. « Tu es trop petit ! Souhayl ferait mieux ! Tu n'es rien ! Rien du tout ! » Les feuilles tombaient autour de Nawfel comme des larmes grises. Le sol tremblait. Les arbres se penchaient vers lui comme des géants curieux.`,
      `Lumina tremblait contre son épaule. « Nawfel... il faut faire quelque chose... » Sa lumière faiblissait. Les doutes de la forêt étaient si forts qu'ils commençaient même à affecter l'étoile.`,
    ],
    mood: 'darkness',
    choices: [
      {
        id: 'run-away',
        text: 'Couvrir ses oreilles et courir — fuir ces voix horribles !',
        nextPage: 'ch2-f1',
        tag: 'escape',
        emoji: '🏃',
      },
      {
        id: 'listen-patient',
        text: 'S\'arrêter et écouter avec patience — peut-être que les arbres disent autre chose...',
        nextPage: 'ch2-f2',
        tag: 'patience',
        emoji: '🧘',
      },
      {
        id: 'talk-back',
        text: 'Répondre aux arbres calmement — « Je sais que vous avez peur aussi. »',
        nextPage: 'ch2-f3',
        tag: 'bravery',
        emoji: '🗣️',
      },
    ],
    chapter: 2,
    chapterTitle: 'La Forêt des Murmures',
  },

  'ch2-f1': {
    id: 'ch2-f1',
    chapter: 2,
    chapterTitle: 'La Forêt des Murmures',
    paragraphs: [
      `Nawfel courut. Il courut comme il n'avait jamais couru — les bras sur les oreilles, les yeux fermés, zigzaguant entre les troncs noirs. Les branches lui griffaient les joues, les racines lui faisaient trébucher, mais il ne s'arrêtait pas. Les murmures le suivaient, couraient avec lui.`,
      `Il courut si longtemps qu'il finit par s'effondrer contre un arbre, haletant, les poumons brûlants. Les murmures s'étaient arrêtés. Le silence était total. Et dans ce silence, Nawfel entendit autre chose — un petit bruit, comme du verre qui pleure.`,
      `Lumina se posa devant lui, sa lumière revenue mais faible. « Tu ne peux pas fuir tes peurs, Nawfel. Elles te connaissent mieux que ton ombre. Elles savent exactement où tu vas, parce qu'elles sont en toi. » Nawfel regarda autour de lui. Il était perdu. Mais quelque chose brillait au loin.`,
    ],
    mood: 'darkness',
    next: 'ch2-ondine',
  },

  'ch2-f2': {
    id: 'ch2-f2',
    chapter: 2,
    chapterTitle: 'La Forêt des Murmures',
    paragraphs: [
      `Nawfel s'arrêta. Ferma les yeux. Et au lieu de courir, il écouta. Vraiment écouta. Les murmures étaient violents au début — « Trop petit ! Trop faible ! » — mais quand il ne réagit pas, quelque chose changea. Les voix devinrent plus douces. Plus tristes.`,
      `« Personne ne nous écoute... Personne ne reste... » murmuraient les arbres. Leurs voix n'étaient plus méchantes — elles étaient blessées. Nawfel ouvrit les yeux et regarda les feuilles trembler. Et il comprit : les arbres ne se moquaient pas de lui. Ils avaient PEUR. Ils reflétaient ses peurs parce qu'ils étaient eux-mêmes des rêves d'enfants qui avaient eu peur.`,
      `— « Vous aussi, vous avez peur ? » demanda-t-il doucement. Les feuilles cessèrent de trembler. Un silence étonné régna dans la forêt. Puis, tout doucement, un chemin s'ouvrit entre les arbres, comme si la forêt elle-même le remerciait.`,
    ],
    mood: 'wisdom',
    next: 'ch2-ondine',
  },

  'ch2-f3': {
    id: 'ch2-f3',
    chapter: 2,
    chapterTitle: 'La Forêt des Murmures',
    paragraphs: [
      `Nawfel leva la tête et regarda les arbres droit dans leurs troncs noirs. « Je sais que vous avez peur, dit-il calmement. Moi aussi. » Sa voix était douce mais ferme, comme celle de Mémé Khadija quand elle racontait ses histoires. « Mais la peur ne nous rend pas plus petits. Elle nous rend plus humains. »`,
      `Les murmures s'arrêtèrent. Un silence total régna dans la forêt. Puis, une voix d'arbre — plus douce que les autres — murmura : « Personne ne nous a jamais parlé comme ça... Personne n'a jamais admis avoir peur... » Les feuilles grises se mirent à briller d'un éclat doré, comme si le soleil venait de naître en elles.`,
      `Un large chemin s'ouvrit devant Nawfel, bordé d'arbres qui inclinaient leurs branches en signe de respect. « Passe, voyageur, » chantaient les feuilles. « Passe, et que ta lumière chasse nos ombres. »`,
    ],
    mood: 'peace',
    next: 'ch2-ondine',
  },

  'ch2-ondine': {
    id: 'ch2-ondine',
    chapter: 2,
    chapterTitle: 'La Forêt des Murmures',
    paragraphs: [
      `Au bord d'un petit ruisseau d'argent, une créature était assise sur une pierre. Elle avait la forme d'une larme — un corps translucide, doux et fluide, avec de grands yeux brillants comme des gouttes de pluie. Et elle pleurait. De vraies larmes — pas de la tristesse, mais des larmes de cristal qui tombaient dans le ruisseau en faisant des sons de carillon.`,
      `— « Ne me regarde pas comme ça, » dit la créature sans lever les yeux. « Je suis perdue. Je ne retrouve plus mon chemin vers l'Océan. Je suis Ondine. Je suis un rêve... un rêve qui s'est égaré. » Sa voix était douce comme l'eau sur les galets.`,
      `Nawfel s'agenouilla près d'elle. Elle était si petite, si fragile — comme une bulle de savon qui pourrait éclater à tout moment. Le ruisseau coulait derrière elle, et de l'autre côté, le chemin continuait. Mais Ondine ne pouvait pas traverser seule. Elle avait trop peur de l'eau.`,
    ],
    mood: 'darkness',
    next: 'ch2-help-choice',
  },

  'ch2-help-choice': {
    id: 'ch2-help-choice',
    chapter: 2,
    chapterTitle: 'La Forêt des Murmures',
    paragraphs: [
      `Ondine regarda le ruisseau avec des yeux pleins de peur. « Il est trop large pour moi... Si je tombe, je me dissous dans l'eau. Je disparais. » Elle serra ses petites mains translucides. « Mais je dois traverser... L'Océan est de l'autre côté. C'est là que je dois aller. »`,
      `Nawfel regarda le ruisseau. Il n'était pas si large — peut-être trois mètres — mais pour Ondine, c'était un océan. Comment pouvait-il l'aider ?`,
    ],
    mood: 'darkness',
    choices: [
      {
        id: 'carry-her',
        text: 'La porter sur son dos — « Monte ! Je te fais traverser ! »',
        nextPage: 'ch2-h1',
        tag: 'sacrifice',
        emoji: '💪',
      },
      {
        id: 'teach-swim',
        text: 'Lui apprend à nager — « L\'eau n\'est pas ton ennemi, Ondine. Viens, je vais t\'apprendre. »',
        nextPage: 'ch2-h2',
        tag: 'teaching',
        emoji: '🏊',
      },
      {
        id: 'build-bridge',
        text: 'Construire un pont avec des branches — utiliser son intelligence pour trouver une solution.',
        nextPage: 'ch2-h3',
        tag: 'creativity',
        emoji: '🏗️',
      },
    ],
  },

  'ch2-h1': {
    id: 'ch2-h1',
    chapter: 2,
    chapterTitle: 'La Forêt des Murmures',
    paragraphs: [
      `— « Monte sur mon dos ! » dit Nawfel en s'accroupissant. Ondine hésita, puis se laissa glisser sur son dos. Elle était légère comme une plume, mais froide comme la glace. Nawfel entra dans le ruisseau — l'eau lui montait aux genoux, puis aux cuisses. C'était glacial.`,
      `Le courant était fort. Il emportait les jambes de Nawfel, qui lutta pour rester debout. Ondine se serra contre lui, tremblant de tout son petit corps. Nawfel glissa sur une pierre — son cœur fit un bond — mais il se rattrapa. Pas à pas, il traversa, les dents serrées, les muscles brûlants.`,
      `Quand il arriva de l'autre côté, il s'effondra sur l'herbe, trempé et tremblant. Ondine glissa de son dos et le regarda avec ses grands yeux brillants. « Tu as risqué ta vie pour moi... pourquoi ? » demanda-t-elle, incrédule. Nawfel sourit, essoufflé : « Parce que tu avais besoin d'aide. C'est tout. »`,
    ],
    mood: 'danger',
    next: 'ch2-friendship',
  },

  'ch2-h2': {
    id: 'ch2-h2',
    chapter: 2,
    chapterTitle: 'La Forêt des Murmures',
    paragraphs: [
      `— « L'eau n'est pas ton ennemi, Ondine, » dit Nawfel doucement. Il s'assit au bord du ruisseau et trempa sa main dans l'eau. « Regarde. Elle est froide, oui. Mais elle ne mord pas. Elle caresse. » Il fit onduler l'eau entre ses doigts. « Tu veux essayer ? »`,
      `Ondine approcha sa main tremblante de l'eau. La toucha. Retira. La toucha de nouveau. « C'est... c'est doux, » murmura-t-elle, surprise. Nawfel la guida pas à pas — d'abord le bout des doigts, puis la main, puis les pieds. Ils entrèrent ensemble dans le ruisseau, Nawfel tenant sa main. Et ils traversèrent.`,
      `Quand ils atteignirent l'autre rive, Ondine regarda ses pieds mouillés et sourit. « Tu m'as donné quelque chose de plus précieux qu'un passage, dit-elle. Tu m'as donné du courage. Et ça, personne ne me l'avait jamais offert. »`,
    ],
    mood: 'peace',
    next: 'ch2-friendship',
  },

  'ch2-h3': {
    id: 'ch2-h3',
    chapter: 2,
    chapterTitle: 'La Forêt des Murmures',
    paragraphs: [
      `Nawfel regarda autour de lui et repéra des branches tombées, des pierres plates, des lianes. Son cerveau commença à travailler — comme quand il construisait des cabanes avec Souhayl. Il ramassa les branches, les posa sur les pierres du ruisseau, les fixa avec des lianes. C'était bancal, un peu de travers, mais ça tenait.`,
      `— « Voilà ! » dit-il fier de lui. Le pont tremblait quand on marchait dessus, mais il soutenait le poids d'Ondine. Elle traversa prudemment, chaque pas faisant craquer les branches. De l'autre côté, elle se retourna, émerveillée. « Tu as utilisé ton intelligence ET ta gentillesse, dit Lumina avec admiration. Le combo parfait. »`,
      `Nawfel traversa à son tour. Le pont tint. À peine. Mais il tint. « Ça n'a pas besoin d'être parfait, dit Nawfel en souriant. Ça a juste besoin de fonctionner. »`,
    ],
    mood: 'wonder',
    next: 'ch2-friendship',
  },

  'ch2-friendship': {
    id: 'ch2-friendship',
    chapter: 2,
    chapterTitle: 'La Forêt des Murmures',
    paragraphs: [
      `Nawfel et Ondine marchèrent côte à côte à travers la forêt. Les arbres ne murmuraient plus — ils chantaient doucement, une berceuse ancienne. Ondine raconta son histoire : elle était un rêve d'enfant — le rêve de nager dans un océan infini. Mais l'enfant avait grandi et avait oublié. Le rêve s'était perdu dans la Forêt des Murmures.`,
      `— « Les rêves oubliés finissent ici, » dit Ondine tristement. « On attend, on attend... et puis on devient des arbres. Des murmures. On oublie qu'on était un rêve. » Nawfel sentit une grosse boule dans sa gorge. Il promit : « Je vais t'aider à retrouver ton chemin, Ondine. Je te le promets. »`,
      `Lumina, qui flottait silencieusement depuis un moment, parla doucement.`,
    ],
    mood: 'peace',
    zakiSpeaks: 'Tu sais, Nawfel, les grands frères comme Souhayl ont le courage du lion. Ils foncent, ils combattent, ils gagnent. Mais toi... tu as quelque chose de plus rare. La tendresse. Ne la perds jamais. Le monde en a cruellement besoin.',
    next: 'ch2-fragment',
  },

  'ch2-fragment': {
    id: 'ch2-fragment',
    chapter: 2,
    chapterTitle: 'La Forêt des Murmures',
    paragraphs: [
      `Au cœur de la forêt se dressait un arbre — le plus vieux, le plus immense de tous. Son tronc était large comme une maison, et ses racines plongeaient profondément dans la terre comme des doigts anciens. Et au centre du tronc, Nawfel vit quelque chose briller — une lumière douce et bleue.`,
      `— « C'est mon arbre, murmura Ondine. Mon cœur de rêve. Le Fragment est là-dedans. » Elle approcha de l'arbre et posa sa main sur le tronc. L'écorce pulsa doucement, comme un cœur. Et Ondine comprit : elle devait choisir de donner.`,
      `— « Un rêve partagé brille deux fois plus fort, » dit Ondine en souriant. Elle referma les yeux, et l'arbre s'illumina de l'intérieur. Le deuxième Fragment d'Étoile émergea doucement du tronc, flottant vers Nawfel comme une bulle de lumière bleue. « Prends-le, Nawfel. Et n'oublie pas de rêver. »`,
    ],
    mood: 'triumph',
    next: 'ch2-goodbye',
  },

  'ch2-goodbye': {
    id: 'ch2-goodbye',
    chapter: 2,
    chapterTitle: 'La Forêt des Murmures',
    paragraphs: [
      `Ondine se mit à briller. Pas d'un éclat faible — d'un éclat immense, bleu et argenté, qui illuminait toute la forêt. Son corps translucide commença à flotter, s'élevant doucement vers le ciel noir. « Merci, Nawfel, » dit-elle, sa voix devenant un chant. « Je vais retrouver l'Océan. Peut-être qu'on se retrouvera ? »`,
      `Elle devint de plus en plus petite, de plus en plus lumineuse, jusqu'à n'être plus qu'un point dans le ciel. Puis, comme une étoile, elle se fixa dans l'obscurité. Une nouvelle étoile. Deux étoiles maintenant brillaient dans le ciel du Royaume — le Fragment que Nawfel portait et Ondine, devenue rêve-réalisé.`,
      `— « Deux sur quatre ! » chantonna Lumina en faisant une pirouette. Nawfel regarda la nouvelle étoile et sourit. Il avait sauvé un rêve. Pas avec de la force. Avec de la gentillesse. Et c'était la plus belle chose qu'il ait jamais faite.`,
    ],
    mood: 'peace',
    next: 'ch3-start',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 3: L'OCÉAN DES LARMES
  // ═══════════════════════════════════════════
  'ch3-start': {
    id: 'ch3-start',
    chapter: 3,
    chapterTitle: "L'Océan des Larmes",
    paragraphs: [
      `L'Océan des Larmes n'était pas fait d'eau salée. Il était fait de larmes cristallisées — des millions de gouttes transparentes, bleues et argentées, qui s'étendaient à perte de vue. Chaque larme brillait faiblement, et en regardant dedans, on pouvait voir des images floues — des visages, des sourires, des pleurs.`,
      `Chaque larme était la tristesse de quelqu'un. Un enfant qui avait perdu son jouet. Un adulte qui regrettait un mot trop dur. Un vieillard qui pensait à un ami disparu. Toutes les larmes du monde, accumulées ici, formaient cet océan immense et silencieux.`,
      `Le rivage était fait de galets lisses et translucides, comme des bonbons de verre. Nawfel marchait pieds nus dessus, et chaque galet résonnait doucement sous ses pas, comme un xylophone géant. L'air sentait la pluie et le sel.`,
    ],
    mood: 'darkness',
    next: 'ch3-shore',
    isChapterStart: true,
  },

  'ch3-shore': {
    id: 'ch3-shore',
    chapter: 3,
    chapterTitle: "L'Océan des Larmes",
    paragraphs: [
      `Assis sur un rocher de cristal, un vieil homme aux cheveux blancs comme la neige et aux yeux grands comme des miroirs collectait des larmes dans de petits pots en verre. Il en avait des centaines, alignés devant lui, chacun avec une étiquette écrite d'une écriture fine et tremblante.`,
      `— « Chaque larme a une histoire, » dit-il sans lever les yeux. Sa voix était grave et douce, comme le bruit des vagues. « Veux-tu en entendre une ? » Il tendit un pot à Nawfel. À l'intérieur, une larme dorée flottait, et Nawfel y vit l'image d'un petit garçon qui pleurait parce qu'il s'était disputé avec son frère.`,
      `Nawfel déglutit. Le garçon dans la larme lui ressemblait étrangement. « Le Fragment d'Étoile est quelque part dans cet océan, » dit Lumina doucement. « Au fond. Tout au fond. » Le vieil homme leva enfin les yeux. « Le fond, oui. Mais le fond est gardé. »`,
    ],
    mood: 'wisdom',
    next: 'ch3-choice-dive',
  },

  'ch3-choice-dive': {
    id: 'ch3-choice-dive',
    chapter: 3,
    chapterTitle: "L'Océan des Larmes",
    paragraphs: [
      `L'océan s'étendait devant Nawfel, vaste et profond. Les larmes cristallisées ondoient doucement, et au loin, une lueur bleue pulsait sous la surface — le Fragment, peut-être. Le vieil homme regardait Nawfel avec patience. « Le chemin jusqu'au fond n'est pas facile, petit. Que veux-tu faire ? »`,
    ],
    mood: 'darkness',
    choices: [
      {
        id: 'dive-immediately',
        text: 'Plonger immédiatement — « J\'y vais ! Pas le temps d\'attendre ! »',
        nextPage: 'ch3-d1',
        tag: 'impulsiveness',
        emoji: '🏊',
      },
      {
        id: 'ask-advice',
        text: 'Demander conseil au vieil homme — « Que dois-je savoir avant de plonger ? »',
        nextPage: 'ch3-d2',
        tag: 'wisdom',
        emoji: '🧓',
      },
      {
        id: 'explore-shore',
        text: 'Explorer le rivage d\'abord — chercher des indices avant de se lancer.',
        nextPage: 'ch3-d3',
        tag: 'caution',
        emoji: '🔍',
      },
    ],
  },

  'ch3-d1': {
    id: 'ch3-d1',
    chapter: 3,
    chapterTitle: "L'Océan des Larmes",
    paragraphs: [
      `Nawfel ne perdit pas une seconde. Il courut et plongea dans l'océan de larmes. L'eau — ou plutôt les larmes — l'engloutit. C'était froid. Terriblement froid. Et lourd. Chaque mouvement était comme nager dans du miel glacé. Les larmes le tiraient vers le bas, comme si toutes les tristesses du monde voulaient le garder avec elles.`,
      `Il lutta. Ses bras brûlaient. Ses poumons criaient. Mais il continua à descendre, entraîné par la lumière bleue au fond. Des images passèrent devant ses yeux — des enfants qui pleurent, des parents séparés, des amis perdus. La tristesse de tout le monde le traversait comme un vent glacial.`,
      `Et puis, il l'atteignit. Une grotte sous-marine, éclairée par une lueur bleue. À l'intérieur, quelque chose d'immense dormait. Nawfel s'approcha, le cœur battant, et il vit : un géant fait d'eau sombre et de larmes anciennes.`,
    ],
    mood: 'danger',
    next: 'ch3-underwater',
  },

  'ch3-d2': {
    id: 'ch3-d2',
    chapter: 3,
    chapterTitle: "L'Océan des Larmes",
    paragraphs: [
      `— « Que dois-je savoir ? » demanda Nawfel. Le vieil homme sourit — un sourire triste et plein de sagesse. Il prit un pot de larmes et le tint contre la lumière. « Le fond est gardé par le Géant du Regret. Il est énorme, il est sombre, et il a l'air terrifiant. Mais écoute bien, Nawfel : il n'est pas méchant. Il est triste. »`,
      `Il reposa le pot. « Le Regret n'est pas un ennemi. C'est un rêve qu'on a abandonné. N'oublie pas ça quand tu le verras. » Nawfel hocha la tête. Les mots du vieil homme résonnaient en lui comme une mélodie.`,
      `— « Mémé disait quelque chose de semblable... » murmura Nawfel.`,
    ],
    mood: 'wisdom',
    shaykhSpeaks: 'Mémé Khadija disait : « Celui qui fait pleurer quelqu\'un porte ses larmes dans son propre cœur. Et celui qui console un cœur brisé porte une étoile dans le sien. »',
    next: 'ch3-underwater',
  },

  'ch3-d3': {
    id: 'ch3-d3',
    chapter: 3,
    chapterTitle: "L'Océan des Larmes",
    paragraphs: [
      `Nawfel marcha le long du rivage, ramassant des coquillages translucides. Chaque coquillage contenait un souvenir — une image miniature, comme un film en miniature. Il en ouvrit un : un petit garçon jouait au football avec son grand frère dans une cour poussiéreuse. Ils riaient. Ils se disputaient. Ils se faisaient un câlin.`,
      `Nawfel sourit — c'était lui et Souhayl. Il rangea le coquillage dans sa poche. Un autre coquillage montrait Mémé Khadija qui racontait une histoire, ses mains dansant dans l'air. Un autre encore montrait le premier jour d'école de Nawfel — ses chaussures neuves, son cartable trop grand. Des moments simples. Des moments précieux.`,
      `Il sentit son cœur se remplir de chaleur. Ces souvenirs n'étaient pas des larmes de tristesse — c'étaient des larmes de tendresse. Nawfel regarda l'océan. « D'accord, dit-il. Maintenant, je suis prêt. » Et il plongea.`,
    ],
    mood: 'peace',
    next: 'ch3-underwater',
  },

  'ch3-underwater': {
    id: 'ch3-underwater',
    chapter: 3,
    chapterTitle: "L'Océan des Larmes",
    paragraphs: [
      `Le monde sous-marin était époustouflant. Des coraux faits de larmes séchées formaient des jardins multicolores. Des poissons de lumière nageaient entre les algues bleues. Des méduses translucides flottaient comme des lanternes. C'était beau — tristement beau — comme un musée de toutes les émotions du monde.`,
      `Et au centre de tout ça, dormant sur un lit de larmes anciennes, un être immense. Le Géant du Regret. Il était fait d'eau sombre — pas de l'eau noire, mais d'un bleu profond, comme le ciel juste avant la nuit. Son corps était formé de vieilles larmes, de regrets accumulés, de rêves non tenus. Il était grand comme une montagne.`,
      `Nawfel nagea vers lui, deux Fragments d'Étoile orbitant autour de lui comme de petits gardiens. Et puis, un œil s'ouvrit. Un œil immense, profond comme un océan dans un océan. Le Géant s'éveilla.`,
    ],
    mood: 'darkness',
    next: 'ch3-giant',
  },

  'ch3-giant': {
    id: 'ch3-giant',
    chapter: 3,
    chapterTitle: "L'Océan des Larmes",
    paragraphs: [
      `Le Géant se redressa. L'eau trembla autour de lui. Ses yeux — deux puits de tristesse sans fond — se posèrent sur Nawfel. Il ne bougea pas pour l'attaquer. Il ne cria pas. Il resta là, immense et immobile, comme une montagne sous la mer.`,
      `— « Pourquoi es-tu venu, petit ? » Sa voix résonnait dans l'eau, grave et lente, comme le murmure d'une baleine. « Personne ne vient ici volontairement. L'Océan des Larmes est le dernier endroit où l'on veut aller. Qu'est-ce qui t'amène au fond de ma solitude ? »`,
      `Nawfel regarda le Géant. Derrière sa taille immense et son air sombre, il vit autre chose — une fatigue immense. Comme si le Géant n'avait pas dormi depuis des siècles. Comme s'il portait le poids de tous les regrets du monde sur ses épaules.`,
    ],
    mood: 'darkness',
    next: 'ch3-giant-choice',
  },

  'ch3-giant-choice': {
    id: 'ch3-giant-choice',
    chapter: 3,
    chapterTitle: "L'Océan des Larmes",
    paragraphs: [
      `Le Géant bloquait le chemin vers la grotte où brillait le troisième Fragment. Il ne le faisait pas exprès — c'était juste qu'il était si grand qu'il remplissait tout l'espace. Nawfel devait trouver un moyen de passer. Mais comment affronter quelque chose d'aussi immense ?`,
      `Lumina tremblait contre son épaule. Le Géant attendait, patient et triste.`,
    ],
    mood: 'darkness',
    choices: [
      {
        id: 'fight-giant',
        text: 'Essayer de se frayer un passage par la force — le pousser, le contourner.',
        nextPage: 'ch3-g1',
        tag: 'combat',
        emoji: '⚔️',
      },
      {
        id: 'hug-giant',
        text: 'Lui faire un câlin — serrer ses bras autour de sa jambe géante.',
        nextPage: 'ch3-g2',
        tag: 'compassion',
        emoji: '🤗',
      },
      {
        id: 'listen-giant',
        text: 'L\'écouter — « Je suis là pour t\'écouter. Raconte-moi ton histoire. »',
        nextPage: 'ch3-g3',
        tag: 'listening',
        emoji: '👂',
      },
    ],
  },

  'ch3-g1': {
    id: 'ch3-g1',
    chapter: 3,
    chapterTitle: "L'Océan des Larmes",
    paragraphs: [
      `Nawfel essaya de pousser le Géant. Il planta ses pieds dans le sable marin et poussa de toutes ses forces. Le Géant ne bougea pas. Pas d'un millimètre. C'était comme essayer de déplacer une planète. Nawfel rebondit et tomba à la renverse dans les algues.`,
      `— « La force ne guérit pas les blessures, petit, » dit doucement le Géant. « Je suis fait de tristesse accumulée. Tu ne peux pas me déplacer comme un meuble. » Il baissa les yeux vers Nawfel, et Nawfel vit quelque chose d'étonnant — de la tendresse. Le Géant n'était pas en colère contre lui. Il était juste triste que Nawfel ait cru que la force était la solution.`,
      `— « Il y a un autre chemin vers le Fragment, » ajouta le Géant en s'effaçant légèrement. « Mais d'abord... reste un peu. Parle-moi. »`,
    ],
    mood: 'danger',
    next: 'ch3-giant-story',
  },

  'ch3-g2': {
    id: 'ch3-g2',
    chapter: 3,
    chapterTitle: "L'Océan des Larmes",
    paragraphs: [
      `Nawfel s'approcha de la jambe du Géant — elle était large comme un tronc d'arbre, froide et humide. Il ouvrit les bras et serra. De toutes ses forces. Ses bras ne faisaient pas le tour — la jambe était trop grosse — mais il serrait quand même.`,
      `Le Géant se figea. Pas de colère. Pas de surprise. De la confusion. Personne — jamais — ne lui avait fait un câlin. Depuis des siècles, depuis des millénaires, personne n'avait touché le Géant du Regret avec tendresse. Une larme tomba de son œil immense — et cette larme ne coula pas. Elle remonta. Elle devint une étoile.`,
      `— « Qu... qu'est-ce que tu fais ? » murmura le Géant, sa voix tremblant pour la première fois. « Personne ne... je ne comprends pas... » Nawfel serrait plus fort. « C'est un câlin, dit-il simplement. Tout le monde en a besoin. Même les géants. »`,
    ],
    mood: 'peace',
    next: 'ch3-giant-story',
  },

  'ch3-g3': {
    id: 'ch3-g3',
    chapter: 3,
    chapterTitle: "L'Océan des Larmes",
    paragraphs: [
      `— « Je suis là pour t'écouter, » dit Nawfel en s'asseyant devant le Géant, comme un enfant s'assoit devant un conteur. « Raconte-moi ton histoire. Je ne suis pas pressé. » Le Géant le regarda, étonné. Un silence long et profond s'installa entre eux.`,
      `Et puis le Géant parla. D'une voix grave et lente, il raconta : « J'étais un rêve. Le rêve d'un enfant qui voulait être aimé. Chaque nuit, l'enfant me rêvait — je grandissais, je devenais fort, je le protégeais. » Sa voix se brisa. « Et puis l'enfant a grandi. Il a oublié de rêver. Et moi... je suis devenu du Regret. »`,
      `Nawfel sentit les larmes monter. Pas de tristesse — de compassion. « Ce n'est pas ta faute, dit-il doucement. Les gens ne choisissent pas d'oublier. La vie leur prend leurs rêves. Mais toi, tu es toujours là. Tu n'as pas disparu. Et ça, c'est déjà quelque chose de beau. »`,
    ],
    mood: 'wisdom',
    next: 'ch3-giant-story',
  },

  'ch3-giant-story': {
    id: 'ch3-giant-story',
    chapter: 3,
    chapterTitle: "L'Océan des Larmes",
    paragraphs: [
      `Le Géant baissa la tête. Ses épaules immenses tremblèrent — pas de colère, pas de douleur — mais quelque chose de plus doux. De plus fragile. Comme un enfant qui pleure après avoir compris quelque chose d'important. « Peut-être... peut-être que j'ai tort d'être en colère contre les enfants qui m'ont oublié... » murmura-t-il.`,
      `Il ouvrit ses mains immenses — des paumes larges comme des lacs — et au centre, enveloppé dans un cocon de vieux rêves et de larmes séchées, le troisième Fragment d'Étoile brillait d'une lumière bleue et dorée. « Prends-le, dit le Géant. Et oublie-moi pas. »`,
      `Lumina, qui avait observé en silence, parla d'une voix douce mais ferme.`,
    ],
    mood: 'peace',
    zakiSpeaks: 'Nawfel... le Géant n\'était pas un ennemi. C\'était un rêve abandonné. Comme beaucoup de choses dans ce monde. Les rêves oubliés, les promesses non tenues, les câlins donnés puis retirés. La différence, c\'est toi — tu n\'abandonnes personne. Rappelle-toi ça toujours.',
    next: 'ch3-fragment',
  },

  'ch3-fragment': {
    id: 'ch3-fragment',
    chapter: 3,
    chapterTitle: "L'Océan des Larmes",
    paragraphs: [
      `Le troisième Fragment ! Nawfel le prit dans ses mains, et les trois Fragments orbitèrent autour de lui — argenté, bleu, doré — comme un petit système solaire personnel. Le Géant du Regret commença à rétrécir. Pas de douleur — juste une transformation douce. Son corps immense se réduisit, se simplifia, devint plus lisse, plus fluide.`,
      `Et quand il eut fini de rétrécir, le Géant n'était plus un géant. C'était une petite baleine bleue — toute ronde, toute douce, avec des yeux gentils et un sourire perpétuel. Elle fit un petit clic joyeux et nagea en cercles autour de Nawfel, le remerciant à sa façon.`,
      `— « Trois sur quatre ! » chanta Lumina. La petite baleine fit un dernier clic, puis nagea vers le large, sa traînée lumineuse marquant l'eau comme un sillage d'étoiles. Nawfel regarda l'océan et sourit. Même la tristesse, au fond, n'était qu'un rêve qui attendait d'être aimé.`,
    ],
    mood: 'triumph',
    next: 'ch4-start',
    illustrationPrompt: 'An underwater scene with a boy holding glowing stars, a gentle giant dissolving into a small blue whale, bioluminescent ocean with coral made of dried tears, colorful fish of light, dreamlike children book illustration',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 4: LA MONTAGNE DES VRAIS RÊVES
  // ═══════════════════════════════════════════
  'ch4-start': {
    id: 'ch4-start',
    chapter: 4,
    chapterTitle: 'La Montagne des Vrais Rêves',
    paragraphs: [
      `La Montagne des Vrais Rêves se dressait devant Nawfel comme un géant endormi. Elle était immense — le sommet disparaissait dans les nuages — et elle brillait de l'intérieur. Pas d'un éclat doré ou argenté, mais d'une lueur chaude et multicolore, comme si des milliers de rêves brillaient à l'intérieur de la roche.`,
      `Le sentier qui montait était raide et sinueux, pavé de pierres luminescentes. Et tout en haut, dans le ciel noir, Nawfel pouvait voir un petit point brillant — là où la Grande Étoile devrait se trouver. Quatre-vingt-dix-neuf pour cent du ciel étaient vides. Mais ce petit point brillait, comme une promesse.`,
      `— « C'est la dernière étape, dit Lumina. Le dernier Fragment... est au sommet. » Sa voix était plus douce que d'habitude, comme si elle savait quelque chose qu'elle n'avait pas encore dit.`,
    ],
    mood: 'wonder',
    next: 'ch4-climb',
    isChapterStart: true,
  },

  'ch4-climb': {
    id: 'ch4-climb',
    chapter: 4,
    chapterTitle: 'La Montagne des Vrais Rêves',
    paragraphs: [
      `Nawfel commença à grimper. Chaque pas révélait un nouveau souvenir — pas les siens, ou peut-être les siens, enfouis si profondément qu'il les avait oubliés. Sur une marche, il vit Souhayl qui lui apprenait à faire du vélo — « Vas-y, Nawfel, je te tiens ! » Sur une autre, Mémé Khadija qui préparait des cookies et lui en glissait un avant le dîner.`,
      `Plus haut, il revit son premier jour d'école — ses chaussures neuves, son cœur battant, et Souhayl qui lui avait dit : « Ne t'inquiète pas, frérot. Le matin, je serai là. » Et il y était. Toujours. Souhayl n'était pas parfait, pensait Nawfel pour la première fois. Mais il était là.`,
      `Les rêves oubliés remontaient avec chaque pas. Des rêves d'enfance — devenir astronaute, inventer une machine à faire pleuvoir des étoiles, apprendre à parler avec les animaux. Des rêves bizarres, amusants, merveilleux. Chacun d'eux brillait dans la montagne, illuminant le sentier.`,
    ],
    mood: 'wonder',
    next: 'ch4-shadow',
  },

  'ch4-shadow': {
    id: 'ch4-shadow',
    chapter: 4,
    chapterTitle: 'La Montagne des Vrais Rêves',
    paragraphs: [
      `Nawfel était à mi-chemin du sommet quand l'obscurité tomba. Pas la nuit — quelque chose de plus dense. Quelque chose de vivant. Une forme noire se matérialisa devant lui, bloquant le sentier. Elle n'avait pas de visage, pas de corps fixe — elle bougeait et ondulait comme de la fumée noire, et deux points rouges brillaient où auraient dû être ses yeux.`,
      `— « Tu ne passeras pas ! » gronda l'Ombre des Rêves Oubliés. Sa voix était un mélange de mille voix — des voix d'enfants, de adultes, de personnes oubliées. « Les rêves appartiennent au passé ! Personne n'y croit plus ! Les enfants d'aujourd'hui ne rêvent plus — ils regardent des écrans ! Les étoiles sont mortes ! FINI ! »`,
      `L'Ombre grandit, dévorant la lumière de la montagne. Les rêves enchâssés dans la roche s'éteignaient un par un. Nawfel recula d'un pas. Ses trois Fragments tremblaient autour de lui. L'Ombre était terrifiante — pas parce qu'elle était méchante, mais parce qu'elle disait des choses qui sonnaient vrai.`,
    ],
    mood: 'danger',
    next: 'ch4-shadow-choice',
  },

  'ch4-shadow-choice': {
    id: 'ch4-shadow-choice',
    chapter: 4,
    chapterTitle: 'La Montagne des Vrais Rêves',
    paragraphs: [
      `L'Ombre des Rêves Oubliés planait au-dessus de Nawfel, immense et menaçante. Les trois Fragments orbitaient autour de lui, leur lumière vacillant face à l'obscurité de l'Ombre. Lumina se blottit contre son cou, tremblant. « Nawfel... » murmura-t-elle. Il devait faire un choix. Le dernier. Le plus important.`,
    ],
    mood: 'danger',
    choices: [
      {
        id: 'use-fragments',
        text: 'Utiliser les 3 fragments comme arme — les lancer contre l\'Ombre avec toute sa force !',
        nextPage: 'ch4-s1',
        tag: 'power',
        emoji: '⚡',
      },
      {
        id: 'share-light',
        text: 'Partager la lumière avec l\'Ombre — tendre les fragments vers elle, doucement.',
        nextPage: 'ch4-s2',
        tag: 'generosity',
        emoji: '🌅',
      },
      {
        id: 'help-shadow',
        text: 'Proposer d\'aider l\'Ombre — « Et si toi aussi, tu avais perdu ta lumière ? »',
        nextPage: 'ch4-s3',
        tag: 'kindness',
        emoji: '💝',
      },
    ],
  },

  'ch4-s1': {
    id: 'ch4-s1',
    chapter: 4,
    chapterTitle: 'La Montagne des Vrais Rêves',
    paragraphs: [
      `Nawfel rassembla les trois Fragments et les lança vers l'Ombre. Ils explosèrent en trois faisceaux de lumière — argenté, bleu, doré — qui percèrent l'obscurité comme des épées. L'Ombre hurla et recula, se recroquevillant sur elle-même, réduite à une tache noire tremblante.`,
      `Mais quelque chose n'allait pas. La lumière blessait l'Ombre — vraiment blessait. Elle se tordait, elle criait — pas de colère, mais de douleur. Et Nawfel sentit quelque chose de froid dans sa poitrine. Est-ce que sauver le monde devait faire mal à quelqu'un ? Est-ce que la lumière devait détruire l'obscurité ?`,
      `Il hésita. Les Fragment retournèrent vers lui, leur éclat diminué. L'Ombre resta là, tremblante, réduite mais pas vaincue. Et Nawfel comprit : utiliser la lumière comme arme, c'était devenir comme l'Ombre. Il devait trouver un autre chemin.`,
    ],
    mood: 'danger',
    next: 'ch4-summit',
  },

  'ch4-s2': {
    id: 'ch4-s2',
    chapter: 4,
    chapterTitle: 'La Montagne des Vrais Rêves',
    paragraphs: [
      `Nawfel s'approcha de l'Ombre, les Fragments dans ses mains ouvertes. « Voilà, dit-il. Prends un peu de lumière. » L'Ombre recula d'abord, méfiante — elle n'avait jamais reçu de lumière, seulement en avait été privée. Mais Nawfel insista, doucement, patiemment.`,
      `L'Ombre tendit un bout de vapeur noire et toucha la lumière. Et quelque chose d'extraordinaire se produisit. L'endroit où l'ombre toucha la lumière devint violet — pas noir, pas blanc, mais un mélange magnifique des deux. L'Ombre poussa un petit cri de surprise.`,
      `— « Qu... qu'est-ce que c'est ? Ça fait... chaud ? » Sa voix n'était plus un grondement — c'était une petite voix perdue, comme celle d'un enfant qui découvre le soleil pour la première fois. L'Ombre recula, puis revint, puis recula encore, fascinée et terrifiée.`,
    ],
    mood: 'wonder',
    next: 'ch4-summit',
  },

  'ch4-s3': {
    id: 'ch4-s3',
    chapter: 4,
    chapterTitle: 'La Montagne des Vrais Rêves',
    paragraphs: [
      `— « Et si toi aussi, tu avais perdu ta lumière ? » demanda Nawfel calmement. L'Ombre se figea. Les deux points rouges qui lui servaient d'yeux clignotèrent. « Qu'est-ce que tu... ? » — « Est-ce que tu te souviens d'avoir été autre chose qu'une ombre ? »`,
      `Le silence dura une éternité. Puis l'Ombre murmura : « Je... je ne me souviens plus. » Sa voix n'était plus menaçante — elle était perdue. Confuse. Comme un rêve qui a oublié ce qu'il rêvait.`,
      `— « Moi non plus, je ne me souvenais pas, dit Nawfel doucement. Avant aujourd'hui, j'avais oublié mes rêves. Mais j'ai trouvé les étoiles en aidant les autres. Peut-être que tu as juste besoin que quelqu'un t'aide à te souvenir de ce que tu étais avant d'être une ombre. »`,
    ],
    mood: 'wisdom',
    next: 'ch4-summit',
  },

  'ch4-summit': {
    id: 'ch4-summit',
    chapter: 4,
    chapterTitle: 'La Montagne des Vrais Rêves',
    paragraphs: [
      `Nawfel atteignit le sommet. La Montagne des Vrais Rêves s'aplatissait en un plateau circulaire, et au centre, un piédestal de cristal attendait. Nawfel s'approcha, le cœur battant. Mais le piédestal était vide. Il n'y avait pas de quatrième Fragment. Pas d'étoile à récupérer.`,
      `— « Où est le dernier Fragment ? » demanda Nawfel, déçu. Lumina flotta jusqu'à lui, sa lumière douce et triste. « Nawfel... il n'y a pas de quatrième Fragment. Il n'y en a jamais eu quatre. La Grande Étoile... » Elle hésita. « La Grande Étoile, c'était toi. Depuis le début. Ton cœur pur. Ta douceur. Ta tendresse. C'est ça, la vraie étoile. »`,
      `Nawfel regarda ses mains. Et il comprit. Chaque acte de gentillesse, chaque moment de patience, chaque câlin donné — tout ça avait nourri une lumière en lui. La lumière la plus puissante du monde n'était pas un cristal ou un fragment. C'était un cœur d'enfant qui se souciait des autres.`,
    ],
    mood: 'wonder',
    shaykhSpeaks: 'Mémé Khadija disait toujours : « La lumière la plus puissante n\'est pas celle qui éclaire la pièce la plus grande. C\'est celle qui brille dans la poitrine d\'un enfant qui se soucie des autres. »',
    next: 'ch4-final-choice',
  },

  'ch4-final-choice': {
    id: 'ch4-final-choice',
    chapter: 4,
    chapterTitle: 'La Montagne des Vrais Rêves',
    paragraphs: [
      `Nawfel sentait la lumière dans sa poitrine — chaude, vivante, immense. Les trois Fragments orbitaient autour de lui, et la Grande Étoile — son propre cœur — commençait à briller si fort qu'elle illuminait le sommet entier de la montagne. Le ciel au-dessus tremblait, comme si les ténèbres elles-mêmes reculaient.`,
      `Lumina flottait devant lui, ses yeux brillants de larmes de lumière. « C'est le moment, Nawfel. Tu peux utiliser cette lumière pour accomplir un vœu. Un seul. Choisis bien. »`,
    ],
    mood: 'wonder',
    choices: [
      {
        id: 'restore-sky',
        text: 'Remettre toutes les étoiles dans le ciel — « Le ciel doit briller pour tout le monde. »',
        nextPage: 'ending-light',
        tag: 'selflessness',
        emoji: '🌌',
      },
      {
        id: 'keep-star',
        text: 'Garder une étoile pour lui — « Je veux me souvenir de ce voyage pour toujours. »',
        nextPage: 'ending-fraternal',
        tag: 'memory',
        emoji: '💫',
      },
      {
        id: 'give-lumina',
        text: 'Donner l\'étoile à Lumina — « Tu as guidé tout le chemin. C\'est à toi. »',
        nextPage: 'ending-guardian',
        tag: 'gratitude',
        emoji: '⭐',
      },
      {
        id: 'share-world',
        text: 'Partager les étoiles avec le monde réel — « Les enfants du vrai monde ont besoin de rêver aussi. »',
        nextPage: 'ending-dream',
        tag: 'sharing',
        emoji: '🌍',
      },
    ],
  },

  // ═══════════════════════════════════════════
  // ENDINGS
  // ═══════════════════════════════════════════
  'ending-light': {
    id: 'ending-light',
    chapter: 4,
    chapterTitle: 'La Montagne des Vrais Rêves',
    title: 'Fin — La Lumière du Ciel',
    paragraphs: [
      `— « Le ciel doit briller pour tout le monde, » dit Nawfel. Et il ouvrit son cœur — littéralement. La lumière jaillit de sa poitrine comme une fontaine d'or et d'argent, montèrent dans le ciel noir, et explosèrent. Des millions d'étoiles apparurent. Pas une, pas dix — des millions. Le ciel entier se mit à briller comme un bijou.`,
      `Le Royaume des Étoiles se transforma. Les couleurs revinrent — le rouge des fleurs, le vert de l'herbe, le bleu des rivières. La musique revint — le chant des oiseaux, le rire des enfants, la mélodie des fontaines. Lumina monta lentement vers le ciel, sa lumière grandissant, grandissant, jusqu'à devenir l'une des étoiles les plus brillantes du ciel nouveau.`,
      `— « Tu es la plus belle étoile de toutes, Nawfel, » dit-elle avant de disparaître dans les cieux. Et Nawfel se réveilla. Dans le grenier de Mémé. Le carnet était ouvert sur ses genoux, et il brillait doucement. Par la fenêtre, à travers la pluie, il pouvait voir le ciel. Et dans le ciel, de nouvelles étoiles — plus brillantes, plus nombreuses qu'avant.`,
    ],
    mood: 'ending',
    isEnding: true,
    endingType: 'light',
  },

  'ending-fraternal': {
    id: 'ending-fraternal',
    chapter: 4,
    chapterTitle: 'La Montagne des Vrais Rêves',
    title: 'Fin — La Lumière Fraternelle',
    paragraphs: [
      `— « Je veux garder une étoile pour moi, » dit Nawfel. Une petite étoile sortit de la lumière et vint se loger dans sa main — tiède, douce, à lui. Et le reste de la lumière monta au ciel, créant des milliers d'étoiles nouvelles. Le ciel brilla. Mais Nawfel garda la sienne, serrée contre sa poitrine.`,
      `Il se réveilla dans le grenier et descendit l'escalier en courant. Souhayl était en bas, son grand livre fermé sur ses genoux. Nawfel s'arrêta devant lui, les yeux brillants. « Souhayl ! J'ai vécu une aventure incroyable ! J'ai sauvé des étoiles ! J'ai rencontré un géant et une créature faite de larmes ! »`,
      `Souhayl le regarda. Et lentement, un sourire apparut sur son visage — un sourire qui ressemblait à celui d'un garçon de dix ans qui a aussi vécu quelque chose de magique. « Moi aussi, frérot, dit-il doucement. Moi aussi. » Et entre les deux frères, l'étoile que Nawfel gardait brilla d'un éclat chaud et tendre — comme un secret partagé, une lumière fraternelle que rien ne pourrait jamais éteindre.`,
    ],
    mood: 'ending',
    isEnding: true,
    endingType: 'fraternal',
  },

  'ending-guardian': {
    id: 'ending-guardian',
    chapter: 4,
    chapterTitle: 'La Montagne des Vrais Rêves',
    title: 'Fin — Le Gardien des Étoiles',
    paragraphs: [
      `— « C'est à toi, Lumina, » dit Nawfel en tendant la lumière vers l'étoile. « Tu as guidé tout le chemin. Sans toi, j'étais juste un petit garçon dans un grenier. » Lumina le regarda, stupéfaite. Ses yeux de lumière se remplirent de larmes — de vraies larmes, cette fois, pas des larmes de cristal.`,
      `— « Nawfel... personne n'a jamais... » Elle ne put finir. La lumière la toucha et la transforma. Elle grandit, grandit, devint immense et brillante — l'étoile la plus éclatante de tout le ciel. L'Étoile du Nord. « Je serai toujours là, Nawfel. Chaque nuit, regarde le ciel. Je serai la plus brillante. Juste pour toi. »`,
      `Et Nawfel devint le Gardien du Royaume des Étoiles. Chaque nuit, quand il dormait, il visitait le royaume — marchant dans les prairies argentées, bavardant avec le Gardien Hibou, jouant avec la petite baleine bleue. Et chaque enfant qui rêvait pouvait voir son étoile à lui — petite, modeste, mais incroyablement tenace — briller dans le ciel aux côtés de Lumina. Le petit frère. Le Gardien. L'étoile qui n'abandonne jamais.`,
    ],
    mood: 'ending',
    isEnding: true,
    endingType: 'guardian',
  },

  'ending-dream': {
    id: 'ending-dream',
    chapter: 4,
    chapterTitle: 'La Montagne des Vrais Rêves',
    title: 'Fin — Les Rêves Partagés',
    paragraphs: [
      `— « Les enfants du vrai monde ont besoin de rêver aussi, » dit Nawfel. Et il fit son vœu — non pas pour lui, pas pour le royaume, mais pour tous les enfants du monde. La lumière monta au ciel du royaume, créant des étoiles. Mais en même temps, quelque chose d'autre se produisit. Le carnet dans le grenier s'illumina.`,
      `Des étoiles en sortirent — pas une, pas deux — des centaines d'étoiles miniatures qui s'envolèrent par la fenêtre du grenier, traversèrent la pluie, et montèrent dans le vrai ciel. Partout dans le monde, des enfants qui dormaient ce soir-là firent des rêves un peu plus brillants. Un peu plus beaux. Un peu plus courageux.`,
      `Et quand Mémé Khadija monta au grenier le lendemain matin, elle trouva Nawfel endormi sur un vieux plaid, le carnet ouvert sur sa poitrine. Son visage était baigné d'une douce lueur argentée. Mémé Khadija sourit — un sourire qui savait. Elle couvrit Nawfel d'une couverture, lui embrassa le front, et murmura : « dors bien, mon petit Cœur d'Argent. » Et dans le ciel de ce matin, les étoiles brillaient encore.`,
    ],
    mood: 'ending',
    isEnding: true,
    endingType: 'dream',
  },
};

export const firstPageId = 'prologue';
