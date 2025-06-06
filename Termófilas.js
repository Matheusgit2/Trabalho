async function changeLang(lang) {
    try {
      const res = await fetch(`${lang}.json`);
      if (!res.ok) throw new Error("Erro ao carregar o JSON");
      
      const data = await res.json();
  
      document.getElementById("sugestion").innerHTML = data.sugestion;
      document.getElementById("battle_of_themorpilae").textContent = data.battle_of_themorpilae;
       document.getElementById("main").textContent = data.main;
      document.getElementById("description_thermo").textContent = data.description_thermo;
      document.getElementById("myth_thermo").textContent = data.myth_thermo;
       document.getElementById("myth_answer").textContent = data.myth_answer;
    document.getElementById("Video").textContent = data.Video;
    } catch (err) {
      console.error("Erro ao traduzir:", err);
    }
}
