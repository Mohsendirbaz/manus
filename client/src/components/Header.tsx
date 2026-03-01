import { Search, X } from "lucide-react";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export default function Header({ searchQuery, onSearchChange }: HeaderProps) {
  return (
    <header
      className="sticky top-0 z-40 border-b"
      style={{
        backgroundColor: "rgba(248, 247, 244, 0.95)",
        backdropFilter: "blur(12px)",
        borderColor: "#E8E5DF",
      }}
    >
      <div
        className="mx-auto px-4 lg:px-8 flex items-center justify-between h-16 gap-4"
        style={{ maxWidth: "1400px" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <div
            className="w-8 h-8 rounded flex items-center justify-center"
            style={{ backgroundColor: "#2D7D6F" }}
          >
            <span
              className="text-white text-xs font-bold"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              EPU
            </span>
          </div>
          <div className="hidden sm:block">
            <p
              className="text-sm font-semibold leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: "#2C2C2C" }}
            >
              EPU Strategy
            </p>
            <p
              className="text-xs leading-tight"
              style={{ fontFamily: "'Space Mono', monospace", color: "#9CA3AF", fontSize: "0.6rem" }}
            >
              Driverless H2 Autonomy Platform
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-xl relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
            style={{ color: "#9CA3AF" }}
          />
          <input
            type="text"
            placeholder="Search slides, topics, tags…"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-9 py-2 text-sm rounded-lg border outline-none transition-all"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              backgroundColor: "white",
              borderColor: "#E0DDD7",
              color: "#2C2C2C",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#2D7D6F";
              e.target.style.boxShadow = "0 0 0 3px rgba(45,125,111,0.12)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#E0DDD7";
              e.target.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
            }}
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <X className="w-3.5 h-3.5" style={{ color: "#9CA3AF" }} />
            </button>
          )}
        </div>

        {/* Stats */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <div className="text-right">
            <p
              className="text-xs font-semibold"
              style={{ fontFamily: "'Space Mono', monospace", color: "#2C2C2C" }}
            >
              30 Slides
            </p>
            <p
              className="text-xs"
              style={{ fontFamily: "'Space Mono', monospace", color: "#9CA3AF", fontSize: "0.6rem" }}
            >
              6 Sections
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
