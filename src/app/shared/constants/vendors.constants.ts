export const voidTraderName: string = "Baro Ki'Teer";

export enum ShardColor {
  BLUE = 'Azure',
  YELLOW = 'Amber',
  RED = 'Crimson',
}

export interface ShardAnchor {
  timestamp: number;
  color: ShardColor;
}

export const BIRD3_ROTATION_CONFIG = {
  // Reset anchor: Sept 21, 2026, 00:00:00 UTC -> Azure Archon Shard
  START_ANCHOR: {
    timestamp: Date.UTC(2026, 8, 21, 0, 0, 0),
    color: ShardColor.BLUE,
  } as ShardAnchor,

  WEEK_IN_MS: 7 * 24 * 60 * 60 * 1000,

  SHARD_SEQUENCE: [ShardColor.BLUE, ShardColor.YELLOW, ShardColor.RED],
};
