// Init (optional direct use)
export { initOffice } from "./init/initOffice";

// Host
export { getHost, isExcel, isWord, isOutlook } from "./host/getHost";

// Requirements
export { hasRequirement } from "./requirements/hasRequirement";

// Excel
export { runExcel } from "./excel/runExcel";

export { requireHost } from "./host/requireHost";

// Runtime
export type { AddinStackPlugin } from "./plugins/types";
export { createAddinStack } from "./runtime/createAddinStack";
export type { AddinStackConfig } from "./runtime/config";