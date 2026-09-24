'use client';

import { useEffect, useRef } from 'react';
import { Sora, Space_Mono } from 'next/font/google';

const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-sora' });
const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-space-mono' });

const FONT_SORA = 'var(--font-sora), -apple-system, sans-serif';
const FONT_MONO = 'var(--font-space-mono), monospace';

const GLASS: React.CSSProperties = {
  background: 'rgba(255,255,255,0.7)',
  backdropFilter: 'blur(14px)',
  WebkitBackdropFilter: 'blur(14px)',
  border: '1px solid rgba(255,255,255,0.9)',
  boxSizing: 'border-box',
  boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9), 0 10px 20px rgba(18,25,10,0.08), 0 2px 6px rgba(18,25,10,0.04)'
};

function gel(a: string, b: string): React.CSSProperties {
  return {
    background: `linear-gradient(140deg,${a} 0%,${b} 100%)`,
    color: '#12190A',
    boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.7), inset 0 -3px 6px rgba(18,25,10,0.16), 0 4px 10px rgba(18,25,10,0.13)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    boxSizing: 'border-box'
  };
}

const SCREEN_W = 760;
const SCREEN_H = 552;
const SCENE_W = 1280;
const SCENE_H = 860;

const stats = [
  { value: '1.2k', label: 'Escaneos' },
  { value: '4', label: 'Enlaces' },
  { value: '3', label: 'Pulseras' }
];

const links = [
  { title: 'Mi portfolio', sub: 'estudionorte.com', glyph: '◆', a: '#F4FFA8', b: '#93D500' },
  { title: 'Instagram', sub: '@estudionorte', glyph: '◉', a: '#FFD3B6', b: '#C13584' },
  { title: 'WhatsApp', sub: '+54 11 5555-1234', glyph: '✆', a: '#B9F5C8', b: '#128C7E' },
  { title: 'Guardar contacto', sub: 'vCard · Estudio Norte', glyph: '⊕', a: '#E2FFF7', b: '#4DD9C0' }
];

/**
 * ThoraMacMockup: MacBook animado (tapa que abre, pantalla que despierta) mostrando
 * una demo del producto Thora (perfil tipo link-in-bio con QR). Escala responsivo vía
 * ResizeObserver, igual que el mockup original.
 */
