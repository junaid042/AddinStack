import { getHost } from "./getHost";
import { getConfig } from "../runtime/config";

export function requireHost(expectedHost: Office.HostType) {
    const current = getHost();
    const config = getConfig();

    if (current !== expectedHost) {
        const message = `[AddinStack] Expected host ${expectedHost}, but running in ${current}.`;

        if (config.strict) {
            throw new Error(message);
        }

        console.warn(message);
    }
}