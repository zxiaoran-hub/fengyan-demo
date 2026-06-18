const i=[{bg:"#0D8ABC",name:"蓝色"},{bg:"#7C3AED",name:"紫色"},{bg:"#DC2626",name:"红色"},{bg:"#059669",name:"绿色"},{bg:"#F59E0B",name:"橙色"},{bg:"#0891B2",name:"青色"},{bg:"#7C2D12",name:"棕色"},{bg:"#4338CA",name:"靛青"},{bg:"#BE185D",name:"粉色"},{bg:"#64748B",name:"灰色"}];function a(n){let t=0;for(let e=0;e<n.length;e++){const o=n.charCodeAt(e);t=(t<<5)-t+o,t=t&t}return t}function r(n){if(!n||n.trim()==="")return"团";const t=n.trim();return/[\u4e00-\u9fa5]/.test(t)?t.substring(0,Math.min(2,t.length)):t.charAt(0).toUpperCase()}function s(n){const t=a(n),e=Math.abs(t)%i.length;return i[e]}function c(n){(!n||n.trim()==="")&&(n="Team");const t=r(n),o=`
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
      <rect width="100" height="100" fill="${s(n).bg}"/>
      <text x="50" y="50"
            font-family="Arial, sans-serif"
            font-size="40"
            font-weight="bold"
            fill="#ffffff"
            text-anchor="middle"
            dominant-baseline="central">${t}</text>
    </svg>
  `.trim();return`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(o)))}`}export{c as g};
