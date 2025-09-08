async function init() {
  try {
    //pedimos el json del perfil
    const res = await fetch("info.json", { cache: "no-store" });
    if (!res.ok) throw new Error("No se pudo cargar info.json");
    const data: any = await res.json();
    console.log("Datos completos:", data);

    //perfil
    const nameEl = document.getElementById("name");
    if (nameEl) nameEl.textContent = String(data?.perfil?.nombre ?? "");
    const roleEl = document.getElementById("role");
    if (roleEl) roleEl.textContent = String(data?.perfil?.rol ?? "");
    const aboutEl = document.getElementById("about");
    if (aboutEl) aboutEl.textContent = String(data?.perfil?.acerca ?? "");

    //contacto
    const phoneEl = document.getElementById("phone");
    if (phoneEl) phoneEl.textContent = String(data?.contacto?.telefono ?? "");
    const emailEl = document.getElementById("email");
    if (emailEl) emailEl.textContent = String(data?.contacto?.correo ?? "");
    const locationEl = document.getElementById("location");
    if (locationEl) locationEl.textContent = String(data?.contacto?.ubicacion ?? "");
    const avatar = document.getElementById("avatar") as HTMLImageElement | null;
    if (avatar && data?.contacto?.avatar) {
      avatar.src = String(data.contacto.avatar);
      avatar.alt = "Foto de perfil";
    }

    const contactList = document.querySelector(".contact") as HTMLUListElement | null;
    if (contactList) {
      // GitHub
      const gh = String(data?.contacto?.github ?? "");
      const ghLi = document.createElement("li");
      ghLi.innerHTML = '<span></span><a id="github" target="_blank" rel="noopener">GitHub</a>';
      const ghA = ghLi.querySelector("a") as HTMLAnchorElement | null;
      if (ghA) ghA.href = gh || '#';
      contactList.appendChild(ghLi);

      // LinkedIn
      const liUrl = String(data?.contacto?.linkedin ?? "");
      const lnLi = document.createElement("li");
      lnLi.innerHTML = '<span></span><a id="linkedin" target="_blank" rel="noopener">LinkedIn</a>';
      const lnA = lnLi.querySelector("a") as HTMLAnchorElement | null;
      if (lnA) lnA.href = liUrl || '#';
      contactList.appendChild(lnLi);
    }

    //mis skills, languages
    const skills = document.getElementById("skills") as HTMLUListElement | null;
    if (skills) {
      skills.innerHTML = "";
      const arr = (data && data.habilidades) || [];
      for (let i = 0; i < arr.length; i++) {
        const li = document.createElement("li");
        li.textContent = String(arr[i] || "");
        skills.appendChild(li);
      }
    }

    //idiomas
    const langs = document.getElementById("languages") as HTMLUListElement | null;
    if (langs) {
      langs.innerHTML = "";
      const arr = (data && data.idiomas) || [];
      for (let i = 0; i < arr.length; i++) {
        const li = document.createElement("li");
        li.textContent = String(arr[i] || "");
        langs.appendChild(li);
      }
    }

    //educacion
    const eduBox = document.getElementById("education") as HTMLDivElement | null;
    if (eduBox) {
      let html = "";
      const arr = (data && data.educacion) || [];
      for (let i = 0; i < arr.length; i++) {
        const e = arr[i] || {};
        html += '<article class="card"><h3>' + (e.titulo || "") + '</h3><p>' + (e.descripcion || "") + '</p></article>';
      }
      eduBox.innerHTML = html;
    }

    //proyectos
    const projBox = document.getElementById("projects") as HTMLDivElement | null;
    if (projBox) {
      let html = "";
      const arr = (data && data.proyectos) || [];
      for (let i = 0; i < arr.length; i++) {
        const p = arr[i] || {};
        const url = p.url || "#";
        const name = p.nombre || "Proyecto";
        const desc = p.descripcion || "";
      //tarjeta de proyecto 
        html += `<article class="card project-card">
  <div class="project-thumb">${p.imagen ? `<img src="${p.imagen}" alt="Miniatura">` : '🐍'}</div>
  <div class="project-body">
    <h3><a href="${url}" target="_blank" rel="noopener">${name}</a></h3>
    <p>${desc}</p>
  </div>
</article>`;
      }
      projBox.innerHTML = html;
    }

    //form
    const form = document.getElementById("contact-form") as HTMLFormElement | null;
    if (form && data?.contacto?.correo) {
      form.action = "https://formsubmit.co/" + encodeURIComponent(data.contacto.correo);
    }

    //validaciones
    const errorBox = document.getElementById("form-errors") as HTMLElement | null;
    if (form && errorBox) {
      form.addEventListener("submit", function (e: Event) {
        const name = (form.querySelector('[name="name"]') as HTMLInputElement | null)?.value.trim() || "";
        const email = (form.querySelector('[name="email"]') as HTMLInputElement | null)?.value.trim() || "";
        const message = (form.querySelector('[name="message"]') as HTMLTextAreaElement | null)?.value.trim() || "";
        const errors: string[] = [];
        //nombre obligtorio
        if (!name) errors.push("El nombre es obligatorio.");
        //correo validar
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("El correo no es válido.");
        if (message.length < 10) errors.push("El mensaje debe tener al menos 10 caracteres.");
        //limpiamos el contnedor de errores
        errorBox.innerHTML = "";
        if (errors.length > 0) {
          e.preventDefault();
          let out = "";
          for (let i = 0; i < errors.length; i++) out += '<p>• ' + errors[i] + '</p>';
          errorBox.innerHTML = out;
        }
      });
    }
  } catch (err) {
    //si falla mostramos mesanje de error en la pagina
    const app = document.getElementById("app") as HTMLElement | null;
    if (app) app.insertAdjacentHTML("beforeend", '<p style="color:red">Error cargando datos.</p>');
  }
}

init();
