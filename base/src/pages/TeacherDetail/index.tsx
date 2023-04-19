import Avatar from "../../components/Avatar";
import Header from "../../components/Header";
import useTeacherDetail from "../../hooks/useTeacherDetail";
import "./styles.css";

export default function TeacherDetail() {
  const { currentTeacherDetail } = useTeacherDetail();

  return (
    <div className="container">
      <Header showBack />

      <div className="teacher-detail">
        <Avatar image={currentTeacherDetail?.avatar || ""} />
        <h1>{currentTeacherDetail?.name}</h1>
        <span>{currentTeacherDetail?.stack}</span>

        <div className="horizontal-line line"></div>

        <h2>Bio</h2>

        <p>{currentTeacherDetail?.bio}</p>
      </div>
    </div>
  );
}
