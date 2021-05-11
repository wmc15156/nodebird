import AppLayout from '../components/AppLayout';
import { useSelector } from 'react-redux';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';

const Home = () => {
  const { me } = useSelector((state) => state?.user);
  const { mainPosts } = useSelector((state) => state?.post);

  return (
    <div>
      {me && <PostForm />}
      {mainPosts.map((post, i) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
