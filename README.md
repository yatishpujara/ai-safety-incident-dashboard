# AI Safety Incident Dashboard

A React-based dashboard for tracking and managing AI safety incidents. This project was created as a frontend take-home assignment for HumanChain.

## Features

- View a list of AI safety incidents with their titles, severity levels, and reported dates
- Filter incidents by severity level (All, Low, Medium, High)
- Sort incidents by date (Newest First, Oldest First)
- View detailed descriptions of incidents
- Report new incidents with title, description, and severity level
- Responsive design that works on both desktop and mobile devices

## Tech Stack

- React 18
- TypeScript
- Vite
- CSS (Flexbox/Grid for layout)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

- `src/App.tsx` - Main application component
- `src/types.ts` - TypeScript type definitions
- `src/mockData.ts` - Sample incident data
- `src/App.css` - Component-specific styles
- `src/index.css` - Global styles

## Design Decisions

- Used React's useState for state management to keep the implementation simple and focused
- Implemented responsive design using CSS Flexbox and Grid
- Used TypeScript for type safety and better developer experience
- Created a clean, modern UI with appropriate spacing and visual hierarchy
- Added hover effects and transitions for better user interaction
- Implemented form validation for the new incident submission

## Challenges

- Managing the state for expanded/collapsed incident details
- Implementing responsive design for different screen sizes
- Ensuring proper type safety throughout the application 