const copy = {
  zh: {
    pageTitle: "YAO | 瑶瑶 - Biotech, AI, Investing & Life in Australia",
    twinToast: "聊天功能会在下一版上线，先欢迎通过邮箱或微信联系我。",
    topicTitles: {
      ai: "AI",
      investing: "投资学习",
      biotech: "生物医药",
      australia: "澳洲生活",
      growth: "女性成长",
      education: "AI 时代教育"
    },
    topics: {
      ai: "从工具体验到行业变化，关注 AI 如何真正进入普通人的工作和生活。",
      investing: "从零开始学习投资，重视常识、风险意识和长期判断力。",
      biotech: "用生物医药背景拆解健康科技、诊断公司和转化机会。",
      australia: "记录在澳洲工作、生活、育儿，以及重新建立生活秩序的过程。",
      growth: "关注女性在身份、关系、职业和自我表达中的长期成长。",
      education: "观察 AI 时代教育如何变化，以及普通家庭如何做准备。"
    }
  },
  en: {
    pageTitle: "YAO | Yaoyao - Biotech, AI, Investing & Life in Australia",
    twinToast: "The chat feature will arrive in a future version. For now, feel free to contact me by email or WeChat.",
    topicTitles: {
      ai: "AI",
      investing: "Investing",
      biotech: "Biotech",
      australia: "Australia",
      growth: "Women's Growth",
      education: "Education"
    },
    topics: {
      ai: "From tool testing to industry shifts, I look at how AI enters everyday work and life.",
      investing: "Learning investing from the ground up with common sense, risk awareness, and long-term judgment.",
      biotech: "Using a biotech lens to unpack health tech, diagnostics companies, and translational opportunities.",
      australia: "Work, life, parenting, and the process of rebuilding a grounded life in Australia.",
      growth: "Women's long-term growth through identity, relationships, career choices, and self-expression.",
      education: "How education changes in the AI era, and how ordinary families can prepare."
    }
  }
};

const buttons = document.querySelectorAll(".lang-button");
const topicNodes = document.querySelectorAll("[data-topic]");
const topicTitleNodes = document.querySelectorAll("[data-topic-title]");
const twinButton = document.querySelector("[data-twin-button]");
const toast = document.querySelector("[data-toast]");
let toastTimer;

function setLanguage(lang) {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = copy[lang].pageTitle;
  document.body.dataset.langActive = lang;
  localStorage.setItem("yao-site-language", lang);

  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });

  topicNodes.forEach((node) => {
    const key = node.dataset.topic;
    node.textContent = copy[lang].topics[key];
  });

  topicTitleNodes.forEach((node) => {
    const key = node.dataset.topicTitle;
    node.textContent = copy[lang].topicTitles[key];
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

twinButton?.addEventListener("click", () => {
  const lang = document.body.dataset.langActive || "zh";
  toast.textContent = copy[lang].twinToast;
  toast.classList.add("is-visible");

  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 3600);
});

setLanguage(localStorage.getItem("yao-site-language") || "zh");
