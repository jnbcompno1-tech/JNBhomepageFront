import Link from 'next/link';
import { PageIntro, s } from '@/components/Site';
export default function NotFound() { return <><PageIntro eyebrow="404 · PAGE NOT FOUND" title="페이지를 찾을 수 없습니다." text="주소를 다시 확인하시거나 홈에서 원하는 내용을 찾아주세요."/><div className={s.section}><Link className={s.button} href="/">홈으로 이동 ↗</Link></div></>; }
