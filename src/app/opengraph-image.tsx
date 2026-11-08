import { ImageResponse } from 'next/og';

export const alt = "Mesfiney's Love Foundation | Supporting Children with Special Needs in Eritrea";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: 'linear-gradient(135deg, #082f2c 0%, #115e59 55%, #93370e 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: '#ec7a10',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
            }}
          >
            ♥
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 24, fontWeight: 700 }}>
              Mesfiney&apos;s Love Foundation
            </span>
            <span style={{ fontSize: 16, color: '#99f6e4' }}>
              UK Registered Charity No. 1139089 • Since 2010
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 920 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Supporting Children with Special Needs in Eritrea
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 26,
              lineHeight: 1.4,
              color: '#fdedd3',
            }}
          >
            Founded in loving memory of Mesfin Hiruy (1990–2000) to bring healthcare support, education, and joyful play to every child.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 48,
            borderTop: '1px solid rgba(255,255,255,0.2)',
            paddingTop: 28,
            fontSize: 20,
            color: '#ccfbf1',
          }}
        >
          <span>£24,695+ Directly Invested</span>
          <span>•</span>
          <span>6 Major Projects</span>
          <span>•</span>
          <span>100% Volunteer-Led</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
