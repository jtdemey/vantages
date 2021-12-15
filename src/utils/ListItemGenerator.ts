import { TileListElement } from "../components/vantages/TileList";

export const genLi = (href: string, text: string): TileListElement => ({
  href,
  text
});
