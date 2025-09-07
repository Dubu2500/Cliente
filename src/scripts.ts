async function init() {
  try {
    //pedimos el json del perfil
    const res = await fetch("info.json", { cache: "no-store" });
    if (!res.ok) throw new Error("No se pudo cargar info.json");
    const data: any = await res.json();
    console.log("Datos completos:", data);

    //perfil
    const nameEl = document.getElementById("name");
    if (nameEl) nameEl.textContent = String(data?.profile?.name ?? "");
    const roleEl = document.getElementById("role");
    if (roleEl) roleEl.textContent = String(data?.profile?.role ?? "");
    const aboutEl = document.getElementById("about");
    if (aboutEl) aboutEl.textContent = String(data?.profile?.about ?? "");

    //contacto
    const phoneEl = document.getElementById("phone");
    if (phoneEl) phoneEl.textContent = String(data?.contact?.phone ?? "");
    const emailEl = document.getElementById("email");
    if (emailEl) emailEl.textContent = String(data?.contact?.email ?? "");
    const locationEl = document.getElementById("location");
    if (locationEl) locationEl.textContent = String(data?.contact?.location ?? "");
    const avatar = document.getElementById("avatar") as HTMLImageElement | null;
    if (avatar && data?.contact?.avatar) {
      avatar.src = String(data.contact.avatar);
      avatar.alt = "Foto de perfil";
    }

    //mis skills, languages
    const skills = document.getElementById("skills") as HTMLUListElement | null;
    if (skills) {
      skills.innerHTML = "";
      const arr = (data && data.skills) || [];
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
      const arr = (data && data.languages) || [];
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
      const arr = (data && data.education) || [];
      for (let i = 0; i < arr.length; i++) {
        const e = arr[i] || {};
        html += '<article class="card"><h3>' + (e.title || "") + '</h3><p>' + (e.desc || "") + '</p></article>';
      }
      eduBox.innerHTML = html;
    }

    //proyectos
    const projBox = document.getElementById("projects") as HTMLDivElement | null;
    if (projBox) {
      let html = "";
      const arr = (data && data.projects) || [];
      for (let i = 0; i < arr.length; i++) {
        const p = arr[i] || {};
        const url = p.url || "#";
        const name = p.name || "Proyecto";
        const desc = p.desc || "";
        html += '<article class="card"><h3><a href="' + url + '" target="_blank" rel="noopener">' + name + '</a></h3><p>' + desc + '</p></article>';
      }
      projBox.innerHTML = html;
    }

    //form
    const form = document.getElementById("contact-form") as HTMLFormElement | null;
    if (form && data?.contact?.email) {
      form.action = "https://formsubmit.co/" + encodeURIComponent(data.contact.email);
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
