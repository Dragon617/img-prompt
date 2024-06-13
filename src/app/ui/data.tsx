import Link from "next/link";
import { BgColorsOutlined, ExperimentOutlined, ThunderboltOutlined, ToolOutlined } from "@ant-design/icons";

export const GITHUB_LINK = "https://github.com/Dragon617/img-prompt";

export const MENU_ITEMS = [
  {
    label: <Link href="/">IMGPrompt</Link>,
    key: "/",
    icon: <BgColorsOutlined />,
  },
  {
    label: (
      <a href="https://newzone.top/posts/2022-09-05-stable_diffusion_ai_painting.html" target="_blank" rel="noopener noreferrer">
        Stable Diffusion 入门教程
      </a>
    ),
    key: "LearnData",
    icon: <ThunderboltOutlined />,
  },
  {
    label: (
      <a href="https://words.aitoolss.cn/" target="_blank" rel="noopener noreferrer">
        ChatGPT Shortcut
      </a>
    ),
    key: "aishort",
    icon: <ExperimentOutlined />,
  },
  {
    label: (
      <a href="https://tools.newzone.top/json-translate" target="_blank" rel="noopener noreferrer">
        文本处理工具
      </a>
    ),
    key: "Tools",
    icon: <ToolOutlined />,
  },
];
