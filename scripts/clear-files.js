const fs = require('fs');
const path = require('path');

/**
 * @description Encuentra las carpetas que solo contienen un archivo index
 * @param {string} dir 
 * @returns 
 */
function findIndexOnlyFolders(dir) {
  const foldersToExclude = [];

  /**
   * @description Recorre las carpetas buscando las que solo contienen un archivo index.ts
   * @param {string} dir 
   */
  function walk(dir) {
    const files = fs.readdirSync(dir);
    if (files.length === 1 && files[0] === 'index.ts') {
      foldersToExclude.push(dir);
    } else {
      files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
          walk(fullPath);
        }
      });
    }
  }

  walk(dir);
  return foldersToExclude;
}

const foldersToExclude = findIndexOnlyFolders(path.resolve(__dirname + "/../", 'src/commons'));

// Escribe en el tsconfig.build.json excluyendo las carpetas
const tsConfigPath = path.resolve(__dirname + "/../", 'tsconfig.build.json');
const tsConfig = require(tsConfigPath);
const initExclude = ["node_modules", "test", "dist", "**/*spec.ts"];

tsConfig.exclude = initExclude.concat(
  foldersToExclude.map(folder => path.relative(__dirname + "/../", folder))
);

fs.writeFileSync(tsConfigPath, JSON.stringify(tsConfig, null, 2));
console.log('Carpetas con solo index.ts excluidas correctamente.');