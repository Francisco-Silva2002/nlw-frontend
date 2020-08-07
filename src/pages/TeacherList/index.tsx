import React from "react";
import "./styles.css";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

export default function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teacher">
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

          <Input label="Hora" name="time" type="time" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}
