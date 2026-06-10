// ─────────────────────────────────────────────
//  CATALOGUE TRADISCOUT
//  Source de vérité unique — front + API
// ─────────────────────────────────────────────

const COLLECTIONS = [
  { id: 'scouts',  label: 'Classiques'  }
];

const TYPES = [
  { id: 'tshirt', label: 'T-Shirt', code: '1', price: 26 },
  { id: 'sweat',  label: 'Sweat',   code: '2', price: 47 },
  { id: 'hoodie', label: 'Hoodie',  code: '3', price: 49 }
];

const COLORS = [
  { id: 'blanc', label: 'Blanc',  code: '1' },
  { id: 'bleu',  label: 'Marine', code: '2' },
  { id: 'rouge',  label: 'Cardinal', code: '3' }
];

const SIZES = ['S', 'M', 'L'];

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
  {
    id: '1', key: 'tradiscout', label: 'Tradiscout',
    description: 'Rien de plus basique',
    types:  ['tshirt','sweat','hoodie'],
    colors: ['blanc', 'bleu', 'rouge'],
    images: ['1-1-tradiscout.jpg', '1-2-tradiscout.png', '2-1-tradiscout.jpg', '2-2-tradiscout.png', '3-1-tradiscout.jpg', '3-2-tradiscout.png'],
    collection: 'scouts',
  },
  {
    id: '3', key: 'deus-vult', label: 'Deus Vult',
    description: 'Comme au temps des templiers',
    types:  ['tshirt', 'sweat'],
    colors: ['blanc', 'bleu', 'rouge'],
    images: ['1-1-deus-vult.jpg', '1-2-deus-vult.png', '2-1-deus-vult.jpg', '2-2-deus-vult.png'],
    collection: 'scouts',
  },
  {
    id: '4', key: 'verso-lalto', label: 'Verso l\'Alto',
    description: 'Devise de Saint Pier Georgio Frassati',
    types:  ['tshirt', 'sweat'],
    colors: ['blanc', 'bleu', 'rouge'],
    images: ['1-1-verso-lalto.jpg', '1-2-verso-lalto.png', '2-1-verso-lalto.jpg', '2-2-verso-lalto.png'],
    collection: 'scouts',
  },
  {
    id: '7', key: 'christus-rex', label: 'Christus Rex',
    description: 'Mexique.',
    types:  ['tshirt','sweat','hoodie'],
    colors: ['blanc', 'bleu', 'rouge'],
    images: ['1-1-christus-rex.jpg', '1-2-christus-rex.png', '2-1-christus-rex.jpg', '2-2-christus-rex.png', '3-1-christus-rex.jpg', '3-2-christus-rex.png'],
    collection: 'scouts',
  },
  {
    id: '8', key: 'st-michel', label: 'St Michel',
    description: 'Le goat',
    types:  ['tshirt','sweat','hoodie'],
    colors: ['blanc', 'bleu', 'rouge'],
    images: ['StMichelW.jpg','StMichelB.png','image 19.jpg','image20.png','image 15.jpg','image 16.png'],
    collection: 'scouts',
  },
  {
    id: '9', key: 'st-jean-marie-vianney', label: 'St Jean-Marie Vianney',
    description: 'En esprit de sainteté',
    types:  ['tshirt','sweat','hoodie'],
    colors: ['blanc', 'bleu', 'rouge'],
    images: ['StVianneyW.jpg','StVianneyB.png','image 25.jpg','image 26.png','image 21.jpg','image 22.png'],
    collection: 'scouts',
  },
  {
    id: '10', key: 'st-george', label: 'St George',
    description: 'St patron des éclaireurs',
    types:  ['tshirt', 'sweat', 'hoodie'],
    colors: ['blanc', 'bleu', 'rouge'],
    images: ['StGeorgeW.jpg','StGeorgeB.png','image 24.jpg','image 23.png','image 18.jpg','image 17.png'],
    collection: 'scouts',
  },
  {
    id: '11', key: 'jpeuxpas', label: 'J\'peux pas j\'ai scout',
    description: 'La seule excuse valable un samedi matin.',
    types:  ['tshirt', 'sweat', 'hoodie'],
    colors: ['blanc', 'bleu', 'rouge'],
    images: ['1-1-jpeuxpas.jpg', '1-2-jpeuxpas.png', '2-1-jpeuxpas.jpg', '2-2-jpeuxpas.png', '3-1-jpeuxpas.jpg', '3-2-jpeuxpas.png'],
    collection: 'scouts',
  },
  {
    id: '11', key: 'croixnika', label: 'Croix Ni Ka',
    description: 'La seule excuse valable un samedi matin.',
    types:  ['tshirt', 'sweat', 'hoodie'],
    colors: ['blanc', 'bleu', 'rouge'],
    images: ['1-1-jpeuxpas.jpg', '1-2-jpeuxpas.png', '2-1-jpeuxpas.jpg', '2-2-jpeuxpas.png', '3-1-jpeuxpas.jpg', '3-2-jpeuxpas.png'],
    collection: 'premium',
  },
  {
    id: '11', key: 'georgesdor', label: 'Saint Georges Or',
    description: 'Saint patron des éclaireurs',
    types:  ['tshirt', 'sweat', 'hoodie'],
    colors: ['blanc', 'bleu', 'rouge'],
    images: ['1-1-jpeuxpas.jpg', '1-2-jpeuxpas.png', '2-1-jpeuxpas.jpg', '2-2-jpeuxpas.png', '3-1-jpeuxpas.jpg', '3-2-jpeuxpas.png'],
    collection: 'premium',
  },
  {
    id: '11', key: 'micheldor', label: 'Saint Michel Or',
    description: 'Saint patron des para',
    types:  ['tshirt', 'sweat', 'hoodie'],
    colors: ['blanc', 'bleu', 'rouge'],
    images: ['1-1-jpeuxpas.jpg', '1-2-jpeuxpas.png', '2-1-jpeuxpas.jpg', '2-2-jpeuxpas.png', '3-1-jpeuxpas.jpg', '3-2-jpeuxpas.png'],
    collection: 'premium',
  },
  {
    id: '11', key: 'louisdor', label: 'Saint Louis Or',
    description: 'Roi de France',
    types:  ['tshirt', 'sweat', 'hoodie'],
    colors: ['blanc', 'bleu', 'rouge'],
    images: ['1-1-jpeuxpas.jpg', '1-2-jpeuxpas.png', '2-1-jpeuxpas.jpg', '2-2-jpeuxpas.png', '3-1-jpeuxpas.jpg', '3-2-jpeuxpas.png'],
    collection: 'premium',
  },
];

// ─── HELPERS ───────────────────────────────

/** Première image d'un design (fallback carte grille) */
function coverImg(designKey) {
  const d = DESIGNS.find(x => x.key === designKey);
  return d && d.images.length ? d.images[0] : 'placeholder.png';
}

if (typeof module !== 'undefined') {
  module.exports = { COLLECTIONS, TYPES, COLORS, SIZES, DESIGNS, coverImg };
}
