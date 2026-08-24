# Trade Manager

Web app single-file para trading personal: journaling, position sizing, portafolio cripto y asistente IA. Todo en un solo archivo HTML, sin build, sin backend.

**Live:** abrí `trade-manager-final.html` en cualquier navegador moderno.

---

## Qué hace

- **Landing page** con estética Aurum (dorado sobre negro, tipografía serif) — puerta de entrada a la app.
- **Lock screen multi-usuario** con PIN numérico (4, 5 o 6 dígitos), cifrado AES-GCM + PBKDF2, lluvia de dinero 💵 animada de fondo.
- **App completa** con:
  - **Trade Log** — registro de operaciones con estrategia, R/B, sesión, MAE, imagen del chart y notas
  - **Position Sizing** — cálculo de lotes por capital / riesgo / SL / apalancamiento
  - **Portfolio** — holdings cripto con precios en vivo (CoinGecko) y conexión MetaMask
  - **Libreta** — notas de operativa con autosave
  - **Asistente IA (Gemini)** — analiza tus trades, exporta resúmenes a Notion
  - **Drawer** con accesos rápidos a Gmail, Drive, Notion, TradingView, Binance, PayPal

## Temas incluidos

`oro-negro` (default) · `matrix-dollar` · `cyberpunk` · `dark` · `midnight` · `forest` · `light`

## Datos

Todo se guarda **cifrado en localStorage**, por usuario. Nada sale del navegador (salvo llamadas opcionales a CoinGecko / Gemini / Notion, y solo si configuraste las API keys).

## Configuración opcional

Editá al inicio del `<script>` en `trade-manager-final.html`:

```js
const GEMINI_KEY = '';       // https://aistudio.google.com/app/apikey
const NOTION_TOKEN = '';     // https://www.notion.so/my-integrations
const NOTION_PAGE_ID = '';   // ID de la página destino
```

## Estructura del repo

```
/
├── trade-manager-final.html   ← la app completa
└── README.md
```

## Licencia

Uso personal. © 2026 Trade Manager.
