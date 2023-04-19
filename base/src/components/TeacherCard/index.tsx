import Avatar from "../Avatar";
import "./styles.css";

type Props = {
  teacher: {
    id: number;
    avatar: string;
    name: string;
  };
};

export default function TeacherCard({ teacher }: Props) {
  return (
    <div className="teacher-card">
      <Avatar image={teacher.avatar} />
      <h1>{teacher.name}</h1>
    </div>
  );
}
