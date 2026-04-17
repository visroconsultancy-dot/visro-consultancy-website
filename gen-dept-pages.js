// Department page generator for VISRO Consultancy
const fs = require('fs');
const path = require('path');

function buildSubjectCards(subjects) {
  return subjects.map((s, i) => `    <div class="subject-card clickable" id="subject-card-${i+1}" onclick="toggleSubjectDetail(${i+1})"><div class="subject-num">${i+1}</div>
      <div class="subject-text">
        <div class="subject-hi">${s.title}</div>
        <div class="subject-en">${s.en || ''}</div>
      </div>
    </div>`).join('\n');
}

function buildLevelGrid(levels) {
  return levels.map(l => `    <div class="level-box">
      <div class="level-icon">${l.icon}</div>
      <div class="level-name">${l.name}</div>
      <div class="level-en">${l.en}</div>
    </div>`).join('\n');
}

function buildHTML(dept) {
  return `<!DOCTYPE html>
<html lang="hi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-6449VN1F1D"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-6449VN1F1D');</script>
<title>${dept.titleHi} — ${dept.titleEn} | VISRO Consultancy</title>
<meta name="description" content="${dept.titleHi} — ${dept.description}. VISRO Consultancy, Amethi">
<meta name="robots" content="index, follow">
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16.png">
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
<link rel="canonical" href="https://visroconsultancy.in/${dept.filename}">
<meta property="og:title" content="${dept.titleHi} — ${dept.titleEn} | VISRO Consultancy">
<meta property="og:description" content="${dept.titleHi} — ${dept.description}. VISRO Consultancy">
<meta property="og:url" content="https://visroconsultancy.in/${dept.filename}">
<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://www.googletagmanager.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=Noto+Sans+Devanagari:wght@400;600;700&display=swap" rel="stylesheet">
<style>
  :root { --navy: #0d1b3e; --orange: #e8640a; --orange-light: #f07a28; --green: #22c55e; --off-white: #f4f6fb; --gray: #64748b; --light-gray: #e2e8f0; --white: #ffffff; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Sora', sans-serif; color: var(--navy); background: var(--off-white); line-height: 1.7; }
  .hero { background: linear-gradient(135deg, #061226 0%, var(--navy) 50%, #1a3660 100%); padding: 40px 5% 50px; text-align: center; color: #fff; }
  .hero h1 { font-size: clamp(1.4rem, 4vw, 2rem); font-weight: 800; margin-bottom: 6px; }
  .hero .sub { font-size: .85rem; opacity: .7; font-family: 'Noto Sans Devanagari', sans-serif; }
  .hero .badge { display: inline-block; margin-top: 14px; padding: 5px 16px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 50px; font-size: .75rem; font-weight: 600; }
  .hero .site-link { display: inline-block; margin-top: 10px; padding: 6px 18px; background: var(--orange); color: #fff; border-radius: 8px; font-size: .8rem; font-weight: 700; text-decoration: none; transition: background .2s; }
  .hero .site-link:hover { background: var(--orange-light); }
  .content { max-width: 1000px; margin: 0 auto; padding: 30px 5% 60px; }
  .level-grid { display: grid; grid-template-columns: repeat(${dept.levels.length > 4 ? 'auto-fill, minmax(180px, 1fr)' : '4, 1fr'}); gap: 12px; margin-bottom: 24px; }
  .level-box { background: #fff; border-radius: 12px; padding: 18px 14px; text-align: center; box-shadow: 0 2px 12px rgba(13,27,62,0.07); border: 2px solid var(--light-gray); transition: all .2s; }
  .level-box:hover { border-color: var(--orange); transform: translateY(-3px); box-shadow: 0 6px 18px rgba(13,27,62,0.12); }
  .level-icon { font-size: 1.6rem; margin-bottom: 8px; }
  .level-name { font-family: 'Noto Sans Devanagari', sans-serif; font-size: .82rem; font-weight: 700; color: var(--navy); line-height: 1.4; }
  .level-en { font-size: .68rem; color: var(--gray); margin-top: 3px; }
  @media (max-width: 600px) { .level-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; } .level-box { padding: 14px 10px; } .level-name { font-size: .76rem; } }
  .go-rules-bar { background: linear-gradient(135deg, #fff8f0 0%, #fff 100%); border: 2px solid var(--orange); border-radius: 12px; padding: 18px 20px; margin-bottom: 22px; box-shadow: 0 3px 14px rgba(230,126,34,0.10); text-align: center; }
  .go-rules-title { font-family: 'Noto Sans Devanagari', sans-serif; font-size: 1rem; font-weight: 700; color: var(--navy); margin-bottom: 10px; }
  .go-rules-title span { color: var(--orange); }
  .go-rules-links { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
  .info-bar { background: #fff; border-left: 4px solid var(--orange); border-radius: 8px; padding: 14px 18px; margin-bottom: 28px; box-shadow: 0 2px 10px rgba(0,0,0,0.06); }
  .info-bar-title { font-family: 'Noto Sans Devanagari', sans-serif; font-size: .95rem; font-weight: 700; color: var(--navy); margin-bottom: 4px; }
  .info-bar-sub { font-size: .78rem; color: var(--gray); }
  .subjects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 10px; }
  .subject-card { background: #fff; border-radius: 10px; padding: 12px 10px; box-shadow: 0 2px 8px rgba(13,27,62,0.06); border: 1.5px solid var(--light-gray); text-align: center; transition: all .2s; }
  .subject-card:hover { border-color: var(--orange); transform: translateY(-3px); box-shadow: 0 6px 16px rgba(13,27,62,0.1); }
  .subject-num { width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg, var(--navy), #2a4a8a); color: #fff; font-size: .7rem; font-weight: 800; display: flex; align-items: center; justify-content: center; margin: 0 auto 8px; }
  .subject-hi { font-family: 'Noto Sans Devanagari', sans-serif; font-size: .76rem; font-weight: 600; color: var(--navy); line-height: 1.4; }
  .subject-en { font-size: .65rem; color: var(--gray); margin-top: 3px; line-height: 1.3; }
  .subject-card.clickable { cursor: pointer; position: relative; }
  .subject-card.clickable::after { content: '▼'; position: absolute; top: 6px; right: 8px; font-size: .6rem; color: var(--orange); }
  .subject-card.clickable.active { border-color: var(--orange); background: #fff8f0; }
  .subject-card.clickable.active::after { content: '▲'; }
  .subject-detail-panel { display: none; grid-column: 1 / -1; background: #fff; border: 2px solid var(--orange); border-radius: 12px; padding: 20px; box-shadow: 0 4px 20px rgba(230,126,34,0.12); animation: slideDown .3s ease; }
  @keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
  .subject-detail-panel.show { display: block; }
  .library-info { font-family: 'Noto Sans Devanagari', sans-serif; color: #333; line-height: 1.9; }
  .library-info h3 { color: var(--navy); font-size: 1rem; margin: 16px 0 8px; border-bottom: 2px solid var(--orange); display: inline-block; padding-bottom: 2px; }
  .library-info h3:first-child { margin-top: 0; }
  .library-info p { font-size: .82rem; margin: 6px 0; }
  .library-info ul { padding-left: 20px; margin: 8px 0; }
  .library-info li { font-size: .8rem; margin: 5px 0; position: relative; }
  .library-info li::marker { color: var(--orange); }
  .library-info .highlight-box { background: linear-gradient(135deg, #f0f4ff, #e8f0fe); border-left: 4px solid var(--navy); border-radius: 8px; padding: 12px 16px; margin: 12px 0; }
  .library-info .highlight-box p { font-size: .8rem; color: var(--navy); }
  .library-info a.scheme-link:hover { color: var(--orange) !important; }
  .footer { background: var(--navy); color: rgba(255,255,255,0.6); text-align: center; padding: 16px; font-size: 11px; }
  @media (max-width: 600px) { .content { padding: 20px 16px 40px; } .hero { padding: 24px 16px 30px; } .hero h1 { font-size: 1.3rem; } .subjects-grid { grid-template-columns: 1fr; } }
</style>
</head>
<body>

<nav style="position:sticky;top:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:0 4%;height:56px;background:rgba(255,255,255,0.97);backdrop-filter:blur(12px);box-shadow:0 2px 12px rgba(13,27,62,0.08);"><a href="index.html" style="display:flex;align-items:center;gap:8px;text-decoration:none;"><img src="logo-nav.png" alt="VISRO" style="height:38px;width:auto;"><span style="font-size:.85rem;font-weight:700;color:#0d1b3e;">VISRO Consultancy</span></a><div style="display:flex;align-items:center;gap:12px;"><a href="officers.html" style="font-size:.78rem;font-weight:600;color:#0d1b3e;text-decoration:none;">← विभाग</a><a href="index.html" style="padding:6px 14px;background:#0d1b3e;color:#fff;border-radius:6px;font-size:.78rem;font-weight:600;text-decoration:none;">Home</a></div></nav>

<div class="hero">
  <h1>${dept.icon} ${dept.titleHi}</h1>
  <div class="sub">${dept.titleEn} — ${dept.description}</div>
  <div class="badge">VISRO Consultancy</div>
  <br>
  <a href="https://${dept.website}" target="_blank" class="site-link">🌐 ${dept.website}</a>
</div>

<div class="content">
  <div class="level-grid">
${buildLevelGrid(dept.levels)}
  </div>

  <div class="go-rules-bar">
    <div class="go-rules-title">📜 <span>शासनादेश व नियम</span> देखें</div>
    <div class="go-rules-links" id="go-rules-content">
      <!-- Links will be added as per user instructions -->
    </div>
  </div>

  <div class="info-bar">
    <div class="info-bar-title">${dept.infoTitle}</div>
    <div class="info-bar-sub">${dept.infoSub}</div>
  </div>

  <div class="subjects-grid">
${buildSubjectCards(dept.subjects)}

    <div class="subject-detail-panel" id="subject-detail-dynamic"></div>
  </div>
</div>

<div class="footer">VISRO Consultancy | Musafirkhana, Amethi, UP | visroconsultancy.in</div>

<div style="position:fixed;right:20px;bottom:28px;z-index:200;display:flex;flex-direction:column;gap:10px;"><a href="tel:+918840714094" style="width:50px;height:50px;border-radius:50%;background:#e8640a;color:#fff;display:flex;align-items:center;justify-content:center;font-size:1.2rem;box-shadow:0 4px 16px rgba(0,0,0,0.25);text-decoration:none;" title="Call">📞</a><a href="https://wa.me/918840714094?text=Hello%20VISRO%20Consultancy" style="width:50px;height:50px;border-radius:50%;background:#22c55e;color:#fff;display:flex;align-items:center;justify-content:center;font-size:1.2rem;box-shadow:0 4px 16px rgba(0,0,0,0.25);text-decoration:none;" title="WhatsApp">💬</a></div>

<script>
var currentOpenSubject = null;
var subjectData = ${JSON.stringify(dept.subjects.reduce((acc, s, i) => { acc[i+1] = s; return acc; }, {}), null, 2)};

function toggleSubjectDetail(n) {
  var dynPanel = document.getElementById('subject-detail-dynamic');
  if (currentOpenSubject === n && dynPanel.classList.contains('show')) {
    dynPanel.classList.remove('show');
    var card = document.getElementById('subject-card-' + n);
    if (card) card.classList.remove('active');
    currentOpenSubject = null;
    return;
  }
  if (currentOpenSubject) {
    var prevCard = document.getElementById('subject-card-' + currentOpenSubject);
    if (prevCard) prevCard.classList.remove('active');
  }
  var data = subjectData[n];
  if (!data) return;
  var html = '<div class="library-info">';
  html += '<h3>\u2696\uFE0F \u0938\u0902\u0935\u0948\u0927\u093E\u0928\u093F\u0915/\u0915\u093E\u0928\u0942\u0928\u0940 \u0906\u0927\u093E\u0930</h3>';
  html += '<p>' + data.legal + '</p>';
  if (data.highlight) html += '<div class="highlight-box"><p>' + data.highlight + '</p></div>';
  html += '<h3>\uD83D\uDCCB \u0938\u0902\u092C\u0902\u0927\u093F\u0924 \u0905\u0927\u093F\u0928\u093F\u092F\u092E \u090F\u0935\u0902 \u0928\u093F\u092F\u092E</h3><ul>';
  for (var i = 0; i < data.acts.length; i++) { html += '<li>' + data.acts[i] + '</li>'; }
  html += '</ul>';
  html += '<h3>\uD83D\uDC68\u200D\uD83D\uDCBC \u0905\u0927\u093F\u0915\u093E\u0930\u0940 \u090F\u0935\u0902 \u0935\u093F\u092D\u093E\u0917 \u0915\u0940 \u092D\u0942\u092E\u093F\u0915\u093E</h3><ul>';
  for (var i = 0; i < data.roles.length; i++) { html += '<li>' + data.roles[i] + '</li>'; }
  html += '</ul>';
  html += '<h3>\uD83C\uDFDB\uFE0F \u092A\u094D\u0930\u092E\u0941\u0916 \u0938\u0930\u0915\u093E\u0930\u0940 \u092F\u094B\u091C\u0928\u093E\u090F\u0901 / \u092A\u094B\u0930\u094D\u091F\u0932</h3><ul>';
  for (var i = 0; i < data.schemes.length; i++) {
    var s = data.schemes[i];
    if (typeof s === 'object' && s.url) {
      html += '<li><a href="' + s.url + '" class="scheme-link" target="_blank" rel="noopener" style="color:var(--navy);text-decoration:none;border-bottom:1.5px dashed var(--orange);font-weight:600;transition:color .2s;">' + s.name + ' \uD83D\uDD17</a></li>';
    } else {
      html += '<li>' + (typeof s === 'object' ? s.name : s) + '</li>';
    }
  }
  html += '</ul>';
  html += '<h3>\uD83D\uDC65 \u091C\u0928\u0924\u093E \u0915\u094B \u0932\u093E\u092D</h3><ul>';
  for (var i = 0; i < data.benefits.length; i++) { html += '<li>' + data.benefits[i] + '</li>'; }
  html += '</ul></div>';
  dynPanel.innerHTML = html;
  var card = document.getElementById('subject-card-' + n);
  if (card) {
    card.parentNode.insertBefore(dynPanel, card.nextSibling);
    card.classList.add('active');
  }
  dynPanel.classList.add('show');
  currentOpenSubject = n;
  setTimeout(function(){ dynPanel.scrollIntoView({behavior:'smooth',block:'start'}); }, 100);
}
</script>
</body>
</html>
`;
}

// Load department data
const departments = require('./dept-data.js');

// Generate each page
departments.forEach(dept => {
  const html = buildHTML(dept);
  const outPath = path.join(__dirname, dept.filename);
  fs.writeFileSync(outPath, html, 'utf8');
  console.log('Generated: ' + dept.filename);
});

console.log('\nAll ' + departments.length + ' department pages generated successfully!');
