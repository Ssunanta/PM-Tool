window.config = {
  WEB_APP_URL: "",

  // 🔑 ตัวหลัก
  API_BASE_URL: "https://pmapi.ideatrade1.com/"
};

// alias รองรับโค้ดเดิม
window.config.API_BASE = window.config.API_BASE_URL;
window.config.baseURL  = window.config.API_BASE_URL;

// endpoints รวมไว้ที่เดียว
window.config.endpoints = {
  members: "/members",
  projects: "/projects",
  weeklyTemplates: "/weekly-templates",
  weeklyMeetings: "/weekly-meeting"
};
