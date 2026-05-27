// --- BANCO DE DADOS DOS LUTADORES ---

const fightersData = {
    'moraes': {
        name: 'Moraes',
        nickname: 'O Vigilante',
        move: 'Marretada da Justiça',
        img: 'assets/bannermoraes.jpg',
        desc: 'O guardião supremo da constituição pixelada. Com seu olhar penetrante e toga inabalável, ele vigia a arena para garantir que ninguém ultrapasse as quatro linhas do código.'
    },
    'lula': {
        name: 'Lula',
        nickname: 'O Presidente',
        move: 'Companheiro Blast',
        img: 'assets/bannerlula.jpg',
        desc: 'Veterano dos ringues políticos, retorna para mais um round. Seu estilo de luta baseia-se na persuasão de massas e na resistência lendária. Habilidade passiva: Ressurgimento.'
    },
    'bolsonaro': {
        name: 'Bolsonaro',
        nickname: 'O Capitão',
        move: 'Histórico de Atleta',
        img: 'assets/bannerbolsonaro.jpg',
        desc: 'Ex-militar com uma base de fãs leais e barulhentos. Especialista em táticas de confronto direto e motociatas supersônicas. Cuidado com seu ataque de cloroquina concentrada.'
    },
    'trump': {
        name: 'Trump',
        nickname: 'The Tycoon',
        move: 'Wall Build',
        img: 'assets/bannertrump.jpg',
        desc: 'O magnata imobiliário que transformou a política em um reality show. Seu movimento especial constrói uma barreira instantânea na arena. Dizem que seu topete é indestrutível.'
    },
    'dilma': {
        name: 'Dilma',
        nickname: 'A Estocadora',
        move: 'Vento Furioso',
        img: 'assets/bannerdilma.jpg',
        desc: 'Mestra na manipulação do elemento ar, capaz de estocar vento para liberar em tufões devastadores. Sua oratória confusa deixa os inimigos atordoados (Stun) por 3 segundos.'
    },
    'chapolin': {
        name: 'Chapolin',
        nickname: 'O Vermelhinho',
        move: 'Marreta Biônica',
        img: 'assets/bannerchapolin.jpg',
        desc: 'Não contavam com sua astúcia! Apesar de atrapalhado, possui a Marreta Biônica e as Pastilhas de Encolhimento. O herói mais nobre e imprevisível do torneio.'
    },
    'messi': {
        name: 'Messi',
        nickname: 'La Pulga',
        move: 'Chute de Ouro',
        img: 'assets/bannermessi.jpg',
        desc: 'O extraterrestre do futebol. Sua agilidade é tamanha que os oponentes mal o veem passar. Seu chute preciso busca o ângulo impossível de qualquer lugar da tela.'
    },
    'cristiano': {
        name: 'Cristiano',
        nickname: 'O Robozão',
        move: 'Siiiuuuu Sonic',
        img: 'assets/bannercr7.jpg',
        desc: 'Uma máquina de vencer movida a disciplina pura. Seu grito de guerra "SIIUUU" gera uma onda de choque que empurra os adversários para longe. Fisicamente perfeito.'
    },
    'luva': {
        name: 'Luva de Pedreiro',
        nickname: 'O Cara da Luva',
        move: 'Recebaaa Kick',
        img: 'assets/bannerluva.jpg',
        desc: 'O fenômeno da internet que conquistou o mundo. Com sua luva sagrada, ele tem 100% de precisão nos chutes. Sua energia é contagiante. Graças a Deus, pai!'
    }
};

// --- FUNÇÃO DE NAVEGAÇÃO NA HOME ---
function scrollToFighters() {
    const section = document.getElementById('lutadores');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// --- FUNÇÃO PARA ABRIR O PERFIL (Redirecionamento) ---
function openFighterPage(fighterID) {
    // Redireciona para a página lutador.html passando o ID na URL
    window.location.href = `lutador.html?id=${fighterID}`;
}

// --- FUNÇÃO PARA CARREGAR OS DADOS (Roda apenas em lutador.html) ---
function loadFighterProfile() {
    // 1. Pega o ID da URL (ex: ?id=lula)
    const urlParams = new URLSearchParams(window.location.search);
    const fighterID = urlParams.get('id');

    // 2. Busca os dados no nosso "banco de dados"
    const fighter = fightersData[fighterID];

    // 3. Se achar o lutador, preenche a tela
    if (fighter) {
        document.getElementById('fighter-name').innerText = fighter.name;
        document.getElementById('fighter-nickname').innerText = `"${fighter.nickname}"`;
        document.getElementById('fighter-move').innerText = fighter.move;
        document.getElementById('fighter-desc').innerText = fighter.desc;
        document.getElementById('fighter-image').src = fighter.img;
    } else {
        // Se não achar (ex: id errado), volta pra home
        alert('Lutador não encontrado!');
        window.location.href = 'index.html';
    }
}