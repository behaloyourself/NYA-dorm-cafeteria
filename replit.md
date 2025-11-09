# NYA Dorm Menu Website

## Overview
A single-page web application for North Yarmouth Academy's dorm cafeteria. Students can view the weekly menu, participate in dessert surveys, and submit feedback or suggestions.

## Features
- **Weekly Menu Display**: Shows the cafeteria menu for Monday through Friday
- **Dessert Survey**: Links to external Google Form for dessert preferences
- **Feedback System**: Students can submit complaints and suggestions which are stored in-memory
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Works on mobile and desktop devices
- **School Branding**: Orange and black color scheme representing NYA Panthers

## Project Structure

### Frontend (`client/`)
- **Pages**:
  - `Home.tsx`: Main page containing all sections
  
- **Components**:
  - `Header.tsx`: Sticky navigation header with school title and section links
  - `WeeklyMenu.tsx`: Weekly menu display with meal items
  - `SurveySection.tsx`: External survey link
  - `FeedbackForm.tsx`: Interactive form for submitting feedback

### Backend (`server/`)
- **API Routes** (`routes.ts`):
  - `POST /api/feedback`: Submit new feedback
  - `GET /api/feedback`: Retrieve all feedback submissions
  
- **Storage** (`storage.ts`):
  - In-memory storage for feedback submissions
  - Persists during server runtime only

### Shared (`shared/`)
- **Schema** (`schema.ts`):
  - `Feedback`: Feedback submission schema
  - Type definitions and Zod validation schemas

## Technology Stack
- **Frontend**: React, Wouter (routing), TanStack Query, Shadcn UI, Tailwind CSS
- **Backend**: Express.js, TypeScript
- **Storage**: In-memory (MemStorage)
- **Validation**: Zod

## Color Scheme
- Primary: Orange (#FF8C00) - NYA Panthers school color
- Secondary: Black - NYA Panthers school color
- Theme: Supports light and dark modes

## Running the Application
The application runs on port 5000 via `npm run dev`, which starts both the Express backend and Vite frontend development server.

## Recent Changes
- Changed title from "Boarding Cafeteria Menu" to "NYA Dorm Menu"
- Updated color scheme from green to orange and black
- Implemented fully functional feedback submission system
- Added backend API for storing and retrieving feedback
