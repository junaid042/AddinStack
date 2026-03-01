export function hasRequirement(
    setName: string,
    version: string
): boolean {
    if (!Office?.context?.requirements) return false;

    return Office.context.requirements.isSetSupported(setName, version);
}