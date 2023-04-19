import "./styles.css";

type Props = {
  image: string;
  size?: number;
};

export default function Avatar({ image, size }: Props) {
  const sizeAvatar = size || 147;

  return (
    <img
      className="avatar"
      src={image}
      alt="Avatar"
      style={{
        width: `${sizeAvatar}px`,
        height: `${sizeAvatar}px`,
      }}
    />
  );
}
