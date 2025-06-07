window.changeLang=async function changeLang(lang) {
try {
      const res = await fetch(`${lang}.json`);
      if (!res.ok) throw new Error("Erro ao carregar o JSON");
      
      const data = await res.json();
  
      document.getElementById("Invasion_of_Normandy").textContent = data.Invasion_of_Normandy;
      document.getElementById("Normandy1").textContent = data.Normandy1;
      document.getElementById("Normandy2").textContent = data.Normandy2;
      document.getElementById("Normandy3").textContent = data.Normandy3;
      document.getElementById("Normandy4").textContent = data.Normandy4;
      document.getElementById("Normandy5").textContent = data.Normandy5;
    } catch (err) {
      console.error("Erro ao traduzir:", err);

    }

    
}
