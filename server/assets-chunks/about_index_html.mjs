export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
    <meta charset="utf-8">
    <title>about</title>
    <base href="/shop/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
  <style>@layer theme{:root{--font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50: oklch(.971 .013 17.38);--color-red-100: oklch(.936 .032 17.717);--color-red-200: oklch(.885 .062 18.334);--color-red-300: oklch(.808 .114 19.571);--color-red-400: oklch(.704 .191 22.216);--color-red-500: oklch(.637 .237 25.331);--color-red-600: oklch(.577 .245 27.325);--color-red-700: oklch(.505 .213 27.518);--color-red-800: oklch(.444 .177 26.899);--color-red-900: oklch(.396 .141 25.723);--color-red-950: oklch(.258 .092 26.042);--color-orange-50: oklch(.98 .016 73.684);--color-orange-100: oklch(.954 .038 75.164);--color-orange-200: oklch(.901 .076 70.697);--color-orange-300: oklch(.837 .128 66.29);--color-orange-400: oklch(.75 .183 55.934);--color-orange-500: oklch(.705 .213 47.604);--color-orange-600: oklch(.646 .222 41.116);--color-orange-700: oklch(.553 .195 38.402);--color-orange-800: oklch(.47 .157 37.304);--color-orange-900: oklch(.408 .123 38.172);--color-orange-950: oklch(.266 .079 36.259);--color-amber-50: oklch(.987 .022 95.277);--color-amber-100: oklch(.962 .059 95.617);--color-amber-200: oklch(.924 .12 95.746);--color-amber-300: oklch(.879 .169 91.605);--color-amber-400: oklch(.828 .189 84.429);--color-amber-500: oklch(.769 .188 70.08);--color-amber-600: oklch(.666 .179 58.318);--color-amber-700: oklch(.555 .163 48.998);--color-amber-800: oklch(.473 .137 46.201);--color-amber-900: oklch(.414 .112 45.904);--color-amber-950: oklch(.279 .077 45.635);--color-yellow-50: oklch(.987 .026 102.212);--color-yellow-100: oklch(.973 .071 103.193);--color-yellow-200: oklch(.945 .129 101.54);--color-yellow-300: oklch(.905 .182 98.111);--color-yellow-400: oklch(.852 .199 91.936);--color-yellow-500: oklch(.795 .184 86.047);--color-yellow-600: oklch(.681 .162 75.834);--color-yellow-700: oklch(.554 .135 66.442);--color-yellow-800: oklch(.476 .114 61.907);--color-yellow-900: oklch(.421 .095 57.708);--color-yellow-950: oklch(.286 .066 53.813);--color-lime-50: oklch(.986 .031 120.757);--color-lime-100: oklch(.967 .067 122.328);--color-lime-200: oklch(.938 .127 124.321);--color-lime-300: oklch(.897 .196 126.665);--color-lime-400: oklch(.841 .238 128.85);--color-lime-500: oklch(.768 .233 130.85);--color-lime-600: oklch(.648 .2 131.684);--color-lime-700: oklch(.532 .157 131.589);--color-lime-800: oklch(.453 .124 130.933);--color-lime-900: oklch(.405 .101 131.063);--color-lime-950: oklch(.274 .072 132.109);--color-green-50: oklch(.982 .018 155.826);--color-green-100: oklch(.962 .044 156.743);--color-green-200: oklch(.925 .084 155.995);--color-green-300: oklch(.871 .15 154.449);--color-green-400: oklch(.792 .209 151.711);--color-green-500: oklch(.723 .219 149.579);--color-green-600: oklch(.627 .194 149.214);--color-green-700: oklch(.527 .154 150.069);--color-green-800: oklch(.448 .119 151.328);--color-green-900: oklch(.393 .095 152.535);--color-green-950: oklch(.266 .065 152.934);--color-emerald-50: oklch(.979 .021 166.113);--color-emerald-100: oklch(.95 .052 163.051);--color-emerald-200: oklch(.905 .093 164.15);--color-emerald-300: oklch(.845 .143 164.978);--color-emerald-400: oklch(.765 .177 163.223);--color-emerald-500: oklch(.696 .17 162.48);--color-emerald-600: oklch(.596 .145 163.225);--color-emerald-700: oklch(.508 .118 165.612);--color-emerald-800: oklch(.432 .095 166.913);--color-emerald-900: oklch(.378 .077 168.94);--color-emerald-950: oklch(.262 .051 172.552);--color-teal-50: oklch(.984 .014 180.72);--color-teal-100: oklch(.953 .051 180.801);--color-teal-200: oklch(.91 .096 180.426);--color-teal-300: oklch(.855 .138 181.071);--color-teal-400: oklch(.777 .152 181.912);--color-teal-500: oklch(.704 .14 182.503);--color-teal-600: oklch(.6 .118 184.704);--color-teal-700: oklch(.511 .096 186.391);--color-teal-800: oklch(.437 .078 188.216);--color-teal-900: oklch(.386 .063 188.416);--color-teal-950: oklch(.277 .046 192.524);--color-cyan-50: oklch(.984 .019 200.873);--color-cyan-100: oklch(.956 .045 203.388);--color-cyan-200: oklch(.917 .08 205.041);--color-cyan-300: oklch(.865 .127 207.078);--color-cyan-400: oklch(.789 .154 211.53);--color-cyan-500: oklch(.715 .143 215.221);--color-cyan-600: oklch(.609 .126 221.723);--color-cyan-700: oklch(.52 .105 223.128);--color-cyan-800: oklch(.45 .085 224.283);--color-cyan-900: oklch(.398 .07 227.392);--color-cyan-950: oklch(.302 .056 229.695);--color-sky-50: oklch(.977 .013 236.62);--color-sky-100: oklch(.951 .026 236.824);--color-sky-200: oklch(.901 .058 230.902);--color-sky-300: oklch(.828 .111 230.318);--color-sky-400: oklch(.746 .16 232.661);--color-sky-500: oklch(.685 .169 237.323);--color-sky-600: oklch(.588 .158 241.966);--color-sky-700: oklch(.5 .134 242.749);--color-sky-800: oklch(.443 .11 240.79);--color-sky-900: oklch(.391 .09 240.876);--color-sky-950: oklch(.293 .066 243.157);--color-blue-50: oklch(.97 .014 254.604);--color-blue-100: oklch(.932 .032 255.585);--color-blue-200: oklch(.882 .059 254.128);--color-blue-300: oklch(.809 .105 251.813);--color-blue-400: oklch(.707 .165 254.624);--color-blue-500: oklch(.623 .214 259.815);--color-blue-600: oklch(.546 .245 262.881);--color-blue-700: oklch(.488 .243 264.376);--color-blue-800: oklch(.424 .199 265.638);--color-blue-900: oklch(.379 .146 265.522);--color-blue-950: oklch(.282 .091 267.935);--color-indigo-50: oklch(.962 .018 272.314);--color-indigo-100: oklch(.93 .034 272.788);--color-indigo-200: oklch(.87 .065 274.039);--color-indigo-300: oklch(.785 .115 274.713);--color-indigo-400: oklch(.673 .182 276.935);--color-indigo-500: oklch(.585 .233 277.117);--color-indigo-600: oklch(.511 .262 276.966);--color-indigo-700: oklch(.457 .24 277.023);--color-indigo-800: oklch(.398 .195 277.366);--color-indigo-900: oklch(.359 .144 278.697);--color-indigo-950: oklch(.257 .09 281.288);--color-violet-50: oklch(.969 .016 293.756);--color-violet-100: oklch(.943 .029 294.588);--color-violet-200: oklch(.894 .057 293.283);--color-violet-300: oklch(.811 .111 293.571);--color-violet-400: oklch(.702 .183 293.541);--color-violet-500: oklch(.606 .25 292.717);--color-violet-600: oklch(.541 .281 293.009);--color-violet-700: oklch(.491 .27 292.581);--color-violet-800: oklch(.432 .232 292.759);--color-violet-900: oklch(.38 .189 293.745);--color-violet-950: oklch(.283 .141 291.089);--color-purple-50: oklch(.977 .014 308.299);--color-purple-100: oklch(.946 .033 307.174);--color-purple-200: oklch(.902 .063 306.703);--color-purple-300: oklch(.827 .119 306.383);--color-purple-400: oklch(.714 .203 305.504);--color-purple-500: oklch(.627 .265 303.9);--color-purple-600: oklch(.558 .288 302.321);--color-purple-700: oklch(.496 .265 301.924);--color-purple-800: oklch(.438 .218 303.724);--color-purple-900: oklch(.381 .176 304.987);--color-purple-950: oklch(.291 .149 302.717);--color-fuchsia-50: oklch(.977 .017 320.058);--color-fuchsia-100: oklch(.952 .037 318.852);--color-fuchsia-200: oklch(.903 .076 319.62);--color-fuchsia-300: oklch(.833 .145 321.434);--color-fuchsia-400: oklch(.74 .238 322.16);--color-fuchsia-500: oklch(.667 .295 322.15);--color-fuchsia-600: oklch(.591 .293 322.896);--color-fuchsia-700: oklch(.518 .253 323.949);--color-fuchsia-800: oklch(.452 .211 324.591);--color-fuchsia-900: oklch(.401 .17 325.612);--color-fuchsia-950: oklch(.293 .136 325.661);--color-pink-50: oklch(.971 .014 343.198);--color-pink-100: oklch(.948 .028 342.258);--color-pink-200: oklch(.899 .061 343.231);--color-pink-300: oklch(.823 .12 346.018);--color-pink-400: oklch(.718 .202 349.761);--color-pink-500: oklch(.656 .241 354.308);--color-pink-600: oklch(.592 .249 .584);--color-pink-700: oklch(.525 .223 3.958);--color-pink-800: oklch(.459 .187 3.815);--color-pink-900: oklch(.408 .153 2.432);--color-pink-950: oklch(.284 .109 3.907);--color-rose-50: oklch(.969 .015 12.422);--color-rose-100: oklch(.941 .03 12.58);--color-rose-200: oklch(.892 .058 10.001);--color-rose-300: oklch(.81 .117 11.638);--color-rose-400: oklch(.712 .194 13.428);--color-rose-500: oklch(.645 .246 16.439);--color-rose-600: oklch(.586 .253 17.585);--color-rose-700: oklch(.514 .222 16.935);--color-rose-800: oklch(.455 .188 13.697);--color-rose-900: oklch(.41 .159 10.272);--color-rose-950: oklch(.271 .105 12.094);--color-slate-50: oklch(.984 .003 247.858);--color-slate-100: oklch(.968 .007 247.896);--color-slate-200: oklch(.929 .013 255.508);--color-slate-300: oklch(.869 .022 252.894);--color-slate-400: oklch(.704 .04 256.788);--color-slate-500: oklch(.554 .046 257.417);--color-slate-600: oklch(.446 .043 257.281);--color-slate-700: oklch(.372 .044 257.287);--color-slate-800: oklch(.279 .041 260.031);--color-slate-900: oklch(.208 .042 265.755);--color-slate-950: oklch(.129 .042 264.695);--color-gray-50: oklch(.985 .002 247.839);--color-gray-100: oklch(.967 .003 264.542);--color-gray-200: oklch(.928 .006 264.531);--color-gray-300: oklch(.872 .01 258.338);--color-gray-400: oklch(.707 .022 261.325);--color-gray-500: oklch(.551 .027 264.364);--color-gray-600: oklch(.446 .03 256.802);--color-gray-700: oklch(.373 .034 259.733);--color-gray-800: oklch(.278 .033 256.848);--color-gray-900: oklch(.21 .034 264.665);--color-gray-950: oklch(.13 .028 261.692);--color-zinc-50: oklch(.985 0 0);--color-zinc-100: oklch(.967 .001 286.375);--color-zinc-200: oklch(.92 .004 286.32);--color-zinc-300: oklch(.871 .006 286.286);--color-zinc-400: oklch(.705 .015 286.067);--color-zinc-500: oklch(.552 .016 285.938);--color-zinc-600: oklch(.442 .017 285.786);--color-zinc-700: oklch(.37 .013 285.805);--color-zinc-800: oklch(.274 .006 286.033);--color-zinc-900: oklch(.21 .006 285.885);--color-zinc-950: oklch(.141 .005 285.823);--color-neutral-50: oklch(.985 0 0);--color-neutral-100: oklch(.97 0 0);--color-neutral-200: oklch(.922 0 0);--color-neutral-300: oklch(.87 0 0);--color-neutral-400: oklch(.708 0 0);--color-neutral-500: oklch(.556 0 0);--color-neutral-600: oklch(.439 0 0);--color-neutral-700: oklch(.371 0 0);--color-neutral-800: oklch(.269 0 0);--color-neutral-900: oklch(.205 0 0);--color-neutral-950: oklch(.145 0 0);--color-stone-50: oklch(.985 .001 106.423);--color-stone-100: oklch(.97 .001 106.424);--color-stone-200: oklch(.923 .003 48.717);--color-stone-300: oklch(.869 .005 56.366);--color-stone-400: oklch(.709 .01 56.259);--color-stone-500: oklch(.553 .013 58.071);--color-stone-600: oklch(.444 .011 73.639);--color-stone-700: oklch(.374 .01 67.558);--color-stone-800: oklch(.268 .007 34.298);--color-stone-900: oklch(.216 .006 56.043);--color-stone-950: oklch(.147 .004 49.25);--color-black: #000;--color-white: #fff;--spacing: .25rem;--breakpoint-sm: 40rem;--breakpoint-md: 48rem;--breakpoint-lg: 64rem;--breakpoint-xl: 80rem;--breakpoint-2xl: 96rem;--container-3xs: 16rem;--container-2xs: 18rem;--container-xs: 20rem;--container-sm: 24rem;--container-md: 28rem;--container-lg: 32rem;--container-xl: 36rem;--container-2xl: 42rem;--container-3xl: 48rem;--container-4xl: 56rem;--container-5xl: 64rem;--container-6xl: 72rem;--container-7xl: 80rem;--text-xs: .75rem;--text-xs--line-height: calc(1 / .75);--text-sm: .875rem;--text-sm--line-height: calc(1.25 / .875);--text-base: 1rem;--text-base--line-height: 1.5 ;--text-lg: 1.125rem;--text-lg--line-height: calc(1.75 / 1.125);--text-xl: 1.25rem;--text-xl--line-height: calc(1.75 / 1.25);--text-2xl: 1.5rem;--text-2xl--line-height: calc(2 / 1.5);--text-3xl: 1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl: 2.25rem;--text-4xl--line-height: calc(2.5 / 2.25);--text-5xl: 3rem;--text-5xl--line-height: 1;--text-6xl: 3.75rem;--text-6xl--line-height: 1;--text-7xl: 4.5rem;--text-7xl--line-height: 1;--text-8xl: 6rem;--text-8xl--line-height: 1;--text-9xl: 8rem;--text-9xl--line-height: 1;--font-weight-thin: 100;--font-weight-extralight: 200;--font-weight-light: 300;--font-weight-normal: 400;--font-weight-medium: 500;--font-weight-semibold: 600;--font-weight-bold: 700;--font-weight-extrabold: 800;--font-weight-black: 900;--tracking-tighter: -.05em;--tracking-tight: -.025em;--tracking-normal: 0em;--tracking-wide: .025em;--tracking-wider: .05em;--tracking-widest: .1em;--leading-tight: 1.25;--leading-snug: 1.375;--leading-normal: 1.5;--leading-relaxed: 1.625;--leading-loose: 2;--radius-xs: .125rem;--radius-sm: .25rem;--radius-md: .375rem;--radius-lg: .5rem;--radius-xl: .75rem;--radius-2xl: 1rem;--radius-3xl: 1.5rem;--radius-4xl: 2rem;--shadow-2xs: 0 1px rgb(0 0 0 / .05);--shadow-xs: 0 1px 2px 0 rgb(0 0 0 / .05);--shadow-sm: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--shadow-md: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / .25);--inset-shadow-2xs: inset 0 1px rgb(0 0 0 / .05);--inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / .05);--inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / .05);--drop-shadow-xs: 0 1px 1px rgb(0 0 0 / .05);--drop-shadow-sm: 0 1px 2px rgb(0 0 0 / .15);--drop-shadow-md: 0 3px 3px rgb(0 0 0 / .12);--drop-shadow-lg: 0 4px 4px rgb(0 0 0 / .15);--drop-shadow-xl: 0 9px 7px rgb(0 0 0 / .1);--drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / .15);--ease-in: cubic-bezier(.4, 0, 1, 1);--ease-out: cubic-bezier(0, 0, .2, 1);--ease-in-out: cubic-bezier(.4, 0, .2, 1);--animate-spin: spin 1s linear infinite;--animate-ping: ping 1s cubic-bezier(0, 0, .2, 1) infinite;--animate-pulse: pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;--animate-bounce: bounce 1s infinite;--blur-xs: 4px;--blur-sm: 8px;--blur-md: 12px;--blur-lg: 16px;--blur-xl: 24px;--blur-2xl: 40px;--blur-3xl: 64px;--perspective-dramatic: 100px;--perspective-near: 300px;--perspective-normal: 500px;--perspective-midrange: 800px;--perspective-distant: 1200px;--aspect-video: 16 / 9;--default-transition-duration: .15s;--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1);--default-font-family: var(--font-sans);--default-font-feature-settings: var(--font-sans--font-feature-settings);--default-font-variation-settings: var( --font-sans--font-variation-settings );--default-mono-font-family: var(--font-mono);--default-mono-font-feature-settings: var( --font-mono--font-feature-settings );--default-mono-font-variation-settings: var( --font-mono--font-variation-settings )}}@layer base{*,:after,:before{box-sizing:border-box;margin:0;padding:0;border:0 solid}html{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:var( --default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" );font-feature-settings:var(--default-font-feature-settings, normal);font-variation-settings:var( --default-font-variation-settings, normal );-webkit-tap-highlight-color:transparent}body{line-height:inherit}img{display:block;vertical-align:middle}img{max-width:100%;height:auto}button,input{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;border-radius:0;background-color:transparent;opacity:1}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}}@layer utilities{.absolute{position:absolute}.relative{position:relative}.bottom-10{bottom:calc(var(--spacing) * 10)}.left-20{left:calc(var(--spacing) * 20)}.bg-blue-300{background-color:var(--color-blue-300)}.bg-orange-300{background-color:var(--color-orange-300)}.bg-white{background-color:var(--color-white)}.p-5{padding:calc(var(--spacing) * 5)}.text-center{text-align:center}.text-red-500{color:var(--color-red-500)}}.height-1000{height:1000px;padding-top:90px}@property --tw-rotate-x{syntax: "*"; inherits: false; initial-value: rotateX(0);}@property --tw-rotate-y{syntax: "*"; inherits: false; initial-value: rotateY(0);}@property --tw-rotate-z{syntax: "*"; inherits: false; initial-value: rotateZ(0);}@property --tw-skew-x{syntax: "*"; inherits: false; initial-value: skewX(0);}@property --tw-skew-y{syntax: "*"; inherits: false; initial-value: skewY(0);}@property --tw-space-y-reverse{syntax: "*"; inherits: false; initial-value: 0;}@property --tw-space-x-reverse{syntax: "*"; inherits: false; initial-value: 0;}@property --tw-border-style{syntax: "*"; inherits: false; initial-value: solid;}@property --tw-leading{syntax: "*"; inherits: false;}@property --tw-font-weight{syntax: "*"; inherits: false;}@property --tw-tracking{syntax: "*"; inherits: false;}@property --tw-shadow{syntax: "*"; inherits: false; initial-value: 0 0 #0000;}@property --tw-shadow-color{syntax: "*"; inherits: false;}@property --tw-inset-shadow{syntax: "*"; inherits: false; initial-value: 0 0 #0000;}@property --tw-inset-shadow-color{syntax: "*"; inherits: false;}@property --tw-ring-color{syntax: "*"; inherits: false;}@property --tw-ring-shadow{syntax: "*"; inherits: false; initial-value: 0 0 #0000;}@property --tw-inset-ring-color{syntax: "*"; inherits: false;}@property --tw-inset-ring-shadow{syntax: "*"; inherits: false; initial-value: 0 0 #0000;}@property --tw-ring-inset{syntax: "*"; inherits: false;}@property --tw-ring-offset-width{syntax: "<length>"; inherits: false; initial-value: 0px;}@property --tw-ring-offset-color{syntax: "*"; inherits: false; initial-value: #fff;}@property --tw-ring-offset-shadow{syntax: "*"; inherits: false; initial-value: 0 0 #0000;}@property --tw-outline-style{syntax: "*"; inherits: false; initial-value: solid;}@property --tw-blur{syntax: "*"; inherits: false;}@property --tw-brightness{syntax: "*"; inherits: false;}@property --tw-contrast{syntax: "*"; inherits: false;}@property --tw-grayscale{syntax: "*"; inherits: false;}@property --tw-hue-rotate{syntax: "*"; inherits: false;}@property --tw-invert{syntax: "*"; inherits: false;}@property --tw-opacity{syntax: "*"; inherits: false;}@property --tw-saturate{syntax: "*"; inherits: false;}@property --tw-sepia{syntax: "*"; inherits: false;}@property --tw-drop-shadow{syntax: "*"; inherits: false;}@property --tw-duration{syntax: "*"; inherits: false;}@property --tw-scale-x{syntax: "*"; inherits: false; initial-value: 1;}@property --tw-scale-y{syntax: "*"; inherits: false; initial-value: 1;}@property --tw-scale-z{syntax: "*"; inherits: false; initial-value: 1;}
</style><link rel="stylesheet" href="styles-OI3QXHWG.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-OI3QXHWG.css"></noscript></head>
  <body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click","keyup"],[]);</script>
    <app-root ng-version="19.1.7" ngh="3" ng-server-context="ssg"><app-navbar ngh="0"><!----></app-navbar><div class="height-1000"><router-outlet></router-outlet><app-about ngh="2"><app-loader ngh="1"><!----></app-loader><p>The variable Iam=&gt; var</p><p>My age is 22</p><img src="./../../assets/image-1.jpg"><img src="assets/imgs/image-1.jpg" alt="www"><img src="assets/imgs/image-11.jpg" alt="www"><img src="/assets/image-1.jpg" alt="www"><img src="/assets/image-1.jpg" alt="www"><p class="binding event">condition</p><p class="p-5 bg-orange-300 text-red-500"> directives attribute
</p><p class="p-5" style="background-color: yellow; font-size: 20px;"> directives attribute
</p><button jsaction="click:;">Hello in console</button><div class="input bg-blue-300 text-center"><label for>Name</label><br><input type="text" class="bg-white" jsaction="keyup:;"></div><div class="relative"><p>Static parent</p><div class="absolute bottom-10 left-20"><p>Absolute child</p></div></div><p class="m-5px">My Friend Is : ali</p><p class="m-5px">My Friend Is : soha</p><p class="m-5px">My Friend Is : ahmed</p><!----><p>true</p><!----><!----><div><!----><!----><p>if any switch dos't case of write the defailt</p><!----></div><!----></app-about><!----></div></app-root>
  <link rel="modulepreload" href="chunk-IZXGTB4N.js"><script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-YU4HOKP3.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{"t":{"0":"t0"},"c":{"0":[]}},{"t":{"0":"t1"},"c":{"0":[]}},{"t":{"29":"t5","30":"t6","31":"t7","34":"t8","35":"t9","36":"t10","37":"t11"},"c":{"29":[{"i":"t5","r":1,"x":3}],"30":[{"i":"t6","r":1}],"31":[],"34":[],"35":[],"36":[{"i":"t10","r":1}],"37":[]}},{"c":{"2":[{"i":"c3433846342","r":1}]}}]}</script></body></html>`;