export interface Item {
  /**
   * value % 2 === 0
   */
  value: number;
  row: number;
  col: number;
  /**
   * Must be deleted on next tick if true
   */
  isOnDelete?: boolean;
}
