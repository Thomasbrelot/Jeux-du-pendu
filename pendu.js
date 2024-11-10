//on va chercher les élements dans l'HTML
const motElement = document.getElementById('mot');
const mauvaiseLettre = document.getElementById('mauvaise-lettre');
const rejouerBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notificationEle = document.getElementById('notification-container');
const messageFinal = document.getElementById('message-final');
const indice = document.getElementById('indice');
const indiceUser = document.getElementById('indiceUser');
const figureGame = document.querySelectorAll('.figure-game');
const words = [
  {
    word: 'Chaussure',
    info: 'Se porte aux pieds',
    hint: ["S'utilise au quotidien"],
  },
  {
    word: 'Ordinateur',
    info: 'Permet de traiter des données',
    hint: [
      'Appareil électronique',
      'Utilisé pour travailler',
      'Possède un écran et un clavier',
    ],
  },
  {
    word: 'Livre',
    info: 'Contient des histoires',
    hint: [
      'Peut être imprimé',
      'Utilisé pour la lecture',
      'Composé de pages reliées',
    ],
  },
  {
    word: 'Avion',
    info: 'Permet de voyager dans les airs',
    hint: ['Moyen de transport', 'Possède des ailes', 'Utilise des moteurs'],
  },
  {
    word: 'Télévision',
    info: 'Affiche des images et du son',
    hint: [
      'Utilisée pour regarder des programmes',
      'Possède un écran',
      'Peut être connectée à Internet',
    ],
  },
  {
    word: 'Voiture',
    info: 'Moyen de transport terrestre',
    hint: [
      'Utilisée pour se déplacer',
      'Possède quatre roues',
      "Fonctionne à l'essence",
    ],
  },
  {
    word: 'Banane',
    info: 'Fruit jaune courbé',
    hint: [
      'Possède une peau',
      'Riche en potassium',
      'Souvent utilisée dans les smoothies',
    ],
  },
  {
    word: 'Montagne',
    info: 'Grande élévation naturelle du terrain',
    hint: [
      'Peut être enneigée',
      'Propice à la randonnée',
      'Offre de magnifiques paysages',
    ],
  },
  {
    word: 'Guitare',
    info: 'Instrument de musique à cordes',
    hint: [
      'Se joue en grattant les cordes',
      'Utilisée dans de nombreux styles de musique',
      'Possède un manche et une caisse de résonance',
    ],
  },
  {
    word: 'Café',
    info: 'Boisson stimulante',
    hint: [
      'Souvent consommée le matin',
      'Provient des grains de café',
      'Peut être préparée sous différentes formes',
    ],
  },
  {
    word: 'Souris',
    info: "Périphérique d'entrée pour l'ordinateur",
    hint: [
      'Utilisée pour pointer et cliquer',
      'Peut être sans fil',
      'Possède des boutons',
    ],
  },
  {
    word: 'Football',
    info: 'Sport collectif joué avec un ballon',
    hint: [
      'Populaire dans de nombreux pays',
      'Se joue sur un terrain',
      'Le but est de marquer des buts',
    ],
  },
  {
    word: 'Arbre',
    info: "Plante vivace dotée d'une tige ligneuse",
    hint: [
      'Possède des feuilles',
      'Peut produire des fruits',
      "Offre de l'ombre et de l'oxygène",
    ],
  },
  {
    word: 'Piano',
    info: 'Instrument de musique à clavier',
    hint: [
      'Se joue en appuyant sur les touches',
      'Utilisé dans la musique classique',
      'Possède plusieurs octaves',
    ],
  },
  {
    word: 'Pizza',
    info: "Plat italien composé d'une pâte garnie",
    hint: [
      'Cuite au four',
      'Peut avoir diverses garnitures',
      'Populaire dans le monde entier',
    ],
  },
  {
    word: 'Maison',
    info: "Lieu où l'on vit",
    hint: [
      'Contient des chambres',
      'Structure avec un toit',
      'Abri contre le climat',
    ],
  },
  {
    word: 'Train',
    info: 'Moyen de transport ferroviaire',
    hint: [
      'Circule sur des rails',
      'Longue suite de wagons',
      'Transport en commun rapide',
    ],
  },
  {
    word: 'Téléphone',
    info: 'Appareil pour communiquer à distance',
    hint: [
      'Possède des boutons ou un écran tactile',
      'Peut être fixe ou portable',
      'Utilisé pour des appels',
    ],
  },
  {
    word: 'Chocolat',
    info: 'Confiserie sucrée',
    hint: [
      'Brun ou blanc',
      'Fait à base de cacao',
      'Utilisé dans les desserts',
    ],
  },
  {
    word: 'École',
    info: "Lieu d'apprentissage",
    hint: [
      'Enseignement aux enfants',
      'Contient des salles de classe',
      'Lieu de socialisation',
    ],
  },
  {
    word: 'Bateau',
    info: "Moyen de transport sur l'eau",
    hint: [
      'Flotte',
      'Utilisé pour la navigation',
      'Peut être à moteur ou à voile',
    ],
  },
  {
    word: 'Table',
    info: 'Meuble pour poser des objets',
    hint: [
      'Utilisée pour manger',
      'Possède quatre pieds',
      'Présente dans de nombreuses pièces',
    ],
  },
  {
    word: 'Chien',
    info: 'Animal de compagnie fidèle',
    hint: ['Aime jouer', 'Aboyer', "L'un des meilleurs amis de l'homme"],
  },
  {
    word: 'Lampe',
    info: 'Éclaire une pièce',
    hint: [
      'Source de lumière',
      'Fonctionne avec une ampoule',
      'Utilisée souvent la nuit',
    ],
  },
  {
    word: 'Bicyclette',
    info: 'Moyen de transport à deux roues',
    hint: ['Fonctionne par pédalage', 'Permet de se déplacer', 'Écologique'],
  },
  {
    word: 'Montre',
    info: "Indique l'heure",
    hint: [
      'Se porte au poignet',
      'Possède un cadran',
      'Peut être analogique ou numérique',
    ],
  },
  {
    word: 'Jardin',
    info: 'Espace extérieur avec des plantes',
    hint: [
      'Contient souvent des fleurs',
      'Lieu de détente',
      "Nécessite de l'entretien",
    ],
  },
  {
    word: 'Ballon',
    info: 'Objet rond pour jouer',
    hint: [
      'Utilisé dans plusieurs sports',
      'Peut être en cuir ou en plastique',
      "S'utilise en plein air ou en intérieur",
    ],
  },
  {
    word: 'Neige',
    info: 'Précipitation glacée',
    hint: ['Blanche', 'Apparaît en hiver', 'Flocons froids'],
  },
  {
    word: 'Clé',
    info: "Permet d'ouvrir une serrure",
    hint: [
      'Petit objet en métal',
      'Utilisée pour la sécurité',
      "Permet l'accès",
    ],
  },
  {
    word: 'Fourchette',
    info: 'Ustensile pour manger',
    hint: ['Possède des dents', 'Utilisé à table', "Accompagnée d'un couteau"],
  },
  {
    word: 'Étoile',
    info: 'Objet céleste brillant',
    hint: ['Visible la nuit', 'Lumière lointaine', 'Présente dans le ciel'],
  },
  {
    word: 'Lunettes',
    info: 'Objet pour améliorer la vue',
    hint: [
      'Portées sur le nez',
      'Peuvent être de soleil',
      'Aident à voir clairement',
    ],
  },
  {
    word: 'Glace',
    info: 'Eau gelée',
    hint: ['Se mange en dessert', 'Très froide', 'Saveur sucrée ou nature'],
  },
  {
    word: 'Hôpital',
    info: 'Lieu de soins médicaux',
    hint: [
      'Contient des médecins',
      'Lieux pour les patients',
      'Urgences disponibles',
    ],
  },
  {
    word: 'Avocat',
    info: 'Fruit vert avec un noyau',
    hint: [
      'Utilisé dans le guacamole',
      'Riche en bonnes graisses',
      'Texture crémeuse',
    ],
  },
  {
    word: 'Feu',
    info: 'Phénomène de combustion',
    hint: [
      'Dégage chaleur et lumière',
      'Utilisé pour cuisiner',
      'Dangereux sans contrôle',
    ],
  },
  {
    word: 'Coquillage',
    info: 'Objet trouvé à la plage',
    hint: ['Provient de la mer', 'Souvenir de vacances', 'Naturel'],
  },
  {
    word: 'Cerise',
    info: 'Petit fruit rouge',
    hint: ['Avec un noyau', 'Utilisé dans des desserts', 'Goût sucré'],
  },
  {
    word: 'Aigle',
    info: 'Oiseau de proie',
    hint: ['Vol puissant', 'Griffes acérées', 'Vue perçante'],
  },
  {
    word: 'Robot',
    info: 'Machine programmable',
    hint: [
      'Peut effectuer des tâches',
      'Utilisé en industrie',
      'Commandé par ordinateur',
    ],
  },
  {
    word: 'Chapeau',
    info: 'Accessoire de tête',
    hint: [
      'Protège du soleil',
      'Divers styles',
      'Fait souvent partie de la mode',
    ],
  },
  {
    word: 'Pluie',
    info: "Précipitation de gouttes d'eau",
    hint: ['Vient des nuages', 'Mouille le sol', 'Fréquente en automne'],
  },
  {
    word: 'Miel',
    info: 'Produit par les abeilles',
    hint: ['Très sucré', 'Liquide doré', 'Utilisé dans des recettes'],
  },
  {
    word: 'Vélo',
    info: 'Transport à deux roues',
    hint: ['Se pédale', 'Écologique', 'Utilisé en ville'],
  },
  {
    word: 'Pont',
    info: 'Structure reliant deux points',
    hint: [
      'Permet de traverser',
      "Au-dessus de l'eau",
      'Structure architecturale',
    ],
  },
  {
    word: 'Télécommande',
    info: 'Permet de contrôler à distance',
    hint: [
      'Utilisée pour la télévision',
      'Fonctionne souvent avec des piles',
      'Peut changer les chaînes',
    ],
  },
  {
    word: 'Écharpe',
    info: 'Accessoire pour le cou',
    hint: ['Protège du froid', 'En laine ou coton', 'Portée en hiver'],
  },
  {
    word: 'Cheval',
    info: 'Animal de ferme',
    hint: ['Utilisé pour monter', 'Peut courir rapidement', "Aime l'herbe"],
  },
  {
    word: 'Brosse',
    info: 'Outil pour démêler les cheveux',
    hint: ['Utilisée le matin', 'Fait de poils', 'Peut être à manche'],
  },
  {
    word: 'Poisson',
    info: 'Animal aquatique',
    hint: ["Vit dans l'eau", 'Peut être mangé', 'Respire avec des branchies'],
  },
  {
    word: 'Cerf',
    info: 'Animal des forêts',
    hint: ['Possède des bois', 'Herbivore', 'Vif et prudent'],
  },
];

