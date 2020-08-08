import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/38964840?s=460&u=d2252c0eff05c0af5dbd8c3944b5a3eaaed5f84c&v=4"
          alt="Wallison Moura"
        />
        <div>
          <strong>Wallison Moura</strong>
          <span>Lógica de programação</span>
        </div>
      </header>

      <p>
        Entusiasta em desenvolvimento de sistema.
        <br />
        <br />
        Profissional apaixonado por tecnologia e desenvolvimento de sistema,
        Sempre buscando ajudar os alunos em lógica de programação, sobre
        desenvolvimento web e mobile com javascript, banco de dados relacional e
        não relacional
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
