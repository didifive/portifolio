# 🚀 Quick Start - Resend SDK Oficial

Sistema **ultra-simplificado** usando **Resend SDK oficial** para o formulário de contato.

## ⚡ Configuração Rápida (2 minutos)

### 1. Obter API Key

```bash
# 1. Vá para https://resend.com
# 2. Crie conta gratuita
# 3. Dashboard → API Keys → Create API Key
# 4. Copie a chave
```

### 2. Configurar

```bash
# Crie arquivo .env.local
echo "RESEND_API_KEY=re_sua_chave_aqui" > .env.local
```

### 3. Testar

```bash
npm run dev
# Acesse http://localhost:3000/#contact
# Preencha e envie o formulário
```

## 📧 Como Funciona

**Quando alguém preenche o formulário:**

1. **Email para você**: `maykon.sousa@hotmail.com`
   - Contém: nome, email, assunto, mensagem do visitante
   - Reply-to: email do visitante (resposta direta)

2. **Email para visitante**: email fornecido no formulário
   - Agradecimento personalizado
   - Seus contatos (WhatsApp, LinkedIn)
   - Expectativa de resposta em 24h

**Remetente**: `Maykon Sousa <contato@devpoorbr.com.br>`

## 🎯 Pronto para Produção

- ✅ **Domínio profissional** configurado
- ✅ **Templates responsivos**
- ✅ **SDK Oficial** com tipagem TypeScript
- ✅ **Zero configuração SMTP**
- ✅ **100% confiável**

## 📊 Limites Gratuitos

- **3.000 emails/mês**
- **100 emails/dia**
- Mais que suficiente para qualquer portfólio

---

**🎉 Sistema funcionando com 1 linha de configuração!**
