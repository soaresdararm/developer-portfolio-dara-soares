import TagLine from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} max-w-[30rem] mx-auto mb-12 lg:mb-10 md:text-center`}
    >
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {title && <h4 className="h4">{title}</h4>}
      {text && <p className="body-2 mt-2 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
