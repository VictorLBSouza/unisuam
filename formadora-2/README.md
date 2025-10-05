# Avaliação Formadora II - Ionic 7 + Angular

Aplicação mobile desenvolvida com Ionic 7 e Angular para demonstrar navegação entre páginas e consumo de API externa.

## Funcionalidades

- **Apresentação**: Página inicial com informações sobre o projeto
- **Meu Perfil**: Exibição dos dados do aluno
- **Gatinhos**: Galeria de 5 imagens aleatórias de gatos usando The Cat API

## Arquivos Criados

### Páginas Personalizadas

#### `src/app/pages/perfil/perfil.page.ts`
Componente da página de perfil do aluno com dados pessoais e acadêmicos.

#### `src/app/pages/perfil/perfil.page.html`
Template da página de perfil com card contendo avatar, informações pessoais e dados acadêmicos.

#### `src/app/pages/gatos/gatos.page.ts`
Componente da página de gatinhos com funcionalidade para buscar e exibir 5 imagens aleatórias.

#### `src/app/pages/gatos/gatos.page.html`
Template da página de gatinhos com grid responsivo para exibição das imagens.

#### `src/app/pages/gatos/gatos.page.scss`
Estilos CSS para o grid responsivo das imagens de gatinhos com diferentes layouts para desktop, tablet e mobile.

### Serviços

#### `src/app/services/cat-api.ts`
Serviço para consumo da The Cat API com métodos para buscar uma ou múltiplas imagens de gatos.

## Arquivos Modificados

### Configuração Principal

#### `src/main.ts`
- Adicionado `provideHttpClient()` para habilitar requisições HTTP

### Navegação e Rotas

#### `src/app/app.routes.ts`
- Adicionadas rotas para as páginas de perfil e gatos

#### `src/app/tabs/tabs.routes.ts`
- Configuradas rotas das tabs para as páginas personalizadas
- Mapeamento: home → tab1, perfil → pages/perfil, gatos → pages/gatos

#### `src/app/tabs/tabs.page.html`
- Configurados ícones e labels das tabs:
  - 🏠 Apresentação (home-outline)
  - 👤 Meu Perfil (person-circle-outline)
  - 🐾 Gatinhos (paw-outline)

#### `src/app/tabs/tabs.page.ts`
- Importados ícones correspondentes às funcionalidades das tabs

### Página de Apresentação

#### `src/app/tab1/tab1.page.ts`
- Adicionados imports dos componentes Ionic necessários
- Removido componente ExploreContainer não utilizado

#### `src/app/tab1/tab1.page.html`
- Substituído conteúdo padrão por informações sobre o projeto
- Adicionado card com título, subtítulo e descrição das funcionalidades

## Como Executar

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
ionic serve
```

## API Utilizada

- **The Cat API**: https://api.thecatapi.com/v1/images/search
- Endpoint para buscar múltiplas imagens: `?limit=5`

## Estrutura de Navegação

```
├── Apresentação (Tab1)
│   └── Informações sobre o projeto
├── Meu Perfil
│   └── Dados pessoais e acadêmicos
└── Gatinhos
    └── Galeria de 5 imagens aleatórias
```

---