import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const fadeUpAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "easeInOut",
    },
  };
  return (
    <>
      <span id="about" className="anchor"></span>
      <section className="bg-white dark:bg-slate-900 py-10">
        <div className="container mx-auto">
          <motion.h2 variants={fadeUpAnimation} initial="hidden" whileInView="visible" exit="hidden" className="text-light dark:text-dark uppercase text-center lg:text-3xl text-2xl font-black ">
            About
          </motion.h2>
          <motion.p variants={fadeUpAnimation} initial="hidden" whileInView="visible" exit="hidden" className="max-w-3xl mx-auto text-lg break-words text-lightsec dark:text-dark px-5 py-10">
            私は、技術の進歩に関心を持ち、IT業界でのキャリアを築いてきました。

大学ではコンピュータサイエンスを専攻し、約3か月間のインターンシップを経験しました。その後、日系企業にて約3年半、ITエンジニアとしてWebシステムの開発・改修・テスト業務に携わってきました。

Java、JavaScript、PHPをはじめ、Spring Boot、React、TypeScript、Node.js、MySQLなどの技術を用いた開発経験があります。また、各種テストや進捗管理のサポートも担当してきました。

チームでのコミュニケーションを大切にし、仕様を正確に理解したうえで、使いやすく保守性の高いシステムを開発することを心がけています。

これまでの経験を活かしながら、新しい技術を積極的に学び、エンジニアとして成長し続けることを目指しています。
          </motion.p>
        </div>
      </section>
    </>
  );
}
