import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
import { trTR } from "@clerk/localizations";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={trTR}>
      <html lang="en">
        <body>
          <SignedOut>
          </SignedOut>
          <SignedIn>
            <div className='ml-3 mt-3'>
              <UserButton />
            </div>
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}