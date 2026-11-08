import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'ti'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/opengraph-image') ||
    pathname.startsWith('/icon') ||
    pathname.includes('.')
  ) {
    return;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    '/((?!en|ti|_next|api|opengraph-image|icon|favicon.ico|images|fonts|robots.txt|sitemap.xml).*)',
  ],
};
