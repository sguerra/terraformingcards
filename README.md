# Terraforming Cards
Terraforming Cards is a fanmade site to create custom cards for Terraforming Cards board game

## Features

### Card Editor & Live Preview
<img src="./docs/live-edit-card.png"/>

### Share generated card image URL (Stored in Cloudinary)
<img src="./docs/share-card.png"/>

## Stack

[![cloudinary](https://img.shields.io/badge/Cloudinary-darkblue?style=for-the-badge)](https://cloudinary.com)
[![React.js](https://img.shields.io/badge/react.js-black?style=for-the-badge&logo=react)](https://reactjs.org)
[![Typescript](https://img.shields.io/badge/Typescript-white?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org//)
[![Vite](https://img.shields.io/badge/vite-yellow?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![Tailwind](https://img.shields.io/badge/tailwind%20css-0f172a?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

## Live Sample

[![terraformingcards.com](https://img.shields.io/badge/terraformingcards.com-white?style=for-the-badge&logo=digitalocean)](http://terraformingcards.com)

## Run locally

```bash
git clone git@github.com:sguerra/terraformingcards.git
cd terraformingcards
npm install

# Rename .env.sample file to .env and set Cloudinary variables
# VITE_CLOUDINARY_PRODUCT_ENVIRONMENT with your product env
# VITE_CLOUDINARY_API_KEY with your API key
# VITE_CLOUDINARY_UPLOAD_PRESET with a public upload preset

npm run dev
```

## Contribute

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg)](https://stackblitz.com/github/sguerra/terraformingcards)
[![Open in Codeflow](https://developer.stackblitz.com/img/open_in_codeflow_small.svg)](https:///pr.new/sguerra/terraformingcards)