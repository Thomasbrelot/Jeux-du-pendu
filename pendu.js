//on va chercher les élements dans l'HTML
const motElement = document.getElementById('mot');
const letters = document.getElementById('letters');
const lettre = document.getElementById('lettre');
const mauvaiseLettre = document.getElementById('mauvaise-lettre');
const rejouerBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notificationEle = document.getElementById('notification-container');
const messageFinal = document.getElementById('message-final');
const indice = document.getElementById('indice');
const indiceUser = document.getElementById('indiceUser');
const figureGame = document.querySelectorAll('.figure-game');

const words = [
  // Ajoutez les mots et indices existants ici...

  // Nouveau mot
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
    word: 'Soleil',
    info: 'Astres lumineux du système solaire',
    hint: [
      'Source de lumière et de chaleur',
      'Visible le jour',
      'Essentiel à la vie sur Terre',
    ],
  },
  {
    word: 'Porte',
    info: 'Ouverture dans un mur',
    hint: [
      'Utilisée pour entrer et sortir',
      'Composée d’un battant',
      'Souvent équipée d’une serrure',
    ],
  },
  {
    word: 'Bureau',
    info: 'Meuble utilisé pour travailler',
    hint: [
      'Possède souvent des tiroirs',
      'Utilisé dans un espace de travail',
      'Peut être équipé d’un ordinateur',
    ],
  },
  {
    word: 'Ciel',
    info: 'Espace visible au-dessus de la Terre',
    hint: [
      'Contient des nuages',
      'Visible pendant la journée',
      'Abritant les étoiles la nuit',
    ],
  },
  {
    word: 'Chat',
    info: 'Animal domestique',
    hint: [
      'Souvent un animal de compagnie',
      'Aime se reposer',
      'Très agile et curieux',
    ],
  },
  {
    word: 'Lune',
    info: 'Satellite naturel de la Terre',
    hint: [
      'Visible la nuit',
      'Change de forme au cours du mois',
      'Aucune vie ne s’y trouve',
    ],
  },
  {
    word: 'Mouton',
    info: 'Animal de ferme',
    hint: [
      'Produit de la laine',
      'Souvent élevé pour sa viande',
      'Aime paître dans les prés',
    ],
  },
  {
    word: 'Ferme',
    info: 'Lieu d’élevage et de culture',
    hint: [
      'On y trouve des animaux',
      'Elle produit des récoltes',
      'Lieux de travail pour les agriculteurs',
    ],
  },
  {
    word: 'Vache',
    info: 'Animal de ferme élevé pour le lait',
    hint: [
      'Produit du lait',
      'Grande taille',
      'Souvent tachetée de noir et blanc',
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
    word: 'Ciseaux',
    info: 'Instrument pour couper',
    hint: ['Possède deux lames', 'Utilisé pour découper', 'Outil de bureau'],
  },
  {
    word: 'Forêt',
    info: 'Grand espace couvert d’arbres',
    hint: [
      'Lieu de biodiversité',
      'Riches en arbres et plantes',
      'Habitat pour de nombreux animaux',
    ],
  },
  {
    word: 'Poisson',
    info: 'Animal aquatique',
    hint: ['Vit dans l’eau', 'Peut être mangé', 'Respire avec des branchies'],
  },
  {
    word: 'Château',
    info: 'Grand bâtiment fortifié',
    hint: [
      'Peut être historique',
      'Souvent associé à la royauté',
      'Possède des murs épais et des tours',
    ],
  },
  {
    word: 'Montagne',
    info: 'Élévation naturelle de terrain',
    hint: [
      'Peut être enneigée',
      'Propice à la randonnée',
      'Offre de magnifiques paysages',
    ],
  },
  {
    word: 'Gâteau',
    info: 'Dessert sucré',
    hint: ['Cuit au four', 'Peut être décoré', 'Présent lors des fêtes'],
  },
  {
    word: 'Télévision',
    info: 'Appareil pour regarder des émissions',
    hint: [
      'Possède un écran',
      'Peut être connectée à Internet',
      'Souvent utilisée pour se divertir',
    ],
  },
  {
    word: 'Pyramide',
    info: 'Structure en forme de tétraèdre',
    hint: [
      'Associée à l’Égypte',
      'Possède une base carrée',
      'Composée de grandes pierres',
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
    word: 'Pont',
    info: 'Structure reliant deux points',
    hint: [
      'Permet de traverser',
      "Au-dessus de l'eau",
      'Structure architecturale',
    ],
  },
  {
    word: 'Bicyclette',
    info: 'Moyen de transport à deux roues',
    hint: ['Fonctionne par pédalage', 'Permet de se déplacer', 'Écologique'],
  },
  {
    word: 'Avion',
    info: 'Moyen de transport aérien',
    hint: [
      'Possède des ailes',
      'Utilise des moteurs',
      'Capable de voyager rapidement',
    ],
  },
  {
    word: 'Bateau',
    info: 'Moyen de transport sur l’eau',
    hint: [
      'Utilisé pour la navigation',
      'Peut être à moteur ou à voile',
      'Flotte sur l’eau',
    ],
  },
  {
    word: 'École',
    info: 'Lieu d’apprentissage',
    hint: [
      'Enseignement aux enfants',
      'Contient des salles de classe',
      'Lieu de socialisation',
    ],
  },
  {
    word: 'Éléphant',
    info: 'Animal terrestre géant',
    hint: [
      'A de grandes oreilles',
      'Possède une trompe',
      'Vit en Afrique et en Asie',
    ],
  },
  {
    word: 'Brouillard',
    info: 'Phénomène météorologique',
    hint: [
      'Réduit la visibilité',
      'Souvent présent le matin',
      'Formé de petites gouttes d’eau',
    ],
  },
  {
    word: 'Ciel',
    info: 'Espace visible au-dessus de la Terre',
    hint: [
      'Contient des nuages',
      'Visible pendant la journée',
      'Abritant les étoiles la nuit',
    ],
  },
  {
    word: 'Cicatrice',
    info: 'Marque laissée sur la peau après une blessure',
    hint: [
      'Résultat d’une blessure',
      'Change de couleur avec le temps',
      'Peut être permanente',
    ],
  },
  {
    word: 'Douche',
    info: 'Installation pour se laver',
    hint: [
      'Utilise de l’eau',
      'Peut être en cabine',
      'Utilisée quotidiennement',
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
    word: 'Chiffre',
    info: 'Symbole représentant un nombre',
    hint: [
      'Utilisé dans les mathématiques',
      'De 0 à 9',
      'Utilisé pour compter',
    ],
  },
  {
    word: 'Château',
    info: 'Bâtiment fortifié',
    hint: [
      'Symbole de la royauté',
      'Construite avec de grandes pierres',
      'Possède des tours et un fossé',
    ],
  },
  {
    word: 'Lentille',
    info: 'Plante de légumineuse',
    hint: [
      'Peut être cuite en soupe',
      'Riche en protéines',
      'Petit légume rond',
    ],
  },
  {
    word: 'Manteau',
    info: 'Vêtement chaud pour l’extérieur',
    hint: [
      'Porté en hiver',
      'Recouvre le corps',
      'Souvent en laine ou en tissu épais',
    ],
  },
  {
    word: 'Soleil',
    info: 'Astres lumineux du système solaire',
    hint: [
      'Source de lumière et de chaleur',
      'Visible le jour',
      'Essentiel à la vie sur Terre',
    ],
  },
  {
    word: 'Panier',
    info: 'Objet pour transporter des choses',
    hint: [
      'Souvent fait de paille ou de plastique',
      'Utilisé pour les courses',
    ],
  },
  {
    word: 'Pantalon',
    info: 'Vêtement couvrant les jambes',
    hint: [
      'Porté au quotidien',
      'Peut être en jean ou en tissu',
      'A une fermeture ou un élastique',
    ],
  },
  {
    word: 'Camion',
    info: 'Véhicule pour transporter des marchandises',
    hint: ['Utilisé par les routiers', 'Gros moteur', 'Possède une remorque'],
  },
  {
    word: 'Orage',
    info: 'Phénomène météorologique violent',
    hint: [
      'Accompagné de tonnerre',
      'Produits des éclairs',
      'Souvent suivi de pluie',
    ],
  },
  {
    word: 'Livreur',
    info: 'Personne qui distribue des colis',
    hint: [
      'Souvent en camion ou à vélo',
      'Apporte des paquets',
      'Peut déposer des repas',
    ],
  },
  {
    word: 'Boulangerie',
    info: 'Lieu où l’on achète du pain',
    hint: [
      'Vente de baguettes et de croissants',
      'Odeur de pain frais',
      'Gérée par un boulanger',
    ],
  },
  {
    word: 'Calendrier',
    info: 'Permet de suivre les jours',
    hint: [
      'Affiche mois et jours',
      'Utile pour noter des rendez-vous',
      'Souvent accroché au mur',
    ],
  },
  {
    word: 'Bougie',
    info: 'Objet qui brûle pour donner de la lumière',
    hint: [
      'Fait de cire',
      'Allumée pour des occasions spéciales',
      'Peut être parfumée',
    ],
  },
  {
    word: 'Papillon',
    info: 'Insecte coloré',
    hint: [
      'A des ailes légères',
      'Sort au printemps',
      'Commence sa vie en tant que chenille',
    ],
  },
  {
    word: 'Tortue',
    info: 'Reptile à carapace',
    hint: [
      'Marche lentement',
      'Vit sur terre ou dans l’eau',
      'Peut vivre très longtemps',
    ],
  },
  {
    word: 'Horloge',
    info: 'Indique l’heure',
    hint: [
      'Accrochée au mur',
      'Possède des aiguilles',
      'Émet parfois un tic-tac',
    ],
  },
  {
    word: 'Éponge',
    info: 'Objet pour nettoyer',
    hint: ['Absorbe l’eau', 'Utilisée dans la cuisine', 'Souple et mou'],
  },
  {
    word: 'Stylo',
    info: 'Outil pour écrire',
    hint: [
      'Rempli d’encre',
      'Peut être à bille ou plume',
      'Utilisé pour prendre des notes',
    ],
  },
  {
    word: 'Coiffeur',
    info: 'Personne qui coupe les cheveux',
    hint: [
      'Travaille avec des ciseaux',
      'Fait des coiffures',
      'Travaille dans un salon',
    ],
  },
  {
    word: 'Cuisine',
    info: 'Pièce où l’on prépare les repas',
    hint: [
      'Contient un réfrigérateur',
      'Équipée d’une cuisinière',
      'Peut contenir un four',
    ],
  },
  {
    word: 'Dentiste',
    info: 'Médecin des dents',
    hint: [
      'Utilise des instruments dentaires',
      'S’occupe des caries',
      'Travaille dans un cabinet dentaire',
    ],
  },
  {
    word: 'Abricot',
    info: 'Petit fruit orange',
    hint: [
      'A une peau douce',
      'A un noyau au centre',
      'Sucré et juteux en été',
    ],
  },
  {
    word: 'Tempête',
    info: 'Phénomène météorologique violent',
    hint: [
      'Souvent accompagné de vent fort',
      'Peut causer des dégâts',
      'Fréquente en automne',
    ],
  },
  {
    word: 'Lac',
    info: 'Grande étendue d’eau douce',
    hint: [
      'Entouré de terre',
      'Lieu de pêche',
      'Parfois utilisé pour se baigner',
    ],
  },
  {
    word: 'Casque',
    info: 'Protection pour la tête',
    hint: [
      'Porté par les motards',
      'Utilisé aussi pour écouter de la musique',
      'Peut être en plastique ou métal',
    ],
  },
  {
    word: 'Réfrigérateur',
    info: 'Électroménager pour conserver les aliments au frais',
    hint: [
      'Contient des étagères',
      'Souvent dans la cuisine',
      'Permet de garder la nourriture fraîche',
    ],
  },
  {
    word: 'Poire',
    info: 'Fruit sucré en forme de goutte',
    hint: [
      'Peau verte ou jaune',
      'Contient des pépins',
      'Souvent consommée crue ou en compote',
    ],
  },
  {
    word: 'Verre',
    info: 'Récipient pour boire',
    hint: [
      'Peut être en verre ou plastique',
      'Utilisé pour l’eau ou les boissons',
      'Se trouve dans la cuisine',
    ],
  },
  {
    word: 'Tennis',
    info: 'Sport avec une raquette et une balle',
    hint: [
      'Se joue sur un court',
      'Nécessite une raquette',
      'Le but est de marquer des points',
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
    word: 'Monnaie',
    info: 'Pièces ou billets pour payer',
    hint: [
      'Utilisée dans le commerce',
      'Peut être de papier ou métal',
      'Représente une valeur',
    ],
  },
  {
    word: 'Soleil',
    info: 'Astres lumineux du système solaire',
    hint: [
      'Source de lumière et de chaleur',
      'Visible le jour',
      'Essentiel à la vie sur Terre',
    ],
  },
  {
    word: 'Cheveux',
    info: 'Poils sur la tête',
    hint: [
      'Peut être coupé ou coiffé',
      'Peut être de différentes couleurs',
      'Protège le cuir chevelu',
    ],
  },
  {
    word: 'Sommeil',
    info: 'Période de repos pour le corps',
    hint: [
      'Nécessaire chaque nuit',
      'Indispensable pour la santé',
      'Se fait en général dans un lit',
    ],
  },
  {
    word: 'Infirmerie',
    info: 'Lieu de soins dans les écoles ou entreprises',
    hint: [
      'Lieu pour les premiers soins',
      'Contient des médicaments',
      'Accueille les personnes malades',
    ],
  },
  {
    word: 'Rivière',
    info: 'Cours d’eau qui coule vers la mer',
    hint: [
      'Moins large qu’un fleuve',
      'Peut avoir des poissons',
      'Souvent utilisé pour l’irrigation',
    ],
  },
  {
    word: 'Ferme',
    info: 'Lieu d’élevage et de culture',
    hint: [
      'On y trouve des animaux',
      'Elle produit des récoltes',
      'Lieux de travail pour les agriculteurs',
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
    word: 'Corde',
    info: 'Utilisée pour attacher ou tirer',
    hint: [
      'Solide et épaisse',
      'Peut être en chanvre ou nylon',
      'Très utile pour le camping',
    ],
  },
  {
    word: 'Enveloppe',
    info: 'Papier pour contenir des lettres',
    hint: [
      'Utilisée pour envoyer du courrier',
      'Doit être fermée',
      'Doit être affranchie',
    ],
  },
];

//on va choisir au hasard un mot pour jouer
let motsSelect = words[Math.floor(Math.random() * words.length)];
let indiceUtiliser = 0;
const bonnesLettreArr = [];
const mauvaiseLettreArr = [];

//afficher les mots cachés
function afficheMot() {
  motElement.innerHTML = `
    ${removeAccents(motsSelect.word)
      .toUpperCase()
      .split('')
      .map(
        (lettre) =>
          `<div class="lettre" id="lettre">
          ${
            bonnesLettreArr.includes(removeAccents(lettre.toUpperCase()))
              ? lettre
              : ''
          }
        </div>`
      )
      .join('')}
  `;
}
afficheMot();
console.log(motsSelect.word);
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
  }, 2000); // 2000 ms = 2 secondes
}
//function pour verifier si le joueur gagne
function gamerWin() {
  const motSansAccent = removeAccents(motsSelect.word.toUpperCase()); //on retrouve les mots sans les accents
  const lettresTrouvees = motSansAccent
    .split('')
    .every((lettre) => bonnesLettreArr.includes(lettre));

  // Vérifie si toutes les lettres du mot ont été trouvées
  if (lettresTrouvees) {
    messageFinal.innerText = `Félicitations🎉 ! Vous avez réussi! vous avez trouvé le mot : '${motsSelect.word}', tentez votre chance de trouver les autres😉`;
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
window.addEventListener('load', () => {
  function traitementLettre(lettre) {
    if (lettre.match(/^[A-Z]$/)) {
      const motSansAccent = removeAccents(motsSelect.word.toUpperCase());

      if (motSansAccent.includes(lettre)) {
        if (!bonnesLettreArr.includes(lettre)) {
          bonnesLettreArr.push(lettre);
          afficheMot();
          gamerWin();
        } else {
          afficherNotification();
        }
      } else {
        if (!mauvaiseLettreArr.includes(lettre)) {
          mauvaiseLettreArr.push(lettre);
          updateMauvaiseLettre();
        } else {
          afficherNotification();
        }
      }
    }
  }
  // Ajoute un écouteur d'événements pour chaque bouton de clavier virtuel
  const btnClavier = document.querySelectorAll('.btnClavier');
  const btnClavierCss = document.getElementById('btnClavier');
  if (btnClavier.length > 0) {
    btnClavier.forEach((btn) => {
      btn.addEventListener('click', () => {
        const lettre = btn.innerText.toUpperCase(); // Récupère la lettre du bouton
        traitementLettre(lettre); // Appelle la fonction pour traiter la lettre
        // Ajoute la lettre dans motElement si elle est devinée
        if (motElement) {
          motElement.value += lettre; // Ajoute la lettre dans motElement
        }
      });
    });
  }
});
// Fonction pour gérer le bouton Delete
document.querySelector('.delete').addEventListener('click', () => {
  bonnesLettreArr.pop(); // Retirer la dernière lettre trouvée
  afficheMot(); // Mettre à jour l'affichage du mot
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
