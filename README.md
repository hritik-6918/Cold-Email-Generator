# Cold Email Generator

A React application that helps users generate personalized cold emails for job applications by analyzing job descriptions.

## Features

- 📝 Paste job description and generate personalized emails
- 🎯 Automatically extracts key information:
  - Company name
  - Job role
  - Required skills
  - Key requirements
- 📋 One-click copy to clipboard
- 🎨 Clean, responsive UI with Tailwind CSS
- ⚡ Built with Vite for optimal performance

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)

## Project Structure

```
src/
├── components/
│   ├── EmailGenerator.tsx    # Main email generation component
│   ├── GeneratedEmail.tsx    # Email display and copy functionality
│   ├── JobDescriptionInput.tsx # Job description input form
│   └── Footer.tsx           # Application footer
├── utils/
│   ├── extractKeywords.ts   # Job description parsing logic
│   └── generateEmailContent.ts # Email template generation
└── App.tsx                  # Root component
```

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

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

Feel free to submit issues and enhancement requests.

## License

MIT

## Author

Built by hritik6918 with 💖