import{P as d,L as o,W as r,A as $,E as u,S as m,a as c,U as g,b as t,c as v}from"./content-DhPX4BgE.js";const e="/",s=a=>String(a).replace(/[&<>"]/g,l=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[l]),n=(a,l,h="")=>`<a class="${h}" href="${s(a)}" target="_blank" rel="noopener">${l}</a>`,p=a=>a.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,""),w=new URLSearchParams(location.search).get("why"),i='<svg class="arr" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 12 12 4M6 4h6v6"/></svg>',b=d.filter(a=>a.status!=="private"),f=o.find(a=>a.label==="LinkedIn"),k=o.find(a=>a.label==="GitHub"),I=o.find(a=>a.label==="TryHackMe"),y=a=>a==="in progress"||a==="playtest";document.getElementById("cv").innerHTML=`
  ${w==="nogl"?`<p class="notice">Your browser could not start the 3D world, so this is the one-page version. On a laptop or desktop, <a href="${e}">the full site</a> is a world you can walk through.</p>`:""}
  <aside class="side">
    <div class="side-in">
      <h1>${s(g.name)}</h1>
      <p class="lede">Cyber Security student at the HvA. I build detections and the labs to test them, and I want to do that in a SOC.</p>
      <div class="avail">
        <span class="dot" aria-hidden="true"></span>
        <div><b>Open to a graduation internship</b><span>February to July 2027 &middot; Randstad or remote</span></div>
      </div>
      <a class="cta" href="${s(f.url)}" target="_blank" rel="noopener">Message me on LinkedIn ${i}</a>
      <p class="also">${n(k.url,"GitHub")} &middot; ${n(I.url,"TryHackMe")}</p>
      <a class="side-latest" href="${s(r.articles[0].url)}"><span class="mono">Latest investigation</span><b>${s(r.articles[0].title)}</b><span>Read it ${i}</span></a>
      <a class="world" href="${e}">
        <img src="${e}cv-world.jpg" alt="The 3D version of this portfolio: a zeppelin over a glass city" width="960" height="503" />
        <span>Or walk through the 3D version ${i}</span>
      </a>
    </div>
  </aside>

  <div class="main">
    <figure class="award">
      <img src="${e}${s(t.photo)}" alt="${s(t.alt)}" width="900" height="675" />
      <figcaption>
        <span class="mono">${s(t.where)}</span>
        <b>${s(t.title)}</b>
        <span>${s(t.note)}</span>
      </figcaption>
    </figure>

    ${r.articles.map(a=>`<a class="feature" href="${s(a.url)}">
      <span class="mono">Latest write-up &middot; ${s(a.date)}</span>
      <b>${s(a.title)}</b>
      <span>${s(a.summary)}</span>
      <span class="feature-go">Read the investigation ${i}</span>
    </a>`).join("")}

    <section>
      <h2><span class="num">01</span> What I am after</h2>
      ${$.slice(1,3).map(a=>`<p class="prose">${s(a.replace(/^Now I /,"I "))}</p>`).join("")}
    </section>

    <section>
      <h2><span class="num">02</span> Where I have been</h2>
      <ol class="rows">
        ${u.map(a=>`<li>
          <span class="when mono">${s(a.when)}</span>
          <div><b>${s(a.what)}</b> <span class="at">${s(a.where)}</span><p>${s(a.note)}</p></div>
        </li>`).join("")}
      </ol>
    </section>

    <section>
      <h2><span class="num">03</span> What I have built</h2>
      <ol class="rows">
        ${b.map(a=>`<li>
          <span class="when mono">${s(a.year)}</span>
          <div>
            <b>${s(a.name)}</b> <span class="at">${s(a.tag)}</span>${y(a.status)?` <span class="flag mono">${s(a.status)}</span>`:""}
            <p>${s(a.short)}</p>
            <p class="stack mono">${s(a.stack)}</p>
            ${a.url?n(a.url,`${s((a.urlLabel,p(a.url)))} ${i}`,"go"):""}
          </div>
        </li>`).join("")}
      </ol>
    </section>

    <section>
      <h2><span class="num">04</span> What I work with</h2>
      <dl class="skills">
        ${m.map(a=>`<div><dt>${s(a.group)}</dt><dd>${a.items.map(s).join("<i> / </i>")}</dd></div>`).join("")}
      </dl>
      <p class="facts">${n(c.url,c.platform)}: ${c.facts.map(s).join(", ")}. ${s(v)}.</p>
    </section>

    <footer>
      <p>${o.map(a=>n(a.url,s(a.text))).join("<i> &middot; </i>")}</p>
      <p>The full version is a desk on a hill, with a computer that boots into all of this. <a href="${e}">Walk in</a>.</p>
    </footer>
  </div>
`;
