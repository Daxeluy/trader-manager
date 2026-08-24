import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="bg-bx-paper text-bx-ink">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        style={{
          backgroundImage: 'url("/hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#0d0d0d',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 85%, rgba(180,120,50,0.22) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">
          <span className="inline-flex items-center gap-2 border border-white/15 text-white/50 text-xs font-medium uppercase tracking-widest px-5 py-2 rounded-full">
            Para barberías en Uruguay
          </span>

          <h1 className="font-bx-display text-5xl sm:text-7xl font-bold text-white leading-tight">
            Tu barbería,{' '}
            <span className="text-bx-bronze">sin caos</span>
          </h1>

          <p className="text-white/60 text-lg sm:text-xl max-w-xl leading-relaxed">
            Agenda automática por WhatsApp. Sin apps, sin fricción —
            solo tu negocio funcionando solo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/auth/register"
              className="px-8 py-4 bg-bx-bronze text-white font-bold text-base rounded-xl hover:brightness-110 transition-all shadow-lg shadow-bx-bronze/25"
            >
              Empezar gratis
            </Link>
            <Link
              href="#features"
              className="px-8 py-4 bg-white/8 border border-white/15 text-white/80 font-medium text-base rounded-xl hover:bg-white/12 transition-all"
            >
              Ver cómo funciona
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/25">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/25 to-transparent" />
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ────────────────────────────────────── */}
      <section id="features" className="py-28 px-6 bg-bx-paper">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-bx-bronze/70 font-medium uppercase tracking-widest text-xs mb-4">
              Simple y rápido
            </p>
            <h2 className="font-bx-display text-4xl sm:text-5xl font-bold text-bx-ink">
              Cómo funciona
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Tu cliente escribe por WhatsApp',
                desc: 'El bot responde al instante, muestra disponibilidad y confirma el turno sin que vos hagas nada.',
              },
              {
                step: '02',
                title: 'El turno queda agendado',
                desc: 'Se guarda automáticamente en tu agenda. Mirá todo desde el dashboard en tiempo real.',
              },
              {
                step: '03',
                title: 'Recordatorio automático',
                desc: 'El día anterior el cliente recibe un recordatorio. Menos olvidos, menos huecos.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group bg-bx-paper2 border border-bx-ink/8 rounded-2xl p-8 hover:border-bx-bronze/35 hover:shadow-lg hover:shadow-bx-bronze/5 transition-all duration-300"
              >
                <span className="font-bx-display text-5xl font-bold text-bx-bronze/15 group-hover:text-bx-bronze/30 transition-colors block mb-5">
                  {item.step}
                </span>
                <h3 className="font-semibold text-bx-ink text-lg mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-bx-ink2 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────── */}
      <section className="py-28 px-6 bg-bx-paper2">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-bx-bronze/70 font-medium uppercase tracking-widest text-xs mb-4">
              Todo incluido
            </p>
            <h2 className="font-bx-display text-4xl sm:text-5xl font-bold text-bx-ink">
              Lo que trae BarberoManager
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: '📅',
                title: 'Agenda inteligente',
                desc: 'Vista clara de todos tus turnos del día, semana o mes. Sin papel, sin confusión.',
              },
              {
                icon: '💬',
                title: 'Bot de WhatsApp',
                desc: 'Atiende a tus clientes las 24 horas y agenda turnos sin que vos intervengas.',
              },
              {
                icon: '🔔',
                title: 'Recordatorios automáticos',
                desc: 'Mensajes automáticos un día antes del turno. Menos inasistencias garantizadas.',
              },
              {
                icon: '👥',
                title: 'Historial de clientes',
                desc: 'Nombre, foto, cortes anteriores y preferencias guardadas de cada cliente.',
              },
              {
                icon: '📊',
                title: 'Dashboard en tiempo real',
                desc: 'Control total desde el celular o la computadora — en cualquier lugar.',
              },
              {
                icon: '⚡',
                title: 'Sin app para el cliente',
                desc: 'El cliente agenda directo por WhatsApp. Sin registros, sin descargas.',
              },
            ].map((f) => (
              <div
                key={f.title}
                className="group bg-bx-paper border border-bx-ink/8 rounded-2xl p-7 hover:border-bx-bronze/30 transition-all duration-300"
              >
                <span className="text-2xl block mb-4">{f.icon}</span>
                <h3 className="font-semibold text-bx-ink text-base mb-2">{f.title}</h3>
                <p className="text-bx-ink2 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLANES ───────────────────────────────────────────── */}
      <section id="planes" className="py-28 px-6 bg-bx-paper">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-bx-bronze/70 font-medium uppercase tracking-widest text-xs mb-4">
              Sin contratos, sin sorpresas
            </p>
            <h2 className="font-bx-display text-4xl sm:text-5xl font-bold text-bx-ink">
              Empezá cuando quieras
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-2xl mx-auto">

            {/* Gratis */}
            <div className="bg-bx-paper2 border border-bx-ink/10 rounded-2xl p-8 flex flex-col">
              <div className="mb-8">
                <h3 className="font-bx-display text-2xl font-bold text-bx-ink mb-1">Gratis</h3>
                <p className="text-bx-ink2 text-sm">Para probar sin compromiso</p>
              </div>

              <div className="flex items-end gap-1 mb-8">
                <span className="font-bx-display text-5xl font-bold text-bx-ink">$0</span>
                <span className="text-bx-ink2 mb-2 text-sm">/mes</span>
              </div>

              <ul className="space-y-3 text-sm text-bx-ink2 flex-1 mb-8">
                {[
                  'Bot de WhatsApp activo',
                  '50 mensajes por mes',
                  'Agenda y dashboard',
                  '1 barbero',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-bx-bronze/60 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/auth/register"
                className="w-full text-center py-3 border border-bx-ink/15 text-bx-ink text-sm font-semibold rounded-xl hover:bg-bx-ink/5 transition-all"
              >
                Crear cuenta gratis
              </Link>
            </div>

            {/* Pro */}
            <div className="bg-bx-ink text-white rounded-2xl p-8 flex flex-col relative overflow-hidden">
              <span className="absolute top-5 right-5 bg-bx-bronze/90 text-white text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full">
                Popular
              </span>

              <div
                className="absolute -bottom-12 -right-12 w-44 h-44 rounded-full pointer-events-none opacity-60"
                style={{ background: 'radial-gradient(circle, rgba(180,120,50,0.35) 0%, transparent 70%)' }}
              />

              <div className="mb-8 relative z-10">
                <h3 className="font-bx-display text-2xl font-bold mb-1">Pro</h3>
                <p className="text-white/50 text-sm">Para barberías en serio</p>
              </div>

              <div className="flex items-end gap-1 mb-8 relative z-10">
                <span className="font-bx-display text-5xl font-bold">$29</span>
                <span className="text-white/50 mb-2 text-sm">/mes</span>
              </div>

              <ul className="space-y-3 text-sm text-white/70 flex-1 mb-8 relative z-10">
                {[
                  'Todo lo del plan Gratis',
                  'Mensajes ilimitados',
                  'Hasta 3 barberos',
                  'Recordatorios automáticos',
                  'Historial completo de clientes',
                  'Soporte prioritario',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-bx-bronze shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/auth/register"
                className="relative z-10 w-full text-center py-3 bg-bx-bronze text-white text-sm font-bold rounded-xl hover:brightness-110 transition-all"
              >
                14 días gratis, sin tarjeta
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-28 px-6 bg-bx-ink text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-bx-display text-4xl sm:text-6xl font-bold mb-6 leading-tight">
            Menos caos,{' '}
            <span className="text-bx-bronze">más clientes</span>
          </h2>
          <p className="text-white/50 text-base mb-10 max-w-md mx-auto">
            Unite a las barberías que ya automatizan su agenda con WhatsApp.
          </p>
          <Link
            href="/auth/register"
            className="inline-block px-10 py-5 bg-bx-bronze text-white font-bold text-base rounded-xl hover:brightness-110 transition-all"
          >
            Empezar gratis ahora
          </Link>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="py-8 px-6 bg-bx-ink border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-white/25 text-xs">
          <span className="font-bx-display font-bold text-white/40 text-sm tracking-wide">
            BarberoManager
          </span>
          <span>© {new Date().getFullYear()} — Hecho en Uruguay</span>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white/50 transition-colors">Privacidad</Link>
            <Link href="/terms" className="hover:text-white/50 transition-colors">Términos</Link>
          </div>
        </div>
      </footer>

    </main>
  )
}
