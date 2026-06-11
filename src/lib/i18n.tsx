import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "vi" | "en";

type Dict = Record<string, { vi: string; en: string }>;

export const dict: Dict = {
  // Nav
  "nav.home": { vi: "Trang chủ", en: "Home" },
  "nav.about": { vi: "Về chúng tôi", en: "About" },
  "nav.services": { vi: "Dịch vụ", en: "Services" },
  "nav.industries": { vi: "Lĩnh vực", en: "Industries" },
  "nav.pricing": { vi: "Báo giá", en: "Pricing" },
  "nav.contact": { vi: "Liên hệ", en: "Contact" },
  "nav.cta": { vi: "Nhận báo giá", en: "Get a Quote" },

  // Hero
  "hero.eyebrow": { vi: "Đối tác giao tiếp doanh nghiệp toàn cầu", en: "Global Enterprise Communication Partner" },
  "hero.title1": { vi: "Chính xác", en: "Precision" },
  "hero.title2": { vi: "trong mọi cuộc đối thoại.", en: "In Every Conversation." },
  "hero.tagline": { vi: "Kết nối ngôn ngữ — Dẫn lối thành công.", en: "Connecting Languages. Leading Global Success." },
  "hero.sub": {
    vi: "Giải pháp phiên dịch chuyên nghiệp dành cho doanh nghiệp toàn cầu, hội nghị quốc tế, các cuộc họp cấp cao và truyền thông đa ngôn ngữ.",
    en: "Professional interpretation solutions for global businesses, conferences, executive meetings, and international communication.",
  },
  "hero.cta1": { vi: "Nhận báo giá ngay", en: "Get A Quote" },
  "hero.cta2": { vi: "Đặt lịch tư vấn", en: "Book Consultation" },
  "trust.nda": { vi: "Bảo mật NDA", en: "NDA Confidentiality" },
  "trust.support": { vi: "Hỗ trợ khẩn cấp 24/7", en: "24/7 Emergency Support" },
  "trust.specialized": { vi: "Phiên dịch chuyên ngành", en: "Industry-Specialized Interpreters" },
  "trust.nationwide": { vi: "Triển khai toàn quốc", en: "Nationwide Deployment" },

  // Partners
  "partners.title": { vi: "Đối tác chiến lược", en: "Trusted Partners" },

  // Problems
  "ps.eyebrow": { vi: "Vấn đề & Giải pháp", en: "Problems & Solutions" },
  "ps.title": { vi: "Vượt qua rào cản — Dẫn lối hợp tác toàn cầu", en: "Beyond Language Barriers, Toward Global Partnership" },
  "ps.problems": { vi: "Thách thức hiện tại", en: "Today's Challenges" },
  "ps.solutions": { vi: "Giải pháp Noble", en: "The Noble Solution" },
  "ps.p1": { vi: "Khoảng cách văn hoá trong giao tiếp quốc tế", en: "Cultural gaps in international dialogue" },
  "ps.p2": { vi: "Hiểu sai thuật ngữ kỹ thuật chuyên ngành", en: "Technical terminology misunderstandings" },
  "ps.p3": { vi: "Dịch vụ phân mảnh, nhiều nhà cung cấp", en: "Fragmented multi-vendor services" },
  "ps.p4": { vi: "Rủi ro trong giao tiếp cấp cao", en: "High-stakes communication risk" },
  "ps.p5": { vi: "Thiếu phối hợp khi triển khai sự kiện", en: "Lack of coordinated event execution" },
  "ps.s1": { vi: "Trí tuệ văn hoá & ngữ cảnh", en: "Cultural & contextual intelligence" },
  "ps.s2": { vi: "Phiên dịch chuyên gia theo ngành", en: "Industry-specialized interpreters" },
  "ps.s3": { vi: "Đồng hành truyền thông trọn gói", en: "Unified communication support" },
  "ps.s4": { vi: "Phong cách điều hành cấp giám đốc", en: "Executive-grade professionalism" },
  "ps.s5": { vi: "Quy trình triển khai bài bản, đáng tin cậy", en: "Reliable, structured deployment" },

  // Services
  "svc.eyebrow": { vi: "Dịch vụ", en: "Services" },
  "svc.title": { vi: "Giải pháp giao tiếp toàn diện cho doanh nghiệp", en: "Comprehensive Communication Solutions for Enterprises" },
  "svc.interp": { vi: "Dịch vụ Phiên dịch", en: "Interpretation Services" },
  "svc.interp.desc": {
    vi: "Đội ngũ phiên dịch viên cao cấp cho hội nghị, nhà máy, đàm phán điều hành và sự kiện quốc tế.",
    en: "Senior interpreters for conferences, factories, executive negotiations, and international events.",
  },
  "svc.translation": { vi: "Dịch vụ Biên dịch", en: "Translation Services" },
  "svc.translation.desc": {
    vi: "Biên dịch pháp lý, kỹ thuật, hợp đồng và tài liệu doanh nghiệp với độ chính xác tuyệt đối.",
    en: "Legal, technical, contractual and corporate translation with uncompromising accuracy.",
  },
  "svc.event": { vi: "Hỗ trợ Sự kiện & Doanh nghiệp", en: "Event & Business Support" },
  "svc.event.desc": {
    vi: "Điều phối hội nghị, kết nối B2B, hỗ trợ đoàn công tác và đồng hành kinh doanh quốc tế.",
    en: "Conference coordination, B2B matching, delegation assistance and international business support.",
  },
  "svc.learn": { vi: "Tìm hiểu thêm", en: "Learn more" },

  // Industries
  "ind.eyebrow": { vi: "Lĩnh vực", en: "Industries" },
  "ind.title": { vi: "Phục vụ những ngành đòi hỏi cao nhất", en: "Serving the World's Most Demanding Sectors" },

  // Why
  "why.eyebrow": { vi: "Tại sao chọn Noble", en: "Why Noble" },
  "why.title": { vi: "Tiêu chuẩn quốc tế. Niềm tin doanh nghiệp.", en: "International Standards. Enterprise Trust." },

  // Process
  "proc.eyebrow": { vi: "Quy trình", en: "Our Process" },
  "proc.title": { vi: "Quy trình triển khai cấp doanh nghiệp", en: "An Enterprise-Grade Workflow" },
  "proc.s1.t": { vi: "Khám phá nhu cầu", en: "Discovery" },
  "proc.s1.d": { vi: "Lắng nghe mục tiêu, ngữ cảnh và yêu cầu chuyên ngành.", en: "We listen to your goals, context, and specialty requirements." },
  "proc.s2.t": { vi: "Lựa chọn phiên dịch", en: "Interpreter Matching" },
  "proc.s2.d": { vi: "Ghép cặp chuyên gia phù hợp với ngành và cấp độ sự kiện.", en: "Matching domain experts to your industry and event level." },
  "proc.s3.t": { vi: "Triển khai", en: "Execution" },
  "proc.s3.d": { vi: "Phối hợp, chuẩn bị thuật ngữ và triển khai chuyên nghiệp.", en: "Coordination, terminology preparation, and flawless delivery." },
  "proc.s4.t": { vi: "Kiểm soát chất lượng", en: "Quality Follow-up" },
  "proc.s4.d": { vi: "Đánh giá, cải tiến và đồng hành dài hạn.", en: "Review, refinement and long-term partnership." },

  // Team
  "team.eyebrow": { vi: "Đội ngũ chuyên gia", en: "The Team" },
  "team.title": { vi: "Những bộ óc đứng sau hậu trường", en: "The Minds Behind the Scene" },
  "team.desc": {
    vi: "Đội ngũ phiên dịch viên cao cấp với kinh nghiệm hội nghị quốc tế, khả năng đa ngôn ngữ và sự chuẩn bị kỹ lưỡng cho mọi tình huống điều hành.",
    en: "A senior interpretation team with international conference experience, multilingual fluency, and meticulous preparation for every executive setting.",
  },

  // Pricing
  "price.eyebrow": { vi: "Giải pháp linh hoạt", en: "Flexible Solutions" },
  "price.title": { vi: "Giải pháp phiên dịch linh hoạt cho mọi nhu cầu doanh nghiệp", en: "Flexible Interpretation Solutions For Every Business Need" },
  "price.sub": {
    vi: "Dịch vụ phiên dịch chuyên nghiệp được tuỳ chỉnh cho hội nghị, nhà máy, cuộc họp điều hành và truyền thông kinh doanh quốc tế.",
    en: "Professional interpretation services customised for conferences, factories, executive meetings and international business communication.",
  },
  "price.p1.name": { vi: "Phiên dịch Tiêu chuẩn", en: "Standard Interpretation" },
  "price.p2.name": { vi: "Phiên dịch Chuyên nghiệp", en: "Professional Interpretation" },
  "price.p3.name": { vi: "Phiên dịch Cao cấp", en: "Executive Interpretation" },
  "price.popular": { vi: "Được đề xuất", en: "Recommended" },
  "price.from": { vi: "Báo giá tuỳ chỉnh", en: "Customised quotation" },
  "price.note": {
    vi: "Chi phí được tối ưu dựa trên chuyên ngành, quy mô sự kiện và yêu cầu phiên dịch.",
    en: "Pricing is customised based on event scale, industry specialisation, language requirements and complexity.",
  },
  "price.cta": { vi: "Liên hệ báo giá", en: "Request quotation" },

  // CTA
  "cta.title": { vi: "Cuộc đối thoại toàn cầu tiếp theo của bạn bắt đầu tại đây.", en: "Your Next Global Conversation Starts Here." },
  "cta.sub": {
    vi: "Hợp tác cùng Noble Interpretation để truyền thông đa ngôn ngữ chính xác, chuyên nghiệp và đáng tin cậy.",
    en: "Partner with Noble Interpretation for precise, professional and reliable multilingual communication.",
  },
  "cta.btn1": { vi: "Yêu cầu báo giá", en: "Request Quotation" },
  "cta.btn2": { vi: "Liên hệ ngay", en: "Contact Us" },

  // Footer
  "footer.tagline": { vi: "Đối tác phiên dịch & truyền thông doanh nghiệp toàn cầu.", en: "Global enterprise interpretation & communication partner." },
  "footer.office": { vi: "Văn phòng", en: "Office" },
  "footer.contact": { vi: "Liên hệ", en: "Contact" },
  "footer.nav": { vi: "Điều hướng", en: "Navigation" },
  "footer.hours": { vi: "Giờ làm việc", en: "Business hours" },
  "footer.hours.value": { vi: "Thứ Hai – Chủ Nhật · 24/7 hỗ trợ", en: "Mon – Sun · 24/7 support" },
  "footer.rights": { vi: "Bản quyền thuộc về Noble Interpretation.", en: "All rights reserved." },
};

interface I18nCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dict | string) => string;
}

const Ctx = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("vi");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("noble.lang") as Lang | null;
    if (stored === "vi" || stored === "en") setLang(stored);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("noble.lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string) => {
    const entry = dict[key as keyof typeof dict];
    if (!entry) return key;
    return entry[lang];
  };

  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
