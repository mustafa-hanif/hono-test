import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { Zero } from "@rocicorp/zero";
import { ZeroProvider } from "@rocicorp/zero/react";
import { schema } from "./prisma/zero/schema";

// In a real app, you might initialize this inside of useMemo
// and use a real auth token
const z = new Zero({
  userID: "anon",
  server: "http://localhost:4848", // import.meta.env.CLIENT_URL,
  schema,
  kvStore: "mem", // or "idb" for IndexedDB persistence
});

console.log(z)

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultPreloadDelay: 1000,
  defaultPendingMinMs: 0,
  context: {
    // This will be required to be passed now
    user: {
      name: 'Guest'
    },
    session: null
  },
})

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('app')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <ZeroProvider zero={z}>
    <RouterProvider router={router} />
    </ZeroProvider>
  )
}
