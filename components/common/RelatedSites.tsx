import React from 'react';
import { Layout, Row, Col, Space, Typography, Divider, Select } from 'antd'

// 유관기관
const GOV_SITES = [
  { label: '식품의약품안전처', value: 'https://www.mfds.go.kr' },
  { label: '의약품안전나라', value: 'https://nedrug.mfds.go.kr' },
  { label: '보건복지부', value: 'https://www.mohw.go.kr' },
];

// 관련단체
const ORG_SITES = [
  { label: '대한약사회', value: 'https://www.kpanet.or.kr' },
  { label: '한국제약바이오협회', value: 'http://www.kpbma.or.kr' },
  { label: '희귀필수의약품센터', value: 'https://www.kodc.or.kr' },
];

const RelatedSites = () => {
  const handleSelect = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="footer_related">
      <div className="container">
        <Row align="middle" justify="end" gutter={[12, 12]}>
          {/* 첫 번째 셀렉트 */}
          <Col xs={24} sm={12}>
            <div className="select_item">
              <label htmlFor="gov-site-select" className="sr_only">유관기관 바로가기</label>
              <Select
                id="gov-site-select"
                placeholder="유관기관 바로가기"
                style={{ width: '100%' }}
                options={GOV_SITES}
                onSelect={handleSelect}
                value={null}
                defaultActiveFirstOption={false}
              />
            </div>
          </Col>

          {/* 두 번째 셀렉트 */}
          <Col xs={24} sm={12}>
            <div className="select_item">
              <label htmlFor="org-site-select" className="sr_only">관련단체 바로가기</label>
              <Select
                id="org-site-select"
                placeholder="관련단체 바로가기"
                style={{ width: '100%' }}
                options={ORG_SITES}
                onSelect={handleSelect}
                value={null}
                defaultActiveFirstOption={false}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RelatedSites;