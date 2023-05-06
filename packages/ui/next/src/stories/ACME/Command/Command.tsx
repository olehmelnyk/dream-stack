import { useEffect, useState } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  Command as ShadcnCommand,
} from "~/shadcn/components/command";

export interface CommandProps {
  commandInputPlaceholderText: string;
  commandEmptyText: string;
  commands: {
    label: string;
    items: React.ReactNode[];
  }[];
}

export const Command = ({
  commandInputPlaceholderText,
  commandEmptyText,
  commands,
}: CommandProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && e.metaKey) {
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <p className="text-muted-foreground text-sm">
        Press{" "}
        <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <ShadcnCommand>
          <CommandInput placeholder={commandInputPlaceholderText} />
          <CommandList>
            <CommandEmpty>{commandEmptyText}</CommandEmpty>

            {commands.map((command) => (
              <>
                <CommandGroup heading={command.label} key={command.label}>
                  {command.items.map((item, index) => (
                    <CommandItem key={index}>{item}</CommandItem>
                  ))}
                </CommandGroup>
                <CommandSeparator />
              </>
            ))}
          </CommandList>
        </ShadcnCommand>
      </CommandDialog>
    </>
  );
};

Command.props = {
  commandInputPlaceholderText: "Type a command or search...",
  commandEmptyText: "No results found.",
};

export default Command;
