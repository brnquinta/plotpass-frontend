PlotPass - Front-end

PlotPass é uma aplicação web integrada com a The Movie Database (TMDb)
 que permite aos usuários buscar filmes, indicar títulos para outros usuários via email e acompanhar indicações recebidas ou enviadas.

Funcionalidades

Autenticação: Login, cadastro e logout de usuários.

Busca de Filmes: Pesquise filmes pelo nome usando a API do TMDb.

Indicações:

Ao encontrar um filme, o usuário pode indicar a outro usuário preenchendo um formulário com email do destinatário e uma mensagem opcional.

As indicações são registradas e listadas em duas páginas:

Minhas Indicações Enviadas (lista de indicações que você enviou).

Indicações Recebidas (lista de filmes que outros usuários te indicaram).

Cada cartão de indicação possui um botão para marcar o status da indicação: Pendente → Assistido (muda de cor para verde quando assistido).

Interface Responsiva: Layout organizado para desktop e mobile, com foco em experiência intuitiva de usuário.

Estrutura de Páginas

Login / Signup: Autenticação de usuário.

Pesquisa: Barra de pesquisa para buscar filmes, exibição de resultados com botão de indicação.

Indicação: Formulário para enviar indicação (email do destinatário + mensagem opcional).

Minhas Indicações / Indicações Recebidas: Listas de cartões de filmes com status (pendente/assistido).

Tecnologias

React (front-end)

Axios / Fetch API (requisições à TMDb)

CSS / Tailwind (estilização)

GitHub Pages / Vercel (opcional para deploy)

Observações

Sistema de indicações ainda não possui funcionalidades de amizade; envio é feito apenas via email do destinatário.

Nome das listas: para maior clareza, sugerimos "Minhas Indicações" (para o que você enviou) e "Indicações Recebidas" (para o que você recebeu).
