export interface AddinStackConfig {
    strict?: boolean;
    debug?: boolean;
    timeout?: number;
}

let internalConfig: Required<AddinStackConfig> = {
    strict: false,
    debug: false,
    timeout: 10000
};

export function setConfig(config: AddinStackConfig) {
    internalConfig = {
        ...internalConfig,
        ...config
    };
}

export function getConfig(): Required<AddinStackConfig> {
    return internalConfig;
}