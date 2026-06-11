import { motion } from "framer-motion";
import { Zap, Shield, Globe2, Award, Clock, Network } from "lucide-react";
import { useI18n, type Lang } from "@/lib/i18n";

const stats = [
  { v: "1,200+", vi: "Dự án hoàn thành", en: "Projects completed" },
  { v: "300+", vi: "Phiên dịch chuyên gia", en: "Expert interpreters" },
  { v: "40+", vi: "Lĩnh vực chuyên môn", en: "Industry domains" },
  { v: "<2h", vi: "Thời gian phản hồi", en: "Response time" },
];

const reasons = [
  { icon: Zap, vi: "Phản hồi tức thì", en: "Instant response", dvi: "Triển khai khẩn cấp 24/7 cho mọi tình huống.", den: "24/7 emergency deployment for any scenario." },
  { icon: Shield, vi: "Bảo mật tuyệt đối", en: "Absolute confidentiality", dvi: "Cam kết NDA cho mọi cuộc họp cấp cao.", den: "NDA-backed across every executive engagement." },
  { icon: Award, vi: "Chuyên gia ngành", en: "Domain experts", dvi: "Phiên dịch viên đào tạo chuyên sâu theo ngành.", den: "Interpreters trained for your specific industry." },
  { icon: Globe2, vi: "Triển khai toàn quốc", en: "Nationwide reach", dvi: "Hiện diện tại mọi tỉnh thành Việt Nam.", den: "Coverage across every Vietnamese province." },
  { icon: Clock, vi: "Đúng giờ tuyệt đối", en: "On-time excellence", dvi: "Quy trình kiểm soát chặt chẽ từng phút.", den: "Tightly controlled minute-by-minute delivery." },
  { icon: Network, vi: "Quy trình doanh nghiệp", en: "Enterprise workflow", dvi: "Phối hợp đa bộ phận cho dự án lớn.", den: "Multi-team coordination for large engagements." },
];

export function WhyNoble() {
  const { t, lang } = useI18n();
  const L = lang as Lang;
  return (
    <section className="relative py-32 bg-navy">
      <div className="container-lux">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20"
        >
          <div className="eyebrow mb-4">{t("why.eyebrow")}</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ivory leading-[1.05]">
            {t("why.title")}
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden mb-20 border border-white/10">
          {stats.map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-navy p-8 lg:p-10 hover:bg-navy-exec transition-colors duration-500"
            >
              <div className="font-display text-5xl lg:text-6xl font-bold text-gradient-gold">{s.v}</div>
              <div className="mt-3 text-sm text-ivory/65 uppercase tracking-wider">{L === "vi" ? s.vi : s.en}</div>
            </motion.div>
          ))}
        </div>

        {/* Reasons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.en}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="glass-panel rounded-2xl p-7 hover:border-gold/40 transition-all duration-500 group"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-gold/20 to-transparent border border-gold/30 flex items-center justify-center mb-5 group-hover:bg-gradient-gold transition-all duration-500">
                <r.icon className="h-5 w-5 text-gold group-hover:text-navy transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-ivory mb-2">{L === "vi" ? r.vi : r.en}</h3>
              <p className="text-sm text-ivory/65 leading-relaxed">{L === "vi" ? r.dvi : r.den}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
