import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    period: "2021.08 — 2022.03",
    title: "WordPressサイト開発（保守・画面開発）",
    summary: "Webページ作成・保守、PHPテーマ／テンプレート修正、レイアウト改善、不具合修正、単体テストを担当。",
    stack: "PHP / JavaScript / HTML / CSS / WordPress / MySQL",
  },
  {
    period: "2022.04 — 2023.02",
    title: "医療法人向け既存Webシステム改修",
    summary: "Spring Bootによるバックエンド実装、新規ページ、Admin画面のデータ編集、機能追加、単体テストを担当。",
    stack: "Java / Spring Boot / JavaScript / MySQL",
  },
  {
    period: "2023.03 — 2023.12",
    title: "企業向け採用サイト開発",
    summary: "求人掲載、企業情報編集、応募フォーム、問い合わせフォーム、データベース処理、単体・結合テストを担当。",
    stack: "Java / React / Spring Boot / JavaScript / MySQL",
  },
  {
    period: "2024.01 — 2024.05",
    title: "ウェブサイトURL検証自動化プロジェクト",
    summary: "URL・HTTPステータス検証、404・接続エラー検出、検証結果レポートの自動生成を実装。",
    stack: "TypeScript / Node.js / Playwright",
  },
  {
    period: "2024.06 — 2025.02",
    title: "クリニック向け情報管理Webシステム",
    summary: "患者情報の登録・更新・削除、予約日時の重複チェック、データ管理、単体テスト、不具合修正を担当。",
    stack: "Java / Spring Boot / JavaScript / MySQL",
  },
];

const viewport = { once: true, amount: 0.12, margin: "0px 0px -8% 0px" };
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const cardAnimation = {
  hidden: { opacity: 0, y: 28 },
  visible: (index) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: index * 0.08, ease: "easeOut" } }),
};

export default function CareerSection() {
  return (
    <>
      <span id="career" className="anchor"></span>
      <section className="bg-white dark:bg-slate-900 py-10">
        <div className="container mx-auto px-5">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="text-light dark:text-dark uppercase text-center lg:text-3xl text-2xl font-black">
            Career
          </motion.h2>
          {/* <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="text-center text-lightsec dark:text-darksec mt-3">
            職歴・実務経験
          </motion.p> */}

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="max-w-5xl mx-auto mt-10">
            <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-5 lg:p-7">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-light dark:text-dark">Qualy Myanmar Co., Ltd.</h3>
                  <p className="text-lightsec dark:text-darksec mt-1">IT Engineer / 正社員</p>
                </div>
                <p className="font-semibold text-light dark:text-dark">2021.08 — 2025.02</p>
              </div>
              <p className="text-lightsec dark:text-darksec mt-5 leading-8">
                Webシステムの開発・改修・テストを担当しました。バックエンド処理の実装を得意分野とし、Java、JavaScript、PHPを中心に、React、TypeScript、Spring Boot、MySQLなどを使用しています。
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {["Java ◎", "JavaScript ◎", "PHP ◎", "TypeScript ○", "React ○", "Spring Boot ◎", "MySQL ◎"].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-sky-50 text-sky-700 dark:bg-slate-800 dark:text-sky-300 text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="max-w-5xl mx-auto mt-6 grid gap-4">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                custom={index}
                variants={cardAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="rounded-xl border border-slate-200 dark:border-slate-700 p-5 hover:shadow-sm transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                  <p className="text-sm font-bold text-sky-700 dark:text-sky-300 lg:w-36 shrink-0">{project.period}</p>
                  <div>
                    <h3 className="text-lg font-bold text-light dark:text-dark">{project.title}</h3>
                    <p className="text-lightsec dark:text-darksec mt-2 leading-7">{project.summary}</p>
                    <p className="text-sm text-lightsec dark:text-darksec mt-3"><span className="font-bold">使用技術：</span>{project.stack}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
