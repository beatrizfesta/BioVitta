// 1. Dados das cidades para o Modal de Unidades
const dadosCidades = {
    curitiba: {
        nome: "Curitiba",
        bairros: ["Batel", "Centro", "Bigorrilho", "Portão", "Santa Felicidade"]
    },
    sp: {
        nome: "São Paulo",
        bairros: ["Itaim Bibi", "Vila Olímpia", "Pinheiros", "Morumbi", "Moema"]
    },
    rio: {
        nome: "Rio de Janeiro",
        bairros: ["Copacabana", "Ipanema", "Barra da Tijuca", "Leblon", "Botafogo"]
    }
};

/* --- FUNÇÕES DE NAVEGAÇÃO --- */

// Função para abrir/fechar o menu no celular
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    if (nav) {
        nav.classList.toggle('active');
    }
}

/* --- FUNÇÕES DOS MODAIS --- */

// Funções para controlar a janela de Login (Modal)
function abrirModal() {
    const modal = document.getElementById('loginModal');
    if (modal) modal.style.display = 'block';
}

function fecharModal() {
    const modal = document.getElementById('loginModal');
    if (modal) modal.style.display = 'none';
}

// Funções das Unidades
function abrirUnidades(cidade) {
    const modal = document.getElementById('modalUnidades');
    const titulo = document.getElementById('tituloCidade');
    const lista = document.getElementById('listaBairros');
    
    if (modal && titulo && lista) {
        titulo.innerText = "Unidades em " + dadosCidades[cidade].nome;
        lista.innerHTML = ""; // Limpa a lista anterior
        
        dadosCidades[cidade].bairros.forEach(bairro => {
            let li = document.createElement('li');
            li.innerText = bairro;
            li.style.padding = "10px 0";
            li.style.borderBottom = "1px solid #eee";
            li.style.listStyle = "none";
            lista.appendChild(li);
        });
        
        modal.style.display = 'block';
    }
}

function fecharUnidades() {
    const modal = document.getElementById('modalUnidades');
    if (modal) modal.style.display = 'none';
}

/* --- LOGICA DE LOGIN E SISTEMA --- */

// Simulação de Login
function simularLogin() {
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;

if(cpf === "123" && senha === "123") {
        fecharModal();
        
        // Esconde o conteúdo principal e mostra a tabela de resultados
        const principal = document.getElementById('conteudo-principal');
        const resultados = document.getElementById('resultados');
        
        if (principal) principal.style.display = 'none';
        if (resultados) resultados.classList.remove('hidden'); 
    } else {
        alert("CPF ou Senha incorretos. Use 123 como teste.");
    }
}

// Função para "deslogar"
function logout() {
    location.reload(); // Recarrega a página para o estado inicial
}

/* --- FECHAMENTO GLOBAL --- */

// Fecha qualquer um dos dois modais ao clicar na área escura (fora da caixa branca)
window.onclick = function(event) {
    const modalUnidades = document.getElementById('modalUnidades');
    const modalLogin = document.getElementById('loginModal');
    
    if (event.target == modalUnidades) {
        fecharUnidades();
    }
    if (event.target == modalLogin) {
        fecharModal();
    }
}
function mudarAba(idAba) {
    // Esconde todos os conteúdos de aba
    document.querySelectorAll('.conteudo-aba').forEach(aba => {
        aba.classList.remove('active');
    });
    
    // Remove a classe active de todos os botões
    document.querySelectorAll('.aba-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Mostra a aba clicada e ativa o botão
    document.getElementById(idAba).classList.add('active');
    event.currentTarget.classList.add('active');
}

function verResultado(exame) {
    alert("Abrindo laudo detalhado do exame: " + exame + "\n\n(Aqui você poderia abrir um PDF ou um novo modal com os valores de referência)");
}
function logout() {
    // 1. Esconde a seção imediatamente
    const sessaoResultados = document.getElementById('resultados');
    sessaoResultados.classList.add('hidden');
    sessaoResultados.style.display = 'none'; // Garante que o espaço suma

    // 2. Mostra o conteúdo principal novamente
    const conteudoPrincipal = document.getElementById('conteudo-principal');
    if (conteudoPrincipal) {
        conteudoPrincipal.style.display = 'block';
    }

    // 3. Recarrega a página para limpar a memória do navegador
    // Isso é o mais importante para o conteúdo não "sobrar" lá embaixo
    window.location.href = "index.html"; 
}
