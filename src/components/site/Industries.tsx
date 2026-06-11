import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import manufacturing from "@/assets/industry-manufacturing.jpg";
import finance from "@/assets/industry-finance.jpg";
import government from "@/assets/industry-government.jpg";
import healthcare from "@/assets/industry-healthcare.jpg";
import tech from "@/assets/industry-tech.jpg";
import energy from "@/assets/industry-energy.jpg";

const industries = [
  { img: manufacturing, vi: "Sản xuất", en: "Manufacturing", descVi: "Phiên dịch nhà máy & vận hành kỹ thuật.", descEn: "Factory floor & technical operations." },
  { img: finance, vi: "Tài chính", en: "Finance", descVi: "Đàm phán đầu tư & phân tích tài chính.", descEn: "Investment negotiations & financial analysis." },
  { img: government, vi: "Chính phủ & FDI", en: "Government & FDI", descVi: "Đoàn ngoại giao và đầu tư quốc tế.", descEn: "Diplomatic and FDI delegations." },
  { img: healthcare, vi: "Y tế", en: "Healthcare", descVi: "Hội nghị y khoa & lâm sàng quốc tế.", descEn: "Medical conferences & clinical settings." },
  { img: tech, vi: "Công nghệ", en: "Technology", descVi: "Sự kiện ra mắt & hợp tác R&D.", descEn: "Product launches & R&D partnerships." },
  { img: energy, vi: "Năng lượng", en: "Energy", descVi: "Dự án năng lượng & cơ sở hạ tầng.", descEn: "Energy projects & infrastructure." },
];

export function Industries() {
  const { t, lang } = useI18n();
  return (
    <section id="industries" className="relative py-32 bg-gradient-navy-deep">
      <div className="container-lux">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <div className="eyebrow mb-4">{t("ind.eyebrow")}</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ivory leading-[1.05]">
            {t("ind.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((it, i) => (
            <motion.div
              key={it.en}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer ${i === 0 ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""}`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[640px]" : "aspect-[4/5]"}`}>
                <img
                  src={it.img}
                  alt={it.en}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className={`font-display font-bold text-ivory mb-2 ${i === 0 ? "text-4xl lg:text-5xl" : "text-2xl"}`}>
                  {lang === "vi" ? it.vi : it.en}
                </div>
                <div className="text-sm text-ivory/70 max-w-xs">{lang === "vi" ? it.descVi : it.descEn}</div>
                <div className="mt-4 h-px w-12 bg-gold transition-all duration-500 group-hover:w-24" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
