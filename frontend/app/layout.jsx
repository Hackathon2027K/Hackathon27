import './globals.css';

export const metadata = {
  title: 'Hackathon 27 - International IT Competition',
  description: 'Join Hackathon 27, the ultimate global arena for developers, designers, and innovators to build cutting-edge IT solutions. Showcase your skills, win prizes, and collaborate.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-brand-grey-950 text-brand-grey-100 min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
