# Open Doors for Maui

The website is built using [Firebase](https://console.firebase.google.com/), [Next.js](https://nextjs.org/) and deployed at [Vercel](https://vercel.com/).

## Development

The code was forked from [Hawaiians in Tech](https://hawaiiansintech.org/). The following instructions should help you running on your local machine to get started.

### Install the dependencies

Making sure you're in the correct project folder and install the dependencies:

```
yarn install
```

### Run the project locally

To start the development server run:

```
yarn dev
```

In your browser, open `localhost:3000`.

You can also load mock data in `index.tsx` by updating the import statement to `"@/lib/stubApi"`

```javascript
import {
  Focus,
  getFocuses,
  getIndustries,
  getMembers,
  Industry,
  MemberPublic,
} from "@/lib/api";
/* 🔺🔺🔺🔺🔺🔺🔺 */
```

### Deploy at vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https%3A%2F%2Fgithub.com%2Fjskoiz%2Fopendoorsformaui)

### Useful VS Code extensions

The following are a few useful VS Code extensions that may help during development:

- `prettier`
- `eslint`
- `beautify`
- `vscode-styled-components`
