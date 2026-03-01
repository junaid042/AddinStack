import { initOffice } from "../init/initOffice";
import { setConfig, getConfig, AddinStackConfig } from "./config";
import { PluginManager } from "../plugins/manager";
import type { AddinStackPlugin } from "../plugins/types";

export interface AddinStackApp {
    start(): Promise<void>;
    use(plugin: AddinStackPlugin): void;
}

export function createAddinStack(
    userConfig: Partial<AddinStackConfig> = {}
): AddinStackApp {
    setConfig(userConfig);
    const config = getConfig();

    const plugins = new PluginManager();

    return {
        use(plugin: AddinStackPlugin) {
            plugins.register(plugin);
        },

        async start() {
            try {
                await initOffice();
                await plugins.setupAll();
                await plugins.readyAll();
            } catch (error) {
                plugins.errorAll(error);

                if (config.strict) {
                    throw error;
                }

                console.error("[AddinStack]", error);
            }
        }
    };
}