async function changeLang(lang) {
    try {
      const res = await fetch(`${lang}.json`);
      if (!res.ok) throw new Error("Erro ao carregar o JSON");
      
      const data = await res.json();
  
      document.getElementById("title").textContent = data.title;
      document.getElementById("choose_period").textContent = data.choose_period;
      document.getElementById("greco_persian_wars").textContent = data.greco_persian_wars;
      document.getElementById("marathon_battle").textContent = data.marathon_battle;
    } catch (err) {
      console.error("Erro ao traduzir:", err);
    }
  }
  
