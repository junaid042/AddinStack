import { setConfig } from "./config";
import { bootstrap } from "./lifecycle";
import { initOffice } from "../init/initOffice";

export function createAddinStack(config = {}) {
    setConfig(config);

    return {
        async start() {
            await bootstrap(() => initOffice());
        }
    };
}