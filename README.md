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

### Pre-commit Hooks

This project includes a git pre-commit hook that automatically runs:
- **ESLint** - Linting checks to ensure code quality
- **Unit Tests** - Frontend unit tests to prevent broken code from being committed

The hook will:
- ✅ **Allow the commit** if both linting and tests pass
- ❌ **Block the commit** if either linting or tests fail

This ensures that no broken code gets committed to the repository.

**Note:** The pre-commit hook is automatically installed when you run `./run setup`. The hook is stored in `git_hooks/pre-commit` and copied to `.git/hooks/pre-commit` during setup.

### Alternative: Using npm directly

If you prefer using npm directly:

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
# Visit: http://localhost:5173/

# Run unit tests
npm test

# Run ESLint
npm run lint

# Build for production
npm run build
```
