// ─────────────────────────────────────────────
//  CATALOGUE TRADISCOUT
//  Source de vérité unique — front + API
// ─────────────────────────────────────────────

const COLLECTIONS = [
  { id: 'premium', label: 'Premium'    },
  { id: 'scouts',  label: 'Classiques'  },
  { id: 'preco', label: 'Precomande'    }

];

const TYPES = [
  { 
    id: 'tshirt', 
    label: 'T-Shirt', 
    code: '1', 
    price: { scouts: 20.25, premium: 25.2 , preco: 29.8 }
  },
  { 
    id: 'sweat',  
    label: 'Sweat',  
    code: '2', 
    price: { scouts: 43.5, premium: 45.7, preco: 52.8 } 
  },
  { 
    id: 'hoodie', 
    label: 'Hoodie', 
    code: '3', 
    price: { scouts: 49.5, premium: 52.9, preco: 60 } 
  }
];

const COLORS = [
  { id: 'blanc', label: 'Blanc',  code: '1' },
  { id: 'ciel', label: 'Ciel',  code: '2' },
  { id: 'marine',  label: 'Marine', code: '3' }
];

const SIZES = ['S', 'M', 'L', 'XL'];

// ─── DESIGNS ───────────────────────────────
// Chaque produit :
//   id          → identifiant unique (string)
//   key         → slug URL-safe
//   label       → nom affiché
//   description → courte phrase affichée dans la lightbox
//   types       → sous-ensemble de TYPES disponibles
//   colors      → sous-ensemble de COLORS disponibles
//   images      → liste de noms de fichiers dans /images/
//                 (n'importe quel nom, lifestyle ou pack shot)
//   collection  → id d'une COLLECTION

