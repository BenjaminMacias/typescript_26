# TypeScript 26

Colección de **ejercicios / scripts / mini–utilidades** escritos en **TypeScript**. El objetivo del repositorio es practicar el tipado, funciones puras, utilidades de CLI y patrones básicos/medios de TS.

---

## 🧰 Tecnologías utilizadas

- **TypeScript** (tipado estático)
- **Node.js** (entorno de ejecución)
- **ts-node** para ejecutar TS sin build (opcional)
- **Jest** para pruebas (opcional)
- **ESLint + Prettier** para lint/format (opcional)

> Si tu repo ya trae `tsconfig.json`, ESLint o Jest, simplemente usa lo que está. Si no, abajo dejo comandos sugeridos.

---

## 🚀 Instalación e inicio

> Requisitos: **Node.js 18+** y **npm** (o yarn/pnpm)

1) **Clonar e instalar**
```bash
git clone https://github.com/BenjaminMacias/typescript_26.git
cd typescript_26
npm install
Scripts típicos (si ya existen en tu package.json):


# Desarrollo con ts-node (sin build)
npm run dev

# Compilar a JavaScript (sale a /dist)
npm run build

# Ejecutar lo compilado
npm start

# Pruebas (si hay Jest configurado)
npm test

# Lint / Format (si están configurados)
npm run lint
npm run format
Si tu package.json aún no tiene scripts, puedes añadir algo así:


{
  "scripts": {
    "dev": "ts-node src/index.ts",
    "build": "tsc -p tsconfig.json",
    "start": "node dist/index.js",
    "test": "jest --passWithNoTests",
    "lint": "eslint .",
    "format": "prettier --write ."
  }
}
Y si te faltan dependencias mínimas:


npm i -D typescript ts-node @types/node
# opcionales:
npm i -D jest ts-jest @types/jest
npm i -D eslint prettier eslint-config-prettier eslint-plugin-import
Inicializar TypeScript (si no hay tsconfig):
npx tsc --init

🧪 Ejemplos de uso
1) Función simple y ejecución en dev
src/index.ts


function greet(name: string): string {
  return `Hola, ${name}!`;
}

console.log(greet("TypeScript"));
Ejecuta en modo dev (sin compilar):


npm run dev
Salida esperada:


Hola, TypeScript!
2) Compilar y ejecutar desde dist
npm run build
npm start
3) Ejecutar un ejercicio específico (si tienes varios archivos)
Por ejemplo, si tienes src/exercises/sum.ts:
npx ts-node src/exercises/sum.ts
o agrega a tus scripts:
"scripts": {
  "ts": "ts-node"
}
y luego:
npm run ts src/exercises/sum.ts
4) Pruebas con Jest (opcional)
Config (mínimo) para Jest + TS:
npx ts-jest config:init
Ejecutar pruebas:
npm test
