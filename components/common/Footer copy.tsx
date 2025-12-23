import { Layout, Row, Col, Space, Typography, Divider } from 'antd'
import { Link } from 'react-router-dom'

const { Footer: AntFooter } = Layout
const { Text, Link: AntLink } = Typography

const FOOTER_LINKS = [
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

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <AntFooter style={{ padding: 0, background: '#fff' }}>
      <div className="ds-container" style={{ padding: '20px 16px' }}>
        {/* 상단: 정책/안내 링크 */}
        <Row align="middle" justify="space-between" gutter={[12, 12]}>
          <Col flex="auto">
            <Space size={12} wrap>
              {FOOTER_LINKS.map((item) => (
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

          {/* 우측 KIDS 로고 (클릭 시 index 이동) */}
          <Col>
            <Link to="/" aria-label="한국의약품안전관리원 홈">
              <img
                src="/footer_kids_log.png"
                alt="KIDS 한국의약품안전관리원"
                style={{
                  height: 36,
                  cursor: 'pointer',
                }}
              />
            </Link>
          </Col>
        </Row>

        <Divider style={{ margin: '16px 0' }} />

        {/* 하단: 주소/연락처/사업자정보 */}
        <Row gutter={[12, 8]}>
          <Col xs={24} md={24}>
            <Text>
              경기도 안양시 동안구 부림로 169번길 30 5층 한국의약품안전관리원
            </Text>
          </Col>

          <Col xs={24} md={24}>
            <Text>
              사업자등록번호 101-82-21134&nbsp;&nbsp;대표전화 02-2172-6700&nbsp;&nbsp;팩스
              02-2172-6701
            </Text>
          </Col>

          <Col xs={24} md={24}>
            <Text type="secondary">
              Copyright © Korea Institute of Drug Safety &amp; Risk Management. All Rights Reserved.
            </Text>
          </Col>

          {/* (옵션) 데모/개발용 표기 원하면 유지 */}
          <Col xs={24}>
            <Text type="secondary">© {year}</Text>
          </Col>
        </Row>
      </div>
    </AntFooter>
  )
}