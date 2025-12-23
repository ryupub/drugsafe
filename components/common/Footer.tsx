import { Layout, Row, Col, Space, Typography, Divider } from 'antd'
import { Link } from 'react-router-dom'
import RelatedSites from './RelatedSites';

const { Footer: AntFooter } = Layout
const { Text, Link: AntLink } = Typography

const FOOTER_INFO_LINKS = [
  {
    key: 'cctv',
    label: '고정형 영상정보처리기기 운영∙관리방침',
    href: 'https://www.drugsafe.or.kr/iwt/ds/ko/member/EgovImgInform.do',
  },
  {
    key: 'email-deny',
    label: '이메일무단수집거부',
    href: 'https://www.drugsafe.or.kr/iwt/ds/ko/member/EgovDenialEmailCollect.do',
  },
  {
    key: 'location',
    label: '찾아오시는 길',
    href: 'https://www.drugsafe.or.kr/iwt/ds/ko/introduction/EgovLocation.do',
  },
]

const FOOTER_LEGAL_LINKS = [
  {
    key: 'privacy',
    label: '개인정보처리방침',
    href: 'https://www.drugsafe.or.kr/iwt/ds/ko/member/EgovPrivacyAgreement.do',
  },
  {
    key: 'terms',
    label: '이용약관',
    href: 'https://www.drugsafe.or.kr/iwt/ds/ko/member/EgovUserAgreement.do',
  },
]

const FOOTER_SNS_LINKS = [
  {
    key: 'youtube',
    label: '유튜브',
    href: 'https://www.youtube.com/@drugsafe_official/featured',
    className: 'sns_youtube',
  },
  {
    key: 'instagram',
    label: '인스타그램',
    href: 'https://www.instagram.com/drugsafe_official/',
    className: 'sns_instagram',
  },
  {
    key: 'blog',
    label: '블로그',
    href: 'https://blog.naver.com/drugsafe_official',
    className: 'sns_blog',
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <RelatedSites />
      <div className="container">
        <Row align="middle" justify="space-between" gutter={[12, 12]} className="footer_logo">
          <Col>
            <Link to="/" aria-label="한국의약품안전관리원 홈">
              <img
                src="/img/footer_logo.png"
                alt="KIDS 한국의약품안전관리원"
                style={{
                  cursor: 'pointer',
                }}
              />
            </Link>
          </Col>
        </Row>

        {/* 주소 , 정책 링크 */}        
        <Row gutter={[12, 12]} className="footer_corporate_info">
          <Col style={{ display: 'flex', flexDirection: 'column' }} className="info_txt">
            <Text className="address">경기도 안양시 동안구 부림로 169번길 30 5층 한국의약품안전관리원</Text>
            <Text>사업자등록번호 101-82-21134</Text>
            <Text>대표전화 02-2172-6700</Text>
            <Text>팩스 02-2172-6701</Text>
          </Col>
          <Col style={{ display: 'flex', flexDirection: 'column' }} className="info_link">
            <Space size={12} wrap>
              {FOOTER_INFO_LINKS.map((item) => (
                <AntLink
                  key={item.key}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </AntLink>
              ))}
            </Space>
            <Space size={12} wrap>
              {FOOTER_LEGAL_LINKS.map((item) => (
                <AntLink
                  key={item.key}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </AntLink>
              ))}
            </Space>
          </Col>
        </Row>

        {/* SNS 링크 */}
        <Row className="footer_sns_link">
          <Col>
            <Space size={12} wrap>
              {FOOTER_SNS_LINKS.map((item) => (
                <AntLink
                  key={item.key}
                  href={item.href}
                  // className={item.className}
                  className={`sns_item ${item.key}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{item.label}</span>
                </AntLink>
              ))}
            </Space>
          </Col>
        </Row>

        {/* 정책 링크 , Copyright*/}
        <Row gutter={[12, 8]} className="footer_meta_info">
          <Col flex="auto">
            <Space size={12} wrap>
              {FOOTER_LEGAL_LINKS.map((item) => (
                <AntLink
                  key={item.key}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </AntLink>
              ))}
            </Space>
          </Col>
          <Col xs={24} md={24} className="copyright">
            <Text>
              Copyright © Korea Institute of Drug Safety &amp; Risk Management. All Rights Reserved.
            </Text>
          </Col>

          {/* (옵션) 데모/개발용 표기 원하면 유지 */}
          <Col xs={24}>
            <Text type="secondary">© {year}</Text>
          </Col>
        </Row>

      </div>
    </footer>
  )
}