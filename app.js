self.addEventListener("load", async () => {
  console.log("sayfa yüklendi");
  const sW = await navigator.serviceWorker.register("/sw.js");
  console.log("Service Worker => ", sW);

  const subscribeButton = document.querySelector("#subscribe");
  subscribeButton.addEventListener("click", async () => {
    const serviceWorker = await navigator.serviceWorker.ready;
    const clientID = await serviceWorker.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey:
        "BEY6ts-VhjTHQbMRQ8qTSijhDfQuF3VZtPV5gxSjOrvX5iIp6m0DsGF9qvTm24FWxwMkR3rNi69Zu_xfwDSPNiM",
    });
    console.log(clientID);
    alert("OK");
    console.log(JSON.stringify(clientID));
  });
});
