self.addEventListener("push", (e) => {
  const config = {
    body: "Mesaj içeriği burada yayınlanmaktadır.",
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "3",
    },
  };

  e.waitUntil(self.registration.showNotification("Bu bir başlıktır", config));
});