export function ThoraMacMockup() {
  const frameRef = useRef<HTMLDivElement>(null);
  const shotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const shot = shotRef.current;
    if (!frame || !shot) return;

    const fit = () => {
      const s = Math.min(1, frame.clientWidth / SCENE_W);
      shot.style.transform = `scale(${s})`;
      frame.style.height = `${SCENE_H * s}px`;
    };
    fit();

    const ro = new ResizeObserver(fit);
    ro.observe(frame);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={frameRef} className={`${sora.variable} ${spaceMono.variable} mx-auto w-full max-w-[1280px] overflow-hidden`}>
      <div
        ref={shotRef}
        style={{
          position: 'relative',
          width: SCENE_W,
          height: SCENE_H,
          overflow: 'hidden',
          transformOrigin: 'top left',
          background: '#F7FAF1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: FONT_SORA,
          perspective: 2200
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: -240,
            left: -80,
            width: 700,
            height: 700,
            borderRadius: 999,
            background: 'radial-gradient(circle, rgba(198,242,46,0.5) 0%, rgba(198,242,46,0) 68%)',
            filter: 'blur(10px)'
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: -260,
            left: 260,
            width: 620,
            height: 620,
            borderRadius: 999,
            background: 'radial-gradient(circle, rgba(77,217,192,0.3) 0%, rgba(77,217,192,0) 70%)',
            filter: 'blur(14px)'
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: -60,
            right: -200,
            width: 640,
            height: 640,
            borderRadius: 999,
            background: 'radial-gradient(circle, rgba(139,124,246,0.28) 0%, rgba(139,124,246,0) 70%)',
            filter: 'blur(14px)'
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            width: 840,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transformStyle: 'preserve-3d',
            animation: 'thoraFloatSoft 7s ease-in-out 2.6s infinite'
          }}
        >
          <div style={{ perspective: 2200, transformStyle: 'preserve-3d' }}>
            <div
              style={{
                position: 'relative',
                width: 812,
                height: 600,
                borderRadius: '16px 16px 4px 4px',
                transformOrigin: 'bottom center',
                transformStyle: 'preserve-3d',
                background: 'linear-gradient(160deg,#5A6152 0%,#2B3126 32%,#3E4538 66%,#1C2016 100%)',
                padding: 12,
                boxSizing: 'border-box',
                boxShadow: '0 30px 60px rgba(18,25,10,0.3), 0 8px 18px rgba(18,25,10,0.2), inset 0 1px 2px rgba(255,255,255,0.3)',
                animation: 'thoraLidOpen 2.4s cubic-bezier(0.34,1.12,0.4,1) 0.25s both'
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: 8,
                  boxSizing: 'border-box',
                  background: '#0A0C07',
                  padding: '14px 12px 12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: 6,
                    left: '50%',
                    marginLeft: -2.5,
                    width: 5,
                    height: 5,
                    borderRadius: 999,
                    background: '#1E2419',
                    boxShadow: 'inset 0 0 2px rgba(255,255,255,0.3)'
                  }}
                />
                <div
                  style={{
                    position: 'relative',
                    width: SCREEN_W,
                    height: SCREEN_H,
                    borderRadius: 4,
                    overflow: 'hidden',
                    background: '#FFFFFF',
                    animation: 'thoraScreenWake 2.4s ease-out 0.25s both'
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'hidden',
                      animation: 'thoraPageIn 2.6s cubic-bezier(0.22,1,0.36,1) 0.25s both'
                    }}
                  >
                    <div
                      style={{
                        height: 34,
                        flexShrink: 0,
                        boxSizing: 'border-box',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0 12px',
                        gap: 12,
                        background: 'linear-gradient(180deg,#F4F6EF 0%,#E8ECDF 100%)',
                        borderBottom: '1px solid rgba(18,25,10,0.1)'
                      }}
                    >
                      <div style={{ display: 'flex', gap: 7, alignItems: 'center' }}>
                        <div style={{ width: 9, height: 9, borderRadius: 999, background: '#FF5F57', flexShrink: 0 }} />
                        <div style={{ width: 9, height: 9, borderRadius: 999, background: '#FEBC2E', flexShrink: 0 }} />
                        <div style={{ width: 9, height: 9, borderRadius: 999, background: '#28C840', flexShrink: 0 }} />
                      </div>
                      <div
                        style={{
                          flex: 1,
                          maxWidth: 300,
                          height: 21,
                          borderRadius: 999,
                          boxSizing: 'border-box',
                          background: 'rgba(255,255,255,0.9)',
                          border: '1px solid rgba(18,25,10,0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: FONT_MONO,
                          fontSize: 10,
                          lineHeight: '19px',
                          color: '#5E6558',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        thora.link/estudionorte
                      </div>
                      <div style={{ width: 54 }} />
                    </div>

                    <div style={{ position: 'relative', flex: 1, minHeight: 0, overflow: 'hidden', background: '#FFFFFF' }}>
                      <div
                        aria-hidden="true"
                        style={{
                          position: 'absolute',
                          top: -160,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 520,
                          height: 420,
                          borderRadius: 999,
                          background: 'radial-gradient(circle at 50% 42%, rgba(198,242,46,0.5) 0%, rgba(198,242,46,0) 68%)',
                          filter: 'blur(8px)'
                        }}
                      />
                      <div
                        aria-hidden="true"
                        style={{
                          position: 'absolute',
                          bottom: -120,
                          right: -90,
                          width: 320,
                          height: 320,
                          borderRadius: 999,
                          background: 'radial-gradient(circle, rgba(139,124,246,0.26) 0%, rgba(139,124,246,0) 70%)',
                          filter: 'blur(12px)'
                        }}
                      />

                      <div
                        style={{
                          position: 'relative',
                          zIndex: 1,
                          width: 360,
                          margin: '0 auto',
                          boxSizing: 'border-box',
                          paddingTop: 16,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: 6
                        }}
                      >
                        <div
                          style={{
                            width: 64,
                            height: 64,
                            borderRadius: 999,
                            padding: 4,
                            boxSizing: 'border-box',
                            flexShrink: 0,
                            background:
                              'radial-gradient(120% 140% at 30% 0%, rgba(255,255,255,0.95) 0%, rgba(226,255,247,0.5) 18%, rgba(226,255,247,0) 40%), linear-gradient(150deg,#F4FFA8 0%,#C6F22E 40%,#93D500 74%,#5C8700 100%)',
                            boxShadow: 'inset 0 2px 3px rgba(255,255,255,0.8), 0 12px 24px rgba(92,135,0,0.3), 0 3px 8px rgba(18,25,10,0.12)'
                          }}
                        >
                          <div
                            style={{
                              width: '100%',
                              height: '100%',
                              borderRadius: 999,
                              background: '#FFFFFF',
                              boxSizing: 'border-box',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: 18,
                              lineHeight: '56px',
                              fontWeight: 800,
                              color: '#12190A',
                              letterSpacing: '-0.01em'
                            }}
                          >
                            EN
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: 7, height: 34, marginTop: 2 }}>
                          <div
                            style={{
                              fontSize: 26,
                              lineHeight: '34px',
                              fontWeight: 800,
                              letterSpacing: '-0.015em',
                              color: '#12190A',
                              whiteSpace: 'nowrap'
                            }}
                          >
                            Estudio Norte
                          </div>
                          <div
                            style={{
                              width: 19,
                              height: 19,
                              borderRadius: 999,
                              flexShrink: 0,
                              boxSizing: 'border-box',
                              background: 'linear-gradient(150deg,#C6F22E 0%,#93D500 60%,#5C8700 100%)',
                              color: '#12190A',
                              fontSize: 11,
                              lineHeight: '19px',
                              fontWeight: 800,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.7), 0 3px 8px rgba(92,135,0,0.32)'
                            }}
                          >
                            ✓
                          </div>
                        </div>
                        <div style={{ fontFamily: FONT_MONO, fontSize: 12.5, lineHeight: '20px', fontWeight: 700, color: '#4A6E00', whiteSpace: 'nowrap' }}>
                          thora.link/estudionorte
                        </div>
                        <div style={{ fontSize: 13.5, lineHeight: '21px', color: '#5E6558', whiteSpace: 'nowrap' }}>
                          Diseño y dirección de arte · Buenos Aires
                        </div>

                        <div style={{ display: 'flex', gap: 8, width: '100%', marginTop: 10 }}>
                          {stats.map((s) => (
                            <div
                              key={s.label}
                              style={{
                                ...GLASS,
                                flex: 1,
                                borderRadius: 13,
                                padding: '9px 6px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 1
                              }}
                            >
                              <div style={{ fontSize: 16, lineHeight: '22px', fontWeight: 800, color: '#12190A' }}>{s.value}</div>
                              <div
                                style={{
                                  fontFamily: FONT_MONO,
                                  fontSize: 8.5,
                                  lineHeight: '14px',
                                  letterSpacing: '0.09em',
                                  textTransform: 'uppercase',
                                  color: '#5E6558',
                                  fontWeight: 700
                                }}
                              >
                                {s.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%', marginTop: 10 }}>
                          {links.map((l) => (
                            <div
                              key={l.title}
                              style={{ ...GLASS, borderRadius: 15, padding: '9px 12px', display: 'flex', alignItems: 'center', gap: 11 }}
                            >
                              <div style={{ ...gel(l.a, l.b), width: 33, height: 33, borderRadius: 11, fontSize: 14, lineHeight: '33px', fontWeight: 700 }}>
                                {l.glyph}
                              </div>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1, minWidth: 0 }}>
                                <div style={{ fontSize: 13.5, lineHeight: '19px', fontWeight: 700, color: '#12190A', whiteSpace: 'nowrap' }}>
                                  {l.title}
                                </div>
                                <div style={{ fontFamily: FONT_MONO, fontSize: 10.5, lineHeight: '16px', color: '#5E6558', whiteSpace: 'nowrap' }}>
                                  {l.sub}
                                </div>
                              </div>
                              <div style={{ fontSize: 14, lineHeight: '19px', color: '#5E6558', flexShrink: 0 }}>→</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              position: 'relative',
              width: 840,
              height: 15,
              borderRadius: '3px 3px 12px 12px',
              background: 'linear-gradient(180deg,#8A9280 0%,#4E5546 22%,#2B3126 60%,#171B12 100%)',
              boxShadow: '0 16px 30px rgba(18,25,10,0.26), inset 0 1px 1px rgba(255,255,255,0.35)',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              animation: 'thoraBaseSettle 0.7s cubic-bezier(0.22,1,0.36,1) both'
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 812,
                height: 3,
                background: 'linear-gradient(180deg,#0E1109 0%,#2B3126 100%)'
              }}
            />
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 128,
                height: 5,
                borderRadius: '0 0 6px 6px',
                background: 'linear-gradient(180deg,#1C2016 0%,#0E1109 100%)'
              }}
            />
          </div>
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '50%',
              bottom: -40,
              width: 900,
              height: 54,
              borderRadius: 999,
              background: 'radial-gradient(ellipse, rgba(18,25,10,0.28) 0%, rgba(18,25,10,0) 72%)',
              filter: 'blur(10px)',
              zIndex: -1,
              animation: 'thoraShadowGrow 2.4s cubic-bezier(0.22,1,0.36,1) 0.25s both'
            }}
          />
        </div>
      </div>
    </div>
  );
}
