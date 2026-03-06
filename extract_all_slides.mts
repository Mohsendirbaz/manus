import { slides60 } from './client/src/data/slides60.ts';
import { slidesA } from './client/src/data/slidesA.ts';
import { slidesB } from './client/src/data/slidesB.ts';
import { slidesC } from './client/src/data/slidesC.ts';
import { slidesD } from './client/src/data/slidesD.ts';
import { slidesE } from './client/src/data/slidesE.ts';
import { slidesBio } from './client/src/data/slidesBio.ts';
import { slidesG } from './client/src/data/slidesG.ts';
import { slidesTOC } from './client/src/data/slidesTOC.ts';
import fs from 'fs';

type SlideOut = {
  deck: string;
  deck_id: string;
  act: string;
  section_color: string;
  imageUrl: string;
  title: string;
  narrative: string;
  strategic: string;
  keyPoints: string[];
  tags: string[];
};

const epu: SlideOut[] = slides60.map(s => ({
  deck: 'EPU Strategy',
  deck_id: `EPU-${s.id}`,
  act: s.actLabel.en,
  section_color: '#2D7D6F',
  imageUrl: s.imageUrl,
  title: s.en.title,
  narrative: s.en.narrative,
  strategic: s.en.strategic,
  keyPoints: s.en.keyPoints,
  tags: s.en.tags,
}));

const deckA: SlideOut[] = slidesA.map(s => ({
  deck: 'Deck A · UFP',
  deck_id: `A-${s.id}`,
  act: s.actLabel.en,
  section_color: '#4FC3F7',
  imageUrl: s.imageUrl,
  title: s.en.title,
  narrative: s.en.narrative,
  strategic: s.en.strategic,
  keyPoints: s.en.keyPoints,
  tags: s.en.tags,
}));

const deckB: SlideOut[] = slidesB.map(s => ({
  deck: 'Deck B · Timing',
  deck_id: `B-${s.id}`,
  act: s.actLabel.en,
  section_color: '#81C784',
  imageUrl: s.imageUrl,
  title: s.en.title,
  narrative: s.en.narrative,
  strategic: s.en.strategic,
  keyPoints: s.en.keyPoints,
  tags: s.en.tags,
}));

const deckC: SlideOut[] = slidesC.map(s => ({
  deck: 'Deck C · Ghost',
  deck_id: `C-${s.id}`,
  act: s.actLabel.en,
  section_color: '#CE93D8',
  imageUrl: s.imageUrl,
  title: s.en.title,
  narrative: s.en.narrative,
  strategic: s.en.strategic,
  keyPoints: s.en.keyPoints,
  tags: s.en.tags,
}));

const deckD: SlideOut[] = slidesD.map(s => ({
  deck: 'Deck D · Semiconductor',
  deck_id: `D-${s.id}`,
  act: s.actLabel.en,
  section_color: '#FFB74D',
  imageUrl: s.imageUrl,
  title: s.en.title,
  narrative: s.en.narrative,
  strategic: s.en.strategic,
  keyPoints: s.en.keyPoints,
  tags: s.en.tags,
}));

const deckE: SlideOut[] = slidesE.map(s => ({
  deck: 'Deck E · Thermal',
  deck_id: `E-${s.id}`,
  act: s.actLabel.en,
  section_color: '#EF9A9A',
  imageUrl: s.imageUrl,
  title: s.en.title,
  narrative: s.en.narrative,
  strategic: s.en.strategic,
  keyPoints: s.en.keyPoints,
  tags: s.en.tags,
}));

const deckF: SlideOut[] = slidesBio.map(s => ({
  deck: 'Deck F · Founder',
  deck_id: `F-${s.id}`,
  act: s.actLabel.en,
  section_color: '#80DEEA',
  imageUrl: s.imageUrl,
  title: s.en.title,
  narrative: s.en.narrative,
  strategic: s.en.strategic,
  keyPoints: s.en.keyPoints,
  tags: s.en.tags,
}));

const deckG: SlideOut[] = slidesG.map(s => ({
  deck: 'Deck G · Customization',
  deck_id: `G-${s.id}`,
  act: s.actLabel.en,
  section_color: '#A5D6A7',
  imageUrl: s.imageUrl,
  title: s.en.title,
  narrative: s.en.narrative,
  strategic: s.en.strategic,
  keyPoints: s.en.keyPoints,
  tags: s.en.tags,
}));

const deckTOC: SlideOut[] = slidesTOC.map(s => ({
  deck: 'Deck TOC',
  deck_id: `TOC-${s.id}`,
  act: s.actLabel.en,
  section_color: '#B0BEC5',
  imageUrl: s.imageUrl,
  title: s.en.title,
  narrative: s.en.narrative,
  strategic: s.en.strategic,
  keyPoints: s.en.keyPoints,
  tags: s.en.tags,
}));

const allSlides = [...epu, ...deckA, ...deckB, ...deckC, ...deckD, ...deckE, ...deckF, ...deckG, ...deckTOC];

fs.writeFileSync('/home/ubuntu/slides_epu.json', JSON.stringify(epu, null, 2));
fs.writeFileSync('/home/ubuntu/slides_all.json', JSON.stringify(allSlides, null, 2));

console.log(`EPU: ${epu.length}`);
console.log(`A: ${deckA.length}, B: ${deckB.length}, C: ${deckC.length}, D: ${deckD.length}`);
console.log(`E: ${deckE.length}, F: ${deckF.length}, G: ${deckG.length}, TOC: ${deckTOC.length}`);
console.log(`Total: ${allSlides.length}`);
