# Open Doors for Maui

_Open Doors for Maui_ is a community-built directory designed to connect those displaced by the Maui fires with individuals and organizations eager to help.

**ODFM (Open Doors for Maui)** is a live directory where anyone affected and seeking shelter can seamlessly share their information with the pertinent organizations. The primary goal is to transparently showcase the genuine needs of the impacted community alongside the available resources, while ensuring the protection and privacy of sensitive user data.

This platform prioritizes the privacy of its users. All personally identifiable data shared is stored privately and securely. Such data is aggregated and shared only with organizations operating officially to assist those affected by the disaster.

## What Is This Platform For?

### For Thoe Willing to Host:

- Hosts can submit their details, specifying the number of people they can accommodate and the stay duration.
- **Public Listing**: Only the host's first name, last initial, generalized location, and capacity (individual or family) are shown publicly.
- **Privacy**: All other personal details remain private and are shared only with approved assisting organizations.

### For Shelter Seekers:

- Affected individuals or families can share their details, including family size and relocation preferences.
- **Public Details**: Only the first name, last initial, current general location, and need designation (individual or family) are publicly listed.
- **Privacy**: All other details are kept confidential and are shared only with approved assisting organizations.

### Available Space Listings:

Hotel groups, corporations, and individuals with available space are encouraged to share their willingness to help. Our goal is to connect those offering accommodations with those affected by the Maui fires in need of emergency housing.

## FAQ

### How did the idea originate?

We were driven to contribute after a news conference on 8/10 where Gov Green underscored the need to assist the sheltering of those affected.

### How was this built?

This project is an adaptation of _Hawaiians in Tech_ - a community and directory of Native Hawaiians in the tech sector, established by Emmit Parubrub & Taylor Ho. You can find the repository for Open Doors for Maui [here](#).

### How can profiles be updated or removed?

For any changes, including removal from the list, please [request here](mailto:contact@opendoorsformaui.com).

## About The Tech Stack

The website is constructed using [Airtable](https://airtable.com/), [Next.js](https://nextjs.org/), and is deployed via [Vercel](https://vercel.com/).

The code originates from [Hawaiians in Tech](https://hawaiiansintech.org/). Follow the instructions below to get started on your local machine:

#### Install the dependencies:

```
bash
yarn install
```

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
