import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32
};

export const contentType = 'image/png';

/**
 * Genera un favicon minimalista mediante vectores para evitar archivos binarios.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(circle at top, #0f172a, #020617)',
          borderRadius: '16px'
        }}
      >
        <div
          style={{
            height: '60%',
            width: '60%',
            borderRadius: '40%',
            background: 'conic-gradient(from 90deg at 50% 50%, #7c5cff, #24e1ff, #7c5cff)'
          }}
        />
      </div>
    ),
    {
      width: size.width,
      height: size.height
    }
  );
}
