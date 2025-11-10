# spend-wise-web-app
This is a web ui for the spend-wise application

## Project Structure

```
spend-wise-web-app
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── assets/
│   ├── routes/
│   ├── utils/
│   ├── components/
│   ├── index.css
│   └── main.tsx
├── test/
│   ├── components/
│   └── utils/
├── README.md
├── tsconfig.json
├── vite.config.ts
├── package.json
├── package-lock.json
└── vite.svg
```

Folder notes:
- `src/`: Application source code.
- `src/components/`: Reusable UI components.
- `src/routes/`: Route-level components / pages.
- `src/utils/`: Helper utilities and pure functions.
- `src/assets/`: Images, fonts, static media imported into code.
- `test/`: Test files mirroring `src` structure.

## Getting Started

### Quick Start

Use the `./run` script for common commands:

```bash
# Install dependencies
./run setup

# Run the development server
./run client
# Visit: http://localhost:5173/

# Run frontend unit tests
./run test

# Run ESLint with auto-fix
./run lint

# Build for production
./run build

# Show usage information
./run usage
```

### Available Commands

- `./run setup` - Install project dependencies
- `./run client` - Run the Vite development server
- `./run test` - Run frontend unit tests
- `./run lint` - Run ESLint with auto-fix
- `./run build` - Build the project for production
- `./run usage` - Show usage information

### Alternative: Using npm directly

If you prefer using npm directly:

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
# Visit: http://localhost:5173/

# Build for production
npm run build

# Run ESLint
npm run lint
```
