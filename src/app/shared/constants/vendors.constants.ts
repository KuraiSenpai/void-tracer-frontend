export const voidTraderName: string = "Baro Ki'Teer";

export enum ShardColor {
  RED = 'Crimson',
  BLUE = 'Azure',
  YELLOW = 'Amber',
}

export interface ShardAnchor {
  timestamp: number;
  color: ShardColor;
}

export const BIRD3_ROTATION_CONFIG = {
  // Reset anchor: Sept 21, 2026, 00:00:00 UTC -> Crimson Archon Shard
  START_ANCHOR: {
    timestamp: Date.UTC(2026, 8, 21, 0, 0, 0),
    color: ShardColor.RED,
  } as ShardAnchor,

  WEEK_IN_MS: 7 * 24 * 60 * 60 * 1000,

  SHARD_SEQUENCE: [ShardColor.RED, ShardColor.BLUE, ShardColor.YELLOW],
};
