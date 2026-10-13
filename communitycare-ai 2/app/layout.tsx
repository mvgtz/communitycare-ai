import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/components/provider';
export const metadata:Metadata={title:'CommunityCare AI | Beyond Shadowing',description:'Bringing Preventive Medicine Beyond the Clinic. Educational prototype using synthetic patient data only.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><AppProvider>{children}</AppProvider></body></html>;}
