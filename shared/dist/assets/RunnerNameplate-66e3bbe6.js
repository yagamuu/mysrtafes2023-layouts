import{d as B,u as l,c as m,o as h,a as k,j as t,m as c,t as g,e as d,q as I}from"./index-92db73a2.js";import{a as C}from"./format-05a9a229.js";const E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHNSURBVHgB7dzNTetAGIXh85l791kjIewKoAPCXx1ACVQAJVAC1IEgpgM6iAMNpIHMx6AACxALfMaMB51HiqzIi0hvZpxxNAkgIiIiIiIiIvIDhkR8fjSFhRMMzbBECDfWtI8YgSQBfXFwGQ8X+E0B59bcXyEzOqDPpzWqao7f9zoSmzgSl8ioAm1jF3lM4iPXa39IENAnyKXa2EFmCQJm5D5FZmUHtPxT+B/KVscVgIPijwh+1ndZVPYITMJ24ypiFlcTvUazAq5NYsReNwEK+M7RazWhgCQFJCkgSQFJCkhSQJICkhSQpIAkBSQpIEkBSQpIUkCSApIUkKSAJAUkKSBJAUkKSFJA0rA7E8xbBOuQguEUIzRsQK+urb67QQK+OJjGQ42RKWcKO1qMUDkBzUaxJ/qzcgKG1QNGqJiA6+1n3mEoFlr0UNYyJvj+MBHDpW23vT7sitpgGUdhFw+NPx/vIYQaKfz31jbbBXoqcoeqbd2+Xg9HcU3UnQhJAUkKSFJAkgKSFJCkgCQFJCkgSQFJCkhSQFKCgFX3/anw/bk/Is2/djwdzr7+etw72541+OPSTOHV6iy+Fddvz5YxZrv+8lNERERERETSewHTWWTHqs8JWAAAAABJRU5ErkJggg==",F=t("div",{class:"player_display"},null,-1),x={class:"player_name"},J={class:"player_time"},U=t("img",{src:E},null,-1),z=B({__name:"RunnerNameplate",props:{index:null},setup(f){const e=f,s=l("runDataActiveRun","nodecg-speedcontrol"),a=l("timer","nodecg-speedcontrol"),i=l("displaySound","mysrtafes2023-layouts"),Q=m(()=>!(s!=null&&s.data)||!(s!=null&&s.data.teams[e.index])?"":s==null?void 0:s.data.teams[e.index].players[0].name),n=m(()=>{var r,p;if(!(s!=null&&s.data)||!(s!=null&&s.data.teams[e.index]))return"";const o=s==null?void 0:s.data.teams[e.index].id;if(!((r=a==null?void 0:a.data)!=null&&r.teamFinishTimes[o]))return"";const A=(p=a==null?void 0:a.data)==null?void 0:p.teamFinishTimes[o];return A.state==="forfeit"?"リタイア":A.state==="completed"?C(Math.trunc(A.milliseconds/1e3)):""}),S=m(()=>{var o;return!(s!=null&&s.data)||!(s!=null&&s.data.teams[e.index])?!1:(s==null?void 0:s.data.teams[e.index].players[0].id)===((o=i==null?void 0:i.data)==null?void 0:o.playerId)});return(o,A)=>(h(),k("div",{class:I({clear:d(n)})},[F,t("div",x,[c(g(d(Q))+" ",1),t("div",{class:I(["bgmOn",{active:d(S)}])},null,2)]),t("div",J,[U,c(g(d(n)),1)])],2))}});export{z as _};
