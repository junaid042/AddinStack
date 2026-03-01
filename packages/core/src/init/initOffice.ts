let initialized = false;

export async function initOffice(timeout = 10000): Promise<void> {
    if (initialized) return;

    if (typeof Office === "undefined") {
        throw new Error("[AddinStack] Office.js not loaded.");
    }

    await new Promise<void>((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error("[AddinStack] Office initialization timeout."));
        }, timeout);

        Office.onReady(() => {
            clearTimeout(timer);
            initialized = true;
            resolve();
        });
    });
}