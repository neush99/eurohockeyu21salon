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
    id: 2,
    date: "2026-06-04",
    titre: "T-Shirt Officiel SHC × Sudist — Précommandez le vôtre !",
    texte: "Pour célébrer l'EuroHockey Championship U21 Women que nous organisons à Salon-de-Provence du 28 juillet au 1er août, le SHC s'est associé à Sudist, marque locale 100 % fabriquée en Provence. Un t-shirt collector, blanc, avec le design exclusif \"Play and Shine – Salon de Provence July 2026\". Coton bio 220g, confectionné à Saint-Cannat. 35 € / adulte — Tailles S · M · L · XL · XXL. Les précommandes sont retirées sur site pendant la compétition. Un stand de vente sera aussi disponible sur place, mais les stocks seront limités — la précommande est le seul moyen de garantir votre exemplaire !",
    image: "images/actu-tshirt-mascotte.jpg",
    lien: "https://salon-hockey-club.sporteasy.net/collections/49090/",
    lien_label_fr: "Précommander mon t-shirt",
    lien_label_en: "Pre-order my t-shirt"
  },
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
