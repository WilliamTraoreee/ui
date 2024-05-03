import type { Meta, StoryObj } from "@storybook/react";
import { TreeView } from "./tree-view";

const meta = {
  title: "Tree View",
  component: TreeView,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TreeView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  args: {
    elements: [
      {
        title: "Development",
        prefix: "🖥️",
        menu: [
          {
            title: "New",
            icon: "i-ri:add-line",
            onItemClick: (e) => e.preventDefault(),
          },
          {
            title: "Edit",
            icon: "i-ri:edit-line",
            onItemClick: (e) => e.preventDefault(),
          },
          {
            title: "Delete",
            icon: "i-ri:delete-bin-line",
            onItemClick: (e) => e.preventDefault(),
          },
        ],
      },
      {
        title: "Stack",
        icon: "i-ri:stack-line",
        children: [
          {
            title: "Frontend",
            icon: "i-ri:terminal-window-line",
            children: [
              {
                title: "React",
                icon: "i-ri:reactjs-line",
                children: [
                  {
                    title: "React Native",
                    icon: "i-ri:reactjs-line",
                  },
                  {
                    title: "Next.js",
                    icon: "i-ri:reactjs-line",
                  },
                ],
              },
              {
                title: "Vue",
                icon: "i-ri:vuejs-line",
              },
              {
                title: "Angular",
                icon: "i-ri:angularjs-line",
              },
            ],
          },
          {
            title: "Backend",
            icon: "i-ri:terminal-window-line",
            children: [
              {
                title: "Node.js",
                icon: "i-ri:nodejs-line",
              },
              {
                title: "Django",
                icon: "i-ri:django-line",
              },
              {
                title: "Laravel",
                icon: "i-ri:laravel-line",
              },
            ],
          },
          {
            title: "Database",
            icon: "i-ri:terminal-window-line",
            children: [
              {
                title: "MongoDB",
                icon: "i-ri:mongodb-line",
              },
              {
                title: "PostgreSQL",
                icon: "i-ri:postgresql-line",
              },
              {
                title: "MySQL",
                icon: "i-ri:mysql-line",
              },
            ],
          },
        ],
      },
    ],
  },
};
