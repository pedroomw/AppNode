import { URL } from "url";

function parsearUrl(urlString) {
    try {
        const url = new URL(urlString);

        let parametros = {};
        url.searchParams.forEach((value, key) => {
            parametros[key] = value;
        });

        return {
            host: url.origin,
            pathname: url.pathname,
            parametros: parametros
        };

    } catch (error) {
        console.error("Error al parsear la URL:", error.message);
    }
}

export {parsearUrl}