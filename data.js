const etapes = {
  1: {
    question: "Je suis toujours devant toi mais tu ne peux jamais m’attraper. Qui suis-je ?",
    reponse: "avenir",
    suivante: 2,
    background: "images/etape1.jpg",
    music: "audio/etape1.mp3"
  },
  2: {
    question: "Combien font 12 × 6 ?",
    reponse: "72",
    suivante: 3,
    background: "images/etape2.jpg",
    music: "audio/etape2.mp3"
  },
  3: {
    question: "Mot final du jeu ?",
    reponse: "victoire",
    suivante: null,
    background: "images/etape3.jpg",
    music: "audio/etape3.mp3"
  },
  4: {
    question: "Indice spécial : qui suis-je ?",
    reponse: "énigme",
    suivante: 5,
    background: "images/etape4.jpg",
    music: "audio/etape4.mp3"
  }
  // Tu peux ajouter autant d'étapes que nécessaire
};
