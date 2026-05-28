link--<https://portfolioupdated-gold.vercel.app/>

# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and MongoDB. Features include:
- Responsive design
- Dark mode support
- Interactive UI with animations
- Contact form
- AI chatbot assistant
- Project showcase
- Skills section
- Resume integration

## Tech Stack
- Next.js 14
- TypeScript
- Tailwind CSS
- MongoDB
- Framer Motion
- React Icons

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
MONGODB_URI=your_mongodb_uri
NEXT_PUBLIC_WEBSITE_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
```
src/
├── app/              # Next.js app router
├── components/       # React components
│   ├── sections/    # Page sections
│   └── ui/          # UI components
├── lib/             # Utility libraries
└── models/          # MongoDB models
```

## Deployment
The site can be deployed on any platform that supports Next.js, such as Vercel or Netlify.

## Contributing
Feel free to submit issues and enhancement requests.
