
function $(sel: string): any {
  return document.querySelector(sel);
}

async function cargarDatos() {
  try {
    
    const res = await fetch("data.json", { cache: "no-store" });
    if (!res.ok) throw new Error("No se pudo cargar data.json");
    const data: any = await res.json();

    //mi perfil gg papa
    $("#name").textContent = data.profile?.name || "";
    $("#role").textContent = data.profile?.role || "";
    $("#about").textContent = data.profile?.about || "";

    //skills
    const skillsEl = $("#skills");
    if (Array.isArray(data.skills)) {
      skillsEl.innerHTML = data.skills.map((s: string) => `<li>${s}</li>`).join("");
    }

    // 4) Proyectos
    const projectsEl = $("#projects");
    if (Array.isArray(data.projects)) {
      projectsEl.innerHTML = data.projects
        .map((p: any) => `
          <article class="card">
            <h3><a href="${p.url || "#"}" target="_blank" rel="noopener">${p.name || "Proyecto"}</a></h3>
            <p>${p.desc || ""}</p>
          </article>
        `)
        .join("");
    }

    
    const form = $("#contact-form") as HTMLFormElement;
    if (form && data.contact?.email) {
      form.action = `https://formsubmit.co/${encodeURIComponent(data.contact.email)}`;
    }

  
    configurarValidacion();

  } catch (err) {
    console.error("No se pudo cargar el JSON:", err);
    $("#app")?.insertAdjacentHTML("beforeend", `<p style="color:red">Error cargando datos.</p>`);
  }
}

function configurarValidacion() {
  const form = $("#contact-form") as HTMLFormElement;
  if (!form) return;

  const errorBox = $("#form-errors");

  form.addEventListener("submit", (e: SubmitEvent) => {
    if (!errorBox) return;

    const nombre = (form.querySelector('[name="name"]') as HTMLInputElement)?.value.trim();
    const correo = (form.querySelector('[name="email"]') as HTMLInputElement)?.value.trim();
    const mensaje = (form.querySelector('[name="message"]') as HTMLTextAreaElement)?.value.trim();

    const errores: string[] = [];

   
    if (!nombre) errores.push("El nombre es obligatorio.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) errores.push("El correo no es válido.");
    if (!mensaje || mensaje.length < 10) errores.push("El mensaje debe tener al menos 10 caracteres.");

    
    errorBox.innerHTML = "";
    if (errores.length > 0) {
      e.preventDefault();
      errorBox.innerHTML = errores.map(t => `<p>• ${t}</p>`).join("");
    }
  });
}


cargarDatos();
