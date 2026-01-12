# Frontend Environment Variable Demo

This is a sample Vite project demonstrating how to use environment variables in a frontend application.

## Prerequisites

- Node.js installed

## Setup

1. Open a terminal in this directory (`frontend`).
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the browser using the URL shown in the terminal.

## How it Works

- **.env**: Contains the environment variables. Note that variables intended for the client must be prefixed with `VITE_`.
- **main.js**: Accesses these variables using `import.meta.env.VITE_VARIABLE_NAME`.

## Troubleshooting (WSL Users)

If you see errors like `UNC paths are not supported` or `C:\WINDOWS\system32\cmd.exe`, it means you are accidentally using the Windows version of Node.js inside WSL.

To fix this:

1. Run the `fix_node_wsl.sh` script provided in the root directory.
2. **Restart your terminal** to pick up the new Linux Node.js version.
3. Run `npm install` again.
