import { useEffect, useState } from "react";
import Header from "../../components/Header";
import TeacherCard from "../../components/TeacherCard";
import api from "../../services/api";
import Teacher from "../../types/Teacher";
import "./styles.css";

function Main() {
  const [allTeachers, setAllTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    loadTeachers();
  }, []);

  async function loadTeachers() {
    try {
      const { data } = await api.get("/teachers");
      setAllTeachers([...data]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <Header />

      <div className="main-teachers">
        {allTeachers.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </div>
  );
}

export default Main;
