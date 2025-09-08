// data.js

const db = {
  "home": {
    "title": "أحدث الدروس",
    "items": [
      // --- فيديو يوتيوب جديد ---
      {
        "id": 4, "title": "درس من يوتيوب (مثال )", "type": "youtube",
        "description": "هذا الدرس يتم عرضه مباشرة من منصة يوتيوب.",
        "thumbnail": "https://i.ytimg.com/vi/tlkgbwmN9mQ/maxresdefault.jpg", // يمكنك جلب الصورة المصغرة من يوتيوب
        "videoId": "tlkgbwmN9mQ" // <-- هذا هو الحقل الجديد والمهم
      },
      // --- الدروس القديمة ---
      {
        "id": 1, "title": "مقدمة إلى HTML", "type": "video",
        "description": "هيكل صفحات الويب.",
        "thumbnail": "https://i.ytimg.com/vi/ok-plXXHlWw/maxresdefault.jpg",
        "videoUrl": "https://raw.githubusercontent.com/media-preload/assets/main/6501925-hd_1920_1080_25fps.mp4"
      },
      {
        "id": 2, "title": "أساسيات CSS", "type": "video",
        "description": "تنسيق صفحات الويب وجعلها جميلة.",
        "thumbnail": "https://i.ytimg.com/vi/OEV8gMkCHXQ/maxresdefault.jpg",
        "videoUrl": "https://raw.githubusercontent.com/media-preload/assets/main/free-videos.mp4"
      },
      {
        "id": 3, "title": "ما هو الـ State؟", "type": "article",
        "description": "مفهوم أساسي في المكتبات الحديثة.",
        "thumbnail": "https://i.ytimg.com/vi/6-3I2A232vE/maxresdefault.jpg",
        "content": "<h1>ما هو الـ State؟</h1><p>الـ State هو كائن JavaScript يمثل أجزاء من التطبيق يمكن أن تتغير...</p>"
      }
    ]
  },
  "paths": { /* ... باقي البيانات كما هي ... */ },
  "flashcards": { /* ... باقي البيانات كما هي ... */ }
};

function findLessonById(id ) {
    return db.home.items.find(item => item.id === id);
}
