/**
 * VISRO Awas Payment Gate
 * Shows payment page before allowing print/PDF
 * Usage: call showPaymentGate(type, onSuccess)
 *   type: 'form' (₹29) or 'shapath' (₹9)
 *   onSuccess: function to call after payment (e.g. print)
 */
(function() {

  var CSS_DONE = false;
  function addCSS() {
    if (CSS_DONE) return;
    CSS_DONE = true;
    var s = document.createElement('style');
    s.textContent =
      '.pay-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.7);z-index:99999;display:flex;align-items:center;justify-content:center;padding:16px;}' +
      '.pay-card{background:white;border-radius:16px;max-width:420px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,0.3);overflow:hidden;animation:paySlide 0.3s ease;}' +
      '@keyframes paySlide{from{transform:translateY(40px);opacity:0}to{transform:translateY(0);opacity:1}}' +
      '.pay-header{background:linear-gradient(135deg,#0d1b3e,#1a3660);color:white;padding:24px;text-align:center;}' +
      '.pay-header h3{font-size:18px;font-weight:800;margin-bottom:4px;}' +
      '.pay-header p{font-size:12px;opacity:0.7;}' +
      '.pay-body{padding:24px;}' +
      '.pay-item{display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid #e2e8f0;font-size:14px;}' +
      '.pay-item:last-child{border-bottom:none;}' +
      '.pay-item .label{color:#64748b;font-weight:600;}' +
      '.pay-item .value{color:#0d1b3e;font-weight:800;font-size:16px;}' +
      '.pay-total{display:flex;justify-content:space-between;align-items:center;padding:16px;background:#f0fdf4;border-radius:10px;margin:16px 0;border:2px solid #22c55e;}' +
      '.pay-total .label{color:#166534;font-weight:800;font-size:15px;}' +
      '.pay-total .value{color:#166534;font-weight:800;font-size:22px;}' +
      '.pay-qr{text-align:center;margin:16px 0;}' +
      '.pay-qr img{width:180px;height:180px;border:3px solid #e2e8f0;border-radius:12px;}' +
      '.pay-upi{text-align:center;margin:8px 0;font-size:13px;color:#64748b;}' +
      '.pay-upi b{color:#0d1b3e;}' +
      '.pay-btns{display:flex;gap:10px;margin-top:16px;}' +
      '.pay-btns button{flex:1;padding:14px;border:none;border-radius:10px;font-family:inherit;font-size:14px;font-weight:700;cursor:pointer;transition:all 0.2s;}' +
      '.pay-btns .btn-pay{background:#22c55e;color:white;}' +
      '.pay-btns .btn-pay:hover{background:#16a34a;}' +
      '.pay-btns .btn-cancel{background:#f1f5f9;color:#64748b;}' +
      '.pay-btns .btn-cancel:hover{background:#e2e8f0;}' +
      '.pay-note{font-size:11px;color:#64748b;text-align:center;margin-top:12px;line-height:1.6;}' +
      '.pay-success{text-align:center;padding:30px 24px;}' +
      '.pay-success .icon{font-size:60px;margin-bottom:12px;}' +
      '.pay-success h3{font-size:18px;font-weight:800;color:#166534;margin-bottom:6px;}' +
      '.pay-success p{font-size:13px;color:#64748b;margin-bottom:20px;}' +
      '.pay-success .btn-print{padding:14px 32px;background:#e8640a;color:white;border:none;border-radius:10px;font-family:inherit;font-size:15px;font-weight:700;cursor:pointer;}' +
      '.pay-success .btn-print:hover{background:#f07a28;}' +
      '@media print{.pay-overlay{display:none!important;}}';
    document.head.appendChild(s);
  }

  window.showPaymentGate = function(type, onSuccess) {
    addCSS();

    var isForm = (type === 'form');
    var amount = isForm ? 29 : 9;
    var label = isForm ? 'आवेदन पत्र (Application Form)' : 'शपथ पत्र (Affidavit / Stamp)';
    var desc = isForm ? 'आवेदन पत्र प्रिंट / PDF' : 'शपथ पत्र प्रिंट / PDF';

    // Create overlay
    var overlay = document.createElement('div');
    overlay.className = 'pay-overlay';
    overlay.id = 'paymentOverlay';

    var html = '';
    html += '<div class="pay-card">';
    html += '<div class="pay-header"><h3>💳 Payment Required</h3><p>प्रिंट / PDF के लिए भुगतान करें</p></div>';
    html += '<div class="pay-body">';

    html += '<div class="pay-item"><span class="label">सेवा:</span><span class="value" style="font-size:13px;">' + label + '</span></div>';
    html += '<div class="pay-item"><span class="label">विवरण:</span><span class="value" style="font-size:13px;">' + desc + '</span></div>';

    html += '<div class="pay-total"><span class="label">कुल राशि:</span><span class="value">₹' + amount + '</span></div>';

    // QR Section
    html += '<div class="pay-qr">';
    html += '<div style="width:180px;height:180px;border:3px solid #e2e8f0;border-radius:12px;margin:0 auto;display:flex;align-items:center;justify-content:center;background:#f8fafc;">';
    html += '<div style="text-align:center;font-size:12px;color:#64748b;"><div style="font-size:32px;margin-bottom:6px;">📱</div>Scan QR to Pay<br><b>₹' + amount + '</b></div>';
    html += '</div>';
    html += '</div>';
    html += '<div class="pay-upi">UPI ID: <b>8840714094@ybl</b></div>';
    html += '<div class="pay-upi" style="font-size:11px;">PhonePe / Google Pay / Paytm — ₹' + amount + ' भेजें</div>';

    html += '<div class="pay-btns">';
    html += '<button class="btn-cancel" onclick="closePayment()">✕ Cancel</button>';
    html += '<button class="btn-pay" onclick="confirmPayment()">✅ भुगतान हो गया</button>';
    html += '</div>';

    html += '<div class="pay-note">भुगतान करने के बाद "भुगतान हो गया" बटन दबाएँ।<br>VISRO Consultancy — Gomtinagar Vistar, Lucknow</div>';

    html += '</div>'; // pay-body
    html += '</div>'; // pay-card

    overlay.innerHTML = html;
    document.body.appendChild(overlay);

    // Close
    window.closePayment = function() {
      var ov = document.getElementById('paymentOverlay');
      if (ov) ov.remove();
    };

    // Confirm payment → show success → allow print
    window.confirmPayment = function() {
      var card = overlay.querySelector('.pay-card');
      card.innerHTML = '<div class="pay-success">' +
        '<div class="icon">✅</div>' +
        '<h3>भुगतान सफल!</h3>' +
        '<p>₹' + amount + ' — ' + label + '<br>अब आप प्रिंट / PDF बना सकते हैं</p>' +
        '<button class="btn-print" onclick="proceedPrint()">🖨️ Print / PDF बनाएँ</button>' +
        '<br><br><button onclick="closePayment()" style="background:none;border:none;color:#64748b;font-size:12px;cursor:pointer;font-family:inherit;">बाद में प्रिंट करें</button>' +
        '</div>';

      window.proceedPrint = function() {
        closePayment();
        if (onSuccess) onSuccess();
      };
    };

    // Close on overlay click (outside card)
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) closePayment();
    });
  };

})();
