<script>
// ===============================
// Smooth Scroll Seguro
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        const destino = document.querySelector(
            this.getAttribute('href')
        );

        if(destino){
            destino.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

});

// ===============================
// Animação dos Cards
// ===============================
const cards = document.querySelectorAll('.card');

if ('IntersectionObserver' in window) {

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {
        threshold: 0.2
    });

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "all 0.6s ease";

        observer.observe(card);

    });

}

// ===============================
// Validação do Formulário
// ===============================
const form = document.getElementById("formContato");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if(!nome || !email || !mensagem){

        alert("Preencha todos os campos.");
        return;

    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailValido.test(email)){

        alert("Digite um e-mail válido.");
        return;

    }

    alert("Mensagem enviada com sucesso! 🌱");

    form.reset();

});

// ===============================
// Menu Ativo Conforme Seção
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if(
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

// ===============================
// Botão Voltar ao Topo
// ===============================
if(!document.querySelector(".btn-topo")){

    const btnTopo = document.createElement("button");

    btnTopo.innerHTML = "↑";
    btnTopo.classList.add("btn-topo");

    document.body.appendChild(btnTopo);

    window.addEventListener("scroll", () => {

        if(window.scrollY > 400){

            btnTopo.style.display = "block";

        } else {

            btnTopo.style.display = "none";

        }

    });

    btnTopo.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
