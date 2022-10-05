# API de Usuários e Alunos

Projeto de CRUD orientado ao objeto de Usuários ( normal e administrador ) e alunos de uma faculdade.

## Comandos

```
yarn - para instalar as dependências.
yarn dev - para rodar.
```

  <summary>✔️ Funcionalidades:</summary>
    <p align="justify">
        1: CRUD completo.<br>
      <!-- 2: Recuperação de senha por email<br> -->
      <!-- 3: Envio de email ao cadastrar usuario<br> -->
      <!-- 4: Validação de cpf<br> -->
        2: Validação de E-mail.<br>
    <!-- 6: Validação de datas<br> -->
        3: Validações de senha. <br>
        4: Exceptions Personalizadas.<br>
        5: TOKENS de Autenticação. <br>
        6: Validação de roles. <br>
      
      <!-- 9: Documentação com swagger <br> -->

<p>
  </details>

<br>

   <details>
  <summary>👨‍💼 Regras de negocio:</summary>
      <p align="justify">
      1: O usuario com acesso de administrador pode inserir, recuperar dados de todas as páginas. <br>
      <!-- 2: O usuario com acesso de Treinamento pode recuperar dados das páginas relacionadas a Treinamentos.<br> -->
      <!-- 3: O usuario com acesso de Skills pode recuperar dados das páginas relacionadas a Skills. <br> -->
      <!-- 4: O usuario com acesso de treinamento e skills  pode recuperar dados das páginas relacionadas a Skills e treinamentos.<br> -->
      2: Somente um administrador pode cadastrar um novo usuário.<br>
      3: Usuários padrões podem fazer requisições de busca de todos os alunos. <br>
      4: Atualizações e deleções são pelo próprio usuário e/ou aluno.<br>
      5: Alunos podem cadastrar uma imagem. <br>
      6: Geração de email e matrícula automatizados e padronizados para alunos. <br>
  </details>

  <br>

## Tecnologia Utilizada

- [**MySQL**]
- [**Postman**]
- [**MySQL Workbench**]
- [**Sequelize**]
- [**Sequelize-cli**]
- [**Express**]
- [**Multer**]
- [**UUIDV4**]

<br>

## Desenvolvedor:

<table>
    <tr>
        <td align="center"><a href="https://github.com/KyuaKun"><img src="https://i.imgur.com/5vCpoRY.jpg" width="100px;" alt=""/><br /><sub><b>Vinícius Soares</b></sub></a><br /><a href="https://www.linkedin.com/in/vin%C3%ADcius-soares-43238b144/" title="Code">💻</a></td>
    </tr>
</table>
