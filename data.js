// data.js

const db = {
  "home": {
    "title": "أحدث الدروس والمقالات",
    "items": [
      {
        "id": 1,
        "title": "مقدمة شاملة إلى HTML",
        "type": "video",
        "description": "في هذا الدرس، نبدأ رحلتنا في عالم تطوير الويب بتعلم لغة HTML، وهي الهيكل الأساسي لأي صفحة ويب. سنتعرف على مفهوم الوسوم (Tags) والعناصر (Elements) وكيفية بناء صفحة بسيطة.",
        "thumbnail": "https://i.ytimg.com/vi/ok-plXXHlWw/maxresdefault.jpg",
        "videoUrl": "https://raw.githubusercontent.com/media-preload/assets/main/6501925-hd_1920_1080_25fps.mp4",
        "audioUrl": "1.mp3"
      },
      {
        "id": 2,
        "title": "أساسيات CSS لتصميم المواقع",
        "type": "video",
        "description": "بعد أن تعلمنا هيكل الصفحة، حان الوقت لنجعلها تبدو جميلة! في هذا الدرس، نستكشف أساسيات CSS وكيفية استخدامها لتغيير الألوان، الخطوط، التخطيط، والمزيد.",
        "thumbnail": "https://i.ytimg.com/vi/OEV8gMkCHXQ/maxresdefault.jpg",
        "videoUrl": "https://raw.githubusercontent.com/media-preload/assets/main/free-videos.mp4",
        "audioUrl": null // مثال على درس فيديو بدون ملف صوتي
      },
      {
        "id": 3,
        "title": "مقال: ما هي واجهة برمجة التطبيقات (API )؟",
        "type": "article",
        "description": "شرح مبسط لمفهوم الـ API وكيف أصبحت جزءاً لا يتجزأ من عالم البرمجة والتطبيقات الحديثة.",
        "thumbnail": "https://i.ytimg.com/vi/6-3I2A232vE/maxresdefault.jpg",
        "content": `
          <h1>ما هي واجهة برمجة التطبيقات (API )؟</h1>
          <p>تخيل أنك في مطعم. لديك قائمة طعام (Menu) تختار منها ما تريد، ثم يأتي النادل ليأخذ طلبك ويحضره لك من المطبخ. أنت لا تعرف كيف يتم طهي الطعام، ولا تحتاج إلى معرفة ذلك. كل ما يهمك هو أنك طلبت شيئًا وحصلت عليه.</p>
          <p>في عالم البرمجة، <strong>الـ API (Application Programming Interface) هو النادل.</strong></p>
          <p>إنه الوسيط الذي يسمح لتطبيقين بالتحدث مع بعضهما البعض. عندما تستخدم تطبيقًا مثل فيسبوك، فإن التطبيق يتصل بخوادم فيسبوك عبر واجهات API لجلب منشوراتك ورسائلك.</p>
          <h2>لماذا هي مهمة؟</h2>
          <ul>
            <li><strong>الكفاءة:</strong> لا حاجة لإعادة بناء كل شيء من الصفر. يمكنك استخدام وظائف جاهزة.</li>
            <li><strong>الأمان:</strong> لا تكشف تفاصيل نظامك الداخلي. أنت فقط تعرض الوظائف التي تسمح بها.</li>
            <li><strong>التكامل:</strong> تسمح بربط خدمات مختلفة معًا، مثل عرض خريطة جوجل داخل تطبيقك.</li>
          </ul>
        `
      },
      {
        "id": 4,
        "title": "درس JavaScript من يوتيوب",
        "type": "youtube",
        "description": "هذا الدرس يتم عرضه مباشرة من منصة يوتيوب، مع توفير خيار الاستماع كبودكاست لمن يفضل ذلك.",
        "thumbnail": "https://i.ytimg.com/vi/tlkgbwmN9mQ/maxresdefault.jpg",
        "videoId": "tlkgbwmN9mQ",
        "audioUrl": "https://raw.githubusercontent.com/media-preload/assets/main/sample.mp3"
      }
    ]
  },
  "paths": {
    "title": "مسارات التعلم",
    "items": [
      {
        "id": 101,
        "title": "مسار تطوير الواجهات الأمامية (Frontend )",
        "description": "تعلم كل ما تحتاجه لبناء واجهات مستخدم تفاعلية وجميلة، من HTML و CSS إلى JavaScript.",
        "thumbnail": "https://www.ryadel.com/wp-content/uploads/2022/01/frontend-development-1200.jpg"
      },
      {
        "id": 102,
        "title": "مسار تطوير الواجهات الخلفية (Backend )",
        "description": "اكتشف عالم الخوادم وقواعد البيانات والمنطق الذي يحرك التطبيقات.",
        "thumbnail": "https://www.simplilearn.com/ice9/free_resources_article_thumb/Backend_Development_-_Tools_and_Technologies.jpg"
      }
    ]
  },
  "flashcards": {
    "title": "بطاقات المراجعة السريعة",
    "items": [
      { "question": "ما هي اللغة التي تستخدم لهيكلة صفحات الويب؟", "answer": "HTML" },
      { "question": "ما هي وظيفة CSS؟", "answer": "تنسيق وتصميم مظهر صفحات الويب." },
      { "question": "ما هو العنصر الذي يمثل أكبر عنوان في HTML؟", "answer": "<h1>" },
      { "question": "ما هي الخاصية التي تغير لون خلفية العنصر في CSS؟", "answer": "background-color" }
    ]
  }
};

function findLessonById(id ) {
    return db.home.items.find(item => item.id === id);
}
