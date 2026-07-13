"use client";

import { useEffect, useId, useRef, useState } from "react";

type ServiceOption = {
  id: number;
  title: string;
};

type ServiceDropdownProps = {
  name?: string;
  services: ServiceOption[];
  placeholder?: string;
};

export default function ServiceDropdown({
  name = "service",
  services,
  placeholder = "Select a service",
}: ServiceDropdownProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  const selected = services.find((service) => service.title === value);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
        setActiveIndex(-1);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        setActiveIndex(-1);
      }
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  function selectService(title: string) {
    setValue(title);
    setOpen(false);
    setActiveIndex(-1);
  }

  function onTriggerKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex(0);
    }
  }

  function onListKeyDown(event: React.KeyboardEvent<HTMLUListElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % services.length);
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => (index <= 0 ? services.length - 1 : index - 1));
    }
    if (event.key === "Enter" && activeIndex >= 0) {
      event.preventDefault();
      selectService(services[activeIndex].title);
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <input type="hidden" name={name} value={value} />

      <button
        type="button"
        className="input-field flex w-full items-center justify-between gap-3 text-left"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={onTriggerKeyDown}
      >
        <span className={selected ? "text-white" : "text-white/40"}>
          {selected?.title ?? placeholder}
        </span>
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className={`h-4 w-4 shrink-0 text-[var(--teal-bright)] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 7.5L10 12.5L15 7.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          tabIndex={-1}
          aria-activedescendant={activeIndex >= 0 ? `${listId}-option-${activeIndex}` : undefined}
          onKeyDown={onListKeyDown}
          className="absolute left-0 right-0 z-20 mt-2 max-h-64 overflow-auto border border-white/10 bg-[var(--ink)] py-2 shadow-[0_18px_50px_rgba(0,0,0,0.45)] outline-none"
        >
          {services.map((service, index) => {
            const isSelected = service.title === value;
            const isActive = index === activeIndex;

            return (
              <li
                key={service.id}
                id={`${listId}-option-${index}`}
                role="option"
                aria-selected={isSelected}
                className={`cursor-pointer px-4 py-3 text-sm transition ${
                  isSelected || isActive
                    ? "bg-[var(--teal)]/15 text-[var(--teal-bright)]"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => selectService(service.title)}
              >
                {service.title}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
