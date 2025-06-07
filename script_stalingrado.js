window.changeLang=async function changeLang(lang) {
try {
      const res = await fetch(`${lang}.json`);
      if (!res.ok) throw new Error("Erro ao carregar o JSON");
      
      const data = await res.json();
  
      document.getElementById("Stalingrad").textContent = data.Stalingrad;
      document.getElementById("Stalingrad_intro").textContent = data.Stalingrad_intro;
      document.getElementById("Stalingrad_description").textContent = data.Stalingrad_description;
      document.getElementById("Stalingrad_end").textContent = data.Stalingrad_end;
      document.getElementById("Video_Stalingrad").textContent = data.Video_Stalingrad;
    } catch (err) {
      console.error("Erro ao traduzir:", err);

    }

    
}