const DESIGNS = [
  //CLASSIQUES
  {
    id: '8', key: 'st-michel', label: 'St Michel',
    description: 'DOS - Saint patron des para',
    types:  ['tshirt','sweat','hoodie'],
    colors: ['blanc', 'fonce'],
    images: ['StMichelW.jpg','StMichelB.png','image 19.jpg','image20.png','image 15.jpg','image 16.png'],
    collection: 'scouts',
  },
  {
    id: '9', key: 'st-jean-marie-vianney', label: 'St Jean-Marie Vianney',
    description: 'DOS - Saint patron des prêtres',
    types:  ['tshirt','sweat','hoodie'],
    colors: ['blanc', 'fonce'],
    images: ['StVianneyW.jpg','StVianneyB.png','image 25.jpg','image 26.png','image 21.jpg','image 22.png'],
    collection: 'scouts',
  },
  {
    id: '10', key: 'st-george', label: 'St George',
    description: 'DOS - Saint patron des scouts',
    types:  ['tshirt', 'sweat', 'hoodie'],
    colors: ['blanc', 'fonce'],
    images: ['StGeorgeW.jpg','StGeorgeB.png','image 24.jpg','image 23.png','image 18.jpg','image 17.png'],
    collection: 'scouts',
  },
  //PREMIUM
  {
    id: '11', key: 'lys', label: 'Cinq Lys',
    description: 'DEVANT - Symbole de royauté depuis 496',
    types:  ['tshirt', 'sweat'],
    colors: ['blanc', 'fonce'],
    images: ['image 79.png', 'image 80.png', 'image 83.png', 'image 81.png'],
    collection: 'premium',
  },
  {
    id: '12', key: 'rose', label: 'Rose Mystique',
    description: 'DEVANT - Nom donné à la Vierge Marie',
    types:  ['tshirt', 'sweat'],
    colors: ['blanc', 'fonce'],
    images: ['image 90.png', 'image 89.png', 'image 85.png', 'image 86.png'],
    collection: 'premium',
  },
  {
    id: '13', key: 'corsacrum', label: 'Cor Sacrum Jesu',
    description: 'DEVANT - Dévoilé à Sainte Marguerite-Marie',
    types:  ['tshirt', 'sweat'],
    colors: ['blanc', 'fonce'],
    images: ['image 94.png', 'image 95.png', 'image 98.png', 'image 99.png'],
    collection: 'premium',
  },
  {
    id: '14', key: 'sacrecoeur', label: 'Sacré-Cœur de Jésus',
    description: 'DOS - Depuis la fin du XVIIe siècle',
    types:  ['tshirt'],
    colors: ['blanc', 'fonce'],
    images: ['image 97.png', 'image 96.png', 'img1.jpeg', 'img2.jpeg', 'img3.jpeg', 'img4.jpeg'],
    collection: 'premium',
  },
  // PRECOMMANDES
  {
    id: '15', key: 'grosrosamytica', label: 'Rosa Mystica',
    description: 'DOS et DEVANT - Marie, la rose sans épines',
    types:  ['tshirt', 'sweat'],
    colors: ['blanc', 'clair', 'fonce'],
    images: ['fb8e315b-b76f-41b3-8a02-db8cead80e5a.jpeg', '742bf474-78b8-4ef1-bafc-ac115d1afbf0.jpeg', '4edbe0bc-f6cd-4ada-ad4a-894d1c3d452c.jpeg', '033ca4e5-fd66-4a05-aeca-c213ba241c98.jpeg'],
    collection: 'preco',
  },
  {
    id: '16', key: 'grossacrumjesu', label: 'Cor Sacrum Jesu',
    description: 'DOS et DEVANT - Dévotion datant du XVIIe',
    types:  ['tshirt', 'sweat'],
    colors: ['blanc', 'clair', 'fonce'],
    images: ['742bf474-78b8-4ef1-bafc-ac115d1afbf0.jpeg', '26cf96e3-e484-4800-87fa-7fd791c2ddd4.jpeg', '262e8b12-d9fc-47ae-b735-dce021bb2532.jpeg', '402efe22-cde9-4c6f-89cb-730e08f59363.jpeg', 'fa68d24d-19a6-4eaa-b376-32d27e41cdd1.jpeg', 'b8731303-bb52-49da-a801-81f3a4aa9585.jpeg', 'b86a3823-1e31-4714-863a-b46f140c99f3.jpeg'],
    collection: 'preco',
  },
  {
    id: '17', key: 'espritsaint', label: "Poussé par l'Esprit Saint",
    description: 'DOS et DEVANT - Jean 16:13',
    types:  ['tshirt'],
    colors: ['blanc', 'clair'],
    images: ['espirtst.jpeg','95ba067a-3525-426d-ae92-edaa4019e351.jpeg'],
    collection: 'preco',
  },
  {
    id: '18', key: 'sportsclub', label: 'Sports Club',
    description: 'DOS et DEVANT - Fort dans la foi',
    types:  ['tshirt'],
    colors: ['blanc', 'clair'],
    images: ['sportsclub.jpeg','95ba067a-3525-426d-ae92-edaa4019e351.jpeg'],
    collection: 'preco',
  },
];
// ATTENTION A L'ID IL FAUT QU'IL SOIT UNIQUE POUR CHAQUE PRODUIT

// ─── HELPERS ───────────────────────────────

/** Première image d'un design (fallback carte grille) */
function coverImg(designKey) {
  const d = DESIGNS.find(x => x.key === designKey);
  return d && d.images.length ? d.images[0] : 'placeholder.png';
}

/**
 * Récupère le prix d'un produit selon son type et sa collection
 * @param {string} designKey - Le slug du design (ex: 'tradiscout' ou 'croixnika')
 * @param {string} typeId - Le type de vêtement (ex: 'tshirt', 'sweat')
 * @returns {number} Le prix correspondant ou 0 si non trouvé
 */
function getProductPrice(designKey, typeId) {
  const design = DESIGNS.find(d => d.key === designKey);
  const type = TYPES.find(t => t.id === typeId);
  
  if (!design || !type) return 0;
  
  // Récupère le prix de la collection du design, ou un fallback s'il y a un souci
  return type.price[design.collection] || 0;
}

if (typeof module !== 'undefined') {
  module.exports = { COLLECTIONS, TYPES, COLORS, SIZES, DESIGNS, coverImg, getProductPrice };
}
