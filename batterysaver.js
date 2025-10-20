window.onload = async () => {
  if (!navigator.getBattery) {
    console.warn("Battery Status API not supported.");
    return;
  }

  try {
    const battery = await navigator.getBattery();
    const batteryLevel = battery.level * 100;

    if (batteryLevel <= 5) {
      // Attempt to close the tab
      window.open('', '_self')?.close();
    }
  } catch (err) {
    console.error("Battery check failed:", err);
  }
};
