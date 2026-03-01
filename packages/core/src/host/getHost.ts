let cachedHost: Office.HostType | null = null;

export function getHost(): Office.HostType {
    if (!Office?.context?.host) {
        throw new Error("[AddinStack] Office not initialized.");
    }

    if (!cachedHost) {
        cachedHost = Office.context.host;
    }

    return cachedHost;
}

export const isExcel = () => getHost() === Office.HostType.Excel;
export const isWord = () => getHost() === Office.HostType.Word;
export const isOutlook = () => getHost() === Office.HostType.Outlook;