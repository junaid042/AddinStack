import type { AddinStackConfig } from "../runtime/config";

export interface AddinStackPluginContext {
    config: AddinStackConfig;
}

export interface AddinStackPlugin {
    name: string;

    setup?: (ctx: AddinStackPluginContext) => void | Promise<void>;

    onReady?: () => void | Promise<void>;

    onError?: (error: unknown) => void;
}