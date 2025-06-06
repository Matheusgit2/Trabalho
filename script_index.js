async function changeLang(lang) {
    try {
      const res = await fetch(`${lang}.json`);
      if (!res.ok) throw new Error("Erro ao carregar o JSON");
      
      const data = await res.json();
  
      document.getElementById("title").textContent = data.title;
      document.getElementById("choose_period").textContent = data.choose_period;
      document.getElementById("greco_persian_wars").textContent = data.greco_persian_wars;
      document.getElementById("battle_of_themorpilae").textContent = data.battle_of_themorpilae;
      document.getElementById("marathon_battle").textContent = data.marathon_battle;
       document.getElementById("ww1").textContent = data.ww1;
       document.getElementById("Battle_of_Verdun").textContent = data.Battle_of_Verdun;
      document.getElementById("Hundred_Days_Offensive").textContent = data.Hundred_Days_Offensive;
      document.getElementById("ww2").textContent = data.ww2;
      document.getElementById("Battle_of_Stalingrad").textContent = data.Battle_of_Stalingrad;
      document.getElementById("Invasion_of_Normandy").textContent = data.Invasion_of_Normandy;
      document.getElementById("site_description").textContent = data.site_description;
      document.getElementById("future_updates").textContent = data.future_updates;
      document.getElementById("image_caption").textContent = data.image_caption;
      document.getElementById("legends").textContent = data.legends;



    } catch (err) {
      console.error("Erro ao traduzir:", err);
    }
  
  
  
  }


  function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }}



applySavedTheme()


document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
   
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});


  document.getElementById("formBatalha").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var batalha = document.getElementById("batalha").value.trim();
    var erro = "";
    var sucesso = "";

    if (batalha === "") {
      erro = "Por favor, digite o nome de uma batalha.";
    } else {
      sucesso = "Obrigado! Sua batalha favorita foi registrada.";
    }

    document.getElementById("mensagemErro").innerHTML = erro;
    document.getElementById("mensagemSucesso").innerHTML = sucesso;

    
  });

  
