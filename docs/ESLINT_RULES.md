# ESLint Rules and What They Catch

## Overview
ESLint now catches both **code quality issues** and **formatting issues**. This document lists all the rules that are active.

## How to Use

### Check for errors:
```bash
npm run lint
```

### Auto-fix errors:
```bash
npm run lint:fix
```

## What ESLint Catches

### 🔴 Code Quality Rules (from recommended configs)

#### JavaScript Recommended Rules
- **Unused variables** - Variables declared but never used
- **Unreachable code** - Code after return/throw statements
- **Undefined variables** - Using variables that don't exist
- **Duplicate keys** - Duplicate keys in objects
- **Invalid regex** - Malformed regular expressions
- **Type errors** - TypeScript type checking errors

#### TypeScript Recommended Rules
- **Type errors** - Type mismatches, missing types
- **Unused imports** - Imported modules not used
- **Any types** - Usage of `any` type (if configured)
- **Type assertions** - Unsafe type assertions

#### React Hooks Rules
- **Rules of Hooks** - Hooks must be called in the same order
- **Exhaustive deps** - useEffect dependencies must be complete
- **Hook dependencies** - Missing or incorrect dependencies

#### React Refresh Rules
- **Component exports** - Components must be properly exported for HMR

---

### 🎨 Formatting Rules (newly added)

#### Blank Lines & Spacing
- **`no-multiple-empty-lines`** - ❌ More than 1 blank line
  - Example: Multiple blank lines between code blocks
  - Auto-fixable: ✅ Yes

- **`no-trailing-spaces`** - ❌ Spaces at end of lines
  - Example: `const x = 5   ` (trailing spaces)
  - Auto-fixable: ✅ Yes

- **`eol-last`** - ❌ Missing newline at end of file
  - Auto-fixable: ✅ Yes

#### Quotes & Semicolons
- **`quotes`** - ❌ Single quotes instead of double quotes
  - Example: `const x = 'hello'` → should be `"hello"`
  - Auto-fixable: ✅ Yes

- **`semi`** - ❌ Missing semicolons
  - Example: `const x = 5` → should be `const x = 5;`
  - Auto-fixable: ✅ Yes

#### Indentation
- **`indent`** - ❌ Incorrect indentation (must be 2 spaces)
  - Auto-fixable: ✅ Yes

#### Object & Array Formatting
- **`object-curly-spacing`** - ❌ Missing spaces in object literals
  - Example: `{a:1}` → should be `{ a: 1 }`
  - Auto-fixable: ✅ Yes

- **`array-bracket-spacing`** - ❌ Spaces in array brackets
  - Example: `[ 1, 2 ]` → should be `[1, 2]`
  - Auto-fixable: ✅ Yes

- **`comma-dangle`** - ❌ Missing trailing commas in multiline
  - Example: `{ a: 1, b: 2 }` → should be `{ a: 1, b: 2, }`
  - Auto-fixable: ✅ Yes

- **`comma-spacing`** - ❌ Incorrect spacing around commas
  - Example: `[1,2,3]` → should be `[1, 2, 3]`
  - Auto-fixable: ✅ Yes

- **`key-spacing`** - ❌ Incorrect spacing around colons
  - Example: `{a:1}` → should be `{a: 1}`
  - Auto-fixable: ✅ Yes

#### Function & Block Formatting
- **`space-before-blocks`** - ❌ Missing space before blocks
  - Example: `if(x){` → should be `if (x) {`
  - Auto-fixable: ✅ Yes

- **`space-before-function-paren`** - ❌ Incorrect spacing before function parentheses
  - Auto-fixable: ✅ Yes

- **`space-in-parens`** - ❌ Spaces inside parentheses
  - Example: `( 1, 2 )` → should be `(1, 2)`
  - Auto-fixable: ✅ Yes

- **`space-infix-ops`** - ❌ Missing spaces around operators
  - Example: `x=5` → should be `x = 5`
  - Auto-fixable: ✅ Yes

- **`arrow-spacing`** - ❌ Incorrect spacing in arrow functions
  - Example: `()=>x` → should be `() => x`
  - Auto-fixable: ✅ Yes

- **`keyword-spacing`** - ❌ Missing spaces around keywords
  - Example: `if(x)` → should be `if (x)`
  - Auto-fixable: ✅ Yes

#### Brace Style
- **`brace-style`** - ❌ Incorrect brace placement (must be 1tbs)
  - Example: Opening brace on new line
  - Auto-fixable: ✅ Yes

- **`curly`** - ❌ Missing curly braces for if/else/for/while
  - Example: `if (x) return;` → should be `if (x) { return; }`
  - Auto-fixable: ✅ Yes

#### Other Formatting
- **`no-multi-spaces`** - ❌ Multiple consecutive spaces
  - Example: `const x  =  5` → should be `const x = 5`
  - Auto-fixable: ✅ Yes

---

## Current Errors Found

When you run `npm run lint`, you'll see errors like:

```
/Users/.../src/routes/HealthCheck.tsx
  16:1   error  More than 1 blank line not allowed  no-multiple-empty-lines
  32:27  error  Missing semicolon                    semi
  33:1   error  Too many blank lines at end of file  no-multiple-empty-lines
```

## Auto-Fix

Most formatting errors can be auto-fixed:
```bash
npm run lint:fix
```

This will automatically fix:
- ✅ Extra blank lines
- ✅ Missing semicolons
- ✅ Quote style
- ✅ Spacing issues
- ✅ Indentation
- ✅ And more...

## Customization

If you want to adjust any rules, edit `eslint.config.js` and modify the `rules` section.

### Example: Allow single quotes
```javascript
rules: {
  'quotes': ['error', 'single'], // Change from 'double' to 'single'
}
```

### Example: Allow multiple blank lines
```javascript
rules: {
  'no-multiple-empty-lines': ['error', { max: 2 }], // Allow up to 2 blank lines
}
```

### Example: Disable a rule
```javascript
rules: {
  'curly': 'off', // Disable curly braces requirement
}
```

