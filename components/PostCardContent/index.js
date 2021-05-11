import Link from 'next/link';

const PostCardContent = ({ postData }) => {
  return (
    <div>
      {postData &&
        postData.split(/(#[^\s#]+)/g).map((v, i) => {
          if (v.match(/(#[^\s#]+)/)) {
            return (
              <Link href={`hashtag/${v.slice(1)}`} key={i}>
                <a>{v}</a>
              </Link>
            );
          }
          return v;
        })}
    </div>
  );
};

export default PostCardContent;
