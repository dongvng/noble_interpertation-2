import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { useI18n, type Lang } from "@/lib/i18n";
import cta from "@/assets/cta-conference.jpg";

export function CTAContact() {
  const { t, lang } = useI18n();
  const L = lang as Lang;
  const [submitted, setSubmitted] = useState(false);

  const labels = {
    vi: {
      company: "Tên công ty", person: "Người liên hệ", email: "Email", phone: "Số điện thoại",
      service: "Dịch vụ cần", industry: "Lĩnh vực", date: "Ngày sự kiện", notes: "Yêu cầu thêm",
      submit: "Gửi yêu cầu", thanks: "Cảm ơn bạn — chúng tôi sẽ liên hệ trong vòng 2 giờ.",
    },
    en: {
      company: "Company name", person: "Contact person", email: "Email", phone: "Phone",
      service: "Service needed", industry: "Industry", date: "Event date", notes: "Additional requirements",
      submit: "Submit request", thanks: "Thank you — we'll be in touch within 2 hours.",
    },
  }[L];

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={cta} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-navy/80" />
      </div>
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] glow-orb-gold opacity-30" />

      <div className="container-lux relative z-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 lg:pt-8"
          >
            <div className="eyebrow mb-6">Noble · Contact</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ivory leading-[1.05] mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-lg text-ivory/75 leading-relaxed mb-10 max-w-lg">{t("cta.sub")}</p>

            <div className="space-y-5">
              {[
                { icon: Phone, label: "Hotline", value: "0924 866 899", href: "tel:0924866899" },
                { icon: Mail, label: "Email", value: "success@noble.edu.vn", href: "mailto:success@noble.edu.vn" },
                { icon: MapPin, label: L === "vi" ? "Văn phòng" : "Office", value: "Lotte Center Hanoi · 54 Liễu Giai, Ba Đình, Hà Nội" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="h-11 w-11 rounded-xl glass-panel flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-gold transition-all duration-500">
                    <c.icon className="h-5 w-5 text-gold group-hover:text-navy transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-gold/80 mb-1">{c.label}</div>
                    <div className="text-ivory group-hover:text-gold transition-colors">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <div className="glass-panel-strong rounded-3xl p-8 lg:p-10 shadow-luxury">
              {submitted ? (
                <div className="text-center py-20">
                  <div className="mx-auto h-16 w-16 rounded-full bg-gradient-gold flex items-center justify-center mb-6">
                    <ArrowRight className="h-8 w-8 text-navy" />
                  </div>
                  <h3 className="font-display text-2xl text-ivory mb-2">{labels.thanks}</h3>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label={labels.company} name="company" required />
                    <Field label={labels.person} name="person" required />
                    <Field label={labels.email} name="email" type="email" required />
                    <Field label={labels.phone} name="phone" type="tel" required />
                    <Field label={labels.service} name="service" />
                    <Field label={labels.industry} name="industry" />
                    <div className="sm:col-span-2">
                      <Field label={labels.date} name="date" type="date" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs uppercase tracking-wider text-ivory/60 mb-2">{labels.notes}</label>
                      <textarea
                        name="notes"
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 bg-gradient-gold text-navy font-semibold py-4 rounded-full hover:shadow-gold-glow transition-shadow duration-500"
                  >
                    {labels.submit}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-ivory/60 mb-2">
        {label}{required && <span className="text-gold ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
      />
    </div>
  );
}
