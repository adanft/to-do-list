import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import ThemeProvider from './store/provider/theme-provider';
import Navbar from '@/components/navbar';
import { TaskDataProvider } from './store/provider/task-provider';

const inter = Poppins({
	weight: ['400', '500', '600', '700'],
	style: ['normal'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'To Do',
	description:
		'Simplify your day with our easy-to-use todo list app. Stay organized and get things done effortlessly!',
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={`${inter.className} overflow-hidden`}>
				<ThemeProvider>
					<TaskDataProvider>
						<Navbar />
						<main className="container mx-auto relative overflow-auto top-14 p-4 max-h-[calc(100vh-3.5rem)] min-h-[calc(100vh-3.5rem)] text-color bg-primary z-0 main-scroll">
							{children}
						</main>
					</TaskDataProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}

export default RootLayout;