//on va choisir au hasard un mot pour jouer
let motsSelect = words[Math.floor(Math.random() * words.length)];
let indiceUtiliser = 0;
console.log(motsSelect.word);
const bonnesLettreArr = [''];
const mauvaiseLettreArr = [];

//afficher les mots cachés
function afficheMot() {
  motElement.innerHTML = `
    ${removeAccents(motsSelect.word)
      .toUpperCase()
      .split('')
      .map(
        (lettre) =>
          `<span class="lettre">
          ${
            bonnesLettreArr.includes(removeAccents(lettre.toUpperCase()))
              ? lettre
              : ''
          }
        </span>`
      )
      .join('')}
  `;
}
// Fonction pour enlever les accents
function removeAccents(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
//mauvaise lettre
function updateMauvaiseLettre() {
  //afficher les mauvaises lettres
  mauvaiseLettre.innerHTML = `
    ${mauvaiseLettreArr.map((lettre) => `<span>${lettre}</span>`)}`;

  //afficher le pendu
  figureGame.forEach((figureGame, index) => {
    if (index < mauvaiseLettreArr.length) {
      figureGame.style.display = 'block';
    } else {
      figureGame.style.display = 'none';
    }
  });

  //verifier si le joueur a perdu
  if (mauvaiseLettreArr.length === figureGame.length) {
    messageFinal.innerText = `malheureusement vous avez perdu🫤.retenter votre chance clicker sur rejouer.Le mot a trouvé etait:'${motsSelect.word}'.`;
    popup.style.display = 'flex';
  }
}
// Afficher la petite notification des mots deja taper
function afficherNotification() {
  notificationEle.classList.add('afficher'); // Afficher la notification

  // Retirer la classe après 2 secondes pour permettre un nouvel affichage
  setTimeout(() => {
    notificationEle.classList.remove('afficher');
  }, 1500); // 2000 ms = 2 secondes
}
//function pour verifier si le joueur gagne
function gamerWin() {
  const motSansAccent = removeAccents(motsSelect.word.toUpperCase()); //on retrouve les mots sans les accents
  const lettresTrouvees = motSansAccent
    .split('')
    .every((lettre) => bonnesLettreArr.includes(lettre));

  // Vérifie si toutes les lettres du mot ont été trouvées
  if (lettresTrouvees) {
    messageFinal.innerText = `Félicitations ! Vous avez réussi! vous avez trouvé le mot : '${motsSelect.word}' 🎉`;
    popup.style.display = 'flex'; // Affiche la popup avec le message de victoire
  }
}
// Écouteur d'événement
window.addEventListener('keydown', (e) => {
  const lettre = removeAccents(e.key.toUpperCase()); // Convertir en majuscule et enlever les accents

  // Vérifier si la touche est une lettre de A à Z
  if (lettre.match(/^[A-Z]$/)) {
    const motSansAccent = removeAccents(motsSelect.word.toUpperCase()); // Supprimer les accents du mot

    if (motSansAccent.includes(lettre)) {
      // Si la lettre est dans le mot et pas encore devinée
      if (!bonnesLettreArr.includes(lettre)) {
        bonnesLettreArr.push(lettre);
        afficheMot(); // Appeler la fonction pour mettre à jour l'affichage
        gamerWin();
      } else {
        afficherNotification(); // Afficher une notification pour lettre déjà devinée
      }
    } else {
      // Si la lettre n'est pas dans le mot
      if (!mauvaiseLettreArr.includes(lettre)) {
        mauvaiseLettreArr.push(lettre);

        updateMauvaiseLettre(); // Fonction à implémenter si besoin pour afficher les mauvaises lettres
      } else {
        afficherNotification(); // Afficher une notification pour lettre déjà devinée en erreur
      }
    }
  }
});
indice.addEventListener('click', function () {
  if (indiceUtiliser < 3) {
    const list = document.createElement('li');
    list.innerHTML = `<span class="indiceStyle">
    ${motsSelect.hint[indiceUtiliser]}</span>`;
    document.querySelector('ul').appendChild(list);
    indiceUtiliser++;
    return;
  }
});

// button rejouer
rejouerBtn.addEventListener('click', () => {
  // Réinitialise les tableaux des lettres bonnes et mauvaises
  bonnesLettreArr.splice(0);
  mauvaiseLettreArr.splice(0);
  indiceUtiliser = 0;

  document.querySelector('ul').innerHTML = ' ';

  // Sélectionne un nouveau mot au hasard
  motsSelect = words[Math.floor(Math.random() * words.length)];
  console.log(motsSelect.word);
  // Affiche le nouveau mot masqué et met à jour les lettres incorrectes
  afficheMot();
  updateMauvaiseLettre();

  // Cache le popup de victoire pour démarrer une nouvelle partie
  popup.style.display = 'none';
});

afficheMot();
