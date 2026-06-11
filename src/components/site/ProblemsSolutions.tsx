import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function ProblemsSolutions() {
  const { t } = useI18n();
  const problems = ["ps.p1", "ps.p2", "ps.p3", "ps.p4", "ps.p5"];
  const solutions = ["ps.s1", "ps.s2", "ps.s3", "ps.s4", "ps.s5"];

  return (
    <section id="about" className="relative py-32 bg-gradient-navy-deep overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] glow-orb-gold opacity-20" />
      <div className="container-lux relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="eyebrow mb-4">{t("ps.eyebrow")}</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ivory leading-tight">
            {t("ps.title")}
          </h2>
          <div className="gold-divider mt-8 w-32 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-panel rounded-3xl p-10 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-full bg-destructive/20 flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-destructive" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-ivory">{t("ps.problems")}</h3>
            </div>
            <ul className="space-y-5">
              {problems.map((p, i) => (
                <li key={p} className="flex gap-4 group">
                  <span className="font-display text-gold/60 text-sm font-mono mt-1">0{i + 1}</span>
                  <span className="text-ivory/80 leading-relaxed group-hover:text-ivory transition-colors">{t(p)}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative rounded-3xl p-10 bg-gradient-to-br from-navy-exec to-navy-slate border border-gold/20 shadow-luxury overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 glow-orb-gold opacity-50" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-ivory">{t("ps.solutions")}</h3>
              </div>
              <ul className="space-y-5">
                {solutions.map((p, i) => (
                  <li key={p} className="flex gap-4 group">
                    <span className="font-display text-gold text-sm font-mono mt-1">0{i + 1}</span>
                    <span className="text-ivory/85 leading-relaxed group-hover:text-gold transition-colors">{t(p)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
