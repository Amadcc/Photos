import PhotoComponent from "./components/PhotoComponent";

export default function Photo(props) {
  return (
    <div>
      <PhotoComponent id={props.url.query.id} />
    </div>
  );
}
