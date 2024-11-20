import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDownIcon } from '@radix-ui/themes'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@/redux/store'
import { cn } from "@/lib/utils";

interface DropdownItem {
  label: string
  href: string
}

interface DropdownProps {
  label: string
  items: DropdownItem[]
  className?: string
}

export default function NavbarDropdown({ label, items, className }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // const isDarkMode = true;
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const [mobileMenuOpen, setMobileMenu] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(`flex items-center space-x-1 px-3 py-2 text-sm font-medium
          ${isDarkMode ? 'text-gray-200 hover:text-gray-100 bg-black' : 'text-gray-700 hover:text-gray-900 bg-white'}
          focus:outline-none`, className)}
      >
        <span>{label}</span>
        <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg ring-1 ring-opacity-5 py-1
            ${isDarkMode ? 'bg-gray-800 text-gray-200 ring-white' : 'bg-white text-gray-700 ring-black'}`}
        >
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`block px-4 py-2 text-sm 
                ${isDarkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-100 text-black'} `}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
