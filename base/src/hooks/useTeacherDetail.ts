import { useState } from "react";
import Teacher from "../types/Teacher";

export default function useTeacherDetail() {
  const [currentTeacherDetail, setCurrunterTeacherDetail] = useState<Teacher>(
    localStorage.getItem("current-teacher")
      ? JSON.parse(localStorage.getItem("current-teacher")!)
      : { id: 0, name: "", avatar: "", bio: "", stack: "" }
  );

  function handleInsertTeacher(teacher: Teacher) {
    localStorage.setItem("current-teacher", JSON.stringify(teacher));
    setCurrunterTeacherDetail(teacher);
  }

  return {
    handleInsertTeacher,
    currentTeacherDetail,
  };
}
