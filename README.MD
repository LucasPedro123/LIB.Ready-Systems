
# Ready-Systems

Este **Monorepo** foi desenvolvido com o objetivo de agrupar diversos pacotes em uma estrutura modular e escalável. Os pacotes possuem sistemas **WhiteLabel**, que permite que cada sistema possa ser personalizado para diferentes marcas ou clientes de maneira flexível.

---

## **Objetivo**

- **Organizar sistemas de forma modular**: Agrupar diferentes sistemas (ou pacotes) que podem ser reutilizados, vendidos ou personalizados.
- **Facilitar o desenvolvimento e a manutenção**: Compartilhar bibliotecas e configurações entre os pacotes, evitando duplicação de código.
- **Possibilitar a expansão do monorepo**: Adicionar novos sistemas, como gerenciadores de tarefas, sistemas para nichos específicos (e.g., marcenaria), e ferramentas de gerenciamento de calorias.
- **Comercialização**: Disponibilizar sistemas para venda ou licenciamento, tanto para clientes finais quanto para outros desenvolvedores.
- **Sistemas WhiteLabel**: Permitir a construção de sistemas personalizados com marca própria para diferentes clientes.

---

## **Estrutura do Monorepo**

```
/packages
   /scheduling-system       # Sistema de Agendamento
      /app-mobile           # Aplicativo Mobile do sistema
      /app-web              # Aplicativo Web do sistema
      /app-config           # Configurações compartilhadas do sistema
   /nome-de-outro-sistema   # Estrutura para futuros sistemas
```

### **Pacotes Existentes**

1. **`/scheduling-system`**  
   Sistema voltado para agendamento, utilizado por empresas ou profissionais que precisam gerenciar horários e compromissos. Inclui:
   - **`app-mobile`**: Aplicativo mobile desenvolvido com **React Native Expo**, voltado para acesso em dispositivos móveis.
   - **`app-web`**: Aplicação web para uso em navegadores, desenvolvida com **React + Vite**.
   - **`app-config`**: Diretório de configurações compartilhadas entre os apps web e mobile (e.g., cores, fontes, estilos).

2. **`/nome-de-outro-sistema`** *(placeholder para sistemas futuros)*  
   Estrutura para inclusão de novos sistemas (e.g., sistema de gerenciamento de tarefas, gerenciamento de calorias).

---

## **Tecnologias Utilizadas**

### **Ferramentas e Frameworks**
- **Frontend**:  
  - React (Web)  
  - React Native Expo (Mobile)  
  - TypeScript  
  - Vite (build tool para React)  

- **Backend**:  
  - NestJS (futuramente para APIs e lógica de backend)  
  - ASP.NET (futuramente para APIs e lógica de backend)  

- **Banco de Dados**:  
  - Firebase Firestore (armazenamento de dados em tempo real)  
  - Integração com outros bancos, como MongoDB, pode ser adicionada futuramente.

---

## **Funcionamento**

### **Configuração do Monorepo**
Este monorepo utiliza links simbólicos para gerenciar dependências locais entre os pacotes. Cada pacote pode ser usado de forma independente ou combinado para criar sistemas completos. 

### **Integração entre pacotes**
- **`app-config`**: Define configurações centralizadas como cores, fontes e outros estilos para serem utilizados em múltiplos pacotes (`app-mobile` e `app-web`).  

- **Compartilhamento de código**: É possível criar bibliotecas específicas dentro do monorepo que podem ser usadas por todos os pacotes, reduzindo redundâncias e facilitando atualizações.

---

## **Configuração e Uso**

### **1. Instalação**
Certifique-se de que você tenha **Node.js** e **npm** instalados.

Clone o repositório:
```bash
git clone <url-do-repositorio>
```

Instale as dependências no diretório raiz:
```bash
npm install
```

### **2. Iniciar os pacotes**

#### Aplicação Web:
```bash
cd packages/scheduling-system/app-web
npm run dev
```

#### Aplicação Mobile:
```bash
cd packages/scheduling-system/app-mobile
expo start
```

---

## **Expansão do Monorepo**

Futuramente, este monorepo poderá incluir:

1. **Novo Sistema de Gerenciamento de Calorias**:
   - Aplicação para controle e monitoramento de consumo de calorias.

2. **Sistema de Gerenciamento de Marcenaria**:
   - Ferramenta para organização de pedidos e projetos personalizados.

3. **Sistema de Gerenciamento de Tarefas**:
   - Gerenciador de atividades com integração entre dispositivos.

Esses pacotes seguirão o mesmo padrão de estrutura modular e integração do sistema de agendamento.

---

## **Estrura e Boas Práticas**

1. **Modularidade**:  
   Criação de pacotes reutilizáveis, garantindo que cada sistema ou funcionalidade possa ser mantido e testado de forma independente.

2. **Documentação**:  
   Cada pacote deve ter um `README.md` específico explicando seu propósito, APIs e como utilizá-lo.

3. **Testes Automatizados**:  
   Inserção de testes para garantir a qualidade e funcionalidade de cada pacote.

4. **Padronização de Código**:  
   Utilizar ferramentas como **ESLint** e **Prettier** para manter a consistência no código.

---

## **Contribuindo**

1. **Fork o Repositório**:  
   Faça um fork do repositório para sua conta pessoal.

2. **Crie uma Branch**:  
   ```bash
   git checkout -b minha-feature
   ```

3. **Adicione suas mudanças e faça um commit**:  
   ```bash
   git add .
   git commit -m "Adicionei uma nova feature"
   ```

4. **Envie um Pull Request**:  
   Abra um Pull Request no repositório principal.

---

## **Licença**

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.

---
