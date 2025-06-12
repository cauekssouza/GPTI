--=============================================================================
-- FUNÇÃO PARA ATUALIZAÇÃO AUTOMÁTICA DE TIMESTAMPS
--=============================================================================
CREATE OR REPLACE FUNCTION fn_atualizar_timestamp_modificacao()
RETURNS TRIGGER AS $$
BEGIN
  NEW.data_atualizacao = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

--=============================================================================
-- TABELAS DE TIPOS E STATUS (ENUMERAÇÕES)
--=============================================================================

CREATE TABLE TiposUsuario (
    id_tipo_usuario SMALLINT PRIMARY KEY,
    descricao VARCHAR(50) NOT NULL UNIQUE
);

INSERT INTO TiposUsuario (id_tipo_usuario, descricao) VALUES
(1, 'ADMIN_CONSTRUTORA'),
(2, 'FUNCIONARIO_CONSTRUTORA'),
(3, 'CLIENTE');

CREATE TABLE StatusProjeto (
    id_status_projeto SMALLINT PRIMARY KEY,
    descricao VARCHAR(50) NOT NULL UNIQUE
);

INSERT INTO StatusProjeto (id_status_projeto, descricao) VALUES
(1, 'PLANEJAMENTO'),
(2, 'EM_ANDAMENTO'),
(3, 'CONCLUIDO'),
(4, 'PAUSADO'),
(5, 'CANCELADO');

