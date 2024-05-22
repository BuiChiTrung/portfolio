import "./Heading.scss";

export default function Heading(props) {
  return (
    <div id="heading" className="col-span-full row-start-2">
      <h3 id="heading-sub-title">{props.subTitle}</h3>
      <h1 id="heading-title">{props.title}</h1>
    </div>
  );
}
