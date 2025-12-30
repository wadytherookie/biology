import React, { useState } from "react";
import "./App.css";

const kingdoms = [
  {
    name: "بدائيات (Archaea)",
    short: "كائنات دقيقة وحيدة الخلية تعيش في بيئات قاسية.",
    mini: "Microbes",
    long: `بدائيات هي كائنات دقيقة وحيدة الخلية تختلف عن البكتيريا الحقيقية. تعيش في بيئات قاسية مثل الينابيع الساخنة والبحيرات المالحة والبحار العميقة. تلعب دوراً مهماً في تدوير المواد العضوية والنيتروجين في الطبيعة. بعض الأنواع تستخدم الطاقة من التفاعلات الكيميائية بدلاً من التمثيل الضوئي. أمثلة مشهورة تشمل Methanogens التي تنتج الميثان، وHalophiles التي تعيش في بيئات مالحة للغاية. هي واحدة من أقدم الكائنات الحية على الأرض وتساعدنا على فهم تطور الحياة في الظروف القاسية.`,
  },
  {
    name: "البكتيريا (Bacteria)",
    short: "كائنات دقيقة وحيدة الخلية شائعة في كل مكان.",
    mini: "Microbes",
    long: `البكتيريا هي كائنات وحيدة الخلية موجودة في التربة والماء وأجسام الكائنات الحية. تقوم بالعديد من الوظائف المهمة مثل تحلل المواد العضوية، إنتاج الغذاء في التربة، والمساهمة في الهضم لدى الإنسان والحيوانات. تشمل أنواعاً مفيدة مثل Lactobacillus المستخدمة في الألبان المخمرة، وأنواع ضارة مثل Escherichia coli التي قد تسبب التسمم الغذائي. البكتيريا تلعب دوراً أساسياً في التوازن البيئي وتستخدم في العديد من التطبيقات الصناعية والطبية.`,
  },
  {
    name: "الطلائعيات (Protista)",
    short: "كائنات وحيدة الخلية تحتوي على نواة حقيقية.",
    mini: "Single-celled",
    long: `الطلائعيات هي كائنات وحيدة الخلية تحتوي على نواة حقيقية، وتشمل أنواعاً تقوم بالتمثيل الضوئي مثل الطحالب، وأنواعاً متحركة تتغذى على الكائنات الدقيقة الأخرى مثل الأميبا. تعيش في المياه العذبة والمالحة والرطوبة العالية. تلعب دوراً أساسياً في السلسلة الغذائية ودعم الحياة البحرية. أمثلة مشهورة: Euglena، Paramecium، وAmoeba. دراسة الطلائعيات تساعدنا على فهم تطور الخلايا وحقيقة التنوع البيولوجي في الكائنات الأولية.`,
  },
  {
    name: "الفطريات (Fungi)",
    short: "تشمل الخميرة والفطر والكائنات المتحللة.",
    mini: "Decomposers",
    long: `الفطريات كائنات متعددة الخلايا أو وحيدة الخلية تعتمد على تحلل المواد العضوية للحصول على الطاقة. تشمل الخميرة المستخدمة في الخبز والتخمير، والفطر مثل العيش الغراب، والفطريات المتحللة في الغابات. تلعب دوراً محورياً في إعادة تدوير العناصر الغذائية وتحليل المواد الميتة. بعض الفطريات مفيدة في صناعة الأدوية مثل Penicillium لإنتاج البنسلين، بينما بعض الأنواع تسبب الأمراض للنباتات والحيوانات.`,
  },
  {
    name: "النباتات (Plantae)",
    short: "كائنات متعددة الخلايا تقوم بالتمثيل الضوئي.",
    mini: "Producers",
    long: `النباتات كائنات متعددة الخلايا تنتج الغذاء بواسطة التمثيل الضوئي باستخدام الطاقة الشمسية. تشمل الأشجار، الأعشاب، الشجيرات، والطحالب الكبيرة. تلعب دوراً أساسياً في إنتاج الأكسجين والحفاظ على التوازن البيئي. أمثلة مشهورة: أشجار البلوط، عباد الشمس، القمح، والأرز. النباتات أيضاً مصدر للغذاء والدواء للإنسان والحيوان وتساعد في منع التعرية والحفاظ على التربة والمياه.`,
  },
  {
    name: "الحيوانات (Animalia)",
    short: "كائنات متعددة الخلايا وحركية.",
    mini: "Consumers",
    long: `الحيوانات كائنات متعددة الخلايا تتحرك وتتغذى على الكائنات الأخرى. تشمل الثدييات، الطيور، الزواحف، الأسماك، والحشرات. تلعب دوراً مهماً في السلسلة الغذائية ونقل الطاقة في النظم البيئية. أمثلة مشهورة: الأسد، النحل، الطيور المهاجرة، الأسماك المرجانية. الحيوانات تمتلك أجهزة حيوية متقدمة مثل الجهاز العصبي والهضمي والتنفسي، وتساهم في التوازن البيئي وإشباع احتياجات الإنسان من الغذاء والمنتجات الأخرى.`,
  },
];

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ fontFamily: "'Amiri', serif", direction: "rtl" }}>
      {/* Top section */}
      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "50px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.8rem", fontWeight: 400 }}>الممالك الستة</h1>
      </div>

      {/* Cards section */}
      <div
        style={{
          backgroundColor: "#fff",
          color: "#000",
          padding: "50px 20px",
          display: "grid",
          gridTemplateColumns: "repeat(5, 180px)",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {kingdoms.slice(0, 5).map((k, i) => (
          <div
            key={i}
            onClick={() => setSelected(k)}
            style={{
              backgroundColor: "#f5f5f5",
              color: "#000",
              padding: "15px",
              borderRadius: "10px",
              textAlign: "center",
              cursor: "pointer",
              fontWeight: 400,
              border: "1px solid #ccc",
              height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h2 style={{ marginBottom: "8px", fontWeight: 400, fontSize: "1.1rem" }}>
              {k.name}
            </h2>
            <p style={{ fontSize: "0.85rem", flexGrow: 1 }}>{k.short}</p>
            <p style={{ marginTop: "8px", fontSize: "0.75rem", color: "#555" }}>
              {k.mini}
            </p>
          </div>
        ))}
      </div>

      {/* Sixth card centered */}
      <div
        style={{
          backgroundColor: "#fff",
          color: "#000",
          padding: "50px 20px 80px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          onClick={() => setSelected(kingdoms[5])}
          style={{
            backgroundColor: "#f5f5f5",
            color: "#000",
            padding: "15px",
            borderRadius: "10px",
            textAlign: "center",
            cursor: "pointer",
            fontWeight: 400,
            width: "180px",
            height: "250px",
            border: "1px solid #ccc",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h2 style={{ marginBottom: "8px", fontWeight: 400, fontSize: "1.1rem" }}>
            {kingdoms[5].name}
          </h2>
          <p style={{ fontSize: "0.85rem", flexGrow: 1 }}>{kingdoms[5].short}</p>
          <p style={{ marginTop: "8px", fontSize: "0.75rem", color: "#555" }}>
            {kingdoms[5].mini}
          </p>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              padding: "35px",
              maxWidth: "650px",
              width: "90%",
              textAlign: "right",
              color: "#000",
              maxHeight: "80vh",
              overflowY: "auto",
            }}
          >
            <h2 style={{ marginBottom: "20px", fontWeight: 400 }}>{selected.name}</h2>
            <p style={{ lineHeight: "1.8", fontWeight: 400 }}>{selected.long}</p>
            <button
              onClick={() => setSelected(null)}
              style={{
                marginTop: "25px",
                padding: "10px 20px",
                backgroundColor: "#000",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: 400,
              }}
            >
              إغلاق
            </button>
          </div>
        </div>
      )}

      <footer
        style={{
          marginTop: "20px",
          textAlign: "left",
          color: "#000",
          fontWeight: 700,
          fontSize: "0.85rem",
          paddingLeft: "20px",
        }}
      >
        Made by Mohamed Alsharif
      </footer>
    </div>
  );
}

export default App;
