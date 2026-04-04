interface IconProps {
  className?: string;
  size?: number;
}

export const Icons = {
  Smartphone: ({ className = 'w-6 h-6', size = 24 }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  ),

  Gamepad2: ({ className = 'w-6 h-6' }: IconProps) => (
    // Levels/Escalera icon - for gamification
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 18h4v3H3z" />
      <path d="M9 12h4v9H9z" />
      <path d="M15 6h4v15h-4z" />
      <path d="M3 17H21" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  Zap: ({ className = 'w-6 h-6' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),

  Trophy: ({ className = 'w-6 h-6' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-2" />
      <path d="M6 9a6 6 0 0 0 12 0" />
      <path d="M9 5a3 3 0 0 0 6 0" />
    </svg>
  ),

  Cog: ({ className = 'w-6 h-6' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m2.12 2.12l4.24 4.24M1 12h6m6 0h6m-17.78 7.78l4.24-4.24m2.12-2.12l4.24-4.24" />
    </svg>
  ),

  Smartphone2: ({ className = 'w-6 h-6' }: IconProps) => (
    // Centralized apps icon
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="2" width="9" height="14" rx="1.5" />
      <rect x="15" y="4" width="7" height="10" rx="1" opacity="0.5" />
      <rect x="3" y="14" width="7" height="8" rx="1" opacity="0.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  ),

  BarChart3: ({ className = 'w-6 h-6' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  ),

  TrendingUp: ({ className = 'w-6 h-6' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 17" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),

  Menu: ({ className = 'w-6 h-6' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),

  X: ({ className = 'w-6 h-6' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),

  ChevronDown: ({ className = 'w-6 h-6' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),

  Heart: ({ className = 'w-6 h-6' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),

  Star: ({ className = 'w-6 h-6' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
      <polygon points="12 2 15.09 10.26 23.77 10.5 17.94 15.66 20.16 24.34 12 18.88 3.84 24.34 6.06 15.66 0.22 10.5 8.91 10.26 12 2" />
    </svg>
  ),

  Mail: ({ className = 'w-6 h-6' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),

  Send: ({ className = 'w-6 h-6' }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  ),
}
