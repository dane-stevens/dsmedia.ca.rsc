import type { Route } from "./+types/recommendations";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Recommendations - DS Media" },
    { name: "description", content: "DS Media" },
  ];
}
const products = [
  {
    url: "https://amzn.to/3W8ayjd", title: 'Beelink SER9 Pro', image: "https://m.media-amazon.com/images/I/41dZ1FlexML._AC_SL1500_.jpg",
    description: "Beelink SER9 Pro Mini Desktop PC with AMD Ryzen AI 9 HX 370 12C/24T, 32GB LPDDR5X 1TB NVMe M.2 SSD, Triple Display Output, WiFi 6, USB4, 2.5G RJ45, Bluetooth 5.2 W-11 Mini Gaming Computer"
  },
  {
    url: "https://amzn.to/4qe6744",
    title: "LG 32U631A 31.5\" QHD Monitor",
    image: "https://m.media-amazon.com/images/I/71o7A0jJ-pL._AC_SL1500_.jpg",
    description: `LG 32U631A 31.5" QHD Monitor, IPS Display, 100Hz, sRGB 99% (Typ.), USB-C, Reader Mode, Flicker Safe, Dynamic Action Sync, Black Stabilizer, LG Switch App, 3-Side Borderless, Tilt Adjustable`
  },
  {
    url: "https://amzn.to/3L0PCIp",
    title: "Logitech MX Master 4",
    image: "https://m.media-amazon.com/images/I/61z3ENJubZL._AC_SL1500_.jpg",
    description: `Logitech MX Master 4, Ergonomic Wireless Mouse with Advanced Performance Haptic Feedback, Ultra-Fast Scrolling, USB-C Charging, Bluetooth, Windows, MacOS - Graphite`
  },
  {
    url: "https://amzn.to/46Y4G2j",
    title: "Logitech MX Keys S",
    image: "https://m.media-amazon.com/images/I/71G7uXAb9BL._AC_SL1500_.jpg",
    description: `Logitech MX Keys S Wireless Keyboard, Low Profile, Fluid Precise Quiet Typing, Programmable Keys, Backlighting, Bluetooth, USB C Rechargeable, for Windows PC, Linux, Chrome, Mac - Graphite`
  },
  {
    url: "https://amzn.to/42OE3u1",
    title: "NB North Bayou Monitor Mount",
    image: "https://m.media-amazon.com/images/I/51FvgCU1lCL._AC_SL1500_.jpg",
    description: `NB North Bayou Monitor Mount,Fits 17-30" or Bigger Computer Monitors(Within 19.8lbs), Adjustable Stand with Tilt Rotation Swivel Function, Desk Mount F80`
  }



]

export function ServerComponent() {
  return (
    <div className="flex items-center justify-center px-8 py-16">
      <div className="flex flex-col gap-8">
        <div className="flex justify-center mb-8">
          <div className="text-sm text-zinc-300 border-dashed border rounded-lg border-zinc-700 px-4 py-2">As an Amazon Associate I earn from qualifying purchases.</div>
        </div>

        <h2 className="text-center text-4xl">Premium Setup</h2>
        <p className="text-center text-zinc-400 max-w-2xl mx-auto text-balance">
          This premium setup has a powerful mini PC, a 32" monitor, a delightful typing experience, and get's your monitor up off the desk with a gas spring mount for more space.
        </p>
        <div className="flex gap-5 justify-center flex-wrap">
          {products?.map((product, i) => {
            return (
              <a target="_blank" href={product.url} className="text-center block border border-zinc-800 px-4 py-8 rounded-lg w-full md:max-w-1/3 lg:max-w-1/4 xl:max-w-1/5 hover:border-emerald-600">
                <div className="h-40 max-w-60 flex items-center justify-center bg-white rounded-lg p-4 mb-4 mx-auto">
                  <img src={product.image} alt={product.title} className="w-full h-full object-contain" />
                </div>
                <h2 className="font-semibold mb-2">{product.title}</h2>
                <p className="text-sm text-zinc-400">{product.description}</p>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}