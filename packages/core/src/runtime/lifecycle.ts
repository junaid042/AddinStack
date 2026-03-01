import { getConfig } from "./config";

let isBootstrapped = false;

export async function bootstrap(initFn: () => Promise<void>) {
    if (isBootstrapped) return;

    const config = getConfig();

    try {
        await initFn();
        isBootstrapped = true;

        if (config.debug) {
            console.log("[AddinStack] Bootstrapped successfully.");
        }

    } catch (error) {
        if (config.strict) {
            throw error;
        }

        console.error("[AddinStack] Bootstrap failed:", error);
    }
}

export function isInitialized() {
    return isBootstrapped;
}