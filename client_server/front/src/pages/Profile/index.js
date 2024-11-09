import React from 'react';
import { Card } from 'antd';

import maomao from "@/assets/images/profile.png"

const { Meta } = Card;



const ImageDescriptionCard = () => {
  return (
    <Card
      hoverable
      style={{ display: 'flex', alignItems: 'center', width: '100%', borderRadius: 8 }}
      cover={<img alt="example" src={maomao} style={{ width: '20%', objectFit: 'cover', borderRadius: 8 }} />}
    >
      <Meta title="Example Card" description="This is an example card description." style={{ flex: 1 }} />
    </Card>
  );
};

export default ImageDescriptionCard;