import React, { useState } from "react";
import "./styles.css";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";

import warnIcon from "../../assets/images/icons/warning.svg";
import TextArea from "../../components/TextArea";
import Select from "../../components/Select";

export default function TeacherForm() {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input label="Nome Completo" name="name" />

          <Input label="Avatar" name="avatar" />

          <Input label="Whatsapp" name="whatsapp" />

          <TextArea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select
            label="Matéria"
            name="subject"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Matemática", label: "Matemática" },
              { value: "Física", label: "Física" },
              { value: "Química", label: "Química" },
              { value: "História", label: "História" },
              { value: "Geografia", label: "Geografia" },
              { value: "Sociologia", label: "Sociologia" },
              { value: "Filosofia", label: "Filosofia" },
              { value: "Português", label: "Português" },
              { value: "Educação Física", label: "Educação Física" },
              { value: "Inglês", label: "Inglês" },
            ]}
          />

          <Input label="Custo da sua hora por aula" name="cost" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis{" "}
            <button type="button" onClick={addNewScheduleItem}>
              + Novo horário
            </button>
          </legend>

          {scheduleItems.map((item) => {
            return (
              <div className="schedule-item">
                <Select
                  label="Dia da Semana"
                  name="week-day"
                  options={[
                    { value: "0", label: "Domingo" },
                    { value: "1", label: "Segunda-Feira" },
                    { value: "2", label: "Terça-Feira" },
                    { value: "3", label: "Quarta-Feira" },
                    { value: "4", label: "Quinta-Feira" },
                    { value: "5", label: "Sexta-Feira" },
                    { value: "6", label: "Sábado" },
                  ]}
                />

                <Input name="from" label="Das" type="time" />
                <Input name="to" label="Até" type="time" />
              </div>
            );
          })}
        </fieldset>

        <footer>
          <p>
            <img src={warnIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>

          <button type="button">Salvar</button>
        </footer>
      </main>
    </div>
  );
}
