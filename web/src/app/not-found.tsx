import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
    return (
        <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <h1 className="text-9xl font-bold text-slate-200">404</h1>
                <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-2">
                    Page Not Found
                </h2>
                <p className="text-slate-600 mb-8">
                    Sorry, we couldn&apos;t find the page you&apos;re looking for.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
                >
                    Go Home
                </Link>
            </div>
        </main>
    )
}
