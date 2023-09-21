type HashtagsProps = {
  tags: string[];
};

const Hashtags = ({ tags }: HashtagsProps) => {
  return (
    <div className="mt-4 text-yellow-200 flex flex-wrap">
      {tags.map((e: string, i: number) => (
        <a className="mr-2 hover:text-yellow-400" key={i} href={`https://www.google.com/search?q=${"lol"}`}>
          #{e.replace(" ", "")}
        </a>
      ))}
    </div>
  );
};
export default Hashtags;
