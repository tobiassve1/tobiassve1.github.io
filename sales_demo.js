/* Standalone marketing demo. Example data only; never contacts the app or saves logs. */
const StopSnusDemo = (() => {
  const copy = {
    da: ['God aften, Tobias.', 'I DAG', 'Tilbage i dag', 'tilladt', 'Næste anbefalede tidspunkt', 'Log snus', 'Fjern seneste snus', 'Se mere', 'I dag', 'Hjælp', 'Analyse', 'Forløb', 'Prøv selv: tryk på Log snus eller minus. Interaktiv demo med eksempeldata — intet bliver gemt.', 'Du rammer dine daglige mål', 'Du kan være fri før tid', 'Din rytme er stabil', 'Du logger stabilt', 'Tid til en pause?', 'Du har nået dagens mængde', 'Demo: din snus er registreret.', 'Demo: seneste registrering er fjernet.', 'Disse indsigter er eksempler. Appens analyse bygger på dine egne logs.', 'Du har brugt dagens planlagte mængde. I appen finder du hjælp, når trangen rammer.', 'Siden seneste snus', 'min.', 'sek.', 'Interaktiv app-demo'],
    en: ['Good evening, Tobias.', 'TODAY', 'Left today', 'allowed', 'Next suggested time', 'Log a pouch', 'Remove last pouch', 'See more', 'Today', 'Help', 'Insights', 'Journey', 'Try it: tap Log a pouch or minus. Interactive demo with example data — nothing is saved.', 'You meet your daily goals', 'You could finish earlier', 'Your rhythm is steady', 'You log consistently', 'Time for a pause?', 'Daily allowance reached', 'Demo: your pouch has been logged.', 'Demo: the last log has been removed.', 'These insights are examples. The app uses your own logs for analysis.', 'You have used today’s planned allowance. The app offers support when cravings hit.', 'Since last pouch', 'min', 'sec', 'Interactive app demo'],
    de: ['Guten Abend, Tobias.', 'HEUTE', 'Heute übrig', 'erlaubt', 'Nächster empfohlener Zeitpunkt', 'Snus erfassen', 'Letzten Snus entfernen', 'Mehr', 'Heute', 'Hilfe', 'Analyse', 'Verlauf', 'Probiere es aus: tippe auf Snus erfassen oder Minus. Demo mit Beispieldaten — nichts wird gespeichert.', 'Du erreichst deine Tagesziele', 'Du könntest früher fertig sein', 'Dein Rhythmus ist stabil', 'Du erfasst regelmäßig', 'Zeit für eine Pause?', 'Tagesmenge erreicht', 'Demo: dein Snus wurde erfasst.', 'Demo: der letzte Eintrag wurde entfernt.', 'Diese Erkenntnisse sind Beispiele. Die App analysiert deine eigenen Einträge.', 'Du hast die geplante Tagesmenge verbraucht. Die App bietet Hilfe bei Verlangen.', 'Seit dem letzten Snus', 'Min.', 'Sek.', 'Interaktive App-Demo'],
    fi: ['Hyvää iltaa, Tobias.', 'TÄNÄÄN', 'Jäljellä tänään', 'sallittu', 'Seuraava suositeltu aika', 'Kirjaa nuuska', 'Poista viimeisin nuuska', 'Lisää', 'Tänään', 'Apua', 'Analyysi', 'Matka', 'Kokeile: paina Kirjaa nuuska tai miinusta. Demo käyttää esimerkkitietoja — mitään ei tallenneta.', 'Saavutat päivittäiset tavoitteesi', 'Voisit lopettaa aiemmin', 'Rytmisi on vakaa', 'Kirjaat säännöllisesti', 'Tauon aika?', 'Päivän määrä saavutettu', 'Demo: nuuska on kirjattu.', 'Demo: viimeisin merkintä on poistettu.', 'Nämä havainnot ovat esimerkkejä. Sovellus analysoi omia merkintöjäsi.', 'Olet käyttänyt päivän suunnitellun määrän. Sovellus tarjoaa apua himon hetkellä.', 'Viimeisimmästä nuuskasta', 'min', 's', 'Interaktiivinen sovellusdemo'],
    nb: ['God kveld, Tobias.', 'I DAG', 'Igjen i dag', 'tillatt', 'Neste anbefalte tidspunkt', 'Logg snus', 'Fjern siste snus', 'Se mer', 'I dag', 'Hjelp', 'Analyse', 'Forløp', 'Prøv selv: trykk på Logg snus eller minus. Demo med eksempeldata — ingenting lagres.', 'Du når de daglige målene dine', 'Du kan bli ferdig tidligere', 'Rytmen din er stabil', 'Du logger jevnt', 'Tid for en pause?', 'Dagens mengde er nådd', 'Demo: snusen er registrert.', 'Demo: siste registrering er fjernet.', 'Disse innsiktene er eksempler. Appen analyserer dine egne logger.', 'Du har brukt dagens planlagte mengde. Appen tilbyr hjelp når suget kommer.', 'Siden siste snus', 'min', 'sek', 'Interaktiv app-demo'],
    nn: ['God kveld, Tobias.', 'I DAG', 'Att i dag', 'tillate', 'Neste tilrådde tidspunkt', 'Logg snus', 'Fjern siste snus', 'Sjå meir', 'I dag', 'Hjelp', 'Analyse', 'Forløp', 'Prøv sjølv: trykk på Logg snus eller minus. Demo med dømedata — ingenting blir lagra.', 'Du når dei daglege måla dine', 'Du kan bli ferdig tidlegare', 'Rytmen din er stabil', 'Du loggar jamt', 'Tid for ein pause?', 'Dagens mengd er nådd', 'Demo: snusen er registrert.', 'Demo: siste registrering er fjerna.', 'Desse innsiktene er døme. Appen analyserer dine eigne loggar.', 'Du har brukt dagens planlagde mengd. Appen tilbyr hjelp når suget kjem.', 'Sidan siste snus', 'min', 'sek', 'Interaktiv app-demo'],
    sv: ['God kväll, Tobias.', 'I DAG', 'Kvar idag', 'tillåtet', 'Nästa rekommenderade tid', 'Logga snus', 'Ta bort senaste snus', 'Se mer', 'Idag', 'Hjälp', 'Analys', 'Resa', 'Prova själv: tryck på Logga snus eller minus. Demo med exempeldata — inget sparas.', 'Du når dina dagliga mål', 'Du kan bli klar tidigare', 'Din rytm är stabil', 'Du loggar regelbundet', 'Dags för en paus?', 'Dagens mängd är nådd', 'Demo: din snus har registrerats.', 'Demo: senaste registreringen har tagits bort.', 'Dessa insikter är exempel. Appen analyserar dina egna loggar.', 'Du har använt dagens planerade mängd. Appen erbjuder hjälp när suget kommer.', 'Sedan senaste snus', 'min', 'sek', 'Interaktiv appdemo']
  };
  let timer, observer, cleanup;
  const state = { taken: 2, limit: 5, insight: 0, lastLog: Date.now() - 1430000 };
  const icon = path => `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="${path}"/></svg>`;
  function markup(lang) {
    const t = copy[lang] || copy.da;
    const icons = ['M5 5h14v15H5z M8 3v4 M16 3v4 M5 10h14', 'M12 21S2 15 2 8a5 5 0 0 1 10-1 5 5 0 0 1 10 1c0 7-10 13-10 13Z', 'M3 16l6-7 5 4 7-9 M17 4h4v4', 'M7 4v16 M17 4v16 M4 4h6 M14 20h6'];
    return `<section class="demo-phone" aria-label="${t[26]}">
      <div class="demo-status" aria-hidden="true"><span>19:36</span><span class="demo-camera"></span><span>▥ ◒ ▰</span></div>
      <div class="demo-body"><div class="demo-greeting"><strong>${t[0]}</strong><span class="demo-avatar" aria-hidden="true">T</span></div>
      <div class="demo-hub"><button type="button" class="demo-pill" aria-describedby="demo-caption"><svg class="demo-border" aria-hidden="true"><rect x="1" y="1" width="calc(100% - 2px)" height="40" rx="21" pathLength="100"/></svg><span class="demo-pill-icon" aria-hidden="true">↗</span><span class="demo-pill-text">${t[13]}</span><span class="demo-pill-action">${t[7]}</span><span aria-hidden="true">›</span></button><span class="demo-history" aria-hidden="true">↶</span></div>
      <div class="demo-card"><div class="demo-day"><span class="demo-day-decoration" aria-hidden="true">‹</span><span>${t[1]}</span><span class="demo-day-decoration" aria-hidden="true">›</span></div>
      <div class="demo-dial"><svg aria-hidden="true" viewBox="0 0 200 200"><circle class="demo-track" cx="100" cy="100" r="88"/><circle class="demo-progress" cx="100" cy="100" r="88" pathLength="100" stroke-dasharray="100" stroke-dashoffset="60"/></svg><div class="demo-dial-copy"><span class="demo-count">3</span><span class="demo-remaining">${t[2]}</span></div></div>
      <div class="demo-used" aria-live="polite" aria-atomic="true">2 / 5 ${t[3]}</div><div class="demo-elapsed"></div><div class="demo-next"><span aria-hidden="true">◷</span><span class="demo-next-label">${t[4]}</span><strong>19:30</strong><span aria-hidden="true">›</span></div>
      <div class="demo-controls"><button type="button" class="demo-minus" aria-label="${t[6]}">−</button><button type="button" class="demo-log">＋ ${t[5]}</button></div></div><div class="demo-feedback" role="status" aria-live="polite"></div></div>
      <div class="demo-bottom">${icons.map((path, i) => `<span class="demo-tab">${icon(path)}${t[8 + i]}</span>`).join('')}</div><div class="demo-home-indicator" aria-hidden="true"></div></section><p class="demo-caption" id="demo-caption">${t[12]}</p>`;
  }
  function mount(lang) {
    clearInterval(timer); observer?.disconnect(); cleanup?.();
    const root = document.querySelector('.demo-phone');
    if (!root) return;
    const t = copy[lang] || copy.da, q = s => root.querySelector(s);
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let visible = true, seconds = 0, history = [];
    const feedback = message => { q('.demo-feedback').textContent = message; };
    function update() {
      q('.demo-count').textContent = Math.max(0, state.limit - state.taken);
      q('.demo-used').textContent = `${state.taken} / ${state.limit} ${t[3]}`;
      q('.demo-progress').style.strokeDashoffset = 100 - Math.min(1, state.taken / state.limit) * 100;
      q('.demo-minus').disabled = state.taken === 0;
      q('.demo-next strong').textContent = state.taken >= state.limit ? '—' : '19:30';
      const elapsed = Math.max(0, Math.floor((Date.now() - state.lastLog) / 1000));
      q('.demo-elapsed').textContent = `${Math.floor(elapsed / 60)} ${t[24]} ${elapsed % 60} ${t[25]}`;
      q('.demo-elapsed').setAttribute('aria-label', `${t[23]}: ${q('.demo-elapsed').textContent}`);
      const label = q('.demo-pill-text');
      const nextText = state.taken >= state.limit ? t[18] : t[13 + state.insight % 4];
      if (label.textContent !== nextText) {
        label.textContent = nextText; label.classList.remove('swap'); void label.offsetWidth; label.classList.add('swap');
      }
    }
    q('.demo-log').addEventListener('click', () => {
      if (state.taken >= state.limit) { feedback(t[22]); return; }
      history.push(state.lastLog); state.taken++; state.lastLog = Date.now();
      feedback(state.taken === state.limit ? t[22] : t[19]); update();
      q('.demo-log').classList.remove('clicked'); void q('.demo-log').offsetWidth; q('.demo-log').classList.add('clicked');
    });
    q('.demo-minus').addEventListener('click', () => {
      if (state.taken === 0) return;
      state.taken--; state.lastLog = history.pop() ?? Date.now() - 1430000;
      feedback(t[20]); update();
    });
    q('.demo-pill').addEventListener('click', () => {
      state.insight = (state.insight + 1) % 4; feedback(state.taken >= state.limit ? t[22] : t[21]); update();
    });
    observer = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      root.style.setProperty('animation-play-state', visible ? 'running' : 'paused');
      root.querySelectorAll('.demo-border rect,.demo-log').forEach(el => el.style.animationPlayState = visible ? 'running' : 'paused');
    });
    observer.observe(root);
    const visibility = () => root.querySelectorAll('.demo-border rect,.demo-log').forEach(el => el.style.animationPlayState = document.hidden ? 'paused' : 'running');
    document.addEventListener('visibilitychange', visibility);
    cleanup = () => document.removeEventListener('visibilitychange', visibility);
    timer = setInterval(() => {
      if (document.hidden || !visible) return;
      seconds++;
      if (seconds % 5 === 0 && !reduced.matches) state.insight = (state.insight + 1) % 4;
      update();
    }, 1000);
    update();
  }
  return { markup, mount };
})();
