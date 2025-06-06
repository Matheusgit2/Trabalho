async function changeLang(lang) {
    try {
      const res = await fetch(`${lang}.json`);
      if (!res.ok) throw new Error("Erro ao carregar o JSON");
      
      const data = await res.json();
  
      document.getElementById("marathon_battle").textContent = data.marathon_battle;
      document.getElementById("description_marathon1").textContent = data.description_marathon1;
      document.getElementById("description_marathon2").textContent = data.description_marathon2;
      document.getElementById("description_marathon3").textContent = data.description_marathon3;
      document.getElementById("curiosity1").textContent = data.curiosity1;
       document.getElementById("recomendation").textContent = data.recomendation;
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
        }
    }

    
    applySavedTheme();

    
    document.getElementById('theme-toggle').addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
