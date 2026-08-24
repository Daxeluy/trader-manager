# Migración Diseño ZIP → Proyecto Vite/React

## Contexto
El ZIP contiene un prototipo HTML standalone (React via CDN + Babel transpile on-the-fly).
Tu proyecto usa Vite + React + Tailwind con imports normales.

---

## Paso 1 — Copiar los archivos base al proyecto

Copiá estos archivos del ZIP a `frontend/src/design/`:

```
frontend/src/design/
  theme.js          ← theme.jsx del ZIP (cambiar window.assign por exports)
  ui.jsx            ← ui.jsx del ZIP (cambiar window.assign por exports)
  data.js           ← data.jsx del ZIP (solo para dev/demo)
```

---

## Paso 2 — Adaptar theme.js

Cambiar al final del archivo:
```js
// ANTES (ZIP):
Object.assign(window, { PRIMARY_OPTIONS, TYPE_SYSTEMS, buildTheme, loadFonts });

// DESPUÉS (Vite):
export { PRIMARY_OPTIONS, TYPE_SYSTEMS, buildTheme, loadFonts };
```

---

## Paso 3 — Adaptar ui.jsx

```js
// ANTES (ZIP) — al final:
Object.assign(window, { Icon, StatusBadge, ... });

// DESPUÉS (Vite):
export { Icon, StatusBadge, ClientAvatar, TurnoRow, BigButton,
         BottomNav, AppHeader, Card, Screen, isLight };
```

Y al inicio, sacar la línea:
```js
const { useState, useEffect, useRef } = React;  // ← borrar, ya viene del import
```

Y agregar arriba:
```js
import { useState, useEffect, useRef } from 'react';
```

---

## Paso 4 — Reemplazar cada pantalla

Para cada pantalla (Dashboard, Agenda, etc.), crear un componente React normal:

### Ejemplo: `frontend/src/pages/Dashboard.jsx`
```jsx
import { buildTheme } from '../design/theme';
import { Screen, AppHeader, BottomNav, TurnoRow,
         BigButton, Card, FloatingAdd } from '../design/ui';
// ... pegar el código de screens-dashboard.jsx
// ... reemplazar datos hardcodeados con llamadas a tu API
```

---

## Paso 5 — Integrar con tu API

Reemplazar los `DEMO_STATES` con datos reales:

```jsx
// En Dashboard.jsx — reemplazar:
const state = DEMO_STATES[t.demoState];

// Con:
const [turnos, setTurnos] = useState([]);
useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL}/api/turnos/hoy`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  .then(r => r.json())
  .then(setTurnos);
}, []);
```

---

## Para el demo de HOY

Usá el archivo `barbershop-demo.html` — abrilo directo en el browser o
deployalo en cualquier hosting estático (Netlify Drop, GitHub Pages, etc.).

No necesita servidor ni build.

---

## Orden recomendado (post-demo)

1. `theme.js` + `ui.jsx` → base del sistema de diseño
2. `LoginScreen` → reemplazar tu login actual con JWT
3. `DashboardScreen` → conectar con `/api/turnos/hoy`
4. `NuevoTurnoScreen` → conectar con `POST /api/turnos`
5. `AgendaScreen` → conectar con `/api/turnos?mes=X`
6. `ConfigScreen` → conectar con `/api/barbero/perfil`
