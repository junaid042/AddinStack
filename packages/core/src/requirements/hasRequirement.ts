import { getConfig } from "../runtime/config";

export function hasRequirement(
    setName: string,
    version: string
): boolean {
    const supported =
        Office?.context?.requirements?.isSetSupported(setName, version) ?? false;

    const config = getConfig();

    if (!supported && config.strict) {
        throw new Error(
            `[AddinStack] Requirement ${setName} ${version} not supported.`
        );
    }

    if (!supported && config.debug) {
        console.warn(
            `[AddinStack] Requirement ${setName} ${version} not supported.`
        );
    }

    return supported;
}