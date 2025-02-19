# NexReel: AI Short Video Generator

NexReel is an AI-driven short video generator that seamlessly combines cutting-edge web technologies with advanced AI services. The project harnesses the power of Next.js for its frontend and backend, TailwindCSS for rapid UI development, and several specialized APIs and libraries to generate dynamic video content—all while ensuring secure and scalable operations.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack & Use Cases](#tech-stack--use-cases)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Overview

NexReel automates the process of short video creation by leveraging AI for script generation, image synthesis, and video rendering. With built-in user authentication, a robust serverless database, and integrated AI APIs, the project provides an end-to-end solution for dynamic content generation. This README serves as both a technical guide and a documented report on the inner workings of NexReel.

## Features

- **AI-Powered Content Generation**: Generate scripts and captions using the Gemini API
- **Dynamic Image Generation**: Create custom images with Replicate to visually complement the video narrative
- **Programmatic Video Rendering**: Use Remotion to assemble video assets into a cohesive short video
- **Robust Authentication**: Secure user sign-up and sign-in processes with Clerk
- **Scalable Database Management**: Leverage Neon's serverless PostgreSQL and Drizzle ORM for type-safe database interactions
- **Advanced Media Processing**: Utilize Assembly AI (and related APIs) for tasks such as speech-to-text conversion and audio analysis
- **Modern Frontend Development**: Build responsive, modern UIs with Next.js and TailwindCSS, enhanced with Shadcn's pre-designed components

## Tech Stack & Use Cases

### Next.js
**Purpose**: Serves as the primary framework handling both client-side rendering and backend API routes.
```bash
npx create-next-app@latest
```

### TailwindCSS
**Purpose**: Provides a utility-first CSS framework for designing responsive and modern UIs.
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Shadcn
**Purpose**: Offers customizable UI components that integrate with TailwindCSS, speeding up front-end development.
```bash
npm install @shadcn/ui
```

### Clerk (Authentication)
**Purpose**: Manages secure user authentication, including sign-in, sign-up, and session management.
```bash
npm install @clerk/nextjs
```

### Neon (Database)
**Purpose**: Provides a serverless PostgreSQL database solution for storing user data, video metadata, and more.

Setup:
1. Create an account at [Neon.tech](https://neon.tech/)
2. Set up your database and obtain the connection string
3. Use the connection string in your environment configuration

### Drizzle (ORM)
**Purpose**: Enables type-safe and efficient database queries using a modern ORM tailored for TypeScript.
```bash
npm install drizzle-orm
```

### Gemini API
**Purpose**: Utilized for natural language processing tasks, such as generating video scripts and captions.
```bash
npm install gemini-api
```

### Assembly AI
**Purpose**: Provides media processing capabilities including audio transcription and analysis.
```bash
npm install assemblyai
```

### Remotion
**Purpose**: Allows programmatic video generation using React, enabling dynamic video creation and rendering.
```bash
npm install remotion
```

### Replicate
**Purpose**: Integrates state-of-the-art image generation models to produce visuals that match the video narrative.
```bash
npm install replicate
```

## Installation & Setup

1. **Clone the Repository**:
```bash
git clone https://github.com/yourusername/NexReel.git
cd NexReel
```

2. **Install Project Dependencies**:
```bash
npm install
```

3. **Manual Package Installation** (if setting up from scratch):
```bash
# Next.js
npx create-next-app@latest

# TailwindCSS & PostCSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Shadcn UI Components
npm install @shadcn/ui

# Clerk for Authentication
npm install @clerk/nextjs

# Neon & PostgreSQL Client
npm install pg

# Drizzle ORM for Database Operations
npm install drizzle-orm

# Gemini API for Script Generation
npm install gemini-api

# Assembly AI for Media Processing
npm install assemblyai

# Remotion for Video Rendering
npm install remotion

# Replicate for Image Generation
npm install replicate
```

## Environment Variables

Create a `.env` file in the root directory with the following content:

```env
NEXT_PUBLIC_DRIZZLE_DATABASE_URL=your_drizzle_api_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_public_api_key
CLERK_SECRET_KEY=your_clerk_secret_api_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_GEMINI_API_KEY=your_google_gemini_public_api_key
GOOGLE_API_KEY=your_google_gemini_private_api_key
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
CAPTION_API=your_caption_api_key
REPLICATE_API_TOKEN=your_replicate_api_key
```

These environment variables are crucial for:
- Database connectivity via Drizzle and Neon
- User authentication through Clerk
- Interfacing with AI services (Gemini API, Assembly AI, Replicate, etc.)
- Other platform-specific integrations like Firebase and captioning services

## Usage

### Running the Development Server
```bash
npm run dev
```
Then, navigate to `http://localhost:3000` in your browser to see NexReel in action.

### Building for Production
```bash
npm run build
npm start
```

### Video Generation Workflow
1. **User Authentication**: Secure login/sign-up handled by Clerk
2. **Content Generation**: The Gemini API generates scripts and captions based on user input
3. **Asset Creation**: Replicate creates tailored images, while Assembly AI processes audio inputs
4. **Video Rendering**: Remotion compiles these assets into a final video
5. **Data Management**: All user data and video metadata are stored securely in the Neon database, accessed via Drizzle

## Contributing

Contributions are welcomed! If you wish to enhance NexReel, please follow these steps:

1. **Fork the Repository**: Click the fork button on GitHub
2. **Create a New Branch**:
```bash
git checkout -b feature/YourFeatureName
```
3. **Commit Your Changes**:
```bash
git commit -m "Add feature description"
```
4. **Push to Your Branch**:
```bash
git push origin feature/YourFeatureName
```
5. **Open a Pull Request**: Explain your changes and improvements in detail

Please review the [Contributing Guidelines](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project) for further details.

## License

NexReel is distributed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn](https://ui.shadcn.com/)
- [Clerk](https://clerk.com/)
- [Neon](https://neon.tech/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Gemini API](https://ai.google.dev/)
- [Assembly AI](https://www.assemblyai.com/)
- [Remotion](https://www.remotion.dev/)
- [Replicate](https://replicate.com/)
- [Firebase](https://firebase.google.com/)