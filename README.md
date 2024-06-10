# Recipe Explorer

Welcome to Recipe Explorer! This project is a comprehensive kitchen recipe web application built using modern web technologies.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Future Updates](#future-updates)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Project Overview

Recipe Explorer is a dynamic web application designed to enhance my front-end development skills and provide a platform to search, filter, and save kitchen recipes from around the world. The app allows users to filter recipes by state or continent, search for specific recipes dynamically, and view detailed information about each recipe. It integrates with the Spoonacular API to fetch a vast array of recipes.

## Technologies Used

- **Next.js**: Version 14
- **React**: Version 18
- **Next-Auth**: Version 5
- **Spoonacular API**: For fetching recipes
- **Authentication**: Google provider via Next-Auth

## Features

- **Global Recipe Search**: Search for recipes from all around the world.
- **Filtering**: Filter recipes based on state or continent.
- **Dynamic Search**: Search for recipes dynamically as you type.
- **Save Recipes**: Save your favorite recipes for easy access.
- **Recipe Details**: View detailed information about each recipe.
- **Authentication**: Secure authentication using Google provider via Next-Auth.

## Future Updates

Version 1 is currently live. In upcoming updates, the following features will be added:

- Inclusion of Albanian cuisine recipes.
- Improved user experience (UX) and user interface (UI).

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/AlbinIzmaku/kitchen-app.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd kitchen-app
    ```
3. **Install dependencies**:
    ```bash
    npm install
    ```
4. **Create a `.env.local` file and add your environment variables** (e.g., Spoonacular API key, Next-Auth secret, Google provider client ID and secret).

5. **Run the development server**:
    ```bash
    npm run dev
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Search for recipes from various cuisines around the world.
3. Use the filters to narrow down your search results.
4. Save your favorite recipes for easy access.
5. Sign in using your Google account to unlock all features.

For a live demo, visit: [Recipe Explorer](https://kitchen-app-silk.vercel.app/)

## Credits

- **Design**: Credits to JEGA_JNR for the design inspiration.

---
