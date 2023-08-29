import { HexColor } from '~/models/colors';

export interface NightSkyConfiguration {
  starCount: number;
  color: HexColor;
  minRadius: number;
  maxRadius: number;
  minOpacity: number;
  maxOpacity: number;
  minSpeed: number;
  maxSpeed: number;
}

export interface TypeWriterConfiguration {
  content: string[];
  cursor?: string;
  typeSpeed?: number;
  awaitDuration?: number;
  repeat?: boolean;
}
