import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 🔴 Set this to 'true' to ENABLE maintenance mode. 
  // 🟢 Set this to 'false' to DISABLE it and restore the site.
  const isMaintenanceMode = true;

  // Allow passing through to the maintenance page, static assets, and images
  if (
    isMaintenanceMode &&
    !request.nextUrl.pathname.startsWith('/maintenance') &&
    !request.nextUrl.pathname.startsWith('/_next') &&
    !request.nextUrl.pathname.includes('.') // skips files like favicon, images, etc.
  ) {
    // Redirect all traffic to the maintenance page
    return NextResponse.redirect(new URL('/maintenance', request.url));
  }

  // If maintenance mode is OFF, but someone tries to visit the /maintenance URL, bounce them back home
  if (!isMaintenanceMode && request.nextUrl.pathname.startsWith('/maintenance')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     */
    '/((?!api|_next/static|_next/image).*)',
  ],
};
