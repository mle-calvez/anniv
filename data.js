const etapes = {
  1: {
    question: "Où se trouve le trésor ?",
    reponse: "A",
    background: "images/etape1.jpg",
    music: "audio/etape1.mp3",
    suivante: 2,
    message: "Bravo ! Tu as trouvé le trésor de l'étape 1 !"
  },
  2: {
    question: "Quelle est la couleur du dragon ?",
    reponse: "Rouge",
    background: "images/etape2.jpg",
    music: "audio/etape2.mp3",
    suivante: 3,
    message: "Bien joué ! Le dragon est bien rouge !"
  },
  3: {
    question: "Combien de clés y a-t-il ?",
    reponse: "3",
    background: "images/etape3.jpg",
    music: "audio/etape3.mp3",
    suivante: null,
    message: "Félicitations ! Tu as trouvé toutes les clés !"
  }
};
