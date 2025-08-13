// Create status bar container
const bar = document.createElement('div');
bar.id = 'status-bar';
bar.style.position = 'fixed';
bar.style.top = '0';
bar.style.left = '0';
bar.style.width = '100%';
bar.style.background = '#111';
bar.style.color = '#eee';
bar.style.fontFamily = 'monospace';
bar.style.fontSize = '14px';
bar.style.padding = '5px 10px';
bar.style.display = 'flex';
bar.style.justifyContent = 'space-between';
bar.style.zIndex = '9999';

// Create elements
const batterySpan = document.createElement('span');
batterySpan.id = 'battery';
batterySpan.textContent = '🔋 Battery: --%';

const networkSpan = document.createElement('span');
networkSpan.id = 'network';
networkSpan.textContent = '📶 Network: --';

const clockSpan = document.createElement('span');
clockSpan.id = 'clock';
clockSpan.textContent = '⏱️ Time: --:--:--.---';

// Append elements
bar.appendChild(batterySpan);
bar.appendChild(networkSpan);
bar.appendChild(clockSpan);
document.body.appendChild(bar);

// ⏱️ Live Clock
function updateClock() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour12: false }) + '.' + String(now.getMilliseconds()).padStart(3, '0');
  clockSpan.textContent = `⏱️ Time: ${timeStr}`;
}
setInterval(updateClock, 50);

// 🔋 Battery Status
if ('getBattery' in navigator) {
  navigator.getBattery().then(battery => {
    function updateBattery() {
      const level = Math.round(battery.level * 100);
      batterySpan.textContent = `🔋 Battery: ${level}%`;
    }
    updateBattery();
    battery.addEventListener('levelchange', updateBattery);
  });
} else {
  batterySpan.textContent = '🔋 Battery: N/A';
}

// 📶 Network Status
function updateNetwork() {
  const status = navigator.onLine ? 'Online' : 'Offline';
  networkSpan.textContent = `📶 Network: ${status}`;
}
window.addEventListener('online', updateNetwork);
window.addEventListener('offline', updateNetwork);
updateNetwork();
