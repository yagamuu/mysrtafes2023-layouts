import{d as u,r as d,c,o as A,a as i,j as r,t as h,e as l,m as v,x as w,k as S,y as T}from"./index-92db73a2.js";const U="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPnSURBVHgB7ZlPVtRAEMa/zoyiO25gPAGwEXwuHE4gnAC4wbgQdIWz0QcsGE4AnABuQNgIuJm5AfEEjjtRSftVJvEB00k6k8yf58vvvTCZSXXTlaququ4GKioqKioqKv5bFKaErQvd4GjmeDt/5+ducIvzvVeqiyGZuIKbX3RTKWxzJLNJMlqhWwPanxfVsek5X46rHaztLqrWw2dOUqfSKHyrIyLs/1KfKQf7acoJSmM+0Dii/P6DPhr87YTtr/nVN7ZN6pQND7XGig6wXMRFjH1TOf7nM966yIkGTuWTSjfuvBh/Z0k9N8k7KT2t0HVmnRpOwgGVicIhhlCu35Tj4vVPOY0er+UU+UGiCX8Wf6cle2VZ8v2FXtd9BYvDcdU4rk8cVxykbmZw3F5QvVjEaEFO2HtzIrJkRwICio5JAkpJsC/vTw3bVO67GITfv91VTqgbGwaYVQbbSkDg3Jzjm2vtvFQ+chIFLRclEbpqdEPlPjKKnj6UMVqQivSQzLq8rQ9Xeg35RzSHERAp1zI9Myr49DE8pONK2N681J2cqWQeZaJDQzSTlBOMCrb6fuwhAyUDpjU3r3RnKIsWhLGiyfRwkCZTT3pACx07irnGgjARg4n4Qrep8CnbeUGA84F5qsKQPlZSS7UtWoYDKuJWvlxSavElyH0DcWAoAfa7vptQvsXU0x4iwCr/drJKqRRcucKqY0IY52BY4/ESF5NEioQ6b9LQgn6WjFHBQN48gwdz3rUkUlgEnInwGz+yRMwuWkNXtIS4V4mJuWxsSkejBfdesKFOTfbTgGcjlLiaYI5pY4qRyGwjl6ggq5mDabYiFTy1kUtUUKoZdtLCdOJzGp3bCDppD3eXVFsKWUwfnq2gkyUghSyrq7dT5a7a3rMyFRTEkvxY4HWEySd9L89atG4jxNXCdmTBLl22p4JwTThs+VaIwMk3ZawUjAjThpLVwOR2Uz3b4BJj5aJTkzI0NpATKwWjBfAqJohE82H2gXI5G7commywj/GTuLGbhZUFY6K8KJb0MS4yNnazyKWgIFtzT2awEPTng48Rw5p4YxjXjCkcD8Nt/Tq3A2/tasOcZG4qZZHbggZcKjeKlUdh5YShLRidBchqv4EykXMQuqVpl3oY8iT6+NjrDfo7Yw2Uj89rmcr5KIl7Ftzu6Nmbn/e39VgaPWP14qKvkIsRwejc/vUYrYeHJ0UZcNHISuJ66xgPntSXeUswW5JPeEev6EgVi8kMMk267SO6Lbfj5eyhgWJ4cqZHVzwo2xWTyB1F333Vr2WnWvW39GXJ5GJwbvrROUR/eeXAu6njfFxKVVRUVFRUWPIXoG5tgG3C3HQAAAAASUVORK5CYII=",f={class:"twitterBox"},m=r("p",{class:"left"}," 本イベントは、RTA in Japanのチャンネル貸出システムを利用した外部のRTAイベントです。 ",-1),E={class:"right"},j=r("span",{class:"tag"},[r("img",{src:U}),v(" #不思議RTAフェス")],-1),y={class:"date"},R=u({__name:"TheFooter",setup(o){const t=d(new Date),n=c(()=>{const e=t.value.getFullYear().toString(),a=(t.value.getMonth()+1).toString(),s=t.value.getDate().toString(),g=t.value.getHours().toString().padStart(2,"0"),p=t.value.getMinutes().toString().padStart(2,"0");return`${e}/${a}/${s} ${g}:${p}`});return setInterval(()=>{t.value=new Date},1e3),(e,a)=>(A(),i("div",f,[m,r("p",E,[j,r("span",y,h(l(n)),1)])]))}}),k=u({__name:"BaseOverlay",props:{clipPath:null,backgroundUrl:null},setup(o){const t=o,n=c(()=>{const e=t.clipPath?`polygon(${t.clipPath})`:"",a=t.backgroundUrl?`url(${t.backgroundUrl})`:void 0;return{clipPath:e,backgroundImage:a}});return(e,a)=>(A(),i("div",{id:"container",style:T(l(n))},[w(e.$slots,"default"),S(R)],4))}}),I=o=>{const t=o%60,n=Math.floor(o/60)%60,e=Math.floor(o/3600),a=s=>s.toString().padStart(2,"0");return`${e}:${a(n)}:${a(t)}`},K=o=>{const t=Math.floor(o/60)%60,n=Math.floor(o/3600),e=a=>a.toString().padStart(2,"0");return`${n?`${n}時間`:""}${e(t)}分`};export{k as _,I as a,K as f};
