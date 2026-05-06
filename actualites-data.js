/* =========================================================
   ACTUALITÉS — fichier de données
   Pour ajouter une actu : copier-coller un bloc { } dans le tableau,
   remplir les champs, sauvegarder. C'est tout.

   Champs disponibles :
     id          → numéro unique (incrémenter à chaque actu)
     date        → "AAAA-MM-JJ"
     titre       → titre de l'actu
     texte       → texte principal
     image       → chemin vers l'image (optionnel, laisser "" si pas d'image)
     lien        → URL du lien (optionnel, laisser "" si pas de lien)
     lien_label_fr → texte du bouton en français
     lien_label_en → texte du bouton en anglais
   ========================================================= */

window.ACTUS = [
  {
    id: 1,
    date: "2026-05-06",
    titre: "La billetterie est ouverte !",
    texte: "Les inscriptions pour assister à l'EuroHockey U21 Championship II-A Women sont désormais ouvertes. L'entrée est entièrement gratuite, mais l'inscription est obligatoire pour accéder au site le jour de l'événement. Rendez-vous sur notre plateforme en ligne pour réserver votre place dès maintenant !",
    image: "images/actu-billetterie.svg",
    lien: "https://billetterie.eurohockeyu21salon.info/",
    lien_label_fr: "S'inscrire gratuitement",
    lien_label_en: "Register for free"
  }
];
