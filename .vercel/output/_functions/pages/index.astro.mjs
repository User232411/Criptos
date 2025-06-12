import { c as createComponent, m as maybeRenderHead, a as addAttribute, r as renderTemplate, b as renderComponent, d as renderHead } from '../chunks/astro/server_BlgG3CZb.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$CryptoList = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1");
  const cryptos = await res.json();
  return renderTemplate`${maybeRenderHead()}<table class="crypto-table"> <thead> <tr> <th>#</th> <th>Nombre</th> <th>Precio</th> <th>Market Cap</th> <th>Cambio 24h</th> </tr> </thead> <tbody> ${cryptos.map((coin, index) => renderTemplate`<tr> <td>${index + 1}</td> <td> <img${addAttribute(coin.image, "src")}${addAttribute(coin.name, "alt")} width="20" style="vertical-align: middle;"> ${coin.name} </td> <td>$${coin.current_price.toLocaleString()}</td> <td>$${coin.market_cap.toLocaleString()}</td> <td${addAttribute(`color: ${coin.price_change_percentage_24h >= 0 ? "green" : "red"}`, "style")}> ${coin.price_change_percentage_24h.toFixed(2)}%
</td> </tr>`)} </tbody> </table>`;
}, "C:/Users/awv24/Desktop/PagiasAdSens/PagiasAdSens/src/components/CryptoList.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><title>Top 100 Criptomonedas 2025 - Precios y Market Cap Actualizado</title><meta name="description" content="Consulta el listado actualizado de las 100 principales criptomonedas en 2025 con precios, capitalizaci\xF3n de mercado y cambios diarios."><meta name="viewport" content="width=device-width, initial-scale=1.0"><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5535864771470788" crossorigin="anonymous"><\/script>', '</head> <body> <div class="container"> <h1>Top 100 Criptomonedas en 2025</h1> <p>Conoce los precios, market cap y variaci\xF3n diaria de las criptomonedas m\xE1s importantes del mercado.</p> ', " </div> </body></html>"])), renderHead(), renderComponent($$result, "CryptoList", $$CryptoList, {}));
}, "C:/Users/awv24/Desktop/PagiasAdSens/PagiasAdSens/src/pages/index.astro", void 0);

const $$file = "C:/Users/awv24/Desktop/PagiasAdSens/PagiasAdSens/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