CREATE TABLE TiposDocumento (
    id_tipo_documento SMALLINT PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO TiposDocumento (id_tipo_documento, descricao) VALUES
(1, 'PLANTA_ARQUITETONICA'),
(2, 'CONTRATO_SERVICO'),
(3, 'ALVARA_CONSTRUCAO'),
(4, 'MEMORIAL_DESCRITIVO'),
(5, 'ORCAMENTO_DETALHADO'),
(6, 'RELATORIO_FOTOGRAFICO'),
(7, 'NOTA_FISCAL');


CREATE TABLE StatusEtapaProjeto (
    id_status_etapa SMALLINT PRIMARY KEY,
    descricao VARCHAR(50) NOT NULL UNIQUE
);

INSERT INTO StatusEtapaProjeto (id_status_etapa, descricao) VALUES
(1, 'NAO_INICIADA'),
(2, 'EM_ANDAMENTO'),
(3, 'CONCLUIDA'),
(4, 'ATRASADA'),
(5, 'BLOQUEADA');

CREATE TABLE StatusOrcamento (
    id_status_orcamento SMALLINT PRIMARY KEY,
    descricao VARCHAR(50) NOT NULL UNIQUE
);

INSERT INTO StatusOrcamento (id_status_orcamento, descricao) VALUES
(1, 'EM_ELABORACAO'),
(2, 'AGUARDANDO_APROVACAO_INTERNA'),
(3, 'AGUARDANDO_APROVACAO_CLIENTE'),
(4, 'APROVADO'),
(5, 'REJEITADO'),
(6, 'AJUSTE_SOLICITADO');

CREATE TABLE TiposCusto (
    id_tipo_custo SMALLINT PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO TiposCusto (id_tipo_custo, descricao) VALUES
(1, 'MATERIAL_CONSTRUCAO'),
(2, 'MAO_DE_OBRA_DIRETA'),
(3, 'MAO_DE_OBRA_INDIRETA'),
(4, 'ALUGUEL_EQUIPAMENTOS'),
(5, 'TAXAS_LICENCAS'),
(6, 'DESPESAS_ADMINISTRATIVAS_PROJETO'),
(7, 'SERVICOS_TERCEIRIZADOS');


CREATE TABLE MetodosPagamento (
    id_metodo_pagamento SMALLINT PRIMARY KEY,
    descricao VARCHAR(50) NOT NULL UNIQUE
);

INSERT INTO MetodosPagamento (id_metodo_pagamento, descricao) VALUES
(1, 'BOLETO_BANCARIO'),
(2, 'TRANSFERENCIA_BANCARIA_TED_DOC'),
(3, 'PIX'),
(4, 'CARTAO_CREDITO'),
(5, 'CARTAO_DEBITO'),
(6, 'PERMUTA');

CREATE TABLE StatusPagamento (
    id_status_pagamento SMALLINT PRIMARY KEY,
    descricao VARCHAR(50) NOT NULL UNIQUE
);

INSERT INTO StatusPagamento (id_status_pagamento, descricao) VALUES
(1, 'PENDENTE'),
(2, 'PAGO'),
(3, 'VENCIDO'),
(4, 'CANCELADO'),
(5, 'REEMBOLSADO'),
(6, 'EM_PROCESSAMENTO');


CREATE TABLE UnidadesMedida (
    id_unidade_medida SMALLINT PRIMARY KEY,
    sigla VARCHAR(10) NOT NULL UNIQUE,
    descricao VARCHAR(50) NOT NULL
);

INSERT INTO UnidadesMedida (id_unidade_medida, sigla, descricao) VALUES
(1, 'UN', 'Unidade'),
(2, 'M', 'Metro Linear'),
(3, 'M2', 'Metro Quadrado'),
(4, 'M3', 'Metro Cúbico'),
(5, 'KG', 'Quilograma'),
(6, 'L', 'Litro'),
(7, 'CX', 'Caixa'),
(8, 'PCT', 'Pacote'),
(9, 'VB', 'Verba');


CREATE TABLE TiposMovimentacaoEstoque (
    id_tipo_movimentacao SMALLINT PRIMARY KEY,
    descricao VARCHAR(50) NOT NULL UNIQUE,
    fator_multiplicador SMALLINT NOT NULL -- 1 para entrada, -1 para saída
);

INSERT INTO TiposMovimentacaoEstoque (id_tipo_movimentacao, descricao, fator_multiplicador) VALUES
(1, 'ENTRADA_COMPRA', 1),
(2, 'ENTRADA_DEVOLUCAO_OBRA', 1),
(3, 'SAIDA_PARA_OBRA', -1),
(4, 'SAIDA_PERDA_AVARIA', -1),
(5, 'AJUSTE_INVENTARIO_POSITIVO', 1),
(6, 'AJUSTE_INVENTARIO_NEGATIVO', -1);


CREATE TABLE TiposRelatorio (
    id_tipo_relatorio SMALLINT PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO TiposRelatorio (id_tipo_relatorio, descricao) VALUES
(1, 'FINANCEIRO_MENSAL_PROJETO'),
(2, 'ANDAMENTO_GERAL_PROJETO'),
(3, 'CONTROLE_ESTOQUE_OBRA'),
(4, 'CUSTOS_DETALHADOS_PROJETO'),
(5, 'CRONOGRAMA_FISICO_FINANCEIRO');

CREATE TABLE CategoriasChatbotQA (
    id_categoria_chatbot SMALLINT PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO CategoriasChatbotQA (id_categoria_chatbot, descricao) VALUES
(1, 'DUVIDAS_PAGAMENTO'),
(2, 'ANDAMENTO_OBRA'),
(3, 'DOCUMENTACAO'),
(4, 'ESPECIFICACOES_TECNICAS');

CREATE TABLE Usuarios (
    id_usuario INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    nome_completo VARCHAR(255) NOT NULL,
    telefone VARCHAR(14) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha_hash VARCHAR(255) NOT NULL,
    id_tipo_usuario SMALLINT NOT NULL REFERENCES TiposUsuario(id_tipo_usuario),
    ativo BOOLEAN NOT NULL DEFAULT TRUE,
    data_cadastro TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Clientes (
    id_cliente INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    id_usuario INTEGER UNIQUE REFERENCES Usuarios(id_usuario) ON DELETE SET NULL,
    nome_ou_razao_social VARCHAR(255) NOT NULL,
    cpf_ou_cnpj VARCHAR(18) UNIQUE,
    telefone_principal VARCHAR(20),
    email_contato VARCHAR(255),
    endereco_logradouro VARCHAR(255),
    endereco_numero VARCHAR(20),
    endereco_complemento VARCHAR(100),
    endereco_bairro VARCHAR(100),
    endereco_cidade VARCHAR(100),
    endereco_uf CHAR(2),
    endereco_cep CHAR(8),
    observacoes TEXT,
    data_cadastro TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Projetos (
    id_projeto INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    nome_projeto VARCHAR(255) NOT NULL,
    descricao_detalhada TEXT,
    id_cliente INTEGER NOT NULL REFERENCES Clientes(id_cliente) ON DELETE RESTRICT,
    id_responsavel_construtora INTEGER NOT NULL REFERENCES Usuarios(id_usuario) ON DELETE RESTRICT,
    data_inicio_prevista DATE,
    data_fim_prevista DATE,
    data_inicio_real DATE,
    data_fim_real DATE,
    endereco_obra_logradouro VARCHAR(255),
    endereco_obra_numero VARCHAR(20),
    endereco_obra_complemento VARCHAR(100),
    endereco_obra_bairro VARCHAR(100),
    endereco_obra_cidade VARCHAR(100),
    endereco_obra_uf CHAR(2),
    endereco_obra_cep CHAR(8),
    id_status_projeto SMALLINT NOT NULL REFERENCES StatusProjeto(id_status_projeto),
    orcamento_total_estimado DECIMAL(15,2) DEFAULT 0.00,
    percentual_concluido SMALLINT DEFAULT 0 CHECK (percentual_concluido >= 0 AND percentual_concluido <= 100),
    data_cadastro TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE EtapasProjeto (
    id_etapa INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    id_projeto INTEGER NOT NULL REFERENCES Projetos(id_projeto) ON DELETE CASCADE,
    nome_etapa VARCHAR(255) NOT NULL,
    descricao TEXT,
    ordem_execucao INTEGER DEFAULT 0,
    data_inicio_prevista DATE,
    data_fim_prevista DATE,
    data_inicio_real DATE,
    data_fim_real DATE,
    id_status_etapa SMALLINT NOT NULL REFERENCES StatusEtapaProjeto(id_status_etapa),
    percentual_concluido_etapa SMALLINT DEFAULT 0 CHECK (percentual_concluido_etapa >= 0 AND percentual_concluido_etapa <= 100),
    id_responsavel_etapa INTEGER REFERENCES Usuarios(id_usuario) ON DELETE SET NULL,
    data_cadastro TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE AtualizacoesProgresso (
    id_atualizacao INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    id_projeto INTEGER NOT NULL REFERENCES Projetos(id_projeto) ON DELETE CASCADE,
    id_etapa INTEGER REFERENCES EtapasProjeto(id_etapa) ON DELETE SET NULL,
    data_atualizacao_progresso TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    descricao_progresso TEXT NOT NULL,
    id_usuario_registrou INTEGER NOT NULL REFERENCES Usuarios(id_usuario)
);

CREATE TABLE FotosProgresso (
    id_foto INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    id_atualizacao_progresso INTEGER REFERENCES AtualizacoesProgresso(id_atualizacao) ON DELETE CASCADE,
    id_projeto INTEGER NOT NULL REFERENCES Projetos(id_projeto) ON DELETE CASCADE,
    legenda_foto VARCHAR(255),
    caminho_foto_storage VARCHAR(1024) NOT NULL,
    nome_original_foto VARCHAR(255),
    data_foto TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    visivel_para_cliente BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE DocumentosProjeto (
    id_documento INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    id_projeto INTEGER NOT NULL REFERENCES Projetos(id_projeto) ON DELETE CASCADE,
    id_tipo_documento SMALLINT NOT NULL REFERENCES TiposDocumento(id_tipo_documento),
    nome_exibicao_documento VARCHAR(255) NOT NULL,
    descricao TEXT,
    caminho_arquivo_storage VARCHAR(1024) NOT NULL,
    nome_original_arquivo VARCHAR(255),
    extensao_arquivo VARCHAR(10),
    tamanho_arquivo_bytes BIGINT,
    data_upload TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    id_usuario_uploader INTEGER NOT NULL REFERENCES Usuarios(id_usuario),
    visivel_para_cliente BOOLEAN NOT NULL DEFAULT FALSE,
    data_atualizacao TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE OrcamentosProjeto (
    id_orcamento INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    id_projeto INTEGER NOT NULL REFERENCES Projetos(id_projeto) ON DELETE CASCADE,
    versao INTEGER NOT NULL DEFAULT 1,
    data_criacao_orcamento TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    descricao_orcamento VARCHAR(255),
    id_status_orcamento SMALLINT NOT NULL REFERENCES StatusOrcamento(id_status_orcamento),
    id_usuario_criador INTEGER NOT NULL REFERENCES Usuarios(id_usuario),
    data_atualizacao TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (id_projeto, versao)
);

CREATE TABLE ItensOrcamento (
    id_item_orcamento INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    id_orcamento INTEGER NOT NULL REFERENCES OrcamentosProjeto(id_orcamento) ON DELETE CASCADE,
    id_etapa INTEGER REFERENCES EtapasProjeto(id_etapa) ON DELETE SET NULL,
    codigo_item_orcamento VARCHAR(50),
    descricao_item VARCHAR(500) NOT NULL,
    id_unidade_medida SMALLINT NOT NULL REFERENCES UnidadesMedida(id_unidade_medida),
    quantidade_prevista DECIMAL(12,3) NOT NULL,
    custo_unitario_estimado DECIMAL(15,2) NOT NULL,
    custo_total_estimado DECIMAL(15,2) GENERATED ALWAYS AS (quantidade_prevista * custo_unitario_estimado) STORED,
    observacoes TEXT
);

CREATE TABLE CustosReaisProjeto (
    id_custo INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    id_projeto INTEGER NOT NULL REFERENCES Projetos(id_projeto) ON DELETE CASCADE,
    id_item_orcamento INTEGER REFERENCES ItensOrcamento(id_item_orcamento) ON DELETE SET NULL,
    descricao_custo VARCHAR(255) NOT NULL,
    valor_custo DECIMAL(15,2) NOT NULL,
    data_custo DATE NOT NULL,
    id_tipo_custo SMALLINT NOT NULL REFERENCES TiposCusto(id_tipo_custo),
    nota_fiscal_numero VARCHAR(100),
    observacoes TEXT,
    id_usuario_lancamento INTEGER NOT NULL REFERENCES Usuarios(id_usuario),
    data_lancamento TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE PagamentosCliente (
    id_pagamento INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    id_projeto INTEGER NOT NULL REFERENCES Projetos(id_projeto) ON DELETE RESTRICT,
    id_cliente INTEGER NOT NULL REFERENCES Clientes(id_cliente) ON DELETE RESTRICT,
    descricao_pagamento VARCHAR(255),
    valor_esperado DECIMAL(15,2) NOT NULL,
    valor_pago DECIMAL(15,2),
    data_vencimento DATE NOT NULL,
    data_pagamento DATE,
    id_metodo_pagamento SMALLINT REFERENCES MetodosPagamento(id_metodo_pagamento),
    id_status_pagamento SMALLINT NOT NULL REFERENCES StatusPagamento(id_status_pagamento),
    id_transacao_gateway VARCHAR(255),
    observacoes TEXT,
    data_cadastro TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ItensEstoque (
    id_item_estoque INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    codigo_item VARCHAR(50) UNIQUE,
    nome_item VARCHAR(255) NOT NULL,
    descricao_item TEXT,
    id_unidade_medida SMALLINT NOT NULL REFERENCES UnidadesMedida(id_unidade_medida),
    quantidade_em_estoque DECIMAL(12,3) NOT NULL DEFAULT 0.000,
    custo_unitario_medio DECIMAL(15,2) DEFAULT 0.00,
    localizacao_estoque VARCHAR(100),
    ponto_ressuprimento DECIMAL(12,3),
    data_cadastro TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE MovimentacoesEstoque (
    id_movimentacao INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    id_item_estoque INTEGER NOT NULL REFERENCES ItensEstoque(id_item_estoque) ON DELETE RESTRICT,
    id_projeto INTEGER REFERENCES Projetos(id_projeto) ON DELETE SET NULL,
    id_usuario_responsavel INTEGER NOT NULL REFERENCES Usuarios(id_usuario),
    id_tipo_movimentacao SMALLINT NOT NULL REFERENCES TiposMovimentacaoEstoque(id_tipo_movimentacao),
    quantidade_movimentada DECIMAL(12,3) NOT NULL,
    data_movimentacao TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    justificativa_observacao TEXT,
    custo_unitario_na_movimentacao DECIMAL(15,2)
);

CREATE TABLE RelatoriosGerados (
    id_relatorio INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    id_tipo_relatorio SMALLINT NOT NULL REFERENCES TiposRelatorio(id_tipo_relatorio),
    id_projeto INTEGER REFERENCES Projetos(id_projeto) ON DELETE SET NULL,
    nome_exibicao_relatorio VARCHAR(255) NOT NULL,
    data_geracao TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    id_usuario_gerador INTEGER NOT NULL REFERENCES Usuarios(id_usuario),
    caminho_arquivo_storage VARCHAR(1024),
    parametros_utilizados JSONB
);

CREATE TABLE ChatbotPerguntasRespostas (
    id_qa INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    id_categoria_chatbot SMALLINT REFERENCES CategoriasChatbotQA(id_categoria_chatbot),
    pergunta_modelo TEXT NOT NULL,
    palavras_chave TEXT,
    resposta_chatbot TEXT NOT NULL,
    ativo BOOLEAN NOT NULL DEFAULT TRUE,
    data_cadastro TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE HistoricoConversasChatbot (
    id_conversa BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    id_usuario_cliente INTEGER REFERENCES Usuarios(id_usuario) ON DELETE SET NULL,
    id_sessao_chat VARCHAR(100) NOT NULL,
    timestamp_mensagem TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    remetente VARCHAR(20) NOT NULL CHECK (remetente IN ('CLIENTE', 'BOT', 'ATENDENTE')),
    mensagem TEXT NOT NULL
);

CREATE TABLE LogAuditoriaGeral (
    id_log BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    timestamp_evento TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    id_usuario_responsavel INTEGER REFERENCES Usuarios(id_usuario) ON DELETE SET NULL,
    tipo_evento VARCHAR(100) NOT NULL,
    nome_tabela_afetada VARCHAR(100),
    id_registro_afetado VARCHAR(255),
    dados_antigos JSONB,
    dados_novos JSONB,
    endereco_ip_origem VARCHAR(45),
    user_agent_navegador TEXT,
    descricao_adicional TEXT
);

-- Adicionar coluna e FK de CustosReaisProjeto para ItensEstoque
ALTER TABLE CustosReaisProjeto
ADD COLUMN id_item_estoque INTEGER REFERENCES ItensEstoque(id_item_estoque) ON DELETE SET NULL;

-- Adicionar campo gerado valor_total_orcado em OrcamentosProjeto
ALTER TABLE OrcamentosProjeto
ADD COLUMN valor_total_orcado DECIMAL(15,2) NOT NULL DEFAULT 0.00;

CREATE OR REPLACE FUNCTION fn_atualizar_valor_total_orcado()
RETURNS TRIGGER AS $$
DECLARE
    orcamento_id INTEGER;
BEGIN
    -- Determina qual id_orcamento precisa ser atualizado
    IF (TG_OP = 'DELETE') THEN
        orcamento_id := OLD.id_orcamento;
    ELSE
        orcamento_id := NEW.id_orcamento;
    END IF;

    -- Atualiza o valor na tabela principal
    UPDATE OrcamentosProjeto
    SET valor_total_orcado = (
        SELECT COALESCE(SUM(custo_total_estimado), 0.00)
        FROM ItensOrcamento
        WHERE id_orcamento = orcamento_id
    )
    WHERE id_orcamento = orcamento_id;
    
    -- Se a operação foi um UPDATE e o orçamento mudou, atualiza o antigo também
    IF (TG_OP = 'UPDATE' AND OLD.id_orcamento IS DISTINCT FROM NEW.id_orcamento) THEN
        UPDATE OrcamentosProjeto
        SET valor_total_orcado = (
            SELECT COALESCE(SUM(custo_total_estimado), 0.00)
            FROM ItensOrcamento
            WHERE id_orcamento = OLD.id_orcamento
        )
        WHERE id_orcamento = OLD.id_orcamento;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_itens_orcamento_after_change
AFTER INSERT OR UPDATE OR DELETE ON ItensOrcamento
FOR EACH ROW
EXECUTE FUNCTION fn_atualizar_valor_total_orcado();

--=============================================================================
-- APLICAÇÃO DOS TRIGGERS DE ATUALIZAÇÃO DE TIMESTAMP E ÍNDICES
--=============================================================================

-- Triggers para data_atualizacao
CREATE TRIGGER trg_usuarios_data_atualizacao
BEFORE UPDATE ON Usuarios
FOR EACH ROW EXECUTE FUNCTION fn_atualizar_timestamp_modificacao();

CREATE TRIGGER trg_clientes_data_atualizacao
BEFORE UPDATE ON Clientes
FOR EACH ROW EXECUTE FUNCTION fn_atualizar_timestamp_modificacao();

CREATE TRIGGER trg_projetos_data_atualizacao
BEFORE UPDATE ON Projetos
FOR EACH ROW EXECUTE FUNCTION fn_atualizar_timestamp_modificacao();

CREATE TRIGGER trg_documentosprojeto_data_atualizacao
BEFORE UPDATE ON DocumentosProjeto
FOR EACH ROW EXECUTE FUNCTION fn_atualizar_timestamp_modificacao();

CREATE TRIGGER trg_etapasprojeto_data_atualizacao
BEFORE UPDATE ON EtapasProjeto
FOR EACH ROW EXECUTE FUNCTION fn_atualizar_timestamp_modificacao();

CREATE TRIGGER trg_orcamentosprojeto_data_atualizacao
BEFORE UPDATE ON OrcamentosProjeto
FOR EACH ROW EXECUTE FUNCTION fn_atualizar_timestamp_modificacao();

CREATE TRIGGER trg_custosreaisprojeto_data_atualizacao
BEFORE UPDATE ON CustosReaisProjeto
FOR EACH ROW EXECUTE FUNCTION fn_atualizar_timestamp_modificacao();

CREATE TRIGGER trg_pagamentoscliente_data_atualizacao
BEFORE UPDATE ON PagamentosCliente
FOR EACH ROW EXECUTE FUNCTION fn_atualizar_timestamp_modificacao();

CREATE TRIGGER trg_itensestoque_data_atualizacao
BEFORE UPDATE ON ItensEstoque
FOR EACH ROW EXECUTE FUNCTION fn_atualizar_timestamp_modificacao();

CREATE TRIGGER trg_chatbotqa_data_atualizacao
BEFORE UPDATE ON ChatbotPerguntasRespostas
FOR EACH ROW EXECUTE FUNCTION fn_atualizar_timestamp_modificacao();

-- Usuarios
CREATE INDEX IF NOT EXISTS idx_usuarios_email ON Usuarios(email);
CREATE INDEX IF NOT EXISTS idx_usuarios_id_tipo_usuario ON Usuarios(id_tipo_usuario);

-- Clientes
CREATE INDEX IF NOT EXISTS idx_clientes_id_usuario ON Clientes(id_usuario);
CREATE INDEX IF NOT EXISTS idx_clientes_cpf_ou_cnpj ON Clientes(cpf_ou_cnpj);

-- Projetos
CREATE INDEX IF NOT EXISTS idx_projetos_id_cliente ON Projetos(id_cliente);
CREATE INDEX IF NOT EXISTS idx_projetos_id_responsavel ON Projetos(id_responsavel_construtora);
CREATE INDEX IF NOT EXISTS idx_projetos_id_status_projeto ON Projetos(id_status_projeto);
CREATE INDEX IF NOT EXISTS idx_projetos_nome ON Projetos(nome_projeto);

-- DocumentosProjeto
CREATE INDEX IF NOT EXISTS idx_documentosprojeto_id_projeto ON DocumentosProjeto(id_projeto);
CREATE INDEX IF NOT EXISTS idx_documentosprojeto_id_tipo_documento ON DocumentosProjeto(id_tipo_documento);

-- EtapasProjeto
CREATE INDEX IF NOT EXISTS idx_etapasprojeto_id_projeto ON EtapasProjeto(id_projeto);
CREATE INDEX IF NOT EXISTS idx_etapasprojeto_id_status_etapa ON EtapasProjeto(id_status_etapa);

-- AtualizacoesProgresso
CREATE INDEX IF NOT EXISTS idx_atualizacoesprogresso_id_projeto ON AtualizacoesProgresso(id_projeto);

-- FotosProgresso
CREATE INDEX IF NOT EXISTS idx_fotosprogresso_id_projeto ON FotosProgresso(id_projeto);
CREATE INDEX IF NOT EXISTS idx_fotosprogresso_id_atualizacao ON FotosProgresso(id_atualizacao_progresso);

-- OrcamentosProjeto
CREATE INDEX IF NOT EXISTS idx_orcamentosprojeto_id_projeto ON OrcamentosProjeto(id_projeto);

-- ItensOrcamento
CREATE INDEX IF NOT EXISTS idx_itensorcamento_id_orcamento ON ItensOrcamento(id_orcamento);

-- CustosReaisProjeto
CREATE INDEX IF NOT EXISTS idx_custosreais_id_projeto ON CustosReaisProjeto(id_projeto);
CREATE INDEX IF NOT EXISTS idx_custosreais_id_item_orcamento ON CustosReaisProjeto(id_item_orcamento);
CREATE INDEX IF NOT EXISTS idx_custosreais_id_item_estoque ON CustosReaisProjeto(id_item_estoque);

-- PagamentosCliente
CREATE INDEX IF NOT EXISTS idx_pagamentos_id_projeto ON PagamentosCliente(id_projeto);
CREATE INDEX IF NOT EXISTS idx_pagamentos_id_cliente ON PagamentosCliente(id_cliente);
CREATE INDEX IF NOT EXISTS idx_pagamentos_id_status ON PagamentosCliente(id_status_pagamento);

-- ItensEstoque
CREATE INDEX IF NOT EXISTS idx_itensestoque_nome_item ON ItensEstoque(nome_item text_pattern_ops); -- Para LIKE 'nome%'

-- MovimentacoesEstoque
CREATE INDEX IF NOT EXISTS idx_movestoque_id_item ON MovimentacoesEstoque(id_item_estoque);
CREATE INDEX IF NOT EXISTS idx_movestoque_id_projeto ON MovimentacoesEstoque(id_projeto);
CREATE INDEX IF NOT EXISTS idx_movestoque_id_tipo ON MovimentacoesEstoque(id_tipo_movimentacao);

-- RelatoriosGerados
CREATE INDEX IF NOT EXISTS idx_relatorios_id_tipo ON RelatoriosGerados(id_tipo_relatorio);
CREATE INDEX IF NOT EXISTS idx_relatorios_id_projeto ON RelatoriosGerados(id_projeto);

-- HistoricoConversasChatbot
CREATE INDEX IF NOT EXISTS idx_histchatbot_id_sessao ON HistoricoConversasChatbot(id_sessao_chat);
CREATE INDEX IF NOT EXISTS idx_histchatbot_id_usuario ON HistoricoConversasChatbot(id_usuario_cliente);

-- LogAuditoriaGeral
CREATE INDEX IF NOT EXISTS idx_logauditoria_timestamp ON LogAuditoriaGeral(timestamp_evento);
CREATE INDEX IF NOT EXISTS idx_logauditoria_id_usuario ON LogAuditoriaGeral(id_usuario_responsavel);
CREATE INDEX IF NOT EXISTS idx_logauditoria_tipo_evento ON LogAuditoriaGeral(tipo_evento);
CREATE INDEX IF NOT EXISTS idx_logauditoria_tabela_id_registro ON LogAuditoriaGeral(nome_tabela_afetada, id_registro_afetado);