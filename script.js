/* Menu */
((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });
  /* rutina: que detecte que si hago click se cierre el menu. delegacion de eventos, delegando el click a unelemento superior en este caso el document */
  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    /* evaluar cual es elemento q detona el click, target el objeto q origina el ebento, mathces se le pasa un selector valido */
    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

/* ContactForm */
((d) => {
  const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/ing.mariocuberos@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        location.hash = "#gracias";
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
        $response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status}: ${message}`;
      })
      .finally(() => {
        $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
})(document);


var currentLanguage = "es";

// Cargar archivo JSON de traducciones
fetch("translations.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    document.getElementById("title").textContent = data[currentLanguage].title;
    document.getElementById("home-link").textContent = data[currentLanguage].menu.home;
    document.getElementById("about-link").textContent = data[currentLanguage].menu.about;
    document.getElementById("skills-link").textContent = data[currentLanguage].menu.skills;
    document.getElementById("portfolio-link").textContent = data[currentLanguage].menu.portfolio;
    document.getElementById("contact-link").textContent = data[currentLanguage].menu.contact;
    document.getElementById("greeting").textContent = data[currentLanguage].heroImage.greeting;
    document.getElementById("name").textContent = data[currentLanguage].heroImage.name;
    document.getElementById("welcome").textContent = data[currentLanguage].heroImage.welcome;
    document.getElementById("contact-button").textContent = data[currentLanguage].heroImage.contactButton;
    document.getElementById("about-name").textContent = data[currentLanguage].about.name;
    document.getElementById("about-title").textContent = data[currentLanguage].about.title;
    document.getElementById("about-location").textContent = data[currentLanguage].about.location;
    document.getElementById("about-description1").textContent = data[currentLanguage].about.description1;
    document.getElementById("about-description2").textContent = data[currentLanguage].about.description2;
    document.getElementById("about-skills").textContent = data[currentLanguage].about.skills;
    document.getElementById("skills-section-title").textContent = data[currentLanguage].skills.sectionTitle;
    document.getElementById("angular-name").textContent = data[currentLanguage].skills.angular.name;
    document.getElementById("angular-level").textContent = data[currentLanguage].skills.angular.level;
    document.getElementById("laravel-name").textContent = data[currentLanguage].skills.laravel.name;
    document.getElementById("laravel-level").textContent = data[currentLanguage].skills.laravel.level;
    document.getElementById("sql-name").textContent = data[currentLanguage].skills.sql.name;
    document.getElementById("sql-level").textContent = data[currentLanguage].skills.sql.level;
    document.getElementById("thinking-creating").textContent = data[currentLanguage].skills.thinkingCreating;
    document.getElementById("portfolio-section-title").textContent = data[currentLanguage].portfolio.sectionTitle;
    document.getElementById("work1-title").textContent = data[currentLanguage].portfolio.work1.title;
    document.getElementById("work1-description").textContent = data[currentLanguage].portfolio.work1.description;
    document.getElementById("work2-title").textContent = data[currentLanguage].portfolio.work2.title;
    document.getElementById("work2-description").textContent = data[currentLanguage].portfolio.work2.description;
    document.getElementById("work3-title").textContent = data[currentLanguage].portfolio.work3.title;
    document.getElementById("work3-description").textContent = data[currentLanguage].portfolio.work3.description;
    document.getElementById("work4-title").textContent = data[currentLanguage].portfolio.work4.title;
    document.getElementById("work4-description").textContent = data[currentLanguage].portfolio.work4.description;
    document.getElementById("work5-title").textContent = data[currentLanguage].portfolio.work5.title;
    document.getElementById("work5-description").textContent = data[currentLanguage].portfolio.work5.description;
    document.getElementById("work6-title").textContent = data[currentLanguage].portfolio.work6.title;
    document.getElementById("work6-description").textContent =data[currentLanguage].portfolio.work6.description;
    document.getElementById("work1-modal-title").textContent = data[currentLanguage].work1Modal.title;
    document.getElementById("work1-modal-description").textContent = data[currentLanguage].work1Modal.description;
    document.getElementById("client-label").textContent = data[currentLanguage].work1Modal.clientLabel;
    document.getElementById("client-name").textContent = data[currentLanguage].work1Modal.clientName;
    document.getElementById("date-label").textContent = data[currentLanguage].work1Modal.dateLabel;
    document.getElementById("date").textContent = data[currentLanguage].work1Modal.date;
    document.getElementById("technology-label").textContent = data[currentLanguage].work1Modal.technologyLabel;
    document.getElementById("technology").textContent = data[currentLanguage].work1Modal.technology;
    document.getElementById("link-label").textContent = data[currentLanguage].work1Modal.linkLabel;
    document.getElementById("link").textContent = data[currentLanguage].work1Modal.link;
    document.getElementById("work2-modal-title").textContent = data[currentLanguage].work2Modal.title;
    document.getElementById("work2-modal-description").textContent = data[currentLanguage].work2Modal.description;
    document.getElementById("client-label2").textContent = data[currentLanguage].work2Modal.clientLabel2;
    document.getElementById("client-name2").textContent = data[currentLanguage].work2Modal.clientName2;
    document.getElementById("date-label2").textContent = data[currentLanguage].work2Modal.dateLabel2;
    document.getElementById("date2").textContent = data[currentLanguage].work2Modal.date2;
    document.getElementById("technology-label2").textContent = data[currentLanguage].work2Modal.technologyLabel2;
    document.getElementById("technology2").textContent = data[currentLanguage].work2Modal.technology2;
    document.getElementById("link-label2").textContent = data[currentLanguage].work2Modal.linkLabel2;
    document.getElementById("link2").textContent = data[currentLanguage].work2Modal.link2;
    document.getElementById("work3-modal-title").textContent = data[currentLanguage].work3Modal.title;
    document.getElementById("work3-modal-description").textContent = data[currentLanguage].work3Modal.description;
    document.getElementById("client-label3").textContent = data[currentLanguage].work3Modal.clientLabel3;
    document.getElementById("client-name3").textContent = data[currentLanguage].work3Modal.clientName3;
    document.getElementById("date-label3").textContent = data[currentLanguage].work3Modal.dateLabel3;
    document.getElementById("date3").textContent = data[currentLanguage].work3Modal.date3;
    document.getElementById("technology-label3").textContent = data[currentLanguage].work3Modal.technologyLabel;
    document.getElementById("technology3").textContent = data[currentLanguage].work3Modal.technology3;
    document.getElementById("link-label3").textContent = data[currentLanguage].work3Modal.linkLabel3;
    document.getElementById("link3").textContent = data[currentLanguage].work3Modal.link3;
    document.getElementById("work4-modal-title").textContent = data[currentLanguage].work4Modal.title;
    document.getElementById("work4-modal-description").textContent = data[currentLanguage].work4Modal.description;
    document.getElementById("client-label4").textContent = data[currentLanguage].work4Modal.clientLabel4;
    document.getElementById("client-name4").textContent = data[currentLanguage].work4Modal.clientName4;
    document.getElementById("date-label4").textContent = data[currentLanguage].work4Modal.dateLabel4;
    document.getElementById("date4").textContent = data[currentLanguage].work4Modal.date4;
    document.getElementById("technology-label4").textContent = data[currentLanguage].work4Modal.technologyLabel4;
    document.getElementById("technology4").textContent = data[currentLanguage].work4Modal.technology4;
    document.getElementById("link-label4").textContent = data[currentLanguage].work4Modal.linkLabel4;
    document.getElementById("link4").textContent = data[currentLanguage].work4Modal.link4;
    document.getElementById("work5-modal-title").textContent = data[currentLanguage].work5Modal.title;
    document.getElementById("work5-modal-description").textContent = data[currentLanguage].work5Modal.description;
    document.getElementById("client-label5").textContent = data[currentLanguage].work5Modal.clientLabel5;
    document.getElementById("client-name5").textContent = data[currentLanguage].work5Modal.clientName5;
    document.getElementById("date-label5").textContent = data[currentLanguage].work5Modal.dateLabel5;
    document.getElementById("date5").textContent = data[currentLanguage].work5Modal.date5;
    document.getElementById("technology-label5").textContent = data[currentLanguage].work5Modal.technologyLabel5;
    document.getElementById("technology5").textContent = data[currentLanguage].work5Modal.technology5;
    document.getElementById("link-label5").textContent = data[currentLanguage].work5Modal.linkLabel5;
    document.getElementById("link5").textContent = data[currentLanguage].work5Modal.link5;
    document.getElementById("work6-modal-title").textContent = data[currentLanguage].work6Modal.title;
    document.getElementById("work6-modal-description").textContent = data[currentLanguage].work6Modal.description;
    document.getElementById("client-label6").textContent = data[currentLanguage].work6Modal.clientLabel6;
    document.getElementById("client-name6").textContent = data[currentLanguage].work6Modal.clientName6;
    document.getElementById("date-label6").textContent = data[currentLanguage].work6Modal.dateLabel6;
    document.getElementById("date6").textContent = data[currentLanguage].work6Modal.date6;
    document.getElementById("technology-label6").textContent = data[currentLanguage].work6Modal.technologyLabel6;
    document.getElementById("technology6").textContent = data[currentLanguage].work6Modal.technology6;
    document.getElementById("link-label6").textContent = data[currentLanguage].work6Modal.linkLabel6;
    document.getElementById("link6").textContent = data[currentLanguage].work6Modal.link6;
    document.getElementById('contact-title').textContent = data[currentLanguage].contact.title;
    document.getElementById('location-title').textContent = data[currentLanguage].contact.location;
    document.getElementById('location-details').textContent = data[currentLanguage].contact.locationDetails;
    document.getElementById('phone-title').textContent = data[currentLanguage].contact.phone;
    document.getElementById('phone-details').textContent = data[currentLanguage].contact.phoneDetails;
    document.getElementById('email-title').textContent = data[currentLanguage].contact.email;
    document.getElementById('email-details').textContent = data[currentLanguage].contact.emailDetails;
    document.getElementById("gracias-modal-title").textContent = data[currentLanguage].graciasModal.title;
    document.getElementById("gracias-modal-icon").className = data[currentLanguage].graciasModal.iconClass;
    document.getElementById("footer-message").textContent = data[currentLanguage].graciasModal.message;
  });