import { requireHost } from "../host/requireHost";
import { getConfig } from "../runtime/config";

export async function runExcel<T>(
    callback: (context: Excel.RequestContext) => Promise<T> | T
): Promise<T> {
    requireHost(Office.HostType.Excel);

    const config = getConfig();

    return Excel.run(async (context) => {
        try {
            const result = await callback(context);
            await context.sync();
            return result;
        } catch (error) {
            if (config.strict) {
                throw error;
            }

            console.error("[AddinStack] Excel error:", error);
            throw error;
        }
    });
}