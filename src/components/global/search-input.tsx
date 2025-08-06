"use client"
import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchInput() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full cursor-pointer transition-colors"
      >
        <Search className="h-5 w-5" />
      </button>

      <input
        type="text"
        placeholder="Search..."
        className={`
          absolute right-0
          bg-white border border-gray-300 rounded-full pl-4 pr-10 py-2
          transition-all duration-300 ease-in-out
          ${isOpen ? "w-56 opacity-100 scale-100" : "w-0 opacity-0 scale-95 pointer-events-none"}
        `}
      />
    </div>
  );
}

