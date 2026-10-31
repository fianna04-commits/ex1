// A small, consistent SVG icon set. No network requests or icon font required.
const paths={
  heart:'<path d="M20.4 4.8a5.5 5.5 0 0 0-7.8 0L12 5.5l-.6-.7a5.5 5.5 0 0 0-7.8 7.8L12 21l8.4-8.4a5.5 5.5 0 0 0 0-7.8Z"/>',
  arrow:'<path d="M19 12H5m6-6-6 6 6 6"/>',
  minus:'<path d="M5 12h14"/>',
  plus:'<path d="M5 12h14M12 5v14"/>',
  left:'<path d="M19 12H5m6-6-6 6 6 6"/>',
  right:'<path d="M5 12h14m-6-6 6 6-6 6"/>',
  up:'<path d="M12 19V5m-6 6 6-6 6 6"/>',
  down:'<path d="M12 5v14m-6-6 6 6 6-6"/>',
  image:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="2"/><path d="m3 17 5-5 4 4 4-6 5 7"/>',
  check:'<path d="m5 12 4 4L19 6"/>',
  close:'<path d="m6 6 12 12M18 6 6 18"/>',
  download:'<path d="M12 3v12m-5-5 5 5 5-5M5 16v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4"/>',
  sparkles:'<path d="m13 3 2.7 6.3L22 12l-6.3 2.7L13 21l-2.7-6.3L4 12l6.3-2.7L13 3ZM4 2v4M2 4h4"/>',
  sliders:'<path d="M4 7h7m5 0h4M4 17h3m5 0h8"/><circle cx="13.5" cy="7" r="2.5"/><circle cx="9.5" cy="17" r="2.5"/>',
  calendar:'<rect x="4" y="5" width="16" height="16" rx="3"/><path d="M8 3v4m8-4v4M4 11h16m-11 5h2"/>',
  mirror:'<rect x="5" y="2.5" width="14" height="18" rx="7"/><path d="M12 20.5V23m-5 0h10M9 7l4-2m-3 6 5-3"/>',
  minimal:'<path d="M12 3a9 9 0 1 0 9 9h-9V3Z"/><path d="M16 3.9a9 9 0 0 1 4.1 4.1"/>',
  street:'<path d="m4 17 7-7 4 4 6-9M15 5h6v6"/>',
  flower:'<path d="M12 9c-6-10-12-1-5 3-7 4-1 13 5 3 6 10 12 1 5-3 7-4 1-13-5-3Z"/><circle cx="12" cy="12" r="2"/>',
  creative:'<path d="M3 8q3-7 7 0t7 0 4 0M3 16q3-7 7 0t7 0 4 0"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  work:'<rect x="3" y="7" width="18" height="14" rx="3"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13q9 5 18 0M10 14h4"/>',
  music:'<path d="M9 18V5l12-2v13M9 8l12-2"/><ellipse cx="6" cy="18" rx="3" ry="3"/><ellipse cx="18" cy="16" rx="3" ry="3"/>',
  external:'<path d="M14 3h7v7m0-7L10 14M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5"/>'
};
export function icon(name){return `<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths[name]||paths.sparkles}</svg>`;}
export function mountIcons(root=document){root.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));}
