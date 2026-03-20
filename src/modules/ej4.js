import * as fs from 'node:fs'

async function copiarArchivo(archivoActual, archivoNuevo) {
    try {
    fs.writeFileSync(archivoNuevo, "")
    fs.copyFileSync(archivoActual, archivoNuevo)
    console.log(`El archivo ${archivoActual} fue copiado al archivo ${archivoNuevo}`)
  } catch (err) {
    console.error('Error creando archivo:', err);
  }
}

export {copiarArchivo}