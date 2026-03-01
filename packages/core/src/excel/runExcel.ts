export async function runExcel<T>(
    callback: (context: Excel.RequestContext) => Promise<T> | T
): Promise<T> {
    if (!Office?.context) {
        throw new Error("[AddinStack] Office not initialized.");
    }

    return Excel.run(async (context) => {
        try {
            const result = await callback(context);
            await context.sync();
            return result;
        } catch (error) {
            console.error("[AddinStack] Excel error:", error);
            throw error;
        }
    });
}