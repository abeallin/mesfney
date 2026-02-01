import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'ti'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already has a valid locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // Set locale header for root layout to read
    const locale = pathname.split('/')[1];
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-locale', locale);
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  // Skip internal Next.js paths and static files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return;
  }

  // Redirect to default locale
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|images|fonts|robots.txt|sitemap.xml).*)'],
};
