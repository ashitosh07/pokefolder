import { regionsToHPTable } from '@/lib/tcg';
import { AccordionWithCombobox } from './with-combobox';
import { getSets, getTypes } from '@/lib/fetch';

export async function SetsAccordion() {
  const sets = await getSets();

  return (
    <AccordionWithCombobox
      heading="Sets"
      field="sets"
      placeholder="Type a set or series name"
      data={sets?.data ?? []}
    />
  );
}

// Async function to fetch and render subtypes accordion
export async function TypesAccordion() {
  const types = await getTypes('types');
  return (
    <AccordionWithCombobox
      heading="Types"
      field="types"
      placeholder="Type a card typing"
      data={types?.data.map((name) => ({ id: name.toLowerCase(), name })) ?? []}
    />
  );
}

// Async function to fetch and render subtypes accordion
export async function SubtypesAccordion() {
  const subtypes = await getTypes('subtypes');
  return (
    <AccordionWithCombobox
      heading="Subtypes"
      field="subtypes"
      placeholder="Type a subtype"
      data={
        subtypes?.data.map((name) => ({ id: name.toLowerCase(), name })) ?? []
      }
    />
  );
}

// Async function to fetch and render subtypes accordion
export async function SupertypesAccordion() {
  const supertypes = await getTypes('supertypes');
  return (
    <AccordionWithCombobox
      heading="Supertypes"
      field="supertypes"
      placeholder="Type a supertype"
      data={
        supertypes?.data.map((name) => ({ id: name.toLowerCase(), name })) ?? []
      }
    />
  );
}

// Async function to fetch and render subtypes accordion
export async function RaritiesAccordion() {
  const supertypes = await getTypes('rarities');
  return (
    <AccordionWithCombobox
      heading="Rarities"
      field="rarities"
      placeholder="Type a rarity"
      data={
        supertypes?.data.map((name) => ({ id: name.toLowerCase(), name })) ?? []
      }
    />
  );
}

// Async function to fetch and render subtypes accordion
export function PokedexAccordion() {
  return (
    <AccordionWithCombobox
      heading="National Pokedex"
      placeholder="Type a generation"
      field="pokedex"
      data={Object.entries(regionsToHPTable).map(([name, id]) => ({
        id,
        name,
      }))}
    />
  );
}

// Async function to fetch and render subtypes accordion
export function LegalitiesAccordion() {
  return (
    <AccordionWithCombobox
      heading="Legalities"
      placeholder="Type a legality"
      field="legalities"
      data={[
        { id: 'expanded_legal', name: 'Expanded: Legal' },
        { id: 'standard_legal', name: 'Standard: Legal' },
        { id: 'unlimited_legal', name: 'Unlimited: Legal' },
        { id: 'expanded_banned', name: 'Expanded: Banned' },
        { id: 'standard_banned', name: 'Standard: Banned' },
        { id: 'unlimited_banned', name: 'Unlimited: Banned' },
      ]}
    />
  );
}

// Async function to fetch and render subtypes accordion
export function MarksAccordion() {
  return (
    <AccordionWithCombobox
      heading="Regulation Marks"
      placeholder="Type a mark"
      field="marks"
      data={[
        { id: 'd', name: 'D' },
        { id: 'f', name: 'F' },
      ]}
    />
  );
}

// Async function to fetch and render subtypes accordion
export function SortAccordion() {
  const order = [
    { id: 'cardmarket', name: 'Cardmarket Prices' },
    { id: 'tcgplayer', name: 'TCGPlayer Prices' },
    { id: 'name', name: 'Card Name' },
    { id: 'number', name: 'Card Number' },
    { id: 'pokedex', name: 'National Pokedex' },
    { id: 'release', name: 'Release Date' },
  ];

  return (
    <AccordionWithCombobox
      heading="Sort"
      placeholder="Sort by"
      field="orderBy"
      data={order}
    />
  );
}
