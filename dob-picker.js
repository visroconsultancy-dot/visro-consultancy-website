/**
 * VISRO Custom DOB Picker
 * Year → Month → Date (smooth flow)
 * Usage: Add class "dob-picker" to any input to auto-convert
 * Or call: initDobPicker(inputElement, {onchange: callback})
 */
(function() {
  var MONTHS_HI = ['जनवरी','फ़रवरी','मार्च','अप्रैल','मई','जून','जुलाई','अगस्त','सितम्बर','अक्टूबर','नवम्बर','दिसम्बर'];
  var MONTHS_EN = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  var CSS_DONE = false;
  function addCSS() {
    if (CSS_DONE) return;
    CSS_DONE = true;
    var s = document.createElement('style');
    s.textContent =
      '.dob-wrap{position:relative;display:inline-block;width:100%;}' +
      '.dob-btn{border:1px solid #B0C4DE;border-radius:6px;padding:8px 10px;font-size:13px;color:#0d1b3e;background:white;cursor:pointer;display:flex;align-items:center;gap:6px;font-family:inherit;min-height:38px;width:100%;user-select:none;}' +
      '.dob-btn:hover{border-color:#e8640a;}' +
      '.dob-btn .dt{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}' +
      '.dob-btn .cl{color:#e74c3c;font-weight:800;display:none;padding:0 2px;}' +
      '.dob-btn.filled .cl{display:inline;}' +
      '.dob-btn .ar{color:#64748b;font-size:10px;}' +
      '.dob-pop{position:absolute;top:calc(100% + 4px);left:0;right:0;z-index:9999;background:white;border:2px solid #e8640a;border-radius:10px;box-shadow:0 8px 30px rgba(0,0,0,0.18);display:none;overflow:hidden;}' +
      '.dob-pop.show{display:block;}' +
      '.dob-hd{background:#0d1b3e;color:white;padding:10px 14px;font-size:13px;font-weight:700;display:flex;align-items:center;gap:8px;}' +
      '.dob-hd .bk{cursor:pointer;font-size:20px;line-height:1;opacity:0.7;padding:0 4px;}' +
      '.dob-hd .bk:hover{opacity:1;}' +
      '.dob-hd .tl{flex:1;}' +
      '.dob-gr{display:grid;gap:5px;padding:10px;max-height:240px;overflow-y:auto;}' +
      '.dob-gr.yr{grid-template-columns:repeat(4,1fr);}' +
      '.dob-gr.mo{grid-template-columns:repeat(3,1fr);}' +
      '.dob-gr.dy{grid-template-columns:repeat(7,1fr);}' +
      '.dob-gr::-webkit-scrollbar{width:5px;}.dob-gr::-webkit-scrollbar-thumb{background:#ccc;border-radius:3px;}' +
      '.dob-it{padding:8px 2px;text-align:center;border-radius:6px;cursor:pointer;font-size:12px;font-weight:600;color:#0d1b3e;background:#f4f6fb;border:2px solid transparent;transition:all 0.12s;}' +
      '.dob-it:hover{background:#fff3e8;border-color:#e8640a;color:#e8640a;}' +
      '.dob-it.on{background:#e8640a;color:white;border-color:#e8640a;}' +
      '.dob-it.now{border-color:#22c55e;}' +
      '@media print{.dob-wrap .dob-btn{border:none;padding:0;min-height:auto;}.dob-pop{display:none!important;}}';
    document.head.appendChild(s);
  }

  function build(input, opts) {
    opts = opts || {};
    addCSS();

    // Hide original
    input.style.display = 'none';
    input.setAttribute('data-dob-init', '1');

    // Wrap
    var wrap = document.createElement('div');
    wrap.className = 'dob-wrap';
    input.parentNode.insertBefore(wrap, input);
    wrap.appendChild(input);

    // Button
    var ph = input.getAttribute('data-placeholder') || input.getAttribute('placeholder') || 'तिथि चुनें';
    var btn = document.createElement('div');
    btn.className = 'dob-btn';
    btn.innerHTML = '<span class="dt" style="color:#999;">' + ph + '</span><span class="cl">✕</span><span class="ar">▼</span>';
    wrap.appendChild(btn);

    // Popup
    var pop = document.createElement('div');
    pop.className = 'dob-pop';
    wrap.appendChild(pop);

    var NOW = new Date();
    var CUR_YEAR = NOW.getFullYear();
    var MIN_YEAR = parseInt(input.getAttribute('data-min-year')) || 1920;
    var MAX_YEAR = parseInt(input.getAttribute('data-max-year')) || CUR_YEAR;
    if (input.min) { var p = input.min.split('-'); if (p[0]) MIN_YEAR = parseInt(p[0]); }
    if (input.max) { var p2 = input.max.split('-'); if (p2[0]) MAX_YEAR = parseInt(p2[0]); }

    var selY = null, selM = null, selD = null;

    // ── YEAR ──
    function showYears() {
      var h = '<div class="dob-hd"><span class="tl">📅 वर्ष चुनें (Year)</span></div>';
      h += '<div class="dob-gr yr">';
      for (var y = MAX_YEAR; y >= MIN_YEAR; y--) {
        var cls = 'dob-it';
        if (y === selY) cls += ' on';
        if (y === CUR_YEAR) cls += ' now';
        h += '<div class="' + cls + '" data-v="' + y + '">' + y + '</div>';
      }
      h += '</div>';
      pop.innerHTML = h;
      pop.classList.add('show');

      // Scroll to selection
      setTimeout(function() {
        var el = pop.querySelector('.on') || pop.querySelector('.now');
        if (el) el.scrollIntoView({ block: 'center' });
      }, 30);

      // Click year
      pop.querySelectorAll('.dob-gr [data-v]').forEach(function(el) {
        el.onclick = function(e) {
          e.stopPropagation();
          selY = parseInt(this.getAttribute('data-v'));
          showMonths();
        };
      });
    }

    // ── MONTH ──
    function showMonths() {
      var h = '<div class="dob-hd"><span class="bk" data-act="back-yr">←</span><span class="tl">' + selY + ' — महीना चुनें</span></div>';
      h += '<div class="dob-gr mo">';
      for (var m = 0; m < 12; m++) {
        var cls = 'dob-it';
        if (m === selM) cls += ' on';
        h += '<div class="' + cls + '" data-v="' + m + '"><div>' + MONTHS_HI[m] + '</div><div style="font-size:10px;color:#888;">' + MONTHS_EN[m] + '</div></div>';
      }
      h += '</div>';
      pop.innerHTML = h;

      pop.querySelector('[data-act="back-yr"]').onclick = function(e) { e.stopPropagation(); showYears(); };
      pop.querySelectorAll('.dob-gr [data-v]').forEach(function(el) {
        el.onclick = function(e) {
          e.stopPropagation();
          selM = parseInt(this.getAttribute('data-v'));
          showDays();
        };
      });
    }

    // ── DAY ──
    function showDays() {
      var daysIn = new Date(selY, selM + 1, 0).getDate();
      var h = '<div class="dob-hd"><span class="bk" data-act="back-mo">←</span><span class="tl">' + MONTHS_HI[selM] + ' ' + selY + ' — तारीख चुनें</span></div>';
      h += '<div class="dob-gr dy">';
      for (var d = 1; d <= daysIn; d++) {
        var cls = 'dob-it';
        if (d === selD) cls += ' on';
        if (d === NOW.getDate() && selM === NOW.getMonth() && selY === NOW.getFullYear()) cls += ' now';
        h += '<div class="' + cls + '" data-v="' + d + '">' + d + '</div>';
      }
      h += '</div>';
      pop.innerHTML = h;

      pop.querySelector('[data-act="back-mo"]').onclick = function(e) { e.stopPropagation(); showMonths(); };
      pop.querySelectorAll('.dob-gr [data-v]').forEach(function(el) {
        el.onclick = function(e) {
          e.stopPropagation();
          selD = parseInt(this.getAttribute('data-v'));
          done();
        };
      });
    }

    // ── DONE ──
    function done() {
      var mm = String(selM + 1).padStart(2, '0');
      var dd = String(selD).padStart(2, '0');
      input.value = selY + '-' + mm + '-' + dd;
      btn.querySelector('.dt').textContent = dd + '/' + mm + '/' + selY + '  (' + MONTHS_HI[selM] + ')';
      btn.querySelector('.dt').style.color = '#0d1b3e';
      btn.classList.add('filled');
      pop.classList.remove('show');
      // Fire change
      try { input.dispatchEvent(new Event('change', { bubbles: true })); } catch(ex) {}
      if (opts.onchange) opts.onchange(input.value);
    }

    // ── CLEAR ──
    btn.querySelector('.cl').onclick = function(e) {
      e.stopPropagation();
      selY = null; selM = null; selD = null;
      input.value = '';
      btn.querySelector('.dt').textContent = ph;
      btn.querySelector('.dt').style.color = '#999';
      btn.classList.remove('filled');
      pop.classList.remove('show');
      try { input.dispatchEvent(new Event('change', { bubbles: true })); } catch(ex) {}
    };

    // ── TOGGLE ──
    btn.onclick = function(e) {
      e.stopPropagation();
      if (pop.classList.contains('show')) {
        pop.classList.remove('show');
      } else {
        showYears();
      }
    };

    // Stop clicks inside popup from closing it
    pop.onclick = function(e) {
      e.stopPropagation();
    };

    // Close on outside click
    document.addEventListener('click', function(e) {
      if (!wrap.contains(e.target)) {
        pop.classList.remove('show');
      }
    });

    // If already has value
    if (input.value) {
      var parts = input.value.split('-');
      if (parts.length === 3) {
        selY = parseInt(parts[0]);
        selM = parseInt(parts[1]) - 1;
        selD = parseInt(parts[2]);
        var dd2 = parts[2], mm2 = parts[1];
        btn.querySelector('.dt').textContent = dd2 + '/' + mm2 + '/' + parts[0] + '  (' + MONTHS_HI[selM] + ')';
        btn.querySelector('.dt').style.color = '#0d1b3e';
        btn.classList.add('filled');
      }
    }
  }

  // Auto-init
  function autoInit() {
    document.querySelectorAll('input.dob-picker:not([data-dob-init])').forEach(function(el) {
      build(el);
    });
  }

  window.initDobPicker = function(el, opts) {
    if (el.getAttribute('data-dob-init')) return;
    build(el, opts);
  };
  window.initAllDobPickers = autoInit;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoInit);
  } else {
    setTimeout(autoInit, 0);
  }
})();
