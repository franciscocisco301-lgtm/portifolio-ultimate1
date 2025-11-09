const galeria = document.getElementById("galeria");

firebase.firestore()
  .collection("fotos")
  .orderBy("data", "desc")
  .onSnapshot(snapshot => {
    galeria.innerHTML = "";
    snapshot.forEach(doc => {
      const img = document.createElement("img");
      img.src = doc.data().url;
      img.classList.add("foto");
      galeria.appendChild(img);
    });
  });

document.getElementById("logoutBtn").addEventListener("click", () => {
  firebase.auth().signOut().then(() => {
    window.location.href = "login.html";
  });
});