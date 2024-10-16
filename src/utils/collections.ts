export enum PROCESSING_LEVEL_KEYS {
  CALIBRATED = "Calibrated",
  DERIVED = "Derived",
  PARTIALLY_PROCESSED = "Partially Processed",
  RAW = "Raw",
  TELEMETRY = "Telemetry",
  UNKNOWN = "Unknown"
};

export enum PROCESSING_LEVEL_TITLES {
  CALIBRATED = "Calibrated Data Products",
  DERIVED = "Derived Data Products",
  PARTIALLY_PROCESSED = "Partially Processed Data Products",
  RAW = "Raw Data Products",
  TELEMETRY = "Telemetry Data Products",
  UNKNOWN = "Unknown Processing Level"
};

export const convertProcessingLevelKey = (key:string) => {
  return key.toUpperCase().replace(" ", "_") as keyof typeof PROCESSING_LEVEL_TITLES;
}