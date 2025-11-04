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

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```
Visit: http://localhost:5173/

### 3. Build for production
```bash 
npm run build
```

### 4. Linting
```bash
npm run lint
```
