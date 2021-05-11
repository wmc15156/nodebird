import { Button, Card, List } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import { VFC } from 'react';

type Info = {
  nickname: string;
};

type Props = {
  header: string;
  data: Info[];
};

const FollowList: VFC<Props> = ({ header, data }) => {
  return (
    <List
      style={{ marginBottom: '20px' }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{header}</div>}
      loadMore={
        <div style={{ textAlign: 'center', margin: '10px 0' }}>
          <Button>더보기</Button>
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ marginTop: '20px' }}>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};

export default FollowList;
