import { redirect } from 'next/navigation';

export default function RootPage() {
  // Middleware will handle the redirect
  redirect('/en');
}
