import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from '@/lib/registry'
import Head from 'next/head';
import GlobalProvider from '@/hooks/useGlobalContext';

// Message
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vendas Online',
  description: 'Loja online next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <GlobalProvider>
            <ToastContainer autoClose={5000} />
            {children}
          </GlobalProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
