import { Card, Popover, Button, Avatar, List, Comment } from 'antd';
import { EllipsisOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, RetweetOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import PostImages from '../PostImages';
import { useCallback, useState } from 'react';
import CommentForm from '../CommentForm';
import PostCardContent from '../PostCardContent';

const PostCard = ({ post }) => {
  const id = useSelector((state) => state?.user.me?.id);
  const { addPostDone } = useSelector((state) => state?.post);
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentOpened] = useState(false);

  const onToggleLike = useCallback(() => {
    setLiked((prevState) => !prevState);
  }, []);

  const onToggleComment = useCallback(() => {
    setCommentOpened((prevState) => !prevState);
  }, []);
  return (
    <div style={{ marginBottom: '10px' }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked ? (
            <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLike} />
          ),
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover
            ket="more"
            content={
              <Button.Group>
                {id && post.id === id ? (
                  <>
                    <Button>수정</Button>
                    <Button type="danger">삭제</Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={addPostDone && <PostCardContent postData={post.content} />}
        />
      </Card>
      {commentFormOpened && (
        <div>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment
                  content={item.content}
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                />
              </li>
            )}
          />
        </div>
      )}
      <CommentForm />
      {/*<Comments />*/}
    </div>
  );
};

export default PostCard;
