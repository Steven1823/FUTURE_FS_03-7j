# Spotify Redesign

A modern redesign of the Spotify web application with real Spotify API integration.

## Features

- Real Spotify API integration
- OAuth authentication
- Mood-based UI themes
- Responsive design
- Playlist browsing
- User profile

## Setup

### Prerequisites

- Node.js 18+ and npm
- A Spotify Developer account

### Spotify API Setup

1. Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/)
2. Create a new application
3. Set the Redirect URI to `http://localhost:3000/callback`
4. Note your Client ID and Client Secret

### Environment Variables

1. Copy `.env.local.example` to `.env.local`
2. Fill in your Spotify API credentials:
   \`\`\`
   SPOTIFY_CLIENT_ID=your_client_id_here
   SPOTIFY_CLIENT_SECRET=your_client_secret_here
   SPOTIFY_REDIRECT_URI=http://localhost:3000/callback
   NEXT_PUBLIC_SPOTIFY_CLIENT_ID=your_client_id_here
   NEXT_PUBLIC_SPOTIFY_REDIRECT_URI=http://localhost:3000/callback
   \`\`\`

### Installation

\`\`\`bash
# Install dependencies
npm install

# Run the development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project can be deployed on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Set the environment variables in the Vercel dashboard
4. Deploy

## Technologies Used

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Spotify Web API

## License

MIT
