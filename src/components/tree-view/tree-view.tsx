import { TreeView as TreeViewPrimitive } from "@ark-ui/react";
import { Button, Icon } from "../..";
import { Popover } from "../popover/popover.tsx";
import { MouseEventHandler } from "react";

type MenuItem = {
  title: string;
  icon?: string;
  link?: string;
  onItemClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

type TreeItem = {
  title: string;
  icon?: string;
  prefix?: string;
  link?: string;
  isCurrent?: boolean;
  onItemClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  children?: TreeItem[];
  menu?: MenuItem[];
};

interface Props {
  elements: TreeItem[];
}

export function TreeView(props: Props) {
  const { elements } = props;

  return (
    <TreeViewPrimitive.Root>
      <TreeViewPrimitive.Tree className="list-none grid grid-cols-1 gap-1">
        {elements.map((element, index) => {
          const isSingle = !element.children;

          if (isSingle) {
            return <SingleBranch {...element} key={element.title + index} />;
          } else {
            return <BranchLevel1 {...element} key={element.title + index} />;
          }
        })}
      </TreeViewPrimitive.Tree>
    </TreeViewPrimitive.Root>
  );
}

function SingleBranch(props: TreeItem) {
  const { title, icon, prefix, link, isCurrent, menu, onItemClick } = props;

  return (
    <TreeViewPrimitive.Item
      id={title + Math.random()}
      className="group w-full"
      light="text-dark-500"
      light:hover="hover:bg-light-100"
      dark="text-light-500"
      dark:hover="hover:bg-dark-600"
      asChild
    >
      <Button
        link={link}
        className="!outline-none"
        contentClassName={`font-medium justify-between ${menu && menu.length ? "pr-1" : ""}`}
        onClick={onItemClick}
        variant={isCurrent ? "primary" : "transparent"}
        size="md"
      >
        <TreeViewPrimitive.ItemText className="flex gap-2 items-center">
          {prefix && <span>{prefix}</span>}
          {icon && <Icon name={icon} />}
          {title}
        </TreeViewPrimitive.ItemText>
        {menu && <MenuPopover menu={menu} />}
      </Button>
    </TreeViewPrimitive.Item>
  );
}

function BranchLevel1(props: TreeItem) {
  const { title, icon, prefix, link, isCurrent, menu, children, onItemClick } =
    props;

  return (
    <TreeViewPrimitive.Branch
      id={title + Math.random()}
      className="w-full block"
    >
      <TreeViewPrimitive.BranchControl
        className="group w-full"
        light="text-dark-500"
        light:hover="hover:bg-light-100"
        dark="text-light-500"
        dark:hover="hover:bg-dark-600"
        asChild
      >
        <Button
          link={link}
          className="!outline-none relative"
          contentClassName={`font-medium justify-between ${menu && menu.length ? "pr-1" : ""}`}
          onClick={onItemClick}
          variant={isCurrent ? "primary" : "transparent"}
          size="md"
        >
          <span
            className="absolute w-6 h-6 top-1 left-1 flex items-center justify-center z-1 rounded opacity-0 group-hover:opacity-100"
            dark="bg-dark-700"
            dark:hover="bg-dark-800"
            light="bg-light-200 text-light-600"
            light:hover="bg-light-300"
          >
            <Icon name="i-ri:arrow-right-s-line" />
          </span>
          <TreeViewPrimitive.BranchText className="flex gap-2 items-center">
            {prefix && <span>{prefix}</span>}
            {icon && <Icon name={icon} />}
            {title}
          </TreeViewPrimitive.BranchText>
          {menu && <MenuPopover menu={menu} />}
        </Button>
      </TreeViewPrimitive.BranchControl>

      <TreeViewPrimitive.BranchContent className="list-none pl-5 border-l border-l-solid dark:border-dark-400/50">
        {children ? (
          <>
            {children.map((child, index) => {
              return <BranchLevel2 {...child} key={index} />;
            })}
          </>
        ) : (
          <SingleBranch {...props} />
        )}
      </TreeViewPrimitive.BranchContent>
    </TreeViewPrimitive.Branch>
  );
}

function BranchLevel2(props: TreeItem) {
  const { title, icon, prefix, link, isCurrent, menu, children, onItemClick } =
    props;

  return (
    <TreeViewPrimitive.Branch
      id={title + Math.random()}
      className="w-full block"
    >
      <TreeViewPrimitive.BranchControl
        className="group w-full"
        light="text-dark-500"
        light:hover="hover:bg-light-100"
        dark="text-light-500"
        dark:hover="hover:bg-dark-600"
        asChild
      >
        <Button
          link={link}
          className="!outline-none relative"
          contentClassName={`font-medium justify-between ${menu && menu.length ? "pr-1" : ""}`}
          onClick={onItemClick}
          variant={isCurrent ? "primary" : "transparent"}
          size="md"
        >
          <span
            className="absolute w-6 h-6 top-1 left-1 flex items-center justify-center z-1 rounded opacity-0 group-hover:opacity-100"
            dark="bg-dark-700"
            dark:hover="bg-dark-800"
            light="bg-light-200 text-light-600"
            light:hover="bg-light-300"
          >
            <Icon name="i-ri:arrow-right-s-line" />
          </span>
          <TreeViewPrimitive.BranchText className="flex gap-2 items-center">
            {prefix && <span>{prefix}</span>}
            {icon && <Icon name={icon} />}
            {title}
          </TreeViewPrimitive.BranchText>
          {menu && <MenuPopover menu={menu} />}
        </Button>
      </TreeViewPrimitive.BranchControl>

      <TreeViewPrimitive.BranchContent className="list-none pl-5 border-l border-l-solid dark:border-dark-400/50">
        {children ? (
          <>
            {children.map((child, index) => {
              return <BranchLevel1 {...child} key={index} />;
            })}
          </>
        ) : (
          <SingleBranch {...props} />
        )}
      </TreeViewPrimitive.BranchContent>
    </TreeViewPrimitive.Branch>
  );
}

function MenuPopover(props: { menu: MenuItem[] }) {
  const { menu } = props;

  return (
    <Popover
      contentClassName="flex flex-col !p-1"
      trigger={
        <span
          size="sm"
          className="!focus:outline-none !outline-transparent opacity-0 group-hover:opacity-100 flex w-6 h-6 flex items-center justify-center transition-opacity duration-200 rounded"
          dark="bg-dark-700"
          dark:hover="bg-dark-800"
          light="bg-light-200 text-light-600"
          light:hover="bg-light-300"
        >
          <Icon name="i-ri:more-fill" />
        </span>
      }
    >
      {menu.map((item, index) => (
        <Button
          key={index}
          variant="transparent"
          size="sm"
          onClick={item.onItemClick}
          className="focus:outline-none"
          contentClassName="w-full gap-1 !justify-start !w-40"
        >
          {item.icon && (
            <Icon name={item.icon} className="dark:text-dark-200" />
          )}
          {item.title}
        </Button>
      ))}
    </Popover>
  );
}
