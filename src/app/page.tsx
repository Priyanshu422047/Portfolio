import Header from '@/components/ui/Header';
import Introduction from '@/components/sections/Introduction';
import ChatbotButton from '@/components/ui/ChatbotButton';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center">
        <div className="w-full">
          <Introduction />
        </div>
        <ChatbotButton />
        <ThemeToggle />
      </main>
    </>
  );
}
