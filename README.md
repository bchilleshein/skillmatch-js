# SkillMatch JS: Simulador de Compatibilidade com Vaga Front-End Júnior

Este projeto foi desenvolvido para consolidar os aprendizados do curso de Desenvolvedor Front-end React do SENAI / SCTEC, simulando a triagem automatizada e comparação de habilidades entre o perfil de um candidato e vagas de Front-End Júnior.

A aplicação analisa as competências do candidato em relação às exigências de cada vaga, calcula o percentual de aderência, classifica o nível de compatibilidade, mapeia as habilidades faltantes, indica a vaga com maior compatibilidade e sugere uma recomendação de estudo para acelerar a carreira do candidato.

---
## Regra de Cálculo e Critérios

### Regra de Compatibilidade
Para calcular o índice de compatibilidade de cada vaga, o sistema compara a quantidade de requisitos exigidos com as habilidades dominadas pelo candidato. O cálculo é realizado dividindo a quantidade de requisitos atendidos pelo total de requisitos da vaga e multiplicando o resultado por 100 para obter o percentual:

$$\text{Compatibilidade (\%)} = \left( \frac{\text{Requisitos Atendidos}}{\text{Total de Requisitos da Vaga}} \right) \times 100$$

A partir do percentual gerado, a vaga é classificada nas seguintes faixas:
* **Alta compatibilidade:** 80% a 100%
* **Média compatibilidade:** 50% a 79%
* **Baixa compatibilidade:** 0% a 49%

### Critério da Recomendação de Estudo
O critério adotado para sugerir treinamentos prioritários baseia-se na identificação de requisitos fundamentais para vagas de nível júnior que ainda não constam no perfil do candidato, fornecendo o link direto para sua capacitação. Para selecionar a habilidade, verifica-se quais requisitos faltantes são mais frequentes entre as vagas analisadas, assim, a habilidade com maior ocorrência torna-se o foco de estudo. Caso JavaScript ES6 esteja entre as mais frequentes, ela é priorizada automaticamente, visto que é o requisito base para a aplicação das demais tecnologias nas vagas.

---

## Como Executar o Projeto

### Pré-requisitos
* **Git** instalado na sua máquina.
* **Node.js** instalado para execução do código no terminal.
* **VS Code** com a extensão **Code Runner** configurada.

### Passo a Passo

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/bchilleshein/skillmatch-js.git
   ```

2. **Acessar a pasta do projeto:**
   ```bash
   cd skillmatch-js
   ```

3. **Executar a aplicação:**
* **Via Terminal:**
   ```bash
   node skillmatch.js
   ```

* **Via VS Code / Code Runner:** Abra o arquivo `skillmatch.js` e clique no botão **Play**.

---

## Conceitos de JavaScript Aplicados

* **Variáveis e Escopo:** Uso de `const` e `let` para controle de escopo de bloco e imutabilidade. O uso de `var` foi evitado para prevenir bugs, já que ela pode ser redeclarada.

* **Orientação a Objetos (POO):** Classes `Job` e `TechJob`, aplicando **herança** (`extends` / `super`) e a palavra-chave **`this`** para manipulação de atributos e métodos.

* **Métodos de Array:** Utilização de `map`, `filter`, `some`, `reduce` e `forEach` para iteração, filtragem e localização da vaga mais compatível.

* **Closure:** Função `createJobCounter()` que preserva a variável interna `count` entre chamadas sem expô-la ao escopo global.

* **Callback:** Utilização da função `displayCallback` como parâmetro em `processJobReport` para formatação da saída do relatório.

* **Programação Assíncrona:** Simulação de requisição com `Promise` (`loadJobs`), tratamento de erro com `reject` / `try...catch` e consumo via `async/await`.

---

## Arquitetura e Conceitos Teóricos

### Como a Internet Funciona

A internet é uma rede global de computadores interconectados que trocam dados por meio de protocolos padronizados (como TCP/IP). As informações são divididas em pequenos pacotes, transmitidos através de roteadores até o destino, onde são remontados para o usuário.

### Arquitetura Cliente-Servidor

Neste modelo, o **Cliente** (como um navegador ou terminal) envia requisições solicitando recursos ou dados, e o **Servidor** processa esses pedidos e devolve uma resposta.

No código, a função `loadJobs()` atua simulando o **Servidor** (retornando uma Promise com tempo de resposta), enquanto a função `run()` desempenha o papel de **Cliente**, aguardando assincronamente a chegada dos dados para realizar o processamento.

---

## Links

* **Vídeo de Apresentação:** https://www.loom.com/share/63bf129acaed438f8324b99592b18d51

* **Quadro Kanban de Tarefas:** https://trello.com/invite/b/6a727773429a81c19c255f07/ATTI8f4074ad55e41df7543d825e592acc23B0616F89/skillmatch-js-simulador-de-compatibilidade-com-vaga-front-end-junior