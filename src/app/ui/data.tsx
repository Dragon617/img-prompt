import Link from "next/link";
import { BgColorsOutlined, ExperimentOutlined, ThunderboltOutlined, ToolOutlined } from "@ant-design/icons";

export const GITHUB_LINK = "https://github.com/Dragon617/img-prompt";
export const DISCORD_LINK = "https://discord.gg/PZTQfJ4GjX";
export const DISCORD_BADGE_SRC = "https://img.shields.io/discord/1048780149899939881?color=%2385c8c8&label=Discord&logo=discord&style=for-the-badge";

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
        AI Words
      </a>
    ),
    key: "aishort",
    icon: <ExperimentOutlined />,
  },
  {
    label: (
      <a href="https://tools.newzone.top/subtitle-translator" target="_blank" rel="noopener noreferrer">
        文本处理工具
      </a>
    ),
    key: "Tools",
    icon: <ToolOutlined />,
  },
];
