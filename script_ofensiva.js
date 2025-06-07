window.changeLang=async function changeLang(lang) {
    try {
      const res = await fetch(`${lang}.json`);
      if (!res.ok) throw new Error("Erro ao carregar o JSON");
      
      const data = await res.json();
  
      document.getElementById("Hundred_Days_Offensive").textContent = data.Hundred_Days_Offensive;
      document.getElementById("Offensive_description").textContent = data.Offensive_description;
      document.getElementById("Offensive_continuation").textContent = data.Offensive_continuation;
      document.getElementById("Offensive_end").textContent = data.Offensive_end;
      document.getElementById("Offensive_video").textContent = data.Offensive_video;
    } catch (err) {
      console.error("Erro ao traduzir:", err);

    }

    
  }
