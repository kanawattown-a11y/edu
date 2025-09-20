// data.js

const db = {
  "home": {
    "title": "أحدث الدروس والمقالات",
    "items": [
      {
  "id": 1,
  "title": "فيديو: مقدمة في تكنولوجيا المعلومات",
  "type": "youtube",
  "description": "شرح تمهيدي ومبسط لمفهوم تكنولوجيا المعلومات وأساسياتها، من تقديم وتحرير شهد أبو سعد، لاستكشاف هذا المجال الحيوي.",
  "thumbnail": "https://i.ytimg.com/vi/OSi-AifK3TE/maxresdefault.jpg",
  "videoId": "OSi-AifK3TE",
  "audioUrl": "https://raw.githubusercontent.com/media-preload/assets/main/sample.mp3",

  "content": "<h1>مقدمة في تكنولوجيا المعلومات</h1><p>هل تساءلت يومًا ما هي <strong>تكنولوجيا المعلومات (IT )</strong> وكيف أصبحت جزءًا أساسيًا من حياتنا اليومية وأعمالنا؟ في هذا الفيديو، تقدم لنا <strong>شهد أبو سعد</strong> مدخلاً شاملاً ومبسطًا لهذا العالم المثير.</p><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/OSi-AifK3TE?si=gzcJCMGJU0t9ZGri\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe><p>يبدأ الفيديو بتعريف مفهوم تكنولوجيا المعلومات، موضحًا أنها تشمل استخدام أجهزة الكمبيوتر والشبكات والبرمجيات لإنشاء ومعالجة وتخزين وتبادل كافة أشكال البيانات الإلكترونية.</p><h2>ماذا ستتعلم في هذا الفيديو؟</h2><ul><li><strong>تعريف تكنولوجيا المعلومات:</strong> فهم المعنى الحقيقي للمصطلح وما يغطيه من تقنيات.</li><li><strong>المكونات الأساسية:</strong> نظرة على الأجهزة (Hardware ) والبرمجيات (Software) التي تشكل أساس أي نظام تكنولوجي.</li><li><strong>أهمية المجال:</strong> استكشاف لماذا أصبحت تكنولوجيا المعلومات ضرورية في كل المجالات المهنية والعلمية اليوم.</li><li><strong>مقدمة للمفاهيم المتقدمة:</strong> تمهيد لمواضيع مثل الشبكات، قواعد البيانات، والأمن السيبراني التي سيتم تناولها في دروس لاحقة.</li></ul><p>هذا الفيديو هو نقطة انطلاق ممتازة لأي شخص يرغب في دخول عالم التكنولوجيا وفهم كيفية عمل الأدوات الرقمية التي نستخدمها كل يوم.</p>"

}

     
    ]
  },
  "flashcards": {
    "title": "بطاقات المراجعة السريعة",
    "items": [
      { "question": "ما هي اللغة التي تستخدم لهيكلة صفحات الويب؟", "answer": "HTML" },
      { "question": "ما هي وظيفة CSS؟", "answer": "تنسيق وتصميم مظهر صفحات الويب." },
      { "question": "ما هي الخاصية التي تغير لون خلفية العنصر في CSS؟", "answer": "background-color" }
    ]
  }
};

function findLessonById(id ) {
    return db.home.items.find(item => item.id === id);
}




