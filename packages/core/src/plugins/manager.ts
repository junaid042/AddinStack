import type { AddinStackPlugin } from "./types";
import { getConfig } from "../runtime/config";

export class PluginManager {
    private plugins: AddinStackPlugin[] = [];

    register(plugin: AddinStackPlugin) {
        this.plugins.push(plugin);
    }

    async setupAll() {
        const config = getConfig();

        for (const plugin of this.plugins) {
            await plugin.setup?.({ config });
        }
    }

    async readyAll() {
        for (const plugin of this.plugins) {
            await plugin.onReady?.();
        }
    }

    errorAll(error: unknown) {
        for (const plugin of this.plugins) {
            plugin.onError?.(error);
        }
    }
}