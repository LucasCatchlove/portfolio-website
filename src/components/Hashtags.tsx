type HashtagsProps = {
  tags: string[];
};

const Hashtags = ({ tags }: HashtagsProps) => {
  return (
    <div className="mt-4 text-yellow-200">
      {tags.map((e: string, i: number) => (
        <a className="mr-2 hover:text-yellow-400" key={i} href={`https://www.google.com/search?q=${e}`}>
          #{e.replace(" ", "")}
        </a>
      ))}
    </div>
  );
};
export default Hashtags;
